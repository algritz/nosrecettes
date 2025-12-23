import { Recipe } from '@/types/recipe';

export const sauceBlancheAKebab: Recipe = {
  id: 'sauce-blanche-a-kebab',
  title: 'Sauce blanche à kebab',
  description: 'Sauce blanche à kebab',
  categories: ['Sauces'],
  prepTime: 15,
  cookTime: 0,
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    '1 yaourt bulgare',
    '1 cuillère à soupe de mayonnaise',
    '1 cuillère à soupe de jus de citron',
    '1 pincée de sel',
    '1 pincée de poivre',
    '1 pincée de piment',
    '1 gousse d\'ail pilée',
    '1 cuillère à soupe de ciboulette ou de persil',
    'un peu de menthe hachée',
    '1 cuillère à café de cumin',
    '1 cuillère à café de coriandre'
  ],
  instructions: [
    'Mélanger le tout et laisser au frais avant utilisation'
  ],
  tags: ['sauce', 'frais', 'rapide'],
  marinatingTime: 120,
  notes: 'Préparation de 15 minutes, marinade minimum 2 heures, maximum une nuit. Source: https://les-recettes-de-pates.blogspot.com/2008/01/sauce-blanche-kebab.html',
  slug: 'sauce-blanche-a-kebab'
};
