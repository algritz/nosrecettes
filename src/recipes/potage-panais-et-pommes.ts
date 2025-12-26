import { Recipe } from '@/types/recipe';

export const potagePanaisEtPommes: Recipe = {
  id: 'potage-panais-et-pommes',
  title: 'Potage panais et pommes',
  description: 'Une soupe douce et parfumée à base de panais, pommes, et pommes de terre, relevée de thym et de cari de Madras.',
  categories: ['Soupes'],
  prepTime: 20,
  cookTime: 30,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '45 ml Huile d’olive',
    'Un oignon moyen, haché grossièrement',
    'Sel de mer et poivre au goût',
    '2 gousses d’ail, écrasées',
    '5 à 6 panais, pelés et coupés en morceaux',
    'Une grosse pomme de terre, pelée et coupée en morceaux',
    'Un blanc de poireau, haché grossièrement',
    '3 pommes Spartan ou Cortland',
    '3 branches de thym frais',
    '5 litre d\'eau bouillante',
    '⅓ tasse de crème 35%'
  ],
  instructions: [
    'Pelez les pommes, coupez en morceaux.',
    'Dans une casserole à feu moyen, faites chauffer l’huile et ajoutez-y l’oignon. Salez et poivrez. Faites cuire 2 minutes en remuant.',
    'Ajoutez l’ail, les panais, la pomme de terre, le poireau, les morceaux de pomme ainsi que les branches de thym. Faites cuire le tout en remuant pendant 6 minutes.',
    'Rectifiez l’assaisonnement.',
    'Versez l’eau et laissez mijoter environ 20 minutes, jusqu’à ce que les légumes soient tendres.',
    'Retirez les branches de thym et réduisez la soupe au mélangeur jusqu’à obtenir un potage lisse.',
    'Rectifiez l’assaisonnement. Si désiré, ajoutez la crème.',
    'Répartissez le potage dans des bols, garnissez de tranches de pomme et d’un peu d’huile d’olive.'
  ],
  tags: ['soupe', 'panais', 'cari'],
  notes: 'Parfumez le potage en y ajoutant de 15 ml de cari de Madras.',
  slug: 'potage-panais-et-pommes'
};
