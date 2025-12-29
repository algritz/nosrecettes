import { Recipe } from '@/types/recipe';

export const brochettesDeSteak: Recipe = {
  id: 'brochettes-de-steak',
  title: 'Brochettes de steak',
  description: 'Brochettes de steak marinées et grillées, servies avec une sauce satay aux arachides.',
  categories: ['Viande', 'Plats principaux'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 5, max: 5 },
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    'bifteck de flanc ou bavette de 1 lb',
    '1/4 tasse sauce de soja',
    '2 c. à soupe d’huile de sésame (si pure, mettre 2 c. à thé)',
    '1 échalotte française, coupée en dés',
    '2 gousses d’ail, hachées',
    '2 c. à soupe de cassonade',
    '1 c. à soupe Sriracha',
    '1 c. à thé de gingembre frais râpé'
  ],
  instructions: [
    'Si vous utilisez des brochettes en bambou, les tremper dans l’eau pendant que vous faites mariner le boeuf.',
    'Coupez le bifteck en lanières et mettre dans un sac ziploc.',
    'Dans un bol, mélanger la sauce de soja, huile de sésame, échalotte, ail, cassonade, Sriracha et gingembre.',
    'Verser la marinade dans le sac avec le steak et fermer en vidant le plus d’air possible.',
    'Frotter le sac pour disperser la marinade uniformément.',
    'Réfrigérer pendant 2 à 4 heures.',
    'Embrocher la viande et faire griller à feu vif (pour les moyennes, griller à 320°C / 600°F pendant deux minutes de chaque côté).',
    'Servir avec une sauce au arachide style sauce satay.'
  ],
  tags: ['grill', 'marinade sèche', 'satay'],
  slug: 'brochettes-de-steak'
};
