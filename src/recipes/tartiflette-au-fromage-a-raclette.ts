import { Recipe } from '@/types/recipe'

export const tartifletteAuFromageARaclette: Recipe = {
  id: '1764521816474',
  title: 'Tartiflette au fromage à raclette',
  description:
    'Gratin de pommes de terre, bacon et oignons, déglacé au vin blanc et nappé de fromage à raclette.',
  categories: ['Patates', 'Plats principaux'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 40, max: 40 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '8 pommes de terre jaunes',
    '1 oignon ciselé',
    "2 gousses d'ail, émincées",
    '6 tranches de bacon',
    '1 c. à soupe de beurre',
    '1/2 tasse de vin blanc',
    '1/2 tasse de crème 35 %',
    'Muscade',
    'Sel et poivre',
    '300 g de fromage à raclette',
  ],
  instructions: [
    'Peler et couper les pommes de terre en tranches épaisses. Précuire à l’eau bouillante 8 à 10 minutes, jusqu’à tendreté sans se défaire. Égoutter.',
    'Préchauffer le four à 400°F.',
    'Faire revenir le bacon à feu moyen jusqu’à ce qu’il soit croustillant. Déposer sur papier absorbant et conserver le gras dans la poêle.',
    'Ajouter le beurre au gras de bacon et suer l’oignon à feu doux pendant 10 minutes.',
    'Ajouter l’ail, déglacer au vin et cuire quelques minutes, jusqu’à évaporation.',
    'Dans un plat allant au four, étaler la moitié des pommes de terre, puis la moitié du bacon, des oignons et de la crème. Saler, poivrer et muscader légèrement.',
    'Ajouter le reste des pommes de terre, du bacon et des oignons. Saler, poivrer et muscader.',
    'Répartir les tranches de fromage à raclette sur le dessus (avec la croûte).',
    'Cuire environ 30 minutes, jusqu’à gratin bien doré et bouillonnant.',
  ],
  tags: ['raclette', 'gratin', 'vin blanc'],
  images: [
    {
      small:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/tartiflette_fromage_raclette',
      medium:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/tartiflette_fromage_raclette',
      large:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/tartiflette_fromage_raclette',
    },
  ],
  source: 'David Cloutier',
  notes:
    'Formaté à partir du contenu fourni; cuisson totale environ 40 minutes à 400°F [1].',
  slug: 'tartiflette-au-fromage-a-raclette',
}
