import { Recipe } from '@/types/recipe'

export const rotiDePaletteSavoureux: Recipe = {
  id: 'roti-de-palette-savoureux',
  title: 'Rôti de palette savoureux',
  description: '',
  categories: ['Plats principaux'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 420, max: 420 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    'Rôti de palette de 4-5 Ib',
    '1 gros oignon haché grossièrement',
    '2 à 3 carottes coupées en bâtonnets',
    '1 sac de pommes de terre grelot',
    '1 paquet de mélange à soupe Lipton à l’oignon',
    '2 boîtes de crème de soupe aux champignons',
  ],
  instructions: [
    'Saler poivrer le rôti de palette et mettre au fond de la mijoteuse.',
    "Verser dessus, les pommes de terre, l'oignon et les carottes.",
    'Verser les deux cannes de crème de champignons.',
    "Soupoudrer du paquet de soupe à l'oignon.",
    'Faire cuire à High pendant 7h.',
  ],
  tags: ['mijoteuse', 'rôti', 'légumes'],
  slug: 'roti-de-palette-savoureux',
}
