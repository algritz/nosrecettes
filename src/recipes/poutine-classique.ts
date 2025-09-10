import { Recipe } from '@/types/recipe';

export const poutineClassique: Recipe = {
  id: '1',
  title: 'Poutine Classique',
  description: 'La poutine traditionnelle québécoise avec frites, fromage en grains et sauce brune.',
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
    'Sel au goût'
  ],
  instructions: [
    'Éplucher et couper les pommes de terre en frites.',
    'Faire chauffer l\'huile à 350°F (175°C).',
    'Faire frire les pommes de terre jusqu\'à ce qu\'elles soient dorées.',
    'Égoutter les frites et les saler.',
    'Disposer les frites dans un plat, ajouter le fromage en grains.',
    'Verser la sauce brune chaude par-dessus.',
    'Servir immédiatement.'
  ],
  tags: ['Légumes'],
  images: [
    {
      small: '/images/poutine-classique-small.jpg',
      medium: '/images/poutine-classique-medium.jpg',
      large: '/images/poutine-classique-large.jpg'
    }
  ],
  source: 'David Cloutier',
  slug: 'poutine-classique'
};
