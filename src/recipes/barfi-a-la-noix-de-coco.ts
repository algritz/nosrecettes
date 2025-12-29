import { Recipe } from '@/types/recipe'

export const barfiALaNoixDeCoco: Recipe = {
  id: 'barfi-a-la-noix-de-coco',
  title: 'Barfi à la noix de coco',
  description:
    'Un délicieux dessert indien à base de noix de coco et de safran, garni de pistaches hachées.',
  categories: ['Pâtisseries et desserts'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 14, max: 14 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '3 ml de safran',
    '200 ml de lait',
    '375 ml de sucre',
    '3 gousses de cardamome, écrasées',
    '500 ml de noix de coco séchée',
    'Pistaches hachées pour la garniture',
  ],
  instructions: [
    'Tremper le safran dans 1 cuillère à soupe de lait.',
    'Réchauffer le reste du lait dans une casserole jusqu’à ébullition.',
    'Réduire le feu, ajouter le sucre et la cardamome et laisser mijoter 6-8 minutes.',
    'Ajouter la noix de coco et le mélange de lait et de safran et remuer afin d’éviter les grumeaux.',
    'Laisser mijoter à feu doux pour 5 minutes en remuant.',
    'Déposer le mélange dans un plat carré, préalablement graissé.',
    'Laisser refroidir avant de couper en petits carrés.',
    'Garnir de pistaches hachées.',
  ],
  tags: ['noix de coco', 'safran', 'garnir pistaches'],
  slug: 'barfi-a-la-noix-de-coco',
}
