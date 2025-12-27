import { Recipe } from '@/types/recipe';

export const tarteletteChocoCaramel: Recipe = {
  id: 'tartelette-choco-caramel',
  title: 'Tartelette choco-caramel',
  description: 'Une tartelette gourmande au chocolat et caramel, facile à préparer sans cuisson.',
  categories: ['Pâtisseries et desserts'],
  prepTime: 30,
  cookTime: 15,
  servings: 20,
  difficulty: 'Facile',
  ingredients: [
    '24 biscuits oréo',
    '4 cuillères à soupe de beurre fondu',
    '1½ tasse de sucre',
    '½ tasse d\'eau',
    '½ tasse de crème 35%',
    '½ cuillère à café de vanille',
    '6 onces de chocolat noir',
    'Sel de mer pour garniture'
  ],
  instructions: [
    'Placez les biscuits dans un sac en plastique et broyez-les jusqu\'à l\'obtention d\'une texture fine ou utilisez un robot culinaire.',
    'Dans un grand bol, mélanger la chapelure de biscuit et le beurre fondu et mélanger jusqu\'à ce qu\'il s\'agglomère.',
    'Dans des moules à muffin, mettez une cuillerée du mélange de chapelure et formez des croûtes.',
    'Congeler pendant 2 heures.',
    'Dans une casserole moyenne, chauffer le sucre et l\'eau jusqu\'à coloration ambrée. Ne remuez pas!',
    'Retirez du feu et versez la crème épaisse et la vanille en remuant jusqu\'à ce que le caramel se forme. Attention: l\'ajout de la crème fera bouillir le sucre, mélangez donc soigneusement.',
    'Versez rapidement le caramel dans la croûte du biscuit et laissez-le reposer jusqu\'à ce que le caramel soit ferme, environ 5 minutes.',
    'Faites chauffer la crème épaisse et ajoutez le chocolat noir. Laissez le chocolat reposer pendant une minute et remuez jusqu\'à ce qu\'il soit lisse.',
    'Versez une cuillerée de chocolat sur le caramel, puis réfrigérez pendant une heure ou jusqu\'à ce que le chocolat soit ferme.',
    'Saupoudrer les tartelettes avec du sel de mer pour équilibrer la douceur si désiré. Savourez.'
  ],
  tags: ['caramel', 'chocolat', 'sans cuisson'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/tartelette-choco-caramel',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/tartelette-choco-caramel',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/tartelette-choco-caramel'
    }
  ],
  source: 'David Cloutier',
  slug: 'tartelette-choco-caramel'
};
