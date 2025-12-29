import { Recipe } from '@/types/recipe';

export const filetDePorcEpiceALaBiere: Recipe = {
  id: 'filet-de-porc-epice-a-la-biere',
  title: 'Filet de porc épicé à la bière',
  description: 'Un filet de porc épicé mariné dans une bière rousse, grillé et servi avec une sauce brune relevée.',
  categories: ['Porc', 'Plats principaux'],
  prepTime: { min: 35, max: 35 },
  cookTime: { min: 35, max: 35 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '175 mL de bière rousse',
    '2 gousses d\'ail émincées',
    '3 feuilles de sauge émincées',
    '2 pincées de thym',
    '5-6 brins de ciboulette émincés',
    '50 mL de sauce chili Heinz',
    '30 mL de moutarde de Dijon',
    'Poivre (au goût)',
    '1 tasse de sauce brune (faire cuire tel qu\'indiqué sur l\'enveloppe)',
    '1/2 c. à thé de sucre',
    '5 gouttes de sauce Worcestershire',
    'Poivre et sel (au goût)'
  ],
  instructions: [
    'Mélangez les ingrédients de la marinade, déposez les filets et laissez mariner au réfrigérateur au minimum 2h en les tournant quelques fois.',
    'Huilez la grille du barbecue, pré-chauffez pendant une dizaine de minutes, puis déposez les filets sur le grill (réservez la marinade).',
    'Faites cuire pendant une vingtaine de minutes en grillant bien de tous les côtés; le porc est prêt lorsqu\'un thermomètre à viande indique une chaleur interne de 70°C (160°F).',
    'Pendant la cuisson du porc, filtrez la marinade, versez-la dans un chaudron et chauffez.',
    'Incorporez la sauce brune, le sucre, la sauce Worcestershire, poursuivez la cuisson et bien mélanger (goûtez et ajoutez du sucre au besoin pour tempérer l\'acidité du mélange).',
    'Laissez le porc reposer 3 minutes pour que les jus se répartissent dans tout le filet.',
    'Tranchez le porc, servez et décorez d\'un coulis de sauce.'
  ],
  tags: ['barbecue', 'marinade', 'porc'],
  slug: 'filet-de-porc-epice-a-la-biere'
};
