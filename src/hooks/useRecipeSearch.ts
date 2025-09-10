import { useState, useMemo } from 'react';
import { Recipe } from '@/types/recipe';

export const useRecipeSearch = (recipes: Recipe[]) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = useMemo(() => {
    return Array.from(new Set(recipes.map(recipe => recipe.category)));
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

      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(recipe.category);

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