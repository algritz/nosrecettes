import { useState, useEffect } from 'react'
import { Recipe } from '@/types/recipe'
import {
  getAllRecipes,
  getRecipeVersion,
  populateRecipes,
  updateRecipes,
  isRecipeDBPopulated,
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

  useEffect(() => {
    loadRecipes().catch(console.error)
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      version: data.version,
    })
  }

  async function checkForUpdates() {
    try {
      const response = await fetch('/recipes.json', {
        cache: 'no-store', // Always check server
      })

      if (!response.ok) return

      const serverData = await response.json()
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
