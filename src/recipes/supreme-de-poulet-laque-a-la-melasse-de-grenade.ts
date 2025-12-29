import { Recipe } from '@/types/recipe';

export const supremeDePouletLaqueALaMelasseDeGrenade: Recipe = {
  id: 'supreme-de-poulet-laque-a-la-melasse-de-grenade',
  title: 'Suprême de poulet laqué à la mélasse de grenade',
  description: 'Une recette de poulet laqué avec une réduction de jus de grenade en sirop, servi avec du riz.',
  categories: ['Vollaille', 'Plats principaux'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 60, max: 60 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1L de jus de grenade',
    '125 ml de sucre',
    '65 ml de jus de citron',
    '30 ml d\'huile d\'olive',
    '4 suprêmes de poulet désossé',
    'Sel et poivre, au goût'
  ],
  instructions: [
    'Dans une casserole, faire chauffer le jus de grenade, le sucre et le jus de citron à feu moyen.',
    'Quand le sucre est dissous et que le jus bouillonne, réduire la température et laisser mijoter 55 min, jusqu’à ce que le jus se transforme en sirop.',
    'Dans une poêle allant au four, faire cuire les poitrines de poulet à feu moyen dans de l’huile d’olive, côté peau vers le bas.',
    'Préchauffer le four à 180 °C (350 °F).',
    'Quand les suprêmes sont dorés, les rouler dans la mélasse de grenade refroidie.',
    'Terminer la cuisson au four de 12 à 15 min.',
    'Sortir la poêle du four et laquer à nouveau le poulet.',
    'Servir avec du riz.'
  ],
  tags: ['mélasse de grenade', 'laqué', 'volaille'],
  slug: 'supreme-de-poulet-laque-a-la-melasse-de-grenade'
};
