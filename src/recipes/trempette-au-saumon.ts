import { Recipe } from '@/types/recipe'

export const trempetteAuSaumon: Recipe = {
  id: 'trempette-au-saumon',
  title: 'Trempette au saumon',
  description:
    'Une trempette savoureuse à base de saumon, fromage à la crème et sauces aromatiques, idéale pour accompagner légumes, craquelins ou baguette de pain.',
  categories: ['Trempettes'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 0, max: 0 },
  servings: 1,
  difficulty: 'Facile',
  ingredients: [
    '1 boîte 3 3/4 oz (106g) de saumon de C.B.',
    '1 paquet de 4 oz de fromage à la crème (Philadelphia)',
    '2 c. à soupe de sauce à salade Mille-Ile',
    '1 c. à thé de sauce au raifort (horseradish)',
    '2 c. à thé de sauce Worcestershire',
    '1/2 c. à thé de sel',
  ],
  instructions: [
    'Éfeuiller le saumon en écrasant les arêtes.',
    'Ramolir le fromage à la crème et lui incorporer, en battant, la sauce à salade.',
    'Ajouter ensuite le sel et les sauces raifort et Worcestershire.',
    'Bien mélanger.',
    "Ajouter le saumon et battre jusqu'à consistance homogène.",
    'Mettre à rafraîchir avant de présenter.',
  ],
  tags: ['saumon', 'fromage à la crème', 'sauces'],
  slug: 'trempette-au-saumon',
}
