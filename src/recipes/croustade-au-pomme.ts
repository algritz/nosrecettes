import { Recipe } from '@/types/recipe';

export const croustadeAuPomme: Recipe = {
  id: 'croustade-au-pomme',
  title: 'Croustade au pomme',
  description: '',
  categories: ['Desserts'],
  prepTime: 25,
  cookTime: 25,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '750 g de pommes tranchées',
    '5 ml de jus de citron',
    '50 ml de blé entier',
    '100 ml de gruau',
    '125 ml de cassonade',
    '50 ml de beurre'
  ],
  instructions: [
    'Chauffer le four à 450 F',
    'Beurrer un moule à pain',
    'Peler, évider et trancher les pommes',
    'Étendre les pommes dans le moule',
    'Ajouter le jus de citron',
    'Dans un bol, mêler la farine, le gruau et la cassonade',
    'Ajouter le beurre au mélange de farine; réduire en miettes à l\'aide d\'un coupe-pâte',
    'Déposer ce mélange sur les pommes sans presser',
    'Cuire au four de 20 à 30 minutes'
  ],
  tags: ['croustade', 'pomme', 'dessert'],
  slug: 'croustade-au-pomme'
};
