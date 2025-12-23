import { Recipe } from '@/types/recipe';

export const chouDeBruxelleAuRiceKrispies: Recipe = {
  id: 'chou-de-bruxelle-au-rice-krispies',
  title: 'Chou de bruxelle au Rice Krispies',
  description: 'Un favori de longue date',
  categories: ['Végétarien', 'Plats principaux'],
  prepTime: 10,
  cookTime: 30,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 paquet de choux de Bruxelles',
    '3 c. à soupe de beurre',
    '3 c. à soupe de farine',
    '2 tasses de lait',
    '1 tasse de Rice Krispies'
  ],
  instructions: [
    'Faire cuire les choux de Bruxelles vapeur.',
    'Faire fondre les 3 c. à soupe de beurre.',
    'Ajouter la farine et bien mélanger au fouet puis ajouter le lait et bien brasser jusqu\'à ébullition.',
    'Préchauffer le four à 400F.',
    'Dans un plat allant au four, verser les choux de Bruxelles et napper de sauce béchamel.',
    'Garnir de Rice Krispies et de noisettes de beurre.'
  ],
  tags: ['béchamel', 'gratin', 'Rice Krispies'],
  slug: 'chou-de-bruxelle-au-rice-krispies'
};
