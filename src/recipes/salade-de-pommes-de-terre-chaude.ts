import { Recipe } from '@/types/recipe';

export const saladeDePommesDeTerreChaude: Recipe = {
  id: 'salade-de-pommes-de-terre-chaude',
  title: 'Salade de pommes de terre chaude',
  description: 'Salade chaude et succulente',
  categories: ['Salades'],
  prepTime: 25,
  cookTime: 50,
  servings: 3,
  difficulty: 'Facile',
  ingredients: [
    '1 kg de pommes de terre nouvelles',
    'Huile d\'olive',
    'Sel',
    'Poivre',
    'Paprika',
    'Un peu de piment de cayenne',
    '5 tranches de bacon',
    '175 ml de yogourt nature',
    '1 œuf dur',
    '1 c. à thé de moutarde',
    '1 c. à soupe de tahini',
    '1 c. à soupe de jus de citron',
    '1 petit échalote française',
    '1 botte de persil frais',
    '1 ou 2 oignons verts'
  ],
  instructions: [
    'Faire bouillir les pommes de terre dans l\'eau avec la peau.',
    'Huiler une plaque à biscuit.',
    'Une fois les pommes de terre cuites, mettre sur la plaque et écraser avec un verre.',
    'Une fois bien écrasé, arroser d\'un filet d\'huile d\'olive.',
    'Saupoudrer de sel, de poivre, de paprika et de piment de cayenne.',
    'Faire cuire au four à 425°F pendant 20 minutes.',
    'Faire cuire le bacon et le hacher en petits morceaux.',
    'Dans le récipient du pied mélangeur, déposer le yogourt, l\'œuf dur, la moutarde, le tahini, le jus de citron et l\'échalote française et réduire en purée avec le pied mélangeur.',
    'Vous devez obtenir une belle sauce riche et crémeuse.',
    'Dans un saladier, verser les pommes de terre encore chaudes.',
    'Ajouter le bacon, le persil et l\'oignon vert haché grossièrement.',
    'Verser la sauce sur la salade et bien mélanger.',
    'Saler et poivrer au besoin.'
  ],
  tags: ['pomme de terre', 'four', 'sauce crémeuse'],
  slug: 'salade-de-pommes-de-terre-chaude'
};
