import { Recipe } from '@/types/recipe';

export const tortueDeMemere: Recipe = {
  id: 'tortue-de-memere',
  title: 'Tortue de mémère',
  description: '',
  categories: ['Pâtisseries et desserts'],
  prepTime: { min: 5, max: 5 },
  cookTime: { min: 15, max: 15 },
  servings: 20,
  difficulty: 'Facile',
  ingredients: [
    '1/2 petite barre de paraffine',
    '2 tasses de chocolat en chipit',
    '3/4 de tasse de beurre d\'arachides',
    '2 tasses de sucre en poudre',
    '6 tasses de Corn Flakes'
  ],
  instructions: [
    'Faire fondre la paraffine et le chocolat.',
    'Ajoutez les autres ingrédients et bien mélanger.',
    'Déposer par petites cuillères sur le papier ciré.',
    'Mettre au réfrigérateur.'
  ],
  tags: ['chocolat', 'corn flakes', 'réfrigération'],
  slug: 'tortue-de-memere'
};
