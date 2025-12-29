import { useState, useMemo } from 'react'
import { Recipe, IngredientSection, InstructionSection } from '@/types/recipe'
import {
  getAllCategoriesFromRecipes,
  recipeMatchesCategories,
} from '@/utils/recipeUtils'
import { normalizeForSearch } from '@/utils/textUtils'

export const useRecipeSearch = (recipes: Recipe[]) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const categories = useMemo(
    () => getAllCategoriesFromRecipes(recipes),
    [recipes],
  )

  // Helper function to extract text from ingredients (handles both formats)
  const getIngredientsText = (
    ingredients: string[] | IngredientSection[],
  ): string => {
    if (!ingredients || ingredients.length === 0) return ''

    // Check if sectioned
    if (typeof ingredients[0] === 'object' && 'items' in ingredients[0]) {
      const sections = ingredients as IngredientSection[]
      return sections.flatMap((section) => section.items).join(' ')
    }
    return (ingredients as string[]).join(' ')
  }

  // Helper function to extract text from instructions (handles both formats)
  const getInstructionsText = (
    instructions: string[] | InstructionSection[],
  ): string => {
    if (!instructions || instructions.length === 0) return ''

    // Check if sectioned
    if (typeof instructions[0] === 'object' && 'steps' in instructions[0]) {
      const sections = instructions as InstructionSection[]
      return sections.flatMap((section) => section.steps).join(' ')
    }
    return (instructions as string[]).join(' ')
  }

  const filteredRecipes = useMemo(
    () =>
      recipes.filter((recipe) => {
        // Normalize search term once
        const normalizedSearchTerm = normalizeForSearch(searchTerm)

        const matchesSearch =
          searchTerm === '' ||
          normalizeForSearch(recipe.title).includes(normalizedSearchTerm) ||
          normalizeForSearch(recipe.description).includes(normalizedSearchTerm) ||
          normalizeForSearch(getIngredientsText(recipe.ingredients)).includes(normalizedSearchTerm) ||
          normalizeForSearch(getInstructionsText(recipe.instructions)).includes(normalizedSearchTerm) ||
          recipe.tags.some((tag) =>
            normalizeForSearch(tag).includes(normalizedSearchTerm),
          )

        const matchesCategory = recipeMatchesCategories(
          recipe,
          selectedCategories,
        )

        return matchesSearch && matchesCategory
      }),
    [recipes, searchTerm, selectedCategories],
  )

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCategories([])
  }

  return {
    searchTerm,
    setSearchTerm,
    selectedCategories,
    setSelectedCategories,
    categories,
    filteredRecipes,
    clearFilters,
  }
}
