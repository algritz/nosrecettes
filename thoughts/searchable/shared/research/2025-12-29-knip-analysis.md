# Knip Analysis - Unused Dependencies and Components

**Date**: 2025-12-29
**Analysis Tool**: Knip v5.78.0

## Summary

Knip identified 42 unused files, 30 unused dependencies, and 1 unused devDependency after fixing the configuration to recognize recipe files as entry points. This analysis verifies which items are genuinely unused vs. false positives.

## Configuration Fix Applied

Added `src/recipes/**/*.ts` to entry points because recipe files are consumed during the build process by scripts (not imported directly by the app). Build scripts use `fs.readFileSync()` to dynamically read recipe files, which Knip can't trace through the module graph.

## UI Components Status

### Components Actually Used (14 total)
- **button** - Used in 26+ files
- **card** - Used in 16+ files
- **badge** - Used in 9 files
- **input** - Used in 12 files
- **alert** - Used in 7 files
- **textarea** - Used in 3 files
- **tabs** - src/pages/Admin.tsx
- **dialog** - src/components/ImageEditor.tsx
- **alert-dialog** - src/pages/ManageCategories.tsx, src/pages/EditRecipe.tsx
- **popover** - src/components/CategoryCombobox.tsx, CategorySelector.tsx, SearchBar.tsx
- **command** - src/components/CategoryCombobox.tsx, CategorySelector.tsx, SearchBar.tsx
- **slider** - src/components/ImageEditor.tsx
- **toaster/sonner** - src/App.tsx
- **tooltip** - src/App.tsx

### Components Genuinely Unused (26 total)
- accordion
- aspect-ratio
- avatar
- breadcrumb
- calendar
- carousel
- chart
- checkbox
- collapsible
- context-menu
- drawer
- dropdown-menu
- form (only imports label internally, NOT used in app)
- hover-card
- input-otp
- label (only used internally by form.tsx)
- menubar
- navigation-menu
- pagination
- progress
- radio-group
- resizable
- scroll-area
- select
- separator (only used internally by sidebar.tsx)
- sheet (only used internally by sidebar.tsx)
- sidebar (only imports other UI components internally, NOT used in app)
- skeleton (only used internally by sidebar.tsx)
- switch
- table
- toggle-group (only imports toggle internally, NOT used in app)
- toggle (only used internally by toggle-group.tsx)

## Dependencies Status

### Dependencies Genuinely Unused (6 confirmed)

1. **cloudinary** (package.json:54:6)
   - NOT imported anywhere in the codebase
   - App uses Cloudinary REST API directly via `fetch()` in src/utils/cloudinaryUtils.ts
   - Can be safely removed

2. **@hookform/resolvers** (package.json:24:6)
   - NOT imported anywhere in the codebase
   - Can be safely removed

3. **date-fns** (package.json:57:6)
   - NOT imported anywhere in the codebase
   - App uses custom time utilities in src/utils/timeUtils.ts
   - Can be safely removed

4. **react-hook-form** (package.json:66:6)
   - Only imported in src/components/ui/form.tsx
   - form.tsx component itself is NEVER used in the app
   - Can be safely removed

5. **zod** (package.json:76:6)
   - NOT imported anywhere in the codebase
   - Can be safely removed

6. **vaul** (package.json:74:6)
   - Used for drawer component (src/components/ui/drawer.tsx)
   - drawer.tsx is never imported in the app
   - Can be safely removed

### Dependencies Potentially Unused (Need Verification)

The following Radix UI dependencies support unused UI components. If those components are removed, these can also be removed:

- @radix-ui/react-accordion (for accordion.tsx)
- @radix-ui/react-aspect-ratio (for aspect-ratio.tsx)
- @radix-ui/react-avatar (for avatar.tsx)
- @radix-ui/react-checkbox (for checkbox.tsx)
- @radix-ui/react-collapsible (for collapsible.tsx)
- @radix-ui/react-context-menu (for context-menu.tsx)
- @radix-ui/react-dropdown-menu (for dropdown-menu.tsx)
- @radix-ui/react-hover-card (for hover-card.tsx)
- @radix-ui/react-label (for label.tsx, only used by unused form.tsx)
- @radix-ui/react-menubar (for menubar.tsx)
- @radix-ui/react-navigation-menu (for navigation-menu.tsx)
- @radix-ui/react-progress (for progress.tsx)
- @radix-ui/react-radio-group (for radio-group.tsx)
- @radix-ui/react-scroll-area (for scroll-area.tsx)
- @radix-ui/react-select (for select.tsx)
- @radix-ui/react-separator (for separator.tsx, only used by unused sidebar.tsx)
- @radix-ui/react-switch (for switch.tsx)
- @radix-ui/react-toggle (for toggle.tsx, only used by unused toggle-group.tsx)
- @radix-ui/react-toggle-group (for toggle-group.tsx)
- embla-carousel-react (for carousel.tsx)
- input-otp (for input-otp.tsx)
- react-day-picker (for calendar.tsx)
- react-resizable-panels (for resizable.tsx)
- recharts (for chart.tsx)

### DevDependencies Unused

- **@tailwindcss/typography** (package.json:81:6)
  - NOT found in tailwind.config.ts plugins
  - Can be safely removed

## Other Unused Files

### Unused Helper Components
- src/components/CategoryCombobox.tsx - Superseded by CategorySelector
- src/components/TimeInput.tsx - Superseded by TimeRangeInput
- src/components/URLImporter.tsx - Not imported anywhere
- src/hooks/use-mobile.tsx - Not imported anywhere
- src/hooks/useRecipeSearch.ts - Not imported anywhere

### Unused Utilities
- src/components/ui/use-toast.ts - Toast functionality handled by sonner
- src/services/recipeExtractor.ts - Not imported anywhere
- src/utils/urlParser.ts - Not imported anywhere
- src/utils/timeUtils.test.ts - Test file, can be kept or moved to tests/

### Unused Scripts
- scripts/migrate-time-to-ranges.ts - Migration script, can be kept in scripts/backups/ or deleted

## Unused Exports

40 unused exports were identified, but these are typically helper utilities that may be used in the future. Not critical to clean up unless aiming for maximum leanness.

## Recommendations

### Option 1: Ignore Unused Items (Keep for Future Use)
Add to knip.json ignore section:
```json
"ignore": [
  "src/vite-env.d.ts",
  "scripts/backups/**",
  "src/components/ui/**",
  "src/components/CategoryCombobox.tsx",
  "src/components/TimeInput.tsx",
  "src/components/URLImporter.tsx",
  "src/hooks/use-mobile.tsx",
  "src/hooks/useRecipeSearch.ts",
  "src/services/recipeExtractor.ts",
  "src/utils/urlParser.ts",
  "src/utils/timeUtils.test.ts",
  "scripts/migrate-time-to-ranges.ts"
]
```

### Option 2: Clean Sweep (Remove Unused Items)

1. **Remove unused dependencies:**
```bash
pnpm remove cloudinary @hookform/resolvers date-fns react-hook-form zod vaul @tailwindcss/typography
```

2. **Remove unused Radix UI dependencies:**
```bash
pnpm remove @radix-ui/react-accordion @radix-ui/react-aspect-ratio @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-collapsible @radix-ui/react-context-menu @radix-ui/react-dropdown-menu @radix-ui/react-hover-card @radix-ui/react-label @radix-ui/react-menubar @radix-ui/react-navigation-menu @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-switch @radix-ui/react-toggle @radix-ui/react-toggle-group embla-carousel-react input-otp react-day-picker react-resizable-panels recharts
```

3. **Delete unused UI components:**
```bash
rm src/components/ui/{accordion,aspect-ratio,avatar,breadcrumb,calendar,carousel,chart,checkbox,collapsible,context-menu,drawer,dropdown-menu,form,hover-card,input-otp,label,menubar,navigation-menu,pagination,progress,radio-group,resizable,scroll-area,select,separator,sheet,sidebar,skeleton,switch,table,toggle-group,toggle,use-toast}.tsx
```

4. **Delete unused files:**
```bash
rm src/components/{CategoryCombobox,TimeInput,URLImporter}.tsx
rm src/hooks/{use-mobile,useRecipeSearch}.ts
rm src/services/recipeExtractor.ts
rm src/utils/urlParser.ts
rm scripts/migrate-time-to-ranges.ts
```

## Impact Assessment

- **Current app size**: Not measured
- **Estimated reduction**: ~30 unused dependencies + 26 unused UI components + helper files
- **Risk level**: LOW - all items verified as unused through codebase search
- **Breaking changes**: NONE - unused items have no imports

## Notes

- Recipe files (762 files) are used during build process via fs.readFileSync(), not via imports
- Build scripts in scripts/ dynamically read recipe TypeScript files to generate SEO files
- UI components from shadcn/ui were likely installed as a complete set, but app only uses ~40%
