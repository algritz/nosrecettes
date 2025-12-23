import { Recipe } from '@/types/recipe';

export const croissantAuChocolatEtFromageALaCremeDessert: Recipe = {
  id: 'croissant-au-chocolat-et-fromage-a-la-creme-dessert',
  title: 'Croissant au chocolat et fromage à la crème (déssert)',
  description: 'Une tarte aux croissants, chocolat et fromage à la crème, cuite au four et servie avec une boule de crème glacée.',
  categories: ['Desserts'],
  prepTime: 25,
  cookTime: 50,
  servings: 11,
  difficulty: 'Facile',
  ingredients: [
    '2 paquet Mini-croissants, hachées (10 à 13 onces)',
    '2 paquets de fromage à la crème, ramolli (8 onces)',
    '2 tasses de chocolat mi-sucré',
    '1 tasse de cassonade',
    '2 œufs',
    '1 cuillère à café de vanille',
    '1 ½ tasse de lait'
  ],
  instructions: [
    'Préchauffer le four à 450 °F.',
    'Ouvrez les 2 emballages de croissants et hachez-les en boules de 2 cm.',
    'Vaporiser un moule moyen-grand d\'huile végétale et placer les boules dans le moule.',
    'Saupoudrer de pépites de chocolat uniformément sur la pâte.',
    'Dans un grand bol, battre le fromage à la crème jusqu\'à consistance légère et crémeuse.',
    'Ajouter la cassonade, les œufs et la vanille et battre jusqu\'à ce que le mélange soit homogène.',
    'Ajouter lentement le lait afin d\'obtenir une consistance plus liquide, sans grumeaux.',
    'Verser uniformément le mélange de fromage à la crème sur la pâte.',
    'Laisser reposer pendant 20 minutes (optionnel).',
    'Cuire au four pendant 45-50 minutes, ou jusqu\'à ce que le centre soit bien cuit.',
    'Laisser refroidir pendant 10 minutes.'
  ],
  tags: ['chocolat', 'fromage à la crème', 'cuisson au four'],
  accompaniment: 'Servir avec une boule de crème glacée',
  marinatingTime: 20,
  slug: 'croissant-au-chocolat-et-fromage-a-la-creme-dessert'
};
