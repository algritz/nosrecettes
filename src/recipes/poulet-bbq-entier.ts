import { Recipe } from '@/types/recipe';

export const pouletBbqEntier: Recipe = {
  id: 'poulet-bbq-entier',
  title: 'Poulet BBQ entier',
  description: '',
  categories: ['Vollaille', 'Barbecue'],
  prepTime: 15,
  cookTime: 90,
  servings: 8,
  difficulty: 'Facile',
  ingredients: [
    '2 Poulet',
    '1/4 de tasse Cassonade',
    '1/4 de tasse Paprika',
    '1/3 de tasse Paprika Fumé',
    '4 c. à soupe Gros Sel',
    '3 c. à soupe Poivre Moulu',
    '2 c. à thé Poivre De Cayenne',
    '2 c. à thé Poudre D\'oignon',
    '2 c. à thé Poudre D\'ail',
    '2 c. à thé Graines De Céleri'
  ],
  instructions: [
    'La veille, mélanger tous les ingrédients de la marinade sèche et enrober les deux poulets en frottant sur la peau.',
    'Laisser au réfrigérateur sans les couvrir durant minimum 1 heure et maximum 12 heures.',
    'Faire cuire selon la méthode qui vous convient. Tourne broche, canette de bière, crapaudine etc.'
  ],
  tags: ['marinade sèche', 'barbecue', 'frottage'],
  slug: 'poulet-bbq-entier'
};
