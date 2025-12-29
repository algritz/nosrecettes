import { Recipe } from '@/types/recipe';

export const pateAModelerAuSucreDErableComestible: Recipe = {
  id: 'pate-a-modeler-au-sucre-d-erable-comestible',
  title: 'Pâte à modeler au sucre d’érable (comestible)',
  description: 'Une pâte à modeler comestible à base de sucre et de sirop d’érable, idéale pour décorer ou jouer.',
  categories: ['Végétarien'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 0, max: 0 },
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    '454 g de sucre en poudre',
    '1/4 tasse de sirop d’érable (de table) ou de maïs',
    '1/2 cuillère à thé de sel',
    '1/3 tasse de margarine',
    '1 cuillère à thé de vanille',
    'Colorant alimentaire (facultatif)'
  ],
  instructions: [
    'Mélanger tous les ingrédients dans un bol jusqu’à ce que le mélange soit homogène.',
    'Si le mélange est trop collant, simplement ajouter un peu de sucre en poudre.',
    'Sculpter votre pâte à modeler pour créer différentes formes, animaux ou autres.',
    'Vous pouvez la déguster par la suite.'
  ],
  tags: ['sucre d’érable', 'pâte à modeler', 'décoration'],
  notes: 'Essayer la même recette mais avec des essences différentes pour remplacer la vanille (banane, orange, amande, etc.). Utiliser cette pâte pour décorer vos desserts favoris.',
  slug: 'pate-a-modeler-au-sucre-d-erable-comestible'
};
