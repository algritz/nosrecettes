import { Recipe } from '@/types/recipe';

export const roulesAuNutella: Recipe = {
  id: 'roules-au-nutella',
  title: 'Roulés au Nutella',
  description: 'Version maison d\'uncrustable, mais encore meilleur Roulés au Nutella',
  categories: ['Vollaille'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 5, max: 5 },
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    '6 tranches de pain blanc sans la croute',
    'Nutella',
    '1 œuf',
    '3 c. à soupe de lait',
    '1 c. à soupe de crème',
    '1 c. à thé de vanille',
    'Beurre',
    '1/2 c. à thé de cannelle',
    '50g de sucre blanc'
  ],
  instructions: [
    'Écraser chaque tranche de pain avec un rouleau à pâtisserie.',
    'Tartiner chaque tranche avec une couche fine de Nutella.',
    'Rouler chaque tranche de pain.',
    'Dans une assiette creuse, ajouter l\'œuf, le lait, la crème et la vanille. Battre très légèrement avec une fourchette.',
    'Faire fondre le beurre à feu moyen.',
    'Tremper chaque rouleau de pain dans le mélange jaune et lait.',
    'Faire cuire les rouleaux de pain pendant 3 à 5 minutes sur feu moyen, jusqu\'à ce qu\'ils soient dorés.',
    'Mélanger la cannelle et le sucre.',
    'Une fois cuit, rouler les rouleaux au Nutella dans le mélange de cannelle et sucre.'
  ],
  tags: ['gourmand', 'cannelle', 'tartine'],
  slug: 'roules-au-nutella'
};
