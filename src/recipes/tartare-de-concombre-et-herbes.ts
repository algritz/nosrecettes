import { Recipe } from '@/types/recipe';

export const tartareDeConcombreEtHerbes: Recipe = {
  id: 'tartare-de-concombre-et-herbes',
  title: 'Tartare de concombre et herbes',
  description: 'Une salade fraîche de concombre aux fines herbes, servie avec une sauce crémeuse au fromage de chèvre et à l\'aneth.',
  categories: ['Salades'],
  prepTime: 15,
  cookTime: 0,
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    '15 ml de jus de lime',
    '15 ml de moutarde à l\'ancienne',
    '45 ml de persil frais haché',
    '30 ml de menthe fraîche hachée',
    '1 concombre anglais',
    '45 ml d’huile d’olive',
    '1/2 petit oignon rouge haché',
    'Sel et poivre au goût'
  ],
  instructions: [
    'Dans un saladier, fouetter le jus de lime avec la moutarde, les fines herbes et l’huile.',
    'Saler et poivrer.',
    'Couper le concombre en dés, puis déposer dans le saladier.',
    'Ajouter l’oignon rouge et remuer.',
    'Salez et poivrez au goût.',
    'Déposer un emporte-pièce rond dans une assiette.',
    'Remplir de la préparation au concombre et presser légèrement et démouler.'
  ],
  tags: ['frais', 'herbes', 'concombre'],
  slug: 'tartare-de-concombre-et-herbes'
};
