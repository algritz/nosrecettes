---
date: 2025-12-29T02:30:27+0000
researcher: dacloutier
git_commit: f5ab74867b32ee73afd3a7bf2b16535f5da32a44
branch: main
repository: nosrecettes.ca
topic: 'Offline PWA Capabilities - Making Recipes Available Without Network'
tags:
  [
    research,
    codebase,
    pwa,
    offline,
    service-worker,
    recipes,
    caching,
    workbox,
    bundle-size,
  ]
status: complete
last_updated: 2025-12-28
last_updated_by: dacloutier
last_updated_note: 'Added bundle size analysis and Workbox recommendation'
---

# Research: Offline PWA Capabilities - Making Recipes Available Without Network

**Date**: 2025-12-29T02:30:27+0000
**Researcher**: dacloutier
**Git Commit**: f5ab74867b32ee73afd3a7bf2b16535f5da32a44
**Branch**: main
**Repository**: nosrecettes.ca

## Research Question

The website already has a PWA manifest to present itself like an app on Android. How can we extend this to download every recipe in the background so they become available offline? Images wouldn't be cached - we'd use the same placeholder as when there's no image, but display "images not available in offline mode".

## Summary

The nosrecettes.ca application is a **static React SPA with 721 recipes** bundled directly into the JavaScript at build time. It has a PWA manifest but **no service worker or offline capabilities**. The architecture is highly favorable for offline support because:

1. **All recipe data is already bundled** - No runtime API calls for recipe data
2. **Placeholder image system exists** - [ResponsiveImage.tsx:38-52](src/components/ResponsiveImage.tsx#L38-L52) already shows "Pas d'image" when images fail
3. **Static build process** - Recipes compiled via Vite's `import.meta.glob`
4. **Client-side routing** - React Router v6 with no server dependencies

**Current State**: The entire recipe database (~721 recipes) is already downloaded when users load the app. The missing piece is a service worker to cache the app shell and make it work offline.

## Detailed Findings

### Current PWA Manifest Setup

**Manifest Location**: [public/manifest.json](public/manifest.json)

The site has a complete PWA manifest with:

- `display: "standalone"` - Opens like a native app
- `start_url: "https://nosrecettes.ca/"` - Entry point
- Icons: 192x192 and 512x512 PNG (maskable)
- Language: `fr-CA`
- Categories: food, lifestyle, cooking, recipes
- Recipe count dynamically injected at build time

**Manifest Generation**: [scripts/generate-manifest.js:12-82](scripts/generate-manifest.js#L12-L82)

The manifest is generated at build time using the `npm run build:seo` command, which counts recipes and injects the number into the name and description:

```javascript
const recipeCount = getRecipeFiles().length // Currently 721
const manifest = {
  name: `Nos Recettes - ${recipeCount} Recettes Québécoises`,
  description: `Collection de ${recipeCount} recettes québécoises...`,
}
```

**Installability**: The manifest is properly linked in the HTML via `<link rel="manifest">`, making the site installable on Android.

**Missing**: No service worker registration. No offline capabilities beyond the manifest.

---

### Recipe Data Architecture

**Storage Format**: Individual TypeScript files in [src/recipes/](src/recipes/)

Each of the 721 recipes is stored as a TypeScript file exporting a typed `Recipe` object:

```typescript
// src/recipes/guacamole.ts
import { Recipe } from '@/types/recipe'

export const guacamole: Recipe = {
  id: '1758826632070',
  title: 'Guacamole',
  description: '',
  categories: ['Condiments', 'Sauces', 'Trempettes'],
  prepTime: 15,
  cookTime: 0,
  servings: 1,
  difficulty: 'Facile',
  ingredients: [
    /* ... */
  ],
  instructions: [
    /* ... */
  ],
  slug: 'guacamole',
}
```

**Build-Time Aggregation**: [src/recipes/index.ts:6-27](src/recipes/index.ts#L6-L27)

All recipes are loaded at build time using Vite's glob import:

```typescript
const recipeModules = import.meta.glob('./*.ts', { eager: true })
export const recipes: Recipe[] = []

Object.entries(recipeModules).forEach(([path, module]) => {
  if (path === './index.ts') return
  const moduleExports = module as Record<string, any>
  Object.values(moduleExports).forEach((exportedValue) => {
    if (exportedValue && typeof exportedValue === 'object') {
      recipes.push(exportedValue as Recipe)
    }
  })
})

recipes.sort((a, b) => a.title.localeCompare(b.title))
```

Key characteristics:

- `eager: true` - All recipes loaded immediately at app startup
- No API calls - Everything bundled in JavaScript
- Total in-memory array - Simple client-side filtering/searching

**Data Re-export**: [src/data/recipes.ts:1-2](src/data/recipes.ts#L1-L2)

Provides clean API boundary:

```typescript
export {
  recipes,
  getRecipeBySlug,
  getRecipesByCategory,
  getCategories,
} from '@/recipes'
```

**Recipe Type**: [src/types/recipe.ts:1-46](src/types/recipe.ts#L1-L46)

```typescript
export interface Recipe {
  id: string
  title: string
  description: string
  categories: string[]
  prepTime: number // Minutes
  cookTime: number // Minutes
  marinatingTime?: number // Optional, minutes
  servings: number
  difficulty: 'Facile' | 'Moyen' | 'Difficile'
  ingredients: string[] | IngredientSection[]
  instructions: string[] | InstructionSection[]
  tags: string[]
  images?: ImageSizes[] // New: responsive Cloudinary URLs
  image?: string // Deprecated: backward compatibility
  slug: string
  // ... other optional fields
}
```

---

### Routing and Navigation

**Router Library**: React Router v6.26.2

**Route Configuration**: [src/App.tsx](src/App.tsx)

```typescript
<Route path="/" element={<Index />} />
<Route path="/recipe/:slug" element={<RecipePage />} />
<Route path="/admin" element={<Admin />} />
<Route path="/new-recipe" element={<NewRecipe />} />
<Route path="/edit-recipe/:slug" element={<EditRecipe />} />
<Route path="/manage-categories" element={<ManageCategories />} />
<Route path="*" element={<NotFound />} />
```

**Recipe Loading**: [src/pages/RecipePage.tsx:18-19](src/pages/RecipePage.tsx#L18-L19)

```typescript
const { slug } = useParams<{ slug: string }>()
const recipe = recipes.find((r) => r.slug === slug)
```

**Key characteristics**:

- No code splitting - All routes eagerly imported
- No lazy loading - All pages loaded upfront
- Client-side only - No server-side rendering
- Direct array lookup - No fetch calls for recipes

**SPA Fallback**: [public/\_redirects](public/_redirects) and [public/404.html](public/404.html)

The site includes proper SPA routing fallback configuration for hosting platforms like Netlify.

---

### Image Handling and Placeholders

**Image Storage**: Cloudinary CDN (cloud name: `nosrecettes`)

149 out of 721 recipes (20.7%) have images stored on Cloudinary with responsive URLs:

```typescript
images: [
  {
    small:
      'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/lasagne',
    medium:
      'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/lasagne',
    large:
      'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/lasagne',
  },
]
```

**Responsive Image Component**: [src/components/ResponsiveImage.tsx:15-94](src/components/ResponsiveImage.tsx#L15-L94)

The component already handles missing/failed images gracefully:

```tsx
if (imageError || !imageSrc) {
  if (!showPlaceholder) return null

  return (
    <div className="bg-muted flex items-center justify-center border-2 border-dashed">
      <div className="flex flex-col items-center justify-center text-muted-foreground p-4">
        <Utensils className="w-12 h-12 mb-2" />
        <span className="text-sm font-medium">Pas d'image</span>
      </div>
    </div>
  )
}
```

**Key characteristics**:

- Placeholder system exists - Shows "Pas d'image" with utensils icon
- Error handling - `onError` callback sets `imageError` state
- Lazy loading - `loading="lazy"` attribute on images
- Responsive - Uses `<picture>` element with multiple sources

**Image Utilities**: [src/utils/imageUtils.ts](src/utils/imageUtils.ts) and [src/utils/cloudinaryUtils.ts](src/utils/cloudinaryUtils.ts)

Handles image processing, Cloudinary uploads, and URL generation. All images are external (Cloudinary CDN) - none bundled with the app.

---

### Build Process and Static Generation

**Build Scripts**: [package.json](package.json)

```json
"build": "NODE_ENV=production npm run build:seo && vite build",
"build:seo": "NODE_ENV=production node scripts/build-seo.js"
```

**SEO Build Orchestrator**: [scripts/build-seo.js:16-79](scripts/build-seo.js#L16-L79)

Runs before Vite build to generate:

1. `public/sitemap.xml` - All recipe URLs with image metadata
2. `public/robots.txt` - Crawling instructions
3. `public/manifest.json` - PWA manifest with recipe count
4. `index.html` - Dynamic meta tags and structured data
5. `public/browserconfig.xml` - Windows tile configuration
6. `public/.well-known/security.txt` - Security policy

**Recipe File Discovery**: [scripts/generate-sitemap.js:12-19](scripts/generate-sitemap.js#L12-L19)

```javascript
export function getRecipeFiles() {
  const recipesDir = path.join(__dirname, '..', 'src', 'recipes')
  const files = fs.readdirSync(recipesDir)

  return files
    .filter((file) => file.endsWith('.ts') && file !== 'index.ts')
    .map((file) => file.replace('.ts', ''))
}
```

**Recipe Data Extraction**: [scripts/generate-sitemap.js:22-65](scripts/generate-sitemap.js#L22-L65)

Uses regex to parse TypeScript source files without compiling:

```javascript
export function getRecipeData(filename) {
  const filePath = path.join(
    __dirname,
    '..',
    'src',
    'recipes',
    `${filename}.ts`,
  )
  const content = fs.readFileSync(filePath, 'utf-8')

  const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/)
  const slugMatch = content.match(/slug:\s*['"`]([^'"`]+)['"`]/)
  // Extract images, etc.

  return { title, slug, imageUrl }
}
```

**Vite Configuration**: [vite.config.ts](vite.config.ts)

Standard Vite React setup with TypeScript. No special bundling configuration for recipes - they're handled by `import.meta.glob`.

---

### Existing Caching Patterns

**Browser Storage**: No usage found

Searched for:

- `localStorage`
- `sessionStorage`
- `IndexedDB`
- `idb`

**Result**: No client-side storage used. The app relies entirely on bundled JavaScript for recipe data.

**Service Worker**: None

Searched for:

- `serviceWorker`
- `workbox`
- `sw.js`
- `vite-plugin-pwa`
- `registerSW`

**Result**: No service worker implementation. Despite having a PWA manifest, there's no offline functionality.

**Static Caching**: None beyond browser defaults

The site relies on standard browser caching (HTTP cache headers). No custom caching strategy.

---

### Data Volume Analysis

**Recipe Statistics**:

- Total recipes: 721 TypeScript files
- Recipes with images: 149 (20.7%)
- Recipes without images: 572 (79.3%)
- Recipe source size: 6.6MB (28,624 lines of code)
- Average lines per recipe: ~40 lines

**Actual Bundle Size (Production Build)**:

- **Minified JavaScript**: 5.7MB (5,741.95 KB)
- **Gzipped size**: 3.5MB (3,459 KB)
- **CSS**: 70.21 KB (12.34 KB gzipped)
- **Total initial load**: ~3.5MB gzipped

Breakdown from `vite build` output:

```
dist/index.html                     7.89 kB │ gzip:     2.36 kB
dist/assets/index-BsP4pAQl.css     70.21 kB │ gzip:    12.34 kB
dist/assets/index-DbeAWzEa.js   5,741.95 kB │ gzip: 3,459.00 kB

(!) Some chunks are larger than 500 kB after minification.
```

**Bundle Size Analysis**:

- Recipe data accounts for majority of bundle (6.6MB source → 3.5MB gzipped)
- No code splitting - entire app loaded upfront (`manualChunks: undefined` in [vite.config.ts:21](vite.config.ts#L21))
- Recipe data is text-only (no images bundled)
- Images hosted externally on Cloudinary CDN

**Performance Implications**:

- 3.5MB initial download on first visit (significant on mobile)
- Subsequent visits depend on browser cache (no service worker currently)
- Once loaded, navigation is instant (no additional requests)
- Bundle size warning from Vite: chunks larger than 500KB

**Network Requirements (Current)**:

- Initial load: Downloads 3.5MB gzipped (all recipes)
- Navigation: No additional requests (client-side routing)
- Images: Loaded on-demand from Cloudinary (~800KB-1.2MB per recipe with images)

---

## Code References

### PWA Manifest

- [public/manifest.json:1-69](public/manifest.json#L1-L69) - PWA manifest file
- [scripts/generate-manifest.js:12-82](scripts/generate-manifest.js#L12-L82) - Manifest generation

### Recipe Data Architecture

- [src/recipes/index.ts:6-27](src/recipes/index.ts#L6-L27) - Recipe aggregation via glob import
- [src/data/recipes.ts:1-2](src/data/recipes.ts#L1-L2) - Recipe data re-export
- [src/types/recipe.ts:1-46](src/types/recipe.ts#L1-L46) - Recipe interface definition
- [src/recipes/guacamole.ts](src/recipes/guacamole.ts) - Example recipe file

### Routing and Navigation

- [src/App.tsx](src/App.tsx) - React Router configuration
- [src/pages/RecipePage.tsx:18-19](src/pages/RecipePage.tsx#L18-L19) - Recipe lookup by slug
- [src/pages/Index.tsx](src/pages/Index.tsx) - Home page with recipe listing

### Image Handling

- [src/components/ResponsiveImage.tsx:38-52](src/components/ResponsiveImage.tsx#L38-L52) - Placeholder rendering
- [src/utils/imageUtils.ts](src/utils/imageUtils.ts) - Image processing utilities
- [src/utils/cloudinaryUtils.ts](src/utils/cloudinaryUtils.ts) - Cloudinary integration

### Build Process

- [scripts/build-seo.js:16-79](scripts/build-seo.js#L16-L79) - SEO file generation
- [scripts/generate-sitemap.js:12-65](scripts/generate-sitemap.js#L12-L65) - Sitemap generation
- [vite.config.ts](vite.config.ts) - Vite build configuration

---

## Architecture Documentation

### Current Implementation Pattern

**Static Bundle Architecture**:

1. **Build Time**: All recipes compiled into JavaScript via `import.meta.glob`
2. **Runtime**: Entire recipe database loaded in memory
3. **Navigation**: Client-side routing with array lookups
4. **Images**: External CDN with graceful fallback

This creates an **all-or-nothing** loading model:

- ✅ Fast navigation (no API calls)
- ✅ Works offline once loaded (except images)
- ❌ Large initial bundle
- ❌ No service worker to persist offline capability

### PWA Readiness

**What's Already There**:

- ✅ PWA manifest with proper configuration
- ✅ All recipe data bundled (no API dependency)
- ✅ Client-side routing (works without server)
- ✅ Image placeholder system
- ✅ Responsive design
- ✅ Installable on Android

**What's Missing**:

- ❌ Service worker registration
- ❌ Cache-first strategy for app shell
- ❌ Offline page fallback
- ❌ Background sync (if needed)

### Offline-First Architecture Suitability

This application is **highly suitable** for offline-first architecture because:

1. **No runtime data dependencies** - All recipes bundled at build time
2. **Static asset structure** - HTML, CSS, JS can be cached
3. **Graceful image fallbacks** - Already handles missing images
4. **Client-side routing** - No server required for navigation
5. **Small scope** - 721 recipes is manageable bundle size

The app essentially already works offline if you keep the tab open. The missing piece is service worker caching to make it work after browser restart.

---

## Historical Context (from thoughts/)

No prior research documents found related to PWA, offline capabilities, or service workers.

---

## Related Research

- [thoughts/shared/research/2025-12-28-time-measure-multiple-of-5-constraint.md](thoughts/shared/research/2025-12-28-time-measure-multiple-of-5-constraint.md) - TimeInput component research

---

---

## Follow-up Research [2025-12-28T21:35:00-05:00]

### Bundle Size Concerns

After reviewing the production build, the 3.5MB gzipped bundle size raised concerns about initial load performance, especially on mobile networks.

**Question**: Can recipes be loaded asynchronously (app shell + homepage first, recipes on-demand)?

**Answer**: Yes, but with architectural trade-offs:

**Option A: Lazy Loading Individual Recipes**

- Change [src/recipes/index.ts:7](src/recipes/index.ts#L7) from `import.meta.glob('./*.ts', { eager: true })` to `{ eager: false }`
- Result: App shell loads fast (~500KB-1MB), each recipe fetched on navigation
- Trade-off: Requires network for each recipe view, complicates offline mode

**Option B: Load Recipe Metadata Separately**

- Bundle only recipe metadata (title, slug, categories, image URLs) - ~200KB
- Lazy load full recipe details (ingredients, instructions) on demand
- Result: Fast homepage, individual recipe pages load incrementally
- Trade-off: Requires restructuring recipe storage format

**Option C: Keep Current + Add Service Worker (Recommended)**

- Keep eager loading (users download 3.5MB once)
- Add service worker to cache everything
- Result: First visit = 3.5MB download, all subsequent visits = instant load from cache
- Trade-off: First visit performance, but perfect offline experience thereafter

**Option D: Split by Category**

- Load recipes in category-based chunks
- Result: Reduces initial bundle, loads relevant chunks on demand
- Trade-off: Complex chunk management, multiple network requests

**Decision**: Proceed with **Option C** (Workbox + Service Worker) for initial offline implementation. Address bundle size optimization separately later.

---

### Service Worker Implementation: Workbox Strategy

**Recommended Approach**: Use `vite-plugin-pwa` with Workbox

**Why Workbox?**

- Free and open source (MIT license)
- Maintained by Google Chrome team
- Built-in cache strategies
- Automatic versioning and cache invalidation
- TypeScript support
- ~10-20KB runtime overhead

**Installation**:

```bash
pnpm add -D vite-plugin-pwa
```

**Configuration**: [vite.config.ts](vite.config.ts)

```typescript
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'prompt', // Ask user to update when new version available
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        runtimeCaching: [
          {
            // Cloudinary images - network first, cache as backup
            urlPattern: /^https:\/\/res\.cloudinary\.com\/.*/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'cloudinary-images',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
              },
            },
          },
        ],
      },
    }),
  ],
})
```

**Cache Strategy for App Shell**:

- Use **CacheFirst** for app bundle (HTML, CSS, JS)
- Version-based cache invalidation via file hashes
- Automatic cleanup of old caches on service worker activation

**Cache Strategy for Images**:

- Use **NetworkFirst** for Cloudinary images
- Falls back to "Pas d'image" placeholder on network failure (already implemented)
- Cache up to 50 most recent images for 30 days
- Keeps bundle size small while providing offline image support for frequently viewed recipes

**Update Strategy**: Stale-While-Revalidate

- New service worker installs in background when deployed
- User sees banner: "New recipes available! Refresh to update."
- On refresh, new cache replaces old cache
- Users can continue using old version until they explicitly update

**Handling New Recipe Deployments**:

1. **Build time**:
   - Vite generates new bundle with updated hash (e.g., `index-Du594fCq.js` → `index-Ae892kLp.js`)
   - `vite-plugin-pwa` generates new service worker with updated precache manifest
   - New service worker has different version hash

2. **User visits site**:
   - Browser detects new service worker
   - New SW installs in background (doesn't interrupt current session)
   - Banner appears: "Nouvelle version disponible" with "Mettre à jour" button

3. **User clicks update** (or refreshes):
   - New service worker activates
   - Old cache deleted (`CACHE_VERSION` check in activate event)
   - New bundle with new recipes loaded
   - User sees updated content

4. **If user is offline when update deployed**:
   - Continues using cached version
   - When back online, update process triggers automatically
   - Next launch shows new recipes

**Cache Invalidation Code** (auto-generated by Workbox):

```javascript
const CACHE_VERSION = 'v1.2.3' // Auto-incremented on build
const CACHE_NAME = `nosrecettes-${CACHE_VERSION}`

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name)),
      )
    }),
  )
})
```

**User Experience Timeline**:

- **First visit**: Download 3.5MB gzipped, cache everything, app works offline
- **Subsequent visits**: Instant load from cache (0 network)
- **New deployment**: Background update, prompt to refresh
- **Offline during update**: Keep using current version, update when online
- **Recipe updates**: Users max 1 version behind until explicit refresh

**Implementation Checklist**:

1. Install `vite-plugin-pwa`
2. Configure Workbox in [vite.config.ts](vite.config.ts)
3. Add update prompt UI component
4. Test offline functionality in dev mode
5. Verify cache invalidation on deployment
6. Monitor service worker activation in production

**Image Placeholder Handling**:

- Keep existing "Pas d'image" text (no need for "images not available in offline mode")
- Cloudinary images naturally fail offline → existing error handling shows placeholder
- Optional: Detect offline state and preemptively show placeholder to avoid loading delay

---

## Updated Open Questions

1. ~~**Service Worker Strategy**: Should we use Workbox or a custom service worker?~~ **ANSWERED**: Use Workbox via vite-plugin-pwa
2. ~~**Cache Invalidation**: How to handle recipe updates when new versions are deployed?~~ **ANSWERED**: Automatic via versioned service worker + update prompts
3. **Partial Caching**: Should we cache Cloudinary images, or only show placeholders offline? (Current: NetworkFirst with 50 image limit)
4. **Image Placeholder Text**: Keep existing "Pas d'image" or add offline-specific message?
5. **Background Sync**: Do we need background sync for admin operations, or is offline mode read-only?
6. **Bundle Size Optimization**: Address 3.5MB bundle in separate effort (code splitting, lazy loading, metadata separation)
7. **Update Prompt UX**: What should update notification look like? Banner? Toast? Modal?
8. **Service Worker Scope**: Should admin pages work offline, or only public recipe browsing?
