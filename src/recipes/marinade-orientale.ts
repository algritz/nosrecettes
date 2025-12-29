import { Recipe } from '@/types/recipe';

export const marinadeOrientale: Recipe = {
  id: 'marinade-orientale',
  title: 'Marinade orientale',
  description: 'Une marinade aromatique aux saveurs asiatiques à base de sauce hoisin, soja, miel, gingembre, ail, pâte de chili et huile de sésame.',
  categories: ['Marinade'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 0, max: 0 },
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    '45 ml (3 c. à s.) de sauce hoisin',
    '60 ml (4 c. à s.) de sauce soya ou teriyaki',
    '30 ml (2 c. à s.) de miel ou de sirop d\'érable',
    '15 ml (1 c. à s.) de gingembre frais, râpé',
    '2 gousses d\'ail hachées finement',
    '5 ml (1 c. à thé) de sambal oelek ou de pâte de chili',
    '10 ml (1 c. à thé) d\'huile de sésame'
  ],
  instructions: [
    'Mélanger tous les ingrédients.',
    'Réserver 45 ml (3 c. à s.) du mélange pour badigeonner la viande.',
    'Faire mariner les filets dans le reste du mélange 2 h au réfrigérateur.'
  ],
  tags: ['asiatique', 'marinade', 'sésame'],
  slug: 'marinade-orientale'
};
