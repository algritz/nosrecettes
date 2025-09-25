import { Recipe } from '@/types/recipe';

export const poutineClassique: Recipe = {
  id: '1',
  title: 'Poutine Classique',
  description: 'La poutine traditionnelle du Québec avec frites, fromage en grains et sauce brune.',
  categories: ['Plats principaux'],
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
  tags: ['traditionnel', 'frites', 'fromage'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/poutine',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/poutine',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/poutine'
    }
  ],
  source: 'David Cloutier',
  notes: 'Vous pouvez faire cuire les frites au four à 425°F si vous préférez',
  slug: 'poutine-classique'
};
