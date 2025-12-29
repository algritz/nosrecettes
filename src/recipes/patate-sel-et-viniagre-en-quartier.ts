import { Recipe } from '@/types/recipe';

export const patateSelEtViniagreEnQuartier: Recipe = {
  id: 'patate-sel-et-viniagre-en-quartier',
  title: 'Patate sel et viniagre en quartier',
  description: 'Une recette simple de pommes de terre grelots assaisonnées et rôties, finissant avec un filet de vinaigre de malt pour une touche acidulée.',
  categories: ['Végétarien', 'Plats principaux'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 45, max: 45 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 sac Pommes de terre grelots',
    '1 c. à table de sel',
    '1 1/2 c. à table Huile d’olive',
    '½ c. à thé de sel',
    'c. à table Vinaigre de malt'
  ],
  instructions: [
    'Couper les pommes de terre grelots en deux. Selon leur taille, les couper en quatre.',
    'Mélanger les pommes de terre à une c. à table de sel dans une casserole de taille moyenne; couvrir d’eau, jusqu’à 1 pouce plus haut que les pommes de terre.',
    'Porter à ébullition, réduire le feu et laisser mijoter jusqu’à ce que les pommes de terre soient tendres, soit environ de 10 à 15 minutes.',
    'Égoutter et sécher délicatement avec du papier ou un linge.',
    'Pendant la cuisson des pommes de terre, préchauffer le four à 425 °F.',
    'Mélanger les pommes de terre à l’huile d’olive et au sel restant.',
    'Étaler sur une plaque à pâtisserie tapissée de papier parchemin, et cuire de 25 à 30 minutes, jusqu’à ce que les pommes de terre soient dorées et croustillantes.',
    'Retirer du four et verser un filet de vinaigre de malt.'
  ],
  tags: ['rôties', 'acidulé', 'pommes de terre'],
  slug: 'patate-sel-et-viniagre-en-quartier'
};
