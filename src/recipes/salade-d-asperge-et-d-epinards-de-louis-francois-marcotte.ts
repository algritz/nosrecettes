import { Recipe } from '@/types/recipe'

export const saladeDAspergeEtDEpinardsDeLouisFrancoisMarcotte: Recipe = {
  id: 'salade-d-asperge-et-d-epinards-de-louis-francois-marcotte',
  title: "Salade d'asperge et d'épinards de Louis-François Marcotte",
  description: "Salade d'asperge et d'épinards de Louis-François Marcotte",
  categories: ['Salades'],
  prepTime: { min: 25, max: 25 },
  cookTime: { min: 0, max: 0 },
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    'De 4 à 5 asperges vertes et fraiches',
    "1 filet d'huile d'olive",
    '15 ml (1 c. à soupe) de sauce Tamari',
    "Le jus d'une lime",
    '250 ml (1 tasse) de « bébés » épinards',
    'Au goût, sel et poivre du moulin',
  ],
  instructions: [
    "À l'aide d'un couteau-économe, trancher finement les asperges sur le sens de la longueur.",
    "Dans un saladier, mélanger tous les ingrédients, à l'exception des épinards.",
    'Laisser ainsi mariner les asperges au minimum 5 minutes.',
    "Au moment de servir, ajouter les épinards et rectifier l'assaisonnement.",
  ],
  tags: ['asperge', 'marinade', 'salade'],
  slug: 'salade-d-asperge-et-d-epinards-de-louis-francois-marcotte',
}
