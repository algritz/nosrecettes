import { Recipe } from '@/types/recipe';

export const roastBeefALaMoutarde: Recipe = {
  id: 'roast-beef-a-la-moutarde',
  title: 'Roast beef à la moutarde',
  description: '',
  categories: ['Boeuf', 'Plats principaux'],
  prepTime: { min: 25, max: 25 },
  cookTime: { min: 60, max: 60 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 c. à soupe de moutarde de Dijon',
    '2 c. à soupe de moutarde en poudre',
    '2 c. à soupe de farine',
    '1 c. à soupe de sucre',
    '1 c. à soupe de thym frais haché',
    '3 c. à soupe de beurre ramolli',
    '2 oignons tranchés',
    '3 gousses d’ail émincées',
    '1 rôti de boeuf français de 1,5 kg',
    'Sel et poivre au goût',
    '1 1/2 tasse de bouillon de boeuf',
    '1 c. à soupe de fécule de maïs'
  ],
  instructions: [
    'Préchauffer le four à 450 °F.',
    'Dans un bol, mélanger les moutardes avec la farine, le sucre, le thym et le beurre.',
    'Badigeonner le rôti de préparation à la moutarde.',
    'Saler et poivrer.',
    'Dans une rôtissoire, étaler les tranches d’oignons et l’ail.',
    'Déposer le rôti de bœuf sur les oignons.',
    'Insérer un thermomètre à cuisson au centre du rôti.',
    'Cuire au four 10 minutes.',
    'Régler la température du four à 350 ºF.',
    'Poursuivre la cuisson de 45 minutes à 1 heure, jusqu’à ce que le thermomètre à cuisson indique 140 °F pour une cuisson saignante.',
    'Déposer le rosbif sur une planche à découper et couvrir d’une feuille de papier d’aluminium, sans serrer.',
    'Laisser reposer de 10 à 15 minutes avant de le trancher.',
    'Dans la rôtissoire, verser le bouillon et porter à ébullition en raclant le fond à l’aide d’une cuillère en bois afin de détacher les sucs de cuisson.',
    'Laisser mijoter de 2 à 3 minutes.',
    'Délayer la fécule dans un peu d’eau froide.',
    'Verser dans la rôtissoire en remuant.',
    'Saler et poivrer.',
    'Filtrer la sauce dans une passoire fine.',
    'Servir avec le rosbif.'
  ],
  tags: ['moutarde', 'bœuf', 'rôtisserie'],
  slug: 'roast-beef-a-la-moutarde'
};
