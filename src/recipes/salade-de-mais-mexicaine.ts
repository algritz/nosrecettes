import { Recipe } from '@/types/recipe';

export const saladeDeMaisMexicaine: Recipe = {
  id: 'salade-de-mais-mexicaine',
  title: 'Salade de maïs mexicaine',
  description: 'Une salade d\'été ! Salade de maïs mexicaine',
  categories: ['Salades'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 10, max: 10 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '5 tasse de maïs congelé',
    '1 petit oignon rouge coupé en dés',
    '1 poivron rouge coupé en lanières',
    '1 jalapeño épépiné et haché',
    '1 boîte de haricots noirs de 540 ml, rincés et égouttés',
    '1 avocat coupé en dés',
    '1/3 de tasse de feta émiettée',
    '1/4 de tasse d’huile d’olive',
    '2 c. à soupe de jus de lime frais',
    '2 c. à soupe de coriandre fraîche hachée',
    '1 c. à soupe de zestes de lime',
    '2 c. à thé d’ail haché',
    '1 c. à thé de poudre de chili',
    'Sel et poivre au goût'
  ],
  instructions: [
    'Faire cuire le maïs congelé vapeur et laisser refroidir.',
    'Dans un saladier, mélanger les ingrédients de la vinaigrette.',
    'Ajouter l’oignon, le poivron, le jalapeño, les haricots, l’avocat, le maïs et la feta dans le saladier.',
    'Remuer délicatement.'
  ],
  tags: ['été', 'maïs', 'feta'],
  slug: 'salade-de-mais-mexicaine'
};
