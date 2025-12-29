import { Recipe } from '@/types/recipe'

export const tartareDeSaumonEtPacanesCarameliseesALerable: Recipe = {
  id: '1766771115847',
  title: "Tartare de saumon et pacanes caramélisées à l'érable",
  description:
    "Un tartare de saumon frais agrémenté de pacanes caramélisées à l'érable et de bacon croustillant, servi avec une mayonnaise à l'érable maison.",
  categories: ['Entrées'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 15, max: 15 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Base',
      items: [
        '45 ml de sirop d’érable',
        '250 ml de pacanes en morceaux',
        '4 tranches de bacon précuit',
        '45 ml d’huile d’olive',
        '30 ml de persil haché',
        '15 ml de ciboulette hachée',
        '2 oignons verts hachés',
        '15 ml de câpres hachées',
        'Sel et poivre au goût',
        '500 g de filet de saumon coupé en petits dés',
      ],
    },
    {
      title: 'Mayonnaise à l’érable',
      items: [
        '1/3 de tasse de mayonnaise',
        '1/4 de tasse de crème sure',
        '15 ml de sirop d’érable',
        'Sel et poivre au goût',
      ],
    },
  ],
  instructions: [
    'Préchauffer le four à 350 °F.',
    'Dans une poêle, porter le sirop d’érable à ébullition. Ajouter les pacanes et remuer.',
    "Déposer les pacanes sur une plaque de cuisson tapissée d’une feuille de papier parchemin. Les étendre en évitant qu'elles ne se touchent.",
    'Cuire au four de 12 à 15 minutes, jusqu’à ce que les pacanes soient caramélisées.',
    'Dans une poêle, cuire le bacon jusqu’à ce qu’il soit croustillant. Couper en morceaux.',
    'Dans un bol, mélanger les ingrédients de la mayonnaise à l’érable.',
    'Dans un autre bol, mélanger l’huile avec le persil, la ciboulette, les oignons verts, les câpres, la moitié des pacanes caramélisées hachées grossièrement et un quart de la mayonnaise à l’érable. Saler et poivrer.',
    'Ajouter le saumon et remuer.',
    'Déposer un emporte-pièce dans une assiette. Remplir de tartare et presser avec le dos d’une cuillère pour égaliser la surface.',
    'Garnir les tartares de pacanes caramélisées et de bacon.',
    'Servir avec le reste de la mayonnaise à l’érable.',
  ],
  tags: ['érable', 'caramélisation', 'saumon'],
  source: 'David Cloutier',
  slug: 'tartare-de-saumon-et-pacanes-caramelisees-a-lerable',
}
