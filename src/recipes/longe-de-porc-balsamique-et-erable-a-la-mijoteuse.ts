import { Recipe } from '@/types/recipe'

export const longeDePorcBalsamiqueEtErableALaMijoteuse: Recipe = {
  id: 'longe-de-porc-balsamique-et-erable-a-la-mijoteuse',
  title: 'Longe de porc balsamique et érable à la mijoteuse',
  description: '',
  categories: ['Vollaille', 'Plats principaux'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 360, max: 360 },
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    '1 kg de longe de porc',
    "3/4 de tasse de sirop d'érable",
    "1/2 tasse d'eau",
    '1/4 de tasse de vinaigre balsamique',
    '2 c. à table de sauce soya',
    "1 c. à table de soupe à l'oignon en poudre",
    '1 c. à thé de moutarde sèche',
    '1 oignon émincé',
    "2 gousses d'ail émincées",
    '6 pommes de terre pelées et coupées en gros dés',
    '3 grosses carottes pelées et coupées en gros tronçons',
    '1 pincée de gros sel',
  ],
  instructions: [
    "Mélanger les liquides avec la soupe à l'oignon, la moutarde sèche et l'ail, puis verser le mélange dans la mijoteuse.",
    "Déposer la longe de porc dans la mijoteuse, suivie de l'oignon émincé, les pommes de terre et les carottes, puis poudrer les pommes de terre avec la pincée de gros sel.",
    'Cuire 30 minutes à température élevée, puis 5h30 à température basse.',
    'Facultatif : 2 heures avant la fin, si possible retourner la longe de porc afin que tous les côtés baignent dans le bouillon.',
  ],
  tags: ['mijoteuse', 'porc', 'balsamique'],
  notes:
    'Temps de cuisson total : 6 heures. La préparation demande 10 minutes.',
  slug: 'longe-de-porc-balsamique-et-erable-a-la-mijoteuse',
}
