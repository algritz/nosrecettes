import { Recipe } from '@/types/recipe';

export const saladeDeKaleClementineQuinoaEtNoixDeGrenoble: Recipe = {
  id: '1766771392959',
  title: 'Salade de kale, clémentine, quinoa et noix de Grenoble',
  description: 'Une salade fraîche et nutritive combinant kale, clémentines, quinoa et noix de Grenoble, agrémentée d\'une vinaigrette onctueuse à l\'érable.',
  categories: ['Salades'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 15, max: 15 },
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Salade',
      items: [
        '3/4 de tasse de quinoa',
        '4 tasses de feuilles de chou kale, émincées très finement',
        '1 ½ clémentine en quartiers, puis coupée en cubes',
        '1/2 tasse de noix de Grenoble, hachées',
        'Sel et poivre, au goût',
        '4 œufs, pochés (optionnel)'
      ]
    },
    {
      title: 'Vinaigrette',
      items: [
        '1 ½ clémentine sans pépins, pelée',
        '3 c. à soupe de vinaigre de cidre',
        '1 c. à soupe de sauce soya',
        '1 c. à soupe de moutarde de Dijon',
        '1 c. à soupe de sirop d’érable',
        '1/4 de tasse d\'huile d\'olive'
      ]
    }
  ],
  instructions: [
    'Porter une casserole d’eau à ébullition. Verser le quinoa, puis cuire pendant 15 minutes. Égoutter, réserver et laisser refroidir.',
    'Dans un bol, verser tous les ingrédients de la vinaigrette, à l’exception de l’huile, puis broyer à l’aide d’un pied-mélangeur. Tout en continuant de broyer, verser l’huile progressivement afin d’obtenir une sauce onctueuse.',
    'Verser dans un saladier avec le kale, bien mélanger, puis laisser reposer au réfrigérateur pendant 15 minutes afin de permettre au kale de s’attendrir.',
    'Pendant ce temps, faire les œufs pochés.',
    'Ajouter les clémentines, le quinoa et les noix, puis assaisonner généreusement. Bien remuer, puis servir le tout garni de deux œufs pochés.'
  ],
  tags: ['kale', 'quinoa', 'vinaigrette'],
  source: 'David Cloutier',
  slug: 'salade-de-kale-clementine-quinoa-et-noix-de-grenoble'
};
