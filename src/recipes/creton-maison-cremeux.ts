import { Recipe } from '@/types/recipe';

export const cretonMaisonCremeux: Recipe = {
  id: 'creton-maison-cremeux',
  title: 'Creton maison crémeux',
  description: 'Des creton maison, c\'est bien meilleur que ceux acheté à l\'épicerie',
  categories: ['Végétarien'],
  prepTime: 10,
  cookTime: 50,
  servings: 2.5,
  difficulty: 'Facile',
  ingredients: [
    '2 lbs porc hachés',
    '1 c. à soupe de gras de canard',
    '1 oignon haché finement',
    '1 gousse d\'ail haché très finement',
    '2 boîtes de crème de champignon',
    '1 tasse de lait',
    '1 tasse de grau',
    '1 c. à soupe d\'épices à creton'
  ],
  instructions: [
    'Faire sauter l\'oignon et l\'ail dans le gras de canard.',
    'Ajouter les autres ingrédients.',
    'Cuire 45 minutes à découvert en brassant régulièrement.',
    'Laisser refroidir.'
  ],
  tags: ['crémeux', 'creton', 'ragoût'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/creton-maison-cremeux',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/creton-maison-cremeux',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/creton-maison-cremeux'
    }
  ],
  source: 'David Cloutier',
  slug: 'creton-maison-cremeux'
};
