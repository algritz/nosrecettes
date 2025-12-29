import { Recipe } from '@/types/recipe'

export const pouletAuxPommesEtAuxCanneberges: Recipe = {
  id: 'poulet-aux-pommes-et-aux-canneberges',
  title: 'Poulet aux pommes et aux canneberges',
  description:
    'Une recette savoureuse de poulet mariné avec des pommes et des canneberges, mijotée pour une texture tendre et une saveur équilibrée.',
  categories: ['Vollaille'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 25, max: 25 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '4 poitrines de poulet désossées, la peau et le gras enlevés (environ 1 1/4 lb/625 g en tout)',
    '3/4 t (180 ml) de sauce barbecue moutarde et miel',
    "1 c. à tab (15 ml) d'huile d'olive",
    '1 c. à tab (15 ml) de beurre',
    '2 pommes rouges (de type Spartan) pelées, le coeur enlevé et coupées en tranches',
    '1/4 t (60 ml) de canneberges séchées',
    'Poivre du moulin',
  ],
  instructions: [
    "Badigeonner le poulet d'environ 1/4 de tasse (60 ml) de la sauce barbecue. Laisser mariner quelques minutes, le temps de préparer les autres ingrédients.",
    "Dans un grand poêlon à surface antiadhésive, chauffer l'huile et le beurre à feu moyen-vif.",
    'Ajouter les poitrines de poulet et les cuire environ 5 minutes de chaque côté.',
    'Ajouter le reste de la sauce et les pommes et mélanger.',
    "Couvrir et laisser mijoter à feu doux pendant environ 10 minutes ou jusqu'à ce que le poulet ait perdu sa teinte rosée à l'intérieur et que les pommes soient tendres.",
    'Ajouter les canneberges, poivrer et mélanger.',
    'Servir avec couscous aux légumes.',
  ],
  tags: ['marinade', 'sauce barbecue', 'cuisine mijotée'],
  slug: 'poulet-aux-pommes-et-aux-canneberges',
}
