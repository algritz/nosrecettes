import { Recipe } from '@/types/recipe';

export const pitaDeJambonALaSalsa: Recipe = {
  id: 'pita-de-jambon-a-la-salsa',
  title: 'Pita de jambon à la salsa',
  description: 'Une recette simple et fraîche pour utiliser des restes de jambon, garnie de salsa et de sauce crémeuse dans des pita.',
  categories: ['Sandwichs', 'Entrées'],
  prepTime: 15,
  cookTime: 0,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '200 g de jambon fumé à l’érable',
    '1/4 de petit chou rouge',
    '1/2 laitue Iceberg',
    '4 pitas',
    '1 tasse de maïs congelé, qui a été préalablement dégelé',
    '30 ml de coriandre hachée',
    '30 ml d’huile d’olive',
    '15 ml de jus de lime',
    '1/2 oignon rouge coupé en dés',
    '1/2 poivron rouge coupé en dés',
    '1/2 poivron vert coupé en dés',
    'sel et poivre au goût',
    '125 ml de crème sure épaisse',
    '15 ml de zestes de lime',
    '15 ml de miel',
    '1/2 jalapeño haché'
  ],
  instructions: [
    'Dans un bol, mélanger les ingrédients de la salsa.',
    'Dans un autre bol, mélanger les ingrédients de la sauce.',
    'Couper le jambon en dés.',
    'Émincer finement le chou rouge et la laitue iceberg.',
    'Garnir les pitas de chou rouge, de jambon, de laitue et de salsa.',
    'Napper de sauce.'
  ],
  tags: ['salsa', 'sauce crémeuse', 'passer des restes'],
  slug: 'pita-de-jambon-a-la-salsa'
};
