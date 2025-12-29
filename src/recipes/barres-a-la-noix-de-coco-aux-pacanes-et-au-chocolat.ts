import { Recipe } from '@/types/recipe'

export const barresALaNoixDeCocoAuxPacanesEtAuChocolat: Recipe = {
  id: 'barres-a-la-noix-de-coco-aux-pacanes-et-au-chocolat',
  title: 'Barres à la noix de coco, aux pacanes et au chocolat',
  description:
    'Une recette de barres croquantes à la noix de coco, aux pacanes et au chocolat, faciles à préparer et parfaites pour une collation ou un dessert.',
  categories: ['Pâtisseries et desserts'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 30, max: 30 },
  servings: 18,
  difficulty: 'Facile',
  ingredients: [
    '9 biscuits Graham carrés',
    '60 ml (¼ tasse) de beurre salé, fondu',
    '250 ml (1 tasse) de noix de coco râpée finement non sucrée',
    '180 ml (¾ tasse) de pépites de chocolat noir ou au lait',
    '180 ml (¾ tasse) de pacanes, concassées grossièrement',
    '180 ml (¾ tasse) de lait concentré sucré',
  ],
  instructions: [
    'Placer la grille au centre du four. Préchauffer le four à 180 °C (350 °F).',
    'Tapisser un moule carré de 20 cm (8 po) de deux bandes de papier parchemin en les laissant dépasser de chaque côté. Réserver.',
    'Couvrir le fond du moule avec les biscuits. Les casser au besoin.',
    'Arroser les biscuits de beurre et y étaler la noix de coco en pressant légèrement.',
    'Parsemer de pépites de chocolat et de pacanes.',
    'Y verser le lait concentré sucré.',
    'Cuire au four environ 30 minutes ou jusqu’à ce que la garniture soit bien dorée.',
    'Laisser refroidir complètement, environ 2h.',
    'Démouler et couper.',
  ],
  tags: ['coco', 'pacanes', 'chocolat'],
  marinatingTime: { min: 120, max: 120 },
  slug: 'barres-a-la-noix-de-coco-aux-pacanes-et-au-chocolat',
}
