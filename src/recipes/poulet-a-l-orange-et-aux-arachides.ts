import { Recipe } from '@/types/recipe';

export const pouletALOrangeEtAuxArachides: Recipe = {
  id: 'poulet-a-l-orange-et-aux-arachides',
  title: 'Poulet à l\'orange et aux arachides',
  description: 'Un plat de poulet savoureux avec une sauce à l\'orange et aux arachides, parfait pour une cuisson au four et servi avec des quartiers d\'orange et des oignons verts.',
  categories: ['Plats principaux'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 30, max: 30 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '150 grammes de confiture à l\'orange',
    '75 grammes de beurre d\'arachide croquant',
    '3 cuillères à soupe de cassonade',
    '2 cuillères à soupe de fécule de maïs',
    '2 cuillères à soupe de ketchup',
    '1 cuillère à café de sauce de poisson',
    'Zeste d\'1 orange',
    '120 ml de jus d\'orange',
    '1 cuillère à café de gingembre moulu',
    '1 cuillère à café de poudre d\'ail',
    '1/2 cuillère à café de paprika',
    '1/2 cuillère à café de cumin moulu',
    'Pincée de poivre et sel',
    '2 cuillères à soupe d\'huile d\'olive',
    'Morceau de poulet (cuisse, poitrine, etc.) pour 4 personnes',
    'Quartiers d\'orange',
    'Oignons verts'
  ],
  instructions: [
    'Préchauffer le four à 350°F.',
    'Mélanger tous les ingrédients de la sauce à l\'orange et aux arachides dans une casserole et laisser mijoter pendant quelques minutes, jusqu\'à ce que la sauce soit bien épaisse. Mettre de côté et laisser refroidir.',
    'Dans un autre bol, combiner les ingrédients du mélange d\'épices. Ajouter le poulet et bien brasser pour mélanger le tout.',
    'Dans une poêle, faire cuire le poulet pendant environ 5 minutes de chaque côté jusqu\'à ce qu\'il devienne blanc à l\'extérieur.',
    'Transférer les morceaux de poulet dans un moule à gâteau et verser la sauce dessus.',
    'Déposer les quartiers d\'orange sur le poulet en pressant un peu le jus.',
    'Cuire au four pendant 15 minutes ou jusqu\'à ce que la température interne atteigne 74°C / 165°F.',
    'Servir chaud, garni d\'oignons verts.'
  ],
  tags: ['orange', 'arachides', 'cuisson au four'],
  slug: 'poulet-a-l-orange-et-aux-arachides'
};
