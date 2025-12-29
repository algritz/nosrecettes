import { Recipe } from '@/types/recipe'

export const carresAuxPommes: Recipe = {
  id: 'carres-aux-pommes',
  title: 'Carrés aux pommes',
  description:
    "Un dessert croustillant aux pommes avec un croustillant à l'avoine, servi tiède ou froid avec une boule de crème glacée à la vanille.",
  categories: ['Desserts'],
  prepTime: { min: 25, max: 25 },
  cookTime: { min: 45, max: 45 },
  servings: 10,
  difficulty: 'Facile',
  ingredients: [
    {
      title: "Croustillant à l'avoine",
      items: [
        '310 ml (1 ¼ tasse) de flocons d’avoine à cuisson rapide',
        '250 ml (1 tasse) de farine tout usage non blanchie',
        '125 ml (½ tasse) de cassonade',
        '125 ml (½ tasse) de beurre non salé, fondu',
        '30 ml (2 c. à soupe) de sirop d’érable',
      ],
    },
    {
      title: 'Garniture aux pommes',
      items: [
        '125 ml (½ tasse) de cassonade',
        '45 ml (3 c. à soupe) de fécule de maïs',
        '2,5 ml (½ c. à thé) de cannelle moulue',
        '500 ml (2 tasses) de compote de pommes non sucrée',
      ],
    },
  ],
  instructions: [
    'Place la grille au centre du four. Préchauffe le four à 190 °C (375 °F).',
    'Beurre un plat de cuisson carré de 20 cm (8 po) et tapisse-le d’une bande de papier parchemin en la laissant dépasser de chaque côté.',
    'Dans un bol, mélange les flocons d’avoine, la farine et la cassonade. Ajoute le beurre et le sirop d’érable. Bien mélanger avec une cuillère de bois. Mettre le bol de côté.',
    'Dans une petite casserole, mélange la cassonade, la fécule et la cannelle. Ajouter la compote de pommes et porte à ébullition en remuant à l’aide d’un fouet. Mettre la casserole de côté.',
    'Étaler la moitié du croustillant dans le plat et presse légèrement.',
    'Répartir la garniture aux pommes sur le croustillant.',
    'Parsemer délicatement le reste du croustillant.',
    'Mettre le plat dans le four et faire cuire environ 45 minutes ou jusqu’à ce que le croustillant soit doré.',
    'Servir tiède ou froid. Coupés en carrés.',
  ],
  tags: ['croustillant', 'pommes', 'four'],
  slug: 'carres-aux-pommes',
}
