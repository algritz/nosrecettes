import { Recipe } from '@/types/recipe';

export const cotelettesDePorcAuBabeurre: Recipe = {
  id: 'cotelettes-de-porc-au-babeurre',
  title: 'Côtelettes de porc au babeurre',
  description: 'Marinade de côtelettes de porc au babeurre avec épices, puis grillées à la perfection.',
  categories: ['Porc', 'Plats principaux'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 10, max: 10 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2/3 tasse de lait de babeurre',
    '10 ml de paprika',
    '10 ml de poudre d’oignon',
    '10 ml de coriandre moulue',
    '5 ml de piment de la Jamaïque moulu',
    '5 ml de sel',
    'Une pincée de piment de cayenne',
    '6 côtelettes de porc'
  ],
  instructions: [
    'Dans un grand sac de plastique à fermeture hermétique, mélanger le babeurre et les épices.',
    'Ajouter les côtelettes et bien les enrober du mélange.',
    'Couvrir le plat ou refermer le sac.',
    'Réfrigérer 12 heures ou toute une nuit.',
    'Régler le barbecue à puissance élevée.',
    'Huiler la grille.',
    'Égoutter la viande et jeter la marinade.',
    'Griller les côtelettes 5 minutes de chaque côté ou jusqu’à cuisson rosée.',
    'Réserver sur une assiette.',
    'Couvrir et laisser reposer 5 minutes.'
  ],
  tags: ['marinade sèche', 'barbecue', 'porc'],
  slug: 'cotelettes-de-porc-au-babeurre'
};
