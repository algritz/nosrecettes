import { Recipe } from '@/types/recipe';

export const saladeDeFetaEtMelonDEau: Recipe = {
  id: 'salade-de-feta-et-melon-d-eau',
  title: 'Salade de feta et melon d\'eau',
  description: '',
  categories: ['Salades'],
  prepTime: 15,
  cookTime: 0,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1/4 de tasse huile d\'olive extra vierge',
    '2 c. à soupe de vinaigre de vin rouge',
    '1/2 c. à thé sel casher',
    '3 tasses de melon d\'eau sans pépins en cubes',
    '1 tasse concombre moyen, haché',
    '1 tasse feta émiettée',
    '1/2 tasse oignon rouge, finement tranché',
    '1/2 tasse menthe hachée grossièrement'
  ],
  instructions: [
    'Dans un petit bol, fouetter ensemble l\'huile d\'olive, le vinaigre de vin rouge et le sel.',
    'Dans un grand bol de service, mélanger le melon d\'eau, le concombre, la feta, l\'oignon rouge et la menthe.',
    'Verser la vinaigrette et bien mélanger.',
    'Servir.'
  ],
  tags: ['feta', 'melon d\'eau', 'salade'],
  slug: 'salade-de-feta-et-melon-d-eau'
};
