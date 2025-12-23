import { Recipe } from '@/types/recipe';

export const poutineADejeuner: Recipe = {
  id: 'poutine-a-dejeuner',
  title: 'Poutine à déjeuner',
  description: 'Poutine à déjeuner',
  categories: ['Déjeuners'],
  prepTime: 45,
  cookTime: 15,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 à 3 oeufs brouillés',
    'Petites patates rotis à déjeuner',
    '3-4 tranches de bacon cuits en morceaux',
    '2 petites saucisses à déjeuner cuites coupées en morceaux',
    'piments et oignons que l\'on fait sauter dans un peu d\'huile',
    '1 ou 2 tranche de jambon coupées en cube',
    'sauce holandaise',
    'fromage à gratiner'
  ],
  instructions: [
    'Mélanger les 6 premiers ingrédients.',
    'Arroser de sauce holandaise.',
    'Gratiner et servir.'
  ],
  tags: ['petit déjeuner', 'fromage', 'sauté'],
  notes: 'servir avec des fruits pour adoucir l\'effet de "trop gras"',
  slug: 'poutine-a-dejeuner'
};
