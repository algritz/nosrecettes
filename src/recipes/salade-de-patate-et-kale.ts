import { Recipe } from '@/types/recipe';

export const saladeDePatateEtKale: Recipe = {
  id: 'salade-de-patate-et-kale',
  title: 'Salade de patate et kale',
  description: 'Une salade fraîche et savoureuse à base de pommes de terre, kale, câpres, et une vinaigrette citronnée.',
  categories: ['Salades'],
  prepTime: 20,
  cookTime: 30,
  servings: 8,
  difficulty: 'Facile',
  ingredients: [
    '1 1/2 lb de pomme de terre grelot brossées',
    '1/2 oignon rouge coupé en tranches très fines',
    '5 cuillères à soupe d\'huile d\'olive',
    '2 cuillères à soupe de jus de citron',
    '1 cuillère à soupe de vinaigre balsamique blanc',
    '1 cuillère à soupe de moutarde de Dijon',
    '3 à 4 grandes feuilles de chou kale, le bout des tiges enlevées',
    '2 cuillères à soupe de câpres égouttées',
    '1/2 tasse de persil haché',
    'Sel et poivre'
  ],
  instructions: [
    'Dans une grande casserole d\'eau bouillante salée, cuire les pommes de terre pendant 15 minutes ou jusqu\'à ce qu\'elles soient tendres mais encore légèrement croquantes.',
    'Égoutter les pommes de terre, les laisser refroidir légèrement, puis les couper en quartiers.',
    'Les mettre dans un saladier et réserver.',
    'Hacher l\'oignon, le kale, le persil et les câpres et ajouter aux pommes de terre.',
    'Dans une tasse à mesurer, à l\'aide d\'un fouet, mélanger l\'huile, le jus de citron, le vinaigre et la moutarde.',
    'Saler et poivrer.',
    'Verser la vinaigrette sur les pommes de terre dans le saladier et mélanger délicatement pour bien les enrober.'
  ],
  tags: ['salade', 'citron', 'kale'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/salade-de-patate-et-kale',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/salade-de-patate-et-kale',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/salade-de-patate-et-kale'
    }
  ],
  source: 'David Cloutier',
  slug: 'salade-de-patate-et-kale'
};
