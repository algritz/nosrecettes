# Remove Time Input Step Constraint Implementation Plan

## Overview

Remove the artificial `step="5"` constraint from the minutes input field in the TimeInput component to allow users to enter any valid minute value (0-59), making the input more representative of real-world cooking times.

## Current State Analysis

The TimeInput component at [src/components/TimeInput.tsx:69](src/components/TimeInput.tsx#L69) enforces a `step="5"` HTML attribute on the minutes input field, which suggests only multiples of 5 are valid. This constraint:
- Is purely UI-level (no backend validation exists)
- Creates friction for accurate time entry (e.g., 7-minute eggs, 13-minute pasta, 47-minute roasts)
- Is inconsistent with import flows (JSON/CSV imports accept any minute value)
- Only affects the minutes field (hours and days have no step constraint)

### Key Discoveries:
- Single change location: [src/components/TimeInput.tsx:69](src/components/TimeInput.tsx#L69)
- No tests exist in the codebase (clean slate)
- Import flows already bypass this constraint, allowing non-multiple-of-5 values
- Time values stored as total minutes (number), no schema validation
- Component used in both NewRecipe.tsx and EditRecipe.tsx

## Desired End State

After implementation:
- Users can enter any minute value from 0-59 in recipe time inputs
- The `step="5"` attribute is removed from the minutes input field
- No other input constraints are changed (max="59" remains)
- Time input behavior matches the import flow behavior (accepts any valid minute)
- Application compiles and builds successfully

### Verification:
- TypeScript compilation succeeds
- Build process completes without errors
- Manual testing confirms minute values like 7, 13, 17, 23, 47 are accepted
- Existing recipes with non-multiple-of-5 imported values display correctly

## What We're NOT Doing

- NOT adding automatic rollover when minutes exceed 59 or hours exceed 23
- NOT changing days (0-365) or hours (0-23) validation constraints
- NOT adding backend validation (none exists currently)
- NOT modifying the storage format (still total minutes)
- NOT changing import flows (they already work correctly)
- NOT creating test infrastructure (deferred to future enhancement)
- NOT adding `step="1"` explicitly (unnecessary, browser default is fine)

## Implementation Approach

Single-phase implementation: Remove the `step="5"` attribute from the minutes input field. This is a minimal, surgical change that eliminates the artificial constraint while maintaining all other validation boundaries.

## Phase 1: Remove Step Constraint

### Overview
Remove the `step="5"` attribute from the minutes input field in the TimeInput component.

### Changes Required:

#### 1. TimeInput Component
**File**: `src/components/TimeInput.tsx`
**Changes**: Remove the `step="5"` attribute from line 69

**Current code (lines 64-76):**
```tsx
<div className="flex items-center gap-1">
  <Input
    type="number"
    min="0"
    max="59"
    step="5"
    value={minutes || ''}
    onChange={(e) => handleMinutesChange(e.target.value)}
    placeholder="0"
    className="w-16"
  />
  <span className="text-sm text-muted-foreground">min</span>
</div>
```

**Updated code:**
```tsx
<div className="flex items-center gap-1">
  <Input
    type="number"
    min="0"
    max="59"
    value={minutes || ''}
    onChange={(e) => handleMinutesChange(e.target.value)}
    placeholder="0"
    className="w-16"
  />
  <span className="text-sm text-muted-foreground">min</span>
</div>
```

**Implementation Note**: Simply remove line 69 (`step="5"`) from the Input component. All other attributes remain unchanged.

### Success Criteria:

#### Automated Verification:
- [ ] TypeScript compiles without errors: `npx tsc --noEmit`
- [ ] Build succeeds: `npm run build`
- [ ] Linting passes (if configured): `npm run lint`

#### Manual Verification:
- [ ] Can enter minute value 7 in prep time field
- [ ] Can enter minute value 13 in cook time field
- [ ] Can enter minute value 17 in marinating time field
- [ ] Can enter minute value 23 in any time field
- [ ] Can enter minute value 47 in any time field
- [ ] Browser input increment/decrement buttons work with step=1 behavior
- [ ] Previously imported recipes with non-multiple-of-5 values display correctly
- [ ] Hours and days input fields still work as before
- [ ] Time values display correctly in recipe detail views
- [ ] No visual regressions in the time input component

**Implementation Note**: After completing this phase and all automated verification passes, pause here for manual confirmation from the human that the manual testing was successful.

---

## Testing Strategy

### Manual Testing Steps:
1. Navigate to recipe creation page (`/new`)
2. Test prep time input:
   - Enter 7 minutes
   - Verify it accepts the value without warning
3. Test cook time input:
   - Enter 13 minutes
   - Verify it accepts the value
4. Test marinating time input:
   - Enter 2 days, 3 hours, 17 minutes
   - Verify all values are accepted
5. Save the recipe and verify times display correctly
6. Navigate to recipe editing page
7. Edit an existing recipe and verify time inputs work correctly
8. Test with edge cases:
   - 0 minutes (valid)
   - 59 minutes (valid)
   - 60 minutes (should be prevented by max="59")
9. Verify imported recipes with non-multiple-of-5 values display correctly

### Future Enhancement - Automated Tests:
Consider adding test coverage in a future ticket:
- Unit tests for TimeInput component
- Integration tests for recipe forms
- E2E tests for recipe creation/editing flows

## Performance Considerations

No performance impact expected:
- Single attribute removal
- No logic changes
- No additional computation
- Browser input validation remains lightweight

## Migration Notes

No migration needed:
- Change is purely UI-level
- Existing recipes are unaffected (storage format unchanged)
- Import flows continue working as before
- No database changes required

## References

- Original research: `thoughts/shared/research/2025-12-28-time-measure-multiple-of-5-constraint.md`
- TimeInput component: [src/components/TimeInput.tsx](src/components/TimeInput.tsx)
- Usage in NewRecipe: [src/pages/NewRecipe.tsx:365-386](src/pages/NewRecipe.tsx#L365-L386)
- Usage in EditRecipe: [src/pages/EditRecipe.tsx:440-461](src/pages/EditRecipe.tsx#L440-L461)
- Import analysis confirmed no validation in JSON/CSV imports
