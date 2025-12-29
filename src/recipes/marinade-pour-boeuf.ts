import { Recipe } from '@/types/recipe';

export const marinadePourBoeuf: Recipe = {
  id: 'marinade-pour-boeuf',
  title: 'Marinade pour boeuf',
  description: '',
  categories: ['Marinade'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 0, max: 0 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 cuillères à soupe de bouillon de bœuf ou de vin rouge',
    '2 cuillères à soupe de vinaigre balsamique',
    '1 cuillère à soupe de sauce Worcestershire',
    '1/4 de tasse (65 ml) d’huile d’olive',
    '1/2 cuillère à thé de poudre d’oignon',
    '1/2 cuillère à thé de poudre d’ail',
    '1 cuillère à thé d’épices à steak de Montréal',
    '1/2 cuillère à thé de thym',
    '1/2 cuillère à thé d’origan',
    'Sel et poivre',
    '2 feuilles de laurier'
  ],
  instructions: [
    'Coupez votre bœuf en cube.',
    'Mélanger tous les ingrédients ensemble dans un bol.',
    'Combinez le bœuf et la marinade dans un grand sac ziplock.',
    'Réfrigérer pendant 6 à 8 heures ou encore mieux, toute la nuit.'
  ],
  tags: ['marinade', 'bœuf', 'réfrigération'],
  marinatingTime: { min: 360, max: 360 },
  slug: 'marinade-pour-boeuf'
};
