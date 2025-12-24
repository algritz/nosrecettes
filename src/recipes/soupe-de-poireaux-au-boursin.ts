import { Recipe } from '@/types/recipe';

export const soupeDePoireauxAuBoursin: Recipe = {
  id: 'soupe-de-poireaux-au-boursin',
  title: 'Soupe de poireaux au Boursin',
  description: 'Une soupe onctueuse de poireaux et pommes de terre, enrichie de Boursin ail et fines herbes, garnie de ciboulette.',
  categories: ['Soupes'],
  prepTime: 15,
  cookTime: 35,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '4 poireaux parties blanches et vertes qui sont tendres',
    '2 pommes de terre moyennes',
    '1 oignon',
    '2 gousses d\'ail',
    '1 litre de bouillon de poulet',
    '150 g de Boursin ail et fines herbes',
    '2 cuillères à soupe d\'huile d\'olive',
    'Sel et poivre au goût',
    'Quelques brins de ciboulette pour la garniture'
  ],
  instructions: [
    'Lavez et coupez les poireaux en rondelles.',
    'Épluchez et coupez les pommes de terre en petits dés.',
    'Émincez l\'oignon et l\'ail.',
    'Dans une grande casserole, chauffez l\'huile d\'olive à feu moyen.',
    'Ajoutez l\'oignon et l\'ail, et faites-les revenir jusqu\'à ce qu\'ils soient translucides.',
    'Ajoutez les poireaux dans la casserole et faites-les suer pendant environ 5 minutes, jusqu\'à ce qu\'ils soient tendres.',
    'Incorporez les pommes de terre en dés, puis versez le bouillon.',
    'Portez à ébullition, puis réduisez le feu et laissez mijoter pendant environ 20 minutes, ou jusqu\'à ce que les pommes de terre soient bien cuites.',
    'Une fois les légumes cuits, ajoutez le Boursin dans la soupe.',
    'Mélangez bien pour qu\'il fonde et se répartisse uniformément.',
    'Salez et poivrez.',
    'Réduisez le tout au pied mélangeur pour obtenir une texture lisse et onctueuse.',
    'Servez la soupe et garnissez de ciboulette.'
  ],
  tags: ['onctueuse', 'ciboulette', 'boursin'],
  slug: 'soupe-de-poireaux-au-boursin'
};
