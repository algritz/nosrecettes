import { Recipe } from '@/types/recipe';

export const miniPainDeViande: Recipe = {
  id: 'mini-pain-de-viande',
  title: 'Mini pain de Viande',
  description: '',
  categories: ['Plats principaux'],
  prepTime: 20,
  cookTime: 15,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 lbs de boeuf, porc ou veau haché',
    '1 petit oignon',
    'Origan',
    '1 oeuf battu',
    'Worcestershire',
    'tabasco',
    '1/2 tasse de chapelure',
    '1/2 tasse de Ketchup'
  ],
  instructions: [
    'Préchauffer le four à 350 F',
    'Mélanger tous les ingrédients ensemble',
    'Façonner en forme de petit pain ou moule à muffin',
    'Cuire au four 10 à 15 minutes'
  ],
  tags: ['bœuf', 'moule à muffin', 'cuisine américaine'],
  notes: 'Source: Mona Turcotte',
  slug: 'mini-pain-de-viande'
};
