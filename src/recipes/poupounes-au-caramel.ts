import { Recipe } from '@/types/recipe';

export const poupounesAuCaramel: Recipe = {
  id: 'poupounes-au-caramel',
  title: 'Poupounes au Caramel',
  description: 'Une recette de friandises enrobées de caramel et céréales Rice Krispies, façonnées en boules et congelées.',
  categories: ['Déjeuners'],
  prepTime: { min: 60, max: 60 },
  cookTime: { min: 15, max: 15 },
  servings: 55,
  difficulty: 'Facile',
  ingredients: [
    '¼ tasse de beurre',
    '1 boîte de 300 ml de lait Eagle brand',
    '25 friandises Toffee Mackintosh’s',
    '1 sac de grosses guimauves',
    '1 boîte de céréales Rice Krispies'
  ],
  instructions: [
    'Faire fondre le beurre, le lait Eagle Brand et les toffees au bain-marie.',
    'Lorsque le caramel est lisse, le retirer du feu.',
    'À l’aide de deux fourchettes à fondue, piquer la guimauve et la tremper dans le caramel fondu pour bien l’enrober.',
    'Ensuite, rouler dans les céréales Rice Krispies et façonner une belle boule.',
    'Déposer les poupounes sur 3 plaques à biscuit recouvertes de papier parchemin et placer au congélateur pendant quelques heures.',
    'Une fois les poupounes congelées, vous pouvez les conserver au congélateur dans un contenant hermétique ou dans des sacs à congélation.',
    'Décongeler 10-15 minutes avant de servir.'
  ],
  tags: ['caramel', 'céréales', 'congélation'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/poupounes-au-caramel',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/poupounes-au-caramel',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/poupounes-au-caramel'
    }
  ],
  source: 'David Cloutier',
  slug: 'poupounes-au-caramel'
};
