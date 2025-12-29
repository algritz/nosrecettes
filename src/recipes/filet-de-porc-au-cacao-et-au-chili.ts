import { Recipe } from '@/types/recipe'

export const filetDePorcAuCacaoEtAuChili: Recipe = {
  id: 'filet-de-porc-au-cacao-et-au-chili',
  title: 'Filet de porc au cacao et au chili',
  description: '',
  categories: ['Porc', 'Barbecue'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 15, max: 15 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 à 2 livres de filet de porc',
    '1/4 de tasse de poudre de cacao',
    '1/8 de tasse de piment mexicain moulu (ex. : Chipotle, Morita, Pasilla)',
    '1 c. à table de cannelle moulue',
    '1 c. à table de cumin moulu',
    '1 c. à table de sel de mer',
    "2 c. à table de zeste d'orange",
    '1 lime coupée en quartiers',
  ],
  instructions: [
    'Combinez les ingrédients secs.',
    "Placez le filet dans un contenant et frottez-le avec les quartiers de lime jusqu'à ce que tout le jus en soit sorti.",
    "Appliquez le zeste d'orange uniformément sur la pièce de viande.",
    "Enrobez complètement la pièce de viande avec le mélange de cacao et d'épices.",
    'Laissez mariner au moins une heure en tournant fréquemment.',
    'Appliquez de l’huile végétale sur tout le filet avant de le griller.',
    'Grillez environ 7 à 10 minutes par côté selon le format de la pièce de viande.',
  ],
  tags: ['chocolat', 'épices', 'grill'],
  slug: 'filet-de-porc-au-cacao-et-au-chili',
}
