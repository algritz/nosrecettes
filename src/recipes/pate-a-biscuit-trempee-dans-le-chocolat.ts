import { Recipe } from '@/types/recipe';

export const pateABiscuitTrempeeDansLeChocolat: Recipe = {
  id: 'pate-a-biscuit-trempee-dans-le-chocolat',
  title: 'Pâte à biscuit trempée dans le chocolat',
  description: 'Pâte à biscuit trempée dans le chocolat',
  categories: ['Végétarien'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 0, max: 0 },
  marinatingTime: { min: 30, max: 30 },
  servings: 40,
  difficulty: 'Facile',
  ingredients: [
    '1 tasse de beurre mou',
    '2 pincées de sel',
    '½ tasse de cassonade',
    '¼ tasse de sucre',
    '1 ½ tasse de farine',
    '1 cuilère à soupe d’essence de vanille',
    '1/4 tasse de pastilles de chocolat ou M&M\'s',
    '1 canne de fondue Dulce de Leche 425 g ou autre fondue de votre choix'
  ],
  instructions: [
    'Mélanger les 6 premiers ingrédients pour la pâte biscuit',
    'Ajouter les morceaux de pastilles de chocolat ou M&M\'s',
    'Former des boules de pâte et les disposer sur une plaque de cuisson tapissée de papier parchemin',
    'Réfrigérer 30 minutes',
    'Tremper dans la fondue Dulce de Leche puis déposer sur la plaque',
    'Décorer immédiatement puis réfrigérer 30 minutes'
  ],
  tags: ['chocolat', 'pâte à biscuit', 'dipping'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/pate-a-biscuit-trempee-dans-le-chocolat',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/pate-a-biscuit-trempee-dans-le-chocolat',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/pate-a-biscuit-trempee-dans-le-chocolat'
    }
  ],
  source: 'David Cloutier',
  slug: 'pate-a-biscuit-trempee-dans-le-chocolat'
};
