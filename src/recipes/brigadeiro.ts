import { Recipe } from '@/types/recipe';

export const brigadeiro: Recipe = {
  id: 'brigadeiro',
  title: 'Brigadeiro',
  description: 'Une recette de bonbons brésiliens au chocolat, facile à préparer et idéale pour les fêtes ou comme petite douceur.',
  categories: ['Pâtisseries et desserts'],
  prepTime: { min: 5, max: 5 },
  cookTime: { min: 20, max: 20 },
  servings: 20,
  difficulty: 'Facile',
  ingredients: [
    '1 boîte de lait Eagle Brand',
    '4 cuillères à soupe de chocolat en poudre',
    '25 g de beurre (environ 2 c. à soupe)',
    'Finition, à votre choix: Petits bonbons à gâteau, Peanut hachées, Chocolat granulés, Noix de coco hachées, etc.'
  ],
  instructions: [
    'Mélangez le lait, le chocolat en poudre et le beurre dans une marmite.',
    'Remuez à feu moyen jusqu’à ce qu’apparaisse le fond de la marmite.',
    'Versez dans un plat bien graissé avec du beurre.',
    'Laissez refroidir au réfrigérateur pendant environ 4 heures.',
    'Quand la préparation est refroidie, graissez-vous les mains avec un peu de beurre, ou mettez des gants.',
    'Prenez un morceau avec une petite cuillère et faites de petites boules rondes avec les mains.',
    'Roulez chaque boule dans la garniture de votre choix.',
    'Réfrigérez avant de servir.'
  ],
  tags: ['chocolat', 'bonbon', 'froid'],
  marinatingTime: { min: 240, max: 240 },
  slug: 'brigadeiro'
};
