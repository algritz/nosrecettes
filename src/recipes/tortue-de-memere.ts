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
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/tortues_de_memere',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/tortues_de_memere',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/tortues_de_memere'
    }
  ],
  source: 'David Cloutier',
  slug: 'tortue-de-memere'
};
