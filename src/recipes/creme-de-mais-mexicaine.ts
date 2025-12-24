import { Recipe } from '@/types/recipe';

export const cremeDeMaisMexicaine: Recipe = {
  id: 'creme-de-mais-mexicaine',
  title: 'Crème de maïs mexicaine',
  description: 'Une soupe crémeuse de maïs mexicaine avec bacon, poivron vert et piment, garnie de coriandre.',
  categories: ['Soupes'],
  prepTime: 30,
  cookTime: 20,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 grosse boîte de maïs en grain égoutté',
    '1 oignon haché',
    '2 c. à soupe de beurre',
    '1 grosse pomme de terre coupée en dés',
    '500 ml de lait',
    '500 ml d\'eau',
    '4 tranches de bacon',
    '1/2 poivron vert',
    '1 petit piment rouge piquant (peut être remplacé par de la Sriracha)',
    'Sel, poivre',
    'Coriandre'
  ],
  instructions: [
    'Dans une chaudron, faire dorer l\'oignon dans le beurre.',
    'Réserver 4 cuillères à soupe de maïs.',
    'Ajouter à l\'oignon le reste du maïs, la pomme de terre coupée en dés, le lait et l\'eau.',
    'Saler, poivrer et laisser mijoter environ 15 minutes.',
    'Mixer avec un pied mélangeur.',
    'Dans une poêle, faire revenir le bacon avec le poivron vert et les piments.',
    'Verser le bacon et les piments dans la crème de maïs.',
    'Ajouter les 4 c. à soupe de maïs mis de côté.',
    'Bien brasser et servir avec de la coriandre.'
  ],
  tags: ['maïs', 'bacon', 'soupe'],
  slug: 'creme-de-mais-mexicaine'
};
