---
date: 2025-12-29T18:45:00-05:00
researcher: Claude Code
git_commit: 1b5e5ae5bd2de1b991e0781c026b59ef929ce6bb
branch: main
repository: algritz/nosrecettes
topic: "Search Special Characters and Time Input Auto-Calculation Bugs"
tags: [research, codebase, search, time-input, bugs, unicode, normalization]
status: complete
last_updated: 2025-12-29
last_updated_by: Claude Code
last_updated_note: "Added follow-up decisions on TimeInput removal and TimeRangeInput behavior"
---

# Research: Search Special Characters and Time Input Auto-Calculation Bugs

**Date**: 2025-12-29T18:45:00-05:00
**Researcher**: Claude Code
**Git Commit**: 1b5e5ae5bd2de1b991e0781c026b59ef929ce6bb
**Branch**: main
**Repository**: algritz/nosrecettes

## Research Question

Two bugs to investigate:
1. When searching special chars like é, à, ô, œ etc. should not be relevant - they should be treated like the basic character, both for the input and output of the search
2. Time input editing the days/hours behaves strangely, like as it tries to auto calculate something but doesn't yield the proper value

## Summary

### Bug 1: Special Characters in Search (é, à, ô, œ)

The search functionality currently preserves special characters exactly as typed, requiring users to type accented characters to match accented recipe names. The implementation uses JavaScript's `toLowerCase()` method without any Unicode normalization (NFD/NFC), accent stripping, or diacritic removal. This means searching "pate" will NOT match "Pâté chinois", and "boeuf" will NOT match "Bœuf bourguignon".

**Root Cause**: No character normalization in the search pipeline at [src/hooks/useInfiniteRecipes.ts:61-70](src/hooks/useInfiniteRecipes.ts#L61-L70) and [src/hooks/useRecipeSearch.ts:50-60](src/hooks/useRecipeSearch.ts#L50-L60).

### Bug 2: Time Input Auto-Calculation Behavior

The **deprecated** TimeInput component performs immediate bidirectional conversion between display format (days/hours/minutes) and storage format (total minutes as string) on every keystroke. This causes visual jitter during editing because each keystroke triggers a full recalculation cycle through the parent component.

The **active** TimeRangeInput component (used in EditRecipe and NewRecipe forms) uses internal state management and includes auto-correction logic that automatically copies minimum time values to maximum time fields when max < min. This can cause unexpected value changes during editing.

**Root Causes**:
- TimeInput: Stateless design with immediate recalculation at [src/components/TimeInput.tsx:47-69](src/components/TimeInput.tsx#L47-L69)
- TimeRangeInput: Auto-correction effect at [src/components/TimeRangeInput.tsx:188-205](src/components/TimeRangeInput.tsx#L188-L205)

## Detailed Findings

### Bug 1: Search Special Character Handling

#### Search Implementation

The main search hook [useInfiniteRecipes.ts](src/hooks/useInfiniteRecipes.ts) implements recipe filtering across multiple fields.

**Search State Management** ([useInfiniteRecipes.ts:17-20](src/hooks/useInfiniteRecipes.ts#L17-L20)):
```typescript
const [searchTerm, setSearchTerm] = useState('')
const [selectedCategories, setSelectedCategories] = useState<string[]>([])
```
Search term is stored as-is with no transformation.

**Main Filtering Logic** ([useInfiniteRecipes.ts:56-81](src/hooks/useInfiniteRecipes.ts#L56-L81)):
```typescript
const filteredRecipes = useMemo(
  () =>
    recipes.filter((recipe) => {
      const matchesSearch =
        searchTerm === '' ||
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        getIngredientsText(recipe.ingredients)
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        getInstructionsText(recipe.instructions)
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        recipe.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase()),
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

**Current Character Handling**:
- Uses `String.toLowerCase()` for case-insensitive matching
- Uses `String.includes()` for substring matching
- No Unicode normalization applied
- Accented characters preserved: 'É' → 'é', 'À' → 'à', 'Ô' → 'ô', 'Œ' → 'œ'
- Exact character matching required after lowercasing

**Matching Behavior Examples**:
- Searching "pate" does NOT match "Pâté chinois"
- Searching "pâte" DOES match "Pâté chinois"
- Searching "boeuf" does NOT match "Bœuf bourguignon"
- Searching "bœuf" DOES match "Bœuf bourguignon"

**Fields Searched** ([useInfiniteRecipes.ts:61-70](src/hooks/useInfiniteRecipes.ts#L61-L70)):
1. `recipe.title` - Recipe name
2. `recipe.description` - Recipe description
3. All ingredients (sectioned or flat)
4. All instructions (sectioned or flat)
5. `recipe.tags` - Tag array

#### Category Search (cmdk)

The category dropdown uses the `cmdk` library (version 1.1.1) for fuzzy matching.

**Location**: [src/components/SearchBar.tsx:76-100](src/components/SearchBar.tsx#L76-L100)

**Implementation**:
```typescript
<Command>
  <CommandInput placeholder="Rechercher une catégorie..." />
  <CommandList>
    <CommandEmpty>Aucune catégorie trouvée.</CommandEmpty>
    <CommandGroup>
      {categories.map((category) => (
        <CommandItem
          key={category}
          onSelect={() => toggleCategory(category)}
        >
          {category}
        </CommandItem>
      ))}
    </CommandGroup>
  </CommandList>
</Command>
```

**cmdk Character Handling**:
- Located in [node_modules/cmdk/dist/index.js:1](node_modules/cmdk/dist/index.js#L1)
- Normalization function: `ve(e){return e.toLowerCase().replace(ge," ")}`
- Regex `ge`: `/[\s-]/g` (replaces spaces and hyphens)
- No accent or diacritic removal
- No Unicode decomposition (NFD/NFC)
- Fuzzy matching still requires exact character matches

#### Unicode Normalization Pattern Found

**ONLY location with Unicode normalization**: [src/services/github.ts:49-58](src/services/github.ts#L49-L58)

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

This slug generation function:
1. Converts to lowercase
2. Uses `normalize('NFD')` for Unicode normalization (Canonical Decomposition)
3. Removes diacritical marks (accents) via regex `/[\u0300-\u036f]/g`
4. Removes special characters
5. Converts spaces to hyphens

**This pattern is NOT used in search functionality** - it's only for creating URL-friendly slugs.

#### Recipe Data Storage

**Recipe Type Definition** ([src/types/recipe.ts:7-30](src/types/recipe.ts#L7-L30)):
- All text fields stored as UTF-8 strings
- No preprocessing during import
- Special characters preserved as-is

**Recipe Loading** ([src/recipes/index.ts:6-29](src/recipes/index.ts#L6-L29)):
```typescript
const recipeModules = import.meta.glob('./*.ts', { eager: true })

export const recipes: Recipe[] = []

Object.entries(recipeModules).forEach(([path, module]) => {
  if (path === './index.ts') return

  const moduleExports = module as Record<string, unknown>

  Object.values(moduleExports).forEach((exportedValue) => {
    if (
      exportedValue &&
      typeof exportedValue === 'object' &&
      'id' in exportedValue &&
      'title' in exportedValue
    ) {
      recipes.push(exportedValue as Recipe)
    }
  })
})
```
- Vite's `import.meta.glob` loads all recipe TypeScript files
- No transformation of string data
- Special characters preserved from source

**Recipe Sorting** ([src/recipes/index.ts:32](src/recipes/index.ts#L32)):
```typescript
recipes.sort((a, b) => a.title.localeCompare(b.title))
```
- Uses `localeCompare()` for locale-aware alphabetical sorting
- This is the ONLY place with locale-aware string comparison

---

### Bug 2: Time Input Auto-Calculation Behavior

#### TimeInput Component (DEPRECATED)

**Location**: [src/components/TimeInput.tsx](src/components/TimeInput.tsx)
**Status**: Deprecated, kept for reference during migration (lines 2-29)
**Usage**: NOT imported anywhere in active codebase

**Data Model** ([TimeInput.tsx:33-39](src/components/TimeInput.tsx#L33-L39)):
```typescript
interface TimeInputProps {
  value: string              // Total minutes as string
  onChange: (minutes: string) => void
  placeholder?: string
  className?: string
  allowDays?: boolean        // Enable/disable days field
}
```
Stores time as a single string representing total minutes.

**Breakdown Logic** ([TimeInput.tsx:47-51](src/components/TimeInput.tsx#L47-L51)):
```typescript
const totalMinutes = parseInt(value) || 0
const days = Math.floor(totalMinutes / (24 * 60))
const remainingMinutes = totalMinutes % (24 * 60)
const hours = Math.floor(remainingMinutes / 60)
const minutes = remainingMinutes % 60
```
Converts total minutes to days/hours/minutes display on every render.

**Event Handlers** ([TimeInput.tsx:53-69](src/components/TimeInput.tsx#L53-L69)):
```typescript
const handleDaysChange = (newDays: string) => {
  const d = parseInt(newDays) || 0
  const newTotal = d * 24 * 60 + hours * 60 + minutes
  onChange(newTotal.toString())
}

const handleHoursChange = (newHours: string) => {
  const h = parseInt(newHours) || 0
  const newTotal = days * 24 * 60 + h * 60 + minutes
  onChange(newTotal.toString())
}

const handleMinutesChange = (newMinutes: string) => {
  const m = parseInt(newMinutes) || 0
  const newTotal = days * 24 * 60 + hours * 60 + m
  onChange(newTotal.toString())
}
```

**Auto-Calculation Flow**:
1. User types in any field (days, hours, or minutes)
2. Handler fires immediately on keystroke
3. Handler recalculates total: `days * 1440 + hours * 60 + minutes`
4. Parent receives new total via `onChange(newTotal.toString())`
5. Parent updates state
6. Component re-renders with new props
7. Time redistributed across days/hours/minutes (lines 47-51)

**Problem**: Stateless design causes full recalculation cycle on every keystroke with no debouncing.

#### TimeRangeInput Component (ACTIVE)

**Location**: [src/components/TimeRangeInput.tsx](src/components/TimeRangeInput.tsx)
**Status**: Active, used in EditRecipe and NewRecipe forms
**Usage**: [src/pages/EditRecipe.tsx:556-589](src/pages/EditRecipe.tsx#L556-L589), [src/pages/NewRecipe.tsx:444-477](src/pages/NewRecipe.tsx#L444-L477)

**Data Model** ([TimeRangeInput.tsx:6-46](src/components/TimeRangeInput.tsx#L6-L46)):
```typescript
interface TimeRangeInputProps {
  value: TimeRange | string           // Accepts TimeRange or string (backward compat)
  onChange: (range: TimeRange) => void // Always returns TimeRange
  allowDays?: boolean
  className?: string
  label?: string
  required?: boolean
  disabled?: boolean
}
```

**TimeRange Type** ([src/types/recipe.ts:2-5](src/types/recipe.ts#L2-L5)):
```typescript
export interface TimeRange {
  min: number // minimum time in minutes
  max: number // maximum time in minutes
}
```

**Internal State** ([TimeRangeInput.tsx:160-166](src/components/TimeRangeInput.tsx#L160-L166)):
```typescript
const [minDays, setMinDays] = useState(initialDisplay.minDays)
const [minHours, setMinHours] = useState(initialDisplay.minHours)
const [minMins, setMinMins] = useState(initialDisplay.minMins)
const [maxDays, setMaxDays] = useState(initialDisplay.maxDays)
const [maxHours, setMaxHours] = useState(initialDisplay.maxHours)
const [maxMins, setMaxMins] = useState(initialDisplay.maxMins)
```
Six separate state variables track each input field.

**State Synchronization** ([TimeRangeInput.tsx:168-179](src/components/TimeRangeInput.tsx#L168-L179)):
```typescript
useEffect(() => {
  const newRange = parseValue(value)
  const newDisplay = parseTimeRangeToDisplay(newRange, allowDays)

  setMinDays(newDisplay.minDays)
  setMinHours(newDisplay.minHours)
  setMinMins(newDisplay.minMins)
  setMaxDays(newDisplay.maxDays)
  setMaxHours(newDisplay.maxHours)
  setMaxMins(newDisplay.maxMins)
}, [value, allowDays])
```
Syncs internal state when prop value changes.

**Auto-Calculation Effect** ([TimeRangeInput.tsx:188-205](src/components/TimeRangeInput.tsx#L188-L205)):
```typescript
useEffect(() => {
  if (validation.isValid) {
    onChange(currentRange)
  } else {
    // If max < min, auto-set max to equal min (creating an exact time)
    const calculatedMin = minDays * 1440 + minHours * 60 + minMins
    const calculatedMax = maxDays * 1440 + maxHours * 60 + maxMins

    if (calculatedMax < calculatedMin && calculatedMin > 0) {
      // Auto-copy min values to max
      setMaxDays(minDays)
      setMaxHours(minHours)
      setMaxMins(minMins)
    }
  }
}, [minDays, minHours, minMins, maxDays, maxHours, maxMins])
```

**Two Types of Auto-Calculation**:
1. **Immediate propagation** (line 189-191): Valid changes trigger parent `onChange` immediately
2. **Auto-correction** (lines 193-201): Invalid ranges (max < min) automatically copy min values to max fields

**Validation Logic** ([TimeRangeInput.tsx:112-145](src/components/TimeRangeInput.tsx#L112-L145)):
```typescript
function validateRange(range: TimeRange): {
  isValid: boolean
  isExact: boolean
  errorMessage?: string
} {
  const { min, max } = range

  // Check non-negative
  if (min < 0 || max < 0) {
    return {
      isValid: false,
      isExact: false,
      errorMessage: 'Time values must be non-negative',
    }
  }

  // Check min <= max
  if (min > max) {
    return {
      isValid: false,
      isExact: false,
      errorMessage:
        'Maximum time must be greater than or equal to minimum time',
    }
  }

  const isExact = isExactTime(range)

  return {
    isValid: true,
    isExact,
  }
}
```

Validation checks:
1. Non-negative check (lines 120-126)
2. Min <= max check (lines 129-136)
3. Exact time detection (line 139)

**Display to TimeRange Conversion** ([TimeRangeInput.tsx:76-88](src/components/TimeRangeInput.tsx#L76-L88)):
```typescript
function displayToTimeRange(
  minValues: TimeDisplayValues,
  maxValues: TimeDisplayValues,
): TimeRange {
  const min = minValues.days * 1440 + minValues.hours * 60 + minValues.mins
  const max = maxValues.days * 1440 + maxValues.hours * 60 + maxValues.mins

  return {
    min,
    max: Math.max(min, max), // Auto-correction: ensure max >= min
  }
}
```
**Auto-correction at line 86**: Uses `Math.max(min, max)` to ensure max is never less than min.

**Problem**: The auto-correction logic (lines 193-201 in the effect, and line 86 in the converter) automatically changes max values when they become less than min. This can cause unexpected behavior during editing where the user is still typing values.

#### Usage in Forms

**EditRecipe.tsx Usage** ([EditRecipe.tsx:556-589](src/pages/EditRecipe.tsx#L556-L589)):

Three instances with different configurations:

1. **Prep Time** (lines 556-565):
   - `allowDays={false}` - No days field
   - `required={true}`

2. **Cook Time** (lines 568-577):
   - `allowDays={true}` - Includes days field
   - `required={true}`

3. **Marinating Time** (lines 580-588):
   - `allowDays={true}` - Includes days field
   - `required={false}` - Optional

**NewRecipe.tsx Usage** ([NewRecipe.tsx:444-477](src/pages/NewRecipe.tsx#L444-L477)):
Same three instances with identical configuration.

**Recipe State** ([EditRecipe.tsx:54-56](src/pages/EditRecipe.tsx#L54-L56)):
```typescript
prepTime: { min: 0, max: 0 } as TimeRange,
cookTime: { min: 0, max: 0 } as TimeRange,
marinatingTime: { min: 0, max: 0 } as TimeRange,
```
Time values stored directly as TimeRange objects.

#### Supporting Utilities

**timeUtils.ts Functions** ([src/utils/timeUtils.ts](src/utils/timeUtils.ts)):

1. **isExactTime** ([timeUtils.ts:61-63](src/utils/timeUtils.ts#L61-L63)):
```typescript
export function isExactTime(range: TimeRange): boolean {
  return range.min === range.max
}
```

2. **validateTimeRange** ([timeUtils.ts:24-42](src/utils/timeUtils.ts#L24-L42)):
```typescript
export function validateTimeRange(range: TimeRange): void {
  if (!isTimeRange(range)) {
    throw new Error(
      'Invalid TimeRange: must be an object with numeric min and max properties',
    )
  }

  if (range.min < 0 || range.max < 0) {
    throw new Error(
      `Invalid TimeRange: times must be non-negative (got min: ${range.min}, max: ${range.max})`,
    )
  }

  if (range.min > range.max) {
    throw new Error(
      `Invalid TimeRange: min (${range.min}) cannot be greater than max (${range.max})`,
    )
  }
}
```
Called during form submission in [EditRecipe.tsx:342-353](src/pages/EditRecipe.tsx#L342-L353) and [NewRecipe.tsx:248-260](src/pages/NewRecipe.tsx#L248-L260).

3. **isTimeRange type guard** ([timeUtils.ts:6-18](src/utils/timeUtils.ts#L6-L18)):
```typescript
export function isTimeRange(value: unknown): value is TimeRange {
  if (typeof value !== 'object' || value === null) {
    return false
  }

  const range = value as Record<string, unknown>
  return (
    typeof range.min === 'number' &&
    typeof range.max === 'number' &&
    Number.isFinite(range.min) &&
    Number.isFinite(range.max)
  )
}
```

## Code References

### Bug 1: Search Special Characters

**Main Implementation:**
- [src/hooks/useInfiniteRecipes.ts:56-81](src/hooks/useInfiniteRecipes.ts#L56-L81) - Main filtering logic with toLowerCase()
- [src/hooks/useRecipeSearch.ts:50-60](src/hooks/useRecipeSearch.ts#L50-L60) - Similar search implementation
- [src/components/SearchBar.tsx:55-60](src/components/SearchBar.tsx#L55-L60) - Search input component
- [src/components/SearchBar.tsx:76-100](src/components/SearchBar.tsx#L76-L100) - Category search with cmdk

**Unicode Normalization Example (NOT used in search):**
- [src/services/github.ts:49-58](src/services/github.ts#L49-L58) - Slug generation with NFD normalization

**Data Loading:**
- [src/recipes/index.ts:6-29](src/recipes/index.ts#L6-L29) - Recipe import without transformation
- [src/recipes/index.ts:32](src/recipes/index.ts#L32) - Locale-aware sorting with localeCompare()

### Bug 2: Time Input Auto-Calculation

**TimeInput (Deprecated):**
- [src/components/TimeInput.tsx:47-51](src/components/TimeInput.tsx#L47-L51) - Breakdown logic
- [src/components/TimeInput.tsx:53-69](src/components/TimeInput.tsx#L53-L69) - Event handlers with immediate recalculation

**TimeRangeInput (Active):**
- [src/components/TimeRangeInput.tsx:160-166](src/components/TimeRangeInput.tsx#L160-L166) - Internal state management
- [src/components/TimeRangeInput.tsx:168-179](src/components/TimeRangeInput.tsx#L168-L179) - State synchronization effect
- [src/components/TimeRangeInput.tsx:188-205](src/components/TimeRangeInput.tsx#L188-L205) - Auto-calculation and auto-correction effect
- [src/components/TimeRangeInput.tsx:76-88](src/components/TimeRangeInput.tsx#L76-L88) - Display to TimeRange conversion with Math.max()
- [src/components/TimeRangeInput.tsx:112-145](src/components/TimeRangeInput.tsx#L112-L145) - Validation logic

**Usage in Forms:**
- [src/pages/EditRecipe.tsx:556-589](src/pages/EditRecipe.tsx#L556-L589) - Three TimeRangeInput instances
- [src/pages/NewRecipe.tsx:444-477](src/pages/NewRecipe.tsx#L444-L477) - Three TimeRangeInput instances

**Utilities:**
- [src/utils/timeUtils.ts:6-18](src/utils/timeUtils.ts#L6-L18) - isTimeRange type guard
- [src/utils/timeUtils.ts:24-42](src/utils/timeUtils.ts#L24-L42) - validateTimeRange function
- [src/utils/timeUtils.ts:61-63](src/utils/timeUtils.ts#L61-L63) - isExactTime function

## Architecture Documentation

### Search Architecture

**Pattern**: Multi-field substring matching with case-insensitivity
**Layers**:
1. UI Layer: SearchBar component captures user input
2. Hook Layer: useInfiniteRecipes/useRecipeSearch performs filtering
3. Data Layer: Recipe objects stored with original encoding

**Key Design Decisions**:
- No Unicode normalization (accent-sensitive matching)
- Multi-field OR search (title, description, ingredients, instructions, tags)
- Combined with AND category filtering
- Pagination applied after filtering
- Memoized filtering for performance

**Libraries Used**:
- `cmdk` (v1.1.1) for category dropdown with fuzzy matching
- No search-specific libraries for main search

### Time Input Architecture

**Pattern**: Bidirectional conversion between display format and storage format

**TimeInput (Deprecated)**:
- Storage: String (total minutes)
- Display: Three inputs (days, hours, minutes)
- State: Stateless (derived on every render)
- Calculation: Immediate on every keystroke

**TimeRangeInput (Active)**:
- Storage: TimeRange object `{min: number, max: number}`
- Display: Two rows of three inputs each (min and max)
- State: Stateful (6 useState variables)
- Calculation: Immediate propagation + auto-correction
- Validation: Built-in with error display

**Key Design Decisions**:
- TimeRangeInput chosen over TimeInput for range support
- Auto-correction ensures max >= min
- Backward compatibility with string format
- Separate state management prevents prop update loops
- Validation provides user feedback

## Open Questions

### Bug 1: Search Special Characters

1. **User Experience**: Should accent-insensitive search be the default, or should it be a toggle option?
2. **Performance**: What is the performance impact of Unicode normalization on 100+ recipes?
3. **Locale**: Should search respect French locale rules (e.g., œ = oe)?
4. **Implementation**: Should normalization be applied at search time or at data import time?
5. **cmdk Library**: Does cmdk v1.1.1 support accent-insensitive matching, or would we need a custom filter?

### Bug 2: Time Input Auto-Calculation

1. **User Experience**: Is the auto-correction helpful or confusing when editing time ranges?
2. **Debouncing**: Should input handlers be debounced to reduce recalculation frequency?
3. **Validation**: Should validation be strict (prevent invalid input) or permissive (allow temporary invalid states)?
4. **State Management**: Could the six state variables be consolidated into a single object?
5. ~~**Migration**: Should TimeInput be deleted entirely, or kept for documentation purposes?~~ **ANSWERED**: Delete entirely (see follow-up)

---

## Follow-up Research [2025-12-29T19:00:00-05:00]

### Decision: Remove TimeInput Component

**Context**: User confirmed that since TimeInput is deprecated and not imported anywhere in the active codebase, it should be removed entirely rather than kept for documentation purposes.

**Current Status** ([src/components/TimeInput.tsx](src/components/TimeInput.tsx)):
- Component is marked deprecated (lines 2-29)
- NOT imported by any active code
- Kept as reference during migration period
- Migration to TimeRangeInput is complete

**Rationale for Removal**:
1. **No active usage**: Grep search confirms no imports of TimeInput in the codebase
2. **Migration complete**: Both EditRecipe and NewRecipe forms now use TimeRangeInput
3. **Code maintenance burden**: Keeping unused code creates confusion and increases maintenance
4. **Git history preservation**: The component's implementation is preserved in git history for future reference if needed
5. **Clear migration path documented**: This research document provides complete documentation of the old component's behavior

**Action Items**:
- Delete [src/components/TimeInput.tsx](src/components/TimeInput.tsx)
- Verify no imports remain (already confirmed: none found)
- Component behavior and architecture preserved in this research document

### Documentation: TimeRangeInput Auto-Calculation Behavior

**User Feedback**: "sounds about right indeed" - confirming the aggressive auto-correction behavior is the expected issue.

**Current Auto-Correction Behavior** ([src/components/TimeRangeInput.tsx:188-205](src/components/TimeRangeInput.tsx#L188-L205)):

The component implements two layers of auto-correction:

1. **Effect-based auto-correction** (lines 193-201):
   ```typescript
   if (calculatedMax < calculatedMin && calculatedMin > 0) {
     // Auto-copy min values to max
     setMaxDays(minDays)
     setMaxHours(minHours)
     setMaxMins(minMins)
   }
   ```
   - Triggers whenever any of the six display values change
   - If max total < min total AND min > 0, copies all min values to max fields
   - Happens immediately during editing, even if user is still typing
   - Can cause unexpected value changes mid-input

2. **Conversion-based auto-correction** ([src/components/TimeRangeInput.tsx:86](src/components/TimeRangeInput.tsx#L86)):
   ```typescript
   max: Math.max(min, max)  // Auto-correction: ensure max >= min
   ```
   - Applied during every conversion from display values to TimeRange
   - Ensures max is never less than min in the returned object
   - Silent correction - no user feedback

**Problem Scenarios**:

**Scenario 1: Editing max hours from 2→0 when min=1h**
1. User types in max hours field: deletes "2", leaving empty (parsed as 0)
2. Effect recalculates: max=0 < min=60
3. Auto-correction triggers: copies min values to max
4. Max hours field suddenly becomes "1" (copied from min)
5. User loses their intended input before finishing typing

**Scenario 2: Entering new time range from scratch**
1. Starting state: min=0, max=0
2. User focuses on max hours field first (wants to enter max=2h, min=1h)
3. User types "2" in max hours: max=120, min=0
4. Valid range, no issues
5. User then types "1" in min hours: min=60, max=120
6. Still valid, works fine
7. BUT if user edits max down below min, auto-correction fights them

**Scenario 3: Temporary invalid state during bulk editing**
1. Current: min=1h, max=2h
2. User wants to change to: min=3h, max=4h
3. User clears max hours field first (to type new value)
4. Temporarily: min=60, max=0 (invalid)
5. Auto-correction immediately triggers: copies min to max
6. Max becomes 1h instead of user's intended 4h

**Design Trade-offs**:

**Benefits of Current Aggressive Approach**:
- Prevents form submission with invalid ranges
- Provides automatic correction for user errors
- Ensures data consistency at all times
- Simple mental model: "max can never be less than min"

**Drawbacks**:
- Interrupts user input flow mid-edit
- Doesn't allow temporary invalid states during editing
- Can cause confusion when values change unexpectedly
- Makes certain edit sequences difficult (e.g., lowering max before raising min)

**Alternative Approaches** (not implemented):

1. **Permissive validation** (allow temporary invalid states):
   - Remove effect-based auto-correction (lines 193-201)
   - Keep only conversion-based `Math.max()` (line 86)
   - Show validation error message but don't auto-correct
   - Only enforce constraint at form submission
   - Allows user to complete their intended edits

2. **Debounced auto-correction**:
   - Add delay (e.g., 500ms) before triggering auto-correction
   - Gives user time to complete their edit
   - Still provides automatic correction after pause
   - More complex implementation

3. **Smart edit detection**:
   - Detect which field is being actively edited
   - Don't auto-correct the field currently focused
   - Auto-correct only on blur or when editing other fields
   - Most complex but best UX

**Current Decision**: Document the behavior as-is. The aggressive auto-correction is working as designed, but causes the "strange behavior" reported. This is a known trade-off of the current implementation prioritizing data consistency over edit flexibility.

**Future Considerations**:
- If user complaints increase, consider implementing permissive validation approach
- Could add a debounce to reduce edit interruptions
- Consider showing a hint message like "Max time adjusted to match minimum" when auto-correction triggers
- Monitor real-world usage patterns to determine if the trade-off is worth it

### Summary of Follow-up Decisions

1. **TimeInput**: Delete the deprecated component entirely
2. **TimeRangeInput**: Document current aggressive auto-correction behavior as working as designed, with known trade-offs
3. **Documentation**: This research document now serves as complete reference for both components and their design decisions
