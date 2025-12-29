import { Recipe } from '@/types/recipe';

export const carresAuCaramelDeLaVoisineDeChalet: Recipe = {
  id: 'carres-au-caramel-de-la-voisine-de-chalet',
  title: 'Carrés au caramel de la voisine de chalet',
  description: 'Carrés au caramel de la voisine de chalet',
  categories: ['Pâtisseries et desserts'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 20, max: 20 },
  servings: 25,
  difficulty: 'Facile',
  ingredients: [
    '1 boîte biscuit Ritz original',
    '1 boîte lait Eagle Brand',
    '1 sac de chipits au caramel'
  ],
  instructions: [
    'Graisser un moule de 8 x 8 pouces.',
    'Émietter le sac de biscuits.',
    'Mettre les biscuits dans un bol, puis ajouter la boîte de lait Eagle Brand et les 3/4 du sac de pépites.',
    'Mettre le mélange dans le moule et saupoudrer du reste des pépites.',
    'Faire cuire au four à 350 °F pendant 20 minutes'
  ],
  tags: ['caramel', 'pâtisserie', 'four'],
  slug: 'carres-au-caramel-de-la-voisine-de-chalet'
};
