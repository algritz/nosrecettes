import { Recipe } from '@/types/recipe';

export const saumonEnSaucePrimavera: Recipe = {
  id: 'saumon-en-sauce-primavera',
  title: 'Saumon en sauce primavera',
  description: 'Un plat de saumon en sauce crémeuse avec légumes, parfumé à la moutarde et au miel.',
  categories: ['Poisson', 'Plats principaux'],
  prepTime: { min: 35, max: 35 },
  cookTime: { min: 30, max: 30 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '4 filets de saumon',
    '1 oignon, émincé finement',
    '1 carotte, en juliennes',
    '1 poireau, émincé finement',
    '1 céleri, en petits dés',
    '1 piment rouge doux',
    'Huile végétale, pour la cuisson',
    '1 c. à soupe (15 ml) moutarde de Dijon',
    '1 c. à soupe (15 ml) miel',
    '1 3/4 tasse crème 35%, épaisse',
    'Sel',
    'Poivre'
  ],
  instructions: [
    'Faire revenir le saumon dans une grande poêle environ 5 min de chaque côté. Saler et poivrer.',
    'Retirer de la poêle et réserver.',
    'Dans la même poêle, ajouter de l\'huile et faire revenir tous les légumes, jusqu\'à ce que les oignons deviennent transparents.',
    'Ajouter la moutarde de Dijon, le miel et la crème.',
    'Saler et poivrer au goût.',
    'Ajouter les filets de saumon dans la sauce et laisser mijoter environ 5 min ou jusqu\'à ce que les filets soient bien cuits à l\'intérieur et que la sauce soit à la consistance désirée.'
  ],
  tags: ['crémeux', 'moutarde', 'mijoter'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/saumon-en-sauce-primavera',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/saumon-en-sauce-primavera',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/saumon-en-sauce-primavera'
    }
  ],
  source: 'David Cloutier',
  slug: 'saumon-en-sauce-primavera'
};
