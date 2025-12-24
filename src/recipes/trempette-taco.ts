import { Recipe } from '@/types/recipe';

export const trempetteTaco: Recipe = {
  id: 'trempette-taco',
  title: 'Trempette Taco',
  description: 'Excellent trempette pour le Superbowl ou un pot-luck',
  categories: ['Trempettes'],
  prepTime: 10,
  cookTime: 0,
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    '½ paquet de fromage à la crème',
    '1 ½ c. à soupe de crème sure',
    '½ paquet d\'assaisonnement pour tacos',
    '2 oignons verts, hachés',
    '½ pot de salsa Con queso Tostitos',
    '½ pot de salsa',
    '1 sac de chips tortilla',
    'Zeste de lime'
  ],
  instructions: [
    'Mélanger les 3 premiers ingrédients jusqu\'à consistance onctueuse.',
    'Napper de salsa, de salsa Con queso chaude et d\'oignon vert.',
    'Servir immédiatement.'
  ],
  tags: ['tacos', 'trempette', 'superbowl'],
  slug: 'trempette-taco'
};
