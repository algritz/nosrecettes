import { Recipe } from '@/types/recipe'

export const cotesLeveesDeKansasCity: Recipe = {
  id: 'cotes-levees-de-kansas-city',
  title: 'Côtes levées de Kansas City',
  description:
    "C'est définitivement la meilleur recette de côte levée au monde.",
  categories: ['Vollaille', 'Plats principaux'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 180, max: 180 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 morceaux de côtes levées de 1,4 à 1,8 kg (3 à 4 lbs) chacun',
    '75 ml de sucre',
    '60 ml de paprika doux',
    '45 ml de gros sel (de mer ou casher)',
    '30 ml de poivre citronné',
    "15 ml d'ail haché et déshydraté",
    '3/4 de tasses de cidre de pomme',
    '1/4 de tasses bourbon',
  ],
  instructions: [
    "À l'arrière de chaque morceau de côtes levées, retirer la fine membrane qui recouvre les os et la viande.",
    "Dans un bol, mettre le sucre, le paprika, le sel, le poivre de citron et l'ail. Mélanger avec les doigts.",
    "Saupoudrer le mélange d'épices sur les côtes levées et bien frotter l'assaisonnement sur la viande.",
    "Les côtes levées peuvent être cuites immédiatement. Pour plus de goût, laisser mariner à couvert au réfrigérateur pendant au moins 2 h, ou jusqu'au lendemain.",
    "À l'aide d'un entonnoir, verser le cidre et le bourbon dans un pulvérisateur propre. Agiter la bouteille pour bien mélanger.",
    'Placer une lèchefrite sous la grille, au centre du barbecue et préchauffer à feu moyen (325 °F [165 °C]).',
    'Ajouter les copeaux de bois dans le fumoir du barbecue ou les placer dans un sac à fumer, sous la grille.',
    'Déposer les côtes levées sur les os, au centre de la grille, au-dessus de la lèchefrite et éloignées de la source de chaleur afin de cuire la viande de façon indirecte.',
    "Fermer le couvercle du barbecue et cuire de 1 à 2 h, jusqu'à ce que les côtes levées soient bien dorées et cuites, en les pulvérisant du mélange de bourbon et de cidre toutes les 10 minutes.",
    "Lorsque les côtes levées sont cuites, la viande s'est rétractée d'environ 2,5 cm (1 po) aux extrémités des os et elle est assez tendre pour être séparée avec les doigts.",
    "L'extérieur est foncé, presque noir, mais pas brûlé.",
    'Transférer les morceaux de côtes levées sur une planche à découper et trancher en moitiés.',
  ],
  tags: ['barbecue', 'fumoir', 'marinade sèche'],
  wine: '7 Deadly Zins',
  accompaniment:
    'Servir avec une sauce barbecue à la cassonade et au bourbon ou la Sauce BBQ au Whisky Laphroaig',
  marinatingTime: { min: 480, max: 480 },
  notes:
    'Mettre de la sauce barbecue sur les côtes 5 minutes avant la fin de la cuisson et faire caraméliser.',
  slug: 'cotes-levees-de-kansas-city',
}
