import { Recipe } from '@/types/recipe';

export const burritosADejeuner: Recipe = {
  id: 'burritos-a-dejeuner',
  title: 'Burritos à déjeuner',
  description: 'Un déjeuner hors de l\'ordinaire Burritos à déjeuner',
  categories: ['Déjeuners'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 15, max: 15 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '4 crêpes fait maison, recette de votre choix',
    '6 saucisses à déjeuner coupées en petits dés',
    'Un oignon rouge',
    '1/2 poivron jaune ou autre couleur',
    '1/2 poivron rouge ou autre couleur',
    '3 œufs',
    'Fromage Tex Mex',
    'Crème sûre',
    'Guacamole',
    'Salsa',
    'Coriandre fraîche'
  ],
  instructions: [
    'Préparer les crêpes selon la recette de votre choix et réserver au chaud.',
    'Faire dorer dans le beurre les saucisses coupées en dés.',
    'Hacher l\'oignon rouge et les poivrons en petits dés et ajouter à la cuisson des saucisses.',
    'Ajouter les œufs au mélange et bien brassé pour que ceux-ci soient brouillis.',
    'Sur la crêpe étendre le mélange de saucisses, œufs et légumes bien cuit.',
    'Garnir à votre goût de guacamole, salsa, crème sûre, fromage et coriandre.'
  ],
  tags: ['déjeuner', 'burritos', 'rapide'],
  slug: 'burritos-a-dejeuner'
};
