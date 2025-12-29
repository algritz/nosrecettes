import { Recipe } from '@/types/recipe'

export const croissantSMores: Recipe = {
  id: 'croissant-s-mores',
  title: "Croissant s'mores",
  description:
    'Une recette de croissants farcis de chocolat, guimauves et biscuits Graham, puis cuits au four et arrosés de chocolat fondu.',
  categories: ['Pâtisseries et desserts'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 15, max: 15 },
  servings: 16,
  difficulty: 'Facile',
  ingredients: [
    'Farine tout usage, pour rouler',
    '2 tubes de pâte à croissant style Pillsbury',
    '2 tasse de mini pépites de chocolat',
    '1 tasse de mini guimauves',
    '1 tasse de biscuits Graham, cassés en petits morceaux',
  ],
  instructions: [
    "Dans un bol allant au micro-ondes, faire fondre 1 tasse de pépites de chocolat en brassant tous les 30 secondes jusqu'à ce qu'elles soient complètement fondues. Mettre de côté.",
    'Sur une surface légèrement farinée, dérouler les croissants et séparer en triangles individuels.',
    "Dans chaque croissant, étalez 1 cuillère à café de chocolat fondu, puis garnissez d'une petite poignée de mini pépites de chocolat, de guimauves et de biscuits Graham.",
    'Rouler en forme de croissant et transférer sur une plaque à pâtisserie.',
    "Cuire à 325 °F jusqu'à ce que doré, 15 minutes.",
    'Arroser de chocolat fondu et servir.',
  ],
  tags: ['chocolat', 'guimauves', 'pâtisserie'],
  slug: 'croissant-s-mores',
}
