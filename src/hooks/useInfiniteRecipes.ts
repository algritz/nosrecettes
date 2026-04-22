import { useState, useEffect, useMemo, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Recipe, IngredientSection, InstructionSection } from '@/types/recipe'
import {
  getAllCategoriesFromRecipes,
  recipeMatchesCategories,
} from '@/utils/recipeUtils'
import { normalizeForSearch } from '@/utils/textUtils'

export type SortOption =
  | 'alphabetical'
  | 'date-newest'
  | 'date-oldest'
  | 'has-images'
  | 'no-images'
  | 'category'

const VALID_SORT_OPTIONS: SortOption[] = [
  'alphabetical',
  'date-newest',
  'date-oldest',
  'has-images',
  'no-images',
  'category',
]

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
  sortOption: SortOption
  setSortOption: (sort: SortOption) => void
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
  const [searchParams, setSearchParams] = useSearchParams()
  const [displayedCount, setDisplayedCount] = useState(batchSize)
  const [isLoading, setIsLoading] = useState(false)

  const searchTerm = searchParams.get('q') ?? ''
  const selectedCategories = useMemo(() => {
    const raw = searchParams.get('cats')
    return raw ? raw.split(',').filter(Boolean) : []
  }, [searchParams])
  const sortParam = searchParams.get('sort') ?? 'alphabetical'
  const sortOption: SortOption = VALID_SORT_OPTIONS.includes(sortParam as SortOption)
    ? (sortParam as SortOption)
    : 'alphabetical'

  const setSearchTerm = useCallback((term: string) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev)
      if (term) {
        next.set('q', term)
      } else {
        next.delete('q')
      }
      return next
    }, { replace: true })
  }, [setSearchParams])

  const setSelectedCategories = useCallback((categories: string[]) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev)
      if (categories.length > 0) {
        next.set('cats', categories.join(','))
      } else {
        next.delete('cats')
      }
      return next
    }, { replace: true })
  }, [setSearchParams])

  const setSortOption = useCallback((sort: SortOption) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev)
      if (sort !== 'alphabetical') {
        next.set('sort', sort)
      } else {
        next.delete('sort')
      }
      return next
    }, { replace: true })
  }, [setSearchParams])

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

  // Helper function to sort recipes
  const sortRecipes = useCallback(
    (recipesToSort: Recipe[]): Recipe[] => {
      const sorted = [...recipesToSort]

      switch (sortOption) {
        case 'alphabetical':
          return sorted.sort((a, b) => a.title.localeCompare(b.title, 'fr-CA'))

        case 'date-newest':
        case 'date-oldest': {
          // Sort by numeric ID (timestamp) if available, otherwise by title
          const direction = sortOption === 'date-newest' ? -1 : 1
          return sorted.sort((a, b) => {
            const aId = parseInt(a.id)
            const bId = parseInt(b.id)
            if (!isNaN(aId) && !isNaN(bId)) {
              return (aId - bId) * direction
            }
            // Fallback to alphabetical if IDs aren't numeric
            return a.title.localeCompare(b.title, 'fr-CA') * direction
          })
        }

        case 'has-images':
          return sorted.sort((a, b) => {
            const aHasImage = !!(a.images?.length || a.image)
            const bHasImage = !!(b.images?.length || b.image)
            if (aHasImage === bHasImage) {
              return a.title.localeCompare(b.title, 'fr-CA')
            }
            return aHasImage ? -1 : 1
          })

        case 'no-images':
          return sorted.sort((a, b) => {
            const aHasImage = !!(a.images?.length || a.image)
            const bHasImage = !!(b.images?.length || b.image)
            if (aHasImage === bHasImage) {
              return a.title.localeCompare(b.title, 'fr-CA')
            }
            return aHasImage ? 1 : -1
          })

        case 'category':
          return sorted.sort((a, b) => {
            const aCategory = a.categories[0] || ''
            const bCategory = b.categories[0] || ''
            if (aCategory === bCategory) {
              return a.title.localeCompare(b.title, 'fr-CA')
            }
            return aCategory.localeCompare(bCategory, 'fr-CA')
          })

        default:
          return sorted
      }
    },
    [sortOption],
  )

  // Filter recipes based on search and categories
  const filteredRecipes = useMemo(
    () => {
      const filtered = recipes.filter((recipe) => {
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
      })

      return sortRecipes(filtered)
    },
    [recipes, searchTerm, selectedCategories, sortRecipes],
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

  const selectedCategoriesKey = selectedCategories.join(',')

  // Reset displayed count when filters or sort changes
  useEffect(() => {
    setDisplayedCount(batchSize)
  }, [searchTerm, selectedCategoriesKey, sortOption, batchSize])

  const clearFilters = useCallback(() => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev)
      next.delete('q')
      next.delete('cats')
      return next
    }, { replace: true })
  }, [setSearchParams])

  return {
    searchTerm,
    setSearchTerm,
    selectedCategories,
    setSelectedCategories,
    sortOption,
    setSortOption,
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
