import { Recipe } from '@/types/recipe';

export const tourtiereDuLacStyleFamilial: Recipe = {
  id: '1761493380912',
  title: 'Tourtière du lac (style familial)',
  description: 'Pâté en cocotte garni de viandes marinées et de pommes de terre, cuisson longue à four doux.',
  categories: ['Pâtés', 'Plats principaux'],
  prepTime: { min: 120, max: 120 },
  cookTime: { min: 480, max: 480 },
  marinatingTime: { min: 2880, max: 2880 },
  servings: 15,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Viande',
      items: [
        'Viande en cubes, au choix: porc, veau, bœuf, poulet, gibier (lièvre, orignal, perdrix, …)'
      ]
    },
    {
      title: 'Marinade',
      items: [
        'Gros sel (une grosse poignée)',
        'Poivre',
        '5 à 6 oignons',
        '2 feuilles de laurier'
      ]
    },
    {
      title: 'Autres ingrédients',
      items: [
        '1 tasse de bouillon de bœuf',
        '1 tasse de vin',
        'Persil, sel et poivre',
        'Sarriette et thym',
        'Eau égale à la viande (pour couvrir le dessus de pâte)',
        '7 à 8 patates, en petits cubes',
        '2 à 3 paquets de pâte à tarte congelée'
      ]
    }
  ],
  instructions: [
    {
      title: 'Marinade',
      steps: [
        'Faire mariner la viande 2 à 3 jours avec le gros sel, le poivre, beaucoup d’oignons et les feuilles de laurier.'
      ]
    },
    {
      title: 'Montage et cuisson',
      steps: [
        'Garnir le fond et le tour d’un chaudron/plat profond de pâte à tarte.',
        'Remplir en alternant des rangées de viande marinée et de pommes de terre en cubes.',
        'Ajouter le bouillon de bœuf, le vin, le persil, le sel, le poivre, la sarriette, le thym et suffisamment d’eau (égale au volume de viande) pour couvrir sous la pâte du dessus.',
        'Couvrir et cuire de 8 à 10 heures à environ 300°F (150°C).'
      ]
    }
  ],
  tags: ['tourtière', 'longue cuisson', 'gibier'],
  source: 'Mon papa',
  slug: 'tourtiere-du-lac-style-familial'
};
