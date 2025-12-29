import { Recipe } from '@/types/recipe';

export const ossoBucoAvecPolenta: Recipe = {
  id: 'osso-buco-avec-polenta',
  title: 'Osso buco avec polenta',
  description: 'Un plat mijoté d\'osso buco servi avec de la polenta crémeuse, parfait pour un repas réconfortant.',
  categories: ['Plats principaux'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 120, max: 120 },
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    '1/4 tasse farine',
    '4 osso buco (veau ou porc)',
    '1/4 tasse huile d\'olive',
    '1 onion, haché finement',
    '1 grosse carotte en cube',
    '2 celeri en cube',
    '2 gousses d\'ail',
    '1/2 tasse de vin blanc',
    '1 grosse boîte de tomates san marzo',
    '1/2 tasse de fond de veau',
    '3 branches de thym',
    '2 feuilles de laurier',
    'Polenta instantanée'
  ],
  instructions: [
    'Mélanger la farine avec un peu de sel et de poivre.',
    'Recouvrir les osso buco de farine.',
    'Faire sauter la viande de chaque côté.',
    'Réserver la viande.',
    'Faire dorer les oignons dans le même chaudron.',
    'Ajouter l\'ail, faire rôtir sans le brûler.',
    'Ajouter le vin blanc.',
    'Ajouter le fond de veau.',
    'Ajouter le reste des ingrédients.',
    'Remettre la viande, couvrir et mettre au four à 350°F pendant 2 heures, retourner à mi-cuisson.'
  ],
  tags: ['mijoté', 'vin blanc', 'tomates'],
  slug: 'osso-buco-avec-polenta'
};
