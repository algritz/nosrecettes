import { Recipe } from '@/types/recipe';

export const filetsDePorcGrillesDeCanton: Recipe = {
  id: 'filets-de-porc-grilles-de-canton',
  title: 'Filets de porc grillés de canton',
  description: '',
  categories: ['Porc', 'Plats principaux'],
  prepTime: 15,
  cookTime: 15,
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    '1 filet de porc',
    '25 ml de sauce soja',
    '25 ml de vinaigre de vin',
    '1/4 t d\'eau',
    '2 gousses d\'ail en tranches minces',
    '2 c. à soupe de gingembre frais râpé',
    '1/4 t de jus d\'orange',
    '1/2 c. à thé de moutarde en poudre'
  ],
  instructions: [
    'Couper le filet de porc en 2 et encore en 2 sur le sens de la longueur pour obtenir 4 petits filets.',
    'Mettre dans un plat la sauce soja, le vinaigre de vin et le gingembre.',
    'Ajouter les filets de porc et laisser mariner (minimum 3 heures, maximum 1 journée).',
    'Mélanger le jus d\'orange et la moutarde en poudre.',
    'Retirer les filets de la marinade et les mettre dans une poêle bien chaude.',
    'Faire griller jusqu\'à ce que les filets soient bien dorés en les badigeonnant du mélange de jus d\'orange à plusieurs reprises pendant la cuisson.'
  ],
  tags: ['marinade', 'grillage', 'canton'],
  slug: 'filets-de-porc-grilles-de-canton'
};
