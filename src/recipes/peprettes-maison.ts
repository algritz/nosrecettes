import { Recipe } from '@/types/recipe';

export const peprettesMaison: Recipe = {
  id: 'peprettes-maison',
  title: 'Péprettes maison',
  description: 'Tout mélanger les ingrédients et laisser mariner 24h. Faire les péprettes avec le pistolet à saucisse en les déposant directement sur les gilles du fumoirs. Faire fumer, jusqu\'à ce que le centre atteigne 152°C, environ 3h. Laisser refroidir et emballer sous vide.',
  categories: ['Fumoir'],
  prepTime: 20,
  cookTime: 180,
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    '2 lbs de bœuf haché',
    '1 lbs de porc haché',
    '1 c. à soupe de Sri Racha',
    '1 c. à soupe de poudre d\'ail',
    '1 c. à soupe d\'épice à steak (#avache)',
    '1 c. à soupe de poivre moulu',
    '1 c. à soupe de sel'
  ],
  instructions: [
    'Tout mélanger les ingrédients et laisser mariner 24h.',
    'Faire les péprettes avec le pistolet à saucisse en les déposant directement sur les gilles du fumoirs.',
    'Faire fumer, jusqu\'à ce que le centre atteigne 152°C, environ 3h.',
    'Laisser refroidir et emballer sous vide.'
  ],
  tags: ['fumoir', 'saucisse', 'marinade'],
  slug: 'peprettes-maison'
};
