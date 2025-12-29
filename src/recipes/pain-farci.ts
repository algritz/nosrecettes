import { Recipe } from '@/types/recipe';

export const painFarci: Recipe = {
  id: 'pain-farci',
  title: 'Pain farci',
  description: 'Une recette de petits pains farcis avec un mélange de bœuf, oignon, soupe au riz et poulet, puis cuits au four.',
  categories: ['Plats principaux'],
  prepTime: { min: 25, max: 25 },
  cookTime: { min: 80, max: 80 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 lb de bœuf haché',
    '1 oignon haché fin',
    '1 c. à thé d\'huile végétale',
    '1 boîte de soupe au riz et poulet Cambell',
    '½ tasse de sauce Chili',
    'sel et poivre',
    'Petit pain'
  ],
  instructions: [
    'Faire revenir le boeuf et l\'oignon dans l\'huile.',
    'Ajouter les autres ingrédients et brasser.',
    'Cuire une heure lentement.',
    'Farci des petits pains de ce mélange et cuire au four à 300 F pendant 25 minutes.'
  ],
  tags: ['bœuf', 'farce', 'four'],
  slug: 'pain-farci'
};
