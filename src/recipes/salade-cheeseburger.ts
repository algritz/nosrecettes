import { Recipe } from '@/types/recipe';

export const saladeCheeseburger: Recipe = {
  id: 'salade-cheeseburger',
  title: 'Salade cheeseburger',
  description: 'Une salade inspirée du cheeseburger, avec boulettes de bœuf, légumes frais et vinaigrette savoureuse.',
  categories: ['Salades', 'Boeuf'],
  prepTime: 20,
  cookTime: 20,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    'Salade',
    '1 c. à soupe d’huile de canola',
    '1 lb de bœuf haché extra maigre',
    '1 c. à soupe de sauce Worcestershire',
    '1 c. à thé d’épices à steak',
    '1 laitue iceberg déchiquetée à la main',
    '1 petit oignon blanc haché finement',
    '1/2 tasse de cornichons sucrés tranchés',
    '1 tasse de cheddar jaune râpé',
    'Tomates cerise coupé en deux (facultatif)',
    '2 c. à soupe de graines de sésame blanches',
    'Vinaigrette',
    '1/2 tasse de mayonnaise',
    '2 c. à soupe d’huile de canola',
    '3 c. à thé de moutarde jaune préparée',
    '4 c. à thé de relish',
    '1 c. à thé de sucre',
    '1 c. à thé de poudre d’ail',
    '1 c. à thé de poudre d’oignon',
    '1 c. à thé de paprika'
  ],
  instructions: [
    'Dans un bol, combiner les ingrédients de la vinaigrette. Réserver.',
    'Mélanger le bœuf, la sauce Worcestershire et les épices à steak.',
    'Faire 4 boulettes et faire cuire sur le grill.',
    'Disposer la laitue iceberg dans 4 assiettes.',
    'Répartir les boulettes de bœuf sur la laitue, garnir d’oignon, de tomate, de cornichons et de cheddar.',
    'Arroser la salade de vinaigrette au goût et la parsemer de graines de sésame.'
  ],
  tags: ['grill', 'salade', 'bœuf'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/salade-cheeseburger',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/salade-cheeseburger',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/salade-cheeseburger'
    }
  ],
  source: 'David Cloutier',
  slug: 'salade-cheeseburger'
};
