import { Recipe } from '@/types/recipe'

export const tartareDeThonCocoAvecSaladeDeMangueEtPapaye: Recipe = {
  id: 'tartare-de-thon-coco-avec-salade-de-mangue-et-papaye',
  title: 'Tartare de thon coco avec salade de mangue et papaye',
  description:
    "Un tartare de thon rouge accompagné d'une salade fraîche de mangue et papaye, relevé de lait de coco, coriandre et piments chili.",
  categories: ['Entrées'],
  prepTime: { min: 30, max: 30 },
  cookTime: { min: 0, max: 0 },
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Tartare',
      items: [
        '500 g de thon rouge, en petits dés',
        "1 petite gousse d'ail, hachée",
        'Le jus de 1 lime',
        'Sel',
        "6 blancs d'oignons verts, émincés",
        '15 ml de sauce soya',
        '60 ml de lait de coco',
        '15 ml de coriandre, hachée',
        '5 ml de piments chili, haché',
      ],
    },
    {
      title: 'Salade',
      items: [
        '1/2 papaye, en julienne',
        '1 mangue, en julienne',
        '1 tomate, en julienne',
        '1/2 concombre, en julienne',
        "Le jus d'une lime",
        "30 ml d'huile d'olive",
        '20 ml de lait de coco',
        '15 ml de basilic thaï, haché',
        '15 ml de coriandre, hachée',
        'Sel et poivre',
      ],
    },
  ],
  instructions: [
    'Salade: Dans un bol, mélanger tous les ingrédients pour la salade de papaye et de mangue.',
    "Tartare: Dans un autre bol, mélanger le thon, l'ail et le jus de lime. Assaisonner de sel et brasser délicatement. Ajouter le reste des ingrédients.",
    'Servir le tartare, accompagné de salade de mangue et de papaye.',
  ],
  tags: ['fraîcheur', 'coco', 'mangue'],
  slug: 'tartare-de-thon-coco-avec-salade-de-mangue-et-papaye',
}
