import { Recipe } from '@/types/recipe';

export const marinadePourSteakEtBavette: Recipe = {
  id: 'marinade-pour-steak-et-bavette',
  title: 'Marinade pour steak et bavette',
  description: '',
  categories: ['Marinade'],
  prepTime: 5,
  cookTime: 0,
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    '2 c. à soupe d\'huile d\'olive',
    '2 c. à soupe de vin rouge ou de vinaigre de vin rouge',
    '1 c. à soupe de poivre frais',
    '1 c. à soupe d\'épices à steak',
    '1 c. à soupe de ketchup',
    '1 c. à soupe de moutarde de dijon',
    'Sel au goût'
  ],
  instructions: [
    'Mélanger le tout dans un sac Ziploc',
    'Y faire mariner la viande'
  ],
  tags: ['marinade', 'bœuf', 'grill'],
  slug: 'marinade-pour-steak-et-bavette'
};
