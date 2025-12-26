import { Recipe } from '@/types/recipe';

export const truffesALaPateDeBiscuits: Recipe = {
  id: 'truffes-a-la-pate-de-biscuits',
  title: 'Truffes à la pâte de biscuits',
  description: 'Une recette de truffes faites avec une pâte de biscuits, enrobées de chocolat.',
  categories: ['Pâtisseries et desserts'],
  prepTime: 20,
  cookTime: 15,
  servings: 37,
  difficulty: 'Facile',
  ingredients: [
    '1/2 tasse de beurre à température pièce',
    '3/4 de tasse de cassonade',
    '1 cuillère à thé de vanille',
    '2 tasses de farine blanche',
    '1 boîte de lait Eagle Brand',
    '1/2 tasse de pépites de chocolat semi-sucré',
    '3 tasses de chocolat mi-sucré'
  ],
  instructions: [
    'Dans un bol, battre le beurre et la cassonade jusqu’à obtenir une texture légère.',
    'Ajouter la farine, le lait Eagle Brand ainsi que la vanille. Bien battre à chaque ajout.',
    'Ajouter les pépites de chocolat. Mélanger.',
    'Recouvrir et laisser au réfrigérateur pendant environ une heure pour que le tout fige.',
    'Prenez la pâte à biscuit dans votre main et faites des petites boules d’environ 1 pouce de diamètre.',
    'Déposez sur un papier parchemin sur une plaque à biscuits.',
    'Remettre un autre 15 à 20 minutes au réfrigérateur.',
    'Dans un bol, faites fondre le chocolat pour l\'enrobage.',
    'Trempez chacune des boules de pâte dans le chocolat et mettez-les sur le papier parchemin.'
  ],
  tags: ['chocolat', 'réfrigération', 'boules'],
  slug: 'truffes-a-la-pate-de-biscuits'
};
