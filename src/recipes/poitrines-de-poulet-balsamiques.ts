import { Recipe } from '@/types/recipe';

export const poitrinesDePouletBalsamiques: Recipe = {
  id: '1764522185475',
  title: 'Poitrines de poulet balsamiques',
  description: 'Poitrines de poulet marinées au balsamique, grillées au BBQ et servies avec sauce réduite.',
  categories: ['Vollaille', 'Barbecue', 'Plats principaux'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 20, max: 20 },
  marinatingTime: { min: 360, max: 360 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '4 poitrines de poulet',
    '1/3 tasse de vinaigre balsamique',
    '1/3 tasse de sauce soya',
    '2 gousses d\'ail, émincées',
    '3 c. à soupe de moutarde de Dijon',
    '1 c. à soupe de jus de lime',
    '1/3 tasse de cassonade',
    '1/3 tasse d\'huile d\'olive',
    '1 c. à soupe de thym frais'
  ],
  instructions: [
    'Dans un plat qui se referme, mélanger tous les ingrédients sauf les poitrines.',
    'Ajouter les poitrines, bien enrober et mariner au réfrigérateur au moins 6 heures.',
    'Cuire sur le barbecue jusqu’à cuisson complète (environ 20 minutes).',
    'Verser la marinade dans une casserole, porter à ébullition et réduire pour obtenir une sauce.',
    'Napper les poitrines de la sauce au moment de servir.'
  ],
  tags: ['balsamique', 'Dijon', 'marinade'],
  source: 'David Cloutier',
  slug: 'poitrines-de-poulet-balsamiques'
};
