import { Recipe } from '@/types/recipe';

export const sauceAPoutineALaGuinness: Recipe = {
  id: 'sauce-a-poutine-a-la-guinness',
  title: 'Sauce à poutine à la Guinness',
  description: 'Pour une poutine à saveur irlandaise Sauce à poutine à la Guinness',
  categories: ['Sauces', 'Plats principaux'],
  prepTime: 10,
  cookTime: 15,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 cuillères à soupe de beurre',
    '1 1/4 de tasse (65 ml) d’oignon émincé très finement',
    '2 cuillères à thé de moutarde de Dijon',
    '2 cuillères à thé de fécule de maïs',
    '1 tasse (250 ml) de bouillon de poulet',
    '1 tasse (250 ml) de bière Guinness',
    'Sel et poivre au goût'
  ],
  instructions: [
    'Dans un chaudron, faites fondre le beurre à feu moyen.',
    'Ajouter les oignons et faire cuire pendant 5 minutes.',
    'Ajouter la moutarde.',
    'Mélanger 1/4 de tasse de bouillon avec la fécule de maïs et mettre de côté.',
    'Ajouter le restant du bouillon et la bière dans le chaudron.',
    'Ajouter le mélange de bouillon et fécule de maïs.',
    'Porter à ébullition, puis réduire le feu et laisser mijoter jusqu’à ce que la sauce ait épaissi.',
    'Assaisonner de sel et de poivre.',
    'Servir sur des frites maison et du fromage en crotte frais.'
  ],
  tags: ['irish', 'sauce', 'mijoter'],
  slug: 'sauce-a-poutine-a-la-guinness'
};
