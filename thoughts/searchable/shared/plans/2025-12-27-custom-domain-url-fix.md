# Custom Domain URL Configuration Fix - Implementation Plan

## Overview

Fix the custom domain blank page issue by migrating all hardcoded GitHub Pages URLs (`https://algritz.github.io/nosrecettes`) and subdirectory paths (`/nosrecettes/`) to use the custom domain (`https://nosrecettes.ca`) and root path (`/`). This plan implements a centralized configuration system to eliminate URL hardcoding across 10+ files and prevent future maintenance nightmares.

## Current State Analysis

### Root Causes Identified

The nosrecettes.ca site currently fails to load on the custom domain due to two interconnected issues:

1. **Vite base path** (FIXED by user) - Changed from `/nosrecettes/` to `/` in [vite.config.ts:7](vite.config.ts#L7)
2. **SEO script path generation** (STILL BROKEN) - Multiple build scripts and runtime files hardcode old URLs

### Affected Files (30+ Hardcoded References)

**Build Scripts (6 files):**

- [scripts/generate-index-html.js](scripts/generate-index-html.js) - 18 hardcoded references
- [scripts/generate-sitemap.js](scripts/generate-sitemap.js) - 1 hardcoded URL (used 3 times)
- [scripts/generate-manifest.js](scripts/generate-manifest.js) - 9 hardcoded paths
- [scripts/generate-browserconfig.js](scripts/generate-browserconfig.js) - 1 hardcoded path
- [scripts/generate-robots.js](scripts/generate-robots.js) - 1 hardcoded URL (used 2 times)
- [scripts/generate-security.js](scripts/generate-security.js) - 1 hardcoded URL

**Runtime Code (4 files):**

- [src/App.tsx:18](src/App.tsx#L18) - React Router basename still uses `/nosrecettes`
- [src/utils/seoUtils.ts](src/utils/seoUtils.ts) - 3 functions with hardcoded URLs (lines 6, 100, 125)
- [src/components/SEOHead.tsx:23](src/components/SEOHead.tsx#L23) - Hardcoded base URL
- [src/utils/imageUtils.ts:18](src/utils/imageUtils.ts#L18) - Hardcoded base path

**Static Files:**

- [public/404.html](public/404.html) - Lines 63, 105 contain `/nosrecettes` paths
- [CNAME](CNAME) - Correctly configured with `nosrecettes.ca`

### Key Discoveries

- **Zero centralization**: Every file independently hardcodes its own URL values
- **Build-runtime split**: Build scripts (Node.js) and runtime code (browser) duplicate configuration
- **Vite/Router mismatch**: Vite uses `/` but React Router still uses `/nosrecettes`
- **CNAME not copied**: The CNAME file isn't included in the `/dist` build output

## Desired End State

### Success Metrics

After implementation:

- All URLs use `https://nosrecettes.ca` domain
- All paths use `/` (root) instead of `/nosrecettes/`
- Single source of truth for site configuration
- Site loads correctly on custom domain
- All SEO meta tags reference correct URLs
- Sitemap and robots.txt point to custom domain

### How to Verify

1. **Build artifacts inspection**:
   - Check `index.html` meta tags contain `nosrecettes.ca`
   - Verify `public/sitemap.xml` URLs use custom domain
   - Confirm `public/manifest.json` uses root paths

2. **Live site testing**:
   - Homepage loads at `https://nosrecettes.ca`
   - Recipe pages load at `https://nosrecettes.ca/recipe/[slug]`
   - No 404 errors for assets in browser console
   - Browser routing works without `/nosrecettes` prefix

## What We're NOT Doing

- **Not** maintaining support for the old GitHub Pages subdirectory URL
- **Not** implementing environment-based switching between domains
- **Not** preserving backward compatibility with `/nosrecettes/` paths
- **Not** modifying the existing CNAME file (already correct)
- **Not** changing the build tool (staying with Vite)
- **Not** adding automated testing for URL configuration (future enhancement)

## Implementation Approach

This plan follows a **centralized configuration** strategy to eliminate URL hardcoding:

1. **Create config files** - Single source of truth for URLs and paths
2. **Migrate runtime code** - Update React components and utilities
3. **Migrate build scripts** - Update SEO generation scripts
4. **Fix static files** - Update 404 page hardcoded paths
5. **Fix deployment** - Ensure CNAME file is included in build artifact
6. **Validate** - Test all functionality locally and verify build outputs

## Phase 1: Create Centralized Configuration ✅

### Overview

This phase establishes the foundation for eliminating URL hardcoding by creating two configuration files: one for runtime code (TypeScript) and one for build scripts (JavaScript). These files become the single source of truth for all domain and path information throughout the project.

**Why two files?** The build scripts run in Node.js during the build process (before transpilation), while the runtime code runs in the browser after compilation. Each environment needs its own native format:

- **TypeScript config** (`src/config/site.config.ts`) - Used by React components, utilities, and other TypeScript code
- **JavaScript config** (`scripts/site.config.js`) - Used by build scripts that generate SEO files (sitemap, manifest, etc.)

Both files export identical configuration values and helper functions to ensure consistency.

### Changes Required

#### 1. Create TypeScript Configuration File

**File:** `src/config/site.config.ts`

```typescript
/**
 * Site configuration - Single source of truth for URLs and paths
 *
 * IMPORTANT: Keep this file in sync with scripts/site.config.js
 * Any changes here should be reflected in the build scripts config.
 */

interface SiteConfig {
  domain: string
  protocol: 'http' | 'https'
  basePath: string
  isDevelopment: boolean
}

/**
 * Get site configuration based on environment
 */
function getSiteConfig(): SiteConfig {
  const isDevelopment = import.meta.env.DEV

  if (isDevelopment) {
    return {
      domain: 'localhost:8080',
      protocol: 'http',
      basePath: '',
      isDevelopment: true,
    }
  }

  return {
    domain: 'nosrecettes.ca',
    protocol: 'https',
    basePath: '',
    isDevelopment: false,
  }
}

export const siteConfig = getSiteConfig()

/**
 * Get full URL for a given path
 * @param path - Relative path (e.g., '/recipe/chocolate-cake')
 * @returns Full URL (e.g., 'https://nosrecettes.ca/recipe/chocolate-cake')
 */
export function getFullUrl(path: string): string {
  // Normalize path to start with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  // Combine basePath (if any) with the path
  const fullPath = siteConfig.basePath
    ? `/${siteConfig.basePath}${normalizedPath}`
    : normalizedPath

  return `${siteConfig.protocol}://${siteConfig.domain}${fullPath}`
}

/**
 * Get asset URL for a given path
 * @param path - Asset path (e.g., '/images/logo.png')
 * @returns Full asset URL with base path
 */
export function getAssetUrl(path: string): string {
  // Normalize path to start with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  // Return path with basePath if configured
  return siteConfig.basePath
    ? `/${siteConfig.basePath}${normalizedPath}`
    : normalizedPath
}
```

**Purpose:**

- Provides type-safe configuration for all TypeScript/React code
- Automatically detects development vs production environment using Vite's `import.meta.env.DEV`
- Exports helper functions to generate full URLs and asset paths consistently

#### 2. Create JavaScript Configuration File

**File:** `scripts/site.config.js`

```javascript
/**
 * Site configuration for build scripts
 *
 * IMPORTANT: Keep this file in sync with src/config/site.config.ts
 * Any changes here should be reflected in the runtime config.
 */

/**
 * Get site configuration based on NODE_ENV
 * @returns {Object} Site configuration
 */
function getSiteConfig() {
  const isDevelopment = process.env.NODE_ENV !== 'production'

  if (isDevelopment) {
    return {
      domain: 'localhost:8080',
      protocol: 'http',
      basePath: '',
      isDevelopment: true,
    }
  }

  return {
    domain: 'nosrecettes.ca',
    protocol: 'https',
    basePath: '',
    isDevelopment: false,
  }
}

const siteConfig = getSiteConfig()

/**
 * Get full URL for a given path
 * @param {string} path - Relative path (e.g., '/recipe/chocolate-cake')
 * @returns {string} Full URL (e.g., 'https://nosrecettes.ca/recipe/chocolate-cake')
 */
function getFullUrl(path) {
  // Normalize path to start with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  // Combine basePath (if any) with the path
  const fullPath = siteConfig.basePath
    ? `/${siteConfig.basePath}${normalizedPath}`
    : normalizedPath

  return `${siteConfig.protocol}://${siteConfig.domain}${fullPath}`
}

/**
 * Get asset URL for a given path
 * @param {string} path - Asset path (e.g., '/images/logo.png')
 * @returns {string} Full asset URL with base path
 */
function getAssetUrl(path) {
  // Normalize path to start with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  // Return path with basePath if configured
  return siteConfig.basePath
    ? `/${siteConfig.basePath}${normalizedPath}`
    : normalizedPath
}

module.exports = {
  siteConfig,
  getFullUrl,
  getAssetUrl,
}
```

**Purpose:**

- Provides configuration for Node.js build scripts that run during `npm run build`
- Uses `process.env.NODE_ENV` to detect environment (build scripts don't have access to Vite's `import.meta.env`)
- Uses CommonJS exports (`module.exports`) for compatibility with existing build scripts

#### 3. Why Two Separate Files?

**Build-time vs Runtime Split:**

The nosrecettes.ca project has two distinct execution contexts:

1. **Build Scripts Context** (Node.js):
   - Runs during `npm run build` before code transpilation
   - Generates static files (sitemap.xml, manifest.json, robots.txt, etc.)
   - Requires plain JavaScript with CommonJS modules
   - Cannot import TypeScript files directly
   - Uses `process.env.NODE_ENV` for environment detection

2. **Runtime Context** (Browser):
   - Runs after Vite compiles TypeScript to JavaScript
   - Powers React components, routing, and utilities
   - Benefits from TypeScript's type safety
   - Uses ES6 modules and Vite's `import.meta.env`

**Alternative Considered and Rejected:**

We could transpile TypeScript during the build script phase, but this would:

- Add complexity (separate TypeScript compilation step)
- Slow down builds (additional tooling overhead)
- Create circular dependencies (build scripts would depend on the build process)

**Result:** Two simple, synchronized config files is the cleanest solution.

### Success Criteria

#### Automated Verification

```bash
# Check files exist
test -f src/config/site.config.ts && echo "✓ TypeScript config exists" || echo "✗ TypeScript config missing"
test -f scripts/site.config.js && echo "✓ JavaScript config exists" || echo "✗ JavaScript config missing"

# Verify TypeScript syntax
npx tsc --noEmit src/config/site.config.ts && echo "✓ TypeScript config has valid syntax" || echo "✗ TypeScript config has syntax errors"

# Verify JavaScript syntax and exports
node -e "const config = require('./scripts/site.config.js'); console.log('✓ JavaScript config exports:', Object.keys(config).join(', '))"
```

#### Manual Verification

1. **Open both config files** and confirm:
   - Both files contain identical `domain`, `protocol`, and `basePath` values
   - Both export `siteConfig`, `getFullUrl()`, and `getAssetUrl()` functions
   - TypeScript file uses `import.meta.env.DEV` for environment detection
   - JavaScript file uses `process.env.NODE_ENV` for environment detection

2. **Test the helper functions** in Node.js REPL:

   ```bash
   node
   > const { getFullUrl, getAssetUrl } = require('./scripts/site.config.js')
   > getFullUrl('/recipe/test')
   'https://nosrecettes.ca/recipe/test'
   > getAssetUrl('/images/logo.png')
   '/images/logo.png'
   ```

3. **Verify no regressions**:
   - Run `npm run build` - Should complete without errors
   - Check that existing generated files (sitemap, manifest, etc.) still exist in `/dist`

**Implementation Note**: This is a setup phase only. No existing code is modified in Phase 1. The configuration files are created but not yet used anywhere in the codebase. Subsequent phases will migrate existing hardcoded URLs to use these new config files.

## Phase 2: Update Build Scripts

### Overview

Migrate all 6 build scripts from hardcoded URLs and paths to use the centralized JavaScript configuration (`scripts/site.config.js`). This phase systematically eliminates all instances of `https://algritz.github.io/nosrecettes` URLs and `/nosrecettes/` path prefixes, replacing them with dynamic values from the site configuration.

**Execution Order**: Scripts are updated in order of increasing complexity, from single-line changes to multi-location updates.

### Changes Required

#### 2.1 - [scripts/generate-sitemap.js](scripts/generate-sitemap.js)

**Single hardcoded URL to update:**

**Line 68** - Base URL constant

```javascript
// BEFORE
const baseUrl = 'https://algritz.github.io/nosrecettes'

// AFTER
import { siteConfig } from './site.config.js'

const baseUrl = siteConfig.baseUrl
```

**What this accomplishes**: The sitemap XML will use `https://nosrecettes.ca` for all `<loc>` elements, ensuring search engines index the correct URLs.

**Import location**: Add the import statement after line 5.

#### 2.2 - [scripts/generate-robots.js](scripts/generate-robots.js)

**Single hardcoded URL to update:**

**Line 11** - Base URL constant

```javascript
// BEFORE
const baseUrl = 'https://algritz.github.io/nosrecettes'

// AFTER
import { siteConfig } from './site.config.js'

const baseUrl = siteConfig.baseUrl
```

**What this accomplishes**: The robots.txt sitemap reference will point to `https://nosrecettes.ca/sitemap.xml`.

**Import location**: Add the import statement after line 5.

#### 2.3 - [scripts/generate-manifest.js](scripts/generate-manifest.js)

**9 hardcoded paths to update:**

**Import statement:**

```javascript
import { getFullUrl, getAssetUrl } from './site.config.js'
```

Add after line 6.

**Changes:**

- **Line 19** `start_url`: Change `"/nosrecettes/"` to `getFullUrl('/')`
- **Line 26** `scope`: Change `"/nosrecettes/"` to `getFullUrl('/')`
- **Line 29** favicon src: Change `"/nosrecettes/favicon.ico"` to `getAssetUrl('favicon.ico')`
- **Line 34** 192px icon: Change `"/nosrecettes/icon-192.png"` to `getAssetUrl('icon-192.png')`
- **Line 40** 512px icon: Change `"/nosrecettes/icon-512.png"` to `getAssetUrl('icon-512.png')`
- **Line 48** wide screenshot: Change `"/nosrecettes/screenshot-wide.png"` to `getAssetUrl('screenshot-wide.png')`
- **Line 55** narrow screenshot: Change `"/nosrecettes/screenshot-narrow.png"` to `getAssetUrl('screenshot-narrow.png')`
- **Line 67** shortcut URL: Change `"/nosrecettes/?search="` to `getFullUrl('/?search=')`
- **Line 70** shortcut icon: Change `"/nosrecettes/icon-192.png"` to `getAssetUrl('icon-192.png')`

**What this accomplishes**: PWA manifest will reference assets at root without `/nosrecettes/` prefixes.

#### 2.4 - [scripts/generate-index-html.js](scripts/generate-index-html.js) (Most Complex)

**18 hardcoded references to update:**

**Import statement:**

```javascript
import { siteConfig, getFullUrl, getAssetUrl } from './site.config.js'
```

Add after line 6.

**URL References (11 instances) - use `siteConfig.baseUrl` or `getFullUrl()`:**

- **Line 55** og:url: `${siteConfig.baseUrl}/`
- **Line 58** og:image: `${getFullUrl('/images/og-default.jpg')}`
- **Line 67** twitter:url: `${siteConfig.baseUrl}/`
- **Line 70** twitter:image: `${getFullUrl('/images/og-default.jpg')}`
- **Line 82** canonical: `${siteConfig.baseUrl}/`
- **Line 115** Schema WebSite url: `${siteConfig.baseUrl}/`
- **Line 123** Schema SearchAction: `${siteConfig.baseUrl}/?search={search_term_string}`
- **Line 130** Schema publisher url: `${siteConfig.baseUrl}/`
- **Line 133** Schema logo: `${getFullUrl('/icon-512.png')}`
- **Line 152** Schema CollectionPage: `${siteConfig.baseUrl}/`
- **Line 165** Schema BreadcrumbList: `${siteConfig.baseUrl}/`

**Asset Paths (7 instances) - use `getAssetUrl()`:**

- **Line 85** favicon: `${getAssetUrl('favicon.ico')}`
- **Line 86** apple-touch-icon: `${getAssetUrl('apple-touch-icon.png')}`
- **Line 87** favicon-32: `${getAssetUrl('favicon-32x32.png')}`
- **Line 88** favicon-16: `${getAssetUrl('favicon-16x16.png')}`
- **Line 89** safari-pinned-tab: `${getAssetUrl('safari-pinned-tab.svg')}`
- **Line 91** browserconfig: `${getAssetUrl('browserconfig.xml')}`
- **Line 94** manifest: `${getAssetUrl('manifest.json')}`

**What this accomplishes**: Root HTML contains correct URLs for SEO, Open Graph, Twitter cards, and structured data.

#### 2.5 - [scripts/generate-browserconfig.js](scripts/generate-browserconfig.js)

**Single path to update:**

**Import:**

```javascript
import { getAssetUrl } from './site.config.js'
```

**Line 15** - Update tile image and convert to template literal:

```javascript
export function generateBrowserConfig() {
  const browserConfigContent = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
    <msapplication>
        <tile>
            <square150x150logo src="${getAssetUrl('mstile-150x150.png')}"/>
            <TileColor>#0f172a</TileColor>
        </tile>
    </msapplication>
</browserconfig>`

  return browserConfigContent
}
```

#### 2.6 - [scripts/generate-security.js](scripts/generate-security.js)

**Single URL to update:**

**Import:**

```javascript
import { siteConfig } from './site.config.js'
```

**Line 19** - Update canonical and convert to template literal:

```javascript
Canonical: ${siteConfig.baseUrl}/.well-known/security.txt
```

### Success Criteria

#### Automated Verification

```bash
# Build SEO files
npm run build:seo

# Verify no old URLs remain
grep -r "algritz.github.io/nosrecettes" public/ index.html
grep -r '"/nosrecettes/' public/ index.html

# Verify new URLs present
grep -r "nosrecettes.ca" public/ index.html
```

**Expected:** First two commands return no matches, third returns multiple matches.

#### Manual Verification

Inspect generated files:

- `public/sitemap.xml` - All URLs use `https://nosrecettes.ca`
- `public/robots.txt` - Sitemap URL is `https://nosrecettes.ca/sitemap.xml`
- `public/manifest.json` - `start_url` is `"/"`, all icons use root paths
- `index.html` - All meta tags and structured data use `nosrecettes.ca`
- `public/browserconfig.xml` - Tile path is `"/mstile-150x150.png"`
- `public/.well-known/security.txt` - Canonical uses `nosrecettes.ca`

**Implementation Note**: Complete Phase 2 entirely before proceeding to Phase 3. Phase 3's runtime code updates depend on consistent configuration.

## Phase 3: Update Runtime Code

### Overview

Replace all hardcoded URLs and base paths in React components and utilities with values from the centralized site configuration (`src/config/site.config.ts`). This ensures runtime behavior matches the build configuration and eliminates duplicate URL management.

### Changes Required

#### 3.1 - [src/App.tsx:18](src/App.tsx#L18) - React Router Configuration

**Current:**

```typescript
const basename = import.meta.env.PROD ? '/nosrecettes' : ''
```

**Updated:**

```typescript
import { siteConfig } from '@/config/site.config'

const basename = siteConfig.basePath
```

**Purpose:** Dynamically set React Router's base path from configuration.

#### 3.2 - [src/utils/seoUtils.ts](src/utils/seoUtils.ts) - SEO Utilities

**Import to add:**

```typescript
import { siteConfig, getFullUrl } from '@/config/site.config'
```

**Line 6, 100, 125** - Replace all instances of:

```typescript
// BEFORE
const baseUrl = import.meta.env.PROD
  ? 'https://algritz.github.io/nosrecettes'
  : 'http://localhost:8080'

// AFTER
const baseUrl = siteConfig.baseUrl
```

**Purpose:** Use centralized base URL for all SEO metadata generation.

#### 3.3 - [src/components/SEOHead.tsx:23](src/components/SEOHead.tsx#L23) - SEO Head Component

**Import to add:**

```typescript
import { siteConfig } from '@/config/site.config'
```

**Line 23** - Replace hardcoded base URL:

```typescript
// BEFORE
const baseUrl = import.meta.env.PROD
  ? 'https://algritz.github.io/nosrecettes'
  : 'http://localhost:8080'

// AFTER
const baseUrl = siteConfig.baseUrl
```

**Purpose:** Ensure consistency with seoUtils and eliminate duplicate domain knowledge.

#### 3.4 - [src/utils/imageUtils.ts:18](src/utils/imageUtils.ts#L18) - Image Utilities

**Import to add:**

```typescript
import { siteConfig } from '@/config/site.config'
```

**Line 18** - Replace hardcoded base path:

```typescript
// BEFORE
const basePath = import.meta.env.PROD ? '/nosrecettes' : ''

// AFTER
const basePath = siteConfig.basePath
```

**Purpose:** Use centralized base path for asset URL construction.

### Success Criteria

#### Automated Verification

```bash
# TypeScript compilation
npx tsc --noEmit

# Linting
npm run lint

# Build test
npm run build
```

All commands must complete without errors.

#### Manual Verification

1. **Start development server:** `npm run dev`
2. **Test routing:** Navigate to multiple pages, verify URLs work correctly
3. **Inspect page source:** Check canonical and OpenGraph meta tags contain `nosrecettes.ca`
4. **Verify images:** Confirm all images load (check Network tab for 404s)
5. **Test navigation:** Use React Router links, browser back/forward, direct URL access

**Implementation Note**: Complete Phase 3 and test locally before proceeding to Phase 4. Runtime issues are easier to debug in development mode.

## Phase 4: Update Static Files and Deployment

### Overview

Address remaining hardcoded `/nosrecettes` path references in static files and ensure the `CNAME` file is properly included in the build output for GitHub Pages deployment.

### Changes Required

#### 4.1 - [public/404.html](public/404.html) - 404 Error Page

Two hardcoded references to remove:

**Line 63** - Path normalization:

```javascript
// BEFORE
var currentPath = window.location.pathname.replace('/nosrecettes', '')

// AFTER
var currentPath = window.location.pathname
```

**Line 105** - Home link:

```html
<!-- BEFORE -->
<a href="/nosrecettes/" class="home-button">
  <!-- AFTER -->
  <a href="/" class="home-button"></a
></a>
```

**Rationale**: Custom domain serves from root, no `/nosrecettes` prefix to strip.

#### 4.2 - CNAME File Deployment

**Problem**: `CNAME` exists at project root but is NOT copied to `/dist` during build. Vite only copies files from `/public` directory.

**Solution (RECOMMENDED): Move CNAME to public directory**

```bash
mv CNAME public/CNAME
```

**Why this approach:**

- Leverages Vite's built-in static asset copying
- No workflow modifications needed
- Automatic inclusion in every build
- `/public` is the semantically correct location for deployment config files

**Alternative (Not Recommended):** Add copy step to `.github/workflows/deploy.yml` between build and upload steps:

```yaml
- name: Copy CNAME to dist
  run: cp CNAME ./dist/CNAME
```

### Success Criteria

#### Automated Verification

```bash
# Verify 404.html has no /nosrecettes references
grep -n "/nosrecettes" public/404.html
# Expected: No matches

# Build and verify CNAME in dist
npm run build
test -f dist/CNAME && cat dist/CNAME
# Expected: File exists and contains "nosrecettes.ca"
```

#### Manual Verification

After deployment:

1. **404 page**: Navigate to non-existent URL, verify 404 loads and home button redirects to root
2. **Custom domain**: Check GitHub Pages settings shows `nosrecettes.ca`
3. **SPA routing**: Test invalid routes properly redirect through 404 handler

**Implementation Note**: Use Option A (move CNAME to `/public`). This is the cleanest solution that leverages Vite's built-in behavior.

## Testing Strategy

### Local Testing

#### Development Server Tests

```bash
npm run dev
```

**Verification checklist:**

- Site loads at `http://localhost:8080`
- All pages navigate correctly
- React Router handles routes without 404s
- Images and assets load correctly
- No console errors or warnings

#### Build Verification

```bash
npm run build
```

**Inspect generated files:**

- `dist/index.html` - asset references use `/assets/` not `/nosrecettes/assets/`
- Icon links point to root (`/favicon.ico`, not `/nosrecettes/favicon.ico`)
- All meta tags contain `https://nosrecettes.ca`
- `dist/sitemap.xml` - URLs start with `https://nosrecettes.ca/`
- `dist/robots.txt` - sitemap URL is `https://nosrecettes.ca/sitemap.xml`
- `dist/manifest.json` - `start_url` and `scope` are `/`

#### Preview Server Tests

```bash
npm run preview
```

**Verification:**

- Site loads at preview URL
- All assets load (check Network tab)
- Navigate through routes - all work
- Test direct URL access
- Zero console errors
- 404 page works

### Pre-Deployment Checklist

**Configuration Files:**

- `vite.config.ts` - base is `/`
- `CNAME` in `public/` - contains `nosrecettes.ca`
- Build scripts import from `site.config.js`
- Runtime code imports from `@/config/site.config`

**Final Verification:**

```bash
# Clean build
rm -rf dist node_modules/.vite
npm run build

# Check for hardcoded paths
grep -r "/nosrecettes/" dist/
# Expected: No matches

# Verify CNAME
cat dist/CNAME
# Expected: nosrecettes.ca

# Preview one last time
npm run preview
```

### Post-Deployment Verification

**Immediate Checks:**

- Navigate to `https://nosrecettes.ca` - loads successfully
- Open DevTools Network tab - no 404 errors
- All assets return HTTP 200
- React Router works (click links, direct URLs, back button)

**SEO Verification:**

- View source - `og:url` contains `nosrecettes.ca`
- Canonical URL is correct
- No `algritz.github.io` references
- `https://nosrecettes.ca/sitemap.xml` loads with correct URLs
- `https://nosrecettes.ca/robots.txt` references correct sitemap
- `https://nosrecettes.ca/manifest.json` has `start_url: "/"`

**Browser Testing:**
Test on Chrome, Firefox, Safari (desktop & mobile):

- Site loads without blank page
- No console errors
- Assets load correctly
- Routing works
- Favicon displays

### Rollback Plan

If issues are found:

**Quick Rollback:**

```bash
git revert HEAD --no-edit
git push origin main
```

**Monitor:**

- GitHub Actions completes
- Site loads after rollback
- No 404 errors

**Alternative:** Remove custom domain in GitHub Pages settings temporarily.

## Performance Considerations

- **No performance impact**: Configuration changes are compile-time only
- **Build time**: Unchanged (same number of file operations)
- **Bundle size**: Negligible increase (~1KB for config module)
- **Runtime overhead**: Zero (config values are constants)

## Migration Notes

### Breaking Changes

- Old GitHub Pages URL (`algritz.github.io/nosrecettes`) will no longer work
- Direct links with `/nosrecettes/` path will 404

### Communication Plan

- Update README with new custom domain URL
- Update any external documentation or links
- Notify users of URL change if applicable

## References

- Original research: [thoughts/shared/research/2025-12-27-custom-domain-blank-page.md](thoughts/shared/research/2025-12-27-custom-domain-blank-page.md)
- Vite configuration: [vite.config.ts](vite.config.ts)
- Build workflow: [.github/workflows/deploy.yml](.github/workflows/deploy.yml)
- Package scripts: [package.json](package.json)
