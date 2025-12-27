import { Recipe } from '@/types/recipe';

export const tartareDeThonFraiseEtSesame: Recipe = {
  id: 'tartare-de-thon-fraise-et-sesame',
  title: 'Tartare de thon fraise et sésame',
  description: 'Un tartare frais et parfumé associant le thon, la fraise et le sésame, idéal pour une entrée légère.',
  categories: ['Entrées'],
  prepTime: 20,
  cookTime: 0,
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    '2 c. à soupe de ciboulette ciselée',
    '1 c. à soupe de graines de sésame grillées',
    '1 c. à thé de gingembre fraîchement râpé',
    '1 c. à soupe d’huile de sésame',
    '1 c. à soupe d’huile d’olive',
    '1 c. à soupe de mayonnaise ou plus au goût',
    '2 c. à thé de sauce soya légère',
    '1/2 c. à thé de sauce piquante Sriracha ou au goût',
    'Sel et poivre au goût',
    '300 g de thon frais de qualité sushi coupé en petits dés',
    '1/2 tasse de fraises coupées en petits dés'
  ],
  instructions: [
    'Dans un bol, mélanger tous les ingrédients à l’exception du thon et des fraises.',
    'Ajouter le thon et les fraises et mélanger délicatement.',
    'Rectifier l’assaisonnement au goût et servir immédiatement.'
  ],
  tags: ['frais', 'sésame', 'entrée'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/tartare-de-thon-fraise-et-sesame',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/tartare-de-thon-fraise-et-sesame',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/tartare-de-thon-fraise-et-sesame'
    }
  ],
  source: 'David Cloutier',
  slug: 'tartare-de-thon-fraise-et-sesame'
};
