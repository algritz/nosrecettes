import { Recipe } from '@/types/recipe'

export const pouletRotiEntier: Recipe = {
  id: 'poulet-roti-entier',
  title: 'Poulet roti entier',
  description:
    'Recette de poulet entier rôti au four avec assaisonnement à base de moutarde, paprika et autres épices, cuit à 350 °F pendant 1h40.',
  categories: ['Vollaille', 'Plats principaux'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 100, max: 100 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 poulet entier',
    '1 oignon jaune, coupé en quatre',
    '1 c. à soupe de moutarde de Dijon',
    '1 c. à soupe de cassonade',
    "1 c. à thé de poudre d'oignon",
    '1 c. à soupe de paprika doux',
    '1 c. à thé de sel',
    '1/2 c. à thé de poivre',
    "3 c. à soupe d'huile végétale",
  ],
  instructions: [
    "Préchauffer le four à 350 °F. Placer la grille au centre du four, puis huiler légèrement le fond d'une rôtissoire. Réserver.",
    "Insérer les morceaux d'oignon à l'intérieur du poulet.",
    "Dans un bol, combiner tous les ingrédients de l'assaisonnement puis badigeonner tout le poulet avec le mélange.",
    'Placer le poulet sur le dos dans la rôtissoire, à découvert, puis enfourner pendant 1 h 40.',
    'Vérifier la température interne du poulet avec un thermomètre dans la partie la plus épaisse de la cuisse. Elle doit être supérieure à 165 °F.',
  ],
  tags: ['rôti', 'poulet', 'four'],
  slug: 'poulet-roti-entier',
}
