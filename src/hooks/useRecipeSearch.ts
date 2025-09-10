import { useState, useMemo } from 'react';
import { Recipe } from '@/types/recipe';

export const useRecipeSearch = (recipes: Recipe[]) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

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
      const matchesDifficulty = selectedDifficulty === 'all' || recipe.difficulty === selectedDifficulty;

      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [recipes, searchTerm, selectedCategories, selectedDifficulty]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategories([]);
    setSelectedDifficulty('all');
  };

  return {
    searchTerm,
    setSearchTerm,
    selectedCategories,
    setSelectedCategories,
    selectedDifficulty,
    setSelectedDifficulty,
    categories,
    filteredRecipes,
    clearFilters
  };
};