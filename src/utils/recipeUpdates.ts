import { getRecipeVersion, updateRecipes, openRecipeDB } from '@/utils/recipeDb'
import { toast } from 'sonner'
import { fetchRecipes } from '@/utils/recipeCoordinator'

export async function checkForRecipeUpdates(): Promise<boolean> {
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

      // Update in background
      await updateRecipes(serverData.recipes, serverData.version)

      // Calculate changes
      const db = await openRecipeDB()
      const currentCount = await db.count('recipes')
      const added = serverData.count - currentCount

      // Notify user
      toast.success('Mise à jour des recettes', {
        description: `${Math.abs(added)} ${added > 0 ? 'nouvelles' : 'modifiées'} recettes`,
      })

      return true
    }

    return false
  } catch (error) {
    console.error('Update check failed:', error)
    return false
  }
}
