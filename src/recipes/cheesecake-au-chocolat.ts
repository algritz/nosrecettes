import { Recipe } from '@/types/recipe';

export const cheesecakeAuChocolat: Recipe = {
  id: 'cheesecake-au-chocolat',
  title: 'Cheesecake au chocolat',
  description: 'Un cheesecake riche et chocolaté avec une croûte Oreo, une garniture au fromage crémeuse et une ganache au chocolat décorative.',
  categories: ['Desserts'],
  prepTime: { min: 25, max: 25 },
  cookTime: { min: 75, max: 75 },
  servings: 10,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Croûte',
      items: [
      '24 biscuits Oreo entiers',
      '6 c. À soupe beurre fondu',
      'Pincée de sel casher'
      ]
    },
    {
      title: 'Gâteau au chocolat',
      items: [
      '4 (8 oz) paquets de fromage à la crème, ramollis à température ambiante',
      '3/4 c. sucre en poudre',
      '1/2 c. sucre brun clair emballé',
      '1/4 c. poudre de cacao',
      '1/4 c. sel casher',
      '4 gros œufs',
      '9 oz chocolat haché et fondu'
      ]
    },
    {
      title: 'Ganache au chocolat',
      items: [
      '1 1/2 c. pépites de chocolat',
      '3/4 c. crème épaisse'
      ]
    },
    {
      title: 'Garniture',
      items: [
      'Copeaux de chocolat'
      ]
    }
  ],
  instructions: [
    'Préchauffez le four à 350 °F et placez une grille au centre du four.',
    'Préparer la croûte: Dans un grand sac Ziplock ou un robot culinaire muni d’une lame en métal, écraser ou mélanger les Oréos jusqu’à formation de miettes. Transférer dans un bol et verser le beurre fondu. Ajouter le sel et remuer jusqu\'à ce que les miettes soient complètement enrobées et humides.',
    'Préparer le gâteau au fromage: Dans un grand bol, à l\'aide d\'un batteur, battre le fromage à la crème, les sucres, le cacao en poudre et le sel jusqu\'à consistance lisse.',
    'Ajouter les œufs un à la fois en battant bien entre chaque œuf ajouté.',
    'Incorporer le chocolat fondu.',
    'Enduisez un moule à charnière de 9 pouces avec de l\'huile et pressez le mélange Oreo dans le moule vers le haut des côtés, en tassant bien.',
    'Versez la garniture au fromage sur la croûte.',
    'Cuire au four jusqu\'à ce que le gâteau au fromage soit légèrement remué dans le centre, 1 heure à 1 heure 15 minutes.',
    'Réfrigérez le gâteau au fromage jusqu\'à ce qu\'il soit totalement froid, au moins 4 heures et jusqu\'au lendemain.',
    'Placez les pépites de chocolat dans un bol et réservez.',
    'Chauffer la crème épaisse dans une petite casserole à feu moyen.',
    'Versez la crème chaude sur les pépites de chocolat en fouettant constamment jusqu\'à ce que la sauce soit lisse.',
    'Verser la ganache sur le gâteau au fromage.',
    'Laisser figer et décorer de copeaux de chocolat.',
    'Remettre au réfrigérateur environ 10 minutes de plus pour laisser reposer la ganache.'
  ],
  tags: ['chocolat', 'cheesecake', 'ganache'],
  slug: 'cheesecake-au-chocolat'
};
