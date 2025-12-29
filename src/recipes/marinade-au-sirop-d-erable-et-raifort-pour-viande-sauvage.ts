import { Recipe } from '@/types/recipe';

export const marinadeAuSiropDErableEtRaifortPourViandeSauvage: Recipe = {
  id: 'marinade-au-sirop-d-erable-et-raifort-pour-viande-sauvage',
  title: 'Marinade au sirop d\'érable et raifort pour viande sauvage',
  description: 'Une marinade savoureuse à base de sirop d\'érable et raifort, idéale pour la viande de gibier ou autres viandes sauvages, à préparer avant de griller.',
  categories: ['Marinade', 'Vollaille'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 10, max: 10 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '60 ml (1/4 tasse) de sirop d\'érable',
    '60 ml (1/4 tasse) d\'huile d\'olive',
    '30 ml (2 c. à soupe) de jus de citron',
    '30 ml (2 c. à soupe) de raifort',
    '30 ml (2 c. à soupe) de sauce soya',
    '1 gousse d\'ail, hachée finement',
    '4 steaks de filet ou de contre-filet de cerf (ou autre viande sauvage)',
    'Sel et poivre'
  ],
  instructions: [
    'Dans un plat en verre ou dans un grand sac en plastique à fermeture hermétique, mélanger tous les ingrédients.',
    'Ajouter la viande et bien l\'enrober de la marinade.',
    'Couvrir le plat ou refermer le sac.',
    'Réfrigérer de 4 à 12 heures.',
    'Préchauffer le barbecue à puissance élevée.',
    'Réduire la flamme à feu moyen à doux pour éviter que la marinade ne brûle.',
    'Égoutter la viande.',
    'Saler et poivrer.',
    'Griller les steaks de chaque côté jusqu\'à la cuisson désirée.'
  ],
  tags: ['marinade sèche', 'gibier', 'barbecue'],
  slug: 'marinade-au-sirop-d-erable-et-raifort-pour-viande-sauvage'
};
