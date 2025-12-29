---
date: 2025-12-28T15:45:00-05:00
researcher: dacloutier
git_commit: a21df1a915c651fcafebc3600a6a29046e8d6d7c
branch: main
repository: nosrecettes
topic: "Time Measure Multiple-of-5 Constraint in Recipe Forms"
tags: [research, codebase, recipe-forms, time-input, validation, user-experience]
status: complete
last_updated: 2025-12-28
last_updated_by: dacloutier
---

# Research: Time Measure Multiple-of-5 Constraint in Recipe Forms

**Date**: 2025-12-28T15:45:00-05:00
**Researcher**: dacloutier
**Git Commit**: a21df1a915c651fcafebc3600a6a29046e8d6d7c
**Branch**: main
**Repository**: nosrecettes

## Research Question

When creating or editing a recipe, any measure involving times currently needs to be a multiple of 5, which isn't representative of reality. Where is this constraint enforced, and how does the time unit conversion work (e.g., 60 minutes => 1 hour)?

## Summary

The multiple-of-5 constraint exists in **exactly one location**: the minutes input field within the TimeInput component at [src/components/TimeInput.tsx:69](https://github.com/algritz/nosrecettes/blob/a21df1a915c651fcafebc3600a6a29046e8d6d7c/src/components/TimeInput.tsx#L69). This constraint is enforced using HTML5's native `step="5"` attribute on the number input, which is a UI-level validation only with no backend enforcement.

The constraint affects all recipe time inputs (prep time, cook time, marinating time) since they all use the same TimeInput component. Time values are stored internally as total minutes (a single number) and decomposed into days/hours/minutes for display. Unit boundaries (59 minutes max, 23 hours max) are enforced via HTML5 `max` attributes, but there is no automatic rollover when these limits are reached.

## Detailed Findings

### Constraint Location

**Primary Implementation**
- **File**: [src/components/TimeInput.tsx:69](https://github.com/algritz/nosrecettes/blob/a21df1a915c651fcafebc3600a6a29046e8d6d7c/src/components/TimeInput.tsx#L69)
- **Constraint Type**: HTML5 `step` attribute
- **Value**: `step="5"`
- **Scope**: Minutes input field only (hours and days have no step constraint)

```tsx
<Input
  type="number"
  min="0"
  max="59"
  step="5"  // <-- Multiple-of-5 constraint
  value={minutes || ''}
  onChange={(e) => handleMinutesChange(e.target.value)}
  placeholder="0"
  className="w-16"
/>
```

### Component Architecture

**TimeInput Component Structure** ([src/components/TimeInput.tsx:1-79](https://github.com/algritz/nosrecettes/blob/a21df1a915c651fcafebc3600a6a29046e8d6d7c/src/components/TimeInput.tsx#L1-L79))

The TimeInput component provides a structured time entry interface with three separate input fields:

1. **Days field** (optional, enabled via `allowDays` prop):
   - Range: 0-365
   - No step constraint
   - Only shown for marinating time

2. **Hours field**:
   - Range: 0-23
   - No step constraint
   - Enforces 24-hour day boundary

3. **Minutes field**:
   - Range: 0-59
   - Step: 5 (enforces multiple-of-5)
   - Enforces 60-minute hour boundary

**Internal Storage Format**:
- All time values stored as total minutes (single number)
- Decomposed for display: `totalMinutes -> days/hours/minutes`
- Recomposed on change: `days/hours/minutes -> totalMinutes`

### Usage Locations

The TimeInput component is used in two form pages:

1. **Recipe Creation Form** ([src/pages/NewRecipe.tsx:365-386](https://github.com/algritz/nosrecettes/blob/a21df1a915c651fcafebc3600a6a29046e8d6d7c/src/pages/NewRecipe.tsx#L365-L386))
   - Prep time input (hours + minutes)
   - Cook time input (hours + minutes)
   - Marinating time input (days + hours + minutes)

2. **Recipe Editing Form** ([src/pages/EditRecipe.tsx:440-461](https://github.com/algritz/nosrecettes/blob/a21df1a915c651fcafebc3600a6a29046e8d6d7c/src/pages/EditRecipe.tsx#L440-L461))
   - Prep time input (hours + minutes)
   - Cook time input (hours + minutes)
   - Marinating time input (days + hours + minutes)

Both forms use identical TimeInput implementations, ensuring consistent behavior across recipe creation and editing.

### Unit Conversion Logic

**Decomposition: Total Minutes → Display Fields** ([src/components/TimeInput.tsx:11-16](https://github.com/algritz/nosrecettes/blob/a21df1a915c651fcafebc3600a6a29046e8d6d7c/src/components/TimeInput.tsx#L11-L16))

```typescript
const totalMinutes = parseInt(value) || 0;
const days = Math.floor(totalMinutes / (24 * 60));
const remainingMinutes = totalMinutes % (24 * 60);
const hours = Math.floor(remainingMinutes / 60);
const minutes = remainingMinutes % 60;
```

Conversion constants:
- 1 day = 1440 minutes (24 × 60)
- 1 hour = 60 minutes

**Recomposition: Display Fields → Total Minutes** ([src/components/TimeInput.tsx:18-32](https://github.com/algritz/nosrecettes/blob/a21df1a915c651fcafebc3600a6a29046e8d6d7c/src/components/TimeInput.tsx#L18-L32))

```typescript
const handleDaysChange = (newDays: string) => {
  const d = parseInt(newDays) || 0;
  const newTotal = d * 24 * 60 + hours * 60 + minutes;
  onChange(newTotal.toString());
};

const handleHoursChange = (newHours: string) => {
  const h = parseInt(newHours) || 0;
  const newTotal = days * 24 * 60 + h * 60 + minutes;
  onChange(newTotal.toString());
};

const handleMinutesChange = (newMinutes: string) => {
  const m = parseInt(newMinutes) || 0;
  const newTotal = days * 24 * 60 + hours * 60 + m;
  onChange(newTotal.toString());
};
```

Each change handler:
1. Parses the new value (defaulting to 0 if invalid)
2. Recalculates total minutes using all three fields
3. Calls onChange with the new total as a string

### Validation Boundaries

**Current Input Constraints**:
- Days: 0-365 (no step)
- Hours: 0-23 (no step) - enforces 24-hour day boundary
- Minutes: 0-59, step=5 - enforces 60-minute hour boundary AND 5-minute increments

**Behavior**:
- HTML5 input controls provide increment/decrement arrows that respect the step value
- Users can manually type any value, including non-multiples of 5
- No automatic rollover (typing 65 minutes doesn't become 1h 5min)
- Browser-level validation only - no backend validation for multiples of 5

### Data Type Definitions

**Recipe Interface** ([src/types/recipe.ts:1-24](https://github.com/algritz/nosrecettes/blob/a21df1a915c651fcafebc3600a6a29046e8d6d7c/src/types/recipe.ts#L1-L24))

```typescript
export interface Recipe {
  id: string;
  title: string;
  description: string;
  categories: string[];
  prepTime: number;           // Required - stored in minutes
  cookTime: number;           // Required - stored in minutes
  marinatingTime?: number;    // Optional - stored in minutes
  servings: number;
  difficulty: 'Facile' | 'Moyen' | 'Difficile';
  // ... other fields
}
```

- All time fields use TypeScript `number` type
- No type-level validation for multiples of 5
- `marinatingTime` is the only optional time field

### Display Formatting

**Time Formatting Utilities** ([src/utils/timeFormat.ts:1-49](https://github.com/algritz/nosrecettes/blob/a21df1a915c651fcafebc3600a6a29046e8d6d7c/src/utils/timeFormat.ts#L1-L49))

Two formatting functions convert total minutes to human-readable strings:

1. **formatTime()** - Long format with spaces
   - Example: "2 jours 3h 45min"
   - Used in recipe detail views

2. **formatTimeShort()** - Compact format without spaces
   - Example: "2j3h45min"
   - Used in recipe cards

Both functions:
- Accept any number of minutes (no rounding to multiples of 5)
- Display whatever value is stored
- Handle pluralization for French language
- Omit zero-value units (e.g., "45min" instead of "0h 45min")

### Real-World Impact

The multiple-of-5 constraint is not representative of real cooking scenarios:

**Common cooking times that are NOT multiples of 5**:
- 2-3 minutes: blanching vegetables
- 6-7 minutes: soft-boiled eggs
- 8 minutes: al dente pasta
- 12 minutes: hard-boiled eggs
- 13-14 minutes: various pasta types
- 47 minutes: specific roasting times
- 52 minutes: precise baking times

**Current workaround behavior**:
- Users must round to nearest 5-minute increment
- Manual typing allows non-multiples, but UI suggests increments of 5
- This creates potential data entry friction and accuracy issues

## Code References

- [src/components/TimeInput.tsx:69](https://github.com/algritz/nosrecettes/blob/a21df1a915c651fcafebc3600a6a29046e8d6d7c/src/components/TimeInput.tsx#L69) - Multiple-of-5 constraint enforcement via `step="5"`
- [src/components/TimeInput.tsx:11-16](https://github.com/algritz/nosrecettes/blob/a21df1a915c651fcafebc3600a6a29046e8d6d7c/src/components/TimeInput.tsx#L11-L16) - Total minutes to days/hours/minutes decomposition
- [src/components/TimeInput.tsx:18-32](https://github.com/algritz/nosrecettes/blob/a21df1a915c651fcafebc3600a6a29046e8d6d7c/src/components/TimeInput.tsx#L18-L32) - Days/hours/minutes to total minutes recomposition
- [src/pages/NewRecipe.tsx:365-386](https://github.com/algritz/nosrecettes/blob/a21df1a915c651fcafebc3600a6a29046e8d6d7c/src/pages/NewRecipe.tsx#L365-L386) - TimeInput usage in recipe creation
- [src/pages/EditRecipe.tsx:440-461](https://github.com/algritz/nosrecettes/blob/a21df1a915c651fcafebc3600a6a29046e8d6d7c/src/pages/EditRecipe.tsx#L440-L461) - TimeInput usage in recipe editing
- [src/types/recipe.ts:6-8](https://github.com/algritz/nosrecettes/blob/a21df1a915c651fcafebc3600a6a29046e8d6d7c/src/types/recipe.ts#L6-L8) - Recipe time field type definitions
- [src/utils/timeFormat.ts:1-49](https://github.com/algritz/nosrecettes/blob/a21df1a915c651fcafebc3600a6a29046e8d6d7c/src/utils/timeFormat.ts#L1-L49) - Time display formatting utilities

## Architecture Documentation

### Current Implementation Pattern

The time input system follows a decomposition/recomposition pattern:

1. **Storage Layer**: Single number (total minutes)
2. **Input Layer**: Decomposed into separate day/hour/minute fields
3. **Display Layer**: Formatted human-readable strings

This architecture:
- Simplifies storage and calculations
- Provides intuitive user input experience
- Allows flexible display formatting
- Centralizes conversion logic in one component

### Validation Strategy

**Current validation is UI-only**:
- HTML5 attributes (`min`, `max`, `step`) provide browser-level constraints
- No backend validation exists for the multiple-of-5 constraint
- No schema validation library (e.g., Zod) is used for time fields
- Time parsing uses `parseInt()` with `|| 0` fallback for safety

**Single Component Pattern**:
- TimeInput component is the single source of truth for time input
- Used consistently across NewRecipe and EditRecipe pages
- Ensures uniform behavior and constraints across the application

## Open Questions

1. **Should the step constraint be removed entirely** to allow any minute value (0-59)?
2. **Should step="1" be used explicitly** to clarify intent, or is the absence of the step attribute sufficient?
3. **Should there be automatic rollover** when minutes exceed 59 or hours exceed 23, or should users manually adjust the next unit?
4. **Should backend validation be added** to ensure data integrity, or is UI-level validation sufficient given the storage format?
5. **Are there other locations in the codebase** where time input constraints might exist (import flows, admin tools, etc.)?
