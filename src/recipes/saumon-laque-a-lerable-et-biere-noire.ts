import { Recipe } from '@/types/recipe'

export const saumonLaqueALerableEtBiereNoire: Recipe = {
  id: 'saumon-laque-a-l-erable-et-biere-noire',
  title: "Saumon laqué à l'érable et bière noire",
  description:
    "Une recette de saumon laqué avec une sauce à l'érable et à la bière noire, parfait pour le barbecue.",
  categories: ['Poisson', 'Barbecue'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 15, max: 15 },
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    'Laque 1/2 tasse de bière noire',
    "1/4 tasse de sirop d'érable",
    '30 ml de sauce soya',
    "5 ml de moutarde à l'ancienne",
    '675 g (1 1/2 lb) de filet de saumon sans la peau, coupé en 4 pavés',
    'Sel et poivre',
  ],
  instructions: [
    "Dans une casserole, porter à ébullition tous les ingrédients en remuant et laisser réduire doucement jusqu'à ce que le mélange soit sirupeux.",
    "Laisser tiédir et réfrigérer jusqu'à refroidissement complet.",
    'Faire cuire le saumon au BBQ en badigeonnant régulièrement avec la laque.',
  ],
  tags: ['érable', 'barbecue', 'sauce'],
  images: [
    {
      small:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/saumon-laque-a-l-erable-et-biere-noire',
      medium:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/saumon-laque-a-l-erable-et-biere-noire',
      large:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/saumon-laque-a-l-erable-et-biere-noire',
    },
  ],
  source: 'David Cloutier',
  slug: 'saumon-laque-a-lerable-et-biere-noire',
}
