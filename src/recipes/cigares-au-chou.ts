import { Recipe } from '@/types/recipe';

export const cigaresAuChou: Recipe = {
  id: 'cigares-au-chou',
  title: 'Cigares au chou',
  description: '',
  categories: ['Plats principaux'],
  prepTime: 45,
  cookTime: 60,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 lbs de bœuf haché',
    '1 gros oignon',
    '1 branche de céleri',
    '½ piment vert',
    '¾ tasse de riz',
    '¼ tasse de beurre',
    '½ tasse de jus de tomates'
  ],
  instructions: [
    'Ébouillanter quelques feuilles de chou.',
    'Faire revenir dans une poêle l\'oignon, le céleri, le piment et ajouter la viande, le sel et le poivre.',
    'Faire bouillir le riz.',
    'Ajouter le riz à la viande non-cuite.',
    'Mettre la viande dans le chou que vous attachez avec un cure-dent.',
    'Mettre le jus de tomates avec un peu d\'eau dans le chaudron et ajouter les cigares au chou.',
    'Laisser mijoter une heure.'
  ],
  tags: ['chou', 'bœuf', 'mijoter'],
  slug: 'cigares-au-chou'
};
