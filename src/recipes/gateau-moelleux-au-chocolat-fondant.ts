import { Recipe } from '@/types/recipe'

export const gateauMoelleuxAuChocolatFondant: Recipe = {
  id: 'gateau-moelleux-au-chocolat-fondant',
  title: 'Gâteau moelleux au chocolat fondant',
  description:
    'Un gâteau au chocolat fondant et moelleux, servi avec une garniture de blancs en neige. Peut être préparé en petits moules ou en gros ramequins.',
  categories: ['Pâtisseries et desserts'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 12, max: 12 },
  servings: 8,
  difficulty: 'Facile',
  ingredients: [
    '4 oz de chocolat mi-sucré',
    '1/2 tasse de beurre',
    '1 tasse de sucre à glacer',
    '2 œufs',
    "2 jaunes d'œufs",
    '6 c. à soupe de farine',
    "2 blancs d'œufs",
    '2 c. à soupe de sucre à glacer',
  ],
  instructions: [
    'Préparer 9 moules à muffin moyen.',
    "Placer le chocolat et le beurre dans un grand bol allant au micro-ondes et chauffer au micro-ondes, à intensité élevée, pendant 1 min ou jusqu'à ce que le beurre soit fondu.",
    "Battre la préparation au fouet jusqu'à ce que le chocolat ait complètement fondu.",
    'Ajouter 1 tasse de sucre et bien mélanger.',
    "Incorporer les œufs et les jaunes d'œufs, puis la farine.",
    'Répartir la pâte dans les moules à muffin.',
    'Mettre au frigidaire 2 à 24 heures.',
    "Monter les deux blancs d'œufs en neige.",
    'Ajouter 2 c. à soupe de sucre à glacer aux blancs en neige, mélanger et réfrigérer, ce sera votre garniture.',
    'Juste avant de servir, chauffer le four à 425 °F.',
    "Cuire les gâteaux au four pendant 10 à 12 minutes ou jusqu'à ce que leurs côtés soient fermes mais leur centre encore mou.",
    'Laisser reposer pendant 1 minute.',
    'Après le service, démouler et garnir avec les blancs en neige.',
  ],
  tags: ['chocolat', 'fondant', 'gâteau'],
  marinatingTime: { min: 120, max: 120 },
  notes:
    "Attention c'est vraiment chaud, ça brûle. Peut aussi être fait dans de gros ramequins de 3/4 de tasse, ce qui donne environ 4 portions.",
  slug: 'gateau-moelleux-au-chocolat-fondant',
}
