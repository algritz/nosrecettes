import { Recipe } from '@/types/recipe';

export const cookieMonsterDeLaBelleSoeur: Recipe = {
  id: 'cookie-monster-de-la-belle-soeur',
  title: 'Cookie monster de la belle-soeur',
  description: 'Une recette de cookies simple et gourmande avec beurre d\'arachides, gruau et chocolat, cuits à 325°F pendant 11 à 12 minutes.',
  categories: ['Pâtisseries et desserts'],
  prepTime: 15,
  cookTime: 12,
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    '6 oeufs',
    '2 tasses de sucre',
    '2 tasses de cassonade',
    '1/2 c.. à soupe de poudre à pâte',
    '1/2 c. à soupe de vanille',
    '3 tasses de beurre d\'arachides crémeux',
    '9 tasses de gruau',
    '1 tasse de chipits de chocolat',
    '1 tasse et + de smartises'
  ],
  instructions: [
    'Mélanger tous les ingrédients selon l\'ordre inscrit ci-haut.',
    'Cuire à 325°F de 11 à 12 minutes.'
  ],
  tags: ['cookies', 'pâtisserie', 'chocolat'],
  notes: 'Source: Edith Cloutier',
  slug: 'cookie-monster-de-la-belle-soeur'
};
