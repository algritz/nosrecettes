import { Recipe } from '@/types/recipe';

export const pulledPork: Recipe = {
  id: 'pulled-pork',
  title: 'Pulled Pork',
  description: 'Une recette de pulled pork simple et savoureuse, cuite doucement au four avec un mélange d\'épices et servie avec une sauce barbecue.',
  categories: ['Vollaille', 'Plats principaux'],
  prepTime: 15,
  cookTime: 540,
  servings: 8,
  difficulty: 'Facile',
  ingredients: [
    '1 c. à soupe de sel',
    '1 c. à soupe de poivre noir',
    '2 c. à soupe de paprika',
    '2 c. à soupe de sucre blanc',
    '1 échine de porc désossée (environ 1 à 1,5 kg ou 2 à 3 lb)',
    '1/2 tasse de moutarde préparée (moutarde jaune)'
  ],
  instructions: [
    'Dans un petit bol, mélanger le sel, le poivre, le paprika et le sucre.',
    'Badigeonner l\'échine avec la moutarde et frotter avec le mélange d\'épices.',
    'Déposer dans une lèchefrite, y verser un petit verre d\'eau et cuire doucement au four à 140 ºC (275 ºF) de 8 à 9 heures en vérifiant occasionnellement. Ajouter un peu d\'eau au besoin.',
    'Laisser tiédir et effilocher la viande à la main ou à la fourchette en prenant soin de jeter les gros morceaux de gras.',
    'Servir avec de la sauce BBQ: Sauce pour mordus de Ribs ou Sauce barbecue à la cassonade et au Bourbon.'
  ],
  tags: ['épices', 'four', 'effilochage'],
  slug: 'pulled-pork'
};
