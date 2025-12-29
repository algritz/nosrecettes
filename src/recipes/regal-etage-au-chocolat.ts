import { Recipe } from '@/types/recipe';

export const regalEtageAuChocolat: Recipe = {
  id: 'regal-etage-au-chocolat',
  title: 'Régal étagé au chocolat',
  description: '',
  categories: ['Pâtisseries et desserts'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 0, max: 0 },
  servings: 24,
  difficulty: 'Facile',
  ingredients: [
    '30 biscuits Oreo',
    '6 c. à soupe de beurre, fondu',
    '1 paquet (250 g) de fromage à la crème Philadelphia en brique, ramolli',
    '1/4 tasse de sucre',
    '2 c. à soupe de lait froid',
    '1 contenant (1 L) de garniture fouettée Cool Whip, dégelée et divisée',
    '2 pqt (format 4 portions) de pouding instantané Jell-O au chocolat',
    '3 1/4 tasses de lait froid'
  ],
  instructions: [
    'Réduire les biscuits en chapelure fine au robot culinaire. Les mélanger avec le beurre. Presser le mélange au fond d\'un moule de 13 x 9 po. Réfrigérer la croûte jusqu\'au moment de l\'utiliser.',
    'Battre le fromage à la crème, le sucre et 2 c. à soupe de lait au fouet dans un bol de taille moyenne jusqu\'à homogénéité. Incorporer 1-1/4 tasse de Cool Whip. Étaler ce mélange sur la croûte.',
    'Battre la préparation pour pouding et 3-1/4 tasses de lait froid au fouet pendant 2 min. Répartir cette préparation sur la couche de fromage à la crème. Laisser reposer 5 min ou jusqu\'à ce que le pouding ait épaissi.',
    'Couvrir du reste de Cool Whip. Réfrigérer 4 heures.'
  ],
  tags: ['chocolat', 'fouettée', 'croustillant'],
  marinatingTime: { min: 240, max: 240 },
  slug: 'regal-etage-au-chocolat'
};
