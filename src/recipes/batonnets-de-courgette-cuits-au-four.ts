import { Recipe } from '@/types/recipe';

export const batonnetsDeCourgetteCuitsAuFour: Recipe = {
  id: 'batonnets-de-courgette-cuits-au-four',
  title: 'Bâtonnets de courgette cuits au four',
  description: 'Alternative intéressante aux frites Bâtonnets de courgette cuits au four',
  categories: ['Végétarien', 'Plats principaux'],
  prepTime: 15,
  cookTime: 20,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 sachet de panure assaisonnée Shake\'N Bake Originale, Extra croustillant',
    '1 c. à soupe de persil frais, haché',
    '1 œuf',
    '1 c. à soupe d\'eau',
    '4 courgettes, coupées en croix, puis en quartiers sur le sens de la longueur',
    '1/4 tasse de Vinaigrette réfrigérée Pure Kraft Ranch'
  ],
  instructions: [
    'Chauffer le four à 400 ºF.',
    'Mélanger la panure et le persil dans une assiette.',
    'Au moyen d\'une fourchette, fouetter l\'œuf et l\'eau dans un plat peu profond jusqu\'à ce que le tout soit homogène.',
    'Tremper les courgettes dans le mélange d\'œuf, puis dans le mélange de panure, en les retournant pour bien les enrober.',
    'Les déposer côte à côte sur une plaque à cuisson vaporisée d\'enduit à cuisson.',
    'Cuire au four 20 minutes ou jusqu\'à ce que les courgettes soient tendres mais encore croquantes et dorées.',
    'Servir avec la vinaigrette.'
  ],
  tags: ['four', 'courgette', 'panure'],
  slug: 'batonnets-de-courgette-cuits-au-four'
};
