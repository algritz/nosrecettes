import { Recipe } from '@/types/recipe';

export const tartareDeSaumonAuxFruitsExotiques: Recipe = {
  id: 'tartare-de-saumon-aux-fruits-exotiques',
  title: 'Tartare de saumon aux fruits exotiques',
  description: 'Un petit tartare d\'été',
  categories: ['Entrées'],
  prepTime: 15,
  cookTime: 0,
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    '300 g de saumon frais',
    '1/2 mangue',
    '1 avocat',
    '1/2 fruit de la passion',
    '1 poignée de grenade',
    '1/2 lime',
    '1 c à soupe d\'huile d\'olive',
    'De l\'aneth'
  ],
  instructions: [
    'Couper la demie mangue en brunoise.',
    'Faire de même avec l\'avocat.',
    'Placer la mangue et l\'avocat dans un grand saladier.',
    'Ajouter le demi fruit de la passion, la grenade, le jus de lime et l\'huile d\'olive.',
    'Bien mélanger.',
    'Couper le saumon en tout petits morceaux et verser avec les fruits.',
    'Enfin, ajouter un peu d\'aneth ciselée.',
    'Servir à l\'aide d\'un emporte-pièce.'
  ],
  tags: ['été', 'frais', 'cru'],
  slug: 'tartare-de-saumon-aux-fruits-exotiques'
};
