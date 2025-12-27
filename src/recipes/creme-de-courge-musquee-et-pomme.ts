import { Recipe } from '@/types/recipe';

export const cremeDeCourgeMusqueeEtPomme: Recipe = {
  id: 'creme-de-courge-musquee-et-pomme',
  title: 'Crème de courge musquée et pomme',
  description: 'Une soupe crémeuse à base de courge musquée et de pomme, parfumée aux épices chinoises et à la sauge.',
  categories: ['Soupes'],
  prepTime: 20,
  cookTime: 40,
  servings: 6,
  difficulty: 'Facile',
  ingredients: [
    '2 c. à soupe de beurre',
    '1 oignon moyen, coupé en dés',
    '1 courge musquée, pelée et coupée en morceaux',
    '1 grosse pomme, pelée, épépinée et coupée en morceaux',
    '1 l de bouillon de poulet',
    '1/8 c. à thé de mélange cinq épices chinoises',
    '1 c. à soupe de sauge fraîche, ou 1 cuillère à thé de sauge séchée',
    '1/2 tasse de crème 35%',
    'Sel et poivre au goût'
  ],
  instructions: [
    'Faire fondre le beurre dans une grande casserole à feu moyen.',
    'Ajouter les oignons et les faire revenir jusqu\'à ce qu\'ils soient translucides, soit pendant environ 5 minutes.',
    'Ajouter la courge et les morceaux de pommes, puis incorporer le bouillon de poulet, le mélange cinq épices chinoises et la sauge.',
    'Amener le mélange à ébullition, puis réduire le feu et laisser mijoter, à couvert, jusqu\'à ce que la courge soit très tendre, environ 30 minutes.',
    'Transformer en purée à l\'aide d\'un pied mélangeur.',
    'Incorporer la crème, et porter à ébullition de nouveau.',
    'Assaisonner avec du sel et du poivre.'
  ],
  tags: ['soupe', 'crème', 'épicé'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/creme-de-courge-musquee-et-pomme',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/creme-de-courge-musquee-et-pomme',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/creme-de-courge-musquee-et-pomme'
    }
  ],
  source: 'David Cloutier',
  slug: 'creme-de-courge-musquee-et-pomme'
};
