import { Recipe } from '@/types/recipe';

export const tzatziki: Recipe = {
  id: 'tzatziki',
  title: 'Tzatziki',
  description: 'Une recette de tzatziki rafraîchissante et simple à base de concombre, yaourt, menthe et citron, parfaite pour accompagner vos plats méditerranéens.',
  categories: ['Végétarien', 'Sauces', 'Entrées'],
  prepTime: 15,
  cookTime: 0,
  servings: 1,
  difficulty: 'Facile',
  ingredients: [
    '2 tasses de concombre râpé (environ 1 concombre moyen épinée)',
    '1 ½ tasse de yaourt nature',
    '2 cuillères à soupe d\'huile d\'olive extra vierge',
    '2 cuillerées à soupe de menthe fraîche',
    '1 cuillère à soupe de jus de citron',
    '1 gousse d\'ail moyenne, pressée ou émincée',
    '½ cuillère à café de sel de mer fin'
  ],
  instructions: [
    'Pressez légèrement le concombre râpé dans un petit tamis au-dessus de l\'évier pour éliminer l\'excès de jus de concombre.',
    'Mettre le concombre pressé dans un bol.',
    'Ajoutez le yaourt, l\'huile d\'olive, les herbes, le jus de citron, l\'ail et le sel dans le bol, et remuez pour bien mélanger.',
    'Laissez le mélange reposer pendant 5 minutes pour permettre aux saveurs de se fondre.',
    'Servir le tzatziki immédiatement ou refroidir pour plus tard.',
    'Les restes de tzatziki se conservent bien, au frais, pendant environ 4 jours.'
  ],
  tags: ['rafraîchissant', 'méditerranéen', 'simple'],
  marinatingTime: 5,
  slug: 'tzatziki'
};
