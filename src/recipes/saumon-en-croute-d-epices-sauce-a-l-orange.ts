import { Recipe } from '@/types/recipe';

export const saumonEnCrouteDEpicesSauceALOrange: Recipe = {
  id: 'saumon-en-croute-d-epices-sauce-a-l-orange',
  title: 'Saumon en croûte d’épices, sauce à l’orange',
  description: 'Une recette de saumon épicé en croûte, servi avec une sauce à l’orange, accompagné d’asperges et de polenta au parmesan.',
  categories: ['Poisson', 'Plats principaux'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 25, max: 25 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '125 ml (1/2 tasse) de jus d\'orange',
    '4 Filets de saumon',
    '15 ml (1 c. à soupe) d\'huile végétale',
    'Sel et poivre, au goût',
    '5 ml (1 c. à thé) de graines de moutarde, concassées',
    '5 ml (1 c. à thé) de cumin',
    '5 ml (1 c. à thé) de paprika',
    '5 ml (1 c. à thé) d\'origan séché',
    '1 gousse d\'ail hachée',
    '5 ml (1 c. à thé) de fécule de maïs'
  ],
  instructions: [
    'Dans un petit bol, mélanger l\'ail, l\'origan, le paprika, le cumin, les graines de moutarde, le sel et le poivre. Réserver 5 ml (1 c. à thé) dans un autre bol et ajouter 5 ml (1 c. à thé) d\'huile dans le reste du mélange d\'épices pour former une pâte.',
    'Étendre la pâte sur les filets de saumon.',
    'Dans une poêle, chauffer le reste de l\'huile et y faire cuire le saumon, environ 2 ou 3 minutes par côté ou jusqu\'à ce que la chair devienne opaque. Réserver.',
    'Ajouter le jus d\'orange dans le mélange d\'épices réservé et y délayer la fécule de maïs.',
    'Dans la même poêle utilisée pour le poisson, chauffer la sauce à l\'orange en raclant bien le fond, jusqu\'à ce qu\'elle épaississe légèrement.'
  ],
  tags: ['épicé', 'orange', 'poisson'],
  notes: 'Ne fait pas assez de croûte et de sauce. La prochaine fois nous triplerons la recette sauf le saumon.',
  slug: 'saumon-en-croute-d-epices-sauce-a-l-orange'
};
