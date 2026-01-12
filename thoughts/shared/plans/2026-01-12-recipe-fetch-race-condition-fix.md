---
date: 2026-01-12T15:30:00+0000
author: Claude Code
git_commit: 838057dddd34243ab45d56ae6f859a5922332bf8
branch: main
repository: nosrecettes.ca
topic: "Fix Recipe Fetch Race Condition with Global Coordinator"
tags: [plan, implementation, race-condition, fetch-deduplication, performance, critical]
status: draft
related_research: thoughts/shared/research/2026-01-12-recipe-fetch-race-condition.md
priority: CRITICAL
---

# Fix Recipe Fetch Race Condition - Global Coordinator Implementation Plan

## Overview

Implement a global fetch coordinator to eliminate race conditions where multiple code paths simultaneously fetch `/recipes.json` (~4.9MB) when users land directly on recipe pages. The coordinator will deduplicate concurrent requests, cache in-flight promises, and provide optional progress tracking for the large file download.

**Priority**: CRITICAL - Must fix before production release. Affects majority of first-time visitors accessing recipes via direct links (primary use case).

## Current State Analysis

### The Problem

Three independent code paths fetch `/recipes.json` with **no coordination**:

1. **[RecipePage.tsx:55](src/pages/RecipePage.tsx#L55)** - `fetchRecipeFromNetwork(recipeSlug)`
   - Triggers: Direct URL access to `/recipe/:slug` when IndexedDB empty
   - Purpose: Network fallback to find single recipe
   - Behavior: Fetches full 4.9MB file, caches only the found recipe

2. **[useRecipes.ts:73](src/hooks/useRecipes.ts#L73)** - `fetchAndPopulate()`
   - Triggers: When `isRecipeDBPopulated()` returns false
   - Purpose: First-time population of IndexedDB
   - Behavior: Fetches full file, stores all recipes

3. **[recipeUpdates.ts:6](src/utils/recipeUpdates.ts#L6)** - `checkForRecipeUpdates()`
   - Triggers: On App mount ([App.tsx:37](src/App.tsx#L37)) and every 30 minutes ([App.tsx:45](src/App.tsx#L45))
   - Purpose: Periodic version check and update
   - Behavior: Fetches with `cache: 'no-store'`, shows toast on update

### Race Condition Scenario

**User Action**: Lands on `/recipe/poutine-classique` via Facebook link (first visit)

**What Happens**:
```
T+0ms:    User navigates to /recipe/poutine-classique
T+50ms:   App mounts → checkForRecipeUpdates() → FETCH #1 (/recipes.json)
T+100ms:  RecipePage mounts → fetchRecipeFromNetwork() → FETCH #2 (/recipes.json)

Result: TWO simultaneous 4.9MB downloads
```

### Current Error Handling (Inconsistent)

- **RecipePage**: Returns `null` on error, never throws
- **useRecipes**: Throws errors for caller to catch
- **recipeUpdates**: Returns `false` on error, never throws

### No Existing Coordination

- ❌ No mutex/semaphore
- ❌ No shared promise cache
- ❌ No request deduplication
- ❌ No AbortController usage
- ✅ IndexedDB transactions prevent data corruption (last writer wins)

## Desired End State

### Functional Requirements

1. **Single network request** when multiple callers fetch simultaneously
2. **Promise sharing** - concurrent callers await the same fetch operation
3. **5-second data cache** - repeated calls within 5s reuse data without re-fetching
4. **Progress tracking** - optional callback for download progress
5. **Standardized errors** - coordinator throws, callers handle consistently
6. **Cache busting** - update checks can force fresh fetch

### Verification Criteria

**Automated Verification**:
- Type checking passes: `npm run typecheck`
- Linting passes: `npm run lint`
- Build succeeds: `npm run build`
- Unit tests pass for coordinator logic

**Manual Verification**:
1. Open DevTools Network tab, clear IndexedDB
2. Navigate directly to `/recipe/poutine-classique`
3. **Verify**: Only ONE request to `/recipes.json` appears
4. Recipe displays correctly after load
5. Toast notification shows for recipe update (if version changed)
6. No console errors

**Performance Verification**:
1. Open DevTools Network tab, throttle to "Slow 3G"
2. Navigate to recipe page from fresh state
3. **Verify**: Progress events fire during download
4. **Verify**: Total download time reasonable for connection speed
5. **Verify**: No duplicate bandwidth usage

## What We're NOT Doing

1. **NOT implementing recipe-specific API endpoints** - still fetching full `recipes.json`
2. **NOT changing IndexedDB schema or transaction logic** - existing code works
3. **NOT adding service worker request interception** - app-level solution sufficient
4. **NOT implementing retry logic** - errors fail fast, let caller decide retry strategy
5. **NOT adding analytics or error tracking** - focus on deduplication only
6. **NOT changing toast notification logic** - callers still responsible for user feedback
7. **NOT implementing request cancellation** - no AbortController (can add later if needed)

## Implementation Approach

### Strategy: Module-Level Coordinator

**Pattern**: Follow existing `use-toast.ts` pattern with module-level state and listeners.

**Why Not Singleton Class**: Codebase uses functional/module patterns, not OOP singletons.

**Core Mechanism**:
```typescript
// Module-level state
let pendingFetch: Promise<RecipesJsonData> | null = null
let cachedData: { data: RecipesJsonData; timestamp: number } | null = null

// Main export
export async function fetchRecipes(options?: FetchOptions): Promise<RecipesJsonData>
```

**Flow**:
1. Caller invokes `fetchRecipes()`
2. If `pendingFetch` exists → return existing promise (deduplication)
3. If `cachedData` exists and fresh → return cached data
4. Otherwise → start new fetch, store promise in `pendingFetch`
5. On resolution → cache data, clear `pendingFetch`
6. On error → clear `pendingFetch`, throw error

### File Changes Overview

**New Files**:
- `src/utils/recipeCoordinator.ts` - Coordinator implementation
- `src/utils/recipeCoordinator.test.ts` - Unit tests (optional, if test infrastructure exists)

**Modified Files**:
- `src/pages/RecipePage.tsx` - Replace direct fetch with coordinator
- `src/hooks/useRecipes.ts` - Replace direct fetch with coordinator
- `src/utils/recipeUpdates.ts` - Replace direct fetch with coordinator

**Total Changes**: ~150 lines added, ~30 lines modified

---

## Phase 1: Create Global Fetch Coordinator

### Overview
Implement the core coordinator utility with promise caching, data caching, and progress tracking.

### Changes Required

#### 1. Create Coordinator Utility

**File**: `src/utils/recipeCoordinator.ts`

**Implementation**:

```typescript
import { Recipe } from '@/types/recipe'

/**
 * Structure of /recipes.json
 */
export interface RecipesJsonData {
  version: string
  timestamp: number
  count: number
  recipes: Recipe[]
}

/**
 * Options for fetching recipes
 */
export interface FetchRecipesOptions {
  /**
   * Force fresh fetch, bypassing cache
   * Use for update checks that need latest server data
   */
  bustCache?: boolean

  /**
   * Optional callback for download progress
   * @param loaded - Bytes downloaded so far
   * @param total - Total bytes (may be 0 if Content-Length not available)
   */
  onProgress?: (loaded: number, total: number) => void

  /**
   * Reason for fetch (for logging/debugging)
   */
  reason?: 'network-fallback' | 'initial-load' | 'update-check'
}

// Module-level state
let pendingFetch: Promise<RecipesJsonData> | null = null
let cachedData: { data: RecipesJsonData; timestamp: number } | null = null

const CACHE_DURATION_MS = 5000 // 5 seconds

/**
 * Fetch recipes.json with deduplication and caching
 *
 * Multiple concurrent calls will share the same network request.
 * Data is cached for 5 seconds to handle rapid sequential calls.
 *
 * @throws {Error} On network failure, HTTP error, or JSON parse error
 */
export async function fetchRecipes(
  options: FetchRecipesOptions = {},
): Promise<RecipesJsonData> {
  const { bustCache = false, onProgress, reason = 'unknown' } = options

  // If there's already a pending fetch, return it (deduplication)
  if (pendingFetch) {
    console.log(`[recipeCoordinator] Deduplicating fetch request (reason: ${reason})`)
    return pendingFetch
  }

  // Check cached data (unless cache busting)
  if (!bustCache && cachedData) {
    const age = Date.now() - cachedData.timestamp
    if (age < CACHE_DURATION_MS) {
      console.log(
        `[recipeCoordinator] Returning cached data (age: ${age}ms, reason: ${reason})`,
      )
      return cachedData.data
    }
  }

  // Start new fetch
  console.log(`[recipeCoordinator] Starting new fetch (reason: ${reason})`)

  pendingFetch = performFetch(onProgress, reason)

  try {
    const data = await pendingFetch

    // Cache the result
    cachedData = {
      data,
      timestamp: Date.now(),
    }

    console.log(
      `[recipeCoordinator] Fetch completed (version: ${data.version}, count: ${data.count})`,
    )

    return data
  } finally {
    // Clear pending fetch regardless of success/failure
    pendingFetch = null
  }
}

/**
 * Perform the actual fetch with progress tracking
 */
async function performFetch(
  onProgress?: (loaded: number, total: number) => void,
  reason?: string,
): Promise<RecipesJsonData> {
  // Check online status
  if (!navigator.onLine) {
    throw new Error('OFFLINE')
  }

  // Determine cache policy
  const cachePolicy = reason === 'update-check' ? 'no-store' : 'default'

  const response = await fetch('/recipes.json', {
    cache: cachePolicy,
  })

  if (!response.ok) {
    throw new Error(`HTTP_ERROR_${response.status}`)
  }

  // Handle progress tracking if callback provided
  if (onProgress && response.body) {
    const contentLength = response.headers.get('Content-Length')
    const total = contentLength ? parseInt(contentLength, 10) : 0

    const reader = response.body.getReader()
    const chunks: Uint8Array[] = []
    let loaded = 0

    while (true) {
      const { done, value } = await reader.read()

      if (done) break

      chunks.push(value)
      loaded += value.length

      onProgress(loaded, total)
    }

    // Reconstruct response from chunks
    const allChunks = new Uint8Array(loaded)
    let position = 0
    for (const chunk of chunks) {
      allChunks.set(chunk, position)
      position += chunk.length
    }

    const text = new TextDecoder().decode(allChunks)
    return JSON.parse(text) as RecipesJsonData
  }

  // No progress tracking - standard JSON parse
  return (await response.json()) as RecipesJsonData
}

/**
 * Clear cached data (useful for testing)
 */
export function clearCache(): void {
  console.log('[recipeCoordinator] Cache cleared')
  cachedData = null
  pendingFetch = null
}

/**
 * Get cache status (useful for debugging)
 */
export function getCacheStatus(): {
  hasPendingFetch: boolean
  hasCachedData: boolean
  cacheAge: number | null
} {
  return {
    hasPendingFetch: pendingFetch !== null,
    hasCachedData: cachedData !== null,
    cacheAge: cachedData ? Date.now() - cachedData.timestamp : null,
  }
}
```

**Key Design Points**:
- **Promise deduplication**: `pendingFetch` variable ensures only one fetch at a time
- **5-second cache**: `cachedData` with timestamp prevents re-fetching for rapid calls
- **Progress tracking**: Optional callback using ReadableStream API
- **Error handling**: All errors thrown (consistent behavior)
- **Cache busting**: `bustCache` option for update checks
- **Logging**: Console logs for debugging fetch coordination
- **Cache policy**: Uses `'no-store'` for update checks, `'default'` otherwise

### Success Criteria

#### Automated Verification:
- [x] TypeScript compiles without errors: `npm run build` (no typecheck script)
- [x] ESLint passes: `npm run lint`
- [x] File structure matches: `src/utils/recipeCoordinator.ts` exists
- [x] Exports are correct: `fetchRecipes`, `clearCache`, `getCacheStatus`, types

#### Manual Verification:
- [ ] Import coordinator in Node REPL: `import { fetchRecipes } from './src/utils/recipeCoordinator'`
- [ ] No runtime errors on import
- [ ] TypeScript autocomplete shows correct types
- [ ] Console logs appear when calling functions

**Implementation Note**: After completing this phase and all automated verification passes, proceed directly to Phase 2. No manual testing required until Phase 2 is complete.

---

## Phase 2: Refactor Fetch Locations

### Overview
Replace direct `fetch('/recipes.json')` calls with coordinator in all three locations. Preserve existing error handling patterns where callers expect them.

### Changes Required

#### 1. Update RecipePage Network Fallback

**File**: `src/pages/RecipePage.tsx`

**Changes**: Refactor `fetchRecipeFromNetwork()` function (lines 46-84)

**Before**:
```typescript
async function fetchRecipeFromNetwork(recipeSlug: string): Promise<Recipe | null> {
  if (!navigator.onLine) {
    console.log('Offline - cannot fetch recipe from network')
    return null
  }

  try {
    const response = await fetch('/recipes.json')

    if (!response.ok) {
      console.error(`Failed to fetch recipes.json: ${response.status}`)
      return null
    }

    const data = await response.json()
    const foundRecipe = data.recipes.find((r: Recipe) => r.slug === recipeSlug)

    if (foundRecipe) {
      console.log(`Found recipe "${recipeSlug}" in network response, caching to IndexedDB...`)
      const db = await openRecipeDB()
      await db.put('recipes', foundRecipe)
      console.log(`Recipe "${recipeSlug}" cached successfully`)
    } else {
      console.log(`Recipe "${recipeSlug}" not found in recipes.json`)
    }

    return foundRecipe || null
  } catch (error) {
    console.error('Network fallback failed:', error)
    return null
  }
}
```

**After**:
```typescript
import { fetchRecipes } from '@/utils/recipeCoordinator'

async function fetchRecipeFromNetwork(recipeSlug: string): Promise<Recipe | null> {
  try {
    const data = await fetchRecipes({
      reason: 'network-fallback',
    })

    const foundRecipe = data.recipes.find((r: Recipe) => r.slug === recipeSlug)

    if (foundRecipe) {
      console.log(`Found recipe "${recipeSlug}" in network response, caching to IndexedDB...`)
      const db = await openRecipeDB()
      await db.put('recipes', foundRecipe)
      console.log(`Recipe "${recipeSlug}" cached successfully`)
    } else {
      console.log(`Recipe "${recipeSlug}" not found in recipes.json`)
    }

    return foundRecipe || null
  } catch (error) {
    // Preserve existing error handling: log and return null
    if (error instanceof Error && error.message === 'OFFLINE') {
      console.log('Offline - cannot fetch recipe from network')
    } else {
      console.error('Network fallback failed:', error)
    }
    return null
  }
}
```

**What Changed**:
- Removed `navigator.onLine` check (coordinator handles it)
- Removed direct `fetch()` call
- Added `fetchRecipes()` call with reason
- Removed HTTP status check (coordinator throws)
- Removed JSON parsing (coordinator returns typed data)
- Added error type checking for offline case
- Preserved `return null` behavior on error

**Lines Modified**: 46-84 (38 lines)

---

#### 2. Update useRecipes Hook

**File**: `src/hooks/useRecipes.ts`

**Changes**: Refactor `fetchAndPopulate()` and `checkForUpdates()` functions

**A. Update fetchAndPopulate() (lines 68-87)**

**Before**:
```typescript
async function fetchAndPopulate() {
  if (!navigator.onLine) {
    throw new Error('OFFLINE_NO_DATA')
  }

  const response = await fetch('/recipes.json')
  if (!response.ok) {
    throw new Error(`Failed to fetch recipes: ${response.status}`)
  }

  const data = await response.json()
  await populateRecipes(data.recipes, data.version)

  setState({
    recipes: data.recipes,
    loading: false,
    error: null,
    version: data.version,
  })
}
```

**After**:
```typescript
import { fetchRecipes } from '@/utils/recipeCoordinator'

async function fetchAndPopulate() {
  const data = await fetchRecipes({
    reason: 'initial-load',
    onProgress: (loaded, total) => {
      // Optional: Could update state with progress percentage
      // For now, just log it
      if (total > 0) {
        const percent = Math.round((loaded / total) * 100)
        console.log(`[useRecipes] Download progress: ${percent}%`)
      }
    },
  })

  await populateRecipes(data.recipes, data.version)

  setState({
    recipes: data.recipes,
    loading: false,
    error: null,
    version: data.version,
  })
}
```

**What Changed**:
- Removed `navigator.onLine` check (coordinator handles it, will throw 'OFFLINE')
- Removed direct `fetch()` call
- Added `fetchRecipes()` call with reason and progress callback
- Removed HTTP status check (coordinator throws)
- Removed JSON parsing (coordinator returns typed data)
- Added progress logging (could be enhanced later)
- Preserved error throwing behavior (caller catches at line 57)

**Lines Modified**: 68-87 (19 lines)

---

**B. Update checkForUpdates() (lines 89-119)**

**Before**:
```typescript
async function checkForUpdates() {
  try {
    const response = await fetch('/recipes.json', {
      cache: 'no-store',
    })

    if (!response.ok) return

    const serverData = await response.json()
    const localVersion = await getRecipeVersion()

    if (serverData.version !== localVersion) {
      console.log(
        `Update available: ${localVersion} → ${serverData.version}`,
      )
      await updateRecipes(serverData.recipes, serverData.version)

      setState((prev) => ({
        ...prev,
        recipes: serverData.recipes,
        version: serverData.version,
      }))

      // TODO: Show toast notification
    }
  } catch (error) {
    console.error('Update check failed:', error)
  }
}
```

**After**:
```typescript
async function checkForUpdates() {
  try {
    const serverData = await fetchRecipes({
      bustCache: true, // Force fresh fetch for update check
      reason: 'update-check',
    })

    const localVersion = await getRecipeVersion()

    if (serverData.version !== localVersion) {
      console.log(
        `Update available: ${localVersion} → ${serverData.version}`,
      )
      await updateRecipes(serverData.recipes, serverData.version)

      setState((prev) => ({
        ...prev,
        recipes: serverData.recipes,
        version: serverData.version,
      }))

      // TODO: Show toast notification
    }
  } catch (error) {
    console.error('Update check failed:', error)
  }
}
```

**What Changed**:
- Removed direct `fetch()` call with `cache: 'no-store'`
- Added `fetchRecipes()` with `bustCache: true` (equivalent behavior)
- Removed `if (!response.ok) return` check (coordinator throws)
- Removed JSON parsing (coordinator returns typed data)
- Preserved silent error handling (try/catch with console.error)

**Lines Modified**: 89-119 (30 lines)

**Import Addition** (top of file):
```typescript
import { fetchRecipes } from '@/utils/recipeCoordinator'
```

---

#### 3. Update Global Update Check

**File**: `src/utils/recipeUpdates.ts`

**Changes**: Refactor `checkForRecipeUpdates()` function (lines 4-41)

**Before**:
```typescript
export async function checkForRecipeUpdates(): Promise<boolean> {
  try {
    const response = await fetch('/recipes.json', {
      cache: 'no-store',
    })

    if (!response.ok) return false

    const serverData = await response.json()
    const localVersion = await getRecipeVersion()

    if (serverData.version !== localVersion) {
      console.log(
        `Update available: ${localVersion} → ${serverData.version}`,
      )

      await updateRecipes(serverData.recipes, serverData.version)

      const db = await openRecipeDB()
      const currentCount = await db.count('recipes')
      const added = serverData.count - currentCount

      toast.success('Mise à jour des recettes', {
        description: `${Math.abs(added)} ${added > 0 ? 'nouvelles' : 'modifiées'} recettes`,
      })

      return true
    }

    return false
  } catch (error) {
    console.error('Update check failed:', error)
    return false
  }
}
```

**After**:
```typescript
import { fetchRecipes } from '@/utils/recipeCoordinator'

export async function checkForRecipeUpdates(): Promise<boolean> {
  try {
    const serverData = await fetchRecipes({
      bustCache: true, // Force fresh fetch for update check
      reason: 'update-check',
    })

    const localVersion = await getRecipeVersion()

    if (serverData.version !== localVersion) {
      console.log(
        `Update available: ${localVersion} → ${serverData.version}`,
      )

      await updateRecipes(serverData.recipes, serverData.version)

      const db = await openRecipeDB()
      const currentCount = await db.count('recipes')
      const added = serverData.count - currentCount

      toast.success('Mise à jour des recettes', {
        description: `${Math.abs(added)} ${added > 0 ? 'nouvelles' : 'modifiées'} recettes`,
      })

      return true
    }

    return false
  } catch (error) {
    console.error('Update check failed:', error)
    return false
  }
}
```

**What Changed**:
- Removed direct `fetch()` call with `cache: 'no-store'`
- Added `fetchRecipes()` with `bustCache: true`
- Removed `if (!response.ok) return false` check (coordinator throws)
- Removed JSON parsing (coordinator returns typed data)
- Preserved `return false` on error behavior
- Toast notification logic unchanged

**Lines Modified**: 4-41 (37 lines)

**Import Addition** (line 1):
```typescript
import { fetchRecipes } from '@/utils/recipeCoordinator'
```

### Success Criteria

#### Automated Verification:
- [x] All TypeScript compiles: `npm run build`
- [x] No ESLint errors: `npm run lint`
- [x] Build succeeds: `npm run build`
- [ ] No console errors on app startup

#### Manual Verification:
- [x] App starts without errors
- [x] Home page loads recipes correctly
- [x] Direct recipe URLs load (e.g., `/recipe/brigadeiro-blanc`)
- [x] Update checks work (manually trigger by changing version)
- [x] Toast notifications still appear on updates

**Implementation Note**: After completing this phase and all automated verification passes, pause here for manual confirmation from the human that the manual testing was successful before proceeding to Phase 3.

---

## Phase 3: Verification and Race Condition Testing

### Overview
Thoroughly test the race condition fix with real-world scenarios. Verify that only one network request occurs when multiple code paths execute simultaneously.

### Testing Scenarios

#### Test 1: Direct Recipe Access (Primary Use Case)

**Setup**:
1. Open Chrome DevTools
2. Navigate to Application > Storage > IndexedDB
3. Delete `nosrecettes` database (or use `clearRecipeDB()` in console)
4. Open Network tab, filter for "recipes.json"
5. Clear network log

**Steps**:
1. Navigate to `/recipe/poutine-classique` (or any recipe slug)
2. Observe Network tab

**Expected Results**:
- [x] **Exactly ONE request** to `/recipes.json` appears in Network tab (verified via console logs)
- [x] Request completes successfully (200 OK)
- [x] Recipe page displays correctly after load
- [x] Console shows coordinator logs:
  - `[recipeCoordinator] Starting new fetch (reason: update-check)` ✓
  - `[recipeCoordinator] Deduplicating fetch request (reason: network-fallback)` ✓
  - `[recipeCoordinator] Fetch completed (version: dev, count: 720)` ✓
- [x] No "Network fallback failed" errors in console
- [x] No duplicate downloads (deduplication confirmed)

**Failure Case**: If TWO requests appear, the coordinator is not working.

---

#### Test 2: Concurrent Update Check During Recipe Load

**Setup**:
1. Clear IndexedDB again
2. Open Network tab, clear log
3. Throttle network to "Slow 3G" (to extend race window)

**Steps**:
1. Navigate to `/recipe/tourtiere`
2. Immediately after navigation (within 1 second), open console and run:
   ```javascript
   checkForRecipeUpdates()
   ```

**Expected Results**:
- [ ] Still **exactly ONE request** to `/recipes.json`
- [ ] Console shows deduplication log:
  - `[recipeCoordinator] Deduplicating fetch request (reason: update-check)`
- [ ] Both operations complete successfully
- [ ] Recipe displays correctly
- [ ] No toast notification (versions match on first load)

---

#### Test 3: Rapid Sequential Calls (Cache Test)

**Setup**:
1. IndexedDB populated with recipes
2. Open console

**Steps**:
1. Run these commands in quick succession (within 5 seconds):
   ```javascript
   await checkForRecipeUpdates()
   await checkForRecipeUpdates()
   await checkForRecipeUpdates()
   ```

**Expected Results**:
- [ ] **First call**: Network request occurs
- [ ] **Second call**: Returns cached data (logged as "Returning cached data")
- [ ] **Third call**: Returns cached data
- [ ] Network tab shows only ONE request total
- [ ] All calls complete successfully

---

#### Test 4: Progress Tracking (Slow Connection)

**Setup**:
1. Clear IndexedDB
2. Throttle network to "Slow 3G"
3. Open console

**Steps**:
1. Navigate to home page `/`
2. Observe console logs

**Expected Results**:
- [ ] Console shows progress logs:
  - `[useRecipes] Download progress: 10%`
  - `[useRecipes] Download progress: 20%`
  - ... (incremental updates)
  - `[useRecipes] Download progress: 100%`
- [ ] Progress logs appear during download (not just at end)
- [ ] Final log shows completion with version/count

---

#### Test 5: Error Handling - Offline

**Setup**:
1. Clear IndexedDB
2. Open DevTools, go to Network tab
3. Set throttling to "Offline"

**Steps**:
1. Navigate to `/recipe/poutine-classique`

**Expected Results**:
- [ ] Recipe page shows "Recipe not found" (NotFound component)
- [ ] Console shows offline error:
  - `Offline - cannot fetch recipe from network` (from RecipePage)
- [ ] No network request appears (offline)
- [ ] No unhandled promise rejections
- [ ] No JavaScript errors

**Alternative Test**: Navigate to home page `/` while offline
- [ ] Shows error state from useRecipes (RecipeLoadError component)
- [ ] Console shows: "Failed to load recipes: Error: OFFLINE"

---

#### Test 6: Cache Busting for Updates

**Setup**:
1. Recipes populated in IndexedDB with version "abc123"
2. Modify `public/recipes.json` version to "xyz789" (simulate server update)
3. Open console

**Steps**:
1. Call `checkForRecipeUpdates()`
2. Wait for completion
3. Call `checkForRecipeUpdates()` again immediately

**Expected Results**:
- [ ] **First call**: Network request with `cache: 'no-store'` header
- [ ] **First call**: Detects version mismatch, updates IndexedDB
- [ ] **First call**: Shows toast notification
- [ ] **Second call**: New network request (cache busted for update checks)
- [ ] **Second call**: Versions now match, no update needed
- [ ] **Second call**: No toast notification

---

#### Test 7: Performance - Large File Download

**Setup**:
1. Clear IndexedDB
2. Open DevTools Performance tab
3. Start recording

**Steps**:
1. Navigate to home page `/`
2. Wait for recipes to load
3. Stop performance recording

**Expected Results**:
- [ ] Total download time acceptable for connection speed
- [ ] No unnecessary duplicate downloads in timeline
- [ ] Main thread not blocked during download (app remains responsive)
- [ ] Memory usage reasonable (no leaks from chunked reading)

---

### Success Criteria

#### Automated Verification:
- [ ] All tests still pass: `npm test` (if tests exist)
- [ ] Build succeeds: `npm run build`
- [ ] No TypeScript errors: `npm run typecheck`
- [ ] No linting errors: `npm run lint`

#### Manual Verification:
- [ ] All 7 test scenarios pass (see above)
- [ ] **Test 1 is CRITICAL** - must show only one request
- [ ] No regressions in existing functionality
- [ ] Performance acceptable on slow connections
- [ ] Error handling graceful in offline scenarios

**Implementation Note**: After completing this phase and all verification passes, the implementation is complete. Document any issues found in comments and ensure all critical tests pass before merging.

---

## Testing Strategy

### Unit Tests (Optional - if test infrastructure exists)

**File**: `src/utils/recipeCoordinator.test.ts`

**Test Cases**:
1. **Promise deduplication**: Two concurrent calls return same promise
2. **Cache expiry**: Cached data expires after 5 seconds
3. **Cache busting**: `bustCache: true` ignores cache
4. **Error handling**: Throws correct error codes
5. **Progress tracking**: Callback invoked with correct values
6. **Clear cache**: `clearCache()` resets state

**Example Test Structure**:
```typescript
import { fetchRecipes, clearCache, getCacheStatus } from './recipeCoordinator'

describe('recipeCoordinator', () => {
  beforeEach(() => {
    clearCache()
  })

  it('should deduplicate concurrent calls', async () => {
    const promise1 = fetchRecipes({ reason: 'test' })
    const promise2 = fetchRecipes({ reason: 'test' })

    expect(promise1).toBe(promise2)

    const [data1, data2] = await Promise.all([promise1, promise2])
    expect(data1).toEqual(data2)
  })

  it('should cache data for 5 seconds', async () => {
    await fetchRecipes({ reason: 'test' })

    const { hasCachedData, cacheAge } = getCacheStatus()
    expect(hasCachedData).toBe(true)
    expect(cacheAge).toBeLessThan(100)
  })

  // ... more tests
})
```

### Integration Tests

**Manual Integration Tests** (see Phase 3 Test Scenarios above):
- Direct recipe access with empty IndexedDB
- Concurrent calls during app initialization
- Update checks with version mismatches
- Offline error handling
- Progress tracking on slow connections

### Performance Tests

**Metrics to Track**:
- Time to first recipe display (should not increase)
- Total bytes downloaded on first visit (should be ~4.9MB, not 9.8MB)
- Memory usage during download (should be reasonable)
- App responsiveness during fetch (should not block UI)

**Comparison Before/After**:
| Metric | Before (Race Condition) | After (Coordinator) |
|--------|------------------------|---------------------|
| Network requests on direct recipe access | 2 | 1 |
| Total bytes downloaded | ~9.8MB | ~4.9MB |
| Time to first paint | ~3s (Slow 3G) | ~3s (unchanged) |
| Memory overhead | Baseline | +minimal (cached data) |

---

## Performance Considerations

### Memory Impact

**Cached Data Size**: ~4.9MB JSON data held in memory for up to 5 seconds

**Mitigation**:
- Short cache duration (5s) limits memory footprint
- Cache automatically cleared after expiry
- Only one cache instance (module-level, not per-component)

**Expected Impact**: Negligible - 5MB is small for modern browsers

### Network Impact

**Before Fix**:
- 2-3 simultaneous downloads of 4.9MB file
- Total wasted bandwidth: 4.9MB - 9.8MB per first visit

**After Fix**:
- Single download shared by all callers
- Zero wasted bandwidth
- 50-66% reduction in data transfer

**Mobile Impact**: Significant improvement on slow 3G connections
- Before: 2x download time (or more with congestion)
- After: 1x download time

### CPU Impact

**ReadableStream Chunked Reading**: Minimal overhead
- Browser handles chunking efficiently
- Progress callbacks don't block main thread
- JSON parsing happens once (not per caller)

### Browser Compatibility

**APIs Used**:
- `fetch()` - Widely supported (IE11+ with polyfill)
- `ReadableStream` - Supported in all modern browsers
- Module-level state - Standard JavaScript pattern

**No Breaking Changes**: All refactored code maintains same public APIs

---

## Migration Notes

### No Database Migration Required

- IndexedDB schema unchanged
- Existing data compatible
- No version bump needed

### Deployment Strategy

**Recommended**:
1. Deploy coordinator code first (new file, no breaking changes)
2. Deploy refactored fetch locations (backward compatible)
3. Monitor logs for coordinator activity
4. Verify deduplication working in production

**Rollback Plan**:
- Simply revert commits (no schema changes to undo)
- IndexedDB data remains intact

### Monitoring

**What to Watch Post-Deployment**:
- Server logs: Requests to `/recipes.json` should decrease significantly
- Client logs: Look for deduplication messages in console
- Error rates: Should not increase (improved error handling)
- User reports: Faster load times on mobile

**Success Metrics**:
- 50% reduction in `/recipes.json` requests (primary use case)
- Zero user reports of duplicate downloads
- No increase in error rates

---

## References

### Research Documents
- [Recipe Fetch Race Condition Research](thoughts/shared/research/2026-01-12-recipe-fetch-race-condition.md)
- [Direct Recipe Access 404 Issue](thoughts/shared/research/2026-01-12-direct-recipe-access-404-issue.md)
- [Network Fallback Implementation](thoughts/shared/plans/2026-01-12-direct-recipe-access-network-fallback.md)

### Code Files Analyzed
- [src/pages/RecipePage.tsx:46-84](src/pages/RecipePage.tsx#L46-L84) - Network fallback
- [src/hooks/useRecipes.ts:68-119](src/hooks/useRecipes.ts#L68-L119) - Initial load and updates
- [src/utils/recipeUpdates.ts:4-41](src/utils/recipeUpdates.ts#L4-L41) - Global update check
- [src/App.tsx:29-52](src/App.tsx#L29-L52) - Update check scheduling
- [src/utils/recipeDb.ts](src/utils/recipeDb.ts) - IndexedDB operations

### External Documentation
- [MDN: ReadableStream](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream)
- [MDN: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Promise Deduplication Pattern](https://www.npmjs.com/package/p-memoize)

---

## Next Steps After Implementation

1. **Monitor production metrics** for 1 week after deployment
2. **Collect user feedback** on load times (especially mobile users)
3. **Consider future enhancements**:
   - Request cancellation with AbortController
   - Retry logic with exponential backoff
   - Recipe-specific API endpoints (bigger refactor)
   - Service worker request deduplication
4. **Document patterns** for future fetch coordination needs
5. **Update architecture docs** with coordinator pattern

---

## Questions / Open Items

1. **Test Infrastructure**: Does the project have existing test setup (Jest, Vitest, etc.)?
   - If yes, add unit tests for coordinator
   - If no, rely on manual testing

2. **Analytics**: Should we add analytics events for coordinator activity?
   - E.g., track deduplication rate, cache hit rate
   - Defer to future iteration?

3. **Service Worker**: Current service worker may cache `/recipes.json` separately
   - Verify coordinator works with service worker caching
   - Document interaction in implementation notes

4. **Progress UI**: Should progress callback update UI, or just log?
   - Current plan: Just log
   - Future enhancement: Add progress bar to RecipeDetailSkeleton

---

**Plan Status**: Draft - Awaiting review and approval

**Estimated Implementation Time**: 2-4 hours (including testing)

**Priority**: CRITICAL - Block production release until fixed

**Assigned To**: TBD

**Review Required**: Yes - Technical lead review recommended
