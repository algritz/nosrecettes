import { Recipe } from '@/types/recipe'

export const saumonGrilleEtSaSauceAuYogourtEtFinesHerbes: Recipe = {
  id: 'saumon-grille-et-sa-sauce-au-yogourt-et-fines-herbes',
  title: 'Saumon grillé et sa sauce au yogourt et fines herbes',
  description:
    'Un délicieux saumon grillé servi avec une sauce au yogourt parfumée aux fines herbes, parfait pour une cuisson rapide et savoureuse.',
  categories: ['Poisson', 'Plats principaux'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 10, max: 10 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1/2 tasse de yogourt nature ordinaire égoutté',
    '2 cuillères à table de ciboulette fraîche finement hachée (ou 1 1/2 cuillères à soupe de ciboulette séchée)',
    '2 cuillères à table de persil finement haché (ou 1 1/2 cuillères à soupe de persil séché)',
    '1 cuillère à table de jus de lime frais',
    "2 tiges d'oignon vert, rincées et hachées finement (les parties blanches et vert pâle seulement)",
    '4 filets de saumon',
    "2 cuillères à table d'huile de canola",
    '1/2 cuillerée à thé de sel',
    '1/2 cuillerée à thé de poivre',
  ],
  instructions: [
    'Préchauffez le four à grill ou le BBQ.',
    "Dans un bol moyen, mélangez le yogourt, la ciboulette, le persil, les échalotes, le jus de lime et une pincée de sel, bien brasser et couvrir. La sauce peut être préparée jusqu'à 2 jours à l'avance.",
    "Frottez le haut et le dessous des filets de saumon généreusement avec l'huile de canola.",
    'Assaisonnez les filets avec une pincée de sel et de poivre.',
    'Faire cuire le saumon à votre goût.',
    'Servez immédiatement, accompagné de la sauce au yogourt.',
  ],
  tags: ['saumon', 'grill', 'sauce au yogourt'],
  slug: 'saumon-grille-et-sa-sauce-au-yogourt-et-fines-herbes',
}
