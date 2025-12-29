import { Recipe } from '@/types/recipe'

export const saladeTexMexEtage: Recipe = {
  id: 'salade-tex-mex-etage',
  title: 'Salade Tex-Mex étagé',
  description:
    "Une salade colorée et fraîche avec des couches de haricots, laitue, oignons, fromage, tomates, avocat et coriandre, assaisonnée d'une sauce à base de Miracle Whip et de mélange à tacos.",
  categories: ['Salades'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 0, max: 0 },
  servings: 11,
  difficulty: 'Facile',
  ingredients: [
    '1/2 tasse de Miracle Whip originale',
    '1/2 tasse de crème sure légère',
    '1 enveloppe de mélange à Tacos en poudre',
    '1 boîte (540 ml ou 19 onces) de haricots noirs, rincés',
    '6 tasses de laitue iceberg, hachée grossièrement',
    "1/2 tasse d'oignon rouge, tranché",
    '1-1/2 tasses de fromage Tex Mex',
    '1 tasse de tomates cerise, coupées en deux moitiés',
    '1 avocat',
    '1/4 tasse de coriandre fraîche',
  ],
  instructions: [
    "Bien mélanger la Miracle Whip, la crème sure et l'assaisonnement à tacos.",
    'Déposer en étage les haricots, la laitue, les oignons, le fromage et les tomates dans un grand bol.',
    'Verser le mélange de Miracle Whip sur la salade.',
    'Réfrigérer durant deux heures.',
    "Couper l'avocat et en déposer les morceaux sur la salade au moment de servir.",
    'Garnir de coriandre.',
  ],
  tags: ['frais', 'couche', 'coloré'],
  slug: 'salade-tex-mex-etage',
}
