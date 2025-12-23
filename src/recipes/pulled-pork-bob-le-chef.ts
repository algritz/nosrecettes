import { Recipe } from '@/types/recipe';

export const pulledPorkBobLeChef: Recipe = {
  id: 'pulled-pork-bob-le-chef',
  title: 'Pulled Pork (Bob Le Chef)',
  description: 'Une recette de pulled pork avec une marinade sèche épicée, cuite lentement au four et servie avec le jus de cuisson sur du pain.',
  categories: ['Porc', 'Plats principaux'],
  prepTime: 25,
  cookTime: 480,
  servings: 8,
  difficulty: 'Facile',
  ingredients: [
    '1 épaule de porc avec ou sans os',
    '60 ml de cassonade',
    '30 ml de moutarde sèche',
    '5 ml de cumin',
    '15 ml de poudre de chili',
    '15 ml de paprika',
    'Sel, poivre au goût',
    '250 ml de bière noire',
    '250 ml de sirop de maïs',
    '3 gousses d’ail',
    '1 oignon coupé en 2'
  ],
  instructions: [
    'Dans le cul de poule, mélanger la cassonade et les épices sèches.',
    'Enduire la viande avec les assaisonnements (ce mélange d’épices s’appelle un “rub” ou, en français, une marinade sèche).',
    'Laisser mariner au moins 4 heures au frigo.',
    'Dans la lèchefrite, mélanger la bière, le sirop de maïs, l’ail, l’oignon, le sel et le poivre puis déposer la pièce de viande marinée.',
    'Couvrir de papier d’aluminium et cuire au four préchauffé à 250 °F pendant 8 heures.',
    'Retirer du four et à l’aide des fourchettes, “effilocher” la viande.',
    'Servir avec le jus de cuisson sur le pain de ton choix.'
  ],
  tags: ['épicé', 'marinade sèche', 'four'],
  marinatingTime: 240,
  slug: 'pulled-pork-bob-le-chef'
};
