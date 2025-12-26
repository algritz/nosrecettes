import { Recipe } from '@/types/recipe';

export const rochesAuxBleuets: Recipe = {
  id: 'roches-aux-bleuets',
  title: 'Roches aux bleuets',
  description: 'Une recette de roches aux bleuets enrobés de chocolat, à réfrigérer pour durcissement.',
  categories: ['Végétarien', 'Desserts'],
  prepTime: 45,
  cookTime: 15,
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    '1 1/2 tasse de chocolat noir',
    '1/2 tasse de chocolat au lait',
    '2 tasses de bleuets',
    '2 plaques à biscuits',
    '2 feuilles de papier ciré'
  ],
  instructions: [
    'Combiner les 2 sortes de chocolat et les faire fondre dans un bain-marie.',
    'Mettre les feuilles de papier ciré sur les plaques à biscuits.',
    'Une fois le chocolat fondu, tremper les bleuets en paquet de 3-4 et mettre sur la plaque à biscuit.',
    'Réfrigérer 12 heure pour qu\'il durcissent.'
  ],
  tags: ['chocolat', 'bleuets', 'réfrigération'],
  notes: 'Ce garde environ 5 jours.',
  slug: 'roches-aux-bleuets'
};
