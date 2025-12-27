import { Recipe } from '@/types/recipe';

export const muffinsBananeEtChocolat: Recipe = {
  id: 'muffins-banane-et-chocolat',
  title: 'Muffins banane et chocolat',
  description: 'Recette de muffins moelleux à la banane et aux pépites de chocolat, parfaits pour un goûter ou un petit-déjeuner.',
  categories: ['Pâtisseries et desserts'],
  prepTime: 20,
  cookTime: 25,
  servings: 12,
  difficulty: 'Facile',
  ingredients: [
    '1 3/4 tasse de farine tout-usage',
    '1/2 tasse de cassonade',
    '1 c. à soupe de poudre à pâte',
    '1/2 c. à thé de sel',
    '1/2 tasse de pépites de chocolat mi-sucré',
    '1 œuf',
    '1/4 tasse d’huile végétale',
    '1/4 tasse de lait',
    '1 tasse de bananes écrasées (2-3 bananes)'
  ],
  instructions: [
    'Mesurer la farine, le sucre, la poudre à pâte, le sel et les pépites de chocolat dans un grand bol.',
    'Bien mélanger et faire un puits au centre.',
    'Battre l\'œuf dans un autre bol jusqu’à ce qu’il soit mousseux.',
    'Ajouter l’huile, le lait et les bananes.',
    'Verser dans le mélange sec.',
    'Remuer juste assez pour humidifier le tout. La pâte sera grumeleuse.',
    'Remplir les moules à muffins aux 3/4 avec ce mélange.',
    'Cuire à 400°F (200°C) pendant 20 à 25 minutes.'
  ],
  tags: ['gâteau', 'muffins', 'banane'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/muffins-banane-et-chocolat',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/muffins-banane-et-chocolat',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/muffins-banane-et-chocolat'
    }
  ],
  source: 'David Cloutier',
  slug: 'muffins-banane-et-chocolat'
};
