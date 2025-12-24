import { Recipe } from '@/types/recipe';

export const tartareDeSaumonCocoCari: Recipe = {
  id: 'tartare-de-saumon-coco-cari',
  title: 'Tartare de saumon coco-cari',
  description: 'Un tartare frais et parfumé à base de saumon, noix de coco et épices de cari, servi avec des Rice Krispies pour une texture croquante.',
  categories: ['Entrées'],
  prepTime: 20,
  cookTime: 0,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '500g de saumon coupés en petits cubes',
    '1/4 de noix de coco de bonne qualité en flocons (prendre de la noix de coco fraîche et la râper, c\'est meilleur)',
    '1 c. à soupe de mayonnaise',
    'Le zeste d\'une lime',
    '1 c. à soupe d\'huile d\'olive',
    '1 c. à thé de poudre de cari de bonne qualité',
    'Sel et poivre',
    '1 c. à soupe de jus de lime',
    '1 tasse de Rice Krispies'
  ],
  instructions: [
    'Dans un grand bol mélanger le saumon, la noix de coco, la mayonnaise, le zeste de la lime, l\'huile d\'olive et le cari.',
    'Salé et poivrer au goût.',
    'Au dernier moment, juste avant de servir, ajouter le jus de lime et les Rice Krispies.',
    'Servir rapidement.'
  ],
  tags: ['coco', 'cari', 'cru'],
  slug: 'tartare-de-saumon-coco-cari'
};
