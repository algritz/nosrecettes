import { Recipe } from '@/types/recipe';

export const saladeSanteAuxEpinards: Recipe = {
  id: 'salade-sante-aux-epinards',
  title: 'Salade santé aux épinards',
  description: 'Salade d\'amour avec épinards, champignons, raisins secs, et vinaigrette soja-huile d\'olive.',
  categories: ['Salades'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 15, max: 15 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 paquet de champignons',
    '⅓ de tasse ou plus de raisins secs',
    'Jus de ½ citron',
    '3 branches de céleri',
    '1½ tasse de riz cuit refroidi',
    '2 c. à soupe de persil haché',
    '1 paquet d’épinards lavés et séchés',
    '¼ de tasse d’échalote hachée',
    '1 tasse de fèves germées',
    '1 tasse de noix d’acajou non salées',
    '1 poivron vert en cubes',
    '¼ de tasse de sauce soya',
    '½ tasse d’huile d’olive',
    '1 gousse d’ail émincée'
  ],
  instructions: [
    'En premier lieu, préparer le riz et laisser refroidir.',
    'Enrober les champignons de jus de citron et mettre de côté.',
    'Faire la vinaigrette dans un grand bol et y mélanger tous les ingrédients sauf les épinards et les fèves germées.',
    'Laisser mariner 1 heure.',
    'Ajouter les fèves germées et les épinards juste avant de servir.'
  ],
  tags: ['vinaigrette', 'marinade', 'salade'],
  notes: 'Cette salade ne peut se conserver une fois les épinards mélangés au riz. Afin d’éviter de détremper inutilement les épinards et d’éviter le gaspillage, ne mélanger que les quantités nécessaires et conserver le mélange de riz et d’épinards séparément.',
  slug: 'salade-sante-aux-epinards'
};
