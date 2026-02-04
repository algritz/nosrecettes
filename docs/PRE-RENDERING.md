# Recipe Pre-Rendering Setup

## Problem
Facebook's crawler doesn't execute JavaScript, so it only sees the generic meta tags from `index.html` instead of recipe-specific Open Graph tags injected by React Helmet. This causes 404 previews when sharing recipes on social media.

## Solution
Pre-render all recipe pages to static HTML with baked-in meta tags using Puppeteer.

## How It Works

### Build Process
```bash
pnpm build
```

1. **SEO Generation** - Generates sitemap, robots.txt, manifest, etc.
2. **Vite Build** - Bundles the React app
3. **Smart Pre-rendering** - Detects changes and renders only modified recipes (or all if needed)

### Incremental Pre-rendering ⚡ (Default)

The build automatically detects which recipes changed using git:

- **Changed recipes only** - Only pre-renders modified recipe pages
- **No changes** - Skips pre-rendering entirely
- **Non-recipe changes** - Full pre-rendering (e.g., if `public/recipes.json` changed)

**Example:**
- Edit 2 recipes → Only those 2 recipes are pre-rendered (~10 seconds)
- No recipe changes → Pre-rendering skipped (~0 seconds)
- Update component → All 722 routes pre-rendered (~2-5 minutes)

**Scripts:**
- `scripts/get-changed-recipes.js` - Detects changed recipes via git diff
- `scripts/smart-prerender.js` - Orchestrates incremental vs full pre-rendering
- `scripts/prerender.js` - Core pre-rendering with Puppeteer

To force full pre-rendering:
```bash
INCREMENTAL_PRERENDER=false pnpm build
```

### Pre-rendering Performance
**Parallel processing:**
- Local: ~10 routes/batch (configurable)
- CI: ~20 routes/batch (faster GitHub Actions runners)

**Timings:**
- 1 recipe: ~1 second
- 10 recipes: ~5-10 seconds
- 720 recipes (full): ~2-5 minutes
- Incremental (2-3 recipes): ~5-10 seconds ⚡

### GitHub Actions CI
**Location:** `.github/workflows/deploy.yml`

The CI workflow automatically:
1. Installs pnpm and dependencies
2. Installs Chrome for Puppeteer
3. Runs the full build (includes pre-rendering)
4. Deploys to GitHub Pages

**Every time you:**
- Add/edit recipes through the UI
- Push to `main` branch
- The pre-rendering runs automatically in CI

## Files Created

Pre-rendered files are saved in `dist/`:
- `dist/index.html` - Homepage
- `dist/recipe/[slug].html` - Each recipe page

## Verification

Check that a recipe has proper meta tags:
```bash
grep 'og:title' dist/recipe/ailes-de-poulet.html
```

Should show recipe-specific title, not the generic homepage title.

## Configuration

### Local Development
```bash
# Standard concurrency
pnpm build

# Higher concurrency (faster)
PRERENDER_CONCURRENCY=20 pnpm build
```

### CI/CD
Edit `.github/workflows/deploy.yml` to adjust `PRERENDER_CONCURRENCY` environment variable.

## Troubleshooting

### Slow pre-rendering
- Increase `PRERENDER_CONCURRENCY` (default: 10)
- Warning: Too high may cause memory issues

### Missing meta tags
- Check that `src/main.tsx` uses `hydrateRoot` for pre-rendered content
- Verify `SEOHead` component is rendering in `RecipePage.tsx`

### CI failures
- Ensure Chrome is installed: `pnpm exec puppeteer browsers install chrome`
- Check GitHub Actions logs for Puppeteer errors

## Dependencies

- **puppeteer**: Browser automation for pre-rendering
- **vite**: Dev server and build tool

## Future Improvements

- [x] Incremental pre-rendering (only changed recipes) ✅
- [ ] Cache pre-rendered pages between builds
- [ ] Add progress bar for pre-rendering
- [ ] Pre-render on recipe creation via webhook/API
- [ ] Parallel browser instances for even faster pre-rendering
