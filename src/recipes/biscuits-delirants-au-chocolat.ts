import { Recipe } from '@/types/recipe';

export const biscuitsDelirantsAuChocolat: Recipe = {
  id: 'biscuits-delirants-au-chocolat',
  title: 'Biscuits délirants au chocolat',
  description: '',
  categories: ['Pâtisseries et desserts'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 12, max: 12 },
  servings: 16,
  difficulty: 'Facile',
  ingredients: [
    '170 ml (2/3 de tasse) de farine',
    '15 ml (1 c. à soupe) de cacao',
    '5 ml (1 c. à thé) de poudre à pâte',
    'Une pincée de sel',
    '80 ml (1/3 de tasse) de beurre mou',
    '310 g (11 carrés) de chocolat non sucré',
    '2 oeufs',
    '60 ml (4 c. à soupe) de sucre d\'érable'
  ],
  instructions: [
    'Préchauffer le four à 180 °C (350 °F).',
    'Dans un récipient, mélanger la farine, le cacao, la poudre à pâte et le sel. Réserver.',
    'Faire fondre le beurre et 200 g (7 carrés) de chocolat au bain-marie.',
    'Battre les oeufs, le sucre d\'érable et le sucre au batteur électrique jusqu\'à ce que le mélange blanchisse.',
    'Verser le chocolat fondu et battre une à deux minutes.',
    'Ajouter progressivement les ingrédients secs et mélanger jusqu\'à l\'obtention d\'une pâte ferme.',
    'Sur une plaque munie d\'une feuille de papier parchemin, déposer à la cuillère des portions d\'environ 30 ml (2 c. à soupe) en les espaçant les unes des autres.',
    'Les aplatir quelque peu.',
    'Garnir chaque biscuit de morceaux de chocolat hachés grossièrement.',
    'Cuire de 10 à 12 minutes.',
    'Le centre des biscuits doit demeurer moelleux.',
    'Laisser refroidir sur une grille.'
  ],
  tags: ['chocolat', 'pâtisserie', 'four'],
  slug: 'biscuits-delirants-au-chocolat'
};
