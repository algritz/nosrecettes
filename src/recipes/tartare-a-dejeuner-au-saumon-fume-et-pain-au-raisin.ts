import { Recipe } from '@/types/recipe'

export const tartareADejeunerAuSaumonFumeEtPainAuRaisin: Recipe = {
  id: 'tartare-a-dejeuner-au-saumon-fume-et-pain-au-raisin',
  title: 'Tartare à déjeuner au saumon fumé et pain au raisin',
  description:
    'Un tartare savoureux à base de saumon fumé, servi sur du pain au raisin avec une touche de basilic.',
  categories: ['Déjeuners', 'Poisson'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 0, max: 0 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '500g de saumon fumé à froid coupé en petits dés',
    '7 feuilles de basilic finement hachées',
    '1 oignon vert haché finement',
    '1/2 tasse de crème sure',
    'Poivre',
    '1 miche de pain au raisin de la boulangerie',
    'Quelques petites feuilles de basilic pour la décoration',
  ],
  instructions: [
    "Dans un grand bol, mélanger le saumon fumé, le basilic haché, l'oignon vert, et 3 c. à soupe de crème sure. Poivrer au goût.",
    'Tartiner chaque tranche de pain au raisin avec la crème sure.',
    'Verser du mélange à tartare sur chaque tranche de pain.',
    'Décorer de petites feuilles de basilic.',
    'Servir aussi tôt.',
  ],
  tags: ['saumon fumé', 'basilic', 'tartare'],
  slug: 'tartare-a-dejeuner-au-saumon-fume-et-pain-au-raisin',
}
