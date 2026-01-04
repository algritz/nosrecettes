---
date: 2026-01-03T14:34:48+0000
author: dacloutier
git_commit: c6232e4ea681c8f547e52b809c2ae8a6cf77b7f8
branch: main
repository: nosrecettes.ca
topic: "IndexedDB Migration with Persistent Storage - Permanent Offline Access"
tags: [plan, indexeddb, persistent-storage, pwa, offline, cache-eviction, workbox]
status: draft
related_research: thoughts/shared/research/2026-01-03-offline-cache-eviction-analysis.md
---

# Implementation Plan: IndexedDB Migration with Persistent Storage

**Date**: 2026-01-03T14:34:48+0000
**Author**: dacloutier
**Git Commit**: c6232e4ea681c8f547e52b809c2ae8a6cf77b7f8
**Branch**: main
**Repository**: nosrecettes.ca

## Overview

Migrate recipe data from JavaScript bundle to IndexedDB with persistent storage request to prevent cache eviction and ensure permanent offline access.

**Current Problem**: Service worker cache can be evicted by browser under storage pressure, causing complete app failure when offline.

**Solution**: Hybrid approach using persistent storage + IndexedDB for recipe data while keeping service worker for app shell.

## Goals

1. ✅ **Prevent cache eviction** - Request persistent storage to protect data
2. ✅ **Smaller bundle** - Remove recipe data from JavaScript (3.5MB → ~500KB)
3. ✅ **Faster initial load** - Less JavaScript to parse and execute
4. ✅ **Clear failure handling** - Show actionable error when data unavailable
5. ✅ **Automatic updates** - Background sync when new recipes deployed
6. ✅ **No fallback complexity** - Clean "all or nothing" approach

## Architecture Changes

### Current Architecture

```
┌─────────────────────────────────────┐
│ JavaScript Bundle                   │
│ - App code (~500KB)                 │
│ - Recipe data (~3MB)                │
│ Total: 3.5MB gzipped                │
│ Cached by: Service Worker           │
│ Eviction risk: HIGH                 │
└─────────────────────────────────────┘
```

### Target Architecture

```
┌─────────────────────────────────────┐
│ JavaScript Bundle                   │
│ - App code (~500KB)                 │
│ - NO recipe data                    │
│ Cached by: Service Worker           │
│ + Persistent Storage Request        │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ IndexedDB                           │
│ - All recipes (structured data)     │
│ - Version metadata                  │
│ Protected by: Persistent Storage    │
│ Eviction risk: LOW                  │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ recipes.json (served separately)    │
│ - Dynamic count                     │
│ - Version hash                      │
│ - Used for: Initial load + updates  │
└─────────────────────────────────────┘
```

## Implementation Steps

### Phase 1: Build System Changes

**Goal**: Generate `recipes.json` at build time instead of bundling into JS

#### 1.1 Create Recipe JSON Generator

**File**: `scripts/generate-recipes-json.js`

```javascript
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { getRecipeFiles, getRecipeData } from './generate-sitemap.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export function generateRecipesJson() {
  console.log('Generating recipes.json...')

  const recipeFiles = getRecipeFiles()
  const recipes = recipeFiles.map(filename => getRecipeData(filename))

  // Get git commit hash for versioning
  const gitCommit = process.env.GITHUB_SHA ||
                   process.env.VERCEL_GIT_COMMIT_SHA ||
                   'dev'

  const recipeData = {
    version: gitCommit,
    timestamp: Date.now(),
    count: recipes.length,
    recipes: recipes
  }

  const outputPath = path.join(__dirname, '..', 'public', 'recipes.json')
  fs.writeFileSync(outputPath, JSON.stringify(recipeData))

  console.log(`✓ Generated recipes.json with ${recipes.length} recipes (version: ${gitCommit})`)
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateRecipesJson()
}
```

**Note**: Currently `getRecipeData()` uses regex parsing which only extracts basic fields (title, slug, imageUrl). We need to enhance it to extract ALL recipe fields (ingredients, instructions, categories, etc.) or use a proper TypeScript parser.

#### 1.2 Update Build Script

**File**: `scripts/build-seo.js`

Add to orchestrator:

```javascript
import { generateRecipesJson } from './generate-recipes-json.js'

export function buildSEO() {
  console.log('Building SEO and recipe data...')

  generateSitemap()
  generateRobotsTxt()
  generateManifest()
  generateIndexHtml()
  generateBrowserConfig()
  generateSecurityTxt()
  generateRecipesJson() // NEW

  console.log('✓ SEO build complete')
}
```

#### 1.3 Update Recipe Index to NOT Bundle Data

**File**: `src/recipes/index.ts`

Change from eager bundling to empty export:

```typescript
// OLD: Bundled all recipes into JavaScript
// const recipeModules = import.meta.glob('./*.ts', { eager: true })
// export const recipes: Recipe[] = []
// ... processing logic

// NEW: Recipes loaded from IndexedDB at runtime
import { Recipe } from '@/types/recipe'

// Export empty array - will be populated from IndexedDB
export const recipes: Recipe[] = []

// Note: This file kept for backwards compatibility during migration
// Components should migrate to useRecipes() hook
```

**Impact**: Bundle size drops from 3.5MB → ~500KB

---

### Phase 2: IndexedDB Infrastructure

**Goal**: Set up IndexedDB schema and access layer

#### 2.1 Install Dependencies

```bash
pnpm add idb
```

**Package**: `idb` v8.0.0 - Promise-based IndexedDB wrapper

#### 2.2 Create IndexedDB Utilities

**File**: `src/utils/recipeDb.ts`

```typescript
import { openDB, DBSchema, IDBPDatabase } from 'idb'
import { Recipe } from '@/types/recipe'

// Database schema
interface RecipeDB extends DBSchema {
  recipes: {
    key: string
    value: Recipe
    indexes: {
      'by-slug': string
      'by-category': string[]
    }
  }
  metadata: {
    key: string
    value: {
      key: string
      value: string | number
      lastUpdated: number
    }
  }
}

const DB_NAME = 'nosrecettes'
const DB_VERSION = 1

// Open database with schema
export async function openRecipeDB(): Promise<IDBPDatabase<RecipeDB>> {
  return openDB<RecipeDB>(DB_NAME, DB_VERSION, {
    upgrade(db) {
      // Recipes object store
      if (!db.objectStoreNames.contains('recipes')) {
        const recipeStore = db.createObjectStore('recipes', { keyPath: 'id' })
        recipeStore.createIndex('by-slug', 'slug', { unique: true })
        recipeStore.createIndex('by-category', 'categories', { multiEntry: true })
      }

      // Metadata object store
      if (!db.objectStoreNames.contains('metadata')) {
        db.createObjectStore('metadata', { keyPath: 'key' })
      }
    }
  })
}

// Get all recipes from IndexedDB
export async function getAllRecipes(): Promise<Recipe[]> {
  const db = await openRecipeDB()
  return db.getAll('recipes')
}

// Get recipe by slug
export async function getRecipeBySlug(slug: string): Promise<Recipe | undefined> {
  const db = await openRecipeDB()
  return db.getFromIndex('recipes', 'by-slug', slug)
}

// Get recipes by category
export async function getRecipesByCategory(category: string): Promise<Recipe[]> {
  const db = await openRecipeDB()
  return db.getAllFromIndex('recipes', 'by-category', category)
}

// Get current version
export async function getRecipeVersion(): Promise<string | null> {
  const db = await openRecipeDB()
  const meta = await db.get('metadata', 'recipeVersion')
  return meta?.value as string || null
}

// Save version
export async function saveRecipeVersion(version: string): Promise<void> {
  const db = await openRecipeDB()
  await db.put('metadata', {
    key: 'recipeVersion',
    value: version,
    lastUpdated: Date.now()
  })
}

// Populate IndexedDB with recipes
export async function populateRecipes(recipes: Recipe[], version: string): Promise<void> {
  const db = await openRecipeDB()
  const tx = db.transaction(['recipes', 'metadata'], 'readwrite')

  // Clear existing recipes
  await tx.objectStore('recipes').clear()

  // Insert all recipes
  await Promise.all(recipes.map(recipe =>
    tx.objectStore('recipes').put(recipe)
  ))

  // Save version
  await tx.objectStore('metadata').put({
    key: 'recipeVersion',
    value: version,
    lastUpdated: Date.now()
  })

  await tx.done
}

// Update recipes (smart merge)
export async function updateRecipes(
  serverRecipes: Recipe[],
  serverVersion: string
): Promise<void> {
  const db = await openRecipeDB()

  // Create lookup of server recipes by ID
  const serverMap = new Map(serverRecipes.map(r => [r.id, r]))

  // Get all local recipe IDs
  const localRecipes = await db.getAll('recipes')
  const localIds = new Set(localRecipes.map(r => r.id))

  const tx = db.transaction(['recipes', 'metadata'], 'readwrite')

  // Update/Add recipes from server
  for (const recipe of serverRecipes) {
    await tx.objectStore('recipes').put(recipe)
  }

  // Delete recipes that no longer exist on server
  for (const localId of localIds) {
    if (!serverMap.has(localId)) {
      await tx.objectStore('recipes').delete(localId)
    }
  }

  // Update version
  await tx.objectStore('metadata').put({
    key: 'recipeVersion',
    value: serverVersion,
    lastUpdated: Date.now()
  })

  await tx.done
}

// Check if IndexedDB is populated
export async function isRecipeDBPopulated(): Promise<boolean> {
  const db = await openRecipeDB()
  const count = await db.count('recipes')
  return count > 0
}

// Clear all data (for debugging)
export async function clearRecipeDB(): Promise<void> {
  const db = await openRecipeDB()
  const tx = db.transaction(['recipes', 'metadata'], 'readwrite')
  await tx.objectStore('recipes').clear()
  await tx.objectStore('metadata').clear()
  await tx.done
}
```

---

### Phase 3: Persistent Storage Request

**Goal**: Request persistent storage to prevent eviction

#### 3.1 Create Persistent Storage Hook

**File**: `src/hooks/usePersistentStorage.ts`

```typescript
import { useState, useEffect } from 'react'

interface PersistentStorageState {
  isPersisted: boolean | null
  canPersist: boolean
  requestPersistence: () => Promise<boolean>
}

export function usePersistentStorage(): PersistentStorageState {
  const [isPersisted, setIsPersisted] = useState<boolean | null>(null)
  const canPersist = typeof navigator !== 'undefined' &&
                     'storage' in navigator &&
                     'persist' in navigator.storage

  useEffect(() => {
    if (canPersist) {
      checkPersistence()
    }
  }, [canPersist])

  async function checkPersistence() {
    if (!canPersist) return

    try {
      const persisted = await navigator.storage.persisted()
      setIsPersisted(persisted)
    } catch (error) {
      console.error('Failed to check persistence:', error)
      setIsPersisted(false)
    }
  }

  async function requestPersistence(): Promise<boolean> {
    if (!canPersist) {
      console.warn('Persistent storage not supported')
      return false
    }

    try {
      const granted = await navigator.storage.persist()
      setIsPersisted(granted)

      if (granted) {
        console.log('✓ Persistent storage granted')
      } else {
        console.warn('✗ Persistent storage denied')
      }

      return granted
    } catch (error) {
      console.error('Failed to request persistence:', error)
      return false
    }
  }

  return { isPersisted, canPersist, requestPersistence }
}
```

#### 3.2 Request Persistence on App Load

**File**: `src/App.tsx`

```typescript
import { usePersistentStorage } from '@/hooks/usePersistentStorage'

const App = () => {
  const { showUpdateBanner, dismissBanner } = usePwaUpdate()
  const { requestPersistence } = usePersistentStorage()

  useEffect(() => {
    // Request persistent storage on first load
    requestPersistence().catch(err =>
      console.error('Persistence request failed:', err)
    )
  }, [requestPersistence])

  return (
    // ... rest of app
  )
}
```

---

### Phase 4: Recipe Loading System

**Goal**: Load recipes from IndexedDB with network fallback

#### 4.1 Create Recipe Loader Hook

**File**: `src/hooks/useRecipes.ts`

```typescript
import { useState, useEffect } from 'react'
import { Recipe } from '@/types/recipe'
import {
  getAllRecipes,
  getRecipeVersion,
  populateRecipes,
  updateRecipes,
  isRecipeDBPopulated
} from '@/utils/recipeDb'

interface RecipeState {
  recipes: Recipe[]
  loading: boolean
  error: Error | null
  version: string | null
}

export function useRecipes(): RecipeState {
  const [state, setState] = useState<RecipeState>({
    recipes: [],
    loading: true,
    error: null,
    version: null
  })

  useEffect(() => {
    loadRecipes()
  }, [])

  async function loadRecipes() {
    try {
      // Check if IndexedDB has data
      const hasData = await isRecipeDBPopulated()

      if (hasData) {
        // Load from IndexedDB
        const recipes = await getAllRecipes()
        const version = await getRecipeVersion()

        setState({
          recipes,
          loading: false,
          error: null,
          version
        })

        // Background check for updates (if online)
        if (navigator.onLine) {
          checkForUpdates().catch(console.error)
        }
      } else {
        // First load - must fetch from network
        await fetchAndPopulate()
      }
    } catch (error) {
      console.error('Failed to load recipes:', error)
      setState({
        recipes: [],
        loading: false,
        error: error as Error,
        version: null
      })
    }
  }

  async function fetchAndPopulate() {
    if (!navigator.onLine) {
      throw new Error('OFFLINE_NO_DATA')
    }

    const response = await fetch('/recipes.json')
    if (!response.ok) {
      throw new Error(`Failed to fetch recipes: ${response.status}`)
    }

    const data = await response.json()
    await populateRecipes(data.recipes, data.version)

    setState({
      recipes: data.recipes,
      loading: false,
      error: null,
      version: data.version
    })
  }

  async function checkForUpdates() {
    try {
      const response = await fetch('/recipes.json', {
        cache: 'no-store' // Always check server
      })

      if (!response.ok) return

      const serverData = await response.json()
      const localVersion = await getRecipeVersion()

      if (serverData.version !== localVersion) {
        console.log(`Update available: ${localVersion} → ${serverData.version}`)
        await updateRecipes(serverData.recipes, serverData.version)

        // Update state with new recipes
        setState(prev => ({
          ...prev,
          recipes: serverData.recipes,
          version: serverData.version
        }))

        // Notify user
        // TODO: Show toast notification
      }
    } catch (error) {
      console.error('Update check failed:', error)
    }
  }

  return state
}
```

#### 4.2 Create Error Boundary for Recipe Loading

**File**: `src/components/RecipeLoadError.tsx`

```typescript
import { WifiOff, RefreshCw, Database } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface RecipeLoadErrorProps {
  error: Error
  onRetry: () => void
}

export function RecipeLoadError({ error, onRetry }: RecipeLoadErrorProps) {
  const isOfflineError = error.message === 'OFFLINE_NO_DATA'

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <div className="rounded-full bg-muted p-6">
            {isOfflineError ? (
              <WifiOff className="h-12 w-12 text-muted-foreground" />
            ) : (
              <Database className="h-12 w-12 text-muted-foreground" />
            )}
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-foreground">
            {isOfflineError
              ? 'Recettes non disponibles hors ligne'
              : 'Erreur de chargement'
            }
          </h1>
          <p className="text-muted-foreground">
            {isOfflineError ? (
              <>
                Vos données de recettes ont été effacées.
                Veuillez vous connecter à Internet pour télécharger à nouveau les recettes.
              </>
            ) : (
              <>
                Une erreur est survenue lors du chargement des recettes.
                Veuillez réessayer.
              </>
            )}
          </p>
          {isOfflineError && (
            <p className="text-sm text-muted-foreground mt-4">
              Pour éviter cela à l'avenir, assurez-vous d'avoir suffisamment
              d'espace de stockage et accordez les autorisations de stockage
              persistant lorsqu'elles sont demandées.
            </p>
          )}
        </div>

        <Button onClick={onRetry} variant="default">
          <RefreshCw className="mr-2 h-4 w-4" />
          Réessayer
        </Button>
      </div>
    </div>
  )
}
```

---

### Phase 5: Update Components

**Goal**: Migrate components from bundled recipes to IndexedDB

#### 5.1 Update Index Page

**File**: `src/pages/Index.tsx`

```typescript
// OLD:
import { recipes } from '@/data/recipes'

// NEW:
import { useRecipes } from '@/hooks/useRecipes'
import { RecipeLoadError } from '@/components/RecipeLoadError'

const Index = () => {
  const { recipes, loading, error } = useRecipes()

  if (loading) {
    return <LoadingSpinner />
  }

  if (error) {
    return <RecipeLoadError error={error} onRetry={() => window.location.reload()} />
  }

  // Rest of component unchanged
  const {
    searchTerm,
    setSearchTerm,
    selectedCategories,
    setSelectedCategories,
    categories,
    displayedRecipes,
    hasMore,
    loadMore,
  } = useInfiniteRecipes({ recipes, batchSize: 10 })

  return (
    // ... existing UI
  )
}
```

#### 5.2 Update Recipe Page

**File**: `src/pages/RecipePage.tsx`

```typescript
import { getRecipeBySlug } from '@/utils/recipeDb'

const RecipePage = () => {
  const { slug } = useParams<{ slug: string }>()
  const [recipe, setRecipe] = useState<Recipe | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadRecipe()
  }, [slug])

  async function loadRecipe() {
    if (!slug) return

    try {
      const recipe = await getRecipeBySlug(slug)
      setRecipe(recipe || null)
    } catch (error) {
      console.error('Failed to load recipe:', error)
      setRecipe(null)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <LoadingSpinner />
  if (!recipe) return <NotFound />

  return <RecipeDetail recipe={recipe} />
}
```

---

### Phase 6: Background Sync & Updates

**Goal**: Automatically update recipes when new versions deployed

#### 6.1 Add Update Check on App Load

**File**: `src/App.tsx`

```typescript
import { checkForRecipeUpdates } from '@/utils/recipeUpdates'

const App = () => {
  useEffect(() => {
    // Check for recipe updates on app load (if online)
    if (navigator.onLine) {
      checkForRecipeUpdates().catch(console.error)
    }

    // Check periodically while app is open
    const interval = setInterval(() => {
      if (navigator.onLine) {
        checkForRecipeUpdates().catch(console.error)
      }
    }, 30 * 60 * 1000) // Every 30 minutes

    return () => clearInterval(interval)
  }, [])

  return (
    // ... app content
  )
}
```

#### 6.2 Create Update Utilities

**File**: `src/utils/recipeUpdates.ts`

```typescript
import { getRecipeVersion, updateRecipes } from '@/utils/recipeDb'
import { toast } from 'sonner'

export async function checkForRecipeUpdates(): Promise<boolean> {
  try {
    const response = await fetch('/recipes.json', {
      cache: 'no-store'
    })

    if (!response.ok) return false

    const serverData = await response.json()
    const localVersion = await getRecipeVersion()

    if (serverData.version !== localVersion) {
      console.log(`Update available: ${localVersion} → ${serverData.version}`)

      // Update in background
      await updateRecipes(serverData.recipes, serverData.version)

      // Calculate changes
      const added = serverData.count - (await db.count('recipes'))

      // Notify user
      toast.success(`Mise à jour des recettes`, {
        description: `${Math.abs(added)} ${added > 0 ? 'nouvelles' : 'modifiées'} recettes`
      })

      return true
    }

    return false
  } catch (error) {
    console.error('Update check failed:', error)
    return false
  }
}
```

---

### Phase 7: Testing & Validation

#### 7.1 Test Scenarios

**First Load (Online)**:
- [ ] App loads successfully
- [ ] Recipes downloaded from `/recipes.json`
- [ ] IndexedDB populated
- [ ] Recipes display correctly
- [ ] Persistent storage requested

**First Load (Offline)**:
- [ ] Clear error message shown
- [ ] "Connect to internet" instruction displayed
- [ ] Retry button available

**Subsequent Loads (Offline)**:
- [ ] Recipes load from IndexedDB
- [ ] No network requests made
- [ ] Search/filter works
- [ ] Individual recipes load

**Update Detection (Online)**:
- [ ] Background check runs on load
- [ ] New recipes detected
- [ ] IndexedDB updated
- [ ] Toast notification shown
- [ ] New recipes appear in list

**Cache Eviction Recovery**:
- [ ] Clear IndexedDB manually
- [ ] Open app offline → Error shown
- [ ] Connect to internet
- [ ] Click retry → Recipes restored

**Persistent Storage**:
- [ ] Permission prompt shown (Chrome)
- [ ] Granted state tracked
- [ ] Storage exemption applied

#### 7.2 Performance Testing

- [ ] Initial bundle size: ~500KB (down from 3.5MB)
- [ ] First load time: < 2s (with network)
- [ ] Offline load time: < 500ms (from IndexedDB)
- [ ] Update check time: < 1s (background)
- [ ] IndexedDB storage: ~5-7MB (all recipes)

---

## Migration Strategy

### Step 1: Feature Flag (Optional)

Add feature flag to enable gradual rollout:

```typescript
const USE_INDEXEDDB = import.meta.env.VITE_USE_INDEXEDDB === 'true'

// In components:
const recipes = USE_INDEXEDDB ? useRecipes() : { recipes: bundledRecipes, loading: false, error: null }
```

### Step 2: Parallel Deployment

1. Deploy with IndexedDB code but disabled
2. Monitor for errors
3. Enable for 10% of users
4. Gradually increase to 100%
5. Remove old bundle code

### Step 3: Cleanup

After migration complete:
- Remove `import.meta.glob` from `src/recipes/index.ts`
- Remove recipe count hardcoded references
- Update documentation

---

## Rollback Plan

If critical issues found:

1. Set `VITE_USE_INDEXEDDB=false`
2. Redeploy (falls back to bundled recipes)
3. Investigate and fix issues
4. Re-enable when ready

---

## Open Questions

- [ ] Should we cache `recipes.json` with service worker for faster updates?
- [ ] How to handle schema migrations if Recipe interface changes?
- [ ] Should we compress recipes.json (gzip)?
- [ ] Monitor storage quota and warn users?
- [ ] Add manual "Check for updates" button in settings?

---

## Success Metrics

- Bundle size reduction: 3.5MB → 0.5MB (85% reduction)
- Cache eviction incidents: Should drop to near-zero
- Offline load time: < 500ms
- User-reported "app won't load" errors: Significant reduction
- Persistent storage grant rate: Monitor

---

## Related Documents

- [Cache Eviction Analysis](thoughts/shared/research/2026-01-03-offline-cache-eviction-analysis.md)
- [Original PWA Research](thoughts/shared/research/2025-12-28-offline-pwa-capabilities.md)
