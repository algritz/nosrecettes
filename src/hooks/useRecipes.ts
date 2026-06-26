import { useEffect, useState } from 'react'
import type { Recipe } from '@/types/recipe'
import { fetchRecipes } from '@/utils/recipeCoordinator'
import {
  getAllRecipes,
  getRecipeVersion,
  isRecipeDBPopulated,
  populateRecipes,
  updateRecipes,
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
    version: null,
  })

  // biome-ignore lint/correctness/useExhaustiveDependencies: loadRecipes is defined in hook scope
  useEffect(() => {
    // biome-ignore lint/suspicious/noConsole: intentional error logging
    loadRecipes().catch(console.error)
  }, [])

  async function loadRecipes(): Promise<void> {
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
          version,
        })

        // Background check for updates (if online and app is active)
        // This is non-blocking - recipes are already loaded from IndexedDB
        if (navigator.onLine) {
          // biome-ignore lint/suspicious/noConsole: intentional error logging
          checkForUpdates().catch(console.error)
        }
      } else {
        // First load - must fetch from network
        await fetchAndPopulate()
      }
    } catch (error) {
      setState({
        recipes: [],
        loading: false,
        error: error as Error,
        version: null,
      })
    }
  }

  async function fetchAndPopulate(): Promise<void> {
    const data = await fetchRecipes({
      reason: 'initial-load',
      onProgress: (loaded, total) => {
        // Optional: Could update state with progress percentage
        // For now, just log it
        if (total > 0) {
          const _percent = Math.round((loaded / total) * 100)
        }
      },
    })

    await populateRecipes(data.recipes, data.version)

    setState({
      recipes: data.recipes,
      loading: false,
      error: null,
      version: data.version,
    })
  }

  async function checkForUpdates(): Promise<void> {
    try {
      const serverData = await fetchRecipes({
        bustCache: true, // Force fresh fetch for update check
        reason: 'update-check',
      })

      const localVersion = await getRecipeVersion()

      if (serverData.version !== localVersion) {
        await updateRecipes(serverData.recipes, serverData.version)

        // Update state with new recipes
        setState((prev) => ({
          ...prev,
          recipes: serverData.recipes,
          version: serverData.version,
        }))

        // Notify user
        // TODO: Show toast notification
      }
    } catch (_error) {}
  }

  return state
}
