import { Recipe } from '@/types/recipe';

export const saladeDePouletFraisesEtPacanes: Recipe = {
  id: 'salade-de-poulet-fraises-et-pacanes',
  title: 'Salade de poulet, fraises et pacanes',
  description: 'Une salade fraîche et savoureuse combinant poulet, fraises, avocats, noix de pacanes et coriandre, relevée d\'une vinaigrette à l\'érable et lime.',
  categories: ['Salades'],
  prepTime: { min: 25, max: 25 },
  cookTime: { min: 0, max: 0 },
  servings: 3,
  difficulty: 'Facile',
  ingredients: [
    '¼ tasse (60 ml) d’huile d’olive',
    'Le jus de 2 limes',
    '2 c. à soupe (30 ml) de sirop d’érable',
    '1 c. à soupe (15 ml) de moutarde de Meaux',
    '1 oignon vert, haché',
    '2 tasses (500 ml) de poulet cuit, effiloché ou coupé en dés',
    '2 branches de céleri, émincées finement',
    '1 laitue romaine émincée',
    '1-2 avocats pelés, dénoyautés et coupés en tranches',
    '½ tasse (125 ml) de pacanes rôties',
    '1 ½ tasse (375 ml) de fraises, équeutées et coupées en deux',
    '½ tasse (125 ml) de coriandre fraîche, hachée',
    'Sel et poivre',
    'Crème sure ou yogourt en garniture'
  ],
  instructions: [
    'Dans un grand bol, mélanger tous les ingrédients de la vinaigrette.',
    'Ajouter le poulet, le céleri, la salade, les avocats et les oignons verts.',
    'Mélanger délicatement.',
    'Servir dans les assiettes et garnir de fraises, de coriandre, de pacanes et de crème sure au goût.'
  ],
  tags: ['fraises', 'coriandre', 'vinaigrette'],
  slug: 'salade-de-poulet-fraises-et-pacanes'
};
