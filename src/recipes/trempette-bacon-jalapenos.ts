import { Recipe } from '@/types/recipe'

export const trempetteBaconJalapenos: Recipe = {
  id: 'trempette-bacon-jalapenos',
  title: 'Trempette bacon-Jalapenos',
  description:
    "Une trempette savoureuse à base de bacon, jalapenos, fromage à la crème, cheddar, crème sure, lait, et chapelure, cuite au four jusqu'à dorure.",
  categories: ['Entrées'],
  prepTime: { min: 25, max: 25 },
  cookTime: { min: 30, max: 30 },
  servings: 8,
  difficulty: 'Facile',
  ingredients: [
    '8 onces de fromage à la crème ramoli (2 boites)',
    '2 tasses de cheddar râpé',
    '1/2 tasse de crème sure',
    '1/4 tasse de lait',
    '4 tranches de bacon cuits hachés',
    '1 cuillère à soupe de graisse de bacon',
    '1 cuillère à café de vinaigre de vin blanc',
    '2 jalapenos couppés en fines tranches',
    'Chapelure style panko',
  ],
  instructions: [
    'Mélanger ensemble les 8 premiers ingrédients',
    'Étendre dans un plat style pyrex ou en céramique allant au four.',
    'Parsemer de chapelure',
    "Cuire au four à 350 degrés F jusqu'à ce que doré et pétillant, environ 30 minutes.",
  ],
  tags: ['fromage', 'bacon', 'panko'],
  accompaniment: 'Tostitos',
  slug: 'trempette-bacon-jalapenos',
}
