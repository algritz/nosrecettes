import { Recipe } from '@/types/recipe';

export const gateauChocoCarotte: Recipe = {
  id: 'gateau-choco-carotte',
  title: 'gâteau choco-carotte',
  description: 'Un gâteau moelleux à la carotte avec un glaçage au chocolat noir et beurre.',
  categories: ['Pâtisseries et desserts'],
  prepTime: 35,
  cookTime: 43,
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Mélange 1',
      items: [
      '2 oeufs',
      '3/4 tasse de cassonade',
      '1/3 tasse d\'huile',
      '1/2 tasse de chocolat fondu (pépittes mi-sucrées)',
      '2 tasses de carottes râpées',
      '1/4 tasse de lait'
      ]
    },
    {
      title: 'Mélange 2',
      items: [
      '1 1/2 tasses de farine',
      '1 c à thé de poudre à pâte',
      '1 c à thé de bicarbonate de soude',
      '1/2 c à thé de canelle',
      '1/2 c à thé de muscade',
      '1/2 tasse de noix ou de raisins (facultatif)'
      ]
    },
    {
      title: 'Glaçage',
      items: [
      '100 g de chocolat noir',
      '30 g de beurre'
      ]
    }
  ],
  instructions: [
    'Bien mélanger les ingrédients du mélange 1',
    'Bien mélanger les ingrédients du mélange 2',
    'Ajouter le mélange 2 au mélange 1',
    'Mettre dans un moule en pirex carré de 8 po beurré',
    'Cuire dans un four préchauffé à 350° pendant environ 40-45 minutes',
    'Refroidir',
    'On fait fondre le chocolat avec le beurre et on recouvre le gâteau de ce glaçage',
    'On laisse durcir au froid'
  ],
  tags: ['chocolat', 'carotte', 'gâteau'],
  slug: 'gateau-choco-carotte'
};
