import { Recipe } from '@/types/recipe';

export const jusDeRaisinsMaison: Recipe = {
  id: 'jus-de-raisins-maison',
  title: 'Jus de raisins maison',
  description: 'Tellement une belle façon de passer des raisins frais',
  categories: ['Végétarien'],
  prepTime: { min: 5, max: 5 },
  cookTime: { min: 10, max: 10 },
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    'Beaucoup de raisins frais'
  ],
  instructions: [
    'Séparez les raisins de leurs tiges.',
    'Lavez les raisins.',
    'Mettez dans une passoire et lavez-les dans de l\'eau tiède afin d’éliminer tous les produits chimiques qui s’y trouveraient.',
    'Écrasez les raisins délicatement avec un pilon ou une cuillère. Attention à ne pas faire de la purée de raisin.',
    'Mettez les raisins en purée dans une casserole et faites cuire à feu moyen pendant environ 10 minutes.',
    'Écrasez les raisins à l\'aide d\'une cuillère ou d’un pilon s’ils commencent à s\'agglutiner ou si des grains ne sont pas encore éclatés.',
    'Filtrez le jus en mettant une passoire fine au-dessus d\'un récipient ou directement sur un verre à boire.',
    'Versez les raisins dans la passoire, puis filtrez votre jus de raisin.',
    'Retirez la passoire, puis mettez votre jus dans le réfrigérateur pour le refroidir ou mettez directement des glaçons dans votre verre.'
  ],
  tags: ['jus de raisin', 'fait maison', 'rafraîchissant'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/jus-de-raisins-maison',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/jus-de-raisins-maison',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/jus-de-raisins-maison'
    }
  ],
  accompaniment: 'Absolument débile avec un peu de Vodka et une glace',
  source: 'David Cloutier',
  slug: 'jus-de-raisins-maison'
};
