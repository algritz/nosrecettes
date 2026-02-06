import { Recipe } from '@/types/recipe';

export const jalapenoPoppers: Recipe = {
  id: 'jalapeno-poppers',
  title: 'Jalapeno Poppers',
  description: '',
  categories: ['Amuse-geules'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 25, max: 25 },
  servings: 6,
  difficulty: 'Facile',
  ingredients: [
    '12 jalapenos',
    '8 oz de fromage à la crème, température ambiante',
    '1 gousse d\'ail, hachée',
    '¼ cuillère à café de sel',
    '¼ cuillère à café de poivre noir moulu',
    '3 cuillères à soupe d\'oignon vert, haché',
    '2 tasse de fromage cheddar orange doux râpé',
    '8 tranche de bacon, cuit et haché'
  ],
  instructions: [
    'Préchauffer le four à 400˚F.',
    'Couper les jalapeños en deux dans le sens de la longueur.',
    'Retirer et jeter les graines et les membranes des jalapenos.',
    'Dans un grand bol, mélanger le fromage à la crème, l\'ail, le sel, le poivre, l\'oignon vert, la moitié du fromage râpé et le bacon cuit.',
    'Remplir les moitiés de jalapeno avec le mélange.',
    'Garnir de fromage.',
    'Placer les jalapenos farcis sur une plaque à pâtisserie et cuire au four à 400˚F pendant 18-20 minutes, ou jusqu\'à ce que le fromage fonde de couleur dorée.'
  ],
  tags: ['fromage à la crème', 'bacon', 'grill'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/jalapeno_poppers',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/jalapeno_poppers',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/jalapeno_poppers'
    }
  ],
  source: 'David Cloutier',
  slug: 'jalapeno-poppers'
};
