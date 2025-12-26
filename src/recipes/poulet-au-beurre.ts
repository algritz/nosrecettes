import { Recipe } from '@/types/recipe';

export const pouletAuBeurre: Recipe = {
  id: 'poulet-au-beurre',
  title: 'Poulet au beurre',
  description: 'Un plat savoureux de poulet mijoté dans une sauce parfumée au beurre, épices et amandes, servi avec du riz ou du naan.',
  categories: ['Vollaille', 'Plats principaux'],
  prepTime: 15,
  cookTime: 45,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '3 poitrines de poulet sans la peau et désossées, coupées en cubes',
    '45 ml de beurre non salé, clarifié',
    '1 oignon, finement haché',
    '1 ml de cannelle moulue',
    '10 ml de gingembre frais, râpé',
    '1 gousse d\'ail, écrasée',
    '3 gousses de cardamome, les graines seulement, bien écrasées',
    '5 ml de curcuma',
    '1/2 piment rouge, séché et émincé',
    '15 ml de pâte de tomate',
    '65 ml d\'amandes effilées et finement hachées',
    '125 ml de tomates en dés, en conserve',
    '190 ml de yogourt nature 2 %',
    '65 ml de crème 15 %',
    '45 ml de coriandre fraîche, hachée',
    'Sel et poivre, au goût'
  ],
  instructions: [
    'Dans une poêle, faire chauffer le beurre. Ajouter les cubes de poulet et chauffer à feu moyen 5 min tout en remuant.',
    'Retirer le poulet et réserver dans un plat.',
    'Dans la même poêle, faire sauter l’oignon et la cannelle environ 3 minutes.',
    'Incorporer le gingembre, l’ail, la cardamome, le curcuma et le piment. Cuire 5 min en remuant.',
    'Incorporer le poulet au mélange. Ajouter la pâte de tomate, les amandes et les tomates en dés. Bien mélanger et couvrir.',
    'Baisser le feu et laisser mijoter de 15 à 18 minutes.',
    'Dans un petit bol, mélanger le yogourt et la crème. Ajouter ce mélange à la poêle et chauffer 2 min, sans faire bouillir.',
    'Saler et poivrer.',
    'Garnir le poulet au beurre de feuilles de coriandre.'
  ],
  tags: ['épicé', 'curry', 'amandes'],
  slug: 'poulet-au-beurre'
};
