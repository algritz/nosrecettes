import { Recipe } from '@/types/recipe';
import { poutineClassique } from './poutine-classique';
import { tourtiereLacSaintJean } from './tourtiere-lac-saint-jean';
import { tarteAuSucre } from './tarte-au-sucre';
import { marteaudethorRecipe } from './marteau-de-thor';

export const recipes: Recipe[] = [poutineClassique,
  tourtiereLacSaintJean,
  tarteAuSucre,
  marteaudethorRecipe];

// Helper function to get a recipe by slug
export const getRecipeBySlug = (slug: string): Recipe | undefined => {
  return recipes.find(recipe => recipe.slug === slug);
};

// Helper function to get recipes by category
export const getRecipesByCategory = (category: string): Recipe[] => {
  return recipes.filter(recipe => recipe.category === category);
};

// Helper function to get all categories
export const getCategories = (): string[] => {
  return Array.from(new Set(recipes.map(recipe => recipe.category)));
};