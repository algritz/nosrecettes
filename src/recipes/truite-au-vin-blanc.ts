import { Recipe } from '@/types/recipe';

export const truiteAuVinBlanc: Recipe = {
  id: 'truite-au-vin-blanc',
  title: 'Truite au vin blanc',
  description: 'Une recette simple de truite cuite au vin blanc, aromatisée aux herbes et servie avec une sauce à la crème.',
  categories: ['Poisson', 'Plats principaux'],
  prepTime: 15,
  cookTime: 15,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '4 Truites',
    '100 g de beurre',
    'sel',
    'poivre',
    '2 échalotes',
    'persil',
    'ciboulette',
    'oseille',
    '200 ml de vin blanc',
    '100 g de crème fraîche'
  ],
  instructions: [
    'Lavez et videz les Truites.',
    'Pétrissez le beurre avec le sel, le poivre, les échalotes et les herbes hachées menu.',
    'Farcissez les Truites avec une partie de ce beurre, étalez le reste dans le fond d\'un plat allant au four.',
    'Posez les Truites par-dessus, arrosez de vin blanc, couvrez d\'un papier d\'aluminium et faites cuire à four chaud préchauffé pendant 10 minutes.',
    'Retournez les Truites et laissez cuire encore 5 minutes.',
    'Liez la sauce avec la crème fraîche et rectifiez l\'assaisonnement (vous pouvez la faire réduire au préalable).'
  ],
  tags: ['poisson', 'vin blanc', 'herbes'],
  slug: 'truite-au-vin-blanc'
};
