import { Recipe } from '@/types/recipe';

export const marinadeLouisiannaise: Recipe = {
  id: 'marinade-louisiannaise',
  title: 'Marinade Louisiannaise',
  description: 'Une marinade épicée et aromatique idéale pour viande ou poisson, à préparer en quelques minutes et à laisser mariner plusieurs heures.',
  categories: ['Marinade'],
  prepTime: 15,
  cookTime: 10,
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    '30 ml (2 c. à soupe) d\'épices cajun',
    '30 ml (2 c. à soupe) de pâte de tomate',
    '15 ml (1 c. à soupe) d\'huile végétale',
    '30 ml (2 c. à soupe) de persil haché',
    '250 ml (1 tasse) de bouillon de poulet (non salé si possible)',
    'Piment de Cayenne au goût',
    '5 ml (1 c. à thé) d\'ail haché',
    '1 oignon haché',
    '15 ml (1 c. à soupe) de fécule de maïs'
  ],
  instructions: [
    'Mélanger tous les ingrédients, sauf la fécule de maïs.',
    'Porter à ébullition.',
    'Ajouter la fécule de maïs préalablement diluée dans de l\'eau froide.',
    'Cuire à feu doux pendant une minute.',
    'Laisser refroidir et mariner la viande ou le poisson minimum 4h dans cette préparation.'
  ],
  tags: ['épicé', 'marinade', 'cajun'],
  slug: 'marinade-louisiannaise'
};
