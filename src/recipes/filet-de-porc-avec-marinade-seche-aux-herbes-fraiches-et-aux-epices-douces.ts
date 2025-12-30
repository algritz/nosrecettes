import { Recipe } from '@/types/recipe';

export const filetDePorcAvecMarinadeSecheAuxHerbesFraichesEtAuxEpicesDouces: Recipe = {
  id: 'filet-de-porc-avec-marinade-seche-aux-herbes-fraiches-et-aux-epices-douces',
  title: 'Filet de porc avec marinade sèche aux herbes fraîches et aux épices douces',
  description: 'Une recette de filet de porc en marinade sèche aux herbes fraîches et épices douces, idéal pour une cuisson au barbecue ou au four, servi en tranches avec une salade de pâtes et légumes frais.',
  categories: ['Plats principaux', 'Porc'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 20, max: 20 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 ml (1/2 c. à thé) de graines de cumin',
    '5 ml (1 c. à thé) de graines de coriandre',
    '5 ml (1 c. à thé) de graines de moutarde',
    '5 ml (1 c. à thé) de paprika',
    '30 ml (2 c. à soupe) de cassonade',
    'Sel et poivre noir du moulin',
    '2 gousses d’ail, hachées',
    '30 ml (2 c. à soupe) d’herbes fraîches au choix (thym, origan, basilic, persil, etc.), hachées',
    '600 g (1 1/4 lb) de filets de porc, parés'
  ],
  instructions: [
    'Préchauffer le barbecue à intensité moyenne-élevée ou le four à 200 °C (400 °F).',
    'Dans une petite poêle, mélanger les graines de cumin, de coriandre et de moutarde et le paprika.',
    'Chauffer à feu doux de 4 à 5 minutes pour en rehausser les saveurs.',
    'Broyer les épices dans un mortier ou sur une planche en les écrasant avec une casserole à fond épais.',
    'Verser dans un bol et ajouter la cassonade, le sel, le poivre, l’ail et les herbes.',
    'Bien enrober les filets de porc du mélange d’épices en le frottant sur la chair.',
    'Sur la grille bien chaude du barbecue, déposer la viande et cuire environ 20 minutes, en retournant les filets à quelques reprises durant la cuisson, ou cuire au four de 25 à 30 minutes.',
    'Servir les filets de porc chauds ou froids, coupés en tranches, avec une salade de pâtes et de légumes frais.'
  ],
  tags: ['épices', 'barbecue', 'froid'],
  source: 'David Cloutier',
  slug: 'filet-de-porc-avec-marinade-seche-aux-herbes-fraiches-et-aux-epices-douces'
};
