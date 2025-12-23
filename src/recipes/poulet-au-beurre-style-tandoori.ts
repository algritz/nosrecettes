import { Recipe } from '@/types/recipe';

export const pouletAuBeurreStyleTandoori: Recipe = {
  id: 'poulet-au-beurre-style-tandoori',
  title: 'Poulet au beurre (style tandoori)',
  description: 'Recette de poulet mariné aux épices, cuit dans une sauce crémeuse, servi avec du riz Basmati. Épicée et parfumée, idéale pour un plat savoureux.',
  categories: ['Vollaille', 'Plats principaux'],
  prepTime: 30,
  cookTime: 20,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '4 poitrines de poulet coupé en cube',
    '1 c. à soupe d\'huile d\'olive',
    '1 c. à thé de jus de citron',
    '10 goûtes de sauce tabasco (au goût)',
    '½ c. à thé de pâte de carry (ou poudre de carry)',
    '1 c. à thé de Garam Masala ou Tandoori Masala ou moitié-moitié',
    '½ c. à thé de gingembre frais (ou poudre)',
    'sel et poivre',
    '1 oignon moyen',
    '2 gousses d\'ail',
    '½ c. à thé de poudre de chili',
    '1 c. à thé de paprika',
    '¼ c. à thé de paprika fort (facultatif)',
    '½ c. à thé de Garam Masala ou Tandoori Masala',
    '125 ml (½ tasse) de crème sûre',
    '2 c. à soupe de pâte de tomates',
    '75 ml (1/3 tasse) de crème 35%',
    '1 c. à soupe de beurre'
  ],
  instructions: [
    'Mélanger l\'huile d\'olive, le jus de citron, le tabasco et la pâte de carry dans un petit bol et battre avec un mini fouet.',
    'Ajouter le Garam Masala et/ou Tandoori Masala, le gingembre, saler et poivrer.',
    'Mettre le poulet en cube dans un contenant pour mariner ou un sac ziplock et ajouter la marinade. Faire mariner minimum 4 heures.',
    'Faire chauffer l\'huile d\'olive et y faire sauter l\'oignon et l\'ail.',
    'Ajouter les épices et bien brasser.',
    'Ajouter le poulet et faire cuire à feu moyen.',
    'Une fois le poulet presque cuit, ajouter la crème sûre, la pâte de tomate et la crème 35%. faire mijoter à feu doux environ 10 minutes.',
    'Juste avant de servir, incorporer le beurre, bien brasser et servir immédiatement sur un riz Basmati.'
  ],
  tags: ['épices', 'crémeux', 'tandoori'],
  accompaniment: 'Riz Basmati',
  marinatingTime: 240,
  notes: 'Même sans paprika fort, cette recette est assez épicée.',
  slug: 'poulet-au-beurre-style-tandoori'
};
