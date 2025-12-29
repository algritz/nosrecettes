import { Recipe } from '@/types/recipe'

export const gateauAuFromageEtBleuets: Recipe = {
  id: 'gateau-au-fromage-et-bleuets',
  title: 'Gateau au fromage et bleuets',
  description:
    'Un gâteau au fromage crémeux avec une garniture de bleuets frais et une croûte croustillante de biscuits Graham, parfait pour une occasion spéciale ou un dessert rafraîchissant.',
  categories: ['Desserts'],
  prepTime: { min: 30, max: 30 },
  cookTime: { min: 110, max: 110 },
  servings: 14,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Purée de bleuets',
      items: [
        '2 tasses de bleuets',
        '2 c. à soupe de sucre',
        '1 c. à thé de jus de citron',
      ],
    },
    {
      title: 'La croûte',
      items: [
        '9 biscuits Graham, finement broyés (environ 1 1/4 tasse)',
        '6 c. à soupe de beurre fondu',
        '1/4 tasse de sucre en poudre',
      ],
    },
    {
      title: 'Le gâteau',
      items: [
        '4 blocs (8 oz chacun) de fromage à la crème, ramollis',
        '1 tasse de sucre',
        '2 gros œufs',
        "1 c. à thé d'extrait de vanille pur",
        '1/4 tasse de crème sûre',
        '2 c. à soupe de farine tout usage',
        '1/4 c. à thé de sel casher',
        'Purée de bleuets (préparée ci-dessus)',
      ],
    },
    {
      title: 'Garniture',
      items: ['Crème fouettée (Cool whip)', 'Bleuets frais'],
    },
  ],
  instructions: [
    "Purée de bleuets : Dans un petit robot culinaire, mélanger les bleuets jusqu'à ce qu'il ne reste plus de gros morceaux. Dans une petite casserole à feu moyen, ajouter la purée de bleuets, le sucre et le jus de citron. Porter à ébullition, puis réduire le feu et laisser mijoter 10 minutes, en remuant de temps en temps. Laisser refroidir quelques heures au réfrigérateur.",
    "La croûte : Dans un grand bol, mélanger la chapelure de biscuits Graham, le beurre fondu et le sucre, jusqu'à ce que le mélange ressemble à du sable humide. Presser dans les côtés inférieurs et supérieurs d'un moule à charnière de 8 ou 9 pouces. Mettre au réfrigérateur 1 heure.",
    'Préchauffer le four à 325 °F.',
    "Dans un grand bol, à l'aide d'un batteur à main, battre le fromage à la crème et le sucre jusqu'à ce qu'il ne reste plus de grumeaux. Ajouter les œufs un à la fois, puis la vanille et la crème sûre. Incorporer la farine et le sel, battre jusqu'à homogénéité. Ajouter la purée de bleuets. Verser le mélange sur la croûte.",
    "Envelopper le fond du moule dans du papier aluminium et placer dans un grand plat à rôtir. Verser de l'eau bouillante dans le plat pour monter à mi-hauteur du moule. Cuire au four environ 1 heure 30 minutes.",
    'Éteindre le four, laisser la porte entrouverte et laisser refroidir le gâteau au fromage dans le four pendant 1 heure.',
    "Retirer le papier d'aluminium et réfrigérer le gâteau jusqu'à refroidissement complet, au moins 5 heures ou toute la nuit.",
    'Au moment de servir, garnir le gâteau de crème fouettée et de bleuets frais.',
  ],
  tags: ['bleuets', 'gâteau au fromage', 'relevé'],
  source: 'David Cloutier',
  slug: 'gateau-au-fromage-et-bleuets',
}
