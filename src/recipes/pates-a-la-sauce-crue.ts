import { Recipe } from '@/types/recipe';

export const patesALaSauceCrue: Recipe = {
  id: 'pates-a-la-sauce-crue',
  title: 'Pâtes à la sauce crue',
  description: 'Une recette de pâtes fraîches avec une sauce crue à base de tomates, feta, mozzarella et herbes, idéale pour un dîner léger.',
  categories: ['Pâtes', 'Salades'],
  prepTime: 20,
  cookTime: 20,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '6 à 8 tomates bien mûres, mettre un peu de sucre si pas bien mûres',
    '5 ml (1 c. à thé) de sel',
    '5 ml (1 c. à thé) d\'origan séché',
    '60 ml (4 c. à soupe) d\'huile d\'olive',
    '450 g (1 lb) de pâtes courtes (fusili, penne, etc.)',
    '2 gousses ail, pelées et coupées en deux',
    '100 g (250 ml) de fromage feta, émietté grossièrement',
    '200 g (500 ml) de fromage bocconcini ou mozzarella fraîche, coupé en dés',
    '250 ml (1 tasse) d\'herbes fraîches (basilic et ciboulette), hachées'
  ],
  instructions: [
    'Coupez les tomates en dés et mettez-les dans un grand bol. Ajoutez le sel, le poivre et l\'origan. Brassez pendant une minute. Laissez reposer.',
    'Plongez les fusilli et les gousses d\'ail dans une grande casserole d\'eau bouillante légèrement salée.',
    'Pendant que les pâtes cuisent, émiettez le feta, coupez la mozzarella en dés et hachez les herbes. Ajoutez le tout dans le bol avec les tomates sans brasser.',
    'Lorsque les pâtes sont cuites, mais encore bien al dente, (environ 8 minutes) égouttez-les et remettez-les dans la casserole. Retirez les gousses d\'ail.',
    'Transvidez le mélange de tomates dans la même passoire et secouez légèrement pour en retirer une bonne partie du jus.',
    'Ajoutez le mélange égoutté aux pâtes et ajoutez l\'huile d\'olive. Si vous avez une huile d\'olive de bonne qualité, c\'est le temps de l\'utiliser : comme elle ne chauffera pas, elle conservera toute sa saveur.',
    'Remettez la casserole sur le feu au minimum pour que les pâtes restent chaudes pendant qu\'elles reposent et boivent la sauce. Mélangez bien, couvrez et laissez reposer 5 minutes.',
    'Rectifiez l\'assaisonnement et servez.'
  ],
  tags: ['tomates', 'cru', 'feta'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/pates-a-la-sauce-crue',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/pates-a-la-sauce-crue',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/pates-a-la-sauce-crue'
    }
  ],
  source: 'David Cloutier',
  slug: 'pates-a-la-sauce-crue'
};
