import { Recipe } from '@/types/recipe';

export const carottesALaMenthe: Recipe = {
  id: 'carottes-a-la-menthe',
  title: 'Carottes à la menthe',
  description: 'Une recette simple de carottes infusées à la menthe dans un bouillon de poulet, servies chaudes.',
  categories: ['Légumes', 'Soupes'],
  prepTime: 10,
  cookTime: 15,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '6 carottes pelées et coupées en bâtonnets',
    '2 c. soupe de beurre',
    '1 1/2 tasse de bouillon de poulet chaud',
    '3 feuilles de menthe fraîche hachée grossièrement',
    'poivre'
  ],
  instructions: [
    'Une fois le bouillon chaud ajouter la menthe.',
    'Infuser une minute.',
    'Ajouter le beurre, le poivre et les carottes en bâtonnets.',
    'Faire cuire le tout 10 à 15 minutes selon la grosseur des carottes.',
    'Servir.'
  ],
  tags: ['menthe', 'bouillon', 'simple'],
  slug: 'carottes-a-la-menthe'
};
