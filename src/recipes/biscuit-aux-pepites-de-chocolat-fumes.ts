import { Recipe } from '@/types/recipe';

export const biscuitAuxPepitesDeChocolatFumes: Recipe = {
  id: 'biscuit-aux-pepites-de-chocolat-fumes',
  title: 'Biscuit aux pépites de chocolat fumés',
  description: 'Ces biscuits aux pépites de chocolat fumés sont cuits dans un fumoir pour une saveur unique. Faciles à préparer, ils combinent le goût riche de la mélasse, la douceur du chocolat et le croquant des noix de pécan.',
  categories: ['Pâtisseries et desserts'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 13, max: 13 },
  servings: 36,
  difficulty: 'Facile',
  ingredients: [
    '¾ tasse de cassonade foncée',
    '¾ tasse de sucre blanc',
    '1 tasse de beurre salé ramolli',
    '2 cuillères à soupe de mélasse',
    '2 gros œufs',
    '1 cuillère à café d\'extrait de vanille',
    '2 ¾ tasses de farine tout usage (peut augmenter à 3 tasses si la pâte est trop collante et humide)',
    '1 cuillère à café de bicarbonate de soude',
    '1 cuillère à café de sel',
    '1 ½ tasse de pacanes entières',
    '1 ½ tasse de pépites de chocolat mi-sucré'
  ],
  instructions: [
    'Préchauffez votre fumoir à 325°F. Je recommande d\'utiliser un bois d\'érable. Ces biscuits peuvent également être cuits au four à la même température.',
    'Dans un grand bol à mélanger, crémer ensemble le beurre ramolli, la mélasse et le sucre blanc et cassonade au batteur électrique.',
    'Pendant que le mélangeur fonctionne à basse vitesse, ajoutez les œufs un à un jusqu\'à ce qu\'ils soient incorporés, puis mélangez la vanille.',
    'Dans un autre bol, mélanger la farine, le bicarbonate de soude et le sel.',
    'Ajouter les ingrédients secs dans la pâte 1 tasse à la fois, en mélangeant jusqu\'à ce qu\'ils soient complètement incorporés avant d\'en ajouter plus.',
    'Éteignez le mélangeur et utilisez une spatule en caoutchouc pour incorporer les pépites de chocolat et les noix de pécan.',
    'Façonner la pâte en petites boules et les déposer sur une plaque à pâtisserie tapissée de papier parchemin (environ 12 biscuits par plaque).',
    'Placez la plaque de cuisson sur les grilles de votre fumoir, fermez le couvercle et faites cuire pendant 12 à 13 minutes.'
  ],
  tags: ['fumé', 'chocolat', 'pécan'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/biscuits_pepite_chocolat_fumes',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/biscuits_pepite_chocolat_fumes',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/biscuits_pepite_chocolat_fumes'
    }
  ],
  source: 'David Cloutier',
  slug: 'biscuit-aux-pepites-de-chocolat-fumes'
};
