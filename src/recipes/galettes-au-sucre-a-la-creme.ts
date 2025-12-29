import { Recipe } from '@/types/recipe';

export const galettesAuSucreALaCreme: Recipe = {
  id: 'galettes-au-sucre-a-la-creme',
  title: 'Galettes au sucre à la crème',
  description: 'Une recette de galettes sucrées avec un crémage au beurre et sucre glace, parfaites pour une douceur maison.',
  categories: ['Pâtisseries et desserts'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 15, max: 15 },
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    'Galettes: 2/3 tasse de graisse',
    '2 œufs',
    '1 ½ tasse de cassonade',
    '1 c. à thé de vanille',
    '1 c. à soupe de vinaigre',
    '1 c. à thé de soda à pâte',
    '3 ½ tasses de farine',
    '1 c. à thé de sel',
    '1 tasse de lait carnation',
    '1 tasse de noix (facultatif)',
    'Crémage: ½ tasse de beurre',
    '3 tasses de sucre à glacer',
    '2 c. à soupe d’eau bouillante'
  ],
  instructions: [
    {
      title: 'Galettes',
      steps: [
      'Préchauffer le four à 350°C.',
      'Battre ensemble les cinq premiers ingrédients.',
      'Ajouter dans l’ordre, le lait carnation, le soda à pâte, le sel, la farine et les noix.',
      'Bien brasser et faire des petites boules.',
      'Mettre sur une lèchefrite bien beurrée.',
      'Faire cuire au four 10 à 15 minutes.',
      'Laisser refroidir.'
      ]
    },
    {
      title: 'Crémage',
      steps: [
      'Dans un chaudron, faire brunir le beurre.',
      'Ajouter le sucre en poudre et brasser.',
      'Éclaircir avec un peu d’eau bouillante.',
      'Étendre sur les galettes et laisser refroidir.'
      ]
    }
  ],
  tags: ['sucre', 'crémage', 'pâtisserie'],
  notes: 'Temps de préparation: 20 à 25 minutes, cuisson: 12 à 15 minutes, source: Lynda Morin.',
  slug: 'galettes-au-sucre-a-la-creme'
};
