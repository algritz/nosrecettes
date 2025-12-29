import { Recipe } from '@/types/recipe';

export const muffinsAuBaconEtFromage: Recipe = {
  id: 'muffins-au-bacon-et-fromage',
  title: 'Muffins au bacon et fromage',
  description: '',
  categories: ['Pâtisseries et desserts'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 20, max: 20 },
  servings: 12,
  difficulty: 'Facile',
  ingredients: [
    '2 tasses de farine tout usage',
    '1 c. à table de poudre à pâte',
    '1 c. à table de sucre',
    '1 c. à thé de moutarde sèche',
    '3/4 de c. à thé de sel',
    '1 tasse de lait',
    '3/4 de tasse d\'huile végétale',
    '2 oeufs',
    '1 c. à thé de sirop de maïs',
    '1/3 de tasse de bacon cuit émietté',
    '1 tasse de fromage cheddar finement râpé',
    '1 oignon vert haché finement'
  ],
  instructions: [
    'Préchauffer le four à 400 °F et déposer dans les moules à muffins des moules en papier.',
    'Tamiser les ingrédients secs dans un grand bol.',
    'Ajouter l\'huile, le lait, les œufs et le sirop de maïs.',
    'Bien mélanger.',
    'Incorporer le bacon, le fromage et les oignons verts.',
    'Diviser dans les moules à muffins et cuire 20 minutes à 400 °F.',
    'Saupoudrer d\'un peu de fromage au goût pour décorer.'
  ],
  tags: ['bacon', 'fromage', 'muffins'],
  source: 'David Cloutier',
  slug: 'muffins-au-bacon-et-fromage'
};
