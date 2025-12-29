import { Recipe } from '@/types/recipe';

export const barresCaramelAuSMore: Recipe = {
  id: 'barres-caramel-au-s-more',
  title: 'Barres caramel au s\'more',
  description: 'Une recette de barres gourmandes avec caramel, chocolat, guimauves et biscuits Graham, à réfrigérer avant de servir.',
  categories: ['Pâtisseries et desserts'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 10, max: 10 },
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    '1 boîte de biscuit Graham',
    '1 tasse de beurre',
    '1¼ tasse de cassonade',
    '12 onces de chocolat en chipits',
    '2 tasses de mini-guimauves',
    'Petits bonbons à gâteau de Noël (facultatif)'
  ],
  instructions: [
    'Mettre de papier d\'aluminium sur une plaque à biscuit et graisser le papier d\'aluminium.',
    'Mettre les biscuits Graham en rangée sur la feuille de papier d\'aluminium afin de couvrir le fond. Couper des biscuits en deux au besoin afin de couvrir tout le fond.',
    'Dans une casserole, faire fondre le beurre à feu doux.',
    'Une fois fondu, ajouter la cassonade et brasser. Continuer à remuer jusqu\'à l\'ébullition puis faire bouillir pendant 3 minutes.',
    'Verser le caramel sur les biscuits Graham, bien étendre et cuire au four pendant 5 minutes.',
    'Sortir du four et déposer rapidement les chiptis de chocolat puis couvrir avec une feuille de papier d\'aluminium pour que la chaleur fasse fondre le chocolat.',
    'Après 3 minutes, enlever la feuille d\'aluminium du dessus et étendre les chipits de chocolat qui ont fondu.',
    'Saupoudrer de guimauves et de petits bonbons.',
    'Réfrigérer 2-3 heures.',
    'Une fois durcie, casser en morceaux et servir.'
  ],
  tags: ['caramel', 'chocolat', 'guimauve'],
  notes: 'Peut se congeler.',
  slug: 'barres-caramel-au-s-more'
};
