import { Recipe } from '@/types/recipe'

export const pouletAuxFraisesEtAuVinaigreBalsamique: Recipe = {
  id: 'poulet-aux-fraises-et-au-vinaigre-balsamique',
  title: 'Poulet aux fraises et au vinaigre balsamique',
  description: '',
  categories: ['Végétarien', 'Plats principaux'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 20, max: 20 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    'Huile',
    'Sel et poivre',
    'Farine',
    '4 poitrines de poulet',
    "20 mL [4 c. à thé] d'oignon haché",
    '500 mL [2 tasses] de fraises [équeutées, lavées et coupées en morceaux]',
    '180 mL [12 c. à table] de miel',
    '190 mL [6 onces] vinaigre balsamique',
  ],
  instructions: [
    "Chauffer un peu d'huile dans une poêle.",
    'Saler, poivrer et enfariner les poitrines de poulet.',
    'Les cuire à feu moyen pendant 10 minutes.',
    "Lorsque les poitrines de poulet sont cuites, ajouter l'oignon, les fraises et le miel; poivrer.",
    'Verser le vinaigre balsamique sur le tout.',
    'Laisser réduire un peu.',
  ],
  tags: ['fraise', 'vinaigre balsamique', 'poitrine de poulet'],
  slug: 'poulet-aux-fraises-et-au-vinaigre-balsamique',
}
