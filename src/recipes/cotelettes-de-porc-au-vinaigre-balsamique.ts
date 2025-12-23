import { Recipe } from '@/types/recipe';

export const cotelettesDePorcAuVinaigreBalsamique: Recipe = {
  id: 'cotelettes-de-porc-au-vinaigre-balsamique',
  title: 'Côtelettes de porc au vinaigre balsamique',
  description: 'Une recette savoureuse de côtelettes de porc nappées d\'une sauce au vinaigre balsamique, simple à préparer et pleine de saveurs.',
  categories: ['Porc', 'Plats principaux'],
  prepTime: 5,
  cookTime: 10,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 c. à table d\'huile d\'olive',
    '2 c. à thé de fines herbes séchées à l\'italienne',
    '1 pincée de sel',
    '4 côtelettes de porc désossées, le gras enlevé',
    '2 c. à table de vinaigre balsamique',
    '1 c. à thé de fécule de maïs',
    '3/4 tasse de bouillon de poulet'
  ],
  instructions: [
    'Dans un bol, mélanger l\'huile, les fines herbes et le sel.',
    'Badigeonner les côtelettes de porc de ce mélange.',
    'Dans un poêlon, cuire les côtelettes à feu moyen-vif pendant environ 4 minutes de chaque côté ou jusqu\'à ce qu\'elles soient dorées et encore légèrement rosées à l\'intérieur. Réserver au chaud.',
    'Dégraisser le poêlon.',
    'Ajouter le vinaigre balsamique et chauffer à feu moyen pendant 30 secondes.',
    'Dans un bol, mélanger la fécule de maïs et le bouillon.',
    'Verser le mélange de fécule dans le poêlon et porter à ébullition en raclant le fond pour en détacher les particules.',
    'Réduire le feu et laisser mijoter pendant environ 1 minute ou jusqu\'à ce que la sauce soit épaissie.',
    'Remettre les côtelettes réservées et leur jus dans le poêlon et les réchauffer en les retournant pour bien les enrober.'
  ],
  tags: ['vinaigre balsamique', 'sauce', 'porc'],
  slug: 'cotelettes-de-porc-au-vinaigre-balsamique'
};
