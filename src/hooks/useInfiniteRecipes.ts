import { useState, useEffect, useMemo, useCallback } from 'react'
import { Recipe, IngredientSection, InstructionSection } from '@/types/recipe'
import {
  getAllCategoriesFromRecipes,
  recipeMatchesCategories,
} from '@/utils/recipeUtils'
import { normalizeForSearch } from '@/utils/textUtils'

interface UseInfiniteRecipesProps {
  recipes: Recipe[]
  batchSize?: number
}

export const useInfiniteRecipes = ({
  recipes,
  batchSize = 10,
}: UseInfiniteRecipesProps): {
  searchTerm: string
  setSearchTerm: (term: string) => void
  selectedCategories: string[]
  setSelectedCategories: (categories: string[]) => void
  displayedCount: number
  totalCount: number
  isLoading: boolean
  categories: string[]
  filteredRecipes: Recipe[]
  displayedRecipes: Recipe[]
  hasMore: boolean
  loadMore: () => void
  clearFilters: () => void
} => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [displayedCount, setDisplayedCount] = useState(batchSize)
  const [isLoading, setIsLoading] = useState(false)

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

  // Filter recipes based on search and categories
  const filteredRecipes = useMemo(
    () =>
      recipes.filter((recipe) => {
        // Normalize search term once
        const normalizedSearchTerm = normalizeForSearch(searchTerm)

        const matchesSearch =
          searchTerm === '' ||
          normalizeForSearch(recipe.title).includes(normalizedSearchTerm) ||
          normalizeForSearch(recipe.description).includes(
            normalizedSearchTerm,
          ) ||
          normalizeForSearch(getIngredientsText(recipe.ingredients)).includes(
            normalizedSearchTerm,
          ) ||
          normalizeForSearch(
            getInstructionsText(recipe.instructions),
          ).includes(normalizedSearchTerm) ||
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

  // Get the recipes to display (limited by displayedCount)
  const displayedRecipes = useMemo(
    () => filteredRecipes.slice(0, displayedCount),
    [filteredRecipes, displayedCount],
  )

  // Check if there are more recipes to load
  const hasMore = displayedCount < filteredRecipes.length

  // Load more recipes
  const loadMore = useCallback(() => {
    if (hasMore && !isLoading) {
      setIsLoading(true)
      // Simulate loading delay for better UX
      setTimeout(() => {
        setDisplayedCount((prev) =>
          Math.min(prev + batchSize, filteredRecipes.length),
        )
        setIsLoading(false)
      }, 300)
    }
  }, [hasMore, isLoading, batchSize, filteredRecipes.length])

  // Reset displayed count when filters change
  useEffect(() => {
    setDisplayedCount(batchSize)
  }, [searchTerm, selectedCategories, batchSize])

  const clearFilters = useCallback(() => {
    setSearchTerm('')
    setSelectedCategories([])
  }, [])

  return {
    searchTerm,
    setSearchTerm,
    selectedCategories,
    setSelectedCategories,
    categories,
    displayedRecipes,
    filteredRecipes,
    hasMore,
    isLoading,
    loadMore,
    clearFilters,
    totalCount: filteredRecipes.length,
    displayedCount: displayedRecipes.length,
  }
}
