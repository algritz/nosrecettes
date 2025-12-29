import { Recipe } from '@/types/recipe'

export const fudgeDivin: Recipe = {
  id: 'fudge-divin',
  title: 'Fudge divin',
  description: '',
  categories: ['Pâtisseries et desserts'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 30, max: 30 },
  servings: 35,
  difficulty: 'Facile',
  ingredients: [
    '4 tasses de sucre',
    '1 ½ tasse de lait',
    '¾ tasse de beurre',
    '1 paquet de capuchons de chocolat mi-sucré (300 g)',
    "2 tasses de guimauves (La grosseur n'a pas d'importance)",
    '1 ½ c. à thé de vanille',
  ],
  instructions: [
    'Beurrer un moule de 12 x 7 x 1 ½ pouce.',
    'Mélanger le sucre, le lait et le beurre.',
    'Cuire à feu moyen en brassant souvent, jusqu’à 234° au thermomètre à bonbon ou jusqu’à ce que quelques gouttes du mélange forment une boule dans un verre d’eau froide.',
    'Retirer du feu.',
    'Ajouter les brisures de chocolat, les guimauves et la vanille.',
    'Battre vigoureusement jusqu’à ce que tout soit complètement fondu.',
    'Verser dans le moule et réfrigérer jusqu’à ferme.',
  ],
  tags: ['chocolat', 'guimauve', 'fudge'],
  slug: 'fudge-divin',
}
