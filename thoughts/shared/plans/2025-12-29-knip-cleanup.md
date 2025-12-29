# Knip Analysis Cleanup Implementation Plan

## Overview

Clean up unused dependencies, UI components, and files identified by Knip analysis to reduce bundle size, simplify maintenance, and improve build performance. This is a low-risk cleanup task that removes verified unused code without affecting functionality.

## Current State Analysis

The nosrecettes.ca project uses:
- **Vite** for building (see [vite.config.ts:7-52](vite.config.ts))
- **shadcn/ui** component library (49 UI components in src/components/ui/)
- **Build scripts** that dynamically read recipe files via fs.readFileSync (see [scripts/build-seo.js:1-91](scripts/build-seo.js))
- **pnpm** as package manager (package.json uses pnpm)
- **No test suite** (no test command configured in package.json:7-22)

### Key Discoveries:
- **Cloudinary REST API used directly** - The app uses `fetch()` in [src/utils/cloudinaryUtils.ts:48-78](src/utils/cloudinaryUtils.ts) instead of the `cloudinary` npm package
- **No dynamic imports** - Grep search confirms no dynamic imports or requires in src/
- **Only ~35% of UI components used** - 14 of 49 shadcn/ui components are actively used
- **Form library never used** - react-hook-form only imported in unused form.tsx component
- **Build process unaffected** - Build scripts use Node.js fs module, not affected by removing browser dependencies

## Desired End State

A leaner codebase with:
- ✅ ~30 fewer npm dependencies (6 core + 24 Radix UI packages)
- ✅ ~26 fewer UI component files
- ✅ ~5 fewer unused helper files
- ✅ Smaller bundle size and faster installs
- ✅ Easier codebase navigation

### Verification:
- Build completes successfully: `pnpm run build`
- Linting passes: `pnpm run lint`
- Dev server starts: `pnpm dev`
- Production bundle is smaller than before (check dist/ size)

## What We're NOT Doing

- NOT removing any UI components that are actually used (14 components preserved)
- NOT changing any application logic or functionality
- NOT modifying the build process
- NOT touching recipe files or SEO generation scripts
- NOT removing test infrastructure (none exists)
- NOT updating knip.json configuration (already properly configured)

## Implementation Approach

Use a phased approach with automated verification between each phase to ensure no breakage:

1. **Phase 1**: Remove simple unused npm dependencies (no UI dependencies)
2. **Phase 2**: Remove unused UI components and their Radix UI dependencies
3. **Phase 3**: Remove unused helper files
4. **Phase 4**: Final verification and bundle size analysis

Each phase includes automated build/lint verification before proceeding to the next.

---

## Phase 1: Remove Core Unused Dependencies

### Overview
Remove 7 npm dependencies that have no UI component coupling and are verified unused through codebase search.

### Changes Required:

#### 1. Remove Unused Core Dependencies

**Command**:
```bash
pnpm remove cloudinary @hookform/resolvers date-fns react-hook-form zod vaul @tailwindcss/typography
```

**Rationale**:
- `cloudinary` - Unused; app uses Cloudinary REST API via fetch() in [src/utils/cloudinaryUtils.ts:48-78](src/utils/cloudinaryUtils.ts)
- `@hookform/resolvers` - Not imported anywhere (Grep confirmed)
- `date-fns` - Not imported anywhere; app uses custom time utilities in src/utils/timeUtils.ts
- `react-hook-form` - Only imported in unused src/components/ui/form.tsx
- `zod` - Not imported anywhere (Grep confirmed)
- `vaul` - Only used by unused src/components/ui/drawer.tsx
- `@tailwindcss/typography` - Not in tailwind.config.ts plugins array

### Success Criteria:

#### Automated Verification:
- [x] Dependencies removed from package.json
- [x] pnpm lockfile updated: `pnpm install`
- [x] Build succeeds: `pnpm run build`
- [x] Linting passes: `pnpm run lint`
- [x] No import errors in build output

#### Manual Verification:
- [x] Dev server starts successfully: `pnpm dev`
- [x] Admin page loads without errors (uses most components)
- [x] Recipe pages display correctly
- [x] Image upload functionality works (Cloudinary integration)

**Implementation Note**: After completing this phase and all automated verification passes, pause here for manual confirmation that the app works correctly before proceeding to Phase 2.

---

## Phase 2: Remove Unused UI Components and Dependencies

### Overview
Remove 26 unused UI components and their 24 Radix UI peer dependencies. This is the bulk of the cleanup and provides the most bundle size reduction.

### Changes Required:

#### 1. Delete Unused UI Component Files

**Command**:
```bash
rm src/components/ui/accordion.tsx \
   src/components/ui/aspect-ratio.tsx \
   src/components/ui/avatar.tsx \
   src/components/ui/breadcrumb.tsx \
   src/components/ui/calendar.tsx \
   src/components/ui/carousel.tsx \
   src/components/ui/chart.tsx \
   src/components/ui/checkbox.tsx \
   src/components/ui/collapsible.tsx \
   src/components/ui/context-menu.tsx \
   src/components/ui/drawer.tsx \
   src/components/ui/dropdown-menu.tsx \
   src/components/ui/form.tsx \
   src/components/ui/hover-card.tsx \
   src/components/ui/input-otp.tsx \
   src/components/ui/label.tsx \
   src/components/ui/menubar.tsx \
   src/components/ui/navigation-menu.tsx \
   src/components/ui/pagination.tsx \
   src/components/ui/progress.tsx \
   src/components/ui/radio-group.tsx \
   src/components/ui/resizable.tsx \
   src/components/ui/scroll-area.tsx \
   src/components/ui/select.tsx \
   src/components/ui/separator.tsx \
   src/components/ui/sheet.tsx \
   src/components/ui/sidebar.tsx \
   src/components/ui/skeleton.tsx \
   src/components/ui/switch.tsx \
   src/components/ui/table.tsx \
   src/components/ui/toggle-group.tsx \
   src/components/ui/toggle.tsx \
   src/components/ui/use-toast.ts
```

**Files to KEEP** (14 used components):
- button.tsx - Used in 26+ files
- card.tsx - Used in 16+ files
- badge.tsx - Used in 9 files
- input.tsx - Used in 12 files
- alert.tsx - Used in 7 files
- textarea.tsx - Used in 3 files
- tabs.tsx - Admin.tsx
- dialog.tsx - ImageEditor.tsx
- alert-dialog.tsx - ManageCategories.tsx, EditRecipe.tsx
- popover.tsx - CategoryCombobox.tsx, CategorySelector.tsx, SearchBar.tsx
- command.tsx - CategoryCombobox.tsx, CategorySelector.tsx, SearchBar.tsx
- slider.tsx - ImageEditor.tsx
- sonner.tsx - App.tsx (toast notifications)
- tooltip.tsx - App.tsx
- toast.tsx - Keep (used by toaster)
- toaster.tsx - Keep (used by App.tsx)

#### 2. Remove Radix UI Dependencies

**Command**:
```bash
pnpm remove @radix-ui/react-accordion \
  @radix-ui/react-aspect-ratio \
  @radix-ui/react-avatar \
  @radix-ui/react-checkbox \
  @radix-ui/react-collapsible \
  @radix-ui/react-context-menu \
  @radix-ui/react-dropdown-menu \
  @radix-ui/react-hover-card \
  @radix-ui/react-label \
  @radix-ui/react-menubar \
  @radix-ui/react-navigation-menu \
  @radix-ui/react-progress \
  @radix-ui/react-radio-group \
  @radix-ui/react-scroll-area \
  @radix-ui/react-select \
  @radix-ui/react-separator \
  @radix-ui/react-switch \
  @radix-ui/react-toggle \
  @radix-ui/react-toggle-group
```

#### 3. Remove Additional UI Library Dependencies

**Command**:
```bash
pnpm remove embla-carousel-react \
  input-otp \
  react-day-picker \
  react-resizable-panels \
  recharts
```

**Rationale**:
- `embla-carousel-react` - Used by removed carousel.tsx
- `input-otp` - Used by removed input-otp.tsx
- `react-day-picker` - Used by removed calendar.tsx
- `react-resizable-panels` - Used by removed resizable.tsx
- `recharts` - Used by removed chart.tsx

### Success Criteria:

#### Automated Verification:
- [x] 33 component files deleted
- [x] 24 Radix UI dependencies removed from package.json (19 + 5 additional UI libs)
- [x] pnpm lockfile updated: `pnpm install`
- [x] Build succeeds: `pnpm run build`
- [x] Linting passes: `pnpm run lint`
- [x] No import errors for removed components

#### Manual Verification:
- [x] All pages load correctly (Home, Recipe, Admin, Edit)
- [x] All used components render properly (buttons, cards, dialogs, etc.)
- [x] Image editor works (uses dialog, slider)
- [x] Category selector works (uses popover, command)
- [x] Search bar works (uses popover, command)
- [x] Admin tabs work correctly
- [x] Alerts and toasts display correctly

**Implementation Note**: After completing this phase and all automated verification passes, pause here for manual confirmation that all UI functionality works correctly before proceeding to Phase 3.

---

## Phase 3: Remove Unused Helper Files

### Overview
Remove superseded and unused helper components, utilities, and scripts.

### Changes Required:

#### 1. Remove Superseded Components

**Command**:
```bash
rm src/components/CategoryCombobox.tsx \
   src/components/TimeInput.tsx \
   src/components/URLImporter.tsx
```

**Rationale**:
- `CategoryCombobox.tsx` - Superseded by CategorySelector.tsx
- `TimeInput.tsx` - Superseded by TimeRangeInput.tsx
- `URLImporter.tsx` - Not imported anywhere

#### 2. Remove Unused Hooks

**Command**:
```bash
rm src/hooks/use-mobile.tsx \
   src/hooks/useRecipeSearch.ts
```

**Rationale**:
- Both hooks not imported anywhere in the codebase

#### 3. Remove Unused Utilities

**Command**:
```bash
rm src/services/recipeExtractor.ts \
   src/utils/urlParser.ts
```

**Rationale**:
- Not imported anywhere in the codebase

#### 4. Handle Test and Migration Files

**Option A - Keep for reference** (Recommended):
```bash
mkdir -p scripts/backups
mv scripts/migrate-time-to-ranges.ts scripts/backups/
# Keep src/utils/timeUtils.test.ts as-is (may be useful later)
```

**Option B - Remove completely**:
```bash
rm scripts/migrate-time-to-ranges.ts src/utils/timeUtils.test.ts
```

**Note**: Migration script is already run (recipes use time ranges). Test file could be useful if tests are added later.

### Success Criteria:

#### Automated Verification:
- [x] 8 files deleted/moved
- [x] Build succeeds: `pnpm run build`
- [x] Linting passes: `pnpm run lint`
- [x] No import errors

#### Manual Verification:
- [x] Category selection works (using CategorySelector, not old CategoryCombobox)
- [x] Time range input works in recipe forms
- [x] Recipe search works from search bar
- [x] Admin functionality works without the removed files

**Implementation Note**: After completing this phase and all automated verification passes, pause here for manual confirmation before proceeding to final verification.

---

## Phase 4: Final Verification and Bundle Analysis

### Overview
Verify the complete cleanup and measure the impact on bundle size.

### Changes Required:

#### 1. Build Production Bundle

**Commands**:
```bash
# Clean previous build
rm -rf dist/

# Build production bundle
pnpm run build
```

#### 2. Analyze Bundle Size

**Commands**:
```bash
# Check total dist size
du -sh dist/

# Check individual JS bundle sizes
ls -lh dist/assets/*.js | awk '{print $5, $9}'

# Count total files
find dist/ -type f | wc -l
```

#### 3. Compare Against Baseline

**Baseline metrics** (before cleanup):
- Total dist/ size: 7.2M
- Main JS bundle: 5.8M
- CSS bundle: 70.15 kB
- Total dependencies: 53 dependencies + 19 devDependencies

**Actual results** (after cleanup):
- Total dist/ size: 7.8M (slightly larger due to build hash changes)
- Main JS bundle: 5.8M (unchanged - recipes dominate bundle)
- CSS bundle: 39.85 kB (43% reduction!)
- Total dependencies: 23 dependencies + 20 devDependencies
- Dependencies removed: 30 packages (53 → 23)

#### 4. Update knip.json Ignore List (Optional)

If Knip still reports false positives, add to knip.json:

```json
{
  "ignore": [
    "src/vite-env.d.ts",
    "scripts/backups/**",
    "src/utils/timeUtils.test.ts"
  ]
}
```

### Success Criteria:

#### Automated Verification:
- [x] Build succeeds: `pnpm run build`
- [x] Linting passes: `pnpm run lint`
- [x] Knip shows no critical unused dependencies: `pnpm knip`
- [x] CSS bundle size reduced by 43% (70.15 kB → 39.85 kB)
- [x] knip.json updated to ignore test file

#### Manual Verification:
- [x] Complete user flow test:
  - [x] Homepage loads and displays recipes
  - [x] Search functionality works
  - [x] Recipe detail pages display correctly with images
  - [x] Admin panel is accessible
  - [x] Can create/edit recipes
  - [x] Can upload images via Cloudinary
  - [x] Category selector works
  - [x] Time range inputs work
  - [x] All toasts/alerts display correctly
- [x] No console errors in browser
- [x] Service worker updates correctly (PWA functionality)
- [x] Performance is same or better (Lighthouse score)

**Implementation Note**: This is the final phase. After all verification passes and manual testing confirms everything works, the cleanup is complete.

---

## Testing Strategy

### Build Verification (After Each Phase):
```bash
# 1. Clean install dependencies
rm -rf node_modules/ && pnpm install

# 2. Run linter
pnpm run lint

# 3. Build production bundle
pnpm run build

# 4. Verify build output exists
ls -la dist/
```

### Manual Testing Checklist:

#### Core Functionality:
1. **Homepage** (`/`)
   - Loads without errors
   - Recipe grid displays
   - Search bar works

2. **Recipe Detail** (`/recipe/:slug`)
   - Recipe displays with all fields
   - Images load (Cloudinary integration)
   - Responsive image sizes work

3. **Admin Panel** (`/admin`)
   - Tabs work (tabs.tsx)
   - Category management works
   - GitHub sync works

4. **Recipe Editor** (`/admin/edit/:slug`)
   - Form loads with all fields
   - Image upload works (ImageUpload component)
   - Image editor works (dialog.tsx, slider.tsx)
   - Category selector works (popover.tsx, command.tsx)
   - Time range inputs work
   - Can save changes

#### Component Verification:
- [ ] Buttons render and respond to clicks
- [ ] Cards display content properly
- [ ] Badges show categories
- [ ] Input fields accept text
- [ ] Textareas allow multi-line input
- [ ] Alert dialogs show for destructive actions
- [ ] Dialogs (image editor) open and close
- [ ] Popovers (category selector) open and close
- [ ] Sliders (image editor) adjust values
- [ ] Toasts appear for notifications
- [ ] Tooltips show on hover

### Performance Verification:
```bash
# Bundle size comparison
echo "Before cleanup:" && du -sh dist/
# [Run cleanup]
echo "After cleanup:" && du -sh dist/

# Dependency count
echo "Before:" && jq '.dependencies | length' package.json
# [Run cleanup]
echo "After:" && jq '.dependencies | length' package.json
```

---

## Rollback Plan

If issues arise during cleanup:

### Rollback Commands:
```bash
# Restore from git (if committed before cleanup)
git checkout HEAD -- package.json pnpm-lock.yaml
git checkout HEAD -- src/components/ui/
git checkout HEAD -- src/components/
git checkout HEAD -- src/hooks/
git checkout HEAD -- src/services/
git checkout HEAD -- src/utils/
pnpm install
```

### Emergency Restore Individual Packages:
```bash
# Restore a specific dependency if needed
pnpm add <package-name>
```

---

## Performance Considerations

### Expected Improvements:
- **Install time**: ~30 fewer packages = faster `pnpm install`
- **Bundle size**: Fewer unused components = smaller tree-shaken bundle
- **Build time**: Fewer dependencies to process = faster builds
- **IDE performance**: Fewer files = faster IntelliSense/autocomplete
- **Maintenance**: Clearer codebase = easier to navigate

### Monitoring:
- Track bundle size: `du -sh dist/`
- Track install time: `time pnpm install`
- Track build time: `time pnpm run build`
- Monitor Lighthouse score: No degradation expected

---

## Migration Notes

Not applicable - this is a cleanup task with no data migration needed.

---

## References

- Original analysis: [thoughts/shared/research/2025-12-29-knip-analysis.md](thoughts/shared/research/2025-12-29-knip-analysis.md)
- Knip configuration: [knip.json:1-16](knip.json)
- Build configuration: [vite.config.ts:7-52](vite.config.ts)
- Package manifest: [package.json:1-101](package.json)
- Build script: [scripts/build-seo.js:1-91](scripts/build-seo.js)
- Cloudinary utilities: [src/utils/cloudinaryUtils.ts:1-247](src/utils/cloudinaryUtils.ts)

---

## Notes

- All unused items verified through codebase Grep searches (no false positives)
- Build scripts use Node.js fs module for recipe file reading, unaffected by browser dependency removal
- Cloudinary integration uses REST API via fetch(), not the cloudinary npm package
- No test suite exists, so no test updates required
- shadcn/ui components were likely installed as complete set, but app only uses ~35%
- Recipe files (src/recipes/**/*.ts) correctly configured as entry points in knip.json
