import { Recipe } from '@/types/recipe';

export const nachosAuCanard: Recipe = {
  id: 'nachos-au-canard',
  title: 'Nachos au canard',
  description: 'Pour ceux qui ont envie d\'un Nachos différent. Nachos au canard',
  categories: ['Plats principaux'],
  prepTime: 20,
  cookTime: 10,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 paquet de tranches de canard pour fondue chinoise',
    '1 c. à soupe de gras de canard de Canards du Lac Brome',
    'Un sac de Tostitos',
    '25 tomates cerises',
    '1 poivron vert',
    '1/2 oignon rouge',
    '1 tasse de maïs en grains',
    '3 c. à soupe d’huile d’olive',
    '1 c. à soupe de jus de lime',
    '1 c. à soupe de miel',
    '1 avocat',
    '2 tasse de fromage fiesta mexicaine de Armstrong',
    'Crème sure',
    '1/4 de tasse de feuilles de coriandre',
    '1 petit jalapeño coupé en rondelles',
    'Sel et poivre au goût'
  ],
  instructions: [
    'Couper les tomates cerises, le poivron et l’oignon rouge en dés.',
    'Dans un bol, mélanger les tomates cerises avec le poivron, l’oignon rouge, le maïs, l’huile d’olive, le jus de lime et le miel.',
    'Saler et poivrer.',
    'Couper l’avocat en dés, puis l’ajouter dans le bol en remuant délicatement.',
    'Dans une grande poêle, faire fondre le gras de canard à feu moyen-élevé.',
    'Cuire les tranches de canard de 1 à 2 minutes de chaque côté en. Saler et poivrer.',
    'Une fois les tranches de canard cuites, les couper en petits morceaux.',
    'Répartir les croustilles sur une grande plaque de cuisson.',
    'Garnir de tranches de canard, de salsa et de fromages râpés.',
    'Faire griller au four à broil de 4 à 5 minutes, jusqu’à ce que le fromage soit doré.',
    'Au moment de servir, garnir de coriandre et de jalapeño.',
    'Servir avec la crème sure.'
  ],
  tags: ['canard', 'nachos', 'fromage'],
  slug: 'nachos-au-canard'
};
