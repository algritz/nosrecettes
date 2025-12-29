import { Recipe } from '@/types/recipe'

export const tartareDeBison: Recipe = {
  id: 'tartare-de-bison',
  title: 'Tartare de bison',
  description: '',
  categories: ['Végétarien'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 0, max: 0 },
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    "360 g d'intérieur de ronde de bison",
    "1 c. à soupe d'huile d'olive",
    "1 c. à soupe d'échalote française ciselée",
    '2 c. à soupe de ciboulette ciselée',
    '2 c. à soupe de Jack Daniels',
    '3 c. à soupe de sauce barbecue légèrement épicée',
    '2 c. soupe de canneberges séchées',
    '2-3 gouttes de tabasco chipotle (ou au goût)',
    'Sel et poivre',
  ],
  instructions: [
    "Enrober la viande découpée d'huile d'olive.",
    'Dans un autre bol, mélanger tous les autres ingrédients et incorporer à la viande.',
  ],
  tags: ['cru', 'bison', 'barbecue'],
  slug: 'tartare-de-bison',
}
