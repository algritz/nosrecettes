import { Recipe } from '@/types/recipe';

export const cremeDeLegume: Recipe = {
  id: 'creme-de-legume',
  title: 'Crème de légume',
  description: '',
  categories: ['Soupes'],
  prepTime: 45,
  cookTime: 40,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '15 ml de beurre',
    '1 branche de céleri',
    '1 grosse carotte',
    '1 grosse pomme de terre',
    '1 oignon moyen',
    '3 gousses d\'ail',
    '1 feuille de laurier',
    '1 ml de thym',
    '375 ml de lait',
    'Sel et poivre au goût',
    '500 ml de bouillon de poulet (Pour obtenir ce bouillon mêler 25 ml de bovril 500 ml d\'eau)'
  ],
  instructions: [
    'Écrasez l\'ail.',
    'Émincez les légumes.',
    'Faire fondre le beurre dans une casserole.',
    'Ajoutez les légumes et remuez.',
    'Ajoutez le bouillon de poulet, le lait et les épices et cuire à feu doux pendant 30 minute.',
    'Remuez de temps à autre.',
    'Séparez les légumes du bouillon à l\'aide d\'un tamis.',
    'Conservez les deux.',
    'Réduire les légumes en purée à l\'aide d\'un malaxeur.',
    'Remettre le bouillon dans la purée de légume et remuez.'
  ],
  tags: ['purée', 'légumes', 'soupe'],
  notes: 'Temps de préparation total : 45 minutes. Source : Gisèle Bellavance.',
  slug: 'creme-de-legume'
};
