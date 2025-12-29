import { Recipe } from '@/types/recipe'

// This file is auto-generated during build
// All recipe files are automatically imported and exported

// Dynamic import of all recipe files
const recipeModules = import.meta.glob('./*.ts', { eager: true })

export const recipes: Recipe[] = []

// Process all imported modules
Object.entries(recipeModules).forEach(([path, module]) => {
  // Skip the index file itself
  if (path === './index.ts') return

  const moduleExports = module as Record<string, unknown>

  // Find the recipe export (should be the only Recipe object)
  Object.values(moduleExports).forEach((exportedValue) => {
    if (
      exportedValue &&
      typeof exportedValue === 'object' &&
      'id' in exportedValue &&
      'title' in exportedValue
    ) {
      recipes.push(exportedValue as Recipe)
    }
  })
})

// Sort recipes by title for consistent ordering
recipes.sort((a, b) => a.title.localeCompare(b.title))

// Helper function to get a recipe by slug
export const getRecipeBySlug = (slug: string): Recipe | undefined =>
  recipes.find((recipe) => recipe.slug === slug)

// Helper function to get recipes by category (with backward compatibility)
export const getRecipesByCategory = (category: string): Recipe[] =>
  recipes.filter((recipe) => {
    // Handle both new categories array and old category field
    if (recipe.categories && recipe.categories.length > 0) {
      return recipe.categories.includes(category)
    }
    return recipe.category === category
  })

// Helper function to get all categories
export const getCategories = (): string[] => {
  const allCategories = new Set<string>()

  recipes.forEach((recipe) => {
    // Handle both new categories array and old category field
    if (recipe.categories && recipe.categories.length > 0) {
      recipe.categories.forEach((cat) => allCategories.add(cat))
    } else if (recipe.category) {
      allCategories.add(recipe.category)
    }
  })

  return Array.from(allCategories).sort()
}
