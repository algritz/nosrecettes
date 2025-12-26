import { Recipe } from '@/types/recipe';

export const barreBiscuitAuBonbonDHalloween: Recipe = {
  id: 'barre-biscuit-au-bonbon-d-halloween',
  title: 'Barre-biscuit au bonbon d\'Halloween',
  description: 'Une recette de biscuits aux bonbons d\'Halloween, croustillants et colorés, parfaits pour la fête.',
  categories: ['Pâtisseries et desserts'],
  prepTime: 20,
  cookTime: 50,
  servings: 20,
  difficulty: 'Facile',
  ingredients: [
    '1 tasse de sucre blanc',
    '1 tasse de cassonade',
    '1 tasse de beurre, fondu',
    '2 oeufs',
    '1 cuillère à soupe de vanille',
    '½ cuillère à café de sel',
    '2 tasses de farine tout usage',
    '2 tasses de bonbons assortis, hachés (ex: Smarties, M & M\'s, Kit Kat, Mars, Mr Big, etc.)'
  ],
  instructions: [
    'Préchauffer le four à 350 °F / 175 °C.',
    'Couper les bonbons d’Halloween en petits morceaux et mettre de côté.',
    'Dans un grand bol, mélanger le sucre, la cassonade et brasser.',
    'Ajouter le beurre fondu, fouetter jusqu\'à ce que le mélange devienne homogène.',
    'Ajouter les œufs et la vanille, puis mélanger.',
    'Ajouter le sel et la farine, puis brasser pour que le tout soit homogène.',
    'Ajouter les bonbons hachés et bien mélanger.',
    'Verser dans un moule 9 x 9 bien graissé.',
    'Cuire au four pendant 45-50 minutes.',
    'Laisser refroidir, puis couper en carrés.'
  ],
  tags: ['halloween', 'bonbons', 'gâteaux'],
  slug: 'barre-biscuit-au-bonbon-d-halloween'
};
