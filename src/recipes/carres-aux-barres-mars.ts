import { Recipe } from '@/types/recipe';

export const carresAuxBarresMars: Recipe = {
  id: 'carres-aux-barres-mars',
  title: 'Carrés aux barres mars',
  description: 'Recette de carrés chocolatés avec barres Mars, Rice Krispies, chocolat noir et blanc, avec un effet marbré.',
  categories: ['Pâtisseries et desserts'],
  prepTime: 20,
  cookTime: 15,
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    '4 barres de chocolat Mars',
    '1/2 tasse beurre',
    '3 tasses céréales Rice Krispies',
    '1 tasse pépites de chocolat noir',
    '3 c. à soupe de chocolat blanc'
  ],
  instructions: [
    'Faire fondre au bain-marie les 4 barres de chocolat coupées en morceaux avec 1/2 tasse de beurre.',
    'Ensuite, mélanger le chocolat fondu avec les 3 tasses de Rice Krispies et placer le mélange dans un plat carré de 8 pouces.',
    'Faire fondre les chocolats noir au bain-marie et étendre sur le dessus de la première préparation.',
    'Faire fondre les chocolats blanc au bain-marie et étendre avec parcimonie sur le chocolat noir afin de faire un effet marbré.'
  ],
  tags: ['chocolat', 'marbré', 'Rice Krispies'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/carres-aux-barres-mars',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/carres-aux-barres-mars',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/carres-aux-barres-mars'
    }
  ],
  source: 'David Cloutier',
  slug: 'carres-aux-barres-mars'
};
