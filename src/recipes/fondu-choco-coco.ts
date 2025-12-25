import { Recipe } from '@/types/recipe';

export const fonduChocoCoco: Recipe = {
  id: 'fondu-choco-coco',
  title: 'Fondu choco-coco',
  description: 'Une fondue chocolat-coco simple à réaliser, idéale pour partager en famille ou entre amis.',
  categories: ['Desserts'],
  prepTime: 15,
  cookTime: 10,
  servings: 3,
  difficulty: 'Facile',
  ingredients: [
    '250g de chocolat noir en pastille',
    '1 tasse de lait de coco non sucré',
    '3 c. à soupe de sucre',
    'Graine d\'une gousse de vanille',
    'Noix de coco râpée',
    'Fruits à fondu'
  ],
  instructions: [
    'Mélanger le lait de coco, le sucre et la vanille, porter à peine à ébullition et verser sur les pastilles de chocolat.',
    'Brasser le tout jusqu\'à ce que le chocolat fonde, sans refaire chauffer.',
    'Faire cuire la noix de coco râpée à 350°C sur une plaque pendant 3 minutes.',
    'Tremper vos fruits dans la fondu, puis dans la noix de coco et déguster.'
  ],
  tags: ['chocolat', 'coco', 'fondue'],
  slug: 'fondu-choco-coco'
};
