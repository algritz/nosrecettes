import { Recipe } from '@/types/recipe'

export const tartareDeThonRadisEtPeches: Recipe = {
  id: '1758806955403',
  title: 'Tartare de thon, radis et pêches',
  description: '',
  categories: ['Tartares', 'Entrées'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 0, max: 0 },
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    '500 g de thon coupé en dés',
    '2 pêches, coupées en dés',
    '4 radis, coupés en fines tranches',
    'Le zeste de ½ orange',
    'Le jus de 1 citron',
    '3 c. à soupe de ciboulette fraîche, émincée',
    '2 c. à soupe de menthe fraîche, émincée',
    '4 c. à soupe de mayonnaise',
    'Tabasco, au goût',
    'Sel et poivre, au goût',
  ],
  instructions: ['Mélanger tous les ingrédients et servir avec des croûtons.'],
  tags: ['tartare', 'thon', 'poisson', 'été', 'fruits', 'légumes', 'printemps'],
  images: [
    {
      small:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/thon_radis_peche',
      medium:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/thon_radis_peche',
      large:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/thon_radis_peche',
    },
  ],
  source: 'David Cloutier',
  slug: 'tartare-de-thon-radis-et-peches',
}
