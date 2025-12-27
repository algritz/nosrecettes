import { Recipe } from '@/types/recipe';

export const alooKeema: Recipe = {
  id: 'aloo-keema',
  title: 'Aloo Keema',
  description: 'Un délicieux plat de keema de veau avec pommes de terre, épices et garniture de coriandre et fenugrec.',
  categories: ['Plats principaux', 'Végétarien'],
  prepTime: 20,
  cookTime: 35,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 paquet veau haché',
    '7.5 ml d\'ail écrasé',
    '7.5 ml de gingembre écrasé',
    '1 feuille de laurier',
    '1 bâton de cannelle',
    '2 cardamomes noires',
    '2 cardamomes vertes',
    '4 clous de girofle',
    '1 oignon haché',
    'Poudre de piment rouge au goût',
    'Flocons de piment rouge au goût',
    'Sel au goût',
    '15 ml de coriandre moulue',
    '15 ml de cumin séché',
    '7.5 ml de curcuma',
    '3 tomates coupées en morceaux',
    '3 pommes de terre en cubes',
    '2 piments forts verts',
    '1 c. à soupe de fenougrec',
    'Une poignée de coriandre pour garnir'
  ],
  instructions: [
    'Faites chauffer l\'huile dans une casserole, puis ajoutez la feuille de laurier, le bâton de cannelle, la cardamome noire, la cardamome verte, les clous de girofle et l\'oignon.',
    'Une fois qu\'il devient légèrement doré, ajoutez l\'ail et le gingembre écrasés et poursuivez la cuisson pendant 3-4 minutes, jusqu\'à ce que les oignons prennent une couleur dorée.',
    'Ajoutez le veau haché et faites-le cuire pendant 4-5 minutes, jusqu\'à ce qu\'il change de couleur.',
    'Ajoutez le piment rouge en poudre, les flocons de piment rouge, le sel, la coriandre moulue, le cumin séché, le curcuma, les tomates hachées et ¼ tasse d\'eau.',
    'Couvrez et laissez cuire à feu doux pendant 15 minutes.',
    'Après 15 minutes, retirez les plus grosses épices (comme la feuille de laurier, la cardamome, etc.).',
    'Ajoutez les pommes de terre en cubes, les piments verts et suffisamment d\'eau pour couvrir les pommes de terre et mélangez.',
    'Faites cuire jusqu\'à ce que les pommes de terre soient tendres et que l\'eau se soit évaporée à votre goût.',
    'Garnir de fenugrec et de coriandre.'
  ],
  tags: ['épices', 'curry', 'garniture'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/aloo-keema',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/aloo-keema',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/aloo-keema'
    }
  ],
  source: 'David Cloutier',
  slug: 'aloo-keema'
};
