import { Recipe } from '@/types/recipe';

export const poutineDeLegumesRacines: Recipe = {
  id: 'poutine-de-legumes-racines',
  title: 'Poutine de légumes racines',
  description: 'Une version végétarienne de la poutine, utilisant des légumes racines croustillants et une sauce savoureuse au bouillon de poulet maison.',
  categories: ['Végétarien', 'Plats principaux'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 30, max: 30 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '6 tasses de légumes racines au choix (pommes de terre, carottes, panais, patates douces, etc.)',
    '¼ tasse d’huile végétale',
    '1 ½ c. à thé de paprika',
    '1 c. à thé de poudre d’oignon',
    '½ c. à thé de poudre d’ail',
    '½ c. à thé de sel',
    '½ c. à thé de poivre du moulin',
    '2 tasses de bouillon de poulet maison',
    '¼ tasse de sauce tamari',
    '2 c. à table de sirop d’érable',
    '3 c. à table de fécule de maïs, diluée dans 3 c. à soupe d’eau froide',
    'Fromage en grains',
    'Oignons verts, émincés pour décorer'
  ],
  instructions: [
    'Préchauffer le four à 425 °F et placer la grille au centre. Tapisser une plaque à cuisson de papier parchemin, puis réserver.',
    'Au besoin, peler les légumes racines.',
    'Découper des bâtonnets en forme de frites afin d’en obtenir environ 6 tasses.',
    'Dans un bol, mélanger les bâtonnets de légumes racines avec l’huile végétale, puis réserver.',
    'Dans un petit bol, combiner le paprika, la poudre d’oignon, la poudre d’ail, le sel et le poivre, puis saupoudrer cet assaisonnement sur les bâtonnets de légumes racines.',
    'Bien remuer, puis étaler à plat sur la plaque.',
    'Cuire au four pendant 25 minutes.',
    'Remuer délicatement les frites et poursuivre la cuisson pendant 5 minutes ou jusqu\'à ce que les frites soient prêtes.',
    'Dans une petite casserole, combiner tous les ingrédients pour la sauce. Porter à ébullition en fouettant constamment.',
    'Réduire le feu et laisser mijoter pendant 5 minutes.',
    'Garnir les frites de légumes racines avec le fromage en grains et les oignons verts, puis couvrir de sauce pour servir.'
  ],
  tags: ['croustillant', 'sauce maison', 'végétarien'],
  slug: 'poutine-de-legumes-racines'
};
