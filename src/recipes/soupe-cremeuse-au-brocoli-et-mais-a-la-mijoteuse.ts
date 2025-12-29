import { Recipe } from '@/types/recipe';

export const soupeCremeuseAuBrocoliEtMaisALaMijoteuse: Recipe = {
  id: 'soupe-cremeuse-au-brocoli-et-mais-a-la-mijoteuse',
  title: 'Soupe crémeuse au brocoli et maïs à la mijoteuse',
  description: 'Une soupe crémeuse et réconfortante préparée à la mijoteuse, combinant le maïs, le brocoli et le fromage cheddar.',
  categories: ['Soupe', 'Végétarien'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 240, max: 240 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 tasses de maïs congelé',
    '2 tasses de fleurets de brocoli',
    '1 tasse de fromage cheddar râpée',
    '1 boîte conserve de crème de poulet',
    '1/4 de tasse de lait',
    '1 tasse de bouillon de poulet'
  ],
  instructions: [
    'Mettre tous les ingrédients dans la mijoteuse et mélanger.',
    'Faire cuire à LOW pendant 4 ou 5 heures.',
    'Mélanger avant de servir.'
  ],
  tags: ['mijoteuse', 'crème', 'maïs'],
  slug: 'soupe-cremeuse-au-brocoli-et-mais-a-la-mijoteuse'
};
