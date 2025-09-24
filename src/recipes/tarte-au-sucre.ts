import { Recipe } from '@/types/recipe';

export const tarteAuSucre: Recipe = {
  id: '3',
  title: 'Tarte au Sucre',
  description: 'Dessert québécois classique à base de sirop d\'érable et de crème.',
  categories: ['Desserts'], // Updated to use categories array
  prepTime: 20,
  cookTime: 35,
  servings: 8,
  difficulty: 'Facile',
  ingredients: [
    '1 pâte à tarte',
    '1 tasse de cassonade',
    '1/2 tasse de sirop d\'érable',
    '1/2 tasse de crème 35%',
    '2 œufs',
    '2 c. à soupe de farine',
    '1 c. à thé de vanille'
  ],
  instructions: [
    'Préchauffer le four à 350°F (175°C).',
    'Foncer une assiette à tarte avec la pâte.',
    'Mélanger tous les ingrédients de la garniture.',
    'Verser dans la croûte de tarte.',
    'Cuire 35-40 minutes jusqu\'à ce que le centre soit pris.',
    'Laisser refroidir avant de servir.'
  ],
  tags: ['dessert', 'érable', 'québécois', 'sucré'],
  image: '/images/tarte-au-sucre.jpg',
  slug: 'tarte-au-sucre'
};