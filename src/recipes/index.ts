import { Recipe } from '@/types/recipe'

// ============================================================================
// MIGRATION NOTE: Recipes are now loaded from IndexedDB at runtime
// ============================================================================
// This file used to bundle all recipes into JavaScript (import.meta.glob).
// Now recipes are loaded from /recipes.json and stored in IndexedDB.
//
// Components should use:
// - useRecipes() hook for recipe lists (src/hooks/useRecipes.ts)
// - getRecipeBySlug() from src/utils/recipeDb.ts for individual recipes
//
// This export is kept for backward compatibility during migration.
// ============================================================================

// Export empty array - recipes loaded from IndexedDB at runtime
export const recipes: Recipe[] = []

// Legacy helper functions - kept for backward compatibility
// These will return empty results since recipes array is now empty
// Components should migrate to IndexedDB utilities in src/utils/recipeDb.ts

export const getRecipeBySlug = (slug: string): Recipe | undefined =>
  recipes.find((recipe) => recipe.slug === slug)

export const getRecipesByCategory = (category: string): Recipe[] =>
  recipes.filter((recipe) => {
    if (recipe.categories && recipe.categories.length > 0) {
      return recipe.categories.includes(category)
    }
    return recipe.category === category
  })

export const getCategories = (): string[] => {
  const allCategories = new Set<string>()

  recipes.forEach((recipe) => {
    if (recipe.categories && recipe.categories.length > 0) {
      recipe.categories.forEach((cat) => allCategories.add(cat))
    } else if (recipe.category) {
      allCategories.add(recipe.category)
    }
  })

  return Array.from(allCategories).sort()
}
