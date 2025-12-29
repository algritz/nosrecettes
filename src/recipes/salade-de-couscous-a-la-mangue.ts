import { Recipe } from '@/types/recipe';

export const saladeDeCouscousALaMangue: Recipe = {
  id: 'salade-de-couscous-a-la-mangue',
  title: 'Salade de couscous à la mangue',
  description: 'Une salade rafraîchissante de couscous israélien avec mangue, légumes frais et herbes aromatiques, parfaite pour l\'été.',
  categories: ['Salades'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 20, max: 20 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 tasses de couscous israélien (perlé)',
    '3 c. à soupe d’huile d’olive + 3 c. à soupe pour la salade',
    '2 1/2 tasse de bouillon de légumes',
    '2 mangues coupées en cubes',
    '200 g de fromage bocconcini, coupé en cubes',
    '3 concombres libanais, coupés en cubes',
    '1 pinte (551 ml) de tomates cerise, coupées en deux',
    '1/4 d’oignon rouge, tranché très finement',
    '1 poivron orange, coupé en cubes',
    'Une petite botte de coriandre, hachée',
    '30 feuilles de menthe, hachées',
    '20 feuilles de basilic, hachées',
    'Le jus et le zeste de 1 citron',
    'Sel et poivre du moulin'
  ],
  instructions: [
    'Dans une casserole chauffée à feu moyen, ajouter le couscous et 3 c. à soupe d’huile d’olive puis bien mélanger.',
    'Cuire pendant 3-4 minutes en remuant.',
    'Ajouter le bouillon de légumes, mélanger, couvrir et amener à ébullition.',
    'Réduire à feu doux et laisser mijoter pendant environ 10 minutes ou jusqu’à ce que le couscous soit al dente.',
    'Verser dans une passoire et rincer abondamment à l’eau froide.',
    'Bien égoutter, verser dans un grand saladier et réserver.',
    'Ajouter le reste des ingrédients puis saler et poivrer généreusement.',
    'Bien mélanger et réserver au frigo pour 15 à 20 minutes avant de servir.'
  ],
  tags: ['rafraîchissant', 'herbes', 'couscous'],
  slug: 'salade-de-couscous-a-la-mangue'
};
