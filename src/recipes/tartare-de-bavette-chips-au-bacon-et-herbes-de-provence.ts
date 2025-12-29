import { Recipe } from '@/types/recipe'

export const tartareDeBavetteChipsAuBaconEtHerbesDeProvence: Recipe = {
  id: 'tartare-de-bavette-chips-au-bacon-et-herbes-de-provence',
  title: 'Tartare de bavette, chips au bacon et herbes de Provence',
  description:
    "Une recette de tartare de bavette de bœuf finement hachée, mélangée avec des ingrédients savoureux comme la tapenade, la sauce piquante, la moutarde, et garnie de chips au bacon et d'herbes de Provence.",
  categories: ['Entrées'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 0, max: 0 },
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    '1 lb bavette de bœuf',
    '1/3 de tasse de chips au bacon',
    '1 échalote, hachée finement',
    "2 c. à soupe de tapenade d'olive noire",
    "1 c. à soupe de sauce Frank's red hot",
    '1 c. à soupe de moutarde de Dijon',
    '1 c. à soupe d’huile d’olive',
    '1 c. à thé d’herbe de Provence',
    'Câpres, au goût',
    'Sel et poivre du moulin, au goût',
  ],
  instructions: [
    'À l’aide d’un couteau, hacher la bavette finement et bien mélanger avec les autres ingrédients.',
  ],
  tags: ['bœuf', 'tartare', 'bacon'],
  slug: 'tartare-de-bavette-chips-au-bacon-et-herbes-de-provence',
}
