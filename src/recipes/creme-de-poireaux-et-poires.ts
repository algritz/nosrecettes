import { Recipe } from '@/types/recipe'

export const cremeDePoireauxEtPoires: Recipe = {
  id: 'creme-de-poireaux-et-poires',
  title: 'Crème de poireaux et poires',
  description:
    'Une soupe douce et parfumée à base de poireaux, pommes de terre, céleri et poires, enrichie de crème.',
  categories: ['Soupes'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 40, max: 40 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '4 tasses de poireaux émincés (environ 2 gros poireaux)',
    '2 pommes de terre, pelées et coupées en cubes',
    '1 branche de céleri, hachée',
    "3 c. à soupe d'huile d'olive",
    '5 tasses de bouillon de poulet',
    '1 feuille de laurier',
    '1 branche de thym frais',
    '3 poires mûres, pelées, épépinées et coupées en cubes',
    '1/2 tasse de crème 35 % à cuisson',
  ],
  instructions: [
    "Dans une cocotte à feu moyen-élevé, attendrir les poireaux, les pommes de terre et le céleri dans l'huile.",
    'Ajouter le bouillon, le laurier et le thym. Porter à ébullition.',
    "Couvrir et laisser mijoter jusqu'à ce que les légumes soient tendres.",
    'Ajoutez les poires et prolongez la cuisson 20 minutes.',
    'Retirez la feuille de laurier et la branche de thym.',
    'Au mixeur, réduisez la soupe en purée lisse.',
    'Saler et poivrer.',
    'Remettre la soupe dans la cocotte.',
    'Ajouter la crème, réchauffer et servir.',
  ],
  tags: ['soupe', 'poireaux', 'crème'],
  images: [
    {
      small:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/creme-de-poireaux-et-poires',
      medium:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/creme-de-poireaux-et-poires',
      large:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/creme-de-poireaux-et-poires',
    },
  ],
  source: 'David Cloutier',
  slug: 'creme-de-poireaux-et-poires',
}
