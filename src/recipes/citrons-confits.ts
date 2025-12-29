import { Recipe } from '@/types/recipe';

export const citronsConfits: Recipe = {
  id: '1764532463745',
  title: 'Citrons confits',
  description: 'Citrons conservés au sel en saumure, parfaits comme condiment.',
  categories: ['Condiments'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 0, max: 0 },
  marinatingTime: { min: 43200, max: 43200 },
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    '4 gros citrons',
    '80 ml de sel',
    '1 citron, pour le jus',
    'Eau'
  ],
  instructions: [
    'Bien laver les citrons.',
    'En partant d\'une extrémité, trancher un citron en quatre, sans couper jusqu\'au bout afin que les quartiers restent attachés ensemble. Répéter pour tous les citrons.',
    'Déposer 15 ml (1 c. à table) de sel dans chaque citron.',
    'Mettre les citrons dans un pot et bien les tasser afin qu\'ils rendent leur jus.',
    'Remplir le pot d\'eau, ajouter le sel restant et le jus de citron.',
    'Mettre le couvercle sur le pot et laisser reposer à température pièce pendant au moins un mois.'
  ],
  tags: ['saumure', 'citron confit', 'fermentation'],
  source: 'David Cloutier',
  notes: 'Plus le temps de repos est long, meilleurs seront les citrons (1 à 1,5 mois).',
  slug: 'citrons-confits'
};
