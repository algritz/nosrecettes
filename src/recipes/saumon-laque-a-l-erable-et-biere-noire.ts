import { Recipe } from '@/types/recipe';

export const saumonLaqueALErableEtBiereNoire: Recipe = {
  id: 'saumon-laque-a-l-erable-et-biere-noire',
  title: 'Saumon laqué à l\'érable et bière noire',
  description: 'Une recette de saumon laqué avec une sauce à l\'érable et à la bière noire, parfait pour le barbecue.',
  categories: ['Poisson', 'Barbecue'],
  prepTime: 15,
  cookTime: 15,
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    'Laque 1/2 tasse de bière noire',
    '1/4 tasse de sirop d\'érable',
    '30 ml de sauce soya',
    '5 ml de moutarde à l\'ancienne',
    '675 g (1 1/2 lb) de filet de saumon sans la peau, coupé en 4 pavés',
    'Sel et poivre'
  ],
  instructions: [
    'Dans une casserole, porter à ébullition tous les ingrédients en remuant et laisser réduire doucement jusqu\'à ce que le mélange soit sirupeux.',
    'Laisser tiédir et réfrigérer jusqu\'à refroidissement complet.',
    'Faire cuire le saumon au BBQ en badigeonnant régulièrement avec la laque.'
  ],
  tags: ['érable', 'barbecue', 'sauce'],
  slug: 'saumon-laque-a-l-erable-et-biere-noire'
};
