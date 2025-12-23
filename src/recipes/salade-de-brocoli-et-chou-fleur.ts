import { Recipe } from '@/types/recipe';

export const saladeDeBrocoliEtChouFleur: Recipe = {
  id: 'salade-de-brocoli-et-chou-fleur',
  title: 'Salade de brocoli et chou-fleur',
  description: 'Ma salade préférée. Salade de brocoli et chou-fleur',
  categories: ['Salades'],
  prepTime: 20,
  cookTime: 10,
  servings: 10,
  difficulty: 'Facile',
  ingredients: [
    '1 tête de brocoli coupée',
    '1 tête de chou-fleur coupée',
    '1/2 lb de bacon cuit',
    '1 tasse de fromage cheddar râpé',
    '1 tasse de mayonnaise',
    '1 tasse de crème sure',
    '1/4 tasse de sucre',
    '1/2 cuillère à thé de sel',
    'Poivre au goût'
  ],
  instructions: [
    'Dans un bol à salade, mélangez le brocoli, le chou-fleur, le bacon et le fromage cheddar.',
    'Dans un petit bol, combinez le reste des ingrédients et mélangez bien.',
    'Incorporer la sauce dans la salade et bien mélanger.',
    'Laissez reposer au réfrigérateur avant de servir.'
  ],
  tags: ['salade', 'fromage', 'bacon'],
  slug: 'salade-de-brocoli-et-chou-fleur'
};
