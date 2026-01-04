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
        recipeStore.createIndex('by-category', 'categories', {
          multiEntry: true,
        })
      }

      // Metadata object store
      if (!db.objectStoreNames.contains('metadata')) {
        db.createObjectStore('metadata', { keyPath: 'key' })
      }
    },
  })
}

// Get all recipes from IndexedDB
export async function getAllRecipes(): Promise<Recipe[]> {
  const db = await openRecipeDB()
  return db.getAll('recipes')
}

// Get recipe by slug
export async function getRecipeBySlug(
  slug: string,
): Promise<Recipe | undefined> {
  const db = await openRecipeDB()
  return db.getFromIndex('recipes', 'by-slug', slug)
}

// Get recipes by category
export async function getRecipesByCategory(
  category: string,
): Promise<Recipe[]> {
  const db = await openRecipeDB()
  return db.getAllFromIndex('recipes', 'by-category', category)
}

// Get current version
export async function getRecipeVersion(): Promise<string | null> {
  const db = await openRecipeDB()
  const meta = await db.get('metadata', 'recipeVersion')
  return (meta?.value as string) || null
}

// Save version
export async function saveRecipeVersion(version: string): Promise<void> {
  const db = await openRecipeDB()
  await db.put('metadata', {
    key: 'recipeVersion',
    value: version,
    lastUpdated: Date.now(),
  })
}

// Populate IndexedDB with recipes
export async function populateRecipes(
  recipes: Recipe[],
  version: string,
): Promise<void> {
  const db = await openRecipeDB()
  const tx = db.transaction(['recipes', 'metadata'], 'readwrite')

  // Clear existing recipes
  await tx.objectStore('recipes').clear()

  // Insert all recipes
  await Promise.all(
    recipes.map(async (recipe) => tx.objectStore('recipes').put(recipe)),
  )

  // Save version
  await tx.objectStore('metadata').put({
    key: 'recipeVersion',
    value: version,
    lastUpdated: Date.now(),
  })

  await tx.done
}

// Update recipes (smart merge)
export async function updateRecipes(
  serverRecipes: Recipe[],
  serverVersion: string,
): Promise<void> {
  const db = await openRecipeDB()

  // Create lookup of server recipes by ID
  const serverMap = new Map(serverRecipes.map((r) => [r.id, r]))

  // Get all local recipe IDs
  const localRecipes = await db.getAll('recipes')
  const localIds = new Set(localRecipes.map((r) => r.id))

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
    lastUpdated: Date.now(),
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
