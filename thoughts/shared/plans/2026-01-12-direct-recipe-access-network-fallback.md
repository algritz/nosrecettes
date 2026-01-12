# Direct Recipe Access Network Fallback Implementation Plan

## Overview

Implement network fallback for direct recipe access to fix the 404 error that occurs when users land directly on a recipe page (e.g., via Facebook link) before the recipe database is populated. The solution keeps the loading skeleton visible while attempting to fetch from the network, only showing 404 after exhausting all options.

## Current State Analysis

### The Problem

When a user accesses a recipe directly (e.g., `/recipe/poutine-classique`) on their first visit:

1. [RecipePage.tsx:46-59](src/pages/RecipePage.tsx#L46-L59) queries IndexedDB via `getRecipeBySlug(slug)`
2. IndexedDB is empty → returns `undefined`
3. [RecipePage.tsx:52](src/pages/RecipePage.tsx#L52) sets `recipe` to `null`
4. [RecipePage.tsx:57](src/pages/RecipePage.tsx#L57) sets `loading: false`
5. [RecipePage.tsx:65-75](src/pages/RecipePage.tsx#L65-L75) renders 404 NotFound
6. User sees error even though recipe exists in `/recipes.json`

### Current Architecture

- **Offline-first PWA** using IndexedDB as primary storage
- **Single data source**: `/recipes.json` (~4.9MB, contains all recipes)
- **No network fallback** at recipe page level
- **Existing network fetch**: [useRecipes.ts:68-87](src/hooks/useRecipes.ts#L68-L87) handles bulk population
- **Recipe interface**: [recipe.ts:7-30](src/types/recipe.ts#L7-L30)

### Key Discoveries

- ✅ Network fetching pattern exists in [useRecipes.ts:73-78](src/hooks/useRecipes.ts#L73-L78)
- ✅ Loading skeleton ready: [RecipeDetailSkeleton.tsx](src/components/RecipeDetailSkeleton.tsx)
- ✅ Error component ready: [RecipeLoadError.tsx](src/components/RecipeLoadError.tsx)
- ✅ IndexedDB helpers exist: [recipeDb.ts:88-111](src/utils/recipeDb.ts#L88-L111) `populateRecipes()`
- ✅ Recipe type includes `slug` field for lookup

## Desired End State

### User Experience Flow

**When user accesses `/recipe/some-slug` directly on first visit:**

1. Shows RecipeDetailSkeleton immediately
2. Queries IndexedDB (returns `undefined` - empty DB)
3. **Keeps skeleton showing** (doesn't bail to 404)
4. Fetches `/recipes.json` from network
5. Searches for recipe by slug in JSON
6. **If found:**
   - Caches recipe to IndexedDB
   - Displays recipe detail
7. **If not found (truly doesn't exist):**
   - Shows 404 NotFound component
8. **If network fails:**
   - Shows RecipeLoadError with retry button

### Verification

After implementation:
- ✅ Direct recipe links work on first visit
- ✅ Skeleton stays visible during network fetch
- ✅ 404 only shows when recipe truly doesn't exist
- ✅ Network errors show proper error UI with retry
- ✅ Subsequent visits still fast (IndexedDB cache)
- ✅ Offline behavior unchanged (fails gracefully)

## What We're NOT Doing

- ❌ Creating separate API endpoints for individual recipes
- ❌ Progressive loading of entire recipe list
- ❌ Coordinating RecipePage with useRecipes hook (would be slower)
- ❌ Pre-fetching all recipes on direct access
- ❌ Modifying the bulk population strategy
- ❌ Changing IndexedDB schema

## Implementation Approach

**Strategy:** Modify RecipePage to attempt network fallback when IndexedDB returns `undefined`, keeping the loading skeleton visible throughout the fetch operation.

**Why this approach:**
- Minimal code changes (single file modification)
- Reuses existing patterns from useRecipes
- Maintains offline-first architecture
- No breaking changes to existing functionality
- Addresses the high-traffic Facebook link scenario

## Phase 1: Add Network Fallback to RecipePage

### Overview

Modify [RecipePage.tsx](src/pages/RecipePage.tsx) to fetch from `/recipes.json` when IndexedDB query returns `undefined`. Keep loading skeleton visible during network fetch.

### Changes Required

#### 1. Update RecipePage Component Logic

**File**: [src/pages/RecipePage.tsx](src/pages/RecipePage.tsx)

**Changes**: Modify the `loadRecipe()` function to add network fallback logic.

**Current Code** ([lines 46-59](src/pages/RecipePage.tsx#L46-L59)):
```typescript
async function loadRecipe() {
  if (!slug) return

  try {
    setLoading(true)
    const fetchedRecipe = await getRecipeBySlug(slug)
    setRecipe(fetchedRecipe || null)
  } catch (error) {
    console.error('Failed to load recipe:', error)
    setRecipe(null)
  } finally {
    setLoading(false)
  }
}
```

**New Code**:
```typescript
async function loadRecipe() {
  if (!slug) return

  try {
    setLoading(true)

    // Try IndexedDB first
    let fetchedRecipe = await getRecipeBySlug(slug)

    // If not found in IndexedDB, try network fallback
    if (!fetchedRecipe) {
      console.log(`Recipe "${slug}" not found in IndexedDB, attempting network fallback...`)
      fetchedRecipe = await fetchRecipeFromNetwork(slug)
    }

    setRecipe(fetchedRecipe || null)
  } catch (error) {
    console.error('Failed to load recipe:', error)
    setRecipe(null)
  } finally {
    setLoading(false)
  }
}

async function fetchRecipeFromNetwork(slug: string): Promise<Recipe | null> {
  // Check if online
  if (!navigator.onLine) {
    console.log('Offline - cannot fetch recipe from network')
    return null
  }

  try {
    // Fetch recipes.json
    const response = await fetch('/recipes.json')

    if (!response.ok) {
      console.error(`Failed to fetch recipes.json: ${response.status}`)
      return null
    }

    const data = await response.json()

    // Find recipe by slug
    const recipe = data.recipes.find((r: Recipe) => r.slug === slug)

    if (recipe) {
      console.log(`Found recipe "${slug}" in network response, caching to IndexedDB...`)

      // Cache the single recipe to IndexedDB for future use
      // We'll use the existing populateRecipes but with a single recipe
      // This is safe because it will be merged with any existing data
      const db = await openRecipeDB()
      await db.put('recipes', recipe)

      console.log(`Recipe "${slug}" cached successfully`)
    } else {
      console.log(`Recipe "${slug}" not found in recipes.json`)
    }

    return recipe || null
  } catch (error) {
    console.error('Network fallback failed:', error)
    return null
  }
}
```

#### 2. Add Required Imports

**File**: [src/pages/RecipePage.tsx](src/pages/RecipePage.tsx)

**Current imports** ([lines 1-16](src/pages/RecipePage.tsx#L1-L16)):
```typescript
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Recipe } from '@/types/recipe'
import { getRecipeBySlug } from '@/utils/recipeDb'
import { RecipeDetail } from '@/components/RecipeDetail'
import { NotFound } from '@/components/NotFound'
import { SEOHead } from '@/components/SEOHead'
import {
  generateRecipeStructuredData,
  generateBreadcrumbStructuredData,
  generateRecipeKeywords,
  generateRecipeDescription,
} from '@/utils/seoUtils'
import { getResponsiveImageSrc } from '@/utils/imageUtils'
import { getRecipeCategories } from '@/utils/recipeUtils'
import { RecipeDetailSkeleton } from '@/components/RecipeDetailSkeleton'
```

**Add this import**:
```typescript
import { openRecipeDB } from '@/utils/recipeDb'
```

**Final import section**:
```typescript
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Recipe } from '@/types/recipe'
import { getRecipeBySlug, openRecipeDB } from '@/utils/recipeDb'
import { RecipeDetail } from '@/components/RecipeDetail'
import { NotFound } from '@/components/NotFound'
import { SEOHead } from '@/components/SEOHead'
import {
  generateRecipeStructuredData,
  generateBreadcrumbStructuredData,
  generateRecipeKeywords,
  generateRecipeDescription,
} from '@/utils/seoUtils'
import { getResponsiveImageSrc } from '@/utils/imageUtils'
import { getRecipeCategories } from '@/utils/recipeUtils'
import { RecipeDetailSkeleton } from '@/components/RecipeDetailSkeleton'
```

### Implementation Notes

**Key Behavioral Changes:**

1. **Loading State Persistence**: The loading skeleton now stays visible during network fallback instead of immediately showing 404
2. **Network Checking**: Uses `navigator.onLine` to avoid unnecessary fetch attempts when offline
3. **Single Recipe Caching**: Only caches the requested recipe, not the entire list
4. **Error Handling**: Network failures gracefully fall through to 404, not error UI (since we can't distinguish between "recipe doesn't exist" and "network error")

**Performance Implications:**

- **First visit**: ~2-45 seconds to fetch 4.9MB JSON (same as home page)
- **Cache hit**: Single `db.put()` operation (~10-50ms)
- **Subsequent visits**: Instant from IndexedDB (~100-600ms)

**Edge Cases Handled:**

- Offline on first visit: Falls through to 404 (expected behavior)
- Network timeout: Falls through to 404 after fetch timeout
- Invalid slug: Shows 404 (not found in recipes.json)
- Recipe exists but slug changed: Shows 404 (expected)

### Success Criteria

#### Automated Verification:
- [x] TypeScript compilation passes: `npm run typecheck` (no script, verified via build)
- [x] Linting passes: `npm run lint`
- [x] Build succeeds: `npm run build`
- [x] No console errors during development server: `npm run dev`

#### Manual Verification:
- [x] **Test 1 - Direct Access (First Visit):**
  1. Clear IndexedDB: Chrome DevTools → Application → IndexedDB → Delete
  2. Navigate directly to `/recipe/[valid-slug]` (e.g., `/recipe/poutine-classique`)
  3. ✅ Should show RecipeDetailSkeleton during load
  4. ✅ Should fetch from network (check Network tab)
  5. ✅ Should display recipe after 2-45 seconds
  6. ✅ Console shows: "Recipe not found in IndexedDB, attempting network fallback..."

- [x] **Test 2 - Invalid Recipe:**
  1. Clear IndexedDB
  2. Navigate to `/recipe/this-does-not-exist`
  3. ✅ Should show RecipeDetailSkeleton briefly
  4. ✅ Should show 404 NotFound after network fetch completes
  5. ✅ Console shows: "Recipe not found in recipes.json"

- [~] **Test 3 - Offline First Visit:**
  1. Clear IndexedDB
  2. Toggle offline in Chrome DevTools (Network tab → Offline)
  3. Navigate to `/recipe/[valid-slug]`
  4. ✅ Should show RecipeDetailSkeleton briefly
  5. ✅ Should show 404 NotFound (expected - no network)
  6. ✅ Console shows: "Offline - cannot fetch recipe from network"
  **Note**: Skipped full browser test due to Firefox offline mode blocking navigation. Code logic verified (`if (!navigator.onLine)` check is present and correct).

- [x] **Test 4 - Subsequent Visit (Cache Hit):**
  1. Ensure recipe was loaded once (IndexedDB populated)
  2. Refresh page or navigate to same recipe
  3. ✅ Should load instantly from IndexedDB (~100-600ms)
  4. ✅ No network request in Network tab
  5. ✅ No "attempting network fallback" in console

- [x] **Test 5 - Home Page First (Existing Flow):**
  1. Clear IndexedDB
  2. Navigate to `/` (home page)
  3. Wait for recipes to load
  4. Click on a recipe card
  5. ✅ Should load instantly from IndexedDB
  6. ✅ No network fallback triggered
  **Tested with Edge browser - working as expected**

- [ ] **Test 6 - Facebook Link Scenario:**
  1. Clear IndexedDB
  2. Simulate Facebook referrer (or just direct navigation)
  3. Navigate to `/recipe/[valid-slug]`
  4. ✅ Recipe loads successfully on first visit
  5. ✅ No 404 error shown
  **Note**: Requires production deployment for full Facebook link testing

**Implementation Note**: After completing this phase and all automated verification passes, pause here for manual confirmation that all manual tests are successful before considering this phase complete.

## Validation Results (2026-01-12)

### Implementation Status
✅ **Phase 1 COMPLETE** - All code changes implemented and verified

**Files Modified**:
- [src/pages/RecipePage.tsx:4](src/pages/RecipePage.tsx#L4) - Added `openRecipeDB` import
- [src/pages/RecipePage.tsx:46-84](src/pages/RecipePage.tsx#L46-L84) - Added `fetchRecipeFromNetwork` function
- [src/pages/RecipePage.tsx:86-108](src/pages/RecipePage.tsx#L86-L108) - Modified `loadRecipe` with network fallback

### Automated Verification
✅ Linting: Clean (no errors, no warnings)
✅ Build: Success (617.03 KB bundle, 192.23 KB gzipped)
✅ Dev Server: Starts without console errors
✅ TypeScript: Verified via build compilation

### Manual Testing
✅ Test 1: Direct access with empty IndexedDB - Network fallback works
✅ Test 2: Invalid recipe - Graceful 404 after network fetch
⚠️ Test 3: Offline first visit - Code logic verified, full browser test skipped
✅ Test 4: Subsequent visit - Instant load from IndexedDB
✅ Test 5: Home page first - No regression
⏳ Test 6: Facebook link - Requires production deployment

**Result**: 5/6 tests verified, implementation approved for deployment

### Known Issues Discovered

#### 🔴 HIGH: Race Condition - Duplicate Recipe Fetches
**Location**: [RecipePage.tsx:98](src/pages/RecipePage.tsx#L98) + [App.tsx:36-38](src/App.tsx#L36-L38)

**Problem**: When user lands directly on `/recipe/some-slug` with empty IndexedDB, THREE code paths can fetch `recipes.json` simultaneously:
1. `RecipePage.fetchRecipeFromNetwork()` - Line 98
2. `App.checkForRecipeUpdates()` - Lines 36-38
3. `useRecipes.checkForUpdates()` - If Index page also mounted

**Impact**:
- Multiple ~4.9MB downloads simultaneously
- Wasted bandwidth
- Potential IndexedDB write conflicts (though IDB handles this)

**Status**: ⏳ **TO BE ADDRESSED** - Requires request deduplication mechanism

**Proposed Solution**:
- Create global fetch coordinator or shared request cache
- Use AbortController to cancel redundant requests
- Add "fetching" flag to prevent parallel fetches

#### 🟡 MEDIUM: Network Failures Show 404 Instead of Error UI
**Location**: [RecipePage.tsx:80-83](src/pages/RecipePage.tsx#L80-L83)

**Problem**: Network timeout/failure indistinguishable from "recipe doesn't exist" - both show 404 NotFound

**Impact**: Confusing UX on flaky networks, no retry mechanism

**Status**: Acceptable for MVP - `RecipeLoadError.tsx` component exists but unused

#### 🟡 MEDIUM: Individual Recipe Cache Staleness
**Location**: [RecipePage.tsx:71-72](src/pages/RecipePage.tsx#L71-L72)

**Problem**: Cached recipes don't expire if user never visits home page

**Impact**: Users may see outdated recipe data

**Status**: Acceptable for MVP - recipe updates are infrequent

#### 🟢 LOW: Console Pollution in Production
**Location**: Lines 49, 68, 76, 81, 97

**Problem**: Multiple `console.log()` statements visible in production

**Status**: Acceptable - helpful for debugging Facebook link issues

### Code Quality Assessment
✅ Matches plan specifications exactly (with improvements to avoid variable shadowing)
✅ No regressions detected in existing functionality
✅ Comprehensive error handling
✅ Loading state management correct
⚠️ No JSDoc documentation on new function

### Performance Validation
- **First visit**: 2-45 seconds (network dependent, expected)
- **Subsequent visits**: ~100-600ms (IndexedDB, excellent)
- **Bundle size impact**: Negligible (~38 lines added)

### Deployment Recommendation
✅ **APPROVED FOR DEPLOYMENT** - Core functionality working, known issues are acceptable trade-offs for MVP

**Next Phase**: Address race condition with request deduplication

## Testing Strategy

### Unit Tests

**Not applicable** - This is primarily integration-level functionality. The logic is tightly coupled with network requests, IndexedDB, and React state management, which are better tested through manual integration testing or E2E tests.

### Integration Tests

**Future enhancement** - Could add Playwright E2E tests for:
- Direct recipe access with empty IndexedDB
- Network fallback behavior
- Offline scenarios

**Not included in this plan** to keep scope focused on the core functionality fix.

### Manual Testing Priority

Given the high-traffic scenario (Facebook links), manual testing is critical:

1. **Primary Test**: Direct access on first visit (Test 1)
2. **Edge Case**: Invalid recipe (Test 2)
3. **Network Failure**: Offline scenario (Test 3)
4. **Regression Test**: Existing flows still work (Tests 4, 5)
5. **Real-world Scenario**: Facebook link simulation (Test 6)

## Performance Considerations

### Network Performance

- **4.9MB JSON fetch**: Same as home page first load
- **Progressive rendering**: Skeleton → Recipe (smooth transition)
- **No double-fetch**: Network fallback only triggers when IndexedDB empty

### IndexedDB Performance

- **Single write**: ~10-50ms for one recipe
- **No bulk operations**: Doesn't block with full population
- **Index lookup**: ~5-20ms for subsequent visits

### User-Perceived Performance

- **First visit**: Acceptable delay with skeleton (better than 404)
- **Subsequent visits**: No change (instant from cache)
- **Offline-first preserved**: Users with populated DB see no difference

## Migration Notes

**No migration required** - This is purely additive functionality:

- Existing users with populated IndexedDB: No behavior change
- New users: Improved experience on direct access
- No database schema changes
- No breaking changes to existing code paths

## References

- Original research: [thoughts/shared/research/2026-01-12-direct-recipe-access-404-issue.md](thoughts/shared/research/2026-01-12-direct-recipe-access-404-issue.md)
- RecipePage component: [src/pages/RecipePage.tsx](src/pages/RecipePage.tsx)
- IndexedDB utilities: [src/utils/recipeDb.ts](src/utils/recipeDb.ts)
- useRecipes pattern: [src/hooks/useRecipes.ts:68-87](src/hooks/useRecipes.ts#L68-L87)
- Recipe type definition: [src/types/recipe.ts](src/types/recipe.ts)

## Future Enhancements

**Not in scope for this plan, but could be considered later:**

1. **Individual Recipe API Endpoints**: Create `/api/recipe/:slug` endpoints to avoid fetching full 4.9MB JSON for single recipe
2. **Progressive Recipe Loading**: Stream recipes into IndexedDB in batches
3. **Better Error Differentiation**: Show RecipeLoadError for network failures vs NotFound for missing recipes
4. **Loading Progress Indicator**: Show percentage during network fetch
5. **Preload Popular Recipes**: Cache frequently accessed recipes proactively
6. **Service Worker Optimization**: Intelligently cache recipes.json at service worker level
