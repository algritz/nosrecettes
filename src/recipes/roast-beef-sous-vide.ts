import { Recipe } from '@/types/recipe'

export const roastBeefSousVide: Recipe = {
  id: 'roast-beef-sous-vide',
  title: 'Roast Beef sous Vide',
  description: "Tendre, comme vous ne l'aurez jamais vu. Roast Beef sous Vide",
  categories: ['Plats principaux', 'Cuisson sous-vide', 'Boeuf'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 4319, max: 4319 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    'Un rôti de bœuf de 3 1/2 lb',
    '1 cuillère à soupe de romarin émincé',
    '1/2 cuillère à soupe de sauce Worcestershire',
    '1 cuillère à café de paprika fumé',
    '1/2 cuillère à café de moutarde en poudre',
    "1/2 cuillère à café de poudre d'oignon",
    '2 1/2 cuillères à café de sel',
    '1/2 cuillère à café de poivre',
  ],
  instructions: [
    'Programmer votre bain-marie pour la cuisson sous vide avec la température réglée à 136 ℉',
    "Dans un petit bol, mélangez le romarin avec le paprika fumé, la moutarde et l'oignon en poudre, le sel et le poivre",
    "Frottez le bœuf avec la sauce Worcestershire, puis étalez le mélange d'épices sur tout le rôti",
    'Scellez le rôti sous vide dans un sac en plastique et faites-le cuire à 136℉ pendant 24 à 48 heures',
    'Une fois la cuisson du rôti terminée, sortir du sac et égoutter',
    "Pour obtenir une belle croûte à l'extérieur du rôti de bœuf faire rôtir de tout les côtés dans un poêlon ou au BBQ",
    'Couper en tranche',
    'Servir avec une sauce au jus ou au poivre',
  ],
  tags: ['sous-vide', 'bœuf', 'croûte'],
  images: [
    {
      small:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/roast-beef-sous-vide',
      medium:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/roast-beef-sous-vide',
      large:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/roast-beef-sous-vide',
    },
  ],
  source: 'David Cloutier',
  slug: 'roast-beef-sous-vide',
}
