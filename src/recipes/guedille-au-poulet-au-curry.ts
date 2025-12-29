import { Recipe } from '@/types/recipe';

export const guedilleAuPouletAuCurry: Recipe = {
  id: 'guedille-au-poulet-au-curry',
  title: 'Guédille au poulet au Curry',
  description: 'Une recette de sandwich au poulet parfumé au curry, servi dans des pains à hot-dogs avec laitue.',
  categories: ['Vollaille', 'Sandwichs'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 5, max: 5 },
  servings: 6,
  difficulty: 'Facile',
  ingredients: [
    'Salade de poulet : 3-4 c. à table de mayonnaise',
    '3-4 c. à table de yogourt grec',
    '1 c. à table de curry moulu',
    'Une bonne pincée de poivre de Cayenne',
    'Sel et poivre du moulin',
    '2 tasses de poulet cuit désossé',
    '2 branches de céleri émincées',
    '1 tasse de raisins rouges sans pépins, coupés en deux',
    '2 échalotes émincées',
    '2 c. à table de coriandre ou de persil plat',
    'Pains à hot-dogs',
    'Beurre',
    'Laitue Boston'
  ],
  instructions: [
    'Mélanger tous les ingrédients de la salade ensemble et réserver au frigo.',
    'Beurrer les pains à hot-dogs.',
    'Les cuire quelques minutes de chaque côté.',
    'Garnir les pains de laitue et de salade de poulet.'
  ],
  tags: ['curry', 'sandwich', 'rapide'],
  slug: 'guedille-au-poulet-au-curry'
};
