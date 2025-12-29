import { Recipe } from '@/types/recipe';

export const sauceMoutardeEtGingembre: Recipe = {
  id: 'sauce-moutarde-et-gingembre',
  title: 'Sauce moutarde et gingembre',
  description: 'Excellente avec un gravlax de saumon fumé',
  categories: ['Sauces'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 0, max: 0 },
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    '3 c. à soupe de moutarde de Dijon',
    '1 c. à thé de moutarde en poudre (facultatif)',
    '3 c. à soupe de miel ou de sucre',
    '1 c. à soupe de gingembre râpé',
    '3 c. à soupe de vinaigre de riz',
    '1/3 tasse d’huile de tournesol'
  ],
  instructions: [
    'Dans un bol, mélanger tous les ingrédients à l’exception de l’huile.',
    'À l’aide d’un fouet, incorporer graduellement l’huile jusqu’à ce que le tout soit émulsionné comme une mayonnaise.',
    'Conserver au réfrigérateur.'
  ],
  tags: ['émulsion', 'moutarde', 'gingembre'],
  accompaniment: 'Gravlax de saumon au thé',
  slug: 'sauce-moutarde-et-gingembre'
};
