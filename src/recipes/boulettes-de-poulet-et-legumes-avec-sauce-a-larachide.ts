import { Recipe } from '@/types/recipe';

export const boulettesDePouletEtLegumesAvecSauceALarachide: Recipe = {
  id: 'boulettes-de-poulet-et-legumes-avec-sauce-a-l-arachide',
  title: 'Boulettes de poulet et légumes avec sauce à l’arachide',
  description: 'Recette de boulettes de poulet et légumes servies avec une sauce à l’arachide crémeuse, mijotée avec des légumes et du lait de coco.',
  categories: ['Plats principaux', 'Vollaille'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 20, max: 20 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 lb de poulet haché (450g)',
    '2/3 de tasse de chapelure panko',
    '1/4 de tasse de persil frais haché',
    '30 ml de beurre d’arachide crémeux Natur',
    '2 c. à thé d’ail haché',
    '3 oignons verts hachés',
    '1 oeuf',
    '15 ml d’huile de canola',
    '1/3 de tasse d’échalotes françaises hachées',
    '1 c. à soupe de gingembre râpé',
    '12 c. à thé d’ail haché',
    '1 poivron rouge émincé',
    '2 carottes coupées en demi-rondelles',
    '1 boîte de lait de coco (398 ml)',
    '2/3 de tasse de beurre d’arachide crémeux',
    '1/4 de tasse de bouillon de poulet',
    '2 c. à soupe de pâte de tomates',
    '2 oignons verts émincés'
  ],
  instructions: [
    'Dans un bol, mélanger les ingrédients des boulettes. Façonner 24 boulettes en utilisant 2 c. à soupe de préparation pour chacune d’elles.',
    'Dans une grande poêle, chauffer l’huile à feu moyen. Faire dorer les boulettes de 2 à 3 minutes.',
    'Retirer les boulettes dans une assiette.',
    'Ajouter les échalotes, le gingembre et l’ail. Poursuivre la cuisson 1 minute.',
    'Ajouter le poivron, les carottes, le lait de coco, le beurre d’arachide, le bouillon de poulet et la pâte de tomates. Remuer.',
    'Porter à ébullition et remettre les boulettes puis laisser mijoter de 10 à 12 minutes, jusqu’à ce que l’intérieur des boulettes ait perdu sa teinte rosée.',
    'Au moment de servir, parsemer d’oignons verts.'
  ],
  tags: ['arachide', 'mijoteuse', 'lait de coco'],
  source: 'David Cloutier',
  slug: 'boulettes-de-poulet-et-legumes-avec-sauce-a-larachide'
};
