import { Recipe } from '@/types/recipe';

export const marinadePourPouletChiliCoriandreEtLime: Recipe = {
  id: 'marinade-pour-poulet-chili-coriandre-et-lime',
  title: 'Marinade pour poulet, chili, coriandre et lime',
  description: 'Goûteux et très rafraichissant Marinade pour poulet, chili, coriandre et lime',
  categories: ['Marinade'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 10, max: 10 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1/4 de tasse de jus de lime',
    'Le zeste d’une lime',
    '2 cuillères à soupe d’huile d’olive',
    '2 cuillères à soupe de coriandre fraîche',
    '2 gousses d’ail émincées',
    '1 cuillère à thé de sel',
    '1 cuillère à thé de cassonade ou de miel',
    '1 cuillère à thé de flocons de poivre de cayenne',
    '1/2 cuillère à thé de cumin'
  ],
  instructions: [
    'Mélanger tous les ingrédients de la marinade dans un bol.',
    'Ajouter les poitrines de poulet coupé en cube dans un grand sac ziplock.',
    'Verser la marinade.',
    'Réfrigérer pendant au moins 4 heures ou encore mieux, pour 24 heures.',
    'Préchauffer le barbecue, à feu moyen élevé et faire griller pour 5 minutes de chaque côté.',
    'Servir dans des tortillas ou en bol mexicain.'
  ],
  tags: ['citron vert', 'marinade sèche', 'grill'],
  slug: 'marinade-pour-poulet-chili-coriandre-et-lime'
};
