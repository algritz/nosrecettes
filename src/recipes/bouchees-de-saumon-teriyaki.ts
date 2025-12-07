import { Recipe } from '@/types/recipe';

export const boucheesDeSaumonTeriyaki: Recipe = {
  id: '1765124478011',
  title: 'Bouchées de saumon teriyaki',
  description: 'Morceaux de saumon laqués à la sauce teriyaki miel-soja, poêlés et garnis de sésame et oignons verts.',
  categories: ['Poisson', 'Plats principaux'],
  prepTime: 15,
  cookTime: 15,
  marinatingTime: 30,
  servings: 6,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Saumon',
      items: [
        '2 filets de saumon avec peau',
        '2 oz (50 g) de miel',
        '1 poignée de graines de sésame'
      ]
    },
    {
      title: 'Marinade',
      items: [
        '1/2 tasse de sauce soja',
        'Jus de 1/2 citron',
        '1 oz (25 g) de gingembre haché',
        '1 piment rouge piquant, tranché',
        '4 gousses d\'ail, émincées',
        '1 pincée de sel'
      ]
    },
    {
      title: 'Garniture',
      items: [
        'Graines de sésame, au goût',
        'Oignons verts, au goût',
        'Piment rouge, au goût'
      ]
    }
  ],
  instructions: [
    'Couper le saumon en petits morceaux et réserver.',
    'Préparer la marinade en mélangeant sauce soja, jus de citron, gingembre, piment, ail et sel.',
    'Mélanger le saumon avec la marinade, couvrir et laisser mariner 15 à 30 minutes.',
    'Dans une grande poêle avec un peu d\'huile, verser la marinade et ajouter le miel et les graines de sésame; cuire jusqu\'à légère ébullition et épaississement.',
    'Ajouter le saumon et saisir quelques minutes de chaque côté, jusqu\'à cuisson désirée.',
    'Retirer du feu et garnir de graines de sésame supplémentaires, d\'oignons verts et de piment rouge. Servir.'
  ],
  tags: ['teriyaki', 'gingembre', 'sésame'],
  source: 'David Cloutier',
  slug: 'bouchees-de-saumon-teriyaki'
};
