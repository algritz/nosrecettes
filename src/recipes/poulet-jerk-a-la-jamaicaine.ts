import { Recipe } from '@/types/recipe';

export const pouletJerkALaJamaicaine: Recipe = {
  id: 'poulet-jerk-a-la-jamaicaine',
  title: 'Poulet jerk à la jamaïcaine',
  description: '',
  categories: ['Vollaille', 'Plats principaux'],
  prepTime: 10,
  cookTime: 30,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '4 poitrines de poulet désossées, sans peau',
    '30 ml (2 c. à table) de Jerk Jamaïcain',
    '15 ml (1 c. à table) de rhum brun',
    'Le jus de 1 lime',
    '15 ml (1 c. à table) d’huile végétale'
  ],
  instructions: [
    'Frotter les poitrines de poulet du mélange d’Assaisonnement Jerk Jamaïcain, de rhum, de jus de lime et d’huile végétale.',
    'Laisser mariner au frigo.',
    'Cuire sur le BBQ.'
  ],
  tags: ['jamaïcain', 'marinade sèche', 'grill'],
  marinatingTime: 240,
  slug: 'poulet-jerk-a-la-jamaicaine'
};
