import { Recipe } from '@/types/recipe';

export const oreoGeant: Recipe = {
  id: 'oreo-geant',
  title: 'Oréo géant',
  description: 'Un cheesecake sans cuisson aux biscuits Oréo, facile à préparer et délicieux.',
  categories: ['Desserts'],
  prepTime: 15,
  cookTime: 15,
  servings: 9,
  difficulty: 'Facile',
  ingredients: [
    '36 biscuits Oréo',
    '5 cuillères à soupe de beurre fondu',
    '800 grammes de fromage à la crème',
    '⅓ tasse de sucre',
    '1 cuillère à soupe d’extrait de vanille',
    '1 tasse de lait, chaud',
    '8 grammes de gélatine'
  ],
  instructions: [
    'Séparer la crème des biscuits dans 2 bols différents.',
    'Placer les biscuits dans un sac en plastique et les écraser en miettes fines avec un rouleau à pâtisserie.',
    'Mettre de côté ½ tasse de miettes pour plus tard.',
    'Verser les miettes de biscuit dans un bol et mélanger avec le beurre fondu, jusqu\'à obtenir une texture sableuse légèrement humide.',
    'Verser cette croûte dans un moule à charnière de 9 pouces, puis mettre de côté.',
    'Dans une casserole moyenne à feu doux, mélanger le fromage à la crème, le sucre, la crème des biscuits et l’extrait de vanille, en remuant jusqu’à ce qu’il n’y ait plus de grumeaux.',
    'Dans une tasse à mesurer, mélanger le lait avec la gélatine jusqu’à dissolution.',
    'Verser le lait dans le mélange de fromage à la crème, en remuant constamment jusqu’à ce que le mélange commence à bouillonner légèrement, puis retirer du feu.',
    'Verser le mélange sur la croûte de biscuits dans le moule, puis lisser le dessus avec une spatule ou une cuillère.',
    'Tamiser les miettes de biscuits réservées sur le dessus du gâteau en une couche uniforme.',
    'Réfrigérer pendant au moins 4 heures.',
    'Démouler, découper et servir.'
  ],
  tags: ['sans cuisson', 'biscuits', 'cheesecake'],
  slug: 'oreo-geant'
};
