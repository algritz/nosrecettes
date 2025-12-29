import { Recipe } from '@/types/recipe';

export const popsNutellaCoolWhip: Recipe = {
  id: 'pops-nutella-cool-whip',
  title: 'Pops Nutella Cool Whip',
  description: '',
  categories: ['Desserts'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 0, max: 0 },
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    '1 tasse de Cool Whip',
    '1/2 tasse de lait',
    '3 cuillères à soupe de Nutella'
  ],
  instructions: [
    'Mélanger le tout au blender',
    'Verser dans des moules congeler',
    '8h Savourer'
  ],
  tags: ['Nutella', 'cool whip', 'glace'],
  notes: 'La recette ne précise pas le nombre de portions ni la température de congélation, mais le temps de congélation est de 8 heures.',
  slug: 'pops-nutella-cool-whip'
};
