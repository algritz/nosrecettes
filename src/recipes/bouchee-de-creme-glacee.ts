import { Recipe } from '@/types/recipe';

export const boucheeDeCremeGlacee: Recipe = {
  id: 'bouchee-de-creme-glacee',
  title: 'Bouchée de crème glacée',
  description: 'Une recette de bouchées glacées enrobées de chocolat et Rice Krispies, à préparer à l\'avance et à congeler.',
  categories: ['Desserts'],
  prepTime: 60,
  cookTime: 3,
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    'Un contenant de crème glacée ramollie vanille ou autre à votre goût',
    '2 tasses de pépites de chocolat',
    '1/2 de tasse d\'huile de noix de coco',
    '1/3 de tasse Rice Krispies'
  ],
  instructions: [
    'Etalez la crème glacée ramollie sur une plaque à pâtisserie sur laquelle vous avez déposé un papier ciré.',
    'Couvrez de papier ciré et appuyez dessus pour étaler uniformément et lisser. Geler toute une nuit.',
    'Le lendemain, retirez le papier ciré du dessus et coupez la crème glacée en petits carrés.',
    'Remettez au congélateur jusqu\'au moment de tremper dans le chocolat.',
    'Mélangez les pépites de chocolat avec 1/2 tasse d\'huile de noix de coco et faites fondre au micro-ondes 90 secondes, en remuant toutes les 30 secondes ou jusqu\'à ce que ce soit fondu et lisse.',
    'Laissez le mélange de chocolat refroidir à température ambiante.',
    'Mélangez dans les Rice Krispies. Pour cette étape, vous devez travailler rapidement et en petit groupe.',
    'Plongez les cubes de crème glacée dans le mélange de chocolat et remettez au congélateur pour faire durcir.'
  ],
  tags: ['chocolat', 'glace', 'enrobage'],
  marinatingTime: 720,
  slug: 'bouchee-de-creme-glacee'
};
