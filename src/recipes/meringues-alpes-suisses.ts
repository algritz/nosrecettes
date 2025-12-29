import { Recipe } from '@/types/recipe';

export const meringuesAlpesSuisses: Recipe = {
  id: 'meringues-alpes-suisses',
  title: 'Meringues Alpes Suisses',
  description: '',
  categories: ['Pâtisseries et desserts'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 25, max: 25 },
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    '3 blancs d\'œuf',
    '¼ c. à thé de crème de tartre',
    '¾ tasse de sucre',
    '2 tablettes (100g chacune) de chocolat Toblerone, fruits et noix, hachés',
    '3 c. à soupe de farine',
    '3 c. à soupe de sucre glace (facultatif)'
  ],
  instructions: [
    'Chauffer le four à 300°F.',
    'Battre les blancs d\'œuf et la crème de tartre dans un grand bol, au mélangeur électrique à haute vitesse de 3 à 5 minutes, ou jusqu\'à la formation de pics mous.',
    'Ajouter le sucre en battant, 1 c. à soupe à la fois, jusqu\'à l\'obtention de pics fermes.',
    'Mélanger le chocolat et la farine; incorporer délicatement ce mélange aux blancs d\'œufs (en pliant les blancs).',
    'Déposer des cuillères de mélange, à 1 po d\'intervalle, sur 2 plaques à pâtisserie tapissées de papier parchemin.',
    'Mettre les plaques dans les tiers inférieur et supérieur du four et cuire les biscuits de 24 à 26 min, ou jusqu\'à ce qu\'ils soient dorés en inversant les plaques après 12 min.',
    'Transférer les biscuits sur des grilles et laisser refroidir complètement.',
    'Saupoudrer de sucre glace.'
  ],
  tags: ['meringue', 'chocolat', 'cuisson douce'],
  notes: 'Source: David Massicotte',
  slug: 'meringues-alpes-suisses'
};
