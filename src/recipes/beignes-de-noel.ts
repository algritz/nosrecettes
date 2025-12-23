import { Recipe } from '@/types/recipe';

export const beignesDeNoel: Recipe = {
  id: 'beignes-de-noel',
  title: 'Beignes de Noël',
  description: 'Des beignes de Noël moelleux et dorés, parfaits pour les fêtes, à saupoudrer de sucre en poudre.',
  categories: ['Pâtisseries et desserts'],
  prepTime: 25,
  cookTime: 2,
  servings: 36,
  difficulty: 'Facile',
  ingredients: [
    '4 blancs d\'oeufs',
    '4 jaunes d\'oeufs',
    '1/4 c. à thé sel',
    '1 1/2 tasse sucre',
    '1/2 tasse beurre fondu',
    '2 c. à soupe graisse végétale fondue',
    '5 tasses farine',
    '5 c. à thé poudre à pâte',
    '1 1/3 tasse lait'
  ],
  instructions: [
    'Monter les blancs d\'oeufs et le sel en neige ferme et réserver.',
    'Battre les jaunes d\'oeufs, le sucre et les gras ensemble.',
    'Plier délicatement les blancs d\'oeufs en neige dans ce mélange.',
    'Dans un bol à part, mélanger la farine et la poudre à pâte.',
    'Ajouter les ingrédients secs graduellement au premier mélange, en alternant avec le lait, jusqu\'à l\'obtention d\'une belle pâte épaisse.',
    'Réfrigérer au moins une heure.',
    'Chauffer l\'huile dans la friteuse à 375 F (190 C).',
    'Abaisser la pâte à 1/4 po (1/2 cm) et découper à l\'emporte-pièce.',
    'Jeter quelques beignes à la fois dans l\'huile chaude.',
    'Quand ils remontent à la surface, laisser dorer avant de retourner.',
    'Cuire encore une minute, pour un total de deux minutes.',
    'Égoutter sur un papier absorbant.',
    'Servir saupoudré de sucre en poudre.'
  ],
  tags: ['pâtisserie', 'friture', 'sucre en poudre'],
  slug: 'beignes-de-noel'
};
