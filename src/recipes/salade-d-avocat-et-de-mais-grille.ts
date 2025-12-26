import { Recipe } from '@/types/recipe';

export const saladeDAvocatEtDeMaisGrille: Recipe = {
  id: 'salade-d-avocat-et-de-mais-grille',
  title: 'Salade d\'avocat et de maïs grillé',
  description: 'Une salade fraîche et savoureuse combinant avocat crémeux et maïs grillé, parfumée à la coriandre et au piment jalapeño.',
  categories: ['Salades'],
  prepTime: 20,
  cookTime: 25,
  servings: 6,
  difficulty: 'Facile',
  ingredients: [
    '3 épis de maïs',
    '1 avocat pelé et coupé en dés',
    '2 c. à soupe de jus de lime',
    '¼ tasse de coriandre ciselée grossièrement',
    '1 oignon vert, haché finement',
    '1 petit piment jalapeño, épépiné et haché finement'
  ],
  instructions: [
    'Préchauffer le barbecue à puissance élevée.',
    'Bien huiler la grille.',
    'Dans une casserole d’eau bouillante salée, cuire les épis environ 2 minutes.',
    'Retirer, égoutter et bien éponger.',
    'Griller les épis de 3 à 4 minutes ou jusqu’à ce qu’ils soient dorés en les roulant à l’aide d’une pince.',
    'Laisser tiédir sur une planche.',
    'À l’aide d’un couteau, égrener les maïs.',
    'Dans un bol, mélanger l’avocat et le jus de lime.',
    'Ajouter les grains de maïs et le reste des ingrédients.',
    'Saler et poivrer.',
    'Servir.'
  ],
  tags: ['barbecue', 'maïs grillé', 'avocat'],
  slug: 'salade-d-avocat-et-de-mais-grille'
};
