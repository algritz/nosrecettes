# Remove TimeInput & Fix TimeRangeInput Implementation Plan

## Overview

Remove the deprecated TimeInput component and fix the aggressive auto-correction behavior in TimeRangeInput that causes unexpected value changes during editing. The fix will implement permissive validation that allows temporary invalid states while editing, only enforcing constraints at form submission.

## Current State Analysis

**TimeInput Component**: [src/components/TimeInput.tsx](src/components/TimeInput.tsx)
- Status: Deprecated (documented in lines 2-29)
- NOT imported anywhere in active codebase (confirmed by research)
- Stateless design with immediate recalculation on every keystroke
- Stored for reference during migration period
- Migration to TimeRangeInput is complete

**TimeRangeInput Component**: [src/components/TimeRangeInput.tsx](src/components/TimeRangeInput.tsx)
- Status: Active, used in EditRecipe and NewRecipe forms
- Lines 160-166: Six separate state variables for days/hours/minutes (min and max)
- Lines 188-205: Aggressive auto-correction effect that copies min to max when max < min
- Line 86: Additional auto-correction in `displayToTimeRange()` using `Math.max()`
- Problem: Auto-correction triggers immediately during editing, interrupting user input flow

**Usage Locations**:
- [src/pages/EditRecipe.tsx:556-589](src/pages/EditRecipe.tsx#L556-L589) - Three instances (prep, cook, marinating)
- [src/pages/NewRecipe.tsx:444-477](src/pages/NewRecipe.tsx#L444-L477) - Three instances (prep, cook, marinating)

**Form Validation**: [src/utils/timeUtils.ts:24-42](src/utils/timeUtils.ts#L24-L42)
- `validateTimeRange()` function throws errors if min > max
- Called during form submission in EditRecipe and NewRecipe
- This validation will catch invalid ranges before submission

## Desired End State

1. **TimeInput component deleted** - No references remain in codebase
2. **TimeRangeInput allows temporary invalid states** - User can edit max below min without automatic correction
3. **Validation error displayed** - User sees error message when max < min, but values don't auto-change
4. **Form submission blocked** - Invalid ranges cannot be submitted (validation at form level)
5. **Better UX** - User can complete intended edit sequence without fighting auto-correction

### Verification:
1. TimeInput.tsx file does not exist
2. User can type "0" in max hours while min is "1h" without immediate correction
3. Error message appears when max < min, but field values stay as typed
4. Form submission fails with validation error if max < min
5. Valid ranges (max >= min) submit successfully

## What We're NOT Doing

- ❌ Adding debouncing or delays (permissive validation is simpler)
- ❌ Implementing smart focus detection (unnecessary complexity)
- ❌ Consolidating six state variables into one object (works fine as-is)
- ❌ Changing TimeRange storage format (stays as `{min: number, max: number}`)
- ❌ Modifying form submission logic (already has validation)
- ❌ Adding new features or enhancements (bug fix only)

## Implementation Approach

**Phase 1**: Remove deprecated TimeInput component
**Phase 2**: Remove aggressive auto-correction from TimeRangeInput effect
**Phase 3**: Remove auto-correction from displayToTimeRange converter
**Phase 4**: Verify form-level validation catches invalid ranges

---

## Phase 1: Remove Deprecated TimeInput Component

### Overview
Delete the deprecated TimeInput component file that is no longer used anywhere in the codebase.

### Changes Required:

#### 1. Delete TimeInput Component
**File**: `src/components/TimeInput.tsx`
**Changes**: Delete entire file

**Verification before deletion**:
```bash
# Confirm no imports exist
grep -r "TimeInput" src/ --include="*.tsx" --include="*.ts"

# Should only find:
# - src/components/TimeInput.tsx (the file itself)
# - No other imports or references
```

### Success Criteria:

#### Automated Verification:
- [ ] File `src/components/TimeInput.tsx` does not exist
- [ ] No import errors: `pnpm run typecheck`
- [ ] No linting errors: `pnpm run lint`
- [ ] Build succeeds: `pnpm run build`
- [ ] Grep search finds no references: `grep -r "TimeInput" src/`

#### Manual Verification:
- [ ] EditRecipe page loads without errors
- [ ] NewRecipe page loads without errors
- [ ] Time range inputs render correctly on both pages
- [ ] No console errors related to missing component

**Implementation Note**: After completing this phase and all automated verification passes, pause here for manual confirmation from the human that the manual testing was successful before proceeding to the next phase.

---

## Phase 2: Remove Auto-Correction Effect

### Overview
Remove the aggressive auto-correction logic from the TimeRangeInput useEffect that automatically copies min values to max fields when max < min.

### Changes Required:

#### 1. Simplify useEffect Logic
**File**: `src/components/TimeRangeInput.tsx`
**Changes**: Modify lines 188-205 to remove auto-correction

**Before** (lines 188-205):
```typescript
// Update parent when display values change
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [minDays, minHours, minMins, maxDays, maxHours, maxMins])
```

**After** (simplified):
```typescript
// Update parent when display values change
useEffect(() => {
  // Always propagate current range to parent, even if invalid
  // Validation will be enforced at form submission level
  onChange(currentRange)
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [minDays, minHours, minMins, maxDays, maxHours, maxMins])
```

**Key Changes**:
- Remove `if (validation.isValid)` check
- Remove entire `else` block with auto-correction logic
- Always call `onChange(currentRange)` regardless of validation state
- Form-level validation will catch invalid ranges before submission

### Success Criteria:

#### Automated Verification:
- [ ] No TypeScript errors: `pnpm run typecheck`
- [ ] No linting errors: `pnpm run lint`
- [ ] Build succeeds: `pnpm run build`

#### Manual Verification:
- [ ] User can type "0" in max hours field while min is "1h"
- [ ] Max field value stays as "0" (doesn't auto-change to "1")
- [ ] Validation error message appears when max < min
- [ ] User can complete edit sequence (e.g., clear max, then type new value)
- [ ] Valid ranges (max >= min) still work correctly
- [ ] Time values propagate to form state correctly

**Implementation Note**: After completing this phase and all automated verification passes, pause here for manual confirmation from the human that the manual testing was successful before proceeding to the next phase.

---

## Phase 3: Remove Auto-Correction from Converter

### Overview
Remove the silent auto-correction from the `displayToTimeRange` converter function that uses `Math.max()` to force max >= min.

### Changes Required:

#### 1. Remove Math.max() Auto-Correction
**File**: `src/components/TimeRangeInput.tsx`
**Changes**: Modify lines 76-88 to allow invalid ranges

**Before** (lines 76-88):
```typescript
function displayToTimeRange(
  minValues: TimeDisplayValues,
  maxValues: TimeDisplayValues,
): TimeRange {
  const min = minValues.days * 1440 + minValues.hours * 60 + minValues.mins
  const max = maxValues.days * 1440 + maxValues.hours * 60 + maxValues.mins

  // Validation: ensure max >= min (auto-adjust if needed)
  return {
    min,
    max: Math.max(min, max),
  }
}
```

**After** (no auto-correction):
```typescript
function displayToTimeRange(
  minValues: TimeDisplayValues,
  maxValues: TimeDisplayValues,
): TimeRange {
  const min = minValues.days * 1440 + minValues.hours * 60 + minValues.mins
  const max = maxValues.days * 1440 + maxValues.hours * 60 + maxValues.mins

  // Return as-is without auto-correction
  // Form-level validation will enforce constraints before submission
  return {
    min,
    max,
  }
}
```

**Key Changes**:
- Remove `Math.max(min, max)` call
- Return max value as-is (even if max < min)
- Update comment to reflect permissive approach

### Success Criteria:

#### Automated Verification:
- [ ] No TypeScript errors: `pnpm run typecheck`
- [ ] No linting errors: `pnpm run lint`
- [ ] Build succeeds: `pnpm run build`

#### Manual Verification:
- [ ] TimeRange object reflects actual user input (no silent corrections)
- [ ] Form state shows invalid ranges when max < min
- [ ] Validation error message visible to user
- [ ] No unexpected value changes during editing
- [ ] Valid ranges produce correct TimeRange objects

**Implementation Note**: After completing this phase and all automated verification passes, pause here for manual confirmation from the human that the manual testing was successful before proceeding to the next phase.

---

## Phase 4: Verify Form-Level Validation

### Overview
Confirm that existing form-level validation in EditRecipe and NewRecipe properly catches and prevents submission of invalid time ranges.

### Changes Required:

**No code changes required** - this phase verifies existing validation works correctly.

### Verification Points:

#### 1. Validation Function Exists
**File**: `src/utils/timeUtils.ts:24-42`

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

This function throws an error if `min > max`, which prevents form submission.

#### 2. Validation Called in EditRecipe
**File**: [src/pages/EditRecipe.tsx:342-353](src/pages/EditRecipe.tsx#L342-L353)

Validation is called during form submission before creating PR.

#### 3. Validation Called in NewRecipe
**File**: [src/pages/NewRecipe.tsx:248-260](src/pages/NewRecipe.tsx#L248-L260)

Validation is called during form submission before creating PR.

### Success Criteria:

#### Automated Verification:
- [ ] No code changes needed (verification only)
- [ ] No TypeScript errors: `pnpm run typecheck`
- [ ] No linting errors: `pnpm run lint`
- [ ] Build succeeds: `pnpm run build`

#### Manual Verification:

**EditRecipe Form:**
1. Open an existing recipe for editing
2. Set prep time: min = 1h, max = 0h (invalid)
3. Fill all required fields
4. Click "Update Recipe"
5. Verify: Form submission fails with validation error message
6. Fix prep time: min = 0h, max = 1h (valid)
7. Click "Update Recipe"
8. Verify: Form submits successfully

**NewRecipe Form:**
1. Navigate to new recipe page
2. Fill all required fields
3. Set cook time: min = 2h, max = 1h (invalid)
4. Click "Submit"
5. Verify: Form submission fails with validation error message
6. Fix cook time: min = 1h, max = 2h (valid)
7. Click "Submit"
8. Verify: Form submits successfully

**Edge Cases:**
1. All time fields valid (max >= min) → submission succeeds
2. Any time field invalid (max < min) → submission blocked
3. Zero times (min = 0, max = 0) → valid, submission succeeds
4. Exact times (min = max) → valid, submission succeeds

**Error Message Quality:**
- [ ] Error message clearly indicates which field is invalid
- [ ] Error message explains constraint (max must be >= min)
- [ ] Error message appears near the invalid field
- [ ] Error message disappears when issue is fixed

---

## Testing Strategy

### Unit Tests:
**Not required for this implementation** - changes are primarily behavior fixes, manual testing sufficient.

If tests are added later, test:
- TimeRangeInput allows invalid ranges in state
- displayToTimeRange returns actual values without correction
- validateTimeRange throws on invalid ranges

### Integration Tests:
**Manual testing covers integration**

### Manual Testing Steps:

**TimeInput Removal:**
1. Confirm file deleted: `ls src/components/TimeInput.tsx` returns "No such file"
2. Grep search: `grep -r "TimeInput" src/` returns no results
3. Visit EditRecipe page → no errors in console
4. Visit NewRecipe page → no errors in console
5. Time range inputs render and function correctly

**TimeRangeInput Editing Flow:**

**Scenario 1: Lowering max below min**
1. Open recipe form
2. Set prep time: min = 1h, max = 2h
3. Clear max hours field (becomes 0h)
4. Verify: Max field shows "0", min field shows "1"
5. Verify: Validation error message appears
6. Type "3" in max hours field
7. Verify: Error message disappears, max = 3h, min = 1h

**Scenario 2: Editing from scratch**
1. Open new recipe form
2. Click max hours field first, type "2"
3. Verify: Max = 2h, min = 0h (valid, no error)
4. Click min hours field, type "1"
5. Verify: Min = 1h, max = 2h (valid, no error)
6. Click min hours field, change to "3"
7. Verify: Min = 3h, max = 2h, error message appears
8. Click max hours field, change to "4"
9. Verify: Min = 3h, max = 4h, error disappears

**Scenario 3: Bulk editing**
1. Current: min = 1h, max = 2h
2. Change min to 3h
3. Verify: Min = 3h, max = 2h, error appears
4. Change max to 4h
5. Verify: Min = 3h, max = 4h, error disappears
6. No automatic corrections occurred

**Form Submission Validation:**

**Invalid Range Submission:**
1. Fill recipe form with min = 2h, max = 1h
2. Click submit button
3. Verify: Submission fails
4. Verify: Error message indicates time range issue
5. Fix time range: min = 1h, max = 2h
6. Click submit button
7. Verify: Submission succeeds

**Valid Range Submission:**
1. Fill recipe form with min = 1h, max = 2h
2. Verify: No validation errors shown
3. Click submit button
4. Verify: Submission succeeds (PR created)

**Edge Cases:**
1. Zero times (min = 0, max = 0) → allows submission
2. Exact times (min = 30m, max = 30m) → allows submission
3. Very large ranges (min = 0, max = 2 days) → allows submission
4. Negative values → validation error (covered by existing check)

**All Three Time Fields:**
1. Test prep time with days disabled (allowDays=false)
2. Test cook time with days enabled (allowDays=true)
3. Test marinating time with days enabled and optional (required=false)
4. Verify each field behaves consistently

## Performance Considerations

**No Performance Impact:**
- Removing code improves performance slightly (fewer calculations)
- No additional computations added
- State management unchanged (six variables remain)
- Form validation happens only on submit (not during editing)

**Memory Usage:**
- Slightly reduced (less code in memory)
- No additional state or variables

## Migration Notes

**No Data Migration Required:**
- Changes are purely behavioral (frontend only)
- TimeRange storage format unchanged
- Existing recipes unaffected
- No database or API changes

**Rollback Strategy:**
If permissive validation causes issues:
1. Restore TimeInput file from git history (if needed for reference)
2. Restore auto-correction logic in TimeRangeInput useEffect
3. Restore `Math.max()` in displayToTimeRange
4. No data rollback needed

**Backward Compatibility:**
- Change is backward compatible
- Existing recipes load correctly
- Form behavior more permissive (improvement)
- Validation constraints unchanged (still enforced at submission)

## References

- Original research: `thoughts/shared/research/2025-12-29-search-special-chars-time-input-bugs.md`
- TimeInput component (deprecated): [src/components/TimeInput.tsx](src/components/TimeInput.tsx)
- TimeRangeInput component (active): [src/components/TimeRangeInput.tsx](src/components/TimeRangeInput.tsx)
- EditRecipe form: [src/pages/EditRecipe.tsx:556-589](src/pages/EditRecipe.tsx#L556-L589)
- NewRecipe form: [src/pages/NewRecipe.tsx:444-477](src/pages/NewRecipe.tsx#L444-L477)
- Time validation utility: [src/utils/timeUtils.ts:24-42](src/utils/timeUtils.ts#L24-L42)
