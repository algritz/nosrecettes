import { Recipe } from '@/types/recipe';

export const pimentsVodkaChocolat: Recipe = {
  id: 'piments-vodka-chocolat',
  title: 'Piments vodka chocolat',
  description: 'Sucré et piquant Piments vodka chocolat',
  categories: ['Végétarien'],
  prepTime: 25,
  cookTime: 15,
  servings: 1,
  difficulty: 'Facile',
  ingredients: [
    '6 piments épicés selon votre goût de différentes couleurs',
    '350 ml de vodka',
    '150 g de chocolat noir',
    'Pincée de poivre noir',
    '100 g de chocolat blanc',
    'Mettre des gang de latex'
  ],
  instructions: [
    'Couper les piments en rondelles de 1 1/2 cm et jeter les bouts',
    'Enlever les graines et les veines de 6 piments',
    'Faire mariner les piments pendant 4-12 heures dans la vodka.',
    'Faire fondre le chocolat noir, ajouter du poivre noir et remuer pour bien mélanger.',
    'À l\'aide d\'une fourchette, tremper les piments dans le chocolat noir, enlever le surplus de chocolat et déposer sur un papier parchemin ou ciré.',
    'Faire fondre le chocolat blanc et arroser délicatement les piments avec. (Si le chocolat blanc est trop épais, ajouter un peu d\'huile végétale)',
    'Réfrigérer environ 30-60 minutes pour faire durcir.',
    'Faites vous plaisir'
  ],
  tags: ['chocolat', 'piquant', 'vodka'],
  marinatingTime: 240,
  slug: 'piments-vodka-chocolat'
};
