import { Recipe } from '@/types/recipe';

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Poutine Classique',
    description: 'La poutine traditionnelle québécoise avec frites, fromage en grains et sauce brune.',
    category: 'Plats principaux',
    prepTime: 15,
    cookTime: 30,
    servings: 4,
    difficulty: 'Facile',
    ingredients: [
      '4 grosses pommes de terre',
      '200g de fromage en grains frais',
      '2 tasses de sauce brune',
      'Huile pour friture',
      'Sel au goût'
    ],
    instructions: [
      'Éplucher et couper les pommes de terre en frites.',
      'Faire chauffer l\'huile à 350°F (175°C).',
      'Faire frire les pommes de terre jusqu\'à ce qu\'elles soient dorées.',
      'Égoutter les frites et les saler.',
      'Disposer les frites dans un plat, ajouter le fromage en grains.',
      'Verser la sauce brune chaude par-dessus.',
      'Servir immédiatement.'
    ],
    tags: ['québécois', 'comfort food', 'frites', 'fromage'],
    image: '/images/poutine-classique.jpg',
    slug: 'poutine-classique'
  },
  {
    id: '2',
    title: 'Tourtière du Lac-Saint-Jean',
    description: 'Tourtière traditionnelle avec un mélange de viandes et pommes de terre.',
    category: 'Plats principaux',
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
    image: '/images/tourtiere-lac-saint-jean.jpg',
    slug: 'tourtiere-lac-saint-jean'
  },
  {
    id: '3',
    title: 'Tarte au Sucre',
    description: 'Dessert québécois classique à base de sirop d\'érable et de crème.',
    category: 'Desserts',
    prepTime: 20,
    cookTime: 35,
    servings: 8,
    difficulty: 'Facile',
    ingredients: [
      '1 pâte à tarte',
      '1 tasse de cassonade',
      '1/2 tasse de sirop d\'érable',
      '1/2 tasse de crème 35%',
      '2 œufs',
      '2 c. à soupe de farine',
      '1 c. à thé de vanille'
    ],
    instructions: [
      'Préchauffer le four à 350°F (175°C).',
      'Foncer une assiette à tarte avec la pâte.',
      'Mélanger tous les ingrédients de la garniture.',
      'Verser dans la croûte de tarte.',
      'Cuire 35-40 minutes jusqu\'à ce que le centre soit pris.',
      'Laisser refroidir avant de servir.'
    ],
    tags: ['dessert', 'érable', 'québécois', 'sucré'],
    image: '/images/tarte-au-sucre.jpg',
    slug: 'tarte-au-sucre'
  }
];