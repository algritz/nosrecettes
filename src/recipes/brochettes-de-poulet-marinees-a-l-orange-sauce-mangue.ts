import { Recipe } from '@/types/recipe'

export const brochettesDePouletMarineesALOrangeSauceMangue: Recipe = {
  id: 'brochettes-de-poulet-marinees-a-l-orange-sauce-mangue',
  title: 'Brochettes de poulet marinées à l’orange, sauce mangue',
  description:
    'Une recette de brochettes de poulet marinées à l’orange, accompagnées d’une sauce à la mangue et servies avec du riz basmati.',
  categories: ['Vollaille', 'Plats principaux'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 12, max: 12 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '4 blancs de poulet',
    '1 mangue',
    'le jus de 2 citrons verts',
    '1 gousse d’ail pressée',
    '3 cuil. à soupe d’huile',
    '20 cL de jus d’orange',
    '3 cuil. à soupe de lait de coco',
    'sel et poivre',
  ],
  instructions: [
    'Peler la mangue, prélever la chair et la mixer avec le lait de coco et la moitié du jus de citron. Réserver au frais.',
    'Tailler les blancs de poulet en lanières et les faire mariner 30 minutes dans le jus d’orange et le reste du jus de citron mêlé à l’ail et 2 cuillerées d’huile.',
    'Egoutter les lanières de poulet, les saler, les poivrer et les enfiler en accordéon sur des piques en bois.',
    'Les faire griller 10-12 minutes au barbecue ou sous le grill du four en les retournant.',
    'Les servir aussitôt accompagnées de riz basmati et de la sauce à la mangue servie dans un bol.',
  ],
  tags: ['marinade sèche', 'barbecue', 'fruit'],
  slug: 'brochettes-de-poulet-marinees-a-l-orange-sauce-mangue',
}
