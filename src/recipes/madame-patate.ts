import { Recipe } from '@/types/recipe';

export const madamePatate: Recipe = {
  id: 'madame-patate',
  title: 'Madame Patate',
  description: 'Une explosion de saveur Madame Patate',
  categories: ['Végétarien', 'Accompagnements'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 60, max: 60 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '4 patates douces',
    '1 tasse de fromage feta',
    '1 c. à soupe ou plus au goût de yogourt nature',
    '½ oignon rouge ou 2 oignons verts',
    'Le jus et le zeste d’un citron',
    '½ tasse de coriandre fraîche ou persil',
    'Huile d’olive'
  ],
  instructions: [
    'Faire cuire chaque patate douce en papillote à 350°C au four ou sur le BBQ pendant 1 heure ou jusqu’à ce qu’elle soit cuite.',
    'Une fois cuite, couper chaque patate en deux sur le sens de la longueur mais pas jusqu’au fond.',
    'Dans un bol, mélanger le feta émietté, le yogourt, les oignons, le zeste et le jus du citron, la coriandre et/ou persil, et un filet d’huile d’olive.',
    'Bien brasser et farcir chaque patate avec ce mélange.',
    'Refaire cuire 5 minutes et servir.'
  ],
  tags: ['feta', 'citron', 'papillote'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/madame-patate',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/madame-patate',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/madame-patate'
    }
  ],
  source: 'David Cloutier',
  slug: 'madame-patate'
};
