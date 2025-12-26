import { Recipe } from '@/types/recipe';

export const saumonCremeEtPesto: Recipe = {
  id: 'saumon-creme-et-pesto',
  title: 'Saumon crème et pesto',
  description: 'Bon repas de semaine',
  categories: ['Poisson', 'Plats principaux'],
  prepTime: 10,
  cookTime: 20,
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    '1 cuillère à table sirop d\'érable',
    '1 cuillère à table pesto',
    '1/2 tasse crème 15% ou 35 %',
    '1 filet de saumon',
    'Poivre et sel'
  ],
  instructions: [
    'Déposer le poisson dans un plat allant au four.',
    'Sur chaque portion de poisson, badigeonner d\'une cuillère à table de sirop d\'érable.',
    'Badigeonner d\'une cuillère à table de pesto.',
    'Verser la crème jusqu\'à environ la moitié de l\'épaisseur du saumon.',
    'Cuire au four à 375 °F 10 à 15 minutes, ou jusqu\'à ce que la chair soit opaque.',
    'Saler, poivrer et servir.'
  ],
  tags: ['pesto', 'sirop d\'érable', 'cuisson au four'],
  notes: 'Source: https://www.recettes.qc.ca/recettes/recette/filet-de-saumon-creme-et-pesto-101739',
  slug: 'saumon-creme-et-pesto'
};
