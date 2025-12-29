import { Recipe } from '@/types/recipe'

export const gravlaxDeBUfPimente: Recipe = {
  id: 'gravlax-de-b-uf-pimente',
  title: 'Gravlax de bœuf pimenté',
  description: '',
  categories: ['Végétarien'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 0, max: 0 },
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    '1 lb de filet de bœuf',
    '2 lbs de gros sel de mer',
    '3 c. à soupe de grains de poivre noir concassés',
    '3 c. à soupe de basilic haché',
    '2 piments extra-forts frais jalapenos haché finement',
    'Le zeste de 1 citron',
    'Huile d’olive',
  ],
  instructions: [
    'Mélanger le gros sel, le poivre, le basilic, le zeste et les jalapenos',
    'Dans un plat, étendre une partie de ce mélange, poser le filet de bœuf dessus et couvrir du reste du mélange de gros sel.',
    'Couvrir et y mettre un poids pour le presser et réfrigérer 24 heures.',
    'Le lendemain, gratter le surplus du mélange de sel avec une brosse puis rincer à l’eau froide et sécher la viande avec du papier absorbant.',
    'Trancher finement le filet.',
    'Servir arrosé d’un trait d’huile d’olive.',
  ],
  tags: ['pimenté', 'marinade sèche', 'bœuf'],
  marinatingTime: { min: 1440, max: 1440 },
  slug: 'gravlax-de-b-uf-pimente',
}
