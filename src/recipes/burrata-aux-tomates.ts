import { Recipe } from '@/types/recipe'

export const burrataAuxTomates: Recipe = {
  id: 'burrata-aux-tomates',
  title: 'Burrata aux tomates',
  description: 'La meilleure des Burrata Burrata aux tomates',
  categories: ['Entrées', 'Végétarien'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 0, max: 0 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '3 tomates',
    '1/2 botte de basilic',
    '1/2 botte de persil',
    '1/2 botte de ciboulette',
    '3 c. à soupe de vinaigre balsamique',
    "3 c. à soupe d'huile d'olive",
    'Sel et poivre au goût',
    '1 burrata d’environ 225 g égouttée',
    '1 pain baguette tranché',
  ],
  instructions: [
    'Couper les tomates en petits dés et verser dans un saladier.',
    'Hacher finement les fines herbes et verser dans le saladier.',
    "Ajouter le vinaigre balsamique et l'huile au saladier.",
    'Saler, poivrer et bien brasser.',
    "Mettre la burrata au centre d'une grande assiette.",
    'Verser le mélange de tomates et de fines herbes autour de la burrata.',
    'Servir avec du pain baguette.',
  ],
  tags: ['tomates', 'burrata', 'salade'],
  slug: 'burrata-aux-tomates',
}
