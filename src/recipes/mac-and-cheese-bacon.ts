import { Recipe } from '@/types/recipe'

export const macAndCheeseBacon: Recipe = {
  id: 'mac-en-cheese-bacon',
  title: 'Mac and cheese bacon',
  description: '',
  categories: ['Plats principaux'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 30, max: 30 },
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
    'Poivre au goût',
  ],
  instructions: [
    'Dans une casserole ou une grande poêle profonde à feu moyen-élevé, faire dorer le bacon.',
    'Ajouter les épices et cuire une minute en remuant.',
    'Ajouter le bouillon de poulet et le lait.',
    'Porter à ébullition et ajouter les macaronis.',
    'Cuire à feu moyen de 16 à 18 minutes couvert ou jusqu’à ce que les pâtes soient tendres, en remuant fréquemment.',
    'Retirer du feu, ajouter les fromages et poivrer.',
  ],
  tags: ['bacon', 'fromage', 'pâtes'],
  images: [
    {
      small:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/mac-en-cheese-bacon',
      medium:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/mac-en-cheese-bacon',
      large:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/mac-en-cheese-bacon',
    },
  ],
  source: 'David Cloutier',
  slug: 'mac-and-cheese-bacon',
}
