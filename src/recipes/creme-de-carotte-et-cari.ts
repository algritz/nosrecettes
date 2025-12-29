import { Recipe } from '@/types/recipe'

export const cremeDeCarotteEtCari: Recipe = {
  id: 'creme-de-carotte-et-cari',
  title: 'Crème de carotte et cari',
  description:
    'Une soupe crémeuse à base de carottes, parfumée au curry, parfaite pour une entrée réconfortante.',
  categories: ['Soupes', 'Végétarien'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 30, max: 30 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '10 carottes, coupées en rondelles mince',
    '1 oignon, haché finement',
    "1 gousse d'ail, hachée finement",
    '1 c. à soupe beurre',
    '1 c. à soupe de poudre de cari',
    '2 tasses bouillon de poulet',
    '1 1/2 tasses eau',
    '1/2 tasse crème 15%',
    '1 pincée sel',
    'Poivre au goût',
  ],
  instructions: [
    "Préparer les légumes: trancher les carottes en rondelles minces, hacher finement l'oignon et l'ail.",
    "Dans une casserole, faire revenir l'oignon et l'ail dans le beurre, pendant 3-4 min, à feu moyen.",
    'Ajouter les carottes et les faire sauter quelques minutes.',
    'Ajouter la poudre de cari et cuire en brassant 1 min.',
    'Saler et poivrer.',
    "Verser le bouillon et l'eau, porter à ébullition, réduire le feu et laisser mijoter à couvert, jusqu'à ce que les carottes soient tendres, soit environ 20 min.",
    'Réduire la soupe en purée au mélangeur.',
    'Remettre la soupe dans la casserole, y ajouter la crème et chauffer encore quelques minutes.',
    'Ajouter du poivre au besoin.',
  ],
  tags: ['curry', 'soupe crémeuse', 'carotte'],
  images: [
    {
      small:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/creme-de-carotte-et-cari',
      medium:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/creme-de-carotte-et-cari',
      large:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/creme-de-carotte-et-cari',
    },
  ],
  source: 'David Cloutier',
  slug: 'creme-de-carotte-et-cari',
}
