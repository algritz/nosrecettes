import { Recipe } from '@/types/recipe';

export const pouletDiablo: Recipe = {
  id: 'poulet-diablo',
  title: 'Poulet diablo',
  description: 'Préparer un poulet mariné avec une marinade épicée, puis le cuire au barbecue.',
  categories: ['Vollaille', 'Barbecue'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 30, max: 30 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 poulet',
    'Le zeste et le jus d’un citron',
    '2 c. à soupe de vin blanc ou bière ou cidre',
    '3 c. à soupe de purée d’ail',
    '2 c. à soupe de poudre de chili',
    '2 c. à soupe d’huile d’olive',
    '2 c. à soupe de sauce Sriracha',
    '1 c. à soupe de sel'
  ],
  instructions: [
    'Préparer votre poulet en crapaudine.',
    'Mélanger tous les ingrédients de la marinade et faire mariner 3 à 12 heures.',
    'Faire cuire sur le BBQ à 350°F pendant 30 minutes environ.',
    'Retirer du BBQ et laisser reposer 5 à 10 minutes enveloppé dans un papier d’aluminium.',
    'Servir.'
  ],
  tags: ['épicé', 'barbecue', 'marinade'],
  slug: 'poulet-diablo'
};
