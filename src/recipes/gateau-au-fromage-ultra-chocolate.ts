import { Recipe } from '@/types/recipe';

export const gateauAuFromageUltraChocolate: Recipe = {
  id: 'gateau-au-fromage-ultra-chocolate',
  title: 'Gâteau au fromage ultra chocolaté',
  description: 'Un gâteau au fromage riche en chocolat avec une croûte croquante, une garniture fondante et une ganache onctueuse, décoré de chocolat Aéro Bubbles.',
  categories: ['Desserts'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 50, max: 50 },
  servings: 10,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Croûte',
      items: [
        '1 tasse de chapelure de Oréo',
        '3 cuillères à soupe de sucre',
        '3 cuillères à soupe de beurre fondu'
      ]
    },
    {
      title: 'Gâteau',
      items: [
        '2 tasses de pépites de chocolat mi-sucré',
        '2 paquets de fromage à la crème, ramolli',
        '3/4 tasse de sucre',
        '2 cuillères à soupe de farine tout usage',
        '2 gros œufs, légèrement battus',
        '1 cuillère à café d\'extrait de vanille'
      ]
    },
    {
      title: 'Ganache au chocolat',
      items: [
        '6 oz de chocolat mi-sucré haché',
        '1/3 tasse de crème à 35%'
      ]
    },
    {
      title: 'Garniture',
      items: [
        'Un sac de chocolat Aéro Bubbles'
      ]
    }
  ],
  instructions: [
    'Croûte: Dans un petit bol, mélanger la chapelure et le sucre, incorporer le beurre. Étendre dans le fond d\'un moule à charnière 9 pouces graissé et mettre au réfrigérateur.',
    'Gâteau: Au micro-ondes, faire fondre les pépites de chocolat, remuer jusqu\'à consistance lisse. Mettre de côté.',
    'Dans un grand bol, battre le fromage à la crème, le sucre et la farine jusqu\'à consistance lisse. Ajouter les œufs, battre à basse pression jusqu\'à ce que le tout soit combiné. Incorporer la vanille et le chocolat fondu jusqu\'à homogénéité.',
    'Verser la garniture sur la croûte. Cuire à 350°F pendant 40 à 45 minutes ou jusqu\'à ce que le centre soit presque pris.',
    'Laisser refroidir sur une grille pendant 20 minutes.',
    'Ganache: Dans un petit bol allant au micro-ondes, mélanger le chocolat et la crème, faire cuire 1 à 2 minutes. Brasser jusqu\'à homogénéité.',
    'Étendre la ganache sur le gâteau. Décorer de chocolat Aéro en bouchée.',
    'Laisser refroidir 30 minutes. Passer soigneusement un couteau autour du bord du moule pour le desserrer. Réfrigérer jusqu\'au moment de servir.'
  ],
  tags: ['chocolat', 'ganache', 'gâteau au fromage'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/gateau-au-fromage-ultra-chocolate',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/gateau-au-fromage-ultra-chocolate',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/gateau-au-fromage-ultra-chocolate'
    }
  ],
  source: 'David Cloutier',
  slug: 'gateau-au-fromage-ultra-chocolate'
};
