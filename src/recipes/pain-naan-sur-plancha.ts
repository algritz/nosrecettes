import { Recipe } from '@/types/recipe'

export const painNaanSurPlancha: Recipe = {
  id: 'pain-naam-sur-plancha',
  title: 'Pain Naan sur plancha',
  description: 'Pain Naam facile à faire et excellent',
  categories: ['Pain'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 5, max: 5 },
  marinatingTime: { min: 60, max: 60 },
  servings: 6,
  difficulty: 'Facile',
  ingredients: [
    '3 tasses de farine',
    '1 c. à thé de sel',
    '1 sachet de levure instantanée ou une c. à soupe',
    '1 c. à thé de sucre',
    '1 tasse de lait, tiède',
    '1/4 tasse de yogourt nature',
    'Beurre fondu',
  ],
  instructions: [
    'Dans un grand bol, mélanger la farine, le sel et la levure. Réserver.',
    'Ajouter le sucre au lait tiède et mélanger pour bien dissoudre. Réserver.',
    'Creuser un puits au centre des ingrédients secs et y verser le mélange de lait. Mélanger à la fourchette, puis avec les mains.',
    "Une fois la pâte homogène, ajouter le yogourt et mélanger jusqu'à ce que la pâte se détache du bol.",
    "Sur un plan de travail enfariné, pétrir la pâte pendant 5 minutes, jusqu'à ce qu'elle soit lisse et élastique.",
    'Déposer dans un bol beurré et retourner pour bien enduire de beurre.',
    "Couvrir d'un linge humide et laisser lever la pâte de 45 minutes à 1 heure, dans un endroit tiède, jusqu'à ce que la pâte double de volume.",
    'Préchauffer la plancha.',
    'Dégonfler la pâte en enfonçant un poing au centre.',
    'Partager en 6 morceaux.',
    "Façonner chaque morceau et lui donner la forme d'une poire d'environ 20 cm de long, en étirant bien la pâte.",
    'Déposer les pains sur la plancha très chaude.',
    "Cuire de 5 à 6 minutes ou jusqu'à ce qu'ils soient bien dorés.",
    'Servir sans attendre.',
  ],
  tags: ['plancha', 'pâte levée', 'cuisine facile'],
  images: [
    {
      small:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/pain-naan-sur-plancha',
      medium:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/pain-naan-sur-plancha',
      large:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/pain-naan-sur-plancha',
    },
  ],
  source: 'David Cloutier',
  notes: "Pour des Naam plus gros, diviser la pâte en 4 plutôt qu'en 6",
  slug: 'pain-naan-sur-plancha',
}
