import { Recipe } from '@/types/recipe';

export const filetDePorcMarinerASec: Recipe = {
  id: '1766691691698',
  title: 'Filet de porc mariner à sec',
  description: '',
  categories: ['Vollaille', 'Plats principaux'],
  prepTime: 20,
  cookTime: 30,
  marinatingTime: 30,
  servings: 3,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Protéines',
      items: [
        '1 filet de porc'
      ]
    },
    {
      title: 'Marinade sèche',
      items: [
        '15 ml de sel',
        '30 ml de sucre',
        '30 ml de paprika',
        'Poivre au goût',
        '10 ml de poudre d\'ail',
        '10 ml de poudre d\'oignon',
        '5 ml de poudre de céleri',
        '5 ml de poivre de cayenne'
      ]
    },
    {
      title: 'Sauce rouge classique',
      items: [
        '250 ml (1 tasse) de ketchup',
        '30 ml de vinaigre',
        '15 ml de sauce Worcestershire',
        '15 ml de moutarde en poudre',
        'Poivre au goût',
        '5 ml de la marinade sèche (voir plus haut)',
        '125 ml d\'eau froide'
      ]
    }
  ],
  instructions: [
    'Mélanger les ingrédients de la marinade sèche et y faire mariner le porc minimum 30 minutes.',
    'Faire saisir dans une poêle avec un peu d\'huile.',
    'Enfourner à 350°F de 20 à 30 minutes à découvert.',
    'Sortir et laisser reposer 5 à 10 minutes recouvert d\'un papier d\'aluminium.',
    'Trancher et servir avec la sauce.',
    'Dans un chaudron, faire chauffer tous les ingrédients de la sauce à feu doux pendant 10 minutes.',
    'Servir avec le filet de porc.'
  ],
  tags: ['marinade sèche', 'grill', 'sauce'],
  source: 'David Cloutier',
  slug: 'filet-de-porc-mariner-a-sec'
};
