import { Recipe } from '@/types/recipe';

export const tartareDeBoeufALasiatique: Recipe = {
  id: 'tartare-de-boeuf-a-l-asiatique',
  title: 'Tartare de boeuf à l\'asiatique',
  description: 'Tartare de boeuf à l\'asiatique',
  categories: ['Entrées'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 0, max: 0 },
  servings: 3,
  difficulty: 'Facile',
  ingredients: [
    '300 g de bœuf coupé en petits dés',
    '1 échalote hachée finement',
    '1 c. à thé de jus de citron vert',
    '1 c. à thé de zeste de citron vert',
    '¼ tasse de coriandre hachée',
    '¼ c. à thé de gingembre rapé',
    '1 c. à thé de miel',
    '1 c. à thé de sauce soja',
    '1 c. à thé d\'huile de sésame',
    '½ c. à thé de sauce sambal oelek',
    '1 c. à soupe de graines de sésame rôties',
    '2 c. à soupe de mayonnaise',
    '2 c. à soupe de panko'
  ],
  instructions: [
    'Dans un grand bol, mélanger tous les ingrédients, sauf la chapelure.',
    'Au dernier moment, ajoute la chapellerie.',
    'Servir avec du pain ou des croûtons.'
  ],
  tags: ['asiatique', 'cru', 'marinade'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/tartare-de-boeuf-a-l-asiatique',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/tartare-de-boeuf-a-l-asiatique',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/tartare-de-boeuf-a-l-asiatique'
    }
  ],
  source: 'David Cloutier',
  slug: 'tartare-de-boeuf-a-lasiatique'
};
