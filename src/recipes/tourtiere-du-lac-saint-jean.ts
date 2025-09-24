import { Recipe } from '@/types/recipe';

export const tourtiereDuLacSaintJean: Recipe = {
  id: '2',
  title: 'Tourtière du Lac-Saint-Jean',
  description: 'Tourtière traditionnelle avec un mélange de viandes et pommes de terre.',
  categories: ['Plats principaux'],
  prepTime: 45,
  cookTime: 180,
  servings: 8,
  difficulty: 'Moyen',
  ingredients: [
    '500g de porc haché',
    '500g de bœuf haché',
    '2 oignons hachés',
    '4 pommes de terre en dés',
    '2 pâtes à tarte',
    'Épices à tourtière',
    'Bouillon de poulet'
  ],
  instructions: [
    'Faire revenir les oignons dans une grande casserole.',
    'Ajouter les viandes hachées et cuire jusqu\'à ce qu\'elles soient dorées.',
    'Ajouter les pommes de terre et les épices.',
    'Couvrir de bouillon et laisser mijoter 1 heure.',
    'Laisser refroidir complètement.',
    'Garnir une assiette à tarte de pâte, ajouter le mélange de viande.',
    'Couvrir de la deuxième pâte et sceller les bords.',
    'Cuire au four à 375°F pendant 45 minutes.'
  ],
  tags: ['québécois', 'traditionnel', 'viande', 'fêtes'],
  source: 'David Cloutier',
  slug: 'tourtiere-du-lac-saint-jean'
};