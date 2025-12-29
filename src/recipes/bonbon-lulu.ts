import { Recipe } from '@/types/recipe';

export const bonbonLulu: Recipe = {
  id: 'bonbon-lulu',
  title: 'Bonbon Lulu',
  description: '',
  categories: ['Pâtisseries et desserts'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 20, max: 20 },
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Première partie',
      items: [
      '1 ½ tasse de sucre',
      '1 ½ tasse de sirop de maïs',
      '1 ½ tasse de beurre d’arachide',
      '9 tasses de Corn Flakes ou Rice Krispies'
      ]
    },
    {
      title: 'Deuxième partie',
      items: [
      '6 onces de chipits de chocolat mi-sucré (un paquet)',
      '6 onces de chipits de butterscotch (caramel écossais)'
      ]
    }
  ],
  instructions: [
    'Faire fondre lentement le sirop et le sucre.',
    'Ajouter le beurre d’arachide et les Corn Flakes.',
    'Verser cette partie dans un plat rectangulaire.',
    'Faire fondre la deuxième partie et verser sur la première partie.',
    'Faire refroidir et couper.'
  ],
  tags: ['chocolat', 'caramel', 'noix de beurre d\'arachide'],
  slug: 'bonbon-lulu'
};
