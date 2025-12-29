import { Recipe } from '@/types/recipe';

export const bouillonDePouletMaison: Recipe = {
  id: 'bouillon-de-poulet-maison',
  title: 'Bouillon de poulet maison',
  description: 'Bouillon de poulet maison',
  categories: ['Soupes'],
  prepTime: { min: 5, max: 5 },
  cookTime: { min: 50, max: 50 },
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    'Une carcasse de poulet cuit',
    'Bonne quantité d\'eau'
  ],
  instructions: [
    'Prendre votre carcasse cuite de poulet.',
    'Mettre dans un gros chaudron.',
    'Faire bouillir 30 minutes.',
    'Filtrer au tamis et congeler.'
  ],
  tags: ['bouillon', 'poulet', 'soupe'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/bouillon-de-poulet-maison',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/bouillon-de-poulet-maison',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/bouillon-de-poulet-maison'
    }
  ],
  source: 'David Cloutier',
  notes: 'Excellente base de soupe.',
  slug: 'bouillon-de-poulet-maison'
};
