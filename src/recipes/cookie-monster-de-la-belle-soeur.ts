import { Recipe } from '@/types/recipe';

export const cookieMonsterDeLaBelleSoeur: Recipe = {
  id: 'cookie-monster-de-la-belle-soeur',
  title: 'Cookie monster de la belle-soeur',
  description: 'Une recette de cookies simple et gourmande avec beurre d\'arachides, gruau et chocolat, cuits à 325°F pendant 11 à 12 minutes.',
  categories: ['Pâtisseries et desserts'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 15, max: 15 },
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
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/cookie-monster-de-la-belle-soeur',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/cookie-monster-de-la-belle-soeur',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/cookie-monster-de-la-belle-soeur'
    }
  ],
  source: 'David Cloutier',
  notes: 'Source: Edith Cloutier',
  slug: 'cookie-monster-de-la-belle-soeur'
};
