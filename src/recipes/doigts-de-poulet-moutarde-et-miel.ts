import { Recipe } from '@/types/recipe';

export const doigtsDePouletMoutardeEtMiel: Recipe = {
  id: 'doigts-de-poulet-moutarde-et-miel',
  title: 'Doigts de poulet moutarde et miel',
  description: '',
  categories: ['Vollaille'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 15, max: 15 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '7 c. à table mayonnaise',
    '1 c. à table moutarde de Dijon',
    '2 c. à table miel',
    '1 lb de poitrines de poulet désossées et sans peau, coupées en lanières',
    '1 1/2 tasse de Korn Flakes broyés finement'
  ],
  instructions: [
    'Préchauffer le four à 425 °F.',
    'Dans un bol moyen, combiner la mayonnaise, la moutarde de Dijon, et le miel. Réserver la moitié pour tremper.',
    'Ajouter le poulet au reste du mélange de mayonnaise; remuer pour enrober, puis rouler dans le Korn Flakes.',
    'Cuire au four pendant 15 minutes ou jusqu\'à ce que le poulet soit bien cuit.',
    'Servir avec la sauce au miel et à la moutarde réservée.'
  ],
  tags: ['poulet', 'moutarde', 'miel'],
  slug: 'doigts-de-poulet-moutarde-et-miel'
};
