import { Recipe } from '@/types/recipe';

export const coquillesFarciesAuStyleTacos: Recipe = {
  id: 'coquilles-farcies-au-style-tacos',
  title: 'Coquilles farcies au style tacos',
  description: 'Une recette de coquilles farcies inspirée des tacos, garnies de bœuf haché, sauce tomate et fromage, cuites au four.',
  categories: ['Plats principaux'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 20, max: 20 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 boite de coquilles de pâtes',
    '1 lb de bœuf haché',
    '1 oignon haché finement',
    '1 gousse d\'ail haché finement',
    '1 sachet d\'assaisonnement pour taco',
    '1 tasse de fromage râpé',
    '1 1/2 tasse de sauce tomate',
    'Sel et poivre au goût'
  ],
  instructions: [
    'Préchauffez le four à 350°F et graissez un plat à gratin.',
    'Faites cuire les coquilles de pâtes selon les instructions du paquet. Égouttez et réservez.',
    'Dans une poêle, faites cuire le bœuf haché, avec l\'ail et l\'oignon.',
    'Ajouter l\'assaisonnement pour tacos.',
    'Farcissez chaque coquille avec le mélange de bœuf, disposez-les dans le plat à gratin et versez la sauce tomate par-dessus.',
    'Saupoudrez de fromage râpé et enfournez pendant 20 minutes, jusqu\'à ce que le fromage soit fondu.'
  ],
  tags: ['tacos', 'fromage', 'four'],
  slug: 'coquilles-farcies-au-style-tacos'
};
