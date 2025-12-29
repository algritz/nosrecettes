import { Recipe } from '@/types/recipe'

export const cremeAsiatiqueCitrouilleEtLaitDeCoco: Recipe = {
  id: 'creme-asiatique-citrouille-et-lait-de-coco',
  title: 'Crème asiatique citrouille et lait de coco',
  description:
    'Une soupe onctueuse à la citrouille, parfumée à la citronnelle, au curry et garnie de basilic frais.',
  categories: ['Soupes'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 30, max: 30 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 c. à soupe d’huile végétale',
    '1 c. à soupe de beurre',
    '1 gousse d’ail émincée',
    '4 échalotes hachées',
    '1 petits piments forts rouges frais, hachés',
    '1 c. à soupe de citronnelle hachée',
    '2 1/8 tasses de bouillon de poulet',
    '4 tasses de citrouille pelée, coupée en dés',
    '1 1/2 tasse de lait de coco non sucré',
    '1 c. à thé de cari',
    '1 poignée de feuilles de basilic',
  ],
  instructions: [
    'Dans une casserole, faire chauffer l’huile et le beurre à feu doux et y faire revenir l’ail, les échalotes, les piments et la citronnelle. Faire bien attention de ne pas laisser brûler l’ail !',
    'Ajouter le bouillon de poulet, le lait de coco, le cari et la citrouille, puis porter à ébullition.',
    'Faire cuire jusqu’à ce que la citrouille soit tendre.',
    'Mixer la soupe avec un mélangeur électrique pour qu’elle soit lisse et onctueuse.',
    'Garnir de feuilles de basilic et servir.',
  ],
  tags: ['soupe', 'citrouille', 'curry'],
  slug: 'creme-asiatique-citrouille-et-lait-de-coco',
}
