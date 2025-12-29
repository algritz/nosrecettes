import { Recipe } from '@/types/recipe';

export const brochettesDePouletPiquantes: Recipe = {
  id: 'brochettes-de-poulet-piquantes',
  title: 'Brochettes de poulet piquantes',
  description: '',
  categories: ['Vollaille', 'Plats principaux'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 20, max: 20 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '30 ml (2 c. à soupe) huile d\'olive extra vierge',
    '125 ml (1/2 tasse) yogourt nature 2%',
    '15 ml (1 c. à soupe) gingembre frais, râpé',
    '5 ml (1 c. à thé) poivre de Cayenne',
    '3 gousses d\'ail, hachées',
    '30 ml (2 c. à soupe) jus de tangerine ou d\'orange',
    '15 ml (1 c. à soupe) sauce Tamari',
    '30 ml (2 c. à soupe) miel liquide',
    '4 poitrines de poulet'
  ],
  instructions: [
    'Dans un bol en verre, mélanger tous les ingrédients de la marinade.',
    'Y déposer les poitrines de poulet et mariner 4 heures au réfrigérateur.',
    'Préchauffer le barbecue à intensité moyenne.',
    'Retirer les poitrines de poulet de la marinade et bien les égoutter.',
    'Déposer les poitrines sur la grille huilée et cuire.'
  ],
  tags: ['barbecue', 'marinade sèche', 'poulet'],
  marinatingTime: { min: 240, max: 240 },
  slug: 'brochettes-de-poulet-piquantes'
};
