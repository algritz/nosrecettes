import { Recipe } from '@/types/recipe';

export const saladeMediterraneenneALaFeta: Recipe = {
  id: 'salade-mediterraneenne-a-la-feta',
  title: 'Salade méditerranéenne à la feta',
  description: 'Belle salade d\'été',
  categories: ['Salades'],
  prepTime: 20,
  cookTime: 0,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 bloc de feta émietté',
    '1 petit concombre coupé en petit dés',
    '1 poivron vert coupé en petit dés',
    '1 poivron rouge coupé en petit dés',
    '1 poivron jaune coupé en petit dés',
    '1/2 tasse d\'olives Kalamata coupé en petit dés',
    '1 tasse de tomates cerises coupé en petit dés',
    '3 cuillères à soupe d\'huile d\'olive',
    '1 cuillère à café d\'origan',
    '1 pincée de sel'
  ],
  instructions: [
    'Dans un grand bol, mélanger la feta émiettée, le concombre, le poivron vert, le poivron rouge, le poivron jaune, les olives et les tomates cerises.',
    'Verser un filet d\'huile d\'olive sur la salade.',
    'Saupoudrer d\'origan et d\'une pincée de sel selon votre goût.',
    'Mélanger délicatement le tout jusqu\'à ce que le tout soit bien mélangé.'
  ],
  tags: ['été', 'feta', 'salade'],
  slug: 'salade-mediterraneenne-a-la-feta'
};
