import { Recipe } from '@/types/recipe'

export const boucheesDeBrowniesPetitesBoulesAuxDattes: Recipe = {
  id: 'bouchees-de-brownies-petites-boules-aux-dattes',
  title: 'Bouchées de brownies (Petites boules aux dattes)',
  description: '',
  categories: ['Végétarien'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 5, max: 5 },
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    '1/2 tasse de dattes séchées dénoyautées et hachées grossièrement',
    '1/2 tasse d’eau',
    '100 g de chocolat noir concassé',
    '1 tasse de chapelure de biscuits Graham ou autre biscuits secs',
    'Noix pour enrobage',
  ],
  instructions: [
    'Dans une casserole moyenne, mélanger les dattes et l’eau, porter à ébullition et cuire 5 minutes à feu moyen-vif ou jusqu’à ce qu’il ne reste presque plus d’eau dans la casserole.',
    'Retirer du feu, réduire les dattes en purée à la fourchette (pied mélangeur).',
    'Ajouter le chocolat et remuer pour faire fondre.',
    'Incorporer la chapelure à la préparation.',
    'Former des boules d’environ 30 ml (2 c. à soupe) et réfrigérer.',
  ],
  tags: ['dattes', 'boules', 'réfrigération'],
  slug: 'bouchees-de-brownies-petites-boules-aux-dattes',
}
