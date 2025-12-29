import { Recipe } from '@/types/recipe';

export const cremeDeBrocoliChouFleurEtFromageCheddarOrange: Recipe = {
  id: '1765124087987',
  title: 'Crème de brocoli, chou-fleur et fromage cheddar orange',
  description: 'Soupe crémeuse au brocoli, chou-fleur et cheddar orange.',
  categories: ['Soupes'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 25, max: 25 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 tasses de brocoli',
    '2 tasses de chou-fleur',
    '1 oignon',
    '1 carotte',
    '2 tasses de fromage cheddar râpé',
    '1 c. à soupe de beurre',
    '2 tasses de lait',
    '3/4 de tasse de farine',
    '4 tasses de bouillon de légumes ou de poulet'
  ],
  instructions: [
    'Hacher finement le brocoli et le chou-fleur en conservant quelques fleurons plus gros. Hacher l’oignon. Râper la carotte et le fromage.',
    'Dans une grande casserole, faire fondre le beurre à feu moyen-vif. Ajouter l’oignon et cuire 2 à 3 minutes en remuant à quelques reprises.',
    'Dans une tasse à mesurer, fouetter le lait et la farine jusqu’à disparition des grumeaux.',
    'Verser le mélange lait-farine et le bouillon dans la casserole; porter à ébullition en remuant.',
    'Ajouter le fromage et mélanger pour le faire fondre.',
    'Ajouter le brocoli, le chou-fleur et la carotte; réduire à feu moyen-doux et laisser mijoter 10 minutes, jusqu’à ce que le brocoli et le chou-fleur soient cuits mais encore fermes.',
    'Poivrer généreusement et servir.'
  ],
  tags: ['cheddar', 'brocoli', 'chou-fleur'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/creme_brocoli_chou_fleur',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/creme_brocoli_chou_fleur',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/creme_brocoli_chou_fleur'
    }
  ],
  source: 'David Cloutier',
  notes: 'La prochaine fois je vais ajouter du bacon.',
  slug: 'creme-de-brocoli-chou-fleur-et-fromage-cheddar-orange'
};
