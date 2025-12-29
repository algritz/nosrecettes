import { Recipe } from '@/types/recipe'

export const trempetteAuSMores: Recipe = {
  id: 'trempette-au-s-mores',
  title: "Trempette au S'mores",
  description: '',
  categories: ['Amuse-geules'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 12, max: 12 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1/2 c. à soupe de beurre',
    '1 tasse et 1/2 de pépites de chocolat chips',
    '15 grosses guimauves',
    'Biscuits grahams',
  ],
  instructions: [
    'Placer une poêle vide pouvant aller au four au centre du four, préchauffer à 450 degrés.',
    'Lorsque le 450 degrés est atteint, sortez la poêle, attention, la poignée sera chaude.',
    'Ajouter le beurre dans la poêle chaude, tourner doucement la poêle pour bien la couvrir de beurre fondu.',
    'Verser les pépites de chocolat et couvrir avec les guimauves.',
    'Cuire 5 à 7 minutes ou jusqu’à ce que les guimauves soient grillées.',
    'Laissez reposer 5 minutes et servir avec les biscuits graham.',
  ],
  tags: ['chocolat', 'guimauve', 'fours'],
  notes:
    'Vous pouvez ajuster la quantité de chocolat et de guimauves selon la grosseur de votre plat.',
  slug: 'trempette-au-s-mores',
}
