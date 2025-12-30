import { Recipe } from '@/types/recipe';

export const cotelettesDePorcSavoureusesALaMijoteuse: Recipe = {
  id: 'cotelettes-de-porc-savoureuses-a-la-mijoteuse',
  title: 'Côtelettes de porc savoureuses, à la mijoteuse',
  description: 'Côtelettes de porc savoureuses, à la mijoteuse',
  categories: ['Plats principaux', 'Porc', 'Mijoteuse'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 240, max: 240 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1/4 tasse d’huile d’olive',
    '1 tasse de bouillon de poulet',
    '2 gousses d’ail émincées',
    '1 c. à soupe de paprika',
    '1 c. à soupe de poudre d’ail',
    '1 c. à soupe d’assaisonnement à volaille',
    '1 c. à thé d’origan séché',
    '1 c. à thé de basilic séché',
    '4 côtelettes de porc épaisses, désossées',
    'sel et poivre au goût'
  ],
  instructions: [
    'Dans un bol, mélanger les 8 premiers ingrédients; verser dans le bol de la mijoteuse.',
    'Faire de petites entailles dans les côtelettes de porc à l’aide d’un couteau pointu.',
    'Assaisonner de sel et poivre.',
    'Placer les côtelettes dans la mijoteuse, couvrir et cuire à puissance élevée (HIGH) pendant 4 heures.',
    'Badigeonner les côtelettes régulièrement avec la sauce.'
  ],
  tags: ['mijoteuse', 'porc', 'sauce'],
  source: 'David Cloutier',
  slug: 'cotelettes-de-porc-savoureuses-a-la-mijoteuse'
};
