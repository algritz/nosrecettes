import { Recipe } from '@/types/recipe'

export const saladeDeTomatesConcombresEtAvocat: Recipe = {
  id: 'salade-de-tomates-concombres-et-avocat',
  title: 'Salade de tomates, concombres et avocat',
  description:
    'Une salade tout en fraîcheur. Salade de tomates, concombres et avocat',
  categories: ['Salades'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 0, max: 0 },
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    '1 concombre anglais',
    '4 tomates italiennes',
    '3 avocats mûrs',
    '½ oignon rouge',
    '1/4 tasse de coriandre',
    'Jus de 1 citron',
    'Sel et poivre noir au goût',
    '2 c. à soupe d’huile d’olive extra vierge',
  ],
  instructions: [
    'Couper de gros dés le concombre avec la pelure, les tomates et l’avocat.',
    'Verser dans un saladier.',
    'Trancher en lanière l’oignon et ajouter aux autres légumes.',
    'Ciseler grossièrement la coriandre et verser dans le saladier.',
    'Mélanger avec de l’huile d’olive, le jus de citron, sel et poivre.',
  ],
  tags: ['fraîcheur', 'salade', 'avocat'],
  slug: 'salade-de-tomates-concombres-et-avocat',
}
