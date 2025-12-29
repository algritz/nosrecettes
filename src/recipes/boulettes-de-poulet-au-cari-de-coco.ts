import { Recipe } from '@/types/recipe'

export const boulettesDePouletAuCariDeCoco: Recipe = {
  id: 'boulettes-de-poulet-au-cari-de-coco',
  title: 'Boulettes de poulet au cari de coco',
  description:
    'Boulettes de poulet mijotées dans une sauce au cari rouge et lait de coco, relevées de lime fraîche.',
  categories: ['Plats principaux', 'Végétarien'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 20, max: 20 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '500 g de poulet haché',
    '1 œuf',
    '2 c. à soupe de chapelure',
    '1 boîte de lait de coco',
    '2 c. à soupe de pâte de curry rouge',
    "1 gousse d'ail hachée",
    '1 c. à soupe de jus de lime',
    'Sel, poivre, coriandre fraîche',
  ],
  instructions: [
    "Mélanger le poulet, l'œuf, la chapelure, sel et poivre.",
    'Former des boulettes.',
    'Les faire dorer à la poêle.',
    "Ajouter la pâte de curry, le lait de coco, l'ail et le jus de lime.",
    'Laisser mijoter 15 min.',
    'Servir avec du riz et de la coriandre.',
  ],
  tags: ['curry', 'lait de coco', 'boulettes'],
  slug: 'boulettes-de-poulet-au-cari-de-coco',
}
