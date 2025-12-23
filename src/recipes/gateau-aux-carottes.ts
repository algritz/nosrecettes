import { Recipe } from '@/types/recipe';

export const gateauAuxCarottes: Recipe = {
  id: 'gateau-aux-carottes',
  title: 'Gateau aux carottes',
  description: 'Un gâteau aux carottes moelleux avec un crémage au fromage en crème.',
  categories: ['Gâteaux', 'Pâtisseries et desserts'],
  prepTime: 20,
  cookTime: 60,
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    '2 tasses de farine',
    '2 tasses de sucre blanc',
    '3 œufs',
    '2 c. à thé de poudre à pâte',
    '1 ½ c. à thé de soda',
    '1 c. à thé de cannelle',
    '4 tasses de carottes râpées',
    '1 tasse d\'huile Crisco',
    '¾ de tasse de noix hachées (facultatif)',
    'Sel',
    '¼ de tasse de margarine',
    '¾ à 1 livre de sucre en poudre',
    '4 onces de fromage en crème Philadelphie doux',
    'Un peu de lait pour éclaircir'
  ],
  instructions: [
    'Gâteau: Battre les œufs, sucre, huile.',
    'Ajouter les ingrédients secs, battre 2 minutes.',
    'Ajouter les carottes et noix.',
    'Cuire environ 1 heure à 325°F dans un moule de Pyrex.',
    'Crémage: Tout battre ensemble et éclaircir avec du lait au besoin.'
  ],
  tags: ['carottes', 'gâteau', 'crémage'],
  slug: 'gateau-aux-carottes'
};
