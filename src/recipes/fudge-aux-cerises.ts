import { Recipe } from '@/types/recipe'

export const fudgeAuxCerises: Recipe = {
  id: 'fudge-aux-cerises',
  title: 'Fudge aux cerises',
  description:
    'Un fudge aux cerises crémeux et chocolaté, parfait pour les amateurs de saveurs fruitées et sucrées.',
  categories: ['Pâtisseries et desserts'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 10, max: 10 },
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
    '2 c. à soupe beurre',
  ],
  instructions: [
    'À feu moyen, mélanger le lait, le sucre et le sel.',
    'Amener à ébullition.',
    'Ajouter le Jell-O en poudre.',
    'Faire bouillir 4 minutes.',
    'Retirer du feu et ajouter le beurre, le chocolat, la vanille et les cerises et brasser.',
    'Mettre dans un plat préalablement beurré (8 pouces/20 cm).',
    'Laisser refroidir.',
  ],
  tags: ['chocolat', 'fruité', 'fudge'],
  images: [
    {
      small:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/fudge-aux-cerises',
      medium:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/fudge-aux-cerises',
      large:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/fudge-aux-cerises',
    },
  ],
  source: 'David Cloutier',
  slug: 'fudge-aux-cerises',
}
