import { Recipe } from '@/types/recipe';

export const browniesDansUneTasse: Recipe = {
  id: 'brownies-dans-une-tasse',
  title: 'Brownies dans une tasse',
  description: 'Brownies dans une tasse',
  categories: ['Desserts'],
  prepTime: 5,
  cookTime: 2,
  servings: 1,
  difficulty: 'Facile',
  ingredients: [
    '45 ml ou 3 cuillères à soupe de beurre fondu',
    '30 ml ou 2 cuillères à soupe de farine',
    '35 ml ou 2 cuillères à soupe + 1 cuillère à thé de cassonade',
    '45 ml ou 3 cuillères à soupe d’eau',
    '30 ml ou 2 cuillères à soupe de cacao en poudre',
    '15 ml ou 1 cuillère à soupe de sucre',
    '2 goûtes de vanille'
  ],
  instructions: [
    'Mélangez tous vos ingrédients dans une tasse, jusqu’à obtenir une pâte lisse et sans grumeaux.',
    'Placez au micro-ondes pendant environ 1 minute 30 secondes ou jusqu’à ce que le dessus du brownie soit à peine ferme.',
    'À noter : le temps de cuisson varie selon la puissance du micro-ondes. N’hésitez pas à faire chauffer votre brownie pendant 50 secondes dans un premier temps, puis à le remettre au micro-ondes et à vérifier toutes les dix secondes s’il est prêt.',
    'Servez avec une boule de crème glacée ou de la crème chantilly.'
  ],
  tags: ['micro-ondes', 'gourmandise', 'facile'],
  slug: 'brownies-dans-une-tasse'
};
