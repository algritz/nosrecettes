import { Recipe } from '@/types/recipe';

export const filetDePorcAuxEpices: Recipe = {
  id: 'filet-de-porc-aux-epices',
  title: 'Filet de porc aux épices',
  description: '',
  categories: ['Porc'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 30, max: 30 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 filet de porc',
    '3 gousses d\'ail',
    '5 ml de paprika fumé',
    '5 ml de paprika régulier',
    '5 ml de poudre d\'oignon',
    '5 ml de poudre d\'ail',
    '1/3 de tasse de sauce chili',
    '5 ml de sel',
    '10 ml de poivre',
    '1 branche de thym',
    '1 bière'
  ],
  instructions: [
    'Mélanger le porc avec les épices, la sauce chili et la bière et laisser mariner quelque heures.',
    'Jeter la marinade et faire saisir les filets de porc dans un peu d\'huile.',
    'Enfourner à 350 F à découvert environ 30 minutes.',
    'Laisser reposer les filets de porc 5 à 10 minutes et servir avec la sauce brune.'
  ],
  tags: ['épices', 'marinade', 'grill'],
  notes: 'Source: Les animations PACE-Âge',
  slug: 'filet-de-porc-aux-epices'
};
