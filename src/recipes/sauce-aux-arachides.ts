import { Recipe } from '@/types/recipe';

export const sauceAuxArachides: Recipe = {
  id: 'sauce-aux-arachides',
  title: 'Sauce aux arachides',
  description: 'Une sauce crémeuse et épicée à base de beurre d\'arachide, lait de coco, paprika et sauce poisson, idéale pour accompagner des brochettes ou rouleaux de printemps.',
  categories: ['Sauces', 'Végétarien'],
  prepTime: 5,
  cookTime: 15,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    'Bonne quantité d\'huile de canola ou d\'arachide',
    '15 ml de paprika',
    '400 ml de lait de coco',
    '1 tasse de beurre d\'arachide (avec ou sans peanut, c\'est à votre goût)',
    '1 tasse de sucre ou cassonade',
    '1/2 tasse d\'eau',
    '1/2 tasse de sauce poisson de bonne qualité',
    '15 ml de Sambal Oelek'
  ],
  instructions: [
    'Couvrir le fond de la casserole d\'huile et y faire chauffer la paprika. (Attention le paprika brûle facilement)',
    'Ajouter le reste des ingrédients, bien mélanger et laisser mijoter quelques secondes.',
    'Vous pouvez servir chaud ou froid.'
  ],
  tags: ['épicé', 'coco', 'asiane'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/sauce-aux-arachides',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/sauce-aux-arachides',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/sauce-aux-arachides'
    }
  ],
  source: 'David Cloutier',
  slug: 'sauce-aux-arachides'
};
