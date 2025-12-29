import { Recipe } from '@/types/recipe';

export const pouletALaMangue: Recipe = {
  id: 'poulet-a-la-mangue',
  title: 'Poulet à la mangue',
  description: 'Un plat savoureux de poulet et mangue, parfumé aux épices et lait de coco, servi avec du riz Basmati.',
  categories: ['Plats principaux', 'Vollaille'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 20, max: 20 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '30 ml (2 c. à s.) huile d\'olive',
    '1 oignon, haché finement',
    '15 ml (1 c. à s.) gingembre frais, râpé',
    '250 ml (1 tasse) poitrine de poulet sans peau, coupée en cubes',
    '7 ml (1 1/2 c. à thé) poudre de cari',
    '5 ml (1 c. à thé) de curcuma',
    '3 ml (1/2 c. à thé) de paprika',
    '1 ml (1/4 c. à thé) cinq épice',
    'sel, au goût',
    '175 ml (3/4 tasse) bouillon de poulet',
    '175 ml (3/4 tasse) lait de coco',
    '2 mangues fraîches, coupées en dés',
    'fécule de maïs',
    'Persil ou coriandre frais, haché grossièrement'
  ],
  instructions: [
    'Dans un poêlon, chauffer l\'huile d\'olive à feu moyen, faire revenir l\'oignon, le gingembre et les cubes de poulet jusqu\'à ce qu\'ils soient dorés et mettre de côté.',
    'Faire bouillir le lait de coco, le bouillon de poulet et les épices 5 minutes.',
    'Incorporer la mangue, et le poulet précuit avec les oignons et le gingembre.',
    'Épaissir avec de la fécule de maïs au besoin.',
    'Parsemer de persil ou de coriandre haché grossièrement.'
  ],
  tags: ['épices', 'coco', 'mangue'],
  accompaniment: 'Riz Basmati',
  source: 'David Cloutier',
  notes: 'Vous pouvez y ajouter des amandes tranchées à la toute fin.',
  slug: 'poulet-a-la-mangue'
};
