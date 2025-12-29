import { Recipe } from '@/types/recipe'

export const lasagneAuChocolat: Recipe = {
  id: 'lasagne-au-chocolat',
  title: 'Lasagne au chocolat',
  description:
    'Une dessert glacé à base de biscuits Oreo, fromage à la crème, pudding au chocolat et Cool Whip, formé en couches pour une texture riche et crémeuse.',
  categories: ['Pâtisseries et desserts'],
  prepTime: { min: 60, max: 60 },
  cookTime: { min: 0, max: 0 },
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    '1 paquet de biscuits Oreo (environ 36 biscuits)',
    '6 c. à table de beurre fondu',
    '1 paquet (8 onces) de fromage à la crème ramolli',
    '1/4 tasse de sucre',
    '2 c. à table de lait froid',
    '1 contenant (12 onces) de Cool Whip dégelé, divisé en deux',
    '2 paquets (3.9 onces chacun) de pouding au chocolat instantané',
    '3 1/4 tasses de lait froid',
    '1 1/2 tasse de mini chocolat chips',
  ],
  instructions: [
    'Écraser les biscuits en miettes, mettre dans un bol, ajouter le beurre fondu et bien mélanger.',
    "À l'aide d'une fourchette, presser dans un moule de 9x13 pouces et mettre au réfrigérateur.",
    "Mélanger le fromage à la crème au batteur jusqu'à ce que ce soit mousseux.",
    'Ajouter 2 c. à table de lait, le sucre et mélanger.',
    'Ajouter 1 1/4 tasse de Cool Whip et étendre sur la croûte.',
    "Dans un bol, combiner le pouding au chocolat avec 3 1/4 tasse de lait, et brasser jusqu'à épaississement.",
    'Utiliser une spatule pour étendre ce mélange par-dessus le mélange de fromage.',
    'Laisser reposer 5 minutes.',
    'Étendre le reste du Cool Whip sur le dessus et décorer avec les chocolat.',
    'Congeler 1 heure ou réfrigérer 4 heures.',
  ],
  tags: ['dessert glacé', 'chocolat', 'cool whip'],
  marinatingTime: { min: 240, max: 240 },
  slug: 'lasagne-au-chocolat',
}
