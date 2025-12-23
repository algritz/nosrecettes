import { Recipe } from '@/types/recipe';

export const browniesAuNutella: Recipe = {
  id: 'brownies-au-nutella',
  title: 'Brownies au Nutella',
  description: 'Délicieux brownies au Nutella avec un glaçage crémeux au Nutella et fromage à la crème.',
  categories: ['Pâtisseries et desserts'],
  prepTime: 25,
  cookTime: 30,
  servings: 15,
  difficulty: 'Facile',
  ingredients: [
    '1/2 tasse de beurre ramolli',
    '1/4 de tasse de sucre',
    '1/4 de tasse de cassonade',
    '1 c. à thé de vanille',
    '2 oeufs battus',
    '1 tasse de Nutella',
    '1/2 tasse de farine',
    '1 c. à soupe de cacao',
    '1/4 de c. à thé de sel',
    'Glaçage:',
    '1/3 de tasse Nutella',
    '1/4 de tasse de fromage à la crème ramolli'
  ],
  instructions: [
    'Préchauffer le four à 350 °F.',
    'Tapisser un plat de cuisson carré de 20 cm (8 po) de papier parchemin.',
    'Dans un bol, mélanger le beurre avec le sucre et la cassonade jusqu’à l’obtention d’un mélange homogène.',
    'Ajouter la vanille, puis incorporer graduellement les oeufs battus.',
    'Ajouter le Nutella et mélanger jusqu’à l’obtention d’une consistance homogène.',
    'Au-dessus d’un autre bol, tamiser la farine, le cacao et le sel. Remuer.',
    'Incorporer au mélange au chocolat.',
    'Verser la pâte dans le plat de cuisson et égaliser la surface.',
    'Cuire au four de 25 à 30 minutes.',
    'Pendant ce temps, fouetter le Nutella pour le glaçage avec le fromage à la crème dans un bol.',
    'Retirer le brownie du four et laisser tiédir de 5 à 10 minutes.',
    'Napper le brownie de glaçage.',
    'Laisser tiédir complètement sur une grille avant de démouler et de couper en carrés.'
  ],
  tags: ['Nutella', 'glaçage', 'pâtisserie'],
  slug: 'brownies-au-nutella'
};
