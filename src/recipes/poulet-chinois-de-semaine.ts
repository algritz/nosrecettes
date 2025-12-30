import { Recipe } from '@/types/recipe';

export const pouletChinoisDeSemaine: Recipe = {
  id: 'poulet-chinois-de-semaine',
  title: 'Poulet chinois de semaine',
  description: '',
  categories: ['Vollaille', 'Plats principaux'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 20, max: 20 },
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    '2-3 poitrine de poulet, grosse, désossée',
    '1/3 tasse (85 ml) farine tout-usage',
    '1/2 c. à thé de cinq épices chinois',
    '1 tasse (250 ml) eau',
    '1/4 tasse (65 ml) sauce soya',
    '2 c. à soupe (30 ml) de miel',
    '1 c. à soupe de sauce hoisin',
    '1/2 c. à thé de Sambal Oelek',
    'Huile végétale, pour la cuisson',
    'Ail haché finement',
    'Oignon haché'
  ],
  instructions: [
    'Couper le poulet en lanières.',
    'Placer la farine dans un bol et le cinq épices chinois et bien mélanger.',
    'Enfariner le poulet en le trempant dans la farine.',
    'Chauffer l\'huile à feu moyen/vif dans un poêlon et faire dorer le poulet.',
    'Ajouter l\'eau, la sauce soya, le miel, la sauce hoisin, le sambal oelek, l\'ail et l\'oignon.',
    'Couvrir et laisser mijoter de 15 à 20 minutes ou jusqu\'à ce que le poulet soit cuit.'
  ],
  tags: ['chinois', 'sauce soja', 'mijoter'],
  accompaniment: 'Servir avec du riz',
  source: 'David Cloutier',
  notes: 'Vous pouvez aussi mettre du piment et d\'autres légumes.',
  slug: 'poulet-chinois-de-semaine'
};
