import { Recipe } from '@/types/recipe';

export const gravlaxDeSaumonAuWhiskyTourbe: Recipe = {
  id: 'gravlax-de-saumon-au-whisky-tourbe',
  title: 'Gravlax de saumon au Whisky Tourbé',
  description: '',
  categories: ['Vollaille'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 48, max: 48 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 filet de saumon de 500g',
    '3 c. à soupe de sel de mer',
    '3 c. à soupe de cassonade',
    '1/2 once de Whisky tourbé (fumé) (McClelland\'s ou autre)',
    '1 c. à soupe de poivre rose'
  ],
  instructions: [
    'Enlever le saumon et la chair grise du poisson.',
    'Mettre le tout dans un sac hermétique en enlevant le plus d\'air possible et laisser macérer au frigidaire 24 à 48h.',
    'Si possible mettre du poids sur le sac dans le réfrigérateur.',
    'Avant de servir, rincer à l\'eau, trancher et servir.'
  ],
  tags: ['fumé', 'marinade sèche', 'froid'],
  slug: 'gravlax-de-saumon-au-whisky-tourbe'
};
