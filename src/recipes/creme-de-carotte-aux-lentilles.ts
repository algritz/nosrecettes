import { Recipe } from '@/types/recipe';

export const cremeDeCarotteAuxLentilles: Recipe = {
  id: 'creme-de-carotte-aux-lentilles',
  title: 'Crème de carotte aux lentilles',
  description: 'Une soupe crémeuse à base de carottes, lentilles, et bouillon de volaille, relevée d\'un jus d\'orange et d\'herbes fines.',
  categories: ['Soupes'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 30, max: 30 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '30 ml d\'huile d\'olive',
    '1 oignon haché',
    '3 carottes coupées en dés',
    '60 ml (1/4 de tasse) de lentilles rincées',
    '625 ml (2 1/2 tasses) de bouillon de volaille',
    'Sel et poivre au goût',
    '125 ml de crème à cuisson 15% ou de yogourt nature',
    'Fines herbes au goût',
    'Le jus d\'une orange'
  ],
  instructions: [
    'Dans un chaudron, chauffer l\'huile et dorer l\'oignon.',
    'Ajouter les carottes, les lentilles et le bouillon de volaille.',
    'Porter à ébullition, baisser le feu et cuire 25 à 30 minutes.',
    'Passer le tout au mélangeur afin de réduire en purée.',
    'Remettre dans un chaudron et ajouter le jus de l\'orange.',
    'Assaisonner.',
    'Servir avec de la crème à cuisson ou du yogourt.'
  ],
  tags: ['soupe', 'orange', 'légumes'],
  slug: 'creme-de-carotte-aux-lentilles'
};
