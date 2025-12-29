import { Recipe } from '@/types/recipe'

export const saladeRafraichissanteALOrange: Recipe = {
  id: 'salade-rafraichissante-a-l-orange',
  title: "Salade rafraîchissante à l'orange",
  description:
    "Une salade fraîche avec des segments d'orange, des légumes croquants et une vinaigrette légère à l'huile d'olive et miel.",
  categories: ['Salades'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 0, max: 0 },
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    'Salade 1 orange en petits morceaux',
    '2 oignons verts en rondelles',
    '3 oz (100 g) bébé épinards',
    '6 radis tranchés fins',
    '½ poivron jaune en cubes',
    "¼ tasse (60 ml) huile d'olive extra vierge",
    '½ citron frais pressé',
    '1 c. à soupe (15 ml) de miel',
    '1 pincée poivre de Cayenne',
  ],
  instructions: [
    "Dans un saladier, mélanger l'orange, les oignons, les épinards, les radis et le poivron.",
    'Dans un bol, mélanger les ingrédients de la vinaigrette.',
    'Avant de servir, arroser la salade de la vinaigrette et brasser.',
  ],
  tags: ['fraîcheur', 'vinaigrette', 'citrus'],
  slug: 'salade-rafraichissante-a-l-orange',
}
