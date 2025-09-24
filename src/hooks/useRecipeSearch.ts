import { useState, useMemo } from 'react';
import { Recipe } from '@/types/recipe';
import { getAllCategoriesFromRecipes, recipeMatchesCategories } from '@/utils/recipeUtils';

export const useRecipeSearch = (recipes: Recipe[]) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = useMemo(() => {
    return getAllCategoriesFromRecipes(recipes);
  }, [recipes]);

  const filteredRecipes = useMemo(() => {
    return recipes.filter(recipe => {
      const matchesSearch = searchTerm === '' || 
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.ingredients.some(ingredient => 
          ingredient.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        recipe.tags.some(tag => 
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCategory = recipeMatchesCategories(recipe, selectedCategories);

      return matchesSearch && matchesCategory;
    });
  }, [recipes, searchTerm, selectedCategories]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategories([]);
  };

  return {
    searchTerm,
    setSearchTerm,
    selectedCategories,
    setSelectedCategories,
    categories,
    filteredRecipes,
    clearFilters
  };
};