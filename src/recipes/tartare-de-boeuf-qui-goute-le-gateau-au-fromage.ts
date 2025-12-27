import { Recipe } from '@/types/recipe';

export const tartareDeBoeufQuiGouteLeGateauAuFromage: Recipe = {
  id: 'tartare-de-boeuf-qui-goute-le-gateau-au-fromage',
  title: 'Tartare de boeuf qui goûte le gâteau au fromage',
  description: 'Tartare de boeuf qui goûte le gâteau au fromage',
  categories: ['Entrées'],
  prepTime: 15,
  cookTime: 0,
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    'boeuf à tartare coupé en petits cubes',
    'Un filet d\'huile d\'olive',
    '5 ml de sauce tamari',
    '1 Oignon vert, ciselé',
    '45 ml (3 c. à soupe) de fromage de chèvre aux canneberges, émietté',
    '1/2 tasse de pacanes, grossièrement hachées',
    '6 tiges de ciboulette, hachées'
  ],
  instructions: [
    'Tout mélanger délicatement les ingrédients ensemble.'
  ],
  tags: ['fromage', 'tartare', 'olive'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/tartare-de-boeuf-qui-goute-le-gateau-au-fromage',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/tartare-de-boeuf-qui-goute-le-gateau-au-fromage',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/tartare-de-boeuf-qui-goute-le-gateau-au-fromage'
    }
  ],
  accompaniment: 'Craquelins aux fruits séchés',
  wine: 'https://www.saq.com/fr/14204442',
  source: 'David Cloutier',
  slug: 'tartare-de-boeuf-qui-goute-le-gateau-au-fromage'
};
