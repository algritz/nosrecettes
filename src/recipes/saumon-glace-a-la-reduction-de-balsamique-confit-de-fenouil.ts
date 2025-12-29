import { Recipe } from '@/types/recipe';

export const saumonGlaceALaReductionDeBalsamiqueConfitDeFenouil: Recipe = {
  id: 'saumon-glace-a-la-reduction-de-balsamique-confit-de-fenouil',
  title: 'Saumon glacé à la réduction de balsamique, confit de fenouil',
  description: 'Un plat élégant combinant un saumon glacé à la réduction de balsamique avec un confit de fenouil sucré-salé.',
  categories: ['Poisson', 'Plats principaux'],
  prepTime: { min: 40, max: 40 },
  cookTime: { min: 40, max: 40 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Réduction balsamique',
      items: [
      '1 tasse (250 ml) de vinaigre balsamique',
      '1/2 tasse (125 ml) de vin rouge',
      '1 cuillère à thé (5 ml) de sucre'
      ]
    },
    {
      title: 'Confit de fenouil',
      items: [
      '1/4 tasse (60 ml) de beurre',
      '2 bulbes de fenouil parés, le cœur enlevé, coupés en tranches fines à la mandoline',
      '2 oignons rouges tranchés',
      '1/2 tasse (125 ml) de jus d\'orange',
      '1 cuillère à thé (5 ml) de sucre',
      'Sel et poivre frais moulu',
      '1 cuillère de réduction balsamique en train de réduire'
      ]
    },
    {
      title: 'Saumon',
      items: [
      '1 cuillère à soupe (15 ml) d\'huile d\'olive',
      '4 morceaux de filet de saumon sauvage de 175 g (6 oz)'
      ]
    }
  ],
  instructions: [
    'Réduction de balsamique: Dans une petite casserole, combiner le vinaigre balsamique, le vin rouge et le sucre. Porter à ébullition et laisser bouillir 12 minutes ou jusqu\'à ce qu\'on puisse voir le fond de la casserole en brassant; le glaçage épaissit considérablement en refroidissant. On obtient environ 1/3 tasse (80 ml). Mettre de côté.',
    'Confit de fenouil: Préparer le confit pendant la réduction. Faire chauffer le beurre dans une poêle sur feu moyen. Quand le beurre se met à grésiller, ajouter le fenouil, l\'oignon rouge, le jus d\'orange et le sucre, et remuer pour bien répartir les ingrédients. Porter à ébullition, puis ramener à feu doux et ajouter une cuillère à soupe de la réduction balsamique qui est en train de réduire. Couvrir et faire cuire 10 minutes ou jusqu\'à ramollissement du fenouil. Ôter le couvercle, porter à feu moyen et faire cuire 15 minutes de plus, en remuant de temps en temps, ou jusqu\'à ce que le fenouil soit caramélisé. Saler et poivrer.',
    'Saumon: Chauffer une poêle à revêtement anti-adhésif sur feu vif. Y mettre l\'huile, puis le saumon côté chair au fond. Saler et poivrer. Faire dorer (environ 2 minutes), puis retourner le saumon et faire dorer l\'autre côté, environ 2 minutes. Couvrir la poêle et laisser rissoler de 3 à 5 minutes ou jusqu\'à ce que le poisson soit à peine cuit. Disposer sur 4 assiettes. Servir avec le confit de fenouil et napper de glaçage.'
  ],
  tags: ['balsamique', 'confit de fenouil', 'saumon'],
  slug: 'saumon-glace-a-la-reduction-de-balsamique-confit-de-fenouil'
};
