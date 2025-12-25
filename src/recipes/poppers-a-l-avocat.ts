import { Recipe } from '@/types/recipe';

export const poppersALAvocat: Recipe = {
  id: 'poppers-a-l-avocat',
  title: 'Poppers à l\'avocat',
  description: 'Une recette de poppers à l\'avocat farcis de fromage, bacon et épices, puis cuits au four jusqu\'à ce qu\'ils soient croustillants et dorés.',
  categories: ['Entrées'],
  prepTime: 20,
  cookTime: 25,
  servings: 24,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Farce',
      items: [
      '12 piments jalapeños, épépinés et coupés en deux',
      '2 petits avocats',
      '2 c. à soupe de jus de citron',
      '125 g de fromage à la crème, température ambiante',
      '¼ c. à thé de sel à l\'ail',
      '½ c. à thé de paprika fumé',
      '2 c. à soupe de coriandre fraîche, hachée',
      '6 tranches de bacon, cuites et finement hachées'
      ]
    },
    {
      title: 'Garniture',
      items: [
      '½ tasse de Panko',
      '1 c. à soupe de bacon haché',
      '1 c. à soupe de coriandre hachée',
      '1 zeste de citron',
      '2 c. à soupe d\'huile d\'olive',
      '¼ tasse de fromage parmesan, râpé',
      '¼ tasse de fromage Monterey jack, râpé'
      ]
    }
  ],
  instructions: [
    'Dans un grand bol, peler et écraser les avocats avec le jus de citron. Ajouter le fromage à la crème, le sel d\'ail, le paprika fumé, la coriandre et le bacon. Mélanger jusqu\'à l\'obtention d\'une texture homogène et placer au réfrigérateur jusqu\'au moment de l’assemblage.',
    'Dans un bol moyen, mélanger le panko, 1 c. à soupe de bacon haché, 1 c. à soupe de coriandre, le zeste de citron, l\'huile d\'olive et les deux fromages. Réserver.',
    'Préchauffer le four à 375°F. Tapisser une plaque à pâtisserie de papier parchemin.',
    'À l\'aide d\'une petite cuillère, remplir chaque moitié de jalapeño avec le mélange d\'avocat. Recouvrir chaque moitié d\'une quantité généreuse de garniture et cuire au four pendant 20 à 25 minutes.',
    'La garniture doit être croustillante et dorée et le jalapeño doit être mou.'
  ],
  tags: ['fromage', 'bacon', 'four'],
  slug: 'poppers-a-l-avocat'
};
