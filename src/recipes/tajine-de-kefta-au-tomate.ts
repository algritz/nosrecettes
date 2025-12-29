import { Recipe } from '@/types/recipe';

export const tajineDeKeftaAuTomate: Recipe = {
  id: 'tajine-de-kefta-au-tomate',
  title: 'Tajine de kefta au tomate',
  description: 'Une savoureuse recette de kefta en tajine avec une sauce tomate parfumée, servie avec du riz blanc.',
  categories: ['Plats principaux', 'Vollaille'],
  prepTime: { min: 30, max: 30 },
  cookTime: { min: 150, max: 150 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    'Ingrédients pour la viande hachée: 500 gr de viande hachée, veau, agneau, poulet....',
    '1 Oignon',
    'Quelques tiges de coriandre fraîche',
    '5-6 Feuilles de menthe',
    '1 Bouquet de persil',
    '1 c. à café de ras-el-hanout',
    '1/2 c. à café de cumin',
    '1/4 de c. à café de paprika doux',
    '1/4 de c. à café de paprika fort',
    'Ingrédients pour le tajine:',
    '4 Tomates coupées en dés',
    '1 Oignon émincé',
    '1 Gousse d\'ail',
    'Un peu d\'huile',
    'Un peu d\'eau ou jus de tomate',
    'Sel',
    'Un petit piment fort',
    '1 c. à café de persil ciselé'
  ],
  instructions: [
    'Émincez l\'oignon, le piment fort et hachez la gousse d\'ail.',
    'Dans un tajine ou dans une marmite, mettre l\'oignon émincé et le piment avec l\'huile et faites suer quelques minutes.',
    'Ajoutez ensuite les morceaux de tomate, la gousse d\'ail et le sel, puis couvrir d\'eau et cuire à couvert.',
    'Formez des boulettes avec la viande hachée et le reste des ingrédients.',
    'Ouvrir votre tajine et y jeter les boulettes de kefta.',
    'Laisser cuire jusqu\'à évaporation complète d\'eau.',
    'Parsemer de persil et servir avec un riz blanc.'
  ],
  tags: ['tajine', 'kefta', 'tomate'],
  slug: 'tajine-de-kefta-au-tomate'
};
