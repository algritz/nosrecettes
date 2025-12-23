import { Recipe } from '@/types/recipe';

export const orignalBraiseAuxChampignons: Recipe = {
  id: 'orignal-braise-aux-champignons',
  title: 'Orignal braisé aux champignons',
  description: 'Un plat de viande braisée tendre avec une sauce aux champignons, parfait pour un repas réconfortant.',
  categories: ['Plats principaux'],
  prepTime: 20,
  cookTime: 195,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 kg (2 lb) de rôti de palette d\'orignal sans os (ou autre viande à braiser)',
    '30 ml d\'huile d\'olive',
    '2 oignons en dés',
    '1 lb de champignons variés au goût, tranchés',
    '2 gousses d\'ail hachées',
    '30 ml de moutarde de Dijon',
    '500 ml de bouillon de poulet',
    '15 ml de sauce Worcestershire',
    '250 ml de persil plat ciselé',
    'Sel et poivre au goût'
  ],
  instructions: [
    'Placer la grille au centre du four. Préchauffer le four à 300 °F.',
    'Dans une grande casserole allant au four, dorer la viande dans l’huile. Saler et poivrer. Réserver sur une assiette.',
    'Dans la même casserole, dorer les oignons et les champignons. Ajouter de l’huile au besoin.',
    'Ajouter l’ail, la moutarde et poursuivre la cuisson doucement environ 1 minute.',
    'Remettre la viande dans la casserole et ajouter le bouillon et la sauce. Porter à ébullition.',
    'Couvrir et cuire au four environ 2 h 30.',
    'Retirer le couvert et poursuivre la cuisson environ 30 minutes ou jusqu’à ce que la viande se défasse à la fourchette.',
    'Ajouter le persil et rectifier l’assaisonnement.',
    'Servir la viande en morceaux avec des pommes de terre.'
  ],
  tags: ['braisé', 'champignons', 'viande'],
  slug: 'orignal-braise-aux-champignons'
};
