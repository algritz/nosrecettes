import { Recipe } from '@/types/recipe';

export const poutineAuRotiDePaletteDeBoeuf: Recipe = {
  id: 'poutine-au-roti-de-palette-de-boeuf',
  title: 'Poutine au rôti de palette de boeuf',
  description: 'Une surprenante poutine qui réconforte',
  categories: ['Plats principaux', 'Végétarien'],
  prepTime: 25,
  cookTime: 600,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '½ tasse de sauce barbecue',
    '¼ tasse de vin rouge',
    '¼ tasse de sauce à bifteck',
    '¼ tasse de sauce Worcestershire',
    '1 oignon, coupé en quartiers',
    '3 gousses d\'ail, émincées',
    '3 lb de rôti de palette de bœuf avec bien du gras',
    'Une enveloppe de sauce à poutine',
    'Frite maison ou du commerce',
    '1 tasse de fromage en grains',
    '2 d\'oignons verts tranchés'
  ],
  instructions: [
    'Mélanger les six premiers ingrédients dans le récipient de la mijoteuse.',
    'Ajouter la pièce de bœuf.',
    'Régler la mijoteuse à faible intensité et faire cuire de 8 à 10 heures (ou 4 heures à haute intensité), ou jusqu\'à ce que la viande se défasse facilement à la fourchette.',
    'Une fois le rôti prêt, faire suivre vos pommes de terre maison ou du commerce.',
    'Faire la sauce à poutine, mais mettre la moitié de l\'eau indiquée sur l\'enveloppe.',
    'Ajouter le liquide dans la mijoteuse à la sauce.',
    'Si vous n\'avez pas assez pour avoir la quantité de liquide indiquée sur l\'enveloppe, compléter la différence avec de l\'eau.',
    'Retirer le bœuf de la mijoteuse et effilocher au milieu de deux fourchettes.',
    'Déposer le bœuf sur les frites, garnir de fromage en grains, napper de sauce bien chaude et garnir d\'oignons verts.'
  ],
  tags: ['mijoteuse', 'bœuf', 'poutine'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/poutine-au-roti-de-palette-de-boeuf',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/poutine-au-roti-de-palette-de-boeuf',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/poutine-au-roti-de-palette-de-boeuf'
    }
  ],
  source: 'David Cloutier',
  slug: 'poutine-au-roti-de-palette-de-boeuf'
};
