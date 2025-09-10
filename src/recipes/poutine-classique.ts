import { Recipe } from '@/types/recipe';

export const poutineclassiqueRecipe: Recipe = {
  id: '1',
  title: 'Poutine Classique',
  description: 'La poutine traditionnelle du Qu�bec avec frites, fromage en grains et sauce brune.',
  category: 'Plats principaux',
  prepTime: 15,
  cookTime: 30,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '4 grosses pommes de terre',
    '200g de fromage en grains frais',
    '2 tasses de sauce brune',
    'Huile pour friture',
    'Sel au go�t'
  ],
  instructions: [
    '�plucher et couper les pommes de terre en frites.',
    'Faire chauffer l\'huile � 350�F (175�C).',
    'Faire frire les pommes de terre jusqu\'� ce qu\'elles soient dor�es.',
    '�goutter les frites et les saler.',
    'Disposer les frites dans un plat, ajouter le fromage en grains.',
    'Verser la sauce brune chaude par-dessus.',
    'Servir imm�diatement.'
  ],
  tags: ['L�gumes'],
  image: '/images/poutine-classique.jpg',
  source: 'David Cloutier',
  slug: 'poutine-classique'
};
