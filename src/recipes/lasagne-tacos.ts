import { Recipe } from '@/types/recipe';

export const lasagneTacos: Recipe = {
  id: 'lasagne-tacos',
  title: 'Lasagne tacos',
  description: 'Une version fusion entre lasagne et tacos, avec une couche de viande, haricots, maïs, tomates, fromage, et tortillas, cuite au four jusqu\'à ce que le fromage soit fondu et doré.',
  categories: ['Plats principaux'],
  prepTime: 35,
  cookTime: 50,
  servings: 10,
  difficulty: 'Facile',
  ingredients: [
    '2 cuillères à soupe d\'huile d\'olive',
    '1 petit poivron vert, coupé en dés',
    '1 petit oignon jaune, coupé en dés',
    '1 gousse d\'ail',
    '1 lb de dinde hachée',
    '⅔ tasse d\'eau',
    '1 paquet d\'assaisonnement pour tacos piquant',
    '1 boîte de haricots noirs, égouttés et rincés',
    '1 tasse de grains de maïs surgelés',
    '1 boîte de tomates en dés rôties non égouttées',
    '6 à 8 tortillas de farine de 20 cm',
    '1 boîte de haricots frits en purée',
    '5 tasses de fromage mexicain'
  ],
  instructions: [
    'Chauffer l\'huile d\'olive dans une poêle moyenne à feu moyen-vif. Ajouter le poivron vert, l\'ail et l\'oignon et faire sauter jusqu\'à ce qu\'ils soient tendres et que l\'oignon soit translucide, environ 6 minutes.',
    'Ajouter la dinde hachée et défaire avec une cuillère en bois. Cuire encore 4 minutes ou jusqu\'à ce qu\'elle ne soit plus rose. Égoutter la viande si nécessaire.',
    'Ajouter l\'eau et l\'assaisonnement pour tacos et porter à ébullition. Réduire le feu à moyen-doux et laisser mijoter 2 minutes.',
    'Incorporer les haricots noirs, le maïs et les tomates rôties. Continuer à mijoter, à découvert, pendant 10 minutes, jusqu\'à épaississement, puis retirer la casserole du feu.',
    'Préchauffer le four à 180 °C (350 °F) et graisser un plat de cuisson de 22 x 33 cm (9 x 13 pouces) avec un aérosol de cuisson.',
    'Placer 2 tortillas dans le plat de cuisson préparé. Étendre la moitié des haricots frits et la moitié du mélange de dinde sur les tortillas et saupoudrer de 1 tasse de fromage. Répéter l\'opération pour faire une autre couche, puis couvrir avec les 2 tortillas restantes et 3 tasses de fromage.',
    'Couvrir le plat de cuisson de papier d\'aluminium et cuire au four pendant 25 à 30 minutes, ou jusqu\'à ce que le fromage soit fondu et bouillonne.',
    'Faire griller à feu vif pendant 2 à 3 minutes, jusqu\'à ce qu\'ils soient dorés.'
  ],
  tags: ['fusion', 'tacos', 'fromage'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/lasagne-tacos',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/lasagne-tacos',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/lasagne-tacos'
    }
  ],
  source: 'David Cloutier',
  notes: 'Je l\'ai fait avec du bœuf et c\'est très bon.',
  slug: 'lasagne-tacos'
};
