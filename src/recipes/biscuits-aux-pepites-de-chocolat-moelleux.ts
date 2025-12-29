import { Recipe } from '@/types/recipe';

export const biscuitsAuxPepitesDeChocolatMoelleux: Recipe = {
  id: 'biscuits-aux-pepites-de-chocolat-moelleux',
  title: 'Biscuits aux pépites de chocolat moelleux',
  description: 'Une recette de biscuits moelleux aux pépites de chocolat, facile à préparer et parfaite pour une collation ou un dessert.',
  categories: ['Pâtisseries et desserts'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 12, max: 12 },
  servings: 12,
  difficulty: 'Facile',
  ingredients: [
    '¼ tasse de beurre',
    '¼ tasse de cassonade',
    '¼ tasse de sucre',
    '¼ tasse de lait',
    '1 c. à thé Extrait de vanille',
    '1 tasse de farine tout usage',
    '½ c. à thé de bicarbonate de soude',
    '½ tasse de pépites de chocolat mi-sucré'
  ],
  instructions: [
    'Préchauffez le four à 400 °F. Placez la grille au centre du four. Tapissez une plaque de cuisson de papier parchemin (ou d’une feuille de cuisson réutilisable).',
    'Dans un bol moyen allant au four à micro-ondes, faites fondre le beurre de 30 à 45 secondes.',
    'Ajoutez la cassonade, le sucre, le lait et la vanille. Mélangez à l’aide d’une fourchette.',
    'Incorporez la farine et le bicarbonate de soude. Ajoutez les pépites de chocolat et mélangez.',
    'À l’aide des mains, répartissez la pâte sur la plaque pour former 12 biscuits.',
    'Faites cuire au four de 10 à 12 minutes ou jusqu’à ce que les biscuits soient dorés.',
    'Laissez tiédir.'
  ],
  tags: ['chocolat', 'moelleux', 'facile'],
  slug: 'biscuits-aux-pepites-de-chocolat-moelleux'
};
