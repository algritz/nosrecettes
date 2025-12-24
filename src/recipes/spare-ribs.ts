import { Recipe } from '@/types/recipe';

export const spareRibs: Recipe = {
  id: 'spare-ribs',
  title: 'Spare-ribs',
  description: '',
  categories: ['Vollaille'],
  prepTime: 5,
  cookTime: 140,
  servings: 6,
  difficulty: 'Facile',
  ingredients: [
    '3 livres de spare-ribs',
    '1 tasse eau',
    '3 c. à soupe de cassonade',
    '3 gousses d\'ail',
    '4 c. à soupe de soya',
    '1/2 tasse de sauce chili',
    '3 c. à soupe de vinaigre',
    '1 c. à soupe de farine'
  ],
  instructions: [
    'Faire bouillir les spare-ribs dans l\'eau salée pendant 20 minutes Égoutter.',
    'Faire chauffer le four à 250.',
    'Faire un mélange avec les autres ingrédients.',
    'Verser sur les spare-ribs et cuire 250F pendant deux heures.'
  ],
  tags: ['barbecue', 'cuisson lente', 'sauce'],
  slug: 'spare-ribs'
};
