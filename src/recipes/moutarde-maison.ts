import { Recipe } from '@/types/recipe';

export const moutardeMaison: Recipe = {
  id: 'moutarde-maison',
  title: 'Moutarde maison',
  description: '',
  categories: ['Condiments'],
  prepTime: 15,
  cookTime: 0,
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    '70 g de graines de moutarde',
    '60 ml de vinaigre de cidre',
    '½ tasse d\'eau',
    '1 gousse d\'ail coupée en 2',
    '4 c. à thé de sirop d\'érable',
    '½ c. à thé de sel',
    '6 g de curcuma'
  ],
  instructions: [
    'Faites macérer les graines de moutarde, le vinaigre, l\'eau et l\'ail au moins 8 heures.',
    'Après la période macération, retirer l\'ail et mélanger au robot culinaire avec le sirop, le sel, le curcuma pour obtenir une substance crémeuse.'
  ],
  tags: ['moutarde', 'macération', 'crème'],
  slug: 'moutarde-maison'
};
