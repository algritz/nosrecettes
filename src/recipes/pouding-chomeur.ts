import { Recipe } from '@/types/recipe';

export const poudingChomeur: Recipe = {
  id: 'pouding-chomeur',
  title: 'Pouding Chômeur',
  description: 'Un gâteau moelleux servi avec un sirop d\'érable chaud, classique de la cuisine québécoise.',
  categories: ['Desserts'],
  prepTime: { min: 30, max: 30 },
  cookTime: { min: 35, max: 35 },
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    'Gâteau à la Jeannette',
    '½ tasse de beurre ou margarine',
    '1 tasse de sucre',
    '2 œufs',
    '1 ½ tasse de farine',
    '2 ½ c. à thé de poudre à pâte',
    '1 pincée de sel',
    '1 c. à thé de vanille',
    '¾ tasse de lait',
    'Sirop',
    '½ tasse de sirop d\'érable',
    '1 ½ tasse d\'eau',
    '2 tasses de cassonade',
    '1 c. à soupe de farine'
  ],
  instructions: [
    {
      title: 'Gâteau',
      steps: [
      'Défaire le beurre en crème et ajouter graduellement le sucre et les œufs. Battre quelques minutes.',
      'Mélanger ensemble farine, poudre à pâte et sel.',
      'Aromatiser le lait avec la vanille.',
      'Ajouter la farine et le lait à la première préparation, en terminant par un peu de farine.'
      ]
    },
    {
      title: 'Sirop',
      steps: [
      'Mélanger la cassonade et la farine.',
      'Ajouter graduellement le sirop d\'érable, l\'eau, et la cassonade, en chauffant juste assez pour faire fondre la cassonade.',
      'Verser le sirop dans un moule de 13 x 9 graissé.',
      'Déposer des cuillers de pâte à gâteau sur le sirop.'
      ]
    },
    {
      title: 'Cuisson',
      steps: [
      'Cuire à 350°F (180°C) pendant 30 à 40 minutes.'
      ]
    }
  ],
  tags: ['gâteau', 'sirop d\'érable', 'québécois'],
  slug: 'pouding-chomeur'
};
