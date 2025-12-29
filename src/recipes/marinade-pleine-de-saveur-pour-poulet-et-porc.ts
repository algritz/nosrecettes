import { Recipe } from '@/types/recipe'

export const marinadePleineDeSaveurPourPouletEtPorc: Recipe = {
  id: 'marinade-pleine-de-saveur-pour-poulet-et-porc',
  title: 'Marinade pleine de saveur pour poulet et porc',
  description: '',
  categories: ['Marinade'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 0, max: 0 },
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    '3 c. à soupe de sauce soya',
    '2 c. à soupe de sauce BBQ',
    '2 c. à soupe d’huile végétale',
    '1 c. à thé de vin blanc',
    '1 c. à thé de beurre d’arachide crémeux',
    '1 c. à thé de sirop de maïs',
    '1/2 c. à thé de sauce Worcestershire',
    '2 c. à thé de poivre',
    '1 c. à thé de gingembre frais haché',
    '1 c. à thé de poudre de chili',
    '1 c. à thé de poudre d’oignon',
    '1/2 c. à thé de poudre d’ail',
  ],
  instructions: [
    'Dans un bol peu profond, combiner tous les ingrédients; mélanger.',
    'Faire mariner la viande de votre choix de 4 à 6 heures.',
  ],
  tags: ['saveur', 'marinade sèche', 'poulet'],
  slug: 'marinade-pleine-de-saveur-pour-poulet-et-porc',
}
