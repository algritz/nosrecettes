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
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/salade-de-brocoli-et-chou-fleur',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/salade-de-brocoli-et-chou-fleur',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/salade-de-brocoli-et-chou-fleur'
    }
  ],
  source: 'David Cloutier',
  slug: 'salade-de-brocoli-et-chou-fleur'
};
