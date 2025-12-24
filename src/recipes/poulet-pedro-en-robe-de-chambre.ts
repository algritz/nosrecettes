import { Recipe } from '@/types/recipe';

export const pouletPedroEnRobeDeChambre: Recipe = {
  id: 'poulet-pedro-en-robe-de-chambre',
  title: 'Poulet Pédro en robe-de-chambre',
  description: '',
  categories: ['Vollaille'],
  prepTime: 20,
  cookTime: 20,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '4 poitrines de poulet',
    'Salsa (maison c\'est meilleur)',
    '4 bâtonnets de fromage à la crème',
    'Fromage râpé',
    'Habanero Piquant',
    'Coriandre haché',
    'Sel et poivre',
    'Tostitos écrasés (optionnel)'
  ],
  instructions: [
    'Couper les poitrines sur la longueur pour faire une pochette.',
    'Mettre dans chaque poitrine: salsa, fromage râpé, fromage Philadelphia, coriandre',
    'Refermer et sceller avec cure-dents ou ficèle',
    'Saler et poivrer généreusement l\'extérieur',
    'Recouvrir de Tostitos émiettés, si désiré',
    'Cuire sur une plaque au BBQ. (La plaque à BBQ c\'est pour ne pas avoir à les virer de bord. Pour pas que les poitrines se défassent.)'
  ],
  tags: ['barbecue', 'fromage', 'poulet'],
  slug: 'poulet-pedro-en-robe-de-chambre'
};
