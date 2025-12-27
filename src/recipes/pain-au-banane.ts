import { Recipe } from '@/types/recipe';

export const painAuBanane: Recipe = {
  id: 'pain-au-banane',
  title: 'Pain au banane',
  description: 'Pour passer la banane trop mûre qui reste Pain au banane',
  categories: ['Pâtisseries et desserts'],
  prepTime: 20,
  cookTime: 30,
  servings: 1,
  difficulty: 'Facile',
  ingredients: [
    '180 g de farine',
    '5 g de poudre à pâte',
    '70 g de cassonade',
    '20 g de beurre fondu',
    '1 banane en purée',
    '50 g de pépites de chocolat',
    '1 grosse pincée de cardamome',
    '1 petite pincée de cannelle',
    '60 ml de lait',
    '1 œuf'
  ],
  instructions: [
    'Préchauffer le four à 425°F',
    'Dans un saladier, mélanger la farine, la poudre à pâte, la cassonade, l\'œuf, le beurre, la banane, les pépites de chocolat, le lait, la cannelle et la cardamome.',
    'Verser dans un moule à pain préalablement d\'un papier parchemin.',
    'Faire cuire 30 minutes.'
  ],
  tags: ['banane', 'pâtisserie', 'gâteau'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/pain-au-banane',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/pain-au-banane',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/pain-au-banane'
    }
  ],
  source: 'David Cloutier',
  slug: 'pain-au-banane'
};
