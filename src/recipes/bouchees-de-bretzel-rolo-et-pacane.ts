import { Recipe } from '@/types/recipe';

export const boucheesDeBretzelRoloEtPacane: Recipe = {
  id: 'bouchees-de-bretzel-rolo-et-pacane',
  title: 'Bouchées de bretzel, rolo et pacane',
  description: '',
  categories: ['Amuse-geules'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 4, max: 4 },
  servings: 10,
  difficulty: 'Facile',
  ingredients: [
    'Un paquet de Rolo (il y en a 10 dedans)',
    '10 Bretzels',
    '10 Pacanes'
  ],
  instructions: [
    'Préchauffer le four à 350 F',
    'Mettre les bretzels sur un papier parchemin, sur une plaque à biscuits',
    'Déposer 1 Rolo sur chaque bretzel',
    'Mettre au four 3-4 minutes, ou jusqu’à ce que les Rolos commencent à ramollir',
    'Sortir du four et mettre une pacane sur chaque Rolo, en appuyant légèrement',
    'Laisser refroidir avant de manger'
  ],
  tags: ['gourmandise', 'facile', 'rapide'],
  slug: 'bouchees-de-bretzel-rolo-et-pacane'
};
