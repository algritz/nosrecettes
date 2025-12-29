import { Recipe } from '@/types/recipe'

export const browniesFacileAFaireEtVraimentBon: Recipe = {
  id: 'brownies-facile-a-faire-et-vraiment-bon',
  title: 'Brownies facile à faire et vraiment bon',
  description: 'Brownies facile à faire et vraiment bon',
  categories: ['Pâtisseries et desserts'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 35, max: 35 },
  servings: 17,
  difficulty: 'Facile',
  ingredients: [
    '8 onces de chocolat de bonne qualité (1 tasse)',
    '¾ tasse de beurre, fondu',
    '1 ¼ tasse de sucre',
    '2 œufs',
    '2 cuillères à café de vanille',
    '¾ tasse de farine tout usage',
    '¼ tasse de poudre de cacao',
    '1 cuillère à café de sel',
  ],
  instructions: [
    'Préchauffer le four à 180 °C (350 °F).',
    'Hachez le chocolat en morceaux.',
    "Faites fondre la moitié, puis mettre de côté l'autre moitié pour plus tard.",
    'Mélanger le beurre et le sucre, puis battre.',
    "Ajouter les œufs et la vanille et battre à nouveau pendant 1-2 minutes ou jusqu'à ce que le mélange soit devenu moelleux.",
    "Fouetter le chocolat fondu dans le mélange (s'assurer que le chocolat n'est pas trop chaud pour pas que les œufs cuisent).",
    'Tamisé la farine, la poudre de cacao et le sel, puis incorporer aux ingrédients humides en faisant attention à ne pas trop mélanger.',
    'Ajouter les morceaux de chocolat.',
    'Transférer la pâte dans un plat de cuisson carré doublé de papier parchemin.',
    'Cuire pendant 30-35 minutes, puis refroidir complètement.',
    'Couper et servir.',
  ],
  tags: ['chocolat', 'gâteau', 'facile'],
  images: [
    {
      small:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/brownies-facile-a-faire-et-vraiment-bon',
      medium:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/brownies-facile-a-faire-et-vraiment-bon',
      large:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/brownies-facile-a-faire-et-vraiment-bon',
    },
  ],
  source: 'David Cloutier',
  slug: 'brownies-facile-a-faire-et-vraiment-bon',
}
