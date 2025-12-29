import { Recipe } from '@/types/recipe'

export const pateFrancais: Recipe = {
  id: 'pate-francais',
  title: 'Pâté français',
  description: '',
  categories: ['Plats principaux'],
  prepTime: { min: 30, max: 30 },
  cookTime: { min: 105, max: 105 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 lb (454 g) boeuf haché',
    '3 oignons, en rondelles',
    '3 carottes, en rondelles',
    '3 pommes de terre, en rondelles',
    '1 conserve (10 oz; 284 ml) de crème de tomates',
    '1 enveloppe de sauce brune de votre marque favorite',
    'Sel, au goût',
    'Poivre, au goût',
  ],
  instructions: [
    'Cuire le boeuf haché dans le beurre. Si trop de gras, égoutter un peu au besoin.',
    'Déposer dans un plat allant au four.',
    "Recouvrir de tranches d'oignons, de carottes et de pommes de terre.",
    "Faire chauffer la sauce brune tel qu'indiquer sur l'enveloppe.",
    'Une fois que la sauce est prête, y ajouter la crème de tomate et bien mélanger.',
    'Verser sur la viande et les légumes la sauce brune et la crème de tomate mélangés.',
    'Saler et poivrer.',
    'Cuire au four à 350°F (180°C) pendant environ 1h30 à 2 heures.',
  ],
  tags: ['bœuf', 'sauce brune', 'four'],
  notes:
    'Pour plus de goût, vous pouvez ajouter vos épices préférées au boeuf haché. Vous pouvez aussi gratiner le tout.',
  slug: 'pate-francais',
}
