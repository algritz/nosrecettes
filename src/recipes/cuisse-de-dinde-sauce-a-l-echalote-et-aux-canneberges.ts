import { Recipe } from '@/types/recipe';

export const cuisseDeDindeSauceALEchaloteEtAuxCanneberges: Recipe = {
  id: 'cuisse-de-dinde-sauce-a-l-echalote-et-aux-canneberges',
  title: 'Cuisse de dinde, sauce à l\'échalote et aux canneberges',
  description: 'Une recette de cuisse de dinde rôtie servie avec une sauce aux échalotes et canneberges séchées, idéale pour un repas savoureux et festif.',
  categories: ['Vollaille', 'Plats principaux'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 45, max: 45 },
  servings: 3,
  difficulty: 'Facile',
  ingredients: [
    '1 (environ 1 ½ livre) cuisse de dinde',
    '2 c. à thé huile d’olive',
    '2 pincées de graines de céleri',
    '2 pincées de poudre d’ail',
    '2 pincées de basilic',
    '2 pincées de thym',
    'sel et poivre au goût',
    '3 moyennes échalotes émincées',
    '¼ tasse canneberges séchées',
    '1 tasse bouillon de dinde (récupéré de la cuisson)',
    '1 c. à thé fécule de maïs',
    '1 c. à table eau froide'
  ],
  instructions: [
    'Retirer la peau de la cuisse de dinde. Placer la cuisse dans une lèchefrite. Badigeonner d’huile d’olive et assaisonner avec sel, poivre, graines de céleri, poudre d’ail, basilic, thym. Couvrir d’une feuille d’aluminium. Cuire au four environ 1 heure à 175 °C (350 °F) ou jusqu’à ce que la température interne atteigne 82 °C (180 °F).',
    'Prélever 125 ml (½ tasse) de bouillon, puis couvrir et réserver la dinde.',
    'Dans un poêlon, faire revenir l’échalote dans un peu d’huile d’olive. Ajouter les canneberges séchées, assaisonner et laisser cuire en remuant.',
    'Verser le bouillon dans la sauce. Ajouter la fécule délayée dans l’eau froide, bien remuer.',
    'Servir immédiatement sur des morceaux de dinde.'
  ],
  tags: ['rôti', 'sauce aux échalotes', 'canneberges'],
  slug: 'cuisse-de-dinde-sauce-a-l-echalote-et-aux-canneberges'
};
