import { Recipe } from '@/types/recipe';

export const saagAlooPommesDeTerreIndiennesAuxEpinards: Recipe = {
  id: 'saag-aloo-pommes-de-terre-indiennes-aux-epinards',
  title: 'Saag Aloo (Pommes de terre indiennes aux épinards)',
  description: 'J\'adore cette manière différente de manger des pommes de terre. Saag Aloo (Pommes de terre indiennes aux épinards)',
  categories: ['Végétarien', 'Plats principaux'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 30, max: 30 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '3 grosses pommes de terre épluchées et coupées en cube de 3 cm',
    '1 oignon haché finement',
    '2 piments verts coupés en petits dés',
    '1 morceau de 4 cm de gingembre râpé',
    '2 gousses d\'ail râpées',
    '1/2 c. à café de graine de cumin',
    '1/2 c. à café de coriandre moulue',
    '1/2 c. à café de curcuma',
    '1/2 c. à café de piment en poudre',
    '1/2 c. à café de fenugrec moulu',
    '300 g environ de bébés épinards',
    'Le jus de 1/2 citron',
    'Huile d\'olive'
  ],
  instructions: [
    'Faire cuire les pommes de terre dans de l\'eau bouillante salée 6 minutes.',
    'Égoutter complètement et laisser les pommes de terre sécher 1 ou 2 minutes.',
    'Dans une casserole à feu moyen, verser de l\'huile et faire revenir l\'oignon jusqu\'à ce qu\'il soit translucide.',
    'Ajouter le piment vert et les épices et faire cuire 2 ou 3 minutes, puis ajouter le gingembre et l\'ail. Si manque d\'huile, en rajouter.',
    'Augmenter la température du feu, ajouter les pommes de terre et faire cuire jusqu\'à ce qu\'elles soient dorées.',
    'Ajouter la moitié des épinards et faire cuire jusqu\'à ce qu\'ils tombent, puis ajouter l\'autre moitié.',
    'Baisser le feu à moyen et laisser cuire encore 8 à 10 minutes.',
    'Verser le jus de citron, bien brasser et servir avec des pains naams.'
  ],
  tags: ['épinards', 'épices', 'cuisine indienne'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/saag-aloo-pommes-de-terre-indiennes-aux-epinards',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/saag-aloo-pommes-de-terre-indiennes-aux-epinards',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/saag-aloo-pommes-de-terre-indiennes-aux-epinards'
    }
  ],
  accompaniment: 'Pain naams',
  source: 'David Cloutier',
  notes: 'En tout temps, s\'il en manque, n\'hésitez pas à rajouter de l\'huile d\'olive.',
  slug: 'saag-aloo-pommes-de-terre-indiennes-aux-epinards'
};
