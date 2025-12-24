import { Recipe } from '@/types/recipe';

export const truiteEpicee: Recipe = {
  id: 'truite-epicee',
  title: 'Truite épicée',
  description: 'Mélanger les épices et faire mariner la truite 20 minutes dans le mélange. Préparer la sauce à l\'aneth et citron. Cuire le poisson sur le BBQ. Servir avec du riz et la sauce.',
  categories: ['Poisson', 'Plats principaux'],
  prepTime: 15,
  cookTime: 15,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    'Un filet de truite pour 4 personnes',
    '2 c. à thé de sel',
    '2 c. à soupe de cassonade',
    '1 c. à soupe de poivre noir',
    '1 c. à soupe de poudre d’ail',
    '1 c. à soupe de basilic',
    '1 c. à soupe d’estragon',
    'Une sauce pour poisson en sachet, du commerce, aneth et citron'
  ],
  instructions: [
    'Mélanger les épices et faire mariner la truite 20 minutes dans le mélange.',
    'Préparer l\'enveloppe de sauce à l\'aneth et citron tel qu\'indiqué sur l\'enveloppe.',
    'Cuire le poisson sur le BBQ.',
    'Servir la truite avec un riz et la sauce.'
  ],
  tags: ['barbecue', 'marinade sèche', 'poisson'],
  accompaniment: 'Riz',
  marinatingTime: 20,
  notes: 'Peut se faire avec du saumon',
  slug: 'truite-epicee'
};
