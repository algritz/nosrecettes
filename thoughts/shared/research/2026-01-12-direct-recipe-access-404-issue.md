---
date: 2026-01-12T18:45:00-05:00
researcher: Claude Code
git_commit: 838057dddd34243ab45d56ae6f859a5922332bf8
branch: main
repository: nosrecettes.ca
topic: "Direct Recipe Access Shows 404 During Recipe List Loading"
tags: [research, codebase, recipes, routing, indexeddb, loading-states, ux-issue]
status: complete
last_updated: 2026-01-12
last_updated_by: Claude Code
---

# Research: Direct Recipe Access Shows 404 During Recipe List Loading

**Date**: 2026-01-12T18:45:00-05:00
**Researcher**: Claude Code
**Git Commit**: 838057dddd34243ab45d56ae6f859a5922332bf8
**Branch**: main
**Repository**: nosrecettes.ca

## Research Question

When a user accesses a recipe directly (e.g., User A shares a recipe link with User B who has never visited the site), User B sees a 404 error while the recipe list loads. The question is: what is the current implementation that causes this behavior, and how does the system handle direct recipe access versus navigating from the home page?

## Summary

The nosrecettes.ca application uses IndexedDB as its primary client-side data store. On first visit, the app fetches a ~4.9MB `/recipes.json` file and populates IndexedDB. The issue occurs because:

1. **Recipe pages query IndexedDB directly** via [RecipePage.tsx:51](src/pages/RecipePage.tsx#L51) using `getRecipeBySlug(slug)`
2. **No fallback to network exists** - if IndexedDB is empty, the function returns `undefined`
3. **Recipe list loading is independent** - the recipe page doesn't wait for or coordinate with the global recipe list initialization
4. **First-time visitors see 404** because the database hasn't been populated yet when they land on a recipe page

When users navigate from the home page first, the [Index.tsx:24](src/pages/Index.tsx#L24) component triggers recipe loading via `useRecipes()`, which populates IndexedDB before any recipe page loads.

## Detailed Findings

### Recipe Routing Architecture

The application uses React Router v6 with slug-based routing:

**Route Configuration** ([App.tsx:61-70](src/App.tsx#L61-L70)):
```typescript
<Routes>
  <Route path="/" element={<Index />} />
  <Route path="/recipe/:slug" element={<RecipePage />} />
  <Route path="/edit-recipe/:slug" element={<EditRecipe />} />
  <Route path="/new-recipe" element={<NewRecipe />} />
  <Route path="/admin" element={<Admin />} />
  <Route path="/manage-categories" element={<ManageCategories />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

**URL Pattern**: Individual recipes use `/recipe/:slug` format (e.g., `/recipe/poutine-classique`)

### IndexedDB Data Storage

**Database Configuration** ([recipeDb.ts:24-46](src/utils/recipeDb.ts#L24-L46)):
- Database name: `'nosrecettes'`
- Database version: `1`
- Object store: `'recipes'` with primary key `'id'`
- Index: `'by-slug'` on `'slug'` field (unique constraint)

**Key Functions**:
- `populateRecipes()` - [recipeDb.ts:88-111](src/utils/recipeDb.ts#L88-L111) - Bulk inserts all recipes
- `getAllRecipes()` - [recipeDb.ts:49-53](src/utils/recipeDb.ts#L49-L53) - Returns all recipes
- `getRecipeBySlug(slug)` - [recipeDb.ts:55-60](src/utils/recipeDb.ts#L55-L60) - Queries by slug index
- `isRecipeDBPopulated()` - [recipeDb.ts:152-156](src/utils/recipeDb.ts#L152-L156) - Checks if database has data

### Recipe List Initialization Flow

**Home Page Loading** ([Index.tsx:24-28](src/pages/Index.tsx#L24-L28)):
```typescript
const { recipes, loading: recipesLoading, error: recipesError } = useRecipes()
```

**useRecipes Hook Behavior** ([useRecipes.ts:18-119](src/hooks/useRecipes.ts#L18-L119)):

#### First Visit Sequence:
1. Check if IndexedDB is populated ([useRecipes.ts:33-34](src/hooks/useRecipes.ts#L33-L34))
2. If empty, check network connectivity ([useRecipes.ts:69-71](src/hooks/useRecipes.ts#L69-L71))
3. Fetch `/recipes.json` (~4.9MB) ([useRecipes.ts:73-78](src/hooks/useRecipes.ts#L73-L78))
4. **BLOCKING**: Populate IndexedDB with all recipes ([useRecipes.ts:79](src/hooks/useRecipes.ts#L79))
5. Set state to `loading: false` ([useRecipes.ts:81-86](src/hooks/useRecipes.ts#L81-L86))

**Timing**: First visit takes approximately **2-45 seconds** depending on network speed:
- Fast WiFi: ~2-3 seconds
- 3G connection: ~30-40 seconds
- Includes network fetch + IndexedDB insertion time

#### Subsequent Visit Sequence:
1. Check if IndexedDB is populated (returns `true`)
2. Load recipes from IndexedDB ([useRecipes.ts:38](src/hooks/useRecipes.ts#L38)) - takes ~100-600ms
3. Set state to `loading: false`
4. Background update check runs asynchronously ([useRecipes.ts:48-52](src/hooks/useRecipes.ts#L48-L52))

### Direct Recipe Access Flow

**RecipePage Component** ([RecipePage.tsx:18-125](src/pages/RecipePage.tsx#L18-L125)):

#### Loading Sequence:
1. Extract slug from URL params ([RecipePage.tsx:19](src/pages/RecipePage.tsx#L19))
   ```typescript
   const { slug } = useParams<{ slug: string }>()
   ```

2. Initialize component state ([RecipePage.tsx:20-21](src/pages/RecipePage.tsx#L20-L21))
   ```typescript
   const [recipe, setRecipe] = useState<Recipe | null>(null)
   const [loading, setLoading] = useState(true)
   ```

3. Show skeleton during loading ([RecipePage.tsx:61-63](src/pages/RecipePage.tsx#L61-L63))
   ```typescript
   if (loading) {
     return <RecipeDetailSkeleton />
   }
   ```

4. Load recipe from IndexedDB ([RecipePage.tsx:46-59](src/pages/RecipePage.tsx#L46-L59))
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

5. Display recipe or 404 ([RecipePage.tsx:65-125](src/pages/RecipePage.tsx#L65-L125))
   ```typescript
   if (!recipe) {
     return (
       <>
         <SEOHead
           title="Recette non trouvée - Nos Recettes"
           description="La recette que vous recherchez n'existe pas..."
           url={`/recipe/${slug}`}
         />
         <NotFound />
       </>
     )
   }
   ```

#### Key Independence Pattern

**Critical Finding**: RecipePage operates completely independently of the global recipe list state.

**Evidence**:
- RecipePage does NOT use the `useRecipes()` hook ([RecipePage.tsx:1-17](src/pages/RecipePage.tsx#L1-L17))
- It imports and calls `getRecipeBySlug()` directly ([RecipePage.tsx:4](src/pages/RecipePage.tsx#L4))
- The useEffect dependency array only includes `[slug]` ([RecipePage.tsx:30](src/pages/RecipePage.tsx#L30))
- No coordination or waiting for recipe list initialization

### getRecipeBySlug Implementation

**Function Behavior** ([recipeDb.ts:55-60](src/utils/recipeDb.ts#L55-L60)):
```typescript
export async function getRecipeBySlug(
  slug: string,
): Promise<Recipe | undefined> {
  const db = await openRecipeDB()
  return db.getFromIndex('recipes', 'by-slug', slug)
}
```

**Return Values**:
- Returns `Recipe` object if found in IndexedDB
- Returns `undefined` if:
  - No recipe with matching slug exists
  - IndexedDB is empty (not yet populated)
  - The 'by-slug' index has no matching entry

**No Fallback Mechanism**:
- Does NOT check if database is populated
- Does NOT attempt to fetch from network
- Does NOT provide alternative data sources
- Simply returns `undefined` for empty database

### The 404 Error Scenario

**What happens when User B accesses `/recipe/some-recipe` on first visit:**

1. **RecipePage mounts** ([RecipePage.tsx:18](src/pages/RecipePage.tsx#L18))
2. **Shows skeleton** - `loading: true` ([RecipePage.tsx:61-63](src/pages/RecipePage.tsx#L61-L63))
3. **Queries IndexedDB** - `getRecipeBySlug(slug)` ([RecipePage.tsx:51](src/pages/RecipePage.tsx#L51))
4. **Returns undefined** - Database is empty on first visit
5. **Sets recipe to null** ([RecipePage.tsx:52](src/pages/RecipePage.tsx#L52))
6. **Sets loading to false** ([RecipePage.tsx:57](src/pages/RecipePage.tsx#L57))
7. **Renders NotFound** - `!recipe` condition is true ([RecipePage.tsx:65-75](src/pages/RecipePage.tsx#L65-L75))

**Meanwhile, in parallel:**
- App.tsx checks for recipe updates ([App.tsx:36-38](src/App.tsx#L36-L38))
- This does NOT populate IndexedDB on first visit
- User sees 404 even though recipe exists in the remote `recipes.json`

### Loading State Components

**Skeleton Components**:
- [RecipeListSkeleton.tsx](src/components/RecipeListSkeleton.tsx) - Used on Index page during initial load
- [RecipeDetailSkeleton.tsx](src/components/RecipeDetailSkeleton.tsx) - Used on RecipePage during load
- [skeleton.tsx](src/components/ui/skeleton.tsx) - Base skeleton component with `animate-pulse`

**Usage Pattern** ([RecipePage.tsx:61-63](src/pages/RecipePage.tsx#L61-L63)):
```typescript
if (loading) {
  return <RecipeDetailSkeleton />
}
```

**Error Component**:
- [RecipeLoadError.tsx](src/components/RecipeLoadError.tsx) - Handles recipe fetch failures
- [NotFound.tsx](src/pages/NotFound.tsx) - 404 page component
- [NotFound.tsx (component)](src/components/NotFound.tsx) - Reusable 404 UI

### Home Page vs Direct Access Comparison

#### Scenario A: User navigates to home page first (/)
1. Index component mounts
2. `useRecipes()` hook triggers ([Index.tsx:24](src/pages/Index.tsx#L24))
3. Checks IndexedDB - finds it empty
4. Fetches `/recipes.json`
5. Populates IndexedDB (blocking operation, 2-45 seconds)
6. Shows RecipeListSkeleton during this time ([Index.tsx:101-103](src/pages/Index.tsx#L101-L103))
7. Once complete, renders recipe list
8. User clicks recipe card
9. RecipePage loads recipe instantly from populated IndexedDB
10. ✅ **Success**: Recipe displays correctly

#### Scenario B: User lands directly on /recipe/some-recipe
1. RecipePage component mounts
2. Shows RecipeDetailSkeleton
3. Calls `getRecipeBySlug(slug)`
4. IndexedDB is empty, returns `undefined`
5. Sets loading to false, recipe remains null
6. ❌ **Failure**: Shows NotFound component (404 error)
7. User sees: "404 - Page non trouvée" ([NotFound.tsx:9-21](src/components/NotFound.tsx#L9-L21))

**Recovery Path**:
- User clicks "Retour à l'accueil" button
- Navigates to `/` home page
- Scenario A flow triggers and populates IndexedDB
- User can now navigate back to recipe page successfully

### Current Architecture Characteristics

**Strengths**:
- Fast subsequent loads (~100-600ms from IndexedDB)
- Offline-first architecture with PWA support
- Background updates without blocking UI
- Efficient indexed lookups by slug

**Weaknesses**:
- No progressive loading on first visit
- All-or-nothing approach - entire 4.9MB must load before any recipe accessible
- Direct recipe links fail on first visit
- No individual recipe network fallback
- Single point of failure for initial data load
- Poor UX for shared recipe links

## Code References

### Core Routing Files
- [App.tsx:61-70](src/App.tsx#L61-L70) - Route definitions
- [RecipePage.tsx:18-125](src/pages/RecipePage.tsx#L18-L125) - Recipe detail page component
- [Index.tsx:24-28](src/pages/Index.tsx#L24-L28) - Home page with recipe list

### Data Loading Files
- [useRecipes.ts:18-119](src/hooks/useRecipes.ts#L18-L119) - Recipe loading hook
- [recipeDb.ts:55-60](src/utils/recipeDb.ts#L55-L60) - getRecipeBySlug function
- [recipeDb.ts:88-111](src/utils/recipeDb.ts#L88-L111) - populateRecipes function
- [recipeDb.ts:152-156](src/utils/recipeDb.ts#L152-L156) - isRecipeDBPopulated function

### UI Component Files
- [RecipeDetailSkeleton.tsx](src/components/RecipeDetailSkeleton.tsx) - Recipe page loading state
- [RecipeListSkeleton.tsx](src/components/RecipeListSkeleton.tsx) - List page loading state
- [NotFound.tsx](src/pages/NotFound.tsx) - 404 page component
- [RecipeLoadError.tsx](src/components/RecipeLoadError.tsx) - Error handling component

### Utility Files
- [recipeUpdates.ts](src/utils/recipeUpdates.ts) - Update checking logic
- [seoUtils.ts:109](src/utils/seoUtils.ts#L109) - Recipe URL generation

### Build Scripts
- [generate-recipes-json.ts](scripts/generate-recipes-json.ts) - Generates public/recipes.json at build time

## Architecture Documentation

### Data Flow Pattern

The application follows an **offline-first architecture** with these characteristics:

1. **Build Time**: Static recipes compiled into `/public/recipes.json`
2. **First Visit**: Network fetch + IndexedDB population (blocking)
3. **Subsequent Visits**: IndexedDB read (fast)
4. **Updates**: Background version check with smart merge

### IndexedDB Schema

```
Database: 'nosrecettes' (version 1)
├── Object Store: 'recipes'
│   ├── Key Path: 'id'
│   ├── Index: 'by-slug' (unique) on 'slug' field
│   └── Index: 'by-category' (multiEntry) on 'categories' field
└── Object Store: 'metadata'
    └── Key Path: 'key'
```

### Loading State Transitions

```
Component Mount
  ↓
loading: true (show skeleton)
  ↓
Query IndexedDB
  ↓
Data Found?
├─ Yes → Set recipe, loading: false → Display recipe
└─ No → Set null, loading: false → Display 404
```

## Related Research

No previous research documents found on this topic.

## Open Questions

1. **Should individual recipes be fetchable from the network as a fallback?** This would allow direct links to work on first visit but add complexity.

2. **Should the recipe list be progressively loaded?** Currently all-or-nothing approach. Could load in batches or prioritize visible recipes.

3. **Should RecipePage coordinate with useRecipes?** Currently operates independently. Could wait for global initialization.

4. **What is the acceptable loading time for first visit?** 2-45 seconds may be too long for some network conditions.

5. **Should there be a separate public API endpoint** for individual recipe fetching to handle direct access?

6. **How common is the direct access scenario?** Metrics would inform priority of fixing this issue.

## Decisions and Next Steps

**Date**: 2026-01-12
**Decided By**: Product Owner

### Selected Approach: Network Fallback for Individual Recipes (Priority 1)

**Decision**: Implement network fallback for direct recipe access when IndexedDB is empty.

**Rationale**:
- Facebook page frequently links directly to recipes, making this a high-traffic scenario
- Direct approach solves the immediate UX problem without major architectural changes
- Maintains offline-first benefits for subsequent visits
- Relatively straightforward implementation compared to full progressive loading

### Answers to Open Questions

1. **Network fallback?** ✅ **YES** - If IndexedDB query returns `undefined`, fallback to fetching `/recipes.json` and finding the specific recipe

2. **Progressive loading?** 🔄 **FUTURE** - Could stream recipes to IndexedDB if feasible, but not immediate priority

3. **RecipePage coordination with useRecipes?** ❌ **NO** - Analysis shows this would be a UX regression:
   - **Online Impact**: Would force 2-45 second wait for entire recipe list even when user needs just one recipe
   - **Offline Impact**: No benefit - both approaches fail if offline with empty IndexedDB
   - **Verdict**: Keep independent operation, add network fallback instead

4. **Acceptable loading time?** ⏱️ **2-45 seconds is acceptable IF** there's a proper loading screen with progress indicator

5. **Separate API endpoint?** 💡 **NICE TO HAVE** - Not too complicated, could be explored if needed

6. **Direct access frequency?** 📊 **QUITE COMMON** - Facebook page links directly to recipes regularly (no hard metrics available)

### Implementation Plan

A separate implementation plan will be created in a new context to detail:
- Network fallback mechanism for `getRecipeBySlug()` or RecipePage
- Error handling for network failures
- Optional: Cache individual fetched recipe to IndexedDB
- Progress indicators for better perceived performance
- Testing strategy for various network conditions
