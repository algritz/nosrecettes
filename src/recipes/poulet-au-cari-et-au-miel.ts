import { Recipe } from '@/types/recipe'

export const pouletAuCariEtAuMiel: Recipe = {
  id: 'poulet-au-cari-et-au-miel',
  title: 'Poulet au cari et au miel',
  description:
    'Une recette savoureuse de poulet mijoté dans une sauce au miel, moutarde, beurre et cari.',
  categories: ['Végétarien', 'Plats principaux'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 40, max: 40 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1/4 tasse (65 ml) miel',
    '1/4 tasse (65 ml) moutarde',
    '1/4 tasse (65 ml) beurre',
    '1 c.à thé (5 ml) sel',
    '1 c.à thé (5 ml) poudre de cari',
    '4 poitrines de poulet désossées',
  ],
  instructions: [
    "Mettre les cinq premiers ingrédients dans une casserole et chauffer à feu doux jusqu'à ce que le mélange soit homogène.",
    'Dans un plat allant au four, déposer le poulet et le recouvrir de la sauce.',
    'Cuire à 350°F durant 35 à 45 minutes, sans couvrir.',
  ],
  tags: ['miel', 'cari', 'cuisson au four'],
  slug: 'poulet-au-cari-et-au-miel',
}
