import { Recipe } from '@/types/recipe';

export const truffesChocolatEtNoisettesAuFromageALaCreme: Recipe = {
  id: 'truffes-chocolat-et-noisettes-au-fromage-a-la-creme',
  title: 'Truffes chocolat et noisettes au fromage à la crème',
  description: 'Une recette de truffes chocolat et noisettes au fromage à la crème, facile à préparer et idéale pour une gourmandise raffinée.',
  categories: ['Pâtisseries et desserts'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 15, max: 15 },
  servings: 24,
  difficulty: 'Facile',
  ingredients: [
    '1 paquet de fromage à la crème en brique, ramolli',
    '2/3 tasse de chapelure de biscuits graham',
    '1/4 tasse de sucre en poudre',
    '1/4 tasse de tartinade aux noisettes (Nutella)',
    '250 g de chocolat mi-sucré'
  ],
  instructions: [
    'Mélanger au batteur le fromage à la crème dans un grand bol jusqu\'à consistance crémeuse.',
    'Ajouter la chapelure de biscuits graham, le sucre, la tartinade aux noisettes et bien mélanger.',
    'Façonner le mélange de fromage à la crème en environ 24 boules, à raison de 1 c. à soupe de mélange par boule.',
    'Mettre sur une plaque à pâtisserie tapissée de papier parchemin.',
    'Congeler 15 min.',
    'Faire fondre le chocolat.',
    'Tremper les boules de fromage à la crème, une à la fois, dans le chocolat fondu, en les retournant pour bien les enrober.',
    'Réfrigérer 1 h ou jusqu\'à fermeté.'
  ],
  tags: ['chocolat', 'noisettes', 'gourmandise'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/truffes_chocolat_et_noisettes',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/truffes_chocolat_et_noisettes',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/truffes_chocolat_et_noisettes'
    }
  ],
  source: 'David Cloutier',
  slug: 'truffes-chocolat-et-noisettes-au-fromage-a-la-creme'
};
