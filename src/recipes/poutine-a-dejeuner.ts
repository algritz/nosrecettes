import { Recipe } from '@/types/recipe'

export const poutineADejeuner: Recipe = {
  id: 'poutine-a-dejeuner',
  title: 'Poutine à déjeuner',
  description: 'Poutine à déjeuner',
  categories: ['Déjeuners'],
  prepTime: { min: 45, max: 45 },
  cookTime: { min: 15, max: 15 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 à 3 oeufs brouillés',
    'Petites patates rotis à déjeuner',
    '3-4 tranches de bacon cuits en morceaux',
    '2 petites saucisses à déjeuner cuites coupées en morceaux',
    "piments et oignons que l'on fait sauter dans un peu d'huile",
    '1 ou 2 tranche de jambon coupées en cube',
    'sauce holandaise',
    'fromage à gratiner',
  ],
  instructions: [
    'Mélanger les 6 premiers ingrédients.',
    'Arroser de sauce holandaise.',
    'Gratiner et servir.',
  ],
  tags: ['petit déjeuner', 'fromage', 'sauté'],
  images: [
    {
      small:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/poutine-a-dejeuner',
      medium:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/poutine-a-dejeuner',
      large:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/poutine-a-dejeuner',
    },
  ],
  source: 'David Cloutier',
  notes: 'servir avec des fruits pour adoucir l\'effet de "trop gras"',
  slug: 'poutine-a-dejeuner',
}
