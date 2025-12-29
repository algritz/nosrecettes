import { Recipe } from '@/types/recipe';

export const saladeChaude: Recipe = {
  id: 'salade-chaude',
  title: 'Salade chaude',
  description: 'Une salade chaude de riz basmati avec noix de cajou, légumes croquants et vinaigrette parfumée, à déguster tiède ou chaud.',
  categories: ['Salades'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 20, max: 20 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 tasse de riz basmati',
    '2 tasses d\'eau',
    '1/4 de tasse de noix de cajou',
    '1/4 de tasse d\'oignons verts, hachés',
    '1/4 de tasse de raisins secs',
    '1/4 de tasse de poivrons rouges, coupés en dés',
    '1/4 de tasse de céleri, haché',
    '1/2 tasse de fèves germées',
    '1/2 à 1 tasse de jeunes épinards',
    'Sel et poivre, au goût'
  ],
  instructions: [
    'Rincer le riz sous l\'eau froide et égoutter.',
    'Verser le riz et l\'eau dans une casserole puis porter à ébullition.',
    'Baisser la température au minimum, couvrir puis poursuivre la cuisson pendant 15 minutes, sans brasser.',
    'Retirer du feu, transférer dans un saladier puis laisser tempérer.',
    'Dans un bol, mélanger tous les ingrédients de la vinaigrette puis verser sur le riz et brasser.',
    'Ajouter les épinards et brasser jusqu\'à ce qu\'elles tombent.',
    'Ajouter le reste des ingrédients, bien mélanger, rectifier l\'assaisonnement puis déguster.'
  ],
  tags: ['riz basmati', 'vinaigrette', 'légumes croquants'],
  slug: 'salade-chaude'
};
