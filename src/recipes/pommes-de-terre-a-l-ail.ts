import { Recipe } from '@/types/recipe';

export const pommesDeTerreALAil: Recipe = {
  id: 'pommes-de-terre-a-l-ail',
  title: 'Pommes de terre à l\'ail',
  description: '',
  categories: ['Végétarien', 'Plats principaux'],
  prepTime: 15,
  cookTime: 35,
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    '700g de pommes de terre, en cubes',
    '1 c. à soupe de purée d\'ail grillé',
    '1 c. à soupe d\'huile',
    'sel',
    'poivre',
    '2 c. à soupe de persil, haché',
    '½ c. à thé de zeste de citron'
  ],
  instructions: [
    'Faire chauffer le four à 465F',
    'Huiler légèrement un plat allant au four',
    'Mélanger les pommes de terre, l\'huile et la moitié de la purée d\'ail grillé',
    'Saler et poivrer',
    'Cuire 30-35 minutes, en brassant les cubes de pomme de terre à mi-cuisson',
    'Mélanger ensemble le reste des ingrédients',
    'Une fois les pommes de terre bien cuites, mélanger avec le reste des ingrédients'
  ],
  tags: ['ail', 'four', 'pommes de terre'],
  notes: 'Pour la purée d\'ail, faire cuire deux gousses d\'ail, au four avec la pelure. Une fois cuites, enlever la pelure, piler et laisser refroidir.',
  slug: 'pommes-de-terre-a-l-ail'
};
