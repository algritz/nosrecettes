import { Recipe } from '@/types/recipe';

export const macEnCheeseBacon: Recipe = {
  id: 'mac-en-cheese-bacon',
  title: 'Mac en cheese bacon',
  description: '',
  categories: ['Plats principaux'],
  prepTime: 20,
  cookTime: 30,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '3 tranches de bacon, coupée en dés',
    '5 ml de moutarde sèche',
    '5 ml de poudre de chili',
    '3 tasses de bouillon de poulet maison',
    '2 tasses de lait',
    '2 1/4 tasses de macaronis',
    '1/4 tasse de fromage mascarpone',
    '2 tasses de fromage cheddar orange fort râpé',
    'Poivre au goût'
  ],
  instructions: [
    'Dans une casserole ou une grande poêle profonde à feu moyen-élevé, faire dorer le bacon.',
    'Ajouter les épices et cuire une minute en remuant.',
    'Ajouter le bouillon de poulet et le lait.',
    'Porter à ébullition et ajouter les macaronis.',
    'Cuire à feu moyen de 16 à 18 minutes couvert ou jusqu’à ce que les pâtes soient tendres, en remuant fréquemment.',
    'Retirer du feu, ajouter les fromages et poivrer.'
  ],
  tags: ['bacon', 'fromage', 'pâtes'],
  slug: 'mac-en-cheese-bacon'
};
