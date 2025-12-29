import { Recipe } from '@/types/recipe';

export const filetDePouletALaSrirachaPanesAuFour: Recipe = {
  id: 'filet-de-poulet-a-la-sriracha-panes-au-four',
  title: 'Filet de poulet à la Sriracha panés au four',
  description: 'Filet de poulet à la Sriracha panés au four',
  categories: ['Vollaille', 'Plats principaux'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 22, max: 22 },
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    '2 poitrines de poulet désossées, sans la peau',
    '1/3 tasse de sauce Sriracha',
    '1 c. à soupe de vinaigre de riz',
    '1 pouce de gingembre, pelé et râpé à la microplane',
    '1 gousse d\'ail, hachée finement',
    '1 oeuf, battu',
    '1 tasse de farine tout-usage',
    '1 1/2 tasse de chapelure panko',
    'Sel et poivre'
  ],
  instructions: [
    'Dans un bol ou un sac refermable style ziplock, mélanger la Sriracha, le vinaigre de riz, l\'ail et le gingembre.',
    'Couper les poitrines de poulet en diagonale afin d\'obtenir 6 filets.',
    'Mélanger les morceaux de poulet dans la marinade et réfrigérer pendant 1 heure.',
    'Préchauffer le four à 400F.',
    'Préparer trois bols : le premier avec la farine (avec une pincée de sel et poivre), le deuxième avec l\'œuf (en y fouettant quelques gouttes d\'eau), et le troisième avec la chapelure panko.',
    'En prenant un filet de poulet à la fois, secouer l\'excès de marinade, puis tremper dans la farine, puis l\'œuf, et enfin le panko. Utiliser une fourchette pour éviter de se salir les doigts.',
    'Placer les filets de poulet sur une plaque à pâtisserie recouverte d\'un papier parchemin.',
    'Enfourner et cuire pendant 20 minutes à 400F.',
    'Après 20 minutes, afin d\'obtenir un croustillant, terminer la cuisson en broil environ 2 minutes de chaque côté, en surveillant bien pour éviter de brûler.'
  ],
  tags: ['poulet', 'panure', 'four'],
  accompaniment: 'Servir avec une trempette au choix - moutarde et miel par exemple.',
  marinatingTime: { min: 60, max: 60 },
  slug: 'filet-de-poulet-a-la-sriracha-panes-au-four'
};
