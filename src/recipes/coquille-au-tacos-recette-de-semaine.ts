import { Recipe } from '@/types/recipe';

export const coquilleAuTacosRecetteDeSemaine: Recipe = {
  id: 'coquille-au-tacos-recette-de-semaine',
  title: 'Coquille au tacos recette de semaine',
  description: '',
  categories: ['Plats principaux'],
  prepTime: 10,
  cookTime: 30,
  servings: 6,
  difficulty: 'Facile',
  ingredients: [
    'Huile d\'olive',
    '2 tasses de coquille (pâte alimentaire)',
    '1 lb de boeuf haché',
    '1 oignon',
    '1 gousse d\'ail',
    '1 sachet d\'assaisonnement pour tacos piquant',
    '3/4 de tasse d\'eau',
    '1 tasse de salsa piquante',
    '1 tasse de fromage cheddar orange râpé'
  ],
  instructions: [
    'Cuire les pâtes tel qu\'indiqué sur la boîte.',
    'Faire chauffer de l\'huile d\'olive et faire sauter l\'oignon et l\'ail quelques minutes.',
    'Ajouter le bœuf et saler, poivrer. Bien faire dorer le bœuf et égoutter le gras.',
    'Ajouter l\'eau et l\'assaisonnement à tacos et laisser cuire jusqu\'à ce que l\'eau soit évaporée en remuant de temps en temps.',
    'Ajouter la salsa, les pâtes et le fromage. Bien remuer et servir.'
  ],
  tags: ['tacos', 'bœuf', 'pâtes'],
  slug: 'coquille-au-tacos-recette-de-semaine'
};
