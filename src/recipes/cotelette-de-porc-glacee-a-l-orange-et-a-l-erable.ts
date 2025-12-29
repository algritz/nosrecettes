import { Recipe } from '@/types/recipe'

export const coteletteDePorcGlaceeALOrangeEtALErable: Recipe = {
  id: 'cotelette-de-porc-glacee-a-l-orange-et-a-l-erable',
  title: "Côtelette de porc glacée à l'orange et à l'érable",
  description: '',
  categories: ['Porc', 'Plats principaux'],
  prepTime: { min: 5, max: 5 },
  cookTime: { min: 15, max: 15 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    "1/2 tasse de sirop d'érable du Québec",
    "1/2 tasse de marmelade d'orange",
    "1 tasse de jus d'orange",
    '3 c. à soupe de vinaigre blanc',
  ],
  instructions: [
    "Mélanger le sirop d'érable, la marmelade, le jus d'orange et le vinaigre dans un bol. Mettre de côté.",
    'Dans une poêle bien huilée, faire griller les côtelettes de porc des deux côtés à feu vif.',
    "Déglacer avec le mélange au sirop d'érable.",
    "Réduire le feu, couvrir et laisser cuire une vingtaine de minutes selon l'épaisseur de vos côtelettes.",
    'Enlever le couvercle et laisser épaissir la sauce quelques minutes.',
  ],
  tags: ['érable', 'orange', 'glace'],
  slug: 'cotelette-de-porc-glacee-a-l-orange-et-a-l-erable',
}
