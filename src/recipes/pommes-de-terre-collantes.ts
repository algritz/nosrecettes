import { Recipe } from '@/types/recipe';

export const pommesDeTerreCollantes: Recipe = {
  id: 'pommes-de-terre-collantes',
  title: 'Pommes de terre collantes',
  description: 'Une recette de pommes de terre grelots sautées et enrobées d\'une sauce sucrée-salée, garnie de graines de sésame torréfiées.',
  categories: ['Végétarien', 'Plats principaux'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 15, max: 15 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 1/2 lb de pommes de terre grelots',
    '2 c. à table d’huile végétale au choix',
    '1/2 tasse d’eau',
    '2 1/2 c. à table de sauce soja légère',
    '2 c. à table de sirop de maïs',
    '1 1/2 c. à table de sucre',
    '1 c. à table de ketchup',
    '1 c. à table d’ail, émincé',
    '1 c. à thé de graines de sésame, rôties'
  ],
  instructions: [
    'Faire chauffer l’huile dans une poêle et faire frire les pommes de terre grelots (en les tournant de temps à autre) à feu moyen-élevé pendant 5 à 7 minutes, soit jusqu’à ce qu’elles soient mi-cuites et légèrement saisies de tous les côtés.',
    'Égoutter tout excès d’huile.',
    'Ajouter l’eau, la sauce soja, le sirop de maïs, le sucre, le ketchup et l’ail, et laisser mijoter de 6 à 8 minutes, soit jusqu’à ce que les pommes de terre soient cuites, et que la sauce épaississe et ne soit plus coulante.',
    'Saupoudrer des graines de sésame et mélanger pour en couvrir les pommes de terre.'
  ],
  tags: ['sauté', 'sésame', 'sucré-salé'],
  slug: 'pommes-de-terre-collantes'
};
