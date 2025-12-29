import { Recipe } from '@/types/recipe';

export const trempetteEtageeANachos: Recipe = {
  id: 'trempette-etagee-a-nachos',
  title: 'Trempette étagée à Nachos',
  description: 'Simple, mais efficace Trempette étagée à Nachos',
  categories: ['Trempettes'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 0, max: 0 },
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    'Haricots sautés Old El Paso',
    'Guacamole',
    'Crème sure',
    'Salsa',
    'Fromage râpé',
    'Tomates en dès',
    'Olives noires tranchées'
  ],
  instructions: [
    'Placer les ingrédients dans l\'ordre mentionné ci-haut dans un plat de pyrex.'
  ],
  tags: [],
  slug: 'trempette-etagee-a-nachos'
};
