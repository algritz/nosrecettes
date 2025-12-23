import { Recipe } from '@/types/recipe';

export const araigneesAuChocolat: Recipe = {
  id: 'araignees-au-chocolat',
  title: 'Araignées au chocolat',
  description: '',
  categories: ['Végétarien'],
  prepTime: 15,
  cookTime: 15,
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    '1 paquet (300gr) de chipits butterscoth (caramel écossais)',
    '1 paquet (300gr) de chipits de chocolat mi-amer',
    '1 paquet de nouilles frites de 225g',
    'A votre goût ajoutez canneberges, arachides salées pour un ti côtés salé-sucré'
  ],
  instructions: [
    'Faire fondre à feu doux les deux paquets de chipits ensemble.',
    'Une fois les chipits fondus ajouter les nouilles frites.',
    'Déposez à la cuillère sur une plaque à biscuit, garnissez à votre goût si désirez et réfrigérer 30 minutes.'
  ],
  tags: ['chocolat', 'fondre', 'salé-sucré'],
  marinatingTime: 30,
  slug: 'araignees-au-chocolat'
};
