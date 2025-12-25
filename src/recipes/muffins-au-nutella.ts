import { Recipe } from '@/types/recipe';

export const muffinsAuNutella: Recipe = {
  id: 'muffins-au-nutella',
  title: 'Muffins au Nutella',
  description: 'Nutella Muffins',
  categories: ['Pâtisseries et desserts'],
  prepTime: 15,
  cookTime: 20,
  servings: 12,
  difficulty: 'Facile',
  ingredients: [
    '1 1/2 tasse de farine tout usage',
    '3/4 tasse de sucre blanc',
    '1/2 cuillère à café de sel',
    '2 cuillères de poudre à pâte',
    '1/3 tasse d\'huile végétale',
    '1 œuf',
    '1/3 tasse de lait',
    '1 tasse de nutella'
  ],
  instructions: [
    'Préchauffer le four à 375 degrés.',
    'Préparer 12 moules à muffins.',
    'Mélanger la farine, le sucre, le sel et la poudre à pâte.',
    'Placer l\'huile végétale dans une tasse à mesurer de 1 tasse, ajouter l\'œuf et assez de lait pour égaler 1 tasse.',
    'Ajouter au mélange de farine et remuer jusqu\'à ce qu\'il soit bien mélangé.',
    'Répartir la pâte dans les moules à muffins.',
    'Ajouter environ 1 cuillère à soupe de Nutella par muffin.',
    'Utilisez un cure-dent, un couteau ou une brochette en bambou pour tourbillonner le Nutella.',
    'Cuire au four de 15 à 20 minutes ou jusqu\'à ce qu\'un testeur en ressorte propre.',
    'Retirer les muffins du four et laisser refroidir pendant 5 minutes avant de déposer sur une grille pour refroidir complètement.'
  ],
  tags: ['pâtisserie', 'Nutella', 'gourmand'],
  slug: 'muffins-au-nutella'
};
