import { Recipe } from '@/types/recipe';

export const barresNanaimo: Recipe = {
  id: 'barres-nanaimo',
  title: 'Barres Nanaïmo',
  description: 'Une recette de barres chocolatées et vanillées, décorées pour ressembler à des dominos, avec une base croustillante, une garniture à la vanille, et un glaçage au chocolat.',
  categories: ['Pâtisseries et desserts'],
  prepTime: 30,
  cookTime: 0,
  servings: 32,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Base',
      items: [
      '125 ml (1/2 tasse) de beurre non salé',
      '110 g (4 oz) de chocolat mi-sucré, haché',
      '60 ml (1/4 tasse) de miel',
      '500 ml (2 tasses) de chapelure de biscuits Graham'
      ]
    },
    {
      title: 'Garniture',
      items: [
      '125 ml (1/2 tasse) de lait',
      '150 g de pouding à la vanille Jell-O (1 1/2 sachet)',
      '875 ml (3 1/2 tasses) de sucre à glacer',
      '60 ml (1/4 tasse) de beurre non salé, fondu'
      ]
    },
    {
      title: 'Glaçage',
      items: [
      '110 g (4 oz) de chocolat mi-sucré, haché',
      '60 ml (1/4 tasse) de beurre non salé',
      '1 petit tube de glaçage blanc du commerce'
      ]
    }
  ],
  instructions: [
    'Huiler légèrement un moule carré de 20 cm (8 po) puis le tapisser de pellicule de plastique.',
    'Base: Dans un bol allant au four à micro-ondes, fondre le beurre et le chocolat avec le miel. Incorporer la chapelure en remuant à la cuillère de bois jusqu\'à ce que le mélange soit homogène. Répartir le mélange dans le moule en pressant légèrement. Réfrigérer environ 15 minutes.',
    'Garniture: Dans un bol, mélanger le lait, le pouding, le sucre et le beurre au batteur électrique jusqu\'à ce que le mélange soit homogène. Répartir la garniture sur la base et bien lisser. Réserver à la température ambiante.',
    'Glaçage: Dans un bol allant au four à micro-ondes, fondre le chocolat et le beurre. Bien mélanger à l\'aide d\'un fouet. Étaler le glaçage sur la garniture. Réfrigérer environ 3 heures et démouler.',
    'Retirer la pellicule de plastique et couper en 32 morceaux rectangulaires de 5 cm x 2,5 cm (2 po x 1 po). Décorer de points de glaçage blanc pour imiter les dominos.'
  ],
  tags: ['chocolat', 'vanille', 'glaçage'],
  slug: 'barres-nanaimo'
};
