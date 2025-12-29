import { Recipe } from '@/types/recipe';

export const tartareDeBoeufClassique: Recipe = {
  id: 'tartare-de-boeuf-classique',
  title: 'Tartare de boeuf classique',
  description: '',
  categories: ['Entrées'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 0, max: 0 },
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    '200g de boeuf à tartare',
    '1/4 d\'oignon rouge',
    '1 oz de cornichon',
    '1 oz de câpres',
    '1 cuillère à soupe de moutarde de Dijon',
    '1 jaune d\'oeuf',
    'Vinaigre de vin rouge au goût',
    '15 ml d\'huile d\'olive',
    'Fleur de sel et poivre blanc',
    'Copeaux de parmesan'
  ],
  instructions: [
    'Hacher finement le quart de l\'oignon rouge, les cornichons et les câpres, puis réserver.',
    'Parer la pièce de boeuf, la tailler en fines tranches, puis couper celles-ci en fines juliennes.',
    'Terminer en taillant les juliennes en petits cubes.',
    'Réserver dans un bol sur de la glace ou au froid avec les légumes.',
    'Bien mélanger tous les ingrédients et les condiments à la fourchette et assaisonner.',
    'Laisser reposer environ 30 minutes au réfrigérateur pour que la viande prenne du goût.',
    'Déposer le tartare dans un emporte-pièce, puis garnir avec des copeaux de parmesan.'
  ],
  tags: ['bœuf', 'cru', 'classique'],
  slug: 'tartare-de-boeuf-classique'
};
