import { Recipe } from '@/types/recipe'

export const pouletALaLibanaise: Recipe = {
  id: 'poulet-a-la-libanaise',
  title: 'Poulet à la libanaise',
  description:
    'Recette de poulet mariné et grillé à la libanaise, avec saumure et marinade aromatique.',
  categories: ['Vollaille', 'Barbecue'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 30, max: 30 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    "poulet d'environ 1,5 kg (3 lb) ou 4 poitrines de poulet",
    "125 ml d'huile d'olive",
    '30 ml de cassonade',
    '30 ml de cumin moulu',
    "6 gousses d'ail hachées",
    '10 ml de coriandre moulue',
    '10 ml de paprika',
    'Sel et poivre fraîchement moulu',
    '85 ml de sel fin de table',
    '85 ml de sucre fin granulé',
    "1L d'eau froide",
  ],
  instructions: [
    'Mettre le poulet dans la saumure.',
    "Sortir le poulet de la saumure, rincer à l'eau et l'égoutter sur une grille ou un papier essuie-tout.",
    "Préparer la marinade libanaise en mélangeant l'huile d'olive, la cassonade, le cumin, l'ail, la coriandre et le paprika.",
    'Enrober les morceaux de poulet de la marinade libanaise.',
    'Préchauffer le barbecue à feu élevé. Brosser et huiler la grille.',
    'Commencer la cuisson à feu élevé. Marquer sur le gril les morceaux de poulet de 2 à 3 min de chaque côté.',
    "Baisser le feu à médium et continuer à griller jusqu'à cuisson complète tout en retournant les morceaux, de 20 à 30 min pour les hauts de cuisse et les pilons.",
    'Pour les poitrines, il est préférable de les couvrir au moment où elles sont transférées de la zone à feu moyen.',
  ],
  tags: ['barbecue', 'marinade libanaise', 'grill'],
  slug: 'poulet-a-la-libanaise',
}
