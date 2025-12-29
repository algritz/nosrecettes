import { Recipe } from '@/types/recipe';

export const muffinsBleuetsBanane: Recipe = {
  id: 'muffins-bleuets-banane',
  title: 'Muffins bleuets banane',
  description: '',
  categories: ['Pâtisseries et desserts', 'Végétarien'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 25, max: 25 },
  servings: 15,
  difficulty: 'Facile',
  ingredients: [
    '2¼ tasse de farine',
    '1½ c. à thé de poudre à pâte',
    '¼ c. à thé de bicarbonate de soude',
    '1 c. à thé de gingembre en poudre',
    '¾ tasse de cassonade',
    '1½ tasses de bleuets congelés',
    '½ tasse de beurre, fondu',
    '2 gros oeufs, légèrement battus',
    '1 c. à thé d\'extrait de vanille pure',
    '2 grosses bananes mûres, écrasées'
  ],
  instructions: [
    'Préchauffer le four à 350 F. Placer la grille du four au centre et chemiser les moules à muffins de caissettes en papier.',
    'Dans un grand bol, combiner la farine, la cassonade, la poudre à pâte, le bicarbonate de soude et le gingembre.',
    'Incorporer délicatement les bleuets, en s\'assurant qu\'ils soient enrobés de farine.',
    'Dans un bol moyen, fouetter ensemble les oeufs, l\'extrait de vanille et les bananes écrasées.',
    'Ajouter le beurre fondu et mélanger.',
    'Ajouter les ingrédients humides aux ingrédients secs et remuer jusqu\'à ce que les ingrédients soient simplement combinés.',
    'Ne pas trop mélanger la pâte sinon les muffins seront plus durs.',
    'Diviser la pâte uniformément entre les moules à muffins.',
    'Cuire au four jusqu\'à ce qu\'un cure-dents inséré au centre en ressorte propre, soit environ 25 minutes pour des gros muffins et 17 minutes pour les petits.'
  ],
  tags: ['bleuets', 'banane', 'muffins'],
  slug: 'muffins-bleuets-banane'
};
