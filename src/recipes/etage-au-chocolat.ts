import { Recipe } from '@/types/recipe';

export const etageAuChocolat: Recipe = {
  id: 'etage-au-chocolat',
  title: 'Étagé au chocolat',
  description: '',
  categories: ['Desserts'],
  prepTime: 35,
  cookTime: 15,
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    '1 tube pâte à biscuits aux pépites de chocolat réfrigérée Pillsbury',
    '1 paquet (8 onces) de fromage à la crème ramolli',
    '1 tasse de sucre à glacer',
    '1 boîte cool whip décongelée',
    '3 tasses de lait froid à 2%',
    '1 paquet de pouding au chocolat',
    '1 paquet de pouding à la vanille',
    'mini chipit de chocolat pour la déco'
  ],
  instructions: [
    'Laisser ramollir la pâte à biscuits à la température ambiante pendant 5 à 10 minutes.',
    'Étendre la pâte à biscuit dans un pirex 13 x 9 non graissé.',
    'Cuire au four à 350 °F jusqu\'à ce que le biscuit soit bien doré, 14-16 minutes.',
    'Refroidir sur une grille.',
    'Dans un grand bol, battre le fromage à la crème et le sucre à glacer jusqu\'à ce qu\'ils soient onctueux.',
    'Incorporer 1 3/4 tasses de cool whip au mélange de fromage et de sucre.',
    'Étaler sur le biscuit.',
    'Dans un grand bol, mélanger le lait et les pouding pendant 2 minutes.',
    'Étendre sur la couche de fromage à la crème.',
    'Garnir du reste du cool whip.',
    'Saupoudrer de chipit de chocolat.',
    'Couvrir et réfrigérer jusqu\'à consistance ferme soit 8 heures ou toute la nuit.'
  ],
  tags: ['chocolat', 'crème', 'réfrigération'],
  marinatingTime: 480,
  notes: 'Temps de marinade de 8 heures minimum, préparation totale 50 minutes, y compris refroidissement.',
  slug: 'etage-au-chocolat'
};
