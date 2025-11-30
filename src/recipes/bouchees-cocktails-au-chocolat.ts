import { Recipe } from '@/types/recipe';

export const boucheesCocktailsAuChocolat: Recipe = {
  id: '1764533154016',
  title: 'Bouchées Cocktails au Chocolat',
  description: 'Carrés de cheesecake au chocolat trempés et enrobés de chapelure graham, taillés en bouchées.',
  categories: ['Pâtisseries et desserts', 'Desserts'],
  prepTime: 15,
  cookTime: 10,
  servings: 21,
  difficulty: 'Facile',
  ingredients: [
    '1 conserve de fondue Chocolats Favoris (425 g), saveur au choix',
    '1/2 tasse de sucre',
    '1/4 tasse de beurre fondu',
    '1 paquet (250 g) de fromage à la crème, coupé en cubes d’un pouce',
    'Chapelure de biscuits Graham, pour garnir'
  ],
  instructions: [
    'Faire fondre la fondue au chocolat selon les instructions de la conserve.',
    'Dans un bol, fouetter le fromage à la crème, le sucre, le beurre fondu et 3/4 tasse de chocolat fondu jusqu’à texture lisse.',
    'Tapisser le fond d’un moule à pain 9" x 5" de papier parchemin. Étendre le mélange et lisser.',
    'Planter des mini-fourchettes ou pics, espacés pour permettre de couper des cubes d’environ 1" x 1".',
    'Congeler 20 minutes.',
    'Couper en cubes, tremper dans le reste de la fondue au chocolat, puis garnir de chapelure Graham.',
    'Réfrigérer 10 minutes. Déguster.'
  ],
  tags: ['fondue au chocolat', 'fromage à la crème', 'graham'],
  source: 'David Cloutier',
  slug: 'bouchees-cocktails-au-chocolat'
};
