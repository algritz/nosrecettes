import { Recipe } from '@/types/recipe'

export const domino: Recipe = {
  id: 'domino',
  title: 'Domino',
  description: '',
  categories: ['Desserts'],
  prepTime: { min: 0, max: 0 },
  cookTime: { min: 0, max: 0 },
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Partie 1',
      items: [
        '½ de tasse de beurre',
        '¼ de tasse de sucre',
        '1/3 de tasse de cacao',
        '1 c. à table de vanille',
        '1 œuf',
        '2 tasses de chapelure de biscuit graham',
        '½ Tasse de noix hachée',
        '1 tasse de noix de coco râpé',
      ],
    },
    {
      title: 'Partie 2',
      items: [
        '1 paquet de pouding instantané à la vanille',
        '6 c. à table de lait',
        '2 tasse de sucre en poudre',
      ],
    },
    {
      title: 'Partie 3',
      items: ['1 c. à table de beurre', '3 carrée de chocolat semi-sucré'],
    },
  ],
  instructions: [
    'Partie 1: Faire fondre à feu doux: ½ de tasse de beurre, ¼ de tasse de sucre, 1/3 de tasse de cacao, 1 c. à table de vanille, 1 œuf. Ajouter: 2 tasses de chapelure de biscuit graham, ½ Tasse de noix hachée, 1 tasse de noix de coco râpé. Mettre dans un moule carré bien beurré. Bien presser le mélange et réfrigérer 1 heure.',
    'Partie 2: Mélanger le lait au pouding et ajouter graduellement le sucre en poudre pour former une crème. Étendre cette crème sur la première.',
    'Partie 3: Faire fondre 1 c. à table de beurre et 3 carrée de chocolat semi-sucré. Étendre sur la deuxième couche. Refroidir au moins 3 heures et couper en carrés.',
  ],
  tags: ['gourmand', 'cacao', 'froid'],
  slug: 'domino',
}
