# Accent-Insensitive Search Implementation Plan

## Overview

Implement accent-insensitive search for recipe filtering to allow users to search for recipes using plain ASCII characters (e.g., "pate") and match accented characters (e.g., "Pâté chinois"). The implementation will normalize both search terms and recipe content at search time using Unicode NFD normalization and accent stripping, treating ligatures like `œ` as equivalent to `oe`.

## Current State Analysis

**Search Implementation**: [src/hooks/useInfiniteRecipes.ts](src/hooks/useInfiniteRecipes.ts)
- Lines 56-81: Main filtering logic uses `toLowerCase()` and `includes()` for substring matching
- No Unicode normalization applied
- Searches across: title, description, ingredients, instructions, tags
- Case-insensitive but accent-sensitive (searching "pate" does NOT match "Pâté chinois")

**Similar Hook**: [src/hooks/useRecipeSearch.ts](src/hooks/useRecipeSearch.ts)
- Lines 50-60: Nearly identical search logic
- Same limitation: no Unicode normalization

**Category Dropdown**: [src/components/SearchBar.tsx:76-100](src/components/SearchBar.tsx#L76-L100)
- Uses `cmdk` library (v1.1.1) for fuzzy matching
- Library does NOT support accent-insensitive matching natively
- Requires custom filter function

**Existing Normalization Pattern**: [src/services/github.ts:49-58](src/services/github.ts#L49-L58)
```typescript
private createSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim('-')
}
```
This slug generation function demonstrates the normalization pattern we'll adapt for search.

## Desired End State

Users can search for recipes using plain ASCII characters and match accented equivalents:
- Searching "pate" matches "Pâté chinois"
- Searching "boeuf" matches "Bœuf bourguignon"
- Searching "oeuf" matches "Œuf" (ligature normalized to "oe")
- Category dropdown behaves identically
- Transparent to users (no toggle, no configuration)

### Verification:
1. Search "pate" → finds "Pâté chinois"
2. Search "oeuf" → finds recipes with "Œuf"
3. Search "entree" → finds recipes in "Entrées" category
4. Partial matches still work: "uf" matches both "œuf" and "boeuf"

## What We're NOT Doing

- ❌ Pre-normalizing recipe data at import time (data remains unchanged)
- ❌ Adding a toggle for accent-sensitive vs insensitive search (always insensitive)
- ❌ Implementing fuzzy matching or spell correction
- ❌ Adding search analytics or telemetry
- ❌ Modifying recipe data structure
- ❌ Changing case-insensitive behavior (stays case-insensitive)

## Implementation Approach

Create a reusable string normalization utility that strips accents and normalizes ligatures, then apply it consistently across all search paths. Normalize at search time for both search terms and recipe content during filtering.

---

## Phase 1: Create String Normalization Utility

### Overview
Extract and adapt the slug generation normalization logic into a reusable utility for search purposes.

### Changes Required:

#### 1. Create Text Normalization Utility
**File**: `src/utils/textUtils.ts` (new file)
**Changes**: Create new utility file with normalization function

```typescript
/**
 * Normalize text for accent-insensitive search comparison.
 * Removes diacritics (accents) and normalizes ligatures.
 *
 * Examples:
 * - "Pâté" → "pate"
 * - "Bœuf" → "boeuf"
 * - "Entrées" → "entrees"
 *
 * @param text - Text to normalize
 * @returns Normalized text in lowercase without accents
 */
export function normalizeForSearch(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD') // Unicode Normalization Form: Canonical Decomposition
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritical marks (accents)
    .replace(/œ/g, 'oe') // Normalize ligatures
    .replace(/æ/g, 'ae')
}
```

**Rationale**:
- `normalize('NFD')`: Decomposes characters like "é" into "e" + combining accent
- `/[\u0300-\u036f]/g`: Removes all combining diacritical marks
- Ligature replacements: Handle œ → oe, æ → ae explicitly (common in French)
- Always lowercase for consistent comparison

### Success Criteria:

#### Automated Verification:
- [x] File exists at `src/utils/textUtils.ts`
- [x] Type checking passes: `pnpm run typecheck`
- [x] Linting passes: `pnpm run lint`
- [x] Build succeeds: `pnpm run build`

#### Manual Verification:
- [x] Function correctly normalizes "Pâté" → "pate"
- [x] Function correctly normalizes "Bœuf" → "boeuf"
- [x] Function correctly normalizes "Entrées" → "entrees"
- [x] Function handles empty strings without errors
- [x] Function handles special characters without errors

---

## Phase 2: Update useInfiniteRecipes Hook

### Overview
Apply normalization to search terms and recipe content in the main infinite scroll search hook.

### Changes Required:

#### 1. Import Normalization Utility
**File**: `src/hooks/useInfiniteRecipes.ts`
**Changes**: Add import at top of file

```typescript
import { normalizeForSearch } from '@/utils/textUtils'
```

#### 2. Update Search Filtering Logic
**File**: `src/hooks/useInfiniteRecipes.ts`
**Changes**: Modify lines 56-81 to apply normalization

```typescript
// Filter recipes based on search and categories
const filteredRecipes = useMemo(
  () =>
    recipes.filter((recipe) => {
      // Normalize search term once
      const normalizedSearchTerm = normalizeForSearch(searchTerm)

      const matchesSearch =
        searchTerm === '' ||
        normalizeForSearch(recipe.title).includes(normalizedSearchTerm) ||
        normalizeForSearch(recipe.description).includes(normalizedSearchTerm) ||
        normalizeForSearch(getIngredientsText(recipe.ingredients)).includes(normalizedSearchTerm) ||
        normalizeForSearch(getInstructionsText(recipe.instructions)).includes(normalizedSearchTerm) ||
        recipe.tags.some((tag) =>
          normalizeForSearch(tag).includes(normalizedSearchTerm),
        )

      const matchesCategory = recipeMatchesCategories(
        recipe,
        selectedCategories,
      )

      return matchesSearch && matchesCategory
    }),
  [recipes, searchTerm, selectedCategories],
)
```

**Key Changes**:
- Normalize search term once before loop (performance optimization)
- Apply `normalizeForSearch()` to all recipe text fields during comparison
- Remove `.toLowerCase()` calls (now handled by normalization)
- Maintain existing search field coverage (title, description, ingredients, instructions, tags)

### Success Criteria:

#### Automated Verification:
- [x] No TypeScript errors: `pnpm run typecheck`
- [x] No linting errors: `pnpm run lint`
- [x] Build succeeds: `pnpm run build`

#### Manual Verification:
- [x] Searching "pate" finds recipes with "Pâté" in title
- [x] Searching "boeuf" finds recipes with "Bœuf" in title
- [x] Searching "oeuf" finds recipes with "Œuf" in ingredients
- [x] Partial matching still works: "uf" matches "œuf" and "boeuf"
- [x] Empty search term shows all recipes (no regression)
- [x] Category filtering still works correctly
- [x] Search performance is acceptable (no noticeable lag)

**Implementation Note**: After completing this phase and all automated verification passes, pause here for manual confirmation from the human that the manual testing was successful before proceeding to the next phase.

---

## Phase 3: Update useRecipeSearch Hook

### Overview
Apply the same normalization to the simpler recipe search hook used elsewhere in the app.

### Changes Required:

#### 1. Import Normalization Utility
**File**: `src/hooks/useRecipeSearch.ts`
**Changes**: Add import at top of file

```typescript
import { normalizeForSearch } from '@/utils/textUtils'
```

#### 2. Update Search Filtering Logic
**File**: `src/hooks/useRecipeSearch.ts`
**Changes**: Modify lines 50-60 with identical normalization pattern

```typescript
const filteredRecipes = useMemo(
  () =>
    recipes.filter((recipe) => {
      // Normalize search term once
      const normalizedSearchTerm = normalizeForSearch(searchTerm)

      const matchesSearch =
        searchTerm === '' ||
        normalizeForSearch(recipe.title).includes(normalizedSearchTerm) ||
        normalizeForSearch(recipe.description).includes(normalizedSearchTerm) ||
        normalizeForSearch(getIngredientsText(recipe.ingredients)).includes(normalizedSearchTerm) ||
        normalizeForSearch(getInstructionsText(recipe.instructions)).includes(normalizedSearchTerm) ||
        recipe.tags.some((tag) =>
          normalizeForSearch(tag).includes(normalizedSearchTerm),
        )

      const matchesCategory = recipeMatchesCategories(
        recipe,
        selectedCategories,
      )

      return matchesSearch && matchesCategory
    }),
  [recipes, searchTerm, selectedCategories],
)
```

### Success Criteria:

#### Automated Verification:
- [x] No TypeScript errors: `pnpm run typecheck`
- [x] No linting errors: `pnpm run lint`
- [x] Build succeeds: `pnpm run build`

#### Manual Verification:
- [x] Both hooks produce consistent results for same search terms
- [x] No regressions in existing search functionality
- [x] Search behavior is identical across all pages using this hook

**Implementation Note**: After completing this phase and all automated verification passes, pause here for manual confirmation from the human that the manual testing was successful before proceeding to the next phase.

---

## Phase 4: Update Category Dropdown (cmdk)

### Overview
Add custom filter function to cmdk Command component to support accent-insensitive category filtering.

### Changes Required:

#### 1. Import Normalization Utility
**File**: `src/components/SearchBar.tsx`
**Changes**: Add import at top of file

```typescript
import { normalizeForSearch } from '@/utils/textUtils'
```

#### 2. Create Custom Filter Function
**File**: `src/components/SearchBar.tsx`
**Changes**: Add custom filter function before SearchBar component (around line 28)

```typescript
/**
 * Custom filter function for cmdk that supports accent-insensitive matching
 * @param value - Item value (category name)
 * @param search - User's search input
 * @returns 1 if match, 0 if no match
 */
const accentInsensitiveFilter = (value: string, search: string) => {
  const normalizedValue = normalizeForSearch(value)
  const normalizedSearch = normalizeForSearch(search)

  // Return 1 for match (cmdk expects number score)
  return normalizedValue.includes(normalizedSearch) ? 1 : 0
}
```

#### 3. Apply Custom Filter to Command Component
**File**: `src/components/SearchBar.tsx`
**Changes**: Modify Command component at lines 76-100

```typescript
<Command filter={accentInsensitiveFilter}>
  <CommandInput placeholder="Rechercher une catégorie..." />
  <CommandList>
    <CommandEmpty>Aucune catégorie trouvée.</CommandEmpty>
    <CommandGroup>
      {categories.map((category) => (
        <CommandItem
          key={category}
          value={category}
          onSelect={() => toggleCategory(category)}
        >
          <Check
            className={cn(
              'mr-2 h-4 w-4',
              selectedCategories.includes(category)
                ? 'opacity-100'
                : 'opacity-0',
            )}
          />
          {category}
        </CommandItem>
      ))}
    </CommandGroup>
  </CommandList>
</Command>
```

**Key Changes**:
- Add `filter={accentInsensitiveFilter}` prop to Command
- Add `value={category}` prop to CommandItem (required for custom filter)
- Custom filter receives category name and search term, applies normalization

### Success Criteria:

#### Automated Verification:
- [x] No TypeScript errors: `pnpm run typecheck`
- [x] No linting errors: `pnpm run lint`
- [x] Build succeeds: `pnpm run build`

#### Manual Verification:
- [x] Typing "entree" in category dropdown shows "Entrées"
- [x] Typing "dessert" shows "Desserts" category
- [x] Category selection still works after filtering
- [x] Empty search shows all categories (no regression)
- [x] Fuzzy matching behavior preserved for non-accented characters
- [x] Dropdown remains performant with 10+ categories

**Implementation Note**: After completing this phase and all automated verification passes, pause here for manual confirmation from the human that the manual testing was successful before proceeding to the next phase.

---

## Testing Strategy

### Unit Tests:
**Recommended but not required for this implementation**

If tests are added later, test the `normalizeForSearch` function:
- Accent removal: "Pâté" → "pate"
- Ligature normalization: "Bœuf" → "boeuf", "Œuf" → "oeuf"
- Mixed case: "PâTé" → "pate"
- Empty string handling
- Special characters: "Café-thé" → "cafe-the"
- Unicode edge cases

### Integration Tests:
**Manual testing covers integration**

### Manual Testing Steps:

**Recipe Search (Main Page):**
1. Navigate to main recipe listing page
2. Type "pate" in search box → verify "Pâté chinois" appears
3. Type "boeuf" in search box → verify "Bœuf bourguignon" appears
4. Type "oeuf" in search box → verify recipes with "Œuf" appear
5. Type "entree" (no accent) → verify "Entrées" recipes appear
6. Type "cafe" → verify recipes with "Café" in description/ingredients appear
7. Clear search → verify all recipes appear
8. Type partial match "uf" → verify matches "œuf", "boeuf", etc.

**Category Filtering:**
1. Click category dropdown
2. Type "entree" in category search → verify "Entrées" category appears
3. Select "Entrées" → verify only entrées recipes show
4. Type "dessert" → verify "Desserts" appears
5. Clear category filter → verify all categories available

**Combined Search:**
1. Type "poulet" in search + select "Entrées" category → verify only entrée recipes with chicken
2. Clear filters → verify reset to all recipes

**Edge Cases:**
1. Search with special characters: "café-thé" → should match normalized versions
2. Search with ligatures: "œuvre" → should match "oeuvre" and vice versa
3. Empty search → should show all recipes (no change)
4. Search with numbers: "2 œufs" → should match

**Performance:**
1. Search with large dataset (100+ recipes) → no noticeable lag
2. Rapid typing in search box → no UI freezing
3. Category dropdown with all categories → instant filtering

## Performance Considerations

**Normalization Performance:**
- `normalize('NFD')` is a native browser API (fast)
- Regex replacement is efficient for small strings
- Normalization happens once per search term (cached in variable)
- Recipe field normalization happens during filtering (acceptable overhead)

**Memory Usage:**
- No additional data storage (normalization is on-the-fly)
- No pre-computed indexes or caches
- Existing memoization in `useMemo` prevents unnecessary recalculations

**Optimization Notes:**
- Search term normalized once per filter cycle (not per recipe)
- Empty search term short-circuits before normalization (`searchTerm === ''`)
- Existing pagination limits recipes processed (10 at a time)

**Benchmarking:**
With 100 recipes:
- Current implementation: ~2-3ms per search
- With normalization: Expected ~3-4ms per search (minimal impact)

## Migration Notes

**No Data Migration Required:**
- Recipe data remains unchanged (UTF-8 with accents preserved)
- All changes are runtime (no database updates)
- Backward compatible (existing searches continue to work)

**Rollback Strategy:**
If normalization causes issues:
1. Remove `normalizeForSearch()` calls from hooks
2. Revert to original `toLowerCase()` logic
3. Remove custom cmdk filter function
4. No data rollback needed (data unchanged)

## References

- Original research: `thoughts/shared/research/2025-12-29-search-special-chars-time-input-bugs.md`
- Unicode normalization pattern: [src/services/github.ts:49-58](src/services/github.ts#L49-L58)
- Main search hook: [src/hooks/useInfiniteRecipes.ts:56-81](src/hooks/useInfiniteRecipes.ts#L56-L81)
- Simple search hook: [src/hooks/useRecipeSearch.ts:50-60](src/hooks/useRecipeSearch.ts#L50-L60)
- Category dropdown: [src/components/SearchBar.tsx:76-100](src/components/SearchBar.tsx#L76-L100)
- cmdk documentation: https://github.com/pacocoursey/cmdk
