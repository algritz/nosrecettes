import { Recipe } from '@/types/recipe';

export const trempetteANachos: Recipe = {
  id: 'trempette-a-nachos',
  title: 'Trempette à Nachos',
  description: 'Une trempette savoureuse à base de bœuf, haricots rouges et fromage, parfaite pour accompagner des nachos ou comme apéritif chaud.',
  categories: ['Entrées', 'Végétarien'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 40, max: 40 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '225 g de fromage à la crème, à la température ambiante',
    '15 ml d\'huile d\'olive',
    '450 g de boeuf haché',
    '1 oignon blanc, coupé en dés',
    '2 gousses d\'ail, émincées',
    '1 piment serrano, émincé',
    '65 ml de sauce chili',
    '15 ml de poudre de chili',
    '5 ml de cumin moulu',
    '425 ml de haricots rouges, rincés et égouttés',
    '5 ml de sel (plus ou moins, au goût)',
    '250 ml de fromage cheddar fort émietté',
    'Nachos'
  ],
  instructions: [
    'Chauffer l’huile à feu moyen dans une poêle à frire.',
    'Faire sauter l’oignon à feu moyen-doux avec une pincée de sel, jusqu’à ce qu’il soit translucide.',
    'Ajouter l’ail et le piment serrano et poursuivre la cuisson jusqu’à ce qu’ils libèrent leurs arômes.',
    'Ajouter le bœuf et une pincée de sel. Quand le bœuf est cuit, ajouter la sauce chili, la poudre de chili, le cumin et le sel.',
    'Laisser mijoter quelques minutes, en mélangeant, jusqu’à ce que la sauce commence à réduire.',
    'Ajouter les haricots, mélanger et laisser réduire quelques minutes de plus.',
    'Retirer du feu et laisser refroidir à la température ambiante.',
    'Préchauffer le four à 350 °F (180 °C).',
    'Étendre le fromage à la crème dans une assiette à tarte de céramique ou de verre, ajouter le mélange de bœuf et de haricots et parsemer de fromage cheddar.',
    'Faire chauffer au four jusqu’à ce que le fromage soit fondu, de 20 à 30 minutes.',
    'Ajouter les ingrédients de la garniture, s’il y a lieu, et servir.'
  ],
  tags: ['fromage', 'bœuf', 'four'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/trempette-a-nachos',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/trempette-a-nachos',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/trempette-a-nachos'
    }
  ],
  source: 'David Cloutier',
  slug: 'trempette-a-nachos'
};
