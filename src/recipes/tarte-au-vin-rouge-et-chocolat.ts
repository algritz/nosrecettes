import { Recipe } from '@/types/recipe';

export const tarteAuVinRougeEtChocolat: Recipe = {
  id: 'tarte-au-vin-rouge-et-chocolat',
  title: 'tarte au vin rouge et chocolat',
  description: 'Une tarte au vin rouge et chocolat avec une croûte croustillante et une garniture riche et lisse, décorée de cool whip et pépites de chocolat.',
  categories: ['Pâtisseries et desserts'],
  prepTime: 25,
  cookTime: 20,
  servings: 8,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Croûte',
      items: [
        '2 tasses de biscuits Oréo dans le crémage (une boîte de 9 onces)',
        '8 c. À soupe de beurre non salé fondu',
        '2 cuillères à soupe de sucre',
        'Une pincée de sel fin'
      ]
    },
    {
      title: 'Remplissage',
      items: [
        '1/2 tasse de fécule de maïs',
        '1 1/4 tasse de sucre',
        'Une bouteille de vin rouge sec de 750 ml',
        '12 onces de chocolat',
        '2 cuillères à soupe de beurre non salé',
        'Pincée de sel fin'
      ]
    },
    {
      title: 'Décoration',
      items: [
        '2 tasses de cool whip',
        'Mini pépittes de chocolat pour la décoration'
      ]
    }
  ],
  instructions: [
    'Croûte: Placez une grille au milieu du four et préchauffez à 325 degrés F. Mélanger la chapelure de biscuit, le beurre, le sucre et le sel dans un bol moyen. Appuyez dans le fond et les côtés d\'un moule à tarte de 9 pouces de profondeur. Cuire au four jusqu\'à ce que le mélange soit sec, environ 15 à 18 minutes. Refroidir complètement.',
    'Garniture: Mélanger la fécule de maïs et 1 1/4 tasse de sucre dans une casserole moyenne. Incorporer le vin très lentement en fouettant pour éviter les grumeaux. Cuire à feu moyen, en remuant constamment, jusqu\'à ce qu\'il devienne très lisse et très épais, environ 8 minutes. Retirer du feu et incorporer le chocolat, le beurre et le sel jusqu\'à consistance lisse. Verser la garniture dans la croûte préparée et réfrigérer jusqu\'à ce que le mélange soit refroidi et pris, environ 4 heures ou jusqu\'à la nuit.',
    'Au moment de servir, mettre le cool whip et les pépittes de chocolat.'
  ],
  tags: ['chocolat', 'vin rouge', 'pâtisserie'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/tarte-au-vin-rouge-et-chocolat',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/tarte-au-vin-rouge-et-chocolat',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/tarte-au-vin-rouge-et-chocolat'
    }
  ],
  source: 'David Cloutier',
  slug: 'tarte-au-vin-rouge-et-chocolat'
};
