import { Recipe } from '@/types/recipe';

export const pouletAuBeurreDArachides: Recipe = {
  id: 'poulet-au-beurre-d-arachides',
  title: 'Poulet au beurre d\'arachides',
  description: 'Une recette de poulet mariné et grillé, servi avec une sauce à trempette au beurre d\'arachides et moutarde au miel.',
  categories: ['Vollaille', 'Plats principaux'],
  prepTime: 20,
  cookTime: 10,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '3/4 tasse (190 ml) moutarde au miel',
    '1/3 tasse (85 ml) beurre d\'arachides, croquant',
    '2 c.à soupe (30 ml) sauce soya',
    '1 gousse ail, écrasée',
    '1 lb (454 g) poitrine de poulet, sans la peau, sans les os',
    '1 c.à soupe (15 ml) eau'
  ],
  instructions: [
    'Dans un bol de grandeur moyenne, combiner la moutarde, le beurre d\'arachides, la sauce soya et l\'ail.',
    'Réserver 1/2 tasse (125 ml) de ce mélange jusqu\'au moment de servir.',
    'Rincer le poulet et ensuite l\'assécher.',
    'Couper le poulet en lanières de 1/4 de pouces (0,5 cm).',
    'Ajouter les lanières de poulet au reste de la sauce à marinade, mélanger bien le tout pour couvrir le poulet.',
    'Couvrir et laisser mariner au réfrigérateur au moins 1 heure ou toute la nuit, brasser le mélange à marinade occasionnellement.',
    'Faire tremper les brochettes en bois dans assez d\'eau pour les couvrir au moins 1 heure; égoutter.',
    'Retirer le poulet de la marinade, mettre la marinade de côté, enfiler les lanières de poulet sur les brochettes en bois, style accordéon.',
    'Griller le poulet entre 4 et 6 pouces (10 à 15 cm) de la source de chaleur pendant 4 minutes ou jusqu\'à ce que le poulet soit cuit, tourner à la moitié de la cuisson.',
    'Mélanger 1 c. à soupe (15 ml) d\'eau dans la marinade réservée au début.',
    'Pour servir, arranger les brochettes sur un plat de service. Garnir si désiré.',
    'Servir la marinade réservée, comme sauce à trempette avec le poulet.'
  ],
  tags: ['grill', 'marinade sèche', 'trempette'],
  slug: 'poulet-au-beurre-d-arachides'
};
