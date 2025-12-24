import { Recipe } from '@/types/recipe';

export const filetDePorcWhiskyEtErable: Recipe = {
  id: 'filet-de-porc-whisky-et-erable',
  title: 'Filet de porc whisky et érable',
  description: '',
  categories: ['Vollaille', 'Plats principaux'],
  prepTime: 15,
  cookTime: 25,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 filets de porc',
    '65 ml (1/4 tasse) de whisky',
    '65 ml (1/2 tasse) de sirop d’érable',
    '30 ml (2 c. à table) de moutarde de Dijon',
    '125 ml (1/2 tasse) de persil italien haché',
    '30 ml (2 c. à table) de cidre ou de jus de pomme',
    '3 ml (1/2 c. à thé) de piments chili rouges, broyés'
  ],
  instructions: [
    'Dans un bol en verre, mélangez le whisky, le sirop d’érable, la moutarde de Dijon, le persil coupé, le vinaigre de cidre et les flocons de piment rouge.',
    'Ajoutez le filet de porc, et enrobez-le bien de marinade.',
    'Couvrez d’une pellicule de plastique et réfrigérez environ 12 heures.',
    'Préchauffez le barbecue à puissance élevée et huilez la grille.',
    'Déposez les filets sur la grille et baissez la température du barbecue à feu moyen à doux.',
    'Grillez la viande environ 20-25 minutes en la retournant et en la badigeonnant de marinade régulièrement.',
    'Trancher et server'
  ],
  tags: ['barbecue', 'marinade sèche', 'fumoir'],
  slug: 'filet-de-porc-whisky-et-erable'
};
