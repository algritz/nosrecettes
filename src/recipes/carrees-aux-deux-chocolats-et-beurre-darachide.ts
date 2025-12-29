import { Recipe } from '@/types/recipe';

export const carreesAuxDeuxChocolatsEtBeurreDarachide: Recipe = {
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
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/carrees-aux-deux-chocolats-et-beurre-d-arachide',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/carrees-aux-deux-chocolats-et-beurre-d-arachide',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/carrees-aux-deux-chocolats-et-beurre-d-arachide'
    }
  ],
  source: 'David Cloutier',
  slug: 'carrees-aux-deux-chocolats-et-beurre-darachide'
};
