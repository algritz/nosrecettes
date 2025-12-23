import { Recipe } from '@/types/recipe';

export const muffinsCitronChocolat: Recipe = {
  id: 'muffins-citron-chocolat',
  title: 'Muffins citron chocolat',
  description: 'Une recette de muffins au citron et chocolat, facile à préparer et parfaite pour une collation ou un dessert.',
  categories: ['Pâtisseries et desserts'],
  prepTime: 20,
  cookTime: 20,
  servings: 12,
  difficulty: 'Facile',
  ingredients: [
    '120g de sucre',
    'le zeste de un citron râpé',
    '2 œufs',
    'une pincée de sel',
    '150g de yogourt nature',
    'le jus de 1 citron',
    '100 ml d\'huile végétale',
    '200g farine',
    '8g de poudre à pâte',
    '50 g de pépites de chocolat'
  ],
  instructions: [
    'Mettre le four à 350 C.',
    'Mélanger le sucre et le zeste de citron en écrasant bien avec le dos d\'une cuillère afin de faire un sucre au zeste de citron.',
    'Ajouter deux œufs et une pincée de sel et bien mélanger.',
    'Ajouter le yogourt et le jus de citron et bien brasser.',
    'Incorporer l\'huile et remuer à nouveau.',
    'À l\'aide d\'un tamis, ajouter la farine et la poudre à pâte et mélanger de façon homogène.',
    'Ajouter le chocolat et brasser à nouveau.',
    'Mettre dans des moules à muffin.',
    'Vous pouvez saupoudrer du sucre ou d\'autres pépites de chocolat avant de mettre au four.',
    'Faire cuire au four 20 minutes.',
    'Laisser tiédir avant de déguster.'
  ],
  tags: ['citron', 'chocolat', 'pâtisserie'],
  slug: 'muffins-citron-chocolat'
};
