import { Recipe } from '@/types/recipe'

export const couscousAfghan: Recipe = {
  id: 'couscous-afghan',
  title: 'Couscous Afghan',
  description: '',
  categories: ['Végétarien'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 5, max: 5 },
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    '2 tasses de coucous cuit',
    '1 oignon en morceaux',
    "1 tasse d'agneau ou porc ou poulet en cubes",
    "1/4 tasse d'amandes tranchées",
    '1 carottes en épluchures (avec économe)',
    '1/2 tasse de raisins secs',
    '1/2 cuillère à thé de muscade',
    '1/2 cuillère à thé de cannelle',
    'Poivre au goût',
    '1 cuillère à soupe de miel',
  ],
  instructions: [
    "Faire revenir les oignons et la viande avec un peu d'huile.",
    'Mélanger tous les ingrédients ensemble.',
  ],
  tags: ['épicé', 'couscous', 'simple'],
  wine: 'luis felipe edwards (chardonnay du chili)',
  slug: 'couscous-afghan',
}
