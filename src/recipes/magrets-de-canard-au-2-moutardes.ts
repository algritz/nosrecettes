import { Recipe } from '@/types/recipe';

export const magretsDeCanardAu2Moutardes: Recipe = {
  id: '1764522392304',
  title: 'Magrets de canard au 2 moutardes',
  description: 'Magrets saisis puis rôtis, nappés d’une sauce au vin blanc, crème et double moutarde.',
  categories: ['Gibier à plumes', 'Plats principaux'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 20, max: 20 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '4 magrets ou poitrines de canard',
    '2 échalotes',
    '1 verre de vin blanc',
    '1/2 tasse de bouillon de canard ou poulet',
    '200 ml de crème 35 % fraîche',
    '1 c. à soupe de moutarde de Dijon',
    '1 c. à soupe de moutarde à l\'ancienne'
  ],
  instructions: [
    'Quadriller la partie grasse des poitrines avec un couteau.',
    'Dans une poêle, chauffer un peu d\'huile et saisir les poitrines à feu vif de chaque côté.',
    'Retirer et disposer le canard dans un plat allant au four.',
    'Cuire au four à 350°F environ 20 minutes, ou jusqu’à ce que le canard soit bien rosé.',
    'Dans la poêle de cuisson des magrets, ajouter les échalotes finement hachées.',
    'Ajouter les deux moutardes et laisser rissoler.',
    'Ajouter le vin blanc et laisser réduire.',
    'Ajouter le bouillon de canard ou poulet.',
    'Ajouter la crème fraîche, saler et laisser réduire.',
    'Couper les magrets en tranches, les remettre dans la sauce quelques secondes pour les réchauffer et servir.'
  ],
  tags: ['Dijon', 'moutarde à l\'ancienne', 'vin blanc'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/magret_2_moutardes',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/magret_2_moutardes',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/magret_2_moutardes'
    }
  ],
  source: 'David Cloutier',
  slug: 'magrets-de-canard-au-2-moutardes'
};
