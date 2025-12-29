import { Recipe } from '@/types/recipe';

export const penneALaVodka: Recipe = {
  id: '1765124600743',
  title: 'Penne à la vodka',
  description: 'Pâtes au bœuf haché dans une sauce tomate–vodka crémée, relevée de piment rouge.',
  categories: ['Pâtes', 'Plats principaux', 'Boeuf'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 20, max: 20 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 cuillères à soupe d\'huile d\'olive',
    '1 oignon, haché',
    '1 gousse d\'ail, hachée',
    '1 lb de bœuf haché',
    '1 cuillère à café de sel',
    '1 cuillère à café de poivre',
    '1 boîte de 28 oz de tomates broyées',
    '1/2 tasse de vodka',
    '1/2 cuillère à café de flocons de piment rouge',
    '1/2 tasse de crème 35 %',
    '4 tasses de penne cuites',
    'Persil et parmesan, pour garnir'
  ],
  instructions: [
    'Cuire les penne dans une grande casserole d’eau bouillante salée; égoutter.',
    'Chauffer l’huile dans une grande casserole à feu vif. Cuire l’oignon jusqu’à ce qu’il soit translucide.',
    'Ajouter l’ail et mélanger.',
    'Ajouter le bœuf, le sel et le poivre; cuire jusqu’à évaporation du liquide et coloration du bœuf.',
    'Ajouter les tomates broyées, la vodka et les flocons de piment; remuer et cuire jusqu’à réduction d’environ moitié.',
    'Incorporer la crème et mélanger jusqu’à homogénéité.',
    'Ajouter les pâtes et enrober uniformément.',
    'Servir garni de persil et de parmesan.'
  ],
  tags: ['vodka', 'crème 35%', 'piment rouge'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/penne_a_la_vodka',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/penne_a_la_vodka',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/penne_a_la_vodka'
    }
  ],
  source: 'David Cloutier',
  slug: 'penne-a-la-vodka'
};
