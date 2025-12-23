import { Recipe } from '@/types/recipe';

export const gateauAuxLegumes: Recipe = {
  id: 'gateau-aux-legumes',
  title: 'Gâteau aux légumes',
  description: 'Un gâteau moelleux aux légumes, notamment carottes et purée de patate douce, garni d\'un glaçage au fromage à la crème et chou-fleur.',
  categories: ['Végétarien', 'Pâtisseries et desserts'],
  prepTime: 30,
  cookTime: 60,
  servings: 10,
  difficulty: 'Facile',
  ingredients: [
    'Gâteau',
    '3 tasses de carottes râpées',
    '1/2 tasse d\'huile de canola ou d\'olive',
    '1 tasse de sucre',
    '1 tasse de purée de patate douce (utiliser deux patates douces de grosseurs moyenne pour faire la purée)',
    '3 oeufs',
    '1 c. à thé d\'extrait de vanille',
    '2 1/2 tasses de farine de blé entier',
    '2 c. à thé de poudre à pâte',
    '1 1/2 c. à thé de bicarbonate de soude',
    '2 c. à thé de cannelle moulu'
  ],
  instructions: [
    'Préchauffer le four à 350°F.',
    'Bien mélanger les carottes, l\'huile, le sucre, la purée de patate douce, les œufs et la vanille à l\'aide d\'un batteur électrique.',
    'Dans un second bol, mélanger la farine, la poudre à pâte, le bicarbonate de soude et la cannelle.',
    'À l\'aide d\'une cuillère, incorporer les ingrédients secs à la purée.',
    'Verser le mélange dans un moule à gâteau graissé de 8 x 13 pouces et enfourner.',
    'Cuire environ 1 heure et laisser refroidir avant de glacer.'
  ],
  tags: ['carotte', 'purée de chou-fleur', 'glaçage au fromage'],
  slug: 'gateau-aux-legumes'
};
