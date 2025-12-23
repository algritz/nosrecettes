import { Recipe } from '@/types/recipe';

export const filetDePorcAuBaconEtAuCheddar: Recipe = {
  id: 'filet-de-porc-au-bacon-et-au-cheddar',
  title: 'Filet de porc au bacon et au cheddar',
  description: 'Un délicieux filet de porc farci au bacon et au cheddar, cuit au four avec des oignons et une sauce crémeuse au vin blanc.',
  categories: ['Vollaille', 'Plats principaux'],
  prepTime: 15,
  cookTime: 30,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 filet de porc',
    'cheddar coupé en lamelles',
    '8 tranches de bacon',
    '2 oignon émincé',
    '2 tasse de vin blanc sec',
    '1 tasse de crème 15% de cuisson',
    'thym',
    'poivre',
    'beurre',
    'huile'
  ],
  instructions: [
    'Couper le filet de porc en deux, dans le sens de l\'épaisseur.',
    'Poser sur la première moitié deux tranches de bacon, côte à côte.',
    'Recouvrir de tranches de cheddar.',
    'Poser dessus les deux autres tranches de bacon et repositionner la deuxième moitié du filet de porc.',
    'Ficeler le filet.',
    'Mettre dans un plat allant au four, ajouter du beurre, de l\'huile et l\'oignon émincé.',
    'Saupoudrer de thym et de poivre.',
    'Cuire à 350°F (180°C) pendant 15 minutes.',
    'Quand les oignons commencent à dorer, mouiller avec le vin blanc.',
    'Retourner le filet et cuire encore 15 minutes (jusqu\'à température interne de 142°F / 60°C).',
    'Couper en tranches.',
    'Ajouter la crème dans le plat de cuisson.',
    'Passer au tamis la sauce en écrasant les oignons.',
    'Napper sur les filets.'
  ],
  tags: ['bacon', 'cheddar', 'four'],
  slug: 'filet-de-porc-au-bacon-et-au-cheddar'
};
