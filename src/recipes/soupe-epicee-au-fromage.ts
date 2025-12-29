import { Recipe } from '@/types/recipe';

export const soupeEpiceeAuFromage: Recipe = {
  id: 'soupe-epicee-au-fromage',
  title: 'Soupe épicée au fromage',
  description: 'Une petite soupe pas piquée des vers Soupe épicée au fromage',
  categories: ['Soupes'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 30, max: 30 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '500g de fromage (cheddar et/ou gouda)',
    '1 oignon',
    '2 gousses d\'ail',
    '1 poivron rouge',
    '1 boîte de tomates en dés',
    '1 litre de bouillon de poulet ou légume',
    'Paprika',
    'Piment de cayenne',
    'Cumin',
    'Crème fraîche',
    'Sel et poivre'
  ],
  instructions: [
    'Faire revenir l\'oignon, l\'ail et le poivron.',
    'Ajouter les tomates, les épices et le bouillon.',
    'Laisser mijoter.',
    'Incorporer le fromage coupé en dés.',
    'Mélanger jusqu\'à fondre.',
    'Assaisonner avec du sel et du poivre.',
    'Servir chaud avec une cuillerée de crème.'
  ],
  tags: ['fromage', 'épicée', 'soupe'],
  slug: 'soupe-epicee-au-fromage'
};
