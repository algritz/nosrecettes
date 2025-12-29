import { Recipe } from '@/types/recipe'

export const tartareDeThonALaThai: Recipe = {
  id: 'tartare-de-thon-a-la-thai',
  title: 'Tartare de thon à la Thaï',
  description:
    "Un tartare de thon frais à la thaïlandaise, accompagné d'une mousse d’avocat, de mangue et de roquette, relevé de saveurs asiatiques.",
  categories: ['Entrées'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 0, max: 0 },
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    'Tartare',
    '1 oignon vert, haché finement',
    '3 c. à soupe de feuilles de coriandre fraîche',
    '1 c. à soupe de sauce soya',
    '1 c. à soupe de jus de lime',
    'Le zeste râpé de 1/2 lime',
    "1 c. à thé d'huile d'olive",
    "1/2 c. à thé d'huile de sésame",
    '1 lb de thon rouge, très frais, haché finement au couteau',
    'Mousse d’avocat',
    '1 avocat mûr, pelé, dénoyauté et coupé en morceaux',
    '3 c. à soupe jus de lime frais',
    '1 c. à soupe de miel',
    'Sel et poivre noir fraîchement moulu',
    'Garniture',
    '1 mangue pelée, tranchée en fine lamelle',
    '1 c. à soupe de graines de sésame grillées',
    '1/2 tasse de mini roquette',
    "1 c. à thé d'huile d'olive",
  ],
  instructions: [
    "Dans un grand bol, mélanger l'oignon vert, la coriandre, la sauce soya, le jus de lime et son zeste, l'huile d'olive et l’huile de sésame.",
    'Ajouter le thon et mélanger délicatement. Saler.',
    "Pour la mousse d’avocat, mélanger tous les ingrédients dans un mélangeur et mélanger jusqu'à consistance lisse.",
    "Dans chaque assiette, à l'aide d'un emporte-pièce, dresser le tartare.",
    'Y déposer le mélange de thon puis la mousse d’avocat.',
    'Garnir de mini roquette, parsemé de graines de sésame.',
    "Arroser d'un filet d'huile d'olive et accompagner de morceaux de mangue.",
  ],
  tags: ['thaï', 'frais', 'avocat'],
  images: [
    {
      small:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/tartare-de-thon-a-la-thai',
      medium:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/tartare-de-thon-a-la-thai',
      large:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/tartare-de-thon-a-la-thai',
    },
  ],
  source: 'David Cloutier',
  slug: 'tartare-de-thon-a-la-thai',
}
