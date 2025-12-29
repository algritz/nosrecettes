import { Recipe } from '@/types/recipe'

export const crepesDeDavid: Recipe = {
  id: 'crepes-de-david',
  title: 'Crêpes de David',
  description: 'Notre recette de crêpes passe partout',
  categories: ['Pâtisseries et desserts'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 8, max: 8 },
  servings: 6,
  difficulty: 'Facile',
  ingredients: [
    '3 œufs',
    '1 pincée de sel',
    '1/4 de c. à thé de vanille (facultatif)',
    '1 tasse de farine',
    '1 1/4 tasse de lait',
  ],
  instructions: [
    'Bien mélanger le tout et faire cuire les crêpes dans une poêle avec du beurre',
  ],
  tags: ['crêpes', 'pâtisserie', 'facile'],
  notes:
    'Si vous êtes plus, ajouter un œuf par personne et ajuster la farine et le lait en conséquence.',
  slug: 'crepes-de-david',
}
