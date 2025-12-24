import { Recipe } from '@/types/recipe';

export const cretonMaisonCremeux: Recipe = {
  id: 'creton-maison-cremeux',
  title: 'Creton maison crémeux',
  description: 'Des creton maison, c\'est bien meilleur que ceux acheté à l\'épicerie',
  categories: ['Végétarien'],
  prepTime: 10,
  cookTime: 50,
  servings: 2.5,
  difficulty: 'Facile',
  ingredients: [
    '2 lbs porc hachés',
    '1 c. à soupe de gras de canard',
    '1 oignon haché finement',
    '1 gousse d\'ail haché très finement',
    '2 boîtes de crème de champignon',
    '1 tasse de lait',
    '1 tasse de grau',
    '1 c. à soupe d\'épices à creton'
  ],
  instructions: [
    'Faire sauter l\'oignon et l\'ail dans le gras de canard.',
    'Ajouter les autres ingrédients.',
    'Cuire 45 minutes à découvert en brassant régulièrement.',
    'Laisser refroidir.'
  ],
  tags: ['crémeux', 'creton', 'ragoût'],
  slug: 'creton-maison-cremeux'
};
