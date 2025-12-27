import { Recipe } from '@/types/recipe';

export const biscuitsALaCuillere: Recipe = {
  id: 'biscuits-a-la-cuillere',
  title: 'Biscuits à la cuillère',
  description: 'Biscuits à la cuillère',
  categories: ['Pâtisseries et desserts'],
  prepTime: 45,
  cookTime: 15,
  servings: 72,
  difficulty: 'Facile',
  ingredients: [
    '1 2/3 tasses de graisse végétale',
    '2 tasses de cassonade',
    '3 œufs battus',
    '3 ¼ tasses de farine',
    '2 c. à thé de poudre à pâte',
    '½ c. à thé de soda',
    '½ c. à thé de sel',
    '½ tasse de lait',
    '1 c. thé de vanille'
  ],
  instructions: [
    'Défaire la graisse en crème, ajouter la cassonade puis les œufs un à la fois.',
    'Dans un bol, mélanger la farine, la poudre à pâte, le soda et le sel.',
    'Incorporer les ingrédients secs à la première préparation en alternant avec le lait.',
    'Ajouter la vanille.',
    'Déposer par cuillerées à thé sur une plaque à biscuits graissée.',
    'Cuire à 350 F, de 12 à 15 minutes.',
    'Garnir à votre goût.'
  ],
  tags: ['pâtisserie', 'cuisson au four', 'garniture'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/biscuits-a-la-cuillere',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/biscuits-a-la-cuillere',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/biscuits-a-la-cuillere'
    }
  ],
  source: 'David Cloutier',
  slug: 'biscuits-a-la-cuillere'
};
