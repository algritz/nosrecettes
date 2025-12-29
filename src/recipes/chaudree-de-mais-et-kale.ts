import { Recipe } from '@/types/recipe';

export const chaudreeDeMaisEtKale: Recipe = {
  id: 'chaudree-de-mais-et-kale',
  title: 'Chaudrée de maïs et kale',
  description: 'Une chaudrée crémeuse de maïs et kale, parfumée au bacon et aux épices, parfaite pour un repas réconfortant.',
  categories: ['Soupes', 'Plats principaux'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 35, max: 35 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '4 tasses de bouillon de poulet',
    '1 1/2 tasse de lait',
    '1 tasse de crème épaisse',
    '4 tasses maïs congelé',
    '4 tranches de bacon cuit, haché',
    '1 gros oignon, coupé en petits dés',
    '2 branches de céleri, coupées en petits dés',
    '3 pommes de terre Yukon moyennes, pelées et coupées en cube',
    '2 cuillères à café de sel',
    '1/4 cuillère à café de poivre noir',
    '1/4 cuillère à café de poivre de Cayenne, ou au goût',
    '1 tasse de chou kale hachée',
    '2 cuillères à soupe de persil, hachée, pour garnir'
  ],
  instructions: [
    'Cuire le bacon, l\'éponger et le couper en morceaux.',
    'Dans un grand chaudron, faire sauter l\'oignon haché et le céleri dans le gras de bacon, puis cuire à découvert, en remuant de temps à autre, jusqu\'à ce que l\'oignon soit tendre (7-8 min).',
    'Ajouter le bouillon, 1 1/2 tasse de lait et la crème dans la casserole et porter à ébullition.',
    'Ajouter les pommes de terre tranchées, le maïs, le sel, le poivre noir et le poivre de Cayenne.',
    'Porter à légère ébullition puis laisser mijoter à découvert 20 à 30 minutes ou jusqu\'à ce que les pommes de terre soient tendres.',
    'Incorporer le chou kale et le bacon, puis brasser le tout jusqu\'à ce que le chou kale tombe.',
    'Assaisonner avec du sel et du poivre selon votre goût.',
    'Verser dans des bols et garnir de persil haché.'
  ],
  tags: ['crémeux', 'maïs', 'bacon'],
  slug: 'chaudree-de-mais-et-kale'
};
