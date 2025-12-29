import { Recipe } from '@/types/recipe'

export const saumonGrilleSurUnePlancheDeCedre: Recipe = {
  id: 'saumon-grille-sur-une-planche-de-cedre',
  title: 'Saumon grillé sur une planche de cèdre',
  description: 'Saumon grillé sur une planche de cèdre',
  categories: ['Végétarien'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 20, max: 20 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 planche de cèdre (environ 14 x 7 x 1 po) non traitée',
    "1 filet de saumon (2 lb ou 900 g) de 1 po d'épaisseur",
    '1/2 tasse de vinaigrette Tomate confite et origan Kraft',
    '1/4 tasse de persil frais, haché fin',
    "1/4 tasse de tomates séchées dans l'huile, hachées fin",
    '1 c. à soupe d’huile végétale',
  ],
  instructions: [
    "Immerger la planche dans l'eau, en plaçant un poids sur le dessus pour la garder submergée. Laisser tremper au moins 4 heures ou jusqu'au lendemain.",
    'Chauffer le barbecue à feu moyen.',
    'Mélanger la vinaigrette, le persil et les tomates; mettre de côté.',
    "Badigeonner la planche de cèdre avec de l'huile; placer le saumon dessus.",
    'Mettre sur le gril; baisser le couvercle du barbecue.',
    'Griller 10 minutes.',
    "Badigeonner avec le mélange de vinaigrette; continuer la cuisson 10 min ou jusqu'à ce que le saumon s'émiette facilement à la fourchette.",
  ],
  tags: ['barbecue', 'fumé', 'saumon'],
  marinatingTime: { min: 240, max: 240 },
  slug: 'saumon-grille-sur-une-planche-de-cedre',
}
