import { Recipe } from '@/types/recipe';

export const soupeMexicaineALaMijoteuse: Recipe = {
  id: 'soupe-mexicaine-a-la-mijoteuse',
  title: 'Soupe mexicaine à la mijoteuse',
  description: 'Une soupe mexicaine réconfortante préparée à la mijoteuse, avec du poulet, des légumes, des épices et de la crème, servie avec de la coriandre fraîche.',
  categories: ['Soupes', 'Mijoteuse'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 240, max: 240 },
  servings: 8,
  difficulty: 'Facile',
  ingredients: [
    '5 ml d’huile d’olive',
    '4 poitrines de poulet sans peau coupées en petits cubes',
    '1 litre de bouillon de poulet réduit en sodium',
    '3 demi-poivrons de couleurs variées coupés en dés',
    '1 1/2 tasse de maïs en grains',
    '1 retit oignon rouge coupé en dés',
    '15 ml d’ail haché',
    '1 sachet d’assaisonnements à tacos de 24 g',
    '15 ml de poudre de chili',
    '1 jalapeño épépiné et haché',
    '1 boîte de haricots rouges de 540 ml, rincés et égouttés',
    'Sel au goût',
    '1 tasse de crème 15%',
    '1/4 de tasse de coriandre fraîche émincée'
  ],
  instructions: [
    'Dans une poêle, chauffer l’huile à feu moyen. Faire dorer les cubes de poulet sur toutes les faces de 3 à 4 minutes.',
    'Déposer le poulet dans la mijoteuse.',
    'Ajouter le bouillon, les poivrons, le maïs, l’oignon, l’ail, les assaisonnements à tacos, la poudre de chili, le jalapeño et les haricots rouges.',
    'Saler et remuer.',
    'Couvrir et cuire de 3 à 4 heures à faible intensité.',
    'Ajouter la crème et remuer.',
    'Couvrir et prolonger la cuisson de 10 minutes à intensité élevée.',
    'Ajouter la coriandre et remuer.',
    'Servir.'
  ],
  tags: ['épicée', 'tacos', 'mijoteuse'],
  slug: 'soupe-mexicaine-a-la-mijoteuse'
};
