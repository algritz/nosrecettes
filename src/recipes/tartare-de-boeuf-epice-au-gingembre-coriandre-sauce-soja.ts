import { Recipe } from '@/types/recipe';

export const tartareDeBoeufEpiceAuGingembreCoriandreSauceSoja: Recipe = {
  id: 'tartare-de-boeuf-epice-au-gingembre-coriandre-sauce-soja',
  title: 'Tartare de boeuf épicé au gingembre, coriandre & sauce soja',
  description: 'Un tartare de bœuf épicé avec des saveurs de gingembre, coriandre, et sauce soja, servi en portions pour 4 personnes.',
  categories: ['Entrées'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 0, max: 0 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 kg de bœuf',
    '6 petits oignons',
    '1 gousse d\'ail',
    '1 poignée de feuilles de persil',
    '3 c à s de fleurs de câpres',
    '1 poignée de feuilles de coriandre',
    '1 c à s de gingembre frais rapé',
    '1 c à café rase de graine de moutarde',
    '1 c à s de sauce soja',
    '2 c à s de whisky',
    'Quelques gouttes de Tabasco',
    'Sel fin',
    'Poivre Tellicheri fraîchement moulu',
    '6 jaunes d’œufs'
  ],
  instructions: [
    'Hachez la viande.',
    'Epluchez et hachez les petits oignons et la gousse d’ail.',
    'Lavez et ciselez le persil et la coriandre.',
    'Taillez les fleurs de câpres en petits morceaux.',
    'Mettez la viande hachée dans un saladier, ajoutez tous les aromates et mélangez bien avec les mains.',
    'Ajoutez les jaunes d’œufs.',
    'Mélanger et servir.'
  ],
  tags: ['gingembre', 'coriandre', 'sauce soja'],
  slug: 'tartare-de-boeuf-epice-au-gingembre-coriandre-sauce-soja'
};
