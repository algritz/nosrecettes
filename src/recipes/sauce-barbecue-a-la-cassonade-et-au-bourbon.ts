import { Recipe } from '@/types/recipe';

export const sauceBarbecueALaCassonadeEtAuBourbon: Recipe = {
  id: 'sauce-barbecue-a-la-cassonade-et-au-bourbon',
  title: 'Sauce barbecue à la cassonade et au bourbon',
  description: 'Une sauce barbecue épaisse, relevée et parfumée au bourbon, idéale pour accompagner des côtes levées ou du pulled pork.',
  categories: ['Sauces'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 30, max: 30 },
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
    'Porter à ébullition à feu moyen puis laisser mijoter 30 min, jusqu\'à consistance épaisse et savoureuse. Si nécessaire, ajouter du vinaigre de cidre.',
    'La sauce doit être très relevée.',
    'Transférer la sauce dans un bol et laisser refroidir à température ambiante.',
    'Couvrir et réfrigérer jusqu\'à utilisation.',
    'La sauce peut être réfrigérée pendant plusieurs semaines.',
    'Temprer la sauce avant de la servir.'
  ],
  tags: ['barbecue', 'bourbon', 'épicé'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/sauce-barbecue-a-la-cassonade-et-au-bourbon',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/sauce-barbecue-a-la-cassonade-et-au-bourbon',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/sauce-barbecue-a-la-cassonade-et-au-bourbon'
    }
  ],
  wine: '7 Deadly Zin',
  source: 'David Cloutier',
  slug: 'sauce-barbecue-a-la-cassonade-et-au-bourbon'
};
