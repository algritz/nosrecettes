import { useState, useEffect } from 'react'
import { Recipe } from '@/types/recipe'
import {
  getAllRecipes,
  getRecipeVersion,
  populateRecipes,
  updateRecipes,
  isRecipeDBPopulated,
} from '@/utils/recipeDb'
import { fetchRecipes } from '@/utils/recipeCoordinator'

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

  useEffect(() => {
    loadRecipes().catch(console.error)
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          const percent = Math.round((loaded / total) * 100)
          console.log(`[useRecipes] Download progress: ${percent}%`)
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
        console.log(
          `Update available: ${localVersion} → ${serverData.version}`,
        )
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
    } catch (error) {
      console.error('Update check failed:', error)
    }
  }

  return state
}
