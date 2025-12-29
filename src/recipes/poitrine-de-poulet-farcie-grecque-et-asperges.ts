import { Recipe } from '@/types/recipe';

export const poitrineDePouletFarcieGrecqueEtAsperges: Recipe = {
  id: 'poitrine-de-poulet-farcie-grecque-et-asperges',
  title: 'Poitrine de poulet farcie grecque et asperges',
  description: '',
  categories: ['Vollaille', 'Plats principaux'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 25, max: 25 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '4 poitrines de poulet désossées et sans peau',
    '8 asperges',
    '1/2 tasse de tomates séchées, égouttées et hachées',
    '1/2 tasse de mozzarella fraîche, coupée en petits cubes (ou fromage feta)',
    '2 cuillères à soupe d\'huile d\'olive',
    '2 cuillères à soupe de jus de citron',
    '2 gousses d\'ail, émincées',
    '1 cuillère à soupe de persil frais haché',
    'Piment d’Espelette au goût (facultatif)',
    'Sel et poivre, au goût'
  ],
  instructions: [
    'Préchauffez le four à 400°F.',
    'À l\'aide d\'un couteau bien aiguisé, faites une incision au centre de chaque poitrine de poulet pour former une poche sans la couper complètement.',
    'Insérez 2 asperges, une cuillère à soupe de tomates séchées et quelques cubes de mozzarella dans chaque poche de poulet.',
    'Refermez les poches avec des cure-dents pour maintenir la farce à l\'intérieur.',
    'Dans un bol, mélangez l\'huile d\'olive, le jus de citron, l\'ail, le persil, le piment d\'espelette, le sel et le poivre.',
    'Badigeonnez les poitrines de poulet farcies avec ce mélange.',
    'Placez les poitrines de poulet dans un plat allant au four et faites-les cuire pendant environ 25 minutes, ou jusqu\'à ce que le poulet soit bien cuit et que la farce soit fondante.',
    'Retirez les cure-dents avant de servir.'
  ],
  tags: ['farce grecque', 'asperges', 'cuisson au four'],
  slug: 'poitrine-de-poulet-farcie-grecque-et-asperges'
};
