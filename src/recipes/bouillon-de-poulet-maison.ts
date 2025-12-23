import { Recipe } from '@/types/recipe';

export const bouillonDePouletMaison: Recipe = {
  id: 'bouillon-de-poulet-maison',
  title: 'Bouillon de poulet maison',
  description: 'Bouillon de poulet maison',
  categories: ['Soupes'],
  prepTime: 5,
  cookTime: 50,
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
  notes: 'Excellente base de soupe.',
  slug: 'bouillon-de-poulet-maison'
};
