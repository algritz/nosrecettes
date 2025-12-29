import { Recipe } from '@/types/recipe'

export const bavetteDeBUfALaCremeDeMoutarde: Recipe = {
  id: 'bavette-de-b-uf-a-la-creme-de-moutarde',
  title: 'Bavette de bœuf à la crème de moutarde',
  description:
    "Une recette savoureuse de bavette de bœuf accompagnée d'une sauce à la crème et à la moutarde, servie avec une purée de pommes de terre.",
  categories: ['Vollaille', 'Plats principaux'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 30, max: 30 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 à 4 morceaux de bavette',
    "huile d'olive",
    '125 ml de crème fraîche ou de crème 35%',
    '4 c. à soupe de vin rouge',
    "2 c. à soupe de moutarde de Dijon à l'ancienne",
    '1 échalote française ciselée',
    '1 oignon vert ciselé',
    '300 ml de fond de gibier',
    'beurre',
    'sel et poivre au goût',
    'persil frais haché',
  ],
  instructions: [
    "Dans une poêle, faire suer l'échalote et l'oignon vert dans du beurre, puis déglacer avec le vin rouge.",
    'Ajouter le fond de gibier et la crème. Bien mélanger et assaisonner.',
    'Ajouter la moutarde et faire réduire (20 à 25 minutes).',
    'Pendant que la sauce réduit, faire sauter la bavette dans une poêle allant au four, 4 minutes par côté.',
    'Enfourner la viande à 350°F (180°C) pendant 12 minutes.',
    'Servir nappée de sauce et parsemer de persil frais.',
  ],
  tags: ['crème', 'moutarde', 'grill'],
  slug: 'bavette-de-b-uf-a-la-creme-de-moutarde',
}
