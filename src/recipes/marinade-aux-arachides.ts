import { Recipe } from '@/types/recipe';

export const marinadeAuxArachides: Recipe = {
  id: 'marinade-aux-arachides',
  title: 'Marinade aux arachides',
  description: '',
  categories: ['Marinade'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 0, max: 0 },
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    '90 ml (6 c. à soupe) beurre d\'arachides',
    '15 ml (1 c. à soupe) sauce aux huîtres',
    '15 ml (1 c. à soupe) sauce soya',
    '30 ml (2 c. à soupe) cassonade',
    '80 ml (1/3 tasse) eau chaude',
    '60 ml (1/4 tasse) huile d\'olive',
    '30 ml (2 c. à soupe) coriandre fraîche, hachée'
  ],
  instructions: [
    'Dans un bol, bien mélanger tous les ingrédients.',
    'Réfrigérer.'
  ],
  tags: ['arachide', 'sauce', 'marinade'],
  marinatingTime: { min: 300, max: 300 },
  notes: 'Idéal pour viande blanche',
  slug: 'marinade-aux-arachides'
};
