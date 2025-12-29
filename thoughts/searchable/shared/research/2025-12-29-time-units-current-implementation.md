---
date: 2025-12-29 08:11:42 -0500
researcher: Claude Code
git_commit: e7bcd02f03ba6339362776ef377d903ec9be7125
branch: main
repository: nosrecettes.ca
topic: "Time Units Current Implementation - Fixed Values vs Ranges"
tags: [research, codebase, recipe, time-fields, cooking-time, prep-time, marinating-time]
status: complete
last_updated: 2025-12-29
last_updated_by: Claude Code
---

# Research: Time Units Current Implementation - Fixed Values vs Ranges

**Date**: 2025-12-29 08:11:42 -0500
**Researcher**: Claude Code
**Git Commit**: e7bcd02f03ba6339362776ef377d903ec9be7125
**Branch**: main
**Repository**: nosrecettes.ca

## Research Question

How are time units currently implemented in the nosrecettes.ca codebase? The current implementation uses "fixed" values (single numbers) for cooking, marinating, and prep time, but in reality these are often ranges. Additionally, cooking times can exceed 24 hours (particularly for sous-vide recipes).

## Summary

The nosrecettes.ca codebase currently stores all time-related fields as **single numeric values** representing total minutes. There is no support for time ranges (lower/upper bounds). The system supports three time fields: `prepTime` (required), `cookTime` (required), and `marinatingTime` (optional). The implementation already handles times exceeding 24 hours through a day-based display system, particularly evident in sous-vide recipes where cook times can reach thousands of minutes (multiple days).

## Detailed Findings

### Type Definition and Data Model

The core recipe type is defined in [src/types/recipe.ts](src/types/recipe.ts):

```typescript
export interface Recipe {
  prepTime: number;           // Required - minutes as single number
  cookTime: number;           // Required - minutes as single number
  marinatingTime?: number;    // Optional - minutes as single number
  // ... other fields
}
```

**Key characteristics:**
- All time fields store **single numeric values** (not ranges)
- Values represent **total minutes**
- `marinatingTime` is the only optional time field
- No minimum/maximum bounds or range structure exists in the type definition

### Actual Recipe Data Examples

Real-world recipe data demonstrates the current single-value approach:

**Standard Recipe** - [src/recipes/bacon-maison-fume-a-chaud.ts:8-10](src/recipes/bacon-maison-fume-a-chaud.ts#L8-L10):
```typescript
prepTime: 15,              // 15 minutes
cookTime: 210,             // 3.5 hours
marinatingTime: 2880,      // 48 hours (2 days)
```

**Sous-Vide Recipe** - [src/recipes/roast-beef-sous-vide.ts:8-9](src/recipes/roast-beef-sous-vide.ts#L8-L9):
```typescript
prepTime: 20,              // 20 minutes
cookTime: 4319,            // 71.98 hours (~3 days)
// No marinatingTime field (optional)
```

**Quick Recipe** - [src/recipes/marinade-thaie-au-lait-de-coco.ts:10](src/recipes/marinade-thaie-au-lait-de-coco.ts#L10):
```typescript
marinatingTime: 240,       // 4 hours
```

**Range of marinatingTime values found:**
- 10 minutes ([thon-frais-grille-sauce-wasabi.ts](src/recipes/thon-frais-grille-sauce-wasabi.ts))
- 30 minutes ([poulet-tikka-a-l-indienne.ts](src/recipes/poulet-tikka-a-l-indienne.ts))
- 60 minutes ([poulet-delhi-au-beurre.ts](src/recipes/poulet-delhi-au-beurre.ts))
- 240 minutes (4 hours - multiple recipes)
- 720 minutes (12 hours - [bonbons-de-saumon-fumes.ts](src/recipes/bonbons-de-saumon-fumes.ts))
- 2880 minutes (48 hours - [bacon-maison-fume-a-chaud.ts](src/recipes/bacon-maison-fume-a-chaud.ts))

### UI Input Component - TimeInput

The time input component is located at [src/components/TimeInput.tsx](src/components/TimeInput.tsx) and provides a user-friendly interface for entering time values:

**Component features:**
- Accepts `value` as string (total minutes)
- Breaks down into separate fields: days, hours, minutes
- Days field is **optional** via `allowDays` prop
- Converts user input back to total minutes

**Field constraints** ([TimeInput.tsx:42-72](src/components/TimeInput.tsx#L42-L72)):
```typescript
// Days input (when allowDays=true)
min="0"
max="365"
type="number"

// Hours input
min="0"
max="23"
type="number"

// Minutes input
min="0"
max="59"
type="number"
```

**Usage in forms:**
- `prepTime` and `cookTime`: Standard hours/minutes input (no days)
- `marinatingTime`: Extended input with `allowDays={true}` prop

This architecture allows for cook times exceeding 24 hours by accumulating hours (e.g., 4319 minutes = 71.98 hours).

### Display and Formatting

Time values are formatted for display using [src/utils/timeFormat.ts](src/utils/timeFormat.ts):

**Long format** (`formatTime()` - [timeFormat.ts:1-24](src/utils/timeFormat.ts#L1-L24)):
```typescript
// Converts 2880 minutes to "2 jours"
// Converts 4319 minutes to "2 jours 23h 59min"
// Handles days, hours, minutes with French labels
```

**Short format** (`formatTimeShort()` - [timeFormat.ts:26-49](src/utils/timeFormat.ts#L26-L49)):
```typescript
// Converts to compact format: "2j23h59min"
```

**Display in RecipeDetail component** ([RecipeDetail.tsx:245-259](src/components/RecipeDetail.tsx#L245-L259)):
- **Prep time**: Clock icon + "Préparation: {formatTime(recipe.prepTime)}"
- **Cook time**: ChefHat icon + "Cuisson: {formatTime(recipe.cookTime)}"
- **Marinating time**: Timer icon + "Marinage: {formatTime(recipe.marinatingTime)}" (conditional display)

### Total Time Calculation

Total time is calculated dynamically throughout the codebase as:

```typescript
totalTime = prepTime + cookTime + (marinatingTime || 0)
```

**Used in:**
- SEO structured data ([seoUtils.ts:62](src/utils/seoUtils.ts#L62))
- GitHub service for PR descriptions ([github.ts:629, 845](src/services/github.ts#L629))
- Recipe classification (quick recipes, 30-minute meals) ([seoUtils.ts:156-161](src/utils/seoUtils.ts#L156-L161))

### Form Implementation

**New Recipe Form** ([src/pages/NewRecipe.tsx](src/pages/NewRecipe.tsx)):
- State initialization with empty strings ([NewRecipe.tsx:32-34](src/pages/NewRecipe.tsx#L32-L34))
- Three TimeInput components ([NewRecipe.tsx:371-391](src/pages/NewRecipe.tsx#L371-L391))
- Converts string to number on form submission

**Edit Recipe Form** ([src/pages/EditRecipe.tsx](src/pages/EditRecipe.tsx)):
- State initialization with empty strings ([EditRecipe.tsx:45-47](src/pages/EditRecipe.tsx#L45-L47))
- Loads existing recipe times, converting numbers to strings ([EditRecipe.tsx:131-135](src/pages/EditRecipe.tsx#L131-L135))
- Three TimeInput components ([EditRecipe.tsx:446-466](src/pages/EditRecipe.tsx#L446-L466))

### GitHub Service Integration

The GitHub service ([src/services/github.ts](src/services/github.ts)) handles recipe data with a slightly different interface:

```typescript
interface RecipeData {
  prepTime: string;          // String representation
  cookTime: string;          // String representation
  marinatingTime?: string;   // Optional string
  // ... other fields
}
```

**Functions:**
- Generates recipe TypeScript files ([github.ts:175-176, 251-253](src/services/github.ts#L175-L176))
- Calculates totalTime for PR descriptions ([github.ts:629, 845](src/services/github.ts#L629))
- Includes marinating time in PR body when present ([github.ts:630-631, 846-847](src/services/github.ts#L630-L631))

### SEO and Structured Data

The SEO utilities ([src/utils/seoUtils.ts](src/utils/seoUtils.ts)) use time data for:

**Schema.org structured data** ([seoUtils.ts:75-77](src/utils/seoUtils.ts#L75-L77)):
```typescript
prepTime: `PT${recipe.prepTime}M`,
cookTime: `PT${recipe.cookTime}M`,
totalTime: `PT${totalTime}M`,
```

**Recipe classification:**
- Quick recipes: `prepTime <= 15` ([seoUtils.ts:156](src/utils/seoUtils.ts#L156))
- 30-minute meals: `prepTime + cookTime <= 30` ([seoUtils.ts:160](src/utils/seoUtils.ts#L160))

**Meta descriptions** ([seoUtils.ts:180-191](src/utils/seoUtils.ts#L180-L191)):
Includes formatted time information in recipe descriptions.

### Import/Export Functionality

**CSV Parser** ([src/utils/csvParser.ts](src/utils/csvParser.ts)):
```typescript
interface ParsedCSVRecipe {
  prepTime?: number;    // Optional numeric field
  cookTime?: number;    // Optional numeric field
  // ... other fields
}
```
Parses time from text content and maps to recipe structure.

**Importers:**
- **CSVImporter** ([src/components/CSVImporter.tsx](src/components/CSVImporter.tsx)): Shows prep/cook time in preview
- **JSONImporter** ([src/components/JSONImporter.tsx](src/components/JSONImporter.tsx)): Displays all three time fields in preview

## Architecture Documentation

### Current Data Flow

1. **User Input** → TimeInput component (days/hours/minutes fields)
2. **Component State** → String representation of total minutes
3. **Form Submission** → Conversion to number
4. **Recipe Interface** → Stored as `number` (total minutes)
5. **Display** → `formatTime()` converts back to human-readable format

### Storage Pattern

All 724+ recipe files in [src/recipes/](src/recipes/) follow this pattern:
- TypeScript files exporting Recipe objects
- Time values as numeric literals
- Central export via [src/recipes/index.ts](src/recipes/index.ts)

### Naming Conventions

Consistent camelCase across codebase:
- `prepTime` (never "preparationTime" or "prep_time")
- `cookTime` (never "cookingTime" or "cook_time")
- `marinatingTime` (never "marinadeTime" or "marinating_time")

## Current State Summary

### What Works

1. **Multi-day support**: The system handles cook times over 24 hours (sous-vide recipes have ~3-day cook times)
2. **Optional marinating time**: Flexibility for recipes that don't require marinating
3. **User-friendly input**: TimeInput component breaks down time into intuitive units
4. **Automatic formatting**: Display logic handles conversion to days/hours/minutes
5. **SEO integration**: Time data properly formatted for structured data

### What Doesn't Exist

1. **Time ranges**: No support for lower/upper bounds (e.g., "20-25 minutes")
2. **Range types**: No type definition for min/max time values
3. **Range display**: UI components don't render time ranges
4. **Range input**: Forms don't support entering time ranges
5. **Precision indicators**: No way to indicate if time is exact vs approximate

### Notable Patterns

1. **Single source of truth**: Time stored as minutes, converted for display
2. **Optional days field**: Only enabled for marinating time (multi-day marinades common)
3. **Dynamic total time**: Calculated on-demand, not stored
4. **Backward compatibility**: marinatingTime is optional (added later to schema)
5. **Large time values**: System already supports values over 10,000 minutes without issue

## Code References

### Core Type System
- [src/types/recipe.ts:6-8](src/types/recipe.ts#L6-L8) - Recipe interface time fields

### UI Components
- [src/components/TimeInput.tsx](src/components/TimeInput.tsx) - Time input component
- [src/components/RecipeDetail.tsx:245-259](src/components/RecipeDetail.tsx#L245-L259) - Time display
- [src/components/RecipeCard.tsx](src/components/RecipeCard.tsx) - Card time display

### Utilities
- [src/utils/timeFormat.ts](src/utils/timeFormat.ts) - Time formatting functions
- [src/utils/seoUtils.ts:62](src/utils/seoUtils.ts#L62) - Total time calculation

### Forms
- [src/pages/NewRecipe.tsx:371-391](src/pages/NewRecipe.tsx#L371-L391) - New recipe time inputs
- [src/pages/EditRecipe.tsx:446-466](src/pages/EditRecipe.tsx#L446-L466) - Edit recipe time inputs

### Services
- [src/services/github.ts](src/services/github.ts) - GitHub integration with time handling

### Example Data
- [src/recipes/roast-beef-sous-vide.ts:8-9](src/recipes/roast-beef-sous-vide.ts#L8-L9) - Multi-day sous-vide recipe
- [src/recipes/bacon-maison-fume-a-chaud.ts:8-10](src/recipes/bacon-maison-fume-a-chaud.ts#L8-L10) - Recipe with all three time fields

## Related Research

No previous research documents found on time field implementation.

## Open Questions

None - the current implementation is well-documented and consistent throughout the codebase.
