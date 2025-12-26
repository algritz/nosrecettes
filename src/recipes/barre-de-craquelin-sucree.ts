import { Recipe } from '@/types/recipe';

export const barreDeCraquelinSucree: Recipe = {
  id: 'barre-de-craquelin-sucree',
  title: 'Barre de craquelin sucrée',
  description: 'Une recette de barres croquantes et chocolatées avec pacanes, facile à préparer et à congeler.',
  categories: ['Pâtisseries et desserts'],
  prepTime: 20,
  cookTime: 10,
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    '1 paquet de biscuit soda, environ 40',
    '1 tasse de beurre',
    '1 tasse + 2 c. à soupe de cassonade',
    '1 sac de chipits de chocolat mi-sucré',
    '1/2 à 3/4 tasse de pacanes grillées hachées'
  ],
  instructions: [
    'Préchauffer le four à 350 degrés.',
    'Mettre de papier d\'aluminium sur une plaque à biscuit et graisser le papier d\'aluminium.',
    'Mettre les biscuits soda en rangée sur la feuille de papier d\'aluminium afin de couvrir le fond. Couper des biscuits en deux au besoin afin de tout couvrir le fond.',
    'Dans une casserole, faire fondre le beurre à feu doux.',
    'Une fois fondu, ajouter la cassonade et brasser.',
    'Continuer à remuer jusqu\'à l\'ébullition puis faire bouillir pendant 3 minutes.',
    'Verser le caramel sur les biscuits soda, bien étendre et cuire au four pendant 5 minutes.',
    'Sortir du four et déposer rapidement les chipits de chocolat puis couvrir avec une feuille de papier d\'aluminium pour que la chaleur fasse fondre le chocolat.',
    'Après 3 minutes, enlever la feuille d\'aluminium du dessus et étendre les chipits de chocolat qui ont fondu.',
    'Saupoudrer de pacanes et réfrigérer.',
    'Une fois durcie, casser en morceaux et servir.'
  ],
  tags: ['chocolat', 'pacanes', 'croquant'],
  notes: 'Peut se congeler',
  slug: 'barre-de-craquelin-sucree'
};
