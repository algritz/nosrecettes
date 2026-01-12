---
date: 2026-01-12T14:00:12+0000
researcher: Claude Code
git_commit: 838057dddd34243ab45d56ae6f859a5922332bf8
branch: main
repository: nosrecettes.ca
topic: "Recipe Fetch Race Condition Analysis"
tags: [research, codebase, race-condition, recipes.json, indexeddb, network-fetch]
status: complete
last_updated: 2026-01-12
last_updated_by: Claude Code
---

# Research: Recipe Fetch Race Condition Analysis

**Date**: 2026-01-12T14:00:12+0000
**Researcher**: Claude Code
**Git Commit**: 838057dddd34243ab45d56ae6f859a5922332bf8
**Branch**: main
**Repository**: nosrecettes.ca

## Research Question

Investigate the race condition where multiple code paths simultaneously fetch `/recipes.json` (~4.9MB) when a user lands directly on a recipe page with an empty IndexedDB, causing duplicate network requests and potential data conflicts.

## Summary

The codebase contains **three independent code paths** that fetch `/recipes.json` from the network, with **no coordination mechanism** to prevent simultaneous requests. When a user accesses `/recipe/some-slug` directly on first visit (empty IndexedDB), all three can fire concurrently:

1. **RecipePage.fetchRecipeFromNetwork()** - [src/pages/RecipePage.tsx:55](src/pages/RecipePage.tsx#L55)
2. **App.checkForRecipeUpdates()** - [src/App.tsx:37](src/App.tsx#L37) via [src/utils/recipeUpdates.ts:6](src/utils/recipeUpdates.ts#L6)
3. **useRecipes.fetchAndPopulate()** - [src/hooks/useRecipes.ts:73](src/hooks/useRecipes.ts#L73) (if Index page also mounted)

Each fetch operates independently with no mutex, request deduplication, or shared state to prevent parallel downloads of the same 4.9MB file. IndexedDB's transaction isolation handles write conflicts, but bandwidth waste and redundant processing occur.

## Detailed Findings

### Network Fetch Locations

The codebase has **4 distinct fetch calls** to `/recipes.json` across **3 source files**:

#### 1. RecipePage Component - Network Fallback
**File**: [src/pages/RecipePage.tsx:46-84](src/pages/RecipePage.tsx#L46-L84)

**Function**: `fetchRecipeFromNetwork(recipeSlug: string)`
- **Fetch location**: Line 55
- **Cache control**: None (browser default)
- **Purpose**: Fallback when recipe not found in IndexedDB
- **Trigger**: Direct URL access to `/recipe/:slug` when IndexedDB empty
- **Behavior**:
  - Checks `navigator.onLine` first (line 48)
  - Fetches full recipes.json
  - Searches for recipe by slug (line 65)
  - Caches only the found recipe to IndexedDB (lines 71-72)
- **Called from**: [src/pages/RecipePage.tsx:98](src/pages/RecipePage.tsx#L98) in `loadRecipe()`

#### 2. useRecipes Hook - Initial Load
**File**: [src/hooks/useRecipes.ts:68-87](src/hooks/useRecipes.ts#L68-L87)

**Function**: `fetchAndPopulate()`
- **Fetch location**: Line 73
- **Cache control**: None (browser default)
- **Purpose**: First-time population of IndexedDB
- **Trigger**: When `isRecipeDBPopulated()` returns false (line 34)
- **Behavior**:
  - Throws error if offline (lines 69-71)
  - Fetches recipes.json
  - Calls `populateRecipes()` to store entire dataset (line 79)
  - Updates React state (lines 81-86)
- **Called from**: [src/hooks/useRecipes.ts:55](src/hooks/useRecipes.ts#L55) in `loadRecipes()`

#### 3. useRecipes Hook - Background Update
**File**: [src/hooks/useRecipes.ts:89-119](src/hooks/useRecipes.ts#L89-L119)

**Function**: `checkForUpdates()`
- **Fetch location**: Line 91
- **Cache control**: `cache: 'no-store'` (line 92)
- **Purpose**: Periodic update check while app is active
- **Trigger**: After IndexedDB populated, if online (line 50)
- **Behavior**:
  - Compares server version with local (lines 98-100)
  - Calls `updateRecipes()` for smart merge if mismatch (line 104)
  - Updates React state (lines 107-111)
  - Contains TODO for toast notification (line 114)
- **Called from**: [src/hooks/useRecipes.ts:51](src/hooks/useRecipes.ts#L51) in `loadRecipes()`

#### 4. App-Level Update Check
**File**: [src/utils/recipeUpdates.ts:4-40](src/utils/recipeUpdates.ts#L4-L40)

**Function**: `checkForRecipeUpdates()`
- **Fetch location**: Line 6
- **Cache control**: `cache: 'no-store'` (line 7)
- **Purpose**: Periodic global update check
- **Trigger**:
  - On app mount: [src/App.tsx:37](src/App.tsx#L37)
  - Every 30 minutes: [src/App.tsx:42-49](src/App.tsx#L42-L49) via setInterval
- **Behavior**:
  - Compares versions (lines 13-15)
  - Calls `updateRecipes()` for smart merge (line 21)
  - Calculates change count (lines 24-26)
  - Shows sonner toast notification (lines 29-31)
  - Returns boolean (true if updated)
- **Called from**: [src/App.tsx:37,45](src/App.tsx#L37)

### Race Condition Scenario

**Trigger**: User lands directly on `/recipe/poutine-classique` via Facebook link

**Sequence of Events** (all within ~100-500ms):

```
T+0ms:    User navigates to /recipe/poutine-classique
T+50ms:   App component mounts
          └─> useEffect fires at App.tsx:29
              └─> navigator.onLine check passes (line 36)
                  └─> checkForRecipeUpdates() called (line 37)
                      └─> FETCH #1: /recipes.json (recipeUpdates.ts:6)

T+100ms:  RecipePage component mounts
          └─> useEffect fires at RecipePage.tsx:23
              └─> loadRecipe() called (line 28)
                  └─> getRecipeBySlug(slug) returns undefined (line 93)
                      └─> fetchRecipeFromNetwork(slug) called (line 98)
                          └─> FETCH #2: /recipes.json (RecipePage.tsx:55)

T+150ms:  If Index page also mounted (e.g., in background route)
          └─> useRecipes hook fires at useRecipes.ts:26
              └─> loadRecipes() called (line 27)
                  └─> isRecipeDBPopulated() returns false (line 34)
                      └─> fetchAndPopulate() called (line 55)
                          └─> FETCH #3: /recipes.json (useRecipes.ts:73)

Result: THREE simultaneous 4.9MB downloads
```

**Timing Note**: The Index page scenario (FETCH #3) is less likely in production since direct recipe links don't mount the Index page. However, FETCH #1 and FETCH #2 will **always race** on direct recipe access with empty IndexedDB.

### IndexedDB Coordination Mechanisms

**Current Implementation**: [src/utils/recipeDb.ts](src/utils/recipeDb.ts)

#### Transaction-Based Isolation

All write operations use IndexedDB transactions with ACID guarantees:

1. **populateRecipes()** - [recipeDb.ts:88-111](src/utils/recipeDb.ts#L88-L111)
   - Single readwrite transaction (line 93)
   - Atomic clear + bulk insert (lines 96-101)
   - Version update (lines 104-108)
   - Transaction commit (line 110)

2. **updateRecipes()** - [recipeDb.ts:114-149](src/utils/recipeDb.ts#L114-L149)
   - Single readwrite transaction (line 127)
   - Smart merge: add/update/delete (lines 130-139)
   - Version update (lines 142-146)
   - Transaction commit (line 148)

3. **Individual Recipe Cache** - [RecipePage.tsx:71-72](src/pages/RecipePage.tsx#L71-L72)
   - Direct `db.put('recipes', recipe)` call
   - No explicit transaction (auto-committed)
   - Happens **during** network fallback

#### Conflict Resolution

**Scenario: Parallel populateRecipes() + updateRecipes() calls**

- IndexedDB serializes transactions automatically
- Both transactions target same object stores
- One will complete first, the other will see updated state
- **No data corruption** due to ACID properties
- **Problem**: Last writer wins, earlier work wasted

**Scenario: populateRecipes() racing with RecipePage single put()**

- RecipePage writes single recipe at line 72
- populateRecipes() clears entire store at line 96
- If populateRecipes() runs after single put, the cached recipe gets wiped
- If single put runs after populateRecipes(), recipe is added/updated
- **Problem**: Timing-dependent behavior, potential data loss

#### No Application-Level Locking

**Absent mechanisms:**
- ❌ No mutex/semaphore to prevent concurrent fetches
- ❌ No shared "fetching" flag in React state or global variable
- ❌ No request deduplication (e.g., cache pending promises)
- ❌ No AbortController to cancel redundant requests
- ❌ No fetch coordinator or singleton pattern

**What exists:**
- ✅ `navigator.onLine` checks prevent offline fetches
- ✅ `isRecipeDBPopulated()` check in useRecipes (line 34)
- ✅ Version comparison prevents unnecessary updates (when versions match)
- ✅ IndexedDB transaction isolation prevents data corruption

**Gap**: The `isRecipeDBPopulated()` check is **not atomic** with the fetch. Between checking (false) and starting the fetch, another component could already be fetching.

### Data Flow Architecture

#### On First Visit (Empty IndexedDB)

**Path 1: Home Page → Recipe Page**
```
1. User navigates to /
2. Index component mounts
3. useRecipes hook fires
4. isRecipeDBPopulated() → false
5. fetchAndPopulate() → FETCH /recipes.json
6. populateRecipes() → store all recipes
7. User clicks recipe card
8. RecipePage mounts
9. getRecipeBySlug() → SUCCESS (cached)
10. No network fallback needed
```

**Path 2: Direct Recipe Access (RACE CONDITION)**
```
1. User navigates to /recipe/poutine-classique
2. App component mounts
   ├─> checkForRecipeUpdates() → FETCH #1
3. RecipePage mounts
   ├─> getRecipeBySlug() → undefined
   └─> fetchRecipeFromNetwork() → FETCH #2
4. RACE: Both fetch simultaneously
5. RACE: Both write to IndexedDB
6. Last writer wins
```

**Path 3: Subsequent Visits**
```
1. User navigates to /recipe/poutine-classique
2. App component mounts
   ├─> checkForRecipeUpdates() fires
   ├─> Version comparison (line recipeUpdates.ts:15)
   └─> Same version → no fetch
3. RecipePage mounts
   ├─> getRecipeBySlug() → SUCCESS (cached)
   └─> No network fallback
```

### Version Management System

**Storage**: IndexedDB `metadata` object store
- Key: `'recipeVersion'` (string literal)
- Value: Git commit SHA (e.g., `'838057dddd34243ab45d56ae6f859a5922332bf8'`)
- Metadata: `lastUpdated` timestamp (milliseconds since epoch)

**Schema**: [src/utils/recipeDb.ts:14-22](src/utils/recipeDb.ts#L14-L22)
```typescript
metadata: {
  key: string
  value: {
    key: string
    value: string | number
    lastUpdated: number
  }
}
```

**Read Function**: [src/utils/recipeDb.ts:71-75](src/utils/recipeDb.ts#L71-L75)
```typescript
export async function getRecipeVersion(): Promise<string | null> {
  const db = await openRecipeDB()
  const meta = await db.get('metadata', 'recipeVersion')
  return (meta?.value as string) || null
}
```

**Write Function**: [src/utils/recipeDb.ts:78-85](src/utils/recipeDb.ts#L78-L85)
```typescript
export async function saveRecipeVersion(version: string): Promise<void> {
  const db = await openRecipeDB()
  await db.put('metadata', {
    key: 'recipeVersion',
    value: version,
    lastUpdated: Date.now(),
  })
}
```

**Version Source**: [scripts/generate-recipes-json.ts:67-71](scripts/generate-recipes-json.ts#L67-L71)
```typescript
const version =
  process.env.GITHUB_SHA ||
  process.env.VERCEL_GIT_COMMIT_SHA ||
  process.env.CF_PAGES_COMMIT_SHA ||
  'dev'
```

**Comparison Logic**:
- [src/utils/recipeUpdates.ts:15](src/utils/recipeUpdates.ts#L15): `serverData.version !== localVersion`
- [src/hooks/useRecipes.ts:100](src/hooks/useRecipes.ts#L100): `serverData.version !== localVersion`
- Simple strict inequality (no semantic versioning)
- Relies on git SHA uniqueness

### recipes.json Structure

**Generated by**: [scripts/generate-recipes-json.ts:63-101](scripts/generate-recipes-json.ts#L63-L101)

**Format**:
```typescript
{
  version: string,      // Git commit SHA (line 90)
  timestamp: number,    // Build timestamp (line 91)
  count: number,        // Total recipe count (line 92)
  recipes: Recipe[]     // Full recipe array (line 93)
}
```

**Size**: Approximately 4.9MB
**Content**: All recipes in the database (no pagination)
**Hosting**: Served from `/public/recipes.json`

### Error Handling

#### Network Failures

**RecipePage.fetchRecipeFromNetwork()**: [RecipePage.tsx:80-83](src/pages/RecipePage.tsx#L80-L83)
- Catches all errors
- Logs to console: `'Network fallback failed:', error`
- Returns `null`
- Result: Shows 404 NotFound (can't distinguish network error from missing recipe)

**useRecipes.fetchAndPopulate()**: [useRecipes.ts:57-65](src/hooks/useRecipes.ts#L57-L65)
- Catches all errors
- Logs to console: `'Failed to load recipes:', error`
- Sets `error` state, `loading: false`, empty recipes array
- Result: RecipeLoadError component shown (via Index page error handling)

**recipeUpdates.checkForRecipeUpdates()**: [recipeUpdates.ts:37-40](src/utils/recipeUpdates.ts#L37-L40)
- Catches all errors
- Logs to console: `'Update check failed:', error`
- Returns `false`
- Result: Silent failure, no user notification

#### Offline Detection

All three paths check `navigator.onLine` before fetching:
- [RecipePage.tsx:48](src/pages/RecipePage.tsx#L48)
- [useRecipes.ts:69](src/hooks/useRecipes.ts#L69) (throws error)
- [App.tsx:36,44](src/App.tsx#L36) (prevents call)

#### Response Validation

All paths check `response.ok`:
- [RecipePage.tsx:57](src/pages/RecipePage.tsx#L57) - Returns `null` on failure
- [useRecipes.ts:74](src/hooks/useRecipes.ts#L74) - Throws error
- [recipeUpdates.ts:10](src/utils/recipeUpdates.ts#L10) - Returns `false`

**No retry mechanism** in any path.

## Code References

### Primary Files
- [src/pages/RecipePage.tsx:46-84](src/pages/RecipePage.tsx#L46-L84) - Network fallback fetch
- [src/hooks/useRecipes.ts:68-87](src/hooks/useRecipes.ts#L68-L87) - Initial population fetch
- [src/hooks/useRecipes.ts:89-119](src/hooks/useRecipes.ts#L89-L119) - Background update fetch
- [src/utils/recipeUpdates.ts:4-40](src/utils/recipeUpdates.ts#L4-L40) - Global update check
- [src/App.tsx:29-52](src/App.tsx#L29-L52) - App-level initialization and interval

### IndexedDB Layer
- [src/utils/recipeDb.ts:28-46](src/utils/recipeDb.ts#L28-L46) - Database initialization
- [src/utils/recipeDb.ts:88-111](src/utils/recipeDb.ts#L88-L111) - populateRecipes (bulk write)
- [src/utils/recipeDb.ts:114-149](src/utils/recipeDb.ts#L114-L149) - updateRecipes (smart merge)
- [src/utils/recipeDb.ts:152-156](src/utils/recipeDb.ts#L152-L156) - isRecipeDBPopulated check
- [src/utils/recipeDb.ts:71-75](src/utils/recipeDb.ts#L71-L75) - getRecipeVersion

### Data Generation
- [scripts/generate-recipes-json.ts:63-101](scripts/generate-recipes-json.ts#L63-L101) - recipes.json builder

## Architecture Documentation

### Current Patterns

**Offline-First PWA**
- Primary data source: IndexedDB
- Network as fallback and update source
- Service worker caching (via Vite PWA plugin)

**Version-Based Updates**
- Git commit SHA as version identifier
- Simple inequality comparison
- No semantic versioning or changelog

**Decentralized Fetch Logic**
- Each component/hook fetches independently
- No central fetch coordinator
- No shared promise caching

**Transaction-Based Consistency**
- IndexedDB transactions ensure atomic writes
- No application-level locking
- Last-writer-wins for conflicts

### Component Interactions

```
App.tsx (Root)
 ├─> checkForRecipeUpdates() every 30min
 │   └─> recipeUpdates.ts:checkForRecipeUpdates()
 │       └─> fetch /recipes.json
 │           └─> updateRecipes()
 │
 └─> Routes
     ├─> Index (/)
     │   └─> useRecipes hook
     │       ├─> fetchAndPopulate() if DB empty
     │       │   └─> fetch /recipes.json
     │       │       └─> populateRecipes()
     │       └─> checkForUpdates() if DB populated
     │           └─> fetch /recipes.json
     │               └─> updateRecipes()
     │
     └─> RecipePage (/recipe/:slug)
         └─> loadRecipe()
             ├─> getRecipeBySlug() from IndexedDB
             └─> fetchRecipeFromNetwork() if not found
                 └─> fetch /recipes.json
                     └─> db.put() single recipe
```

## Historical Context (from thoughts/)

**Original Issue**: [thoughts/shared/research/2026-01-12-direct-recipe-access-404-issue.md](thoughts/shared/research/2026-01-12-direct-recipe-access-404-issue.md)
- Documented 404 errors on direct recipe access via Facebook links
- Root cause: Empty IndexedDB on first visit

**Implementation Plan**: [thoughts/shared/plans/2026-01-12-direct-recipe-access-network-fallback.md](thoughts/shared/plans/2026-01-12-direct-recipe-access-network-fallback.md)
- Added `fetchRecipeFromNetwork()` to RecipePage (lines 46-84)
- Identified race condition as known issue (lines 344-363)
- Marked as "TO BE ADDRESSED" with proposed solutions:
  - Global fetch coordinator
  - AbortController for redundant requests
  - "fetching" flag to prevent parallel fetches

**Validation Results**: Plan document lines 316-341
- Phase 1 marked complete (2026-01-12)
- 5/6 tests verified successfully
- Race condition documented but not yet resolved

## Related Research

- [thoughts/shared/research/2026-01-12-direct-recipe-access-404-issue.md](thoughts/shared/research/2026-01-12-direct-recipe-access-404-issue.md) - Original 404 bug investigation
- [thoughts/shared/plans/2026-01-12-direct-recipe-access-network-fallback.md](thoughts/shared/plans/2026-01-12-direct-recipe-access-network-fallback.md) - Network fallback implementation

## Open Questions (Answered)

1. **Frequency of race condition**: How often do users land directly on recipe pages vs. home page first?
   - **Answer**: More often than not - direct recipe access is the PRIMARY use case
   - **Impact**: Race condition will affect majority of users on first visit

2. **Performance impact**: What's the actual user-perceived delay when 2-3 simultaneous 4.9MB fetches occur?
   - **Answer**: Depends on connection speed, but wasted resources/bandwidth is unacceptable
   - **Impact**: This is a real problem that needs fixing

3. **Browser request deduplication**: Do modern browsers deduplicate identical simultaneous fetch requests at the network layer?
   - **Answer**: Unknown
   - **Impact**: Cannot rely on browser to solve this at network layer

4. **IndexedDB write order**: If populateRecipes() and single db.put() race, which wins more often?
   - **Answer**: If we fix request deduplication, this becomes a non-issue
   - **Impact**: Solve the root cause (duplicate fetches) rather than managing consequences

5. **Service worker interaction**: Does the service worker cache /recipes.json, potentially reducing network impact?
   - **Answer**: If cached, network requests avoided unless cache invalidated
   - **Impact**: Mitigates issue for repeat visitors, but first-time visitors still affected

6. **Mobile network impact**: On slow 3G connections, what's the real-world impact of duplicate fetches?
   - **Answer**: Slow render, increased opportunity for race conditions
   - **Impact**: Mobile users (significant portion of traffic) particularly impacted

7. **Error correlation**: Are there analytics showing network errors correlating with direct recipe access patterns?
   - **Answer**: Not yet - previous version with race condition hasn't been released to production
   - **Impact**: Need to fix BEFORE production deployment

## Priority Assessment

**CRITICAL PRIORITY** - Must fix before production release:
- Direct recipe access is PRIMARY use case (not edge case)
- Will affect majority of first-time visitors
- Wastes bandwidth on every first visit
- Mobile users significantly impacted
- Not yet released, so no production impact yet (opportunity to fix proactively)

## Solution Approach (Decided)

### Chosen Strategy: Global Fetch Coordinator

**Decision**: Implement a singleton fetch coordinator that manages all `/recipes.json` requests and deduplicates concurrent calls.

**Why This Approach**:
1. **Minimal refactoring** - Single new utility file, existing code paths minimally modified
2. **Works with current architecture** - No changes to React context structure or service worker
3. **Solves root cause** - Prevents duplicate fetches at the source
4. **Performance neutral** - No React context overhead or additional renders
5. **Simple to test** - Isolated utility with clear interface
6. **Future-proof** - Can extend with additional coordination logic if needed

**Key Features**:
- **Shared promise** - All concurrent callers await the same fetch promise
- **Automatic deduplication** - First caller triggers fetch, others wait
- **Single source of truth** - One place for fetch logic, version checking, error handling
- **Backward compatible** - Existing code paths call coordinator instead of fetch directly

**Implementation Scope**:
- Create `src/utils/recipeCoordinator.ts` with singleton pattern
- Refactor three fetch locations to use coordinator:
  1. [src/pages/RecipePage.tsx:55](src/pages/RecipePage.tsx#L55) - Network fallback
  2. [src/hooks/useRecipes.ts:73](src/hooks/useRecipes.ts#L73) - Initial population
  3. [src/utils/recipeUpdates.ts:6](src/utils/recipeUpdates.ts#L6) - Update checks
- Add tests for concurrent call deduplication
- Update documentation

**Alternatives Considered**:

**Option 2: React Context + Shared State**
- **Pros**: React-native solution, component-level coordination
- **Cons**: Context overhead, unnecessary re-renders, tightly couples to React
- **Rejected**: Too heavy for this problem

**Option 3: Service Worker Request Deduplication**
- **Pros**: Network-layer solution, transparent to application
- **Cons**: Service worker complexity, harder to debug, browser support concerns
- **Rejected**: Over-engineered for current needs

**Next Steps**:
- Create implementation plan in new context window
- Define coordinator API interface
- Plan refactoring of three fetch locations
- Define test strategy for concurrent scenarios
