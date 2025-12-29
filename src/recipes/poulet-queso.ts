import { Recipe } from '@/types/recipe';

export const pouletQueso: Recipe = {
  id: 'poulet-queso',
  title: 'Poulet queso',
  description: 'Un plat de poulet savoureux avec une sauce fromagère, parfait pour un repas convivial.',
  categories: ['Plats principaux'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 20, max: 20 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '15 ml d’huile d’olive',
    '4 poitrines de poulet sans peau',
    '1 oignon haché',
    '3 demi-poivrons de couleurs différente coupé en petits dés',
    '1 goussed’ail haché',
    '1 jalapeno épépiné et haché',
    '1 sachet d’assaisonnements pour tacos',
    '1/2 boîte de haricots noirs de 540 ml, rincés et égouttés',
    '3/4 de tasse de maïs en grains',
    '1/2 pot de type Cheez Whiz de 450 g',
    '3/4 de tasse de salsa',
    '1/2 tasse de crème à cuisson 35%',
    '2 c. à soupe de persil frais haché',
    '2 tomates italiennes épépinées et coupées en dés'
  ],
  instructions: [
    'Dans une grande poêle, chauffer l’huile à feu moyen.',
    'Cuire les poitrines de poulet de 6 à 8 minutes.',
    'Ajouter l’oignon, les poivrons, l’ail et le jalapeno.',
    'Cuire de 2 à 3 minutes.',
    'Ajouter les assaisonnements pour tacos, les haricots noirs et le maïs.',
    'Poursuivre la cuisson 2 minutes.',
    'Incorporer le cheez whiz, la salsa et la crème.',
    'Porter à ébullition, puis laisser mijoter de 6 à 8 minutes à feu doux-moyen, jusqu’à ce que l’intérieur de la chair du poulet ait perdu sa teinte rosée.',
    'Ajouter le persil et les tomates.',
    'Remuer et servir.'
  ],
  tags: ['fromage', 'poulet', 'tacos'],
  slug: 'poulet-queso'
};
