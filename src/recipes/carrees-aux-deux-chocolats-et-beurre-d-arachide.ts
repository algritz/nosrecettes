import { Recipe } from '@/types/recipe';

export const carreesAuxDeuxChocolatsEtBeurreDArachide: Recipe = {
  id: 'carrees-aux-deux-chocolats-et-beurre-d-arachide',
  title: 'Carrées aux deux chocolats et beurre d\'arachide',
  description: 'Carrées aux deux chocolats et beurre d\'arachide',
  categories: ['Pâtisseries et desserts'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 15, max: 15 },
  servings: 24,
  difficulty: 'Facile',
  ingredients: [
    '1 tasse de chocolat noir fondu',
    '1 tasse de chocolat blanc fondu',
    '2 tasses de beurre d\'arachide'
  ],
  instructions: [
    'Faire fondre ensemble le chocolat noir et le beurre d\'arachide',
    'Verser dans un plat carré style pyrex',
    'Faire fondre le chocolat blanc et verser sur le premier mélange en brassant délicatement pour marbrer',
    'Réfrigérer une nuit',
    'Couper et déguster'
  ],
  tags: ['chocolat', 'marbré', 'réfrigération'],
  slug: 'carrees-aux-deux-chocolats-et-beurre-d-arachide'
};
