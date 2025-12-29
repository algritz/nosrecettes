import { Recipe } from '@/types/recipe';

export const carottesCarameliseesAuFour: Recipe = {
  id: 'carottes-caramelisees-au-four',
  title: 'Carottes caramélisées au four',
  description: '',
  categories: ['Légumes', 'Végétarien'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 60, max: 60 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 c. soupe de vinaigre balsamique',
    '2 c. soupe de miel',
    '3 c. soupe de beurre',
    '6 à 10 carottes pelées et coupées en tronçons (moi carottes nantaises entières)',
    'sel et poivre',
    'Persil ou ciboulette au service (facultatif)'
  ],
  instructions: [
    'Préchauffer le four à 375 °F (190 °C).',
    'Dans un plat de cuisson (j\'ai utilisé un pyrex), mélanger le vinaigre, le beurre, le miel, les carottes, le sel et le poivre.',
    'Couvrir de papier d\'aluminium et cuire au four pendant 15 minutes.',
    'Retirer le papier, remuer et poursuivre la cuisson jusqu\'à tendreté, soit environ 45 minutes, en remuant de temps en temps.',
    'Au moment de servir parsemer le persil ou la ciboulette (facultatif).'
  ],
  tags: ['caramelisé', 'four', 'légumes'],
  slug: 'carottes-caramelisees-au-four'
};
