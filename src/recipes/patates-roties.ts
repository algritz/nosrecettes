import { Recipe } from '@/types/recipe';

export const patatesRoties: Recipe = {
  id: 'patates-roties',
  title: 'Patates rôties',
  description: '',
  categories: ['Végétarien', 'Plats principaux'],
  prepTime: 15,
  cookTime: 60,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '6 à 8 pommes de terre Russet',
    'sel et poivre au goût',
    'une à deux pincées de poivre de Cayenne',
    'une à deux pincées d’herbes de Provence',
    '2 c. à soupe d’huile d’olive'
  ],
  instructions: [
    'Préchauffer le four à 425°F.',
    'Tapisser une tôle à biscuits de papier parchemin ou un tapis de cuisson en silicone.',
    'Combiner tous les ingrédients dans un bol et mélanger pour couvrir les pommes de terre d’assaisonnements.',
    'Disposer uniformément les rondelles de pommes de terre sur la tôle.',
    'Cuire au four 15 minutes.',
    'Retirer du four, retourner les pommes de terre sur elles-mêmes et remettre à cuire environ 30 minutes.',
    'Au besoin, après 15 minutes, tourner les pommes de terre à nouveau.',
    'Les pommes de terre devraient être croustillantes sur les bords et tendres au centre.'
  ],
  tags: ['rôties', 'croustillantes', 'pommes de terre'],
  slug: 'patates-roties'
};
