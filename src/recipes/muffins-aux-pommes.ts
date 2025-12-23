import { Recipe } from '@/types/recipe';

export const muffinsAuxPommes: Recipe = {
  id: 'muffins-aux-pommes',
  title: 'muffins aux pommes',
  description: '',
  categories: ['Pâtisseries et desserts'],
  prepTime: 25,
  cookTime: 25,
  servings: 16,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Crumble',
      items: [
      '1/2 tasse de cassonade tassée',
      '1/3 tasse de farine',
      '1 cuillère à thé de cannelle',
      '2 cuillères à table beurre non salé fondu'
      ]
    },
    {
      title: 'Muffins',
      items: [
      '2 1/4 tasses de farine',
      '1 1/2 cuillère à thé bicarbonate de soude',
      '1/2 cuillère à thé sel',
      '1 oeuf',
      '1 tasse de lait',
      '1 cuillère à table jus de citron',
      '1/2 tasse de beurre fondu',
      '1 cuillère à thé vanille',
      '1 1/2 tasse cde assonade',
      '2 tasses pommes en petit dés'
      ]
    }
  ],
  instructions: [
    'Préchauffer le four à 375 °F',
    'Dans un bol, mélanger la cassonade, la farine, cannelle. Arroser du beurre fondu et incorporer avec une fourchette.',
    'Dans un grand bol, mélanger la farine, le bicarbonate et le sel.',
    'Dans un autre bol, battre l\'oeuf avec le lait, le jus de citron, le beurre et la vanille.',
    'Ajouter la cassonade en brassant.',
    'Verser ce mélange sur les ingrédients secs.',
    'Ajouter les dés de pommes et brasser jusqu\'à ce que les ingrédients soient mêlés.',
    'Graisser les moules à muffins et remplir de la préparation aux 3/4.',
    'Ajouter le crumble.',
    'Cuire au four à 375 °F environ 25 minutes.'
  ],
  tags: ['pommes', 'crumble', 'muffins'],
  slug: 'muffins-aux-pommes'
};
