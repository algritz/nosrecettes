import { Recipe } from '@/types/recipe';

export const steakDeThonMediterraneen: Recipe = {
  id: '1758813505090',
  title: 'Steak de thon méditerranéen',
  description: '',
  categories: ['Plats principaux', 'Poisson', 'Barbecue'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 10, max: 10 },
  marinatingTime: { min: 45, max: 45 },
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    '2 à 4 steak de thon',
    '4 de tasse huile d\'olive',
    'le jus d\'un demi citron',
    '1 c. à thé cumin en graine',
    '1 morceau de gingembre d\'un pouce haché finement',
    '1 gousse d\' haché finement',
    '1 c. à soupe ou plus de coriandre haché Une pincée safran sel et poivre'
  ],
  instructions: [
    'Moudre le cumin et mettre dans un bol.',
    'Moudre le safran et ajouter le jus de citron au safran, laisser reposer 2-3 minutes et verser dans le même bol que le cumin moulu Ajouter dans ce bol le reste des ingrédients et y faire mariner le poisson 20 à 30 minutes.',
    'Cuire pas trop longtemps sur le grill.'
  ],
  tags: ['thon', 'poisson'],
  accompaniment: 'Salade Grècque',
  source: 'David Cloutier',
  slug: 'steak-de-thon-mediterraneen'
};
