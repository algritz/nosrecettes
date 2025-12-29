import { Recipe } from '@/types/recipe';

export const chopSueyDePoulet: Recipe = {
  id: 'chop-suey-de-poulet',
  title: 'Chop suey de poulet',
  description: 'Un plat chinois rapide et savoureux à base de poulet, légumes croquants et fèves germées, mijoté dans une sauce soja et bouillon.',
  categories: ['Plats principaux'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 15, max: 15 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 tasse de bouillon de poulet',
    '1/4 tasse de sauce soja',
    '1 c. à soupe de fécule de maïs',
    '1 carotte en julienne',
    '1 poivron rouge, épépiné et coupé en lanières',
    '2 branches de céleri, tranchées en julienne',
    '1 oignon haché en fine tranche',
    '2 c. à soupe d\'huile',
    '4 tasses de fèves germées',
    '1 gousse d\'ail, hachée finement',
    '2 tasses de poulet cuit, coupé en dés',
    '3 oignons verts, émincés',
    '1/2 tasse de noix de cajou'
  ],
  instructions: [
    'Dans un bol, mélanger le bouillon, la sauce soja et la fécule.',
    'Dans un wok ou une grande poêle à feu élevé, dorer les carottes, le poivron, le céleri et les oignons dans l\'huile.',
    'Ajouter les fèves germées, l\'ail et prolonger la cuisson 2 minutes.',
    'Ajouter le poulet et le mélange de bouillon.',
    'Porter à ébullition en remuant et laisser mijoter 2 minutes ou jusqu\'à ce que les fèves soient tendres.',
    'Parsemer le vert des oignons verts et les noix de cajou.'
  ],
  tags: ['sauté', 'légumes croquants', 'soja'],
  slug: 'chop-suey-de-poulet'
};
