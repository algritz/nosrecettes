import { Recipe } from '@/types/recipe';

export const pouletDelhiAuBeurre: Recipe = {
  id: 'poulet-delhi-au-beurre',
  title: 'Poulet Delhi au beurre',
  description: 'Un plat indien savoureux avec du poulet mariné, grillé puis mijoté dans une sauce épicée au beurre et à la crème, garni de coriandre fraîche.',
  categories: ['Vollaille', 'Plats principaux'],
  prepTime: 20,
  cookTime: 25,
  marinatingTime: 60,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '4 cuisses de poulet entières, sans peau ou poitrine de poulet',
    '5 gousses d\'ail, écrasées',
    '1 morceau de 2 cm de gingembre, râpé finement',
    '3 ml de sel',
    '3 ml de paprika',
    '5 ml de chili en poudre',
    '3 ml de coriandre moulue',
    '3 ml de cumin',
    '3 ml de curcuma',
    '3 ml de garam masala',
    '10 ml de jus de lime',
    '250 ml de yogourt nature',
    '30 ml d\'huile végétale',
    '30 ml de beurre',
    '3 gousses d\'ail, pelées et hachées',
    '1 morceau de 2 cm de gingembre, râpé finement',
    '5 ml de coriandre',
    '5 ml de curcuma',
    '5 ml de garam masala',
    '3 ml de poudre de chili',
    '3 ml de paprika',
    '1 gousse de cardamome, écrasée',
    '800 g de tomates broyées en conserve',
    '15 g de cassonade',
    '5 ml de jus de citron',
    '25 g de beurre non salé',
    '100 ml de crème',
    'Coriandre fraîche, pour décorer',
    'Pain naan chaud, pour servir'
  ],
  instructions: [
    'Dans un bol, mélanger tous les ingrédients de la marinade.',
    'Faire des incisions sur la viande du poulet et ajouter à la marinade, en prenant soin de bien l’enrober. Laisser mariner une heure.',
    'Préchauffer le grill.',
    'Faire griller le poulet d’un côté jusqu’à ce qu’il soit bien coloré. Tourner et griller l’autre côté en s’assurant que le poulet n’est pas trop cuit.',
    'Dans une casserole, faire fondre le beurre.',
    'Ajouter l’ail et le gingembre et cuire 3-4 minutes.',
    'Ajouter les épices et continuer à cuire quelques minutes, en remuant.',
    'Ajouter les tomates, la cassonade et le jus de citron et laisser mijoter.',
    'Ajouter le poulet et laisser mijoter 10 minutes ou jusqu’à ce que le poulet soit complètement cuit.',
    'Ajouter le beurre et la crème et assaisonner au goût.',
    'Décorer de coriandre fraîche hachée et servir avec un pain naan chaud.'
  ],
  tags: ['épicé', 'curry', 'grill'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/poulet-delhi-au-beurre',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/poulet-delhi-au-beurre',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/poulet-delhi-au-beurre'
    }
  ],
  source: 'David Cloutier',
  slug: 'poulet-delhi-au-beurre'
};
