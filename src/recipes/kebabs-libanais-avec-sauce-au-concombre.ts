import { Recipe } from '@/types/recipe';

export const kebabsLibanaisAvecSauceAuConcombre: Recipe = {
  id: 'kebabs-libanais-avec-sauce-au-concombre',
  title: 'Kebabs libanais avec sauce au concombre',
  description: 'Recette de kebabs libanais servis avec une sauce au concombre crémeuse, accompagnés de pita, laitue et oignon rouge.',
  categories: ['Plats principaux', 'Végétarien'],
  prepTime: 20,
  cookTime: 20,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Sauce',
      items: [
      '45 ml de vinaigrette Crémeuse au concombre KRAFT, divisé',
      '1/2 tasse de yogourt nature',
      '1/2 tasse de concombre pelé et haché',
      '1 c. à soupe de menthe fraîche, hachée'
      ]
    },
    {
      title: 'Kebabs',
      items: [
      '10 biscuits soda PREMIUM PLUS, écrasés finement',
      '45 ml de vinaigrette Crémeuse au concombre KRAFT',
      '1 1/2 lb de bœuf haché maigre',
      '2 c. à thé de cumin moulu',
      '2 c. à thé de thym séché',
      '1/2 c. à thé de piment de la Jamaïque moulu'
      ]
    }
  ],
  instructions: [
    'Chauffer le four à 400 °F.',
    'Combiner 3 c. à soupe (45 ml) de vinaigrette, le yogourt, le concombre et la menthe; couvrir et réfrigérer jusqu\'au moment d\'utiliser.',
    'Mélanger bien le reste des ingrédients et façonner en 16 cylindres de 3/4 x 4 po; placer dans un plat de cuisson de 9 x 13 po.',
    'Cuire au four de 18 à 20 min, ou jusqu\'à ce que ces « kebabs » soient bien cuits, en tournant après 10 min.',
    'Pour chaque portion, placez 2 kebabs sur un pita, garnissez de laitue et de fines tranches d\'oignon rouge, de sauce, puis roulez.'
  ],
  tags: ['cumin', 'grill', 'sauce au concombre'],
  notes: 'Si vous en avez, ajouter 1 c. à thé de sumac au bœuf haché en même temps que les autres assaisonnements pour rehausser le goût.',
  slug: 'kebabs-libanais-avec-sauce-au-concombre'
};
