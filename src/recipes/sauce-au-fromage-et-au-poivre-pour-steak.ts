import { Recipe } from '@/types/recipe';

export const sauceAuFromageEtAuPoivrePourSteak: Recipe = {
  id: 'sauce-au-fromage-et-au-poivre-pour-steak',
  title: 'Sauce au fromage et au poivre pour steak',
  description: 'Sauce au fromage et au poivre pour steak',
  categories: ['Sauces'],
  prepTime: { min: 5, max: 5 },
  cookTime: { min: 5, max: 5 },
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
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/sauce-au-fromage-et-au-poivre-pour-steak',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/sauce-au-fromage-et-au-poivre-pour-steak',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/sauce-au-fromage-et-au-poivre-pour-steak'
    }
  ],
  source: 'David Cloutier',
  notes: 'Accompagne merveilleusement bien le steak d\'orignal. Accompagnement: Excellent sur les patates pillées.',
  slug: 'sauce-au-fromage-et-au-poivre-pour-steak'
};
