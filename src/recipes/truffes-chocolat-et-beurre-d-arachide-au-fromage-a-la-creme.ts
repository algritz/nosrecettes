import { Recipe } from '@/types/recipe'

export const truffesChocolatEtBeurreDArachideAuFromageALaCreme: Recipe = {
  id: 'truffes-chocolat-et-beurre-d-arachide-au-fromage-a-la-creme',
  title: "Truffes chocolat et beurre d'arachide au fromage à la crème",
  description:
    "Une recette de truffes au chocolat et beurre d'arachide, enrobées de chocolat fondu, parfaites pour une gourmandise rapide.",
  categories: ['Pâtisseries et desserts'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 15, max: 15 },
  servings: 24,
  difficulty: 'Facile',
  ingredients: [
    '1 paquet de fromage à la crème en brique, ramolli',
    '1/2 tasse de chapelure de biscuits graham',
    '1/4 tasse de sucre en poudre',
    '1/4 tasse de beurre d’arachide crémeux',
    '250 g de chocolat mi-sucré',
  ],
  instructions: [
    "Mélanger au batteur le fromage à la crème dans un grand bol jusqu'à consistance crémeuse.",
    "Ajouter la chapelure de biscuits graham, le sucre, le beurre d'arachide et bien mélanger.",
    'Façonner le mélange de fromage à la crème en environ 24 boules, à raison de 1 c. à soupe de mélange par boule.',
    'Mettre sur une plaque à pâtisserie tapissée de papier parchemin.',
    'Congeler 15 min.',
    'Faire fondre le chocolat.',
    'Tremper les boules de fromage à la crème, une à la fois, dans le chocolat fondu, en les retournant pour bien les enrober.',
    "Réfrigérer 1 h ou jusqu'à fermeté.",
  ],
  tags: ['chocolat', "beurre d'arachide", 'gourmandise'],
  slug: 'truffes-chocolat-et-beurre-d-arachide-au-fromage-a-la-creme',
}
