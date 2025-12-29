import { Recipe } from '@/types/recipe'

export const saladeDeCrabeEtDeFraisesAuCitronVert: Recipe = {
  id: 'salade-de-crabe-et-de-fraises-au-citron-vert',
  title: 'Salade de crabe et de fraises au citron vert',
  description: 'Salade de crabe et de fraises au citron vert',
  categories: ['Salades'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 0, max: 0 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    'La chair de 2 avocats, coupée en cubes de 2,5 cm (1 po)',
    '1 concombre anglais, pelé, épépiné et coupé en cubes de 2,5 cm (1 po)',
    '375 ml (1 1/2 tasse) de fraises fraîches, coupées en quartiers',
    '350 g (3/4 lb) de chair de crabe des neiges',
    'Le jus de 2 limes',
    '45 ml (3 c. à soupe) d’huile d’olive',
    'Sel et poivre',
  ],
  instructions: [
    'Dans un bol, mélanger délicatement tous les ingrédients.',
    'Salent et poivrer.',
    'Servir immédiatement.',
  ],
  tags: ['fraises', 'crabe', 'citron vert'],
  slug: 'salade-de-crabe-et-de-fraises-au-citron-vert',
}
