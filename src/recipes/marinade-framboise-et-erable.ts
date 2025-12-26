import { Recipe } from '@/types/recipe';

export const marinadeFramboiseEtErable: Recipe = {
  id: 'marinade-framboise-et-erable',
  title: 'Marinade framboise et érable',
  description: 'Une marinade fruitée et sucrée à base de framboises et de sirop d\'érable, idéale pour relever vos viandes ou salades.',
  categories: ['Marinade'],
  prepTime: 15,
  cookTime: 0,
  servings: 1,
  difficulty: 'Facile',
  ingredients: [
    '250 ml (1 tasse) de framboises',
    '45 ml (3 c. à soupe) de vinaigre de framboise',
    '2 échalotes sèches (françaises)',
    '60 ml (1/4 de tasse) de sirop d\'érable',
    '45 ml (3 c. à soupe) de sauce chili',
    'Sel et poivre au goût'
  ],
  instructions: [
    'À l\'aide du mélangeur électrique, mélanger tous les ingrédients jusqu\'à une consistance homogène.',
    'Transférer la marinade dans un contenant en verre.',
    'Réserver au réfrigérateur une heure avant l\'utilisation.'
  ],
  tags: ['framboise', 'érable', 'marinade'],
  slug: 'marinade-framboise-et-erable'
};
