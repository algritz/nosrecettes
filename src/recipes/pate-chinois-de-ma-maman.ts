import { Recipe } from '@/types/recipe';

export const pateChinoisDeMaMaman: Recipe = {
  id: 'pate-chinois-de-ma-maman',
  title: 'Pâté chinois de ma maman',
  description: 'Un classique pâté chinois revisité avec une viande de boeuf, une couche de maïs crémeux, et une purée de pommes de terre onctueuse, gratiné au paprika.',
  categories: ['Plats principaux', 'Boeuf'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 30, max: 30 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'La base',
      items: [
        '500 g (1 lb) de boeuf haché',
        'Huile d\'olive extra-vierge',
        '2 c. à thé de graines de cumin écrasées',
        '1 oignon haché',
        '3-4 gousses d\'ail hachées',
        '125 ml (½ tasse) de lentilles brunes',
        '375 ml (1 ½ tasse) d\'eau',
        '125 ml (½ tasse) de persil haché',
        'Sel et poivre du moulin'
      ]
    },
    {
      title: 'Le milieu',
      items: [
        '1 l (4 tasses) de grains de maïs crus',
        '60 ml (¼ tasse) d\'eau',
        '180 ml (¾ tasse) de crème 15 % ou 35 %',
        'Une pincée de sucre',
        'Sel et poivre du moulin'
      ]
    },
    {
      title: 'Le dessus',
      items: [
        '4 grosses pommes de terre pelées, coupées en morceaux',
        '3 c. à soupe de beurre + quelques noix de beurre',
        '250 ml (1 tasse) de lait entier',
        'Paprika',
        'Sel et poivre du moulin'
      ]
    }
  ],
  instructions: [
    'La base: Dans un poêlon, faites colorer à feu vif le boeuf haché dans l\'huile d\'olive. Ajoutez ensuite le cumin et l\'oignon, l\'ail et poursuivez la cuisson quelques minutes. Ajoutez les lentilles puis mouillez avec l\'eau. Baissez le feu et laissez mijoter une dizaine de minutes. Versez ensuite dans une sauteuse à poignée allant au four ou dans un grand plat rectangulaire à gratin. Salez et poivrez. Réservez.',
    'Le milieu: Dans une autre casserole, mettez les grains de maïs, l\'eau, la crème, le sucre, salez et poivrez bien. Portez à ébullition, puis baissez le feu de manière à laisser mijoter doucement quelques minutes. Le liquide de cuisson doit réduire de moitié. Au mélangeur à main, broyez jusqu\'à l\'obtention d\'une crème de texture un peu grossière. Versez cette préparation sur la base de viande et de lentilles. Salez et poivrez.',
    'Le dessus: Préchauffez le four à 180 °C (350 °F). Faites cuire les pommes de terre dans l\'eau bouillante salée jusqu\'à ce qu\'elles soient tendres. Égouttez et passez au presse-purée ou écrasez au pilon. Ajoutez le beurre puis le lait, mélangez pour obtenir une belle purée et rectifiez l\'assaisonnement. Nappez la préparation de cette couche de purée sur le dessus du maïs et lissez à l\'aide d\'une spatule, ou égalisez à la fourchette. Déposez quelques noix de beurre sur le dessus, saupoudrez un peu de paprika. Enfournez pour environ 30 minutes.'
  ],
  tags: ['cumin', 'maïs crémeux', 'gratiner'],
  source: 'David Cloutier',
  slug: 'pate-chinois-de-ma-maman'
};
