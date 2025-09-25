import { useState, useEffect, useMemo, useCallback } from 'react';
import { Recipe } from '@/types/recipe';
import { getAllCategoriesFromRecipes, recipeMatchesCategories } from '@/utils/recipeUtils';

interface UseInfiniteRecipesProps {
  recipes: Recipe[];
  batchSize?: number;
}

export const useInfiniteRecipes = ({ recipes, batchSize = 10 }: UseInfiniteRecipesProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [displayedCount, setDisplayedCount] = useState(batchSize);
  const [isLoading, setIsLoading] = useState(false);

  const categories = useMemo(() => {
    return getAllCategoriesFromRecipes(recipes);
  }, [recipes]);

  // Filter recipes based on search and categories
  const filteredRecipes = useMemo(() => {
    return recipes.filter(recipe => {
      const matchesSearch = searchTerm === '' || 
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.ingredients.some(ingredient => {
          if (typeof ingredient === 'string') {
            return ingredient.toLowerCase().includes(searchTerm.toLowerCase());
          }
          // Handle sectioned ingredients
          return ingredient.items?.some(item => 
            item.toLowerCase().includes(searchTerm.toLowerCase())
          );
        }) ||
        recipe.tags.some(tag => 
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCategory = recipeMatchesCategories(recipe, selectedCategories);

      return matchesSearch && matchesCategory;
    });
  }, [recipes, searchTerm, selectedCategories]);

  // Get the recipes to display (limited by displayedCount)
  const displayedRecipes = useMemo(() => {
    return filteredRecipes.slice(0, displayedCount);
  }, [filteredRecipes, displayedCount]);

  // Check if there are more recipes to load
  const hasMore = displayedCount < filteredRecipes.length;

  // Load more recipes
  const loadMore = useCallback(() => {
    if (hasMore && !isLoading) {
      setIsLoading(true);
      // Simulate loading delay for better UX
      setTimeout(() => {
        setDisplayedCount(prev => Math.min(prev + batchSize, filteredRecipes.length));
        setIsLoading(false);
      }, 300);
    }
  }, [hasMore, isLoading, batchSize, filteredRecipes.length]);

  // Reset displayed count when filters change
  useEffect(() => {
    setDisplayedCount(batchSize);
  }, [searchTerm, selectedCategories, batchSize]);

  const clearFilters = useCallback(() => {
    setSearchTerm('');
    setSelectedCategories([]);
  }, []);

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
    displayedCount: displayedRecipes.length
  };
};