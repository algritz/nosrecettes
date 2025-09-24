import { Recipe } from '@/types/recipe';

// Get categories from a recipe with backward compatibility
export const getRecipeCategories = (recipe: Recipe): string[] => {
  // If the recipe has the new categories field, use it
  if (recipe.categories && recipe.categories.length > 0) {
    return recipe.categories;
  }
  
  // Fall back to the old category field for backward compatibility
  if (recipe.category) {
    return [recipe.category];
  }
  
  // Default fallback
  return [];
};

// Get the primary category (first one) for display purposes
export const getPrimaryCategory = (recipe: Recipe): string => {
  const categories = getRecipeCategories(recipe);
  return categories[0] || 'Non catégorisé';
};

// Check if a recipe matches any of the selected categories
export const recipeMatchesCategories = (recipe: Recipe, selectedCategories: string[]): boolean => {
  if (selectedCategories.length === 0) return true;
  
  const recipeCategories = getRecipeCategories(recipe);
  return selectedCategories.some(category => recipeCategories.includes(category));
};

// Get all unique categories from a list of recipes
export const getAllCategoriesFromRecipes = (recipes: Recipe[]): string[] => {
  const allCategories = new Set<string>();
  
  recipes.forEach(recipe => {
    const categories = getRecipeCategories(recipe);
    categories.forEach(category => allCategories.add(category));
  });
  
  return Array.from(allCategories).sort();
};