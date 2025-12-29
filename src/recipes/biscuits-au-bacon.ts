import { Recipe } from '@/types/recipe';

export const biscuitsAuBacon: Recipe = {
  id: 'biscuits-au-bacon',
  title: 'Biscuits au bacon',
  description: 'Recette de biscuits au bacon croustillant, chocolaté et parfumé à la vanille, parfaits pour une collation ou un apéritif original.',
  categories: ['Pâtisseries et desserts'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 20, max: 20 },
  servings: 12,
  difficulty: 'Facile',
  ingredients: [
    '1 tasse de beurre',
    '1 tasse de cassonade',
    '1 oeuf',
    '1/2 c. à thé d’extrait de vanille',
    '3/4 tasse (environ 8 tranches) de bacon, cuit et haché',
    '1/2 tasse de pépites de chocolat noir (ou plus au goût)',
    '2 1/2 tasse de flocons d’avoine',
    '1 tasse de farine',
    '1/2 c. à thé de poudre à pâte',
    '1/2 c. à thé de bicarbonate de soude'
  ],
  instructions: [
    'Préchauffer le four à 350F. Tapisser une grande plaque à pâtisserie de papier parchemin. Réserver.',
    'Dans un bol, mélanger les ingrédients secs ensemble. Réserver.',
    'Dans un autre bol, crémer le beurre avec la cassonade au batteur électrique, environ 2 minutes ou jusqu’à l’obtention d’un mélange léger et mousseux.',
    'Ajouter l’œuf et la vanille puis mélanger jusqu’à ce que le tout soit homogène.',
    'Ajouter les ingrédients secs puis mélanger à l’aide d’une cuillère en bois.',
    'Incorporer le bacon et les pépites de chocolat.',
    'Répartir 12 boules de pâte à biscuits sur la plaque à pâtisserie.',
    'Presser les boules légèrement à l’aide des doigts puis enfourner 20 minutes ou jusqu’à ce que le contour des biscuits soient légèrement dorés.',
    'Laisser refroidir complètement sur la plaque avant de déguster.'
  ],
  tags: ['bacon', 'chocolat', 'pâtisserie'],
  slug: 'biscuits-au-bacon'
};
