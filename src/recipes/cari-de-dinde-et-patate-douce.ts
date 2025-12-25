import { Recipe } from '@/types/recipe';

export const cariDeDindeEtPatateDouce: Recipe = {
  id: 'cari-de-dinde-et-patate-douce',
  title: 'Cari de dinde et patate douce',
  description: 'Un curry savoureux à base de dinde, patates douces, lait de coco et épices, mijoté lentement pour un plat réconfortant.',
  categories: ['Plats principaux', 'Végétarien'],
  prepTime: 20,
  cookTime: 360,
  servings: 8,
  difficulty: 'Facile',
  ingredients: [
    '1 ½ lb de poitrine de dinde',
    '2 patates douces',
    '1 pignon',
    '2 gousses d’ail',
    '1 morceau de 2,5 cm (1 po) de gingembre frais',
    '1 boîte de 398 ml de lait de coco',
    '1 boîte de 156 ml de pâte de tomates',
    '2 c. à soupe de poudre de cari',
    '2 c. à soupe de pâte de cari indienne (douce ou piquante)',
    'Poivre et sel',
    '1 lime',
    '½ tasse de coriandre fraîche'
  ],
  instructions: [
    'Couper le dindon en cubes.',
    'Peler les patates douces et les couper en cubes.',
    'Hacher l’oignon et l’ail.',
    'Trancher finement le gingembre.',
    'Dans le contenant de la mijoteuse, mélanger le lait de coco, la pâte de tomates, la poudre de cari et la pâte de cari.',
    'Ajouter la dinde et les légumes.',
    'Bien mélanger.',
    'Poivrer généreusement et ajouter une pincée de sel.',
    'Couvrir et cuire 6 heures à faible intensité.',
    'Servir avec riz.',
    'Garnir avec coriandre et quartiers de lime.',
    'Accompagner de pains naans.'
  ],
  tags: ['curry', 'mijoteuse', 'épices'],
  notes: 'Vous pouvez remplacer la dinde par du poulet.',
  slug: 'cari-de-dinde-et-patate-douce'
};
