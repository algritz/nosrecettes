import { Recipe } from '@/types/recipe';

export const steakDeThonAuPaprika: Recipe = {
  id: 'steak-de-thon-au-paprika',
  title: 'Steak de thon au paprika',
  description: '',
  categories: ['Vollaille'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 10, max: 10 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '30 ml de jus de citron',
    '1 c. à thé d\'herbes de Provence',
    '200 ml d\'huile d\'olive',
    '1 c. à thé de paprika',
    '6 pincées de sel fin',
    '6 tours de moulin à poivre',
    '2 à 4 Steaks de thon'
  ],
  instructions: [
    {
      title: 'Marinade',
      steps: [
      'Dans un bol, mélanger à l\'aide d\'une cuillère tous les ingrédients de la marinade.',
      'Disposer la marinade dans une plaque, puis mettre les steaks de thon pendant une vingtaine de minutes à mariner.'
      ]
    },
    {
      title: 'Steaks de thon',
      steps: [
      'Une fois la braise du barbecue prête, poser les steaks sur la grille et les cuire pendant 8 à 10 min en les retournant à mi-cuisson (veiller à ne pas trop cuire le poisson).',
      'Vous pouvez badigeonner à l\'aide d\'un pinceau les steaks durant la cuisson avec le reste de marinade.'
      ]
    }
  ],
  tags: ['barbecue', 'marinade sèche'],
  slug: 'steak-de-thon-au-paprika'
};
