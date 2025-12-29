import { Recipe } from '@/types/recipe';

export const tartareDeBoeufPommeCannelle: Recipe = {
  id: 'tartare-de-boeuf-pomme-cannelle',
  title: 'Tartare de boeuf pomme & cannelle',
  description: 'Tartare de boeuf pomme & cannelle',
  categories: ['Entrées'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 0, max: 0 },
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    '300 g de bœuf bavette à tartare',
    '1/4 de tasse de pomme, coupée en petits dés',
    '1 oignon vert, haché',
    '1 c. à soupe de mayonnaise',
    '1 c. à soupe de cornichon, haché',
    '1 c. à soupe de persil frais, haché',
    '2 c. à thé de compote de pommes non sucrée',
    '1 c. à thé de moutarde de Dijon',
    '1 c. à thé de sauce sriracha',
    '1 1/4 de c. à thé de cannelle moulue',
    'Un filet de jus de citron',
    'Sel et poivre, au goût'
  ],
  instructions: [
    'À l’aide d’un couteau, couper le bœuf en petits dés, puis réserver dans un bol froid.',
    'Ajouter le reste des ingrédients, puis bien mélanger.',
    'Rectifier l’assaisonnement au besoin, puis servir avec des croûtons ou du pain.'
  ],
  tags: ['bœuf', 'tartare', 'cannelle'],
  slug: 'tartare-de-boeuf-pomme-cannelle'
};
