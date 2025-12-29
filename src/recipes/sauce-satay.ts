import { Recipe } from '@/types/recipe';

export const sauceSatay: Recipe = {
  id: 'sauce-satay',
  title: 'Sauce satay',
  description: '',
  categories: ['Sauces'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 12, max: 12 },
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    '1 c. à thé d\'huile d\'arachides',
    '2 échalotes françaises émincées',
    '1 gousse d\'ail émincée',
    '1 petit piment rouge fort émincé',
    '250 mL de lait de coco en boîte',
    '150 mL de beurre d\'arachides non salé',
    '50 mL d\'eau',
    '6 c. à soupe de sauce soya',
    '2 c. à soupe de cassonade'
  ],
  instructions: [
    'Faites tomber l\'échalote et l\'ail à feu moyen-doux pendant 5-6 minutes.',
    'Ajoutez le piment et poursuivez la cuisson pendant 1 minute.',
    'Ajoutez le beurre d\'arachides, puis versez peu à peu le lait de coco et l\'eau en délayant bien le beurre d\'arachides au fur et à mesure.',
    'Versez la sauce soya et la cassonade puis amenez le tout à ébullition.'
  ],
  tags: ['épicé', 'sauce crémeuse', 'coco'],
  accompaniment: 'brochette de poulet marinée',
  slug: 'sauce-satay'
};
