import { Recipe } from '@/types/recipe';

export const sauteDePouletAigreDouxALaThai: Recipe = {
  id: 'saute-de-poulet-aigre-doux-a-la-thai',
  title: 'Sauté de poulet aigre-doux à la thaï',
  description: 'Un sauté de poulet aigre-doux aux saveurs thaïlandaises, avec mangue, noix de cajou et sauce chili épicée.',
  categories: ['Plats principaux'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 15, max: 15 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '15 ml (1 c. à soupe) de miel',
    '30 ml (2 c. à soupe) de vinaigre de riz',
    '160 ml (2/3 de tasse) de sauce chili épicée thaï',
    '80 ml (1/3 de tasse) de bouillon de poulet',
    '60 ml (1/4 de tasse) de sauce soya',
    '1 oignon',
    '1 poivron rouge',
    '1 petite mangue',
    '3 poitrines de poulet sans peau',
    '30 ml (2 c. à soupe) d\'huile de sésame (non grillé)',
    '30 pois mange-tout',
    '80 ml (1/3 de tasse) de noix de cajou grillées'
  ],
  instructions: [
    'Dans un bol, délayer le miel dans le vinaigre de riz. Incorporer le reste des ingrédients de la sauce. Réserver.',
    'Émincer l\'oignon, le poivron rouge et la mangue. Couper les poitrines de poulet en lanières.',
    'Dans une poêle ou dans un wok, chauffer l\'huile à feu moyen. Cuire les pois mange-tout avec les légumes émincés et la mangue de 2 à 3 minutes. Déposer dans une assiette.',
    'Dans la même poêle, cuire les lanières de poulet de 2 à 3 minutes de chaque côté en procédant par petites quantités.',
    'Verser la sauce et porter à ébullition. Laisser mijoter 2 minutes à feu doux-moyen.',
    'Remettre les légumes et la mangue dans la poêle. Prolonger la cuisson de 1 à 2 minutes.',
    'Parsemer de noix de cajou.'
  ],
  tags: ['thaï', 'sauté', 'noix de cajou'],
  accompaniment: 'Servir sur un riz',
  slug: 'saute-de-poulet-aigre-doux-a-la-thai'
};
