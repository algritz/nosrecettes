import { Recipe } from '@/types/recipe'

export const sandwichGobergeEtFraise: Recipe = {
  id: 'sandwich-goberge-et-fraise',
  title: 'Sandwich goberge et fraise',
  description:
    'Un sandwich frais et savoureux combinant goberge, fraises, avocat et herbes, idéal pour un repas léger ou une entrée.',
  categories: ['Sandwichs'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 0, max: 0 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '4 pain à sandwich moelleux style petit sous-marin',
    '750 ml (3 tasses) de fraises, équeutées et coupées en quartiers',
    '400 g (½ paquet) de goberge, coupée en dés',
    '2 oignons verts, finement hachés',
    '1 concombre moyen, pelé, épépiné et coupé en dés',
    '1 avocat mûr, pelé et coupé en dés',
    '30 ml (2 c. à soupe) de feuilles de coriandre fraîche hachées',
    "Au goût, huile d'olive extra vierge",
    '15-30 ml (1-2 c. à soupe) de jus de lime (environ 1 ou 2 limes)',
    'Au goût, sel et poivre du moulin',
  ],
  instructions: [
    'Mélanger tous les ingrédients soigneusement dans un saladier.',
    'Saler et poivrer.',
    'Servir en sandwich, dans un pain moelleux!',
  ],
  tags: ['frais', 'herbes', 'sandwich'],
  slug: 'sandwich-goberge-et-fraise',
}
