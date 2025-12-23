import { Recipe } from '@/types/recipe';

export const painNaamSurPlancha: Recipe = {
  id: 'pain-naam-sur-plancha',
  title: 'Pain Naam sur plancha',
  description: 'Pain Naam facile à faire et excellent',
  categories: ['Pain'],
  prepTime: 20,
  cookTime: 6,
  servings: 6,
  difficulty: 'Facile',
  ingredients: [
    '3 tasses de farine',
    '1 c. à thé de sel',
    '1 sachet de levure instantanée ou une c. à soupe',
    '1 c. à thé de sucre',
    '1 tasse de lait, tiède',
    '1/4 tasse de yogourt nature',
    'Beurre fondu'
  ],
  instructions: [
    'Dans un grand bol, mélanger la farine, le sel et la levure. Réserver.',
    'Ajouter le sucre au lait tiède et mélanger pour bien dissoudre. Réserver.',
    'Creuser un puits au centre des ingrédients secs et y verser le mélange de lait. Mélanger à la fourchette, puis avec les mains.',
    'Une fois la pâte homogène, ajouter le yogourt et mélanger jusqu\'à ce que la pâte se détache du bol.',
    'Sur un plan de travail enfariné, pétrir la pâte pendant 5 minutes, jusqu\'à ce qu\'elle soit lisse et élastique.',
    'Déposer dans un bol beurré et retourner pour bien enduire de beurre.',
    'Couvrir d\'un linge humide et laisser lever la pâte de 45 minutes à 1 heure, dans un endroit tiède, jusqu\'à ce que la pâte double de volume.',
    'Préchauffer la plancha.',
    'Dégonfler la pâte en enfonçant un poing au centre.',
    'Partager en 6 morceaux.',
    'Façonner chaque morceau et lui donner la forme d\'une poire d\'environ 20 cm de long, en étirant bien la pâte.',
    'Déposer les pains sur la plancha très chaude.',
    'Cuire de 5 à 6 minutes ou jusqu\'à ce qu\'ils soient bien dorés.',
    'Servir sans attendre.'
  ],
  tags: ['plancha', 'pâte levée', 'cuisine facile'],
  marinatingTime: 60,
  notes: 'Pour des Naam plus gros, diviser la pâte en 4 plutôt qu\'en 6',
  slug: 'pain-naam-sur-plancha'
};
