import { Recipe } from '@/types/recipe';

export const boulettesDeBufMassala: Recipe = {
  id: 'boulettes-de-b-uf-massala',
  title: 'Boulettes de bœuf massala',
  description: 'Une recette de boulettes de bœuf parfumées au garam massala, servies avec une sauce crémeuse à la tomate et aux épices.',
  categories: ['Plats principaux', 'Végétarien'],
  prepTime: 15,
  cookTime: 55,
  servings: 3,
  difficulty: 'Facile',
  ingredients: [
    '1 lbs de viande hachée de bœuf',
    '1 bouquet de persil et/ou de coriandre',
    '1 œuf',
    '1 poignée de gruau',
    '1 gousse d’ail',
    '1 petit oignon',
    'sel',
    'poivre',
    'paprika',
    '150 ml de coulis de tomate',
    '250 ml de crème 35%',
    '1 gousse d’ail',
    '1 cuillerée à soupe de garam massala',
    '1 cm de racine de gingembre fraîche pelée et râpée',
    '1 cuillerée à café de cumin',
    '1 cuillerée à café de paprika',
    'coriandre fraîche ciselée'
  ],
  instructions: [
    'Mélanger l’ail et l’oignon ensemble.',
    'Mélanger tous les ingrédients avec les mains.',
    'Former des boulettes.',
    'Cuire les boulettes dans une poêle avec un fond d’huile jusqu’à ce qu’elles soient bien colorées sur toutes leurs surfaces. Réserver.',
    'Dans la même poêle, faire chauffer de l’huile avec la gousse d’ail pelée et écrasée.',
    'Ajouter le cumin, le paprika, le garam massala et le gingembre. Saler et poivrer.',
    'Verser le coulis de tomates et la crème. Laisser cuire à feu doux pendant 20 minutes.',
    'Ajouter les boulettes de bœuf et poursuivre la cuisson pendant 10 minutes.',
    'Juste avant de servir, parsemer de coriandre ciselée.'
  ],
  tags: ['épices', 'curry', 'sauce crémeuse'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/boulettes-de-b-uf-massala',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/boulettes-de-b-uf-massala',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/boulettes-de-b-uf-massala'
    }
  ],
  accompaniment: 'riz basmati et pains naan',
  source: 'David Cloutier',
  slug: 'boulettes-de-buf-massala'
};
