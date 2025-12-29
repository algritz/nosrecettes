import { Recipe } from '@/types/recipe';

export const magretDeCanardLaqueALerableEtAuxBleuets: Recipe = {
  id: 'magret-de-canard-laque-a-l-erable-et-aux-bleuets',
  title: 'Magret de canard laqué à l’érable et aux bleuets',
  description: 'Un magret de canard laqué à l’érable et aux bleuets, cuit au four pour une finition brillante et savoureuse.',
  categories: ['Vollaille', 'Plats principaux'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 20, max: 20 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 magret de canard gavé',
    '25 ml (5 c. à thé) de sirop d\'érable',
    '125 g (1/4 lb) de bleuets',
    '1 échalote ciselée',
    '30 ml (2 c. à soupe) de sauce soja',
    '30 ml (2 c. à soupe) de jus de pomme'
  ],
  instructions: [
    'Mettre tous les ingrédients de la laque dans une petite casserole, porter à ébullition et réduire de moitié.',
    'À l\'aide d\'un mixeur à main, mixer le tout, filtrer et réserver.',
    'Dans une poêle froide, mettre le magret de canard du côté du gras et faire monter la température progressivement jusqu\'à obtention d\'une belle coloration.',
    'Retourner le magret et cuire à feu moyen une minute, puis dégraisser la poêle.',
    'Laquer abondamment le gras et la chair à l\'aide d\'un pinceau et mettre au four chaud, à 375 °F (190 °C).',
    'Laquer le magret toutes les 2 à 3 minutes pendant la cuisson.',
    'Laisser cuire de 12 à 15 minutes, selon la cuisson désirée.',
    'Retirer la viande et laisser reposer sur une grille pendant 3 minutes avant de servir.'
  ],
  tags: ['canard', 'laqué', 'érable'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/magret-de-canard-laque-a-l-erable-et-aux-bleuets',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/magret-de-canard-laque-a-l-erable-et-aux-bleuets',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/magret-de-canard-laque-a-l-erable-et-aux-bleuets'
    }
  ],
  source: 'David Cloutier',
  slug: 'magret-de-canard-laque-a-lerable-et-aux-bleuets'
};
