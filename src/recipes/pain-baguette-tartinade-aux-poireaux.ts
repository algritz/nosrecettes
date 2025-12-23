import { Recipe } from '@/types/recipe';

export const painBaguetteTartinadeAuxPoireaux: Recipe = {
  id: 'pain-baguette-tartinade-aux-poireaux',
  title: 'Pain baguette tartinade aux poireaux',
  description: 'Une tartinade savoureuse à base de poireaux, servie sur des baguettes dorées et gratinées au fromage.',
  categories: ['Entrées'],
  prepTime: 10,
  cookTime: 15,
  servings: 8,
  difficulty: 'Facile',
  ingredients: [
    '1 poireau la partie verte incluse',
    '5 ml d\'huile d’olive',
    '2 c. à soupe de farine tout usage',
    '1 tasse de lait',
    '1 c. à thé de moutarde de Dijon',
    'Poivre',
    'Sel',
    'Une baguette de pain',
    '1 tasse de fromage râpé'
  ],
  instructions: [
    'Trancher finement le poireau.',
    'Dans un poêlon antiadhésif moyen, chauffer l’huile à feu moyen.',
    'Ajouter le poireau et cuire 5 ou 6 minutes, jusqu’à ce qu’il soit tendre, en remuant à quelques reprises.',
    'Saupoudrer le poireau de farine et mélanger pour bien l’enrober.',
    'Ajouter le lait et la moutarde. Bien mélanger.',
    'Poivrer généreusement et ajouter le sel.',
    'Réduire à feu moyen-doux et poursuivre la cuisson 3 ou 4 minutes, jusqu’à ce que la sauce épaississe, en remuant.',
    'Retirer du feu.',
    'Préchauffer le four à gril (broil).',
    'Trancher la baguette en deux sur l’épaisseur et couper chaque morceau en deux.',
    'Déposer les pains sur une plaque de cuisson et cuire sous le gril 1 ou 2 minutes, jusqu’à ce que le pain commence à dorer.',
    'Retirer du four.',
    'Répartir le mélange de poireau sur les croûtons de pain et garnir de fromage râpé.',
    'Dorer sous le gril 3 minutes ou jusqu’à ce que le fromage soit gratiné.'
  ],
  tags: ['poireaux', 'gril', 'fromage'],
  slug: 'pain-baguette-tartinade-aux-poireaux'
};
