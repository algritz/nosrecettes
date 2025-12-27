import { Recipe } from '@/types/recipe';

export const patesAuFajitas: Recipe = {
  id: 'pates-au-fajitas',
  title: 'Pâtes au fajitas',
  description: 'Une recette de pâtes au style fajitas, avec poulet, poivrons, oignon et épices, crémeuse grâce au fromage râpé.',
  categories: ['Plats principaux'],
  prepTime: 20,
  cookTime: 35,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '3 cuillères à soupe d\'huile',
    '3 poitrines de poulet tranchées',
    '1 poivron rouge tranché',
    '1 poivron vert tranché',
    '1 poivron jaune tranché',
    '1 oignon émincé',
    '1 cuillère à café de sel',
    '1 cuillère à café de poivre',
    '1 cuillère à soupe de poudre de chili',
    '1 cuillère à soupe de cumin',
    '1 cuillère à soupe de poudre d\'ail',
    '5 tasses de lait (1,4 L)',
    '4 tasses de pâtes penne (400 g)',
    '1 tasse de fromage jack râpé (100 g)'
  ],
  instructions: [
    'Faire chauffer l\'huile dans une grande casserole à feu vif.',
    'Ajouter le poulet et cuire jusqu\'à ce qu\'il ne reste plus de rose, environ 5-6 minutes, puis mettre de côté le poulet.',
    'Ajouter les poivrons et l\'oignon, cuire jusqu\'à ce que l\'oignon soit translucide, environ 6 minutes.',
    'Remettre le poulet dans la casserole avec le sel, le poivre, la poudre de chili, le cumin et la poudre d\'ail, en remuant jusqu\'à ce que le mélange soit bien enrobé, environ 30 secondes.',
    'Ajouter le lait et les penne en remuant constamment pour empêcher les pâtes de coller.',
    'Cuire environ 20 minutes jusqu\'à ce que les pâtes soient cuites et que le lait soit réduit en une sauce épaisse qui enrobe les pâtes.',
    'Ajouter le fromage et mélanger jusqu\'à ce qu\'il soit fondu.',
    'Déguster.'
  ],
  tags: ['pâtes', 'fajitas', 'fromage'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/pates-au-fajitas',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/pates-au-fajitas',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/pates-au-fajitas'
    }
  ],
  source: 'David Cloutier',
  slug: 'pates-au-fajitas'
};
