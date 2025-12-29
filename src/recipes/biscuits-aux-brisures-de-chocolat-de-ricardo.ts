import { Recipe } from '@/types/recipe'

export const biscuitsAuxBrisuresDeChocolatDeRicardo: Recipe = {
  id: 'biscuits-aux-brisures-de-chocolat-de-ricardo',
  title: 'Biscuits aux brisures de chocolat de Ricardo',
  description:
    "Recette de biscuits aux brisures de chocolat, croustillants à l'extérieur et moelleux à l'intérieur, avec des morceaux de chocolat fondants.",
  categories: ['Pâtisseries et desserts'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 15, max: 15 },
  servings: 20,
  difficulty: 'Facile',
  ingredients: [
    '500 ml (2 tasse) de farine tout usage non blanchie',
    '5 ml (1 c. à thé) de poudre à pâte',
    '5 ml (1 c. à thé) de sel',
    '125 ml (1/2 tasse) de beurre non salé, ramolli',
    '375 ml (1 1/2 tasse) de cassonade',
    '2 œufs',
    "5 ml (1 c. à thé) d'extrait de vanille",
    '125 ml (1/2 tasse) de pipettes de chocolats, ou plus au goût',
  ],
  instructions: [
    'Placer la grille au centre du four.',
    'Préchauffer le four à 180 °C (350 °F).',
    'Tapisser deux grandes plaques à biscuits de papier parchemin.',
    'Dans un bol, mélanger la farine, la poudre à pâte et le sel. Réserver.',
    'Dans un autre bol, crémer le beurre avec la cassonade au batteur électrique.',
    "Ajouter l'œuf, la vanille et battre jusqu'à ce que le mélange soit homogène.",
    'À basse vitesse ou à la cuillère de bois, incorporer les ingrédients secs et le chocolat.',
    "À l'aide d'une cuillère, déposer 30 ml (2 c. à soupe) de pâte par biscuit sur une plaque en laissant environ 5 cm (2 po) entre chacun.",
    'Les aplatir légèrement du bout des doigts.',
    'Cuire au four environ 14 minutes.',
  ],
  tags: ['chocolat', 'pâtisserie', 'cuisson au four'],
  slug: 'biscuits-aux-brisures-de-chocolat-de-ricardo',
}
