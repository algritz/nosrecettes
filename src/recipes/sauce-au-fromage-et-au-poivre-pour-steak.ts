import { Recipe } from '@/types/recipe';

export const sauceAuFromageEtAuPoivrePourSteak: Recipe = {
  id: 'sauce-au-fromage-et-au-poivre-pour-steak',
  title: 'Sauce au fromage et au poivre pour steak',
  description: 'Sauce au fromage et au poivre pour steak',
  categories: ['Sauces'],
  prepTime: 5,
  cookTime: 5,
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    'Boursin cuisine au Poivre',
    '1/4 de tasse de crème 35%',
    'Steak de votre choix (boeuf, orignal etc.)'
  ],
  instructions: [
    'Faire fondre le Boursin au poivre et ajouter la crème.',
    'Lorsque le tout mijote, verser sur votre steak.'
  ],
  tags: ['fromage', 'poivre', 'sauce'],
  notes: 'Accompagne merveilleusement bien le steak d\'orignal. Accompagnement: Excellent sur les patates pillées.',
  slug: 'sauce-au-fromage-et-au-poivre-pour-steak'
};
