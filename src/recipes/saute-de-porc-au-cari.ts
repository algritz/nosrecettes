import { Recipe } from '@/types/recipe';

export const sauteDePorcAuCari: Recipe = {
  id: 'saute-de-porc-au-cari',
  title: 'Sauté de porc au cari',
  description: '',
  categories: ['Végétarien'],
  prepTime: 20,
  cookTime: 20,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 filets de porc coupés en cubes',
    '22.5 ml (1 1/2 c. à soupe) de pâte de cari rouge',
    '15 ml (1 c. à soupe) de zestes de lime',
    '30 ml (2 c. à soupe) d\'huile de canola',
    '1 boîte de lait de coco',
    '60 ml (1/4 de tasse) de sauce soya réduite en sodium',
    '15 ml (1 c. à soupe) de gingembre haché',
    '30 ml (2 c. à soupe) de cassonade',
    '1 oignon haché',
    '2 carottes émincées',
    '1 poivron rouge émincé',
    '60 ml (1/4 de tasse) de noix de cajou grillées',
    'Coriandre pour décorer'
  ],
  instructions: [
    'Dans un bol, mélanger les cubes de porc avec 1 c. à soupe de la pâte de cari et les zestes. Laisser mariner 15 minutes au frais.',
    'Dans une casserole, chauffer l\'huile à feu moyen. Faire dorer les cubes de viande de 2 à 3 minutes. Réserver dans une assiette.',
    'Dans la même casserole, faire revenir les légumes de 2 à 3 minutes.',
    'Remettre le porc dans la casserole.',
    'Dans un bol, mélanger le lait de coco avec la sauce soya, le gingembre, la cassonade et le reste de la pâte de cari, puis verser dans la casserole.',
    'Porter à ébullition puis laisser mijoter de 18 à 20 minutes à feu doux-moyen.',
    'Parsemer de noix de cajou et de coriandre.'
  ],
  tags: ['cari', 'noix de cajou', 'riz basmati'],
  accompaniment: 'Servir sur un riz basmati',
  marinatingTime: 15,
  slug: 'saute-de-porc-au-cari'
};
