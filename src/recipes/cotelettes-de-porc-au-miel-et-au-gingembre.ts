import { Recipe } from '@/types/recipe';

export const cotelettesDePorcAuMielEtAuGingembre: Recipe = {
  id: 'cotelettes-de-porc-au-miel-et-au-gingembre',
  title: 'Côtelettes de porc au miel et au gingembre',
  description: '',
  categories: ['Vollaille', 'Plats principaux'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 40, max: 40 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 c. à soupe d\'huile végétale',
    '6 côtelettes de porc désossées',
    '3 c. à soupe de miel',
    '1/2 tasse d\'eau',
    '1/4 tasse de sauce soya',
    '1 petit oignon émincé',
    '1/4 c. à thé de gingembre en poudre',
    '1 pincée de poivre noir du moulin'
  ],
  instructions: [
    'Préchauffer le four à 325°F (160°C).',
    'Chauffer l’huile dans une poêle à feu moyen et faire griller le porc pendant 5 minutes de chaque côté.',
    'Transférer dans un plat de cuisson.',
    'Dans un bol, mélanger le miel, la sauce soya, l’oignon, le gingembre et le poivre.',
    'Verser dans le plat sur la viande.',
    'Faire cuire pendant une heure. La température interne de la viande doit être de 160°F (70°C).'
  ],
  tags: ['miel', 'gingembre', 'grill'],
  slug: 'cotelettes-de-porc-au-miel-et-au-gingembre'
};
