import { Recipe } from '@/types/recipe';

export const rotiDePaletteDeJanetteBertrand: Recipe = {
  id: 'roti-de-palette-de-janette-bertrand',
  title: 'Rôti de palette de Janette Bertrand',
  description: 'Un classique Québécois Rôti de palette de Janette Bertrand',
  categories: ['Plats principaux'],
  prepTime: { min: 5, max: 5 },
  cookTime: { min: 540, max: 540 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 rôti de palette de 2 kg',
    '1 sachet de soupe à l\'oignon'
  ],
  instructions: [
    'Première façon: Mettre le rôti sur 2 épaisseurs de papier alu, saupoudrer du mélange de soupe, refermer hermétiquement le papier alu (en papillote) cuire au four à 300F (150C) pendant 3 heures.',
    'Deuxième façon: Mettre le rôti dans la mijoteuse, saupoudrer du mélange de soupe, ajouter un peu d\'eau dans le fond, couvrir et cuire à LOW de 5 à 6 heures.'
  ],
  tags: ['bœuf', 'papillote', 'mijoteuse'],
  notes: 'Temps de cuisson variable selon la technique choisie (3 à 9 heures).',
  slug: 'roti-de-palette-de-janette-bertrand'
};
