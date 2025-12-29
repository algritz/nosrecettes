import { Recipe } from '@/types/recipe';

export const painDoreAuxBleuets: Recipe = {
  id: 'pain-dore-aux-bleuets',
  title: 'Pain doré aux bleuets',
  description: 'Un pain doré aux bleuets, croustillant à l\'extérieur et moelleux à l\'intérieur, servi avec du sirop d\'érable.',
  categories: ['Déjeuners', 'Pâtisseries et desserts'],
  prepTime: { min: 25, max: 25 },
  cookTime: { min: 45, max: 45 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '3/4 de tasse de cassonade tassée',
    '1 c. à thé de cannelle',
    '12 tranches de pain',
    '2 tasses de bleuets frais (congelés peut faire aussi)',
    '5 oeufs',
    '1 tasse de crème à cuisson 35% ou champêtre 15%',
    '3/4 de tasse de lait',
    '1/2 c. à thé de sel'
  ],
  instructions: [
    'Mélanger la cassonade avec la cannelle.',
    'Déposer le 1/4 du mélange de cassonade dans un plat allant au four de 13\' x 9\'.',
    'Y déposer 6 tranches de pain et un autre 1/4 du mélange de cassonade.',
    'Parsemer le dessus de bleuets.',
    'Déposer les 6 dernières tranches de pain sur les bleuets et couvrir avec le reste du mélange de cassonade.',
    'Dans un bol, battre les œufs, la crème, le lait et le sel.',
    'Verser uniformément sur le pain et presser légèrement.',
    'Couvrir d\'une pellicule de plastique et réfrigérer au minimum 2 heures ou toute la nuit.',
    'Cuire au four, à découvert, à 350°F de 40 à 45 minutes ou jusqu\'à ce que le tout soit gonflé et doré.',
    'Servir chaud avec du sirop d\'érable.'
  ],
  tags: ['pâtisserie', 'déjeuner', 'bleuets'],
  slug: 'pain-dore-aux-bleuets'
};
