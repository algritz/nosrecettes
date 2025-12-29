import { Recipe } from '@/types/recipe';

export const marinadeThaieAuLaitDeCoco: Recipe = {
  id: '1761493043147',
  title: 'Marinade thaïe au lait de coco',
  description: 'Marinade express au lait de coco, beurre d\'arachide, sauce soya, lime et sambal oelek.',
  categories: ['Marinade'],
  prepTime: { min: 5, max: 5 },
  cookTime: { min: 0, max: 0 },
  marinatingTime: { min: 240, max: 240 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '250 ml (1 tasse) de lait de coco',
    '125 ml (1/2 tasse) de beurre d\'arachide',
    '30 ml (2 c. à soupe) de sauce soya',
    'Le zeste et le jus d\'une lime',
    '5 ml (1 c. à thé) de sambal oelek'
  ],
  instructions: [
    'Dans un bol, mélanger tous les ingrédients à l\'aide d\'un fouet.',
    'Ajouter la viande et laisser mariner.'
  ],
  tags: ['lait de coco', 'sambal oelek', 'lime'],
  source: 'David Cloutier',
  slug: 'marinade-thaie-au-lait-de-coco'
};
