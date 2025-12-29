import { Recipe } from '@/types/recipe'

export const boulesAuxDattesEtAuxRiceKrispies: Recipe = {
  id: 'boules-aux-dattes-et-aux-rice-krispies',
  title: 'Boules aux dattes et aux Rice Krispies',
  description:
    'Une recette de boules aux dattes et Rice Krispies, simple et rapide à préparer.',
  categories: ['Végétarien', 'Pâtisseries et desserts'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 5, max: 5 },
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    '500 g de dattes hachées grossièrement',
    '4 tasses de Rice Krispies',
    '2/3 tasse de beurre',
    '1/2 tasse de sucre',
  ],
  instructions: [
    'Faire fondre le beurre avec le sucre.',
    'Ajouter les dattes.',
    'Cuire environ 5 minutes puis ajouter les Rice Krispies.',
    'Bien mélanger, laisser tiédir et former de petites boules.',
  ],
  tags: ['dattes', 'Rice Krispies', 'boules'],
  slug: 'boules-aux-dattes-et-aux-rice-krispies',
}
