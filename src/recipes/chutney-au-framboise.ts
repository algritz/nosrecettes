import { Recipe } from '@/types/recipe';

export const chutneyAuFramboise: Recipe = {
  id: 'chutney-au-framboise',
  title: 'Chutney au framboise',
  description: '',
  categories: ['Plats principaux'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 40, max: 40 },
  servings: 1,
  difficulty: 'Facile',
  ingredients: [
    'environ 200 gr de framboises',
    '100 g de sucre',
    '100 ml de vinaigre de cidre',
    '1 oignon rouge',
    'un peu d\'huile d\'olive',
    'poivre rose'
  ],
  instructions: [
    'Faites fondre l\'oignon',
    'ajoutez tous les autres ingrédients',
    'laissez cuire à feu moyen fort pendant 30 à 40 minutes en remuant de temps en temps, jusqu\'à obtenir une texture de confiture',
    'Mettre en pot'
  ],
  tags: [],
  slug: 'chutney-au-framboise'
};
