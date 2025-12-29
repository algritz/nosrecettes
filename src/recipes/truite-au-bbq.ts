import { Recipe } from '@/types/recipe'

export const truiteAuBbq: Recipe = {
  id: 'truite-au-bbq',
  title: 'Truite au BBQ',
  description: '',
  categories: ['Poisson', 'Barbecue'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 18, max: 18 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    "Quantité suffisante d'huile d'olive",
    '1 filet de truite (environ 800g)',
    '45 ml (3 c. à soupe) moutarde de Meaux',
    '1 oignon vert, haché',
    '2 c. à thé herbes fraîches au choix (aneth, basilic, coriandre)',
    '1 c. à soupe de miel chaud',
    "le jus d'un citron pressé",
  ],
  instructions: [
    'Préchauffer le barbecue à intensité moyenne élevée.',
    "Badigeonner d'huile d'olive une feuille de papier d'aluminium d'un seul côté et déposer par dessus le filet de truite, la peau en dessous.",
    "Étendre la moutarde sur le filet de truite et parsemer d'oignon vert et d'herbes.",
    'Verser le miel et le jus de citron.',
    "Ne pas fermer la feuille d'aluminium en papillote.",
    'Déposer sur la grille du BBQ et cuire 15-18 minutes.',
    'Servir avec des légumes grillés.',
  ],
  tags: ['barbecue', 'poisson', 'grill'],
  slug: 'truite-au-bbq',
}
