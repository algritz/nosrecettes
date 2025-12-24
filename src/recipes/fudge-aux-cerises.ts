import { Recipe } from '@/types/recipe';

export const fudgeAuxCerises: Recipe = {
  id: 'fudge-aux-cerises',
  title: 'Fudge aux cerises',
  description: 'Un fudge aux cerises crémeux et chocolaté, parfait pour les amateurs de saveurs fruitées et sucrées.',
  categories: ['Pâtisseries et desserts'],
  prepTime: 10,
  cookTime: 10,
  servings: 20,
  difficulty: 'Facile',
  ingredients: [
    '3/4 tasse lait Carnation',
    '1 tasse sucre',
    '1/2 c. à thé sel',
    '2 tasses pépites de chocolat mi-sucré',
    '1 sachet (85 g) Jell-O aux cerises',
    '1 c. à thé vanille',
    '3/4 tasse cerises au marasquin égouttées, coupées en 2',
    '2 c. à soupe beurre'
  ],
  instructions: [
    'À feu moyen, mélanger le lait, le sucre et le sel.',
    'Amener à ébullition.',
    'Ajouter le Jell-O en poudre.',
    'Faire bouillir 4 minutes.',
    'Retirer du feu et ajouter le beurre, le chocolat, la vanille et les cerises et brasser.',
    'Mettre dans un plat préalablement beurré (8 pouces/20 cm).',
    'Laisser refroidir.'
  ],
  tags: ['chocolat', 'fruité', 'fudge'],
  slug: 'fudge-aux-cerises'
};
