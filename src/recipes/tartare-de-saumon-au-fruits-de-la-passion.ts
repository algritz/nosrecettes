import { Recipe } from '@/types/recipe'

export const tartareDeSaumonAuFruitsDeLaPassion: Recipe = {
  id: 'tartare-de-saumon-au-fruits-de-la-passion',
  title: 'tartare de saumon au fruits de la passion',
  description:
    'Un tartare frais de saumon aux saveurs exotiques des fruits de la passion, servi avec une salade verte.',
  categories: ['Entrées'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 0, max: 0 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '500g de saumon frais',
    '3 fruits de la passion',
    '1 citron vert',
    "3 cuil. à soupe d'huile d'olive",
    '2 cuil. à soupe de ciboulette',
    'sel et poivre',
  ],
  instructions: [
    "Trancher la chair très finement puis l'émincer en petits cubes d'environ 0,5cm. Réserver dans un saladier.",
    "Dans un bol, mélanger la chair des fruits de la passion, l'huile d'olive, le zeste de la moitié de la lime, le jus de la lime entière, la ciboulette ciselée, sel et poivre.",
    'Verser cet assaisonnement dans le saladier.',
    'Bien mélanger et laisser reposer 1h au frais.',
    "Au moment de passer à table, dresser le tartare à l'emporte-pièce, donner un tour de moulin à poivre et servir accompagné de quelques feuilles de salade verte.",
  ],
  tags: ['frais', 'exotique', 'cru'],
  slug: 'tartare-de-saumon-au-fruits-de-la-passion',
}
