import { Recipe } from '@/types/recipe';

export const saladeTiedeDeLegumesGrilles: Recipe = {
  id: 'salade-tiede-de-legumes-grilles',
  title: 'Salade tiède de légumes grillés',
  description: 'Excellente salade l\'été avec du poulet',
  categories: ['Salades'],
  prepTime: { min: 5, max: 5 },
  cookTime: { min: 10, max: 10 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 poivrons rouges coupés en quartiers (épépinés)',
    '2 poivrons jaunes coupés en quartiers (épépinés)',
    '500 ml (2 tasses) de courgettes vertes coupées en tronçons (1 pouce)',
    '1 gros oignon coupé en tranches (1 pouce)',
    '65 ml (1/4 tasse) d\'huile d\'olive',
    '30 ml (2 c. à soupe) de vinaigre balsamique',
    '15 ml (1 c. à soupe) d\'ail haché',
    '15 ml (1 c. à soupe) d\'origan frais haché',
    '1 citron (jus et zeste)'
  ],
  instructions: [
    'Préchauffer le grill à feu moyen-élevé et bien griller de chaque côté les légumes.',
    'Pour la vinaigrette, mélanger tous les ingrédients dans un bol et verser sur les légumes grillés.',
    'Mélanger et assaisonner.'
  ],
  tags: ['grill', 'légumes', 'été'],
  slug: 'salade-tiede-de-legumes-grilles'
};
