import { Recipe } from '@/types/recipe';

export const fudgeAuxCanneberges: Recipe = {
  id: 'fudge-aux-canneberges',
  title: 'Fudge aux canneberges',
  description: 'Un fudge aux canneberges séchées, chocolat mi-amer et lait concentré, à préparer au bain-marie et à réfrigérer pour obtenir une texture ferme et fondante.',
  categories: ['Pâtisseries et desserts'],
  prepTime: 10,
  cookTime: 10,
  servings: 1,
  difficulty: 'Facile',
  ingredients: [
    '8 oz (250 g) de chocolat mi-amer haché',
    '3/4 de tasse de lait Eagle Brand',
    '1 c. à thé de vanille',
    '1 tasse de canneberges séchées'
  ],
  instructions: [
    'Dans un bol placé sur une casserole d\'eau chaude mais non bouillante, chauffer le chocolat et le lait concentré, en brassant de temps à autre, jusqu\'à ce que le chocolat ait fondu.',
    'Ajouter la vanille et les canneberges séchées.',
    'Étendre le fudge dans un moule à pain de 8 po x 4 po (20 cm x 10 cm) tapissé d\'une pellicule de plastique.',
    'Lisser le dessus.',
    'Couvrir et réfrigérer pendant au moins 3 heures ou jusqu\'à ce que le fudge soit ferme.',
    'Démouler et retirer la pellicule de plastique.',
    'Couper le fudge en carrés.'
  ],
  tags: ['chocolat', 'fudge', 'réfrigération'],
  marinatingTime: 180,
  notes: 'Le temps de marinade est de 3 heures. La recette ne précise pas le nombre exact de portions, mais indique \'une gang\'.',
  slug: 'fudge-aux-canneberges'
};
