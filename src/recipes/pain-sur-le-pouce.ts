import { Recipe } from '@/types/recipe'

export const painSurLePouce: Recipe = {
  id: 'pain-sur-le-pouce',
  title: 'Pain sur le pouce',
  description:
    'Une recette simple pour faire du pain maison rapidement, idéal pour un snack ou un repas léger.',
  categories: ['Pain'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 30, max: 30 },
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    "1/2 tasse d'eau tiède - température d'un bain",
    '1 pincée de sucre',
    '3/4 de c. à soupe de levure ou un sachet de levure',
    '1 bonne tasse de farine',
    'une pincée de sel',
  ],
  instructions: [
    "Ajouter la pincée de sucre dans l'eau tiède. Brasser et ajouter la levure. Mélanger à nouveau avec un petit fouet et réserver.",
    'Dans un premier bol, mélanger la farine, le sucre et le sel. Une fois bien mélangé, faire un trou au milieu et versez-y le liquide contenant la levure. Mélanger délicatement.',
    "Pétrir la mélange pour qu'il soit homogène. Ajouter de la farine au besoin pour que la pâte ne soit plus collante.",
    'Mettre dans le deuxième bol et laisser lever le pain dans ce bol pendant une heure en le couvrant avec un linge à vaisselle humide.',
    "Après une heure, prendre une planche propre et y saupoudrer de la farine. Paitrir le pain sur cette planche jusqu'à ce qu'il ne colle plus. Ajouter de la farine au besoin.",
    'Faire une belle boule et mettre dans le moule à tarte bien graissé.',
    'Faire lever une heure en le couvrant à nouveau avec le linge humide.',
    'Faire chauffer le four à 350°F et cuire pendant 25 à 30 minutes.',
    "Déguster chaud, c'est meilleur.",
  ],
  tags: ['pain maison', 'levure', 'simple'],
  images: [
    {
      small:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/pain-sur-le-pouce',
      medium:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/pain-sur-le-pouce',
      large:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/pain-sur-le-pouce',
    },
  ],
  source: 'David Cloutier',
  slug: 'pain-sur-le-pouce',
}
