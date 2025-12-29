import { Recipe } from '@/types/recipe';

export const cretonMaisonAuGrasDeCanard: Recipe = {
  id: 'creton-maison-au-gras-de-canard',
  title: 'Creton maison au gras de canard',
  description: 'Des cretons maison c\'est toujours bon.',
  categories: ['Végétarien'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 60, max: 60 },
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    '2 c. à soupe de beurre',
    '2 oignons hachés finement',
    '2 livres de porc haché mi-maigre',
    '1/2 tasse de chapelure fine',
    '2 tasse d\'eau bouillante pour recouvrir la viande',
    '2 c. à thé d\'assaisonnement pour cretons El-Ma-Mia',
    'Poivre au goût, beaucoup',
    '2 c à thé de graisse de canard',
    '1 c. à thé de sirop d\'érable'
  ],
  instructions: [
    'Faire blanchir l\'oignon dans le beurre dans un chaudron à feu doux.',
    'Ajouter le porc et bien brasser.',
    'Ajouter la chapelure et bien mélanger.',
    'Couvrir de 2 tasses d\'eau bouillante.',
    'Ajouter les épices à creton et le poivre et mélanger.',
    'Ajouter le gras de canard et bien brasser.',
    'À mi-cuisson ajouter le sirop d\'érable.',
    'Faire cuire jusqu\'à ce qu\'il y ait plus de liquide sur le dessus à feu doux.',
    'Laisser refroidir et mettre dans des plats.',
    'Ce congèle très bien.'
  ],
  tags: ['cretons', 'canard', 'maison'],
  slug: 'creton-maison-au-gras-de-canard'
};
