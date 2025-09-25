import { Recipe } from '@/types/recipe';

export const guacamole: Recipe = {
  id: '1758826632070',
  title: 'Guacamole',
  description: '',
  categories: ['Condiments', 'Sauces', 'Trempettes'],
  prepTime: 0,
  cookTime: 0,
  marinatingTime: 60,
  servings: 1,
  difficulty: 'Facile',
  ingredients: [
    '3 avocados - pelées, dénoyauté et broyés',
    '1 lime en jus',
    '1 c. Thé de sel',
    '2 tasse d\'oignon coupé en cube',
    '3 tbps de coriandre fraiche coupé',
    '2 tomates roma coupé en cube',
    '1 c. Thé d\'ail haché',
    '1 pincé de poivre de cayenne (optionnel)'
  ],
  instructions: [
    'Dans un bol de format moyen, broyer les avocados ',
    'Ajouter le jus d\'une lime et le sel, les oignons, la coriandre, les tomates et l\'ail et bien mélanger.',
    'Ajouter le poivre de cayenne, au goût.',
    'Réfrigérer 1 heure pour une meilleur saveur ou bien servir immédiatement.'
  ],
  tags: ['végétarien'],
  source: 'Yannick Benoît',
  slug: 'guacamole'
};
