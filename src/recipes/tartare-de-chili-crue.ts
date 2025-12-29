import { Recipe } from '@/types/recipe';

export const tartareDeChiliCrue: Recipe = {
  id: 'tartare-de-chili-crue',
  title: 'Tartare de chili crue',
  description: '',
  categories: ['Entrées'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 0, max: 0 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '500 g de bavette de boeuf coupé en cube',
    '3/4 de tasse de noix du brésil',
    '6 brins de ciboulette ciselés',
    '1 à thé de poudre de chili',
    '1 c. à soupe d\'huile de noisette',
    '2 c. à soupe de mayonnaise épicée',
    '1 c. à soupe de jus de citron',
    'Sel et poivre au goût'
  ],
  instructions: [
    'Dans un grand bol, mélanger la bavette, 1/2 tasse de noix du brésil, la ciboulette, la poudre de chili, l\'huile de noisette, la mayonnaise épicée et le jus de citron.',
    'Saler et poivrer.',
    'Déposer dans une assiette à l\'aide d\'un emporte-pièce.',
    'Garnir avec le restant de noix du Brésil et servir aussitôt.'
  ],
  tags: ['cru', 'chili', 'noix'],
  slug: 'tartare-de-chili-crue'
};
