import { Recipe } from '@/types/recipe'

export const tartareDeSaumonALaMangueEtALaCoriandre: Recipe = {
  id: 'tartare-de-saumon-a-la-mangue-et-a-la-coriandre',
  title: 'Tartare de saumon à la mangue et à la coriandre',
  description:
    'Un tartare frais et parfumé combinant saumon, mangue, coriandre et une sauce citronnée, idéal pour une entrée élégante.',
  categories: ['Entrées'],
  prepTime: { min: 30, max: 30 },
  cookTime: { min: 0, max: 0 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '200 g de pavé de saumon très frais',
    '2 tomates',
    "1/4 d'une mangue",
    "1/4 d'un oignon rouge",
    '1 petit bouquet de coriandre',
    "1 jaune d'oeuf",
    '1/2 cuillère à thé de moutarde forte',
    'Sambal oelek au goût',
    'Wasabi en poudre au goût',
    "Zeste et jus d'une lime",
    "10 cl d'huile végétale",
    'Sel et poivre du moulin',
  ],
  instructions: [
    'Enlever la peau du saumon, le couper en petits cubes.',
    "Hacher l'oignon très finement, couper la mangue en petits cubes; ainsi que les tomates, en prenant soin de jeter l'eau de végétation.",
    'Hacher la coriandre et mélanger tous ces ingrédients délicatement, puis réfrigérer.',
    "Dans un cul de poule, bien mélanger le jaune d'oeuf, la moutarde, le Sambal oelek, la poudre de wasabi, le zeste de lime, le jus de lime, le sel et le poivre.",
    "À l'aide d'un fouet, ajouter l'huile en filet (comme pour une mayonnaise).",
    'Juste avant de servir, mélanger délicatement la sauce et le mélange de saumon.',
  ],
  tags: ['frais', 'citron', 'cru'],
  images: [
    {
      small:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/tartare-de-saumon-a-la-mangue-et-a-la-coriandre',
      medium:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/tartare-de-saumon-a-la-mangue-et-a-la-coriandre',
      large:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/tartare-de-saumon-a-la-mangue-et-a-la-coriandre',
    },
  ],
  source: 'David Cloutier',
  notes:
    "La prochaine fois je vais pousser l'audace jusqu'à mettre des fraises. De plus à mon goût, ça prend plus de piquant et moitié coriandre, moitié persil italien.",
  slug: 'tartare-de-saumon-a-la-mangue-et-a-la-coriandre',
}
