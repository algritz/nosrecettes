import { Recipe } from '@/types/recipe';

export const coteletteDePorcPiquanteAuMielEtALail: Recipe = {
  id: 'cotelette-de-porc-piquante-au-miel-et-a-l-ail',
  title: 'Côtelette de porc piquante au miel et à l\'ail',
  description: 'Une recette de côtelettes de porc marinées dans une sauce savoureuse, puis grillées et servies avec une sauce BBQ piquante au miel et à l\'ail.',
  categories: ['Porc', 'Barbecue'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 15, max: 15 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Protéines',
      items: [
        '5-6 côtelettes de porc épaisses'
      ]
    },
    {
      title: 'Marinade',
      items: [
        '3 c à soupe de sauce soya',
        '1/2 boite (5 oz) de consommé de bœuf',
        '2 gousses d\'ail hachées',
        '2 c à soupe de sauce Worcestershire',
        '2 c à soupe de cassonade',
        '2 échalotes vertes tranchées finement',
        'quelques gouttes de sauce forte au goût'
      ]
    },
    {
      title: 'Sauce BBQ piquante au miel et à l\'ail',
      items: [
        '1/2 tasse de sauce BBQ du commerce',
        '1/2 tasse de sauce chili',
        '1/2 boite (5 oz) de consommé de bœuf',
        '2-3 gousses d\'ail hachées',
        '2 c à soupe de miel',
        'quelques gouttes de sauce forte'
      ]
    }
  ],
  instructions: [
    'Déposer les côtelettes de porc dans un sac Ziploc.',
    'Ajouter les ingrédients de la marinade.',
    'Laisser mariner de 4 à 6 heures.',
    'Pendant ce temps, faire la sauce : mettre tous les ingrédients dans une casserole, bouillir 10 minutes, puis réserver.',
    'Enlever les côtelettes de la marinade (jeter celle-ci).',
    'Cuire sur un BBQ chaud tout en badigeonnant de sauce BBQ.',
    'Pour le service, remettre le reste de la sauce à bouillir 5 minutes et servir avec les côtelettes.'
  ],
  tags: ['marinade sèche', 'grill', 'miel'],
  source: 'David Cloutier',
  slug: 'cotelette-de-porc-piquante-au-miel-et-a-lail'
};
