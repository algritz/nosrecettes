import { Recipe } from '@/types/recipe'

export const cremeDePanaisAuCurryEtSiropDerable: Recipe = {
  id: 'creme-de-panais-au-curry-et-sirop-d-erable',
  title: "Crème de panais au curry et sirop d'érable",
  description:
    "Une soupe crémeuse de panais parfumée au curry, agrémentée de sirop d'érable et garnie de popcorn pour une touche croquante.",
  categories: ['Soupes'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 40, max: 40 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '500 g de panais coupés en dés (2 sacs de 454g épluchés ça donne environ ça)',
    '2 pommes vertes épluchées, coupées en dés',
    '2 oignons hachés finement',
    '3 tasses de bouillon de poulet',
    '2 cuillères à thé de curry',
    'Sel et poivre',
    '3 cuillères à table de crème',
    '2 cuillères à table d’huile d’olive ou beurre ou moitié-moitié',
    '3 cuillères à table de sirop d’érable',
    'Popcorn au goût (facultatif)',
  ],
  instructions: [
    "Faites revenir les oignons légèrement sans l'huile et/ou beurre.",
    'Ajoutez les morceaux de panais.',
    'Ajoutez le bouillon, les pommes et faites cuire 30 minutes.',
    'Passez au robot culinaire avec la crème, le curry, le sel, le poivre et le sirop d’érable.',
    'Servir et décorer de popcorn.',
  ],
  tags: ['soupe', 'curry', 'érable'],
  images: [
    {
      small:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/creme-de-panais-au-curry-et-sirop-d-erable',
      medium:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/creme-de-panais-au-curry-et-sirop-d-erable',
      large:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/creme-de-panais-au-curry-et-sirop-d-erable',
    },
  ],
  source: 'David Cloutier',
  slug: 'creme-de-panais-au-curry-et-sirop-derable',
}
