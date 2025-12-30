import { Recipe } from '@/types/recipe';

export const filetDePorcAuCafe: Recipe = {
  id: 'filet-de-porc-au-cafe',
  title: 'Filet de porc au café',
  description: '',
  categories: ['Plats principaux', 'Porc'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 15, max: 15 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 filets de porc',
    '30 ml (2 c. à soupe) de café moulu très finement',
    '30 ml (2 c. à soupe) de sel de mer fin',
    '15 ml (1 c. à soupe) de cassonade',
    '15 ml (1 c. à soupe) de poudre de chili',
    '15 ml (1 c. à soupe) de paprika',
    '5 ml (1 c. à thé) de cumin moulu',
    '5 ml (1 c. à thé) de poivre noir moulu',
    '2,5 ml (1/2 c. à thé) de poudre d’ail'
  ],
  instructions: [
    'Dans un bol, mélanger tous les ingrédients. Réserver.',
    'Préchauffer le barbecue à puissance élevée. Huiler la grille.',
    'Frotter les filets avec environ 30 ml (2 c. à soupe) de marinade sèche pour chacun. Laisser reposer 10 minutes.',
    'Conserver le reste de la marinade dans un contenant hermétique à la température ambiante.',
    'Réduire le barbecue à puissance moyenne.',
    'Griller les filets de porc environ 15 minutes en les retournant à intervalles réguliers.',
    'Laisser reposer 5 minutes avant de trancher la viande.',
    'Servir avec une salade de pommes de terre ou une salade verte.'
  ],
  tags: ['barbecue', 'fumer', 'marinade sèche'],
  source: 'David Cloutier',
  slug: 'filet-de-porc-au-cafe'
};
