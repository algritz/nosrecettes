import { Recipe } from '@/types/recipe'

export const poitrineDePouletJerk: Recipe = {
  id: 'poitrine-de-poulet-jerk',
  title: 'Poitrine de poulet jerk',
  description:
    'Une recette de poulet jerk mariné aux épices, grillé à la perfection.',
  categories: ['Vollaille', 'Plats principaux'],
  prepTime: { min: 30, max: 30 },
  cookTime: { min: 25, max: 25 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '4 poitrine de poulet',
    '5 ml de graines de coriandre',
    '2 piments de la Jamaïque',
    '1/4 de c. à thé de poivre noir',
    '1/4 de c. à thé cannelle',
    '2 oignons verts',
    '1/2 oignon',
    '1 piments Scotch bonnet (habaneros)',
    '3 branches de thym',
    "2 gousses d'ail",
    '45 ml de jus de lime',
    "25 ml de sirop d'érable",
    '15 ml de sauce soya',
  ],
  instructions: [
    "Torréfier les épices et les concasser à l'aide d'un mortier.",
    "Mettre les oignons verts, l'oignon, les piments, le thym et l'ail dans un robot culinaire et réduire le tout en une purée grossière.",
    'Ajouter les épices et le reste des ingrédients.',
    'Pulser quelques fois, pour bien mélanger le tout et verser dans un sac (style Ziploc).',
    'Ajouter les poitrines de poulet dans le sac avec le mélange jerk et laisser mariner (24 heures).',
    'Le lendemain, retirer le poulet de la marinade et cuire sur le grill.',
    'Servir.',
  ],
  tags: ['épicé', 'marinade sèche', 'grill'],
  slug: 'poitrine-de-poulet-jerk',
}
