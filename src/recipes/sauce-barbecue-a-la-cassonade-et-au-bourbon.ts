import { Recipe } from '@/types/recipe';

export const sauceBarbecueALaCassonadeEtAuBourbon: Recipe = {
  id: '1760296183999',
  title: 'Sauce barbecue à la cassonade et au bourbon',
  description: 'Probablement la meilleure sauce BBQ maison qui soit',
  categories: ['Sauces', 'Barbecue'],
  prepTime: 15,
  cookTime: 30,
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    '250 ml de ketchup',
    '1/4 tasse de cassonade bien tassée',
    '1/4 tasse de bourbon',
    '45 ml de vinaigre de cidre, ou plus si nécessaire',
    '45 ml de mélasse',
    '30 ml de sauce Worcestershire',
    '15 ml de moutarde de Dijon',
    '5 ml de Tabasco',
    '3 ml de poudre d\'oignon',
    '3 ml de poudre d\'ail',
    '3 ml de poivre noir, fraîchement moulu',
    '1/2 c. à thé de fumée liquide'
  ],
  instructions: [
    'Dans une casserole, mélanger tous les ingrédients en fouettant.',
    'Porter à ébullition à feu moyen puis laisser mijoter 30 min, jusqu\'à consistance épaisse et savoureuse. Si nécessaire, ajouter du vinaigre de cidre. La sauce doit être très relevée',
    'Transférer la sauce dans un bol et laisser refroidir à température ambiante. Couvrir et réfrigérer jusqu\'à utilisation.'
  ],
  tags: ['Sauce BBQ', 'Côtes Levées', 'Pulled Pork'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/sauce_bbq',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/sauce_bbq',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/sauce_bbq'
    }
  ],
  accompaniment: 'Idéal avec les Côtes levée de Kansas City ou du Pulled Porc',
  wine: '7 Deadly Zin, ou tout Zinfandel ou Primitovo',
  source: 'Planète Barbecue de Steven Raichlen',
  notes: 'La sauce peut être réfrigérée pendant plusieurs semaines. Tempérer la sauce avant de la servir.',
  slug: 'sauce-barbecue-a-la-cassonade-et-au-bourbon'
};
