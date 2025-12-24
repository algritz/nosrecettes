import { Recipe } from '@/types/recipe';

export const saumonFumeAFroid: Recipe = {
  id: 'saumon-fume-a-froid',
  title: 'Saumon fumé à froid',
  description: '',
  categories: ['Vollaille'],
  prepTime: 20,
  cookTime: 720,
  servings: 6,
  difficulty: 'Facile',
  ingredients: [
    '2 filets de saumon',
    '135 grammes de gros sel',
    '210 grammes de Cassonade',
    '2 c. à thé de poivre',
    'De citron',
    '1 c. à thé de poivre rose moulu',
    '1 1/2 c. à thé de poudre d\'ail',
    'Sirop d\'érable'
  ],
  instructions: [
    'Mélanger les ingrédients secs.',
    'Étendre une mince couche sur les filets de saumon.',
    'Placer au froid 24h.',
    'Après 24h rincer abondamment à l\'eau froide.',
    'Éponger avec un essuie-tout et laquer de sirop d\'érable.',
    'Remettre au réfrigérateur un autre 24h.',
    'Faire fumer entre 4h et 12h à froid entre 4°C et 20°C.',
    'Remettre au frigo pour deux jours afin de le faire reposer.',
    'Trancher, emballer sous vide et congeler immédiatement.'
  ],
  tags: ['fumé', 'froid', 'saumon'],
  marinatingTime: 1440,
  slug: 'saumon-fume-a-froid'
};
