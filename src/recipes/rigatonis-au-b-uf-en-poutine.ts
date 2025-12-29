import { Recipe } from '@/types/recipe';

export const rigatonisAuBUfEnPoutine: Recipe = {
  id: 'rigatonis-au-b-uf-en-poutine',
  title: 'Rigatonis au bœuf en poutine',
  description: 'Un plat réconfortant combinant pâtes, bœuf, sauce à poutine et fromage en grains, gratiné au four.',
  categories: ['Plats principaux'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 25, max: 25 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '3 tasses de rigatonis non cuit',
    '450 g de tranches de boeuf à fondue coupé en deux ou trois, tout dépendant de la grosseur',
    '1 oignon coupé en dés',
    '1 contenant de champignons blancs émincés',
    '500 ml de sauce à poutine',
    '1/2 tasse de crème à cuisson 35%',
    '450 g de fromage en grains',
    'Oignon vert au goût'
  ],
  instructions: [
    'Régler le four à la position broil.',
    'Dans une casserole d’eau bouillante salée, cuire les pâtes tel qu\'indiqué sur l\'emballage.',
    'Dans une autre casserole, chauffer un peu d’huile d’olive à feu moyen.',
    'Cuire le boeuf à fondue de 3 à 4 minutes.',
    'Ajouter l’oignon et les champignons. Poursuivre la cuisson de 3 à 4 minutes, en remuant de temps en temps.',
    'Faire chauffer la sauce à poutine.',
    'Ajouter la sauce à poutine et la crème dans la casserole de viande à fondue. Porter à ébullition.',
    'Remettre les pâtes dans la casserole, bien brasser. Chauffer 1 minute.',
    'Transvider le mélange dans un plat de cuisson et garnir de fromage en grains.',
    'Faire gratiner au four de 4 à 5 minutes.',
    'Garnir d\'oignon vert et servir.'
  ],
  tags: ['poutine', 'fromage en grains', 'gratiner'],
  slug: 'rigatonis-au-b-uf-en-poutine'
};
