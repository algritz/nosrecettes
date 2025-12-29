import { Recipe } from '@/types/recipe';

export const gateauAuChocolatEtALaBiere: Recipe = {
  id: 'gateau-au-chocolat-et-a-la-biere',
  title: 'Gâteau au Chocolat et à la Bière',
  description: 'Un gâteau moelleux au chocolat infusé à la bière noire, garni d\'un glaçage chocolaté à la bière et à la crème.',
  categories: ['Pâtisseries et desserts'],
  prepTime: { min: 25, max: 25 },
  cookTime: { min: 50, max: 50 },
  servings: 9,
  difficulty: 'Facile',
  ingredients: [
    '2 tasses de farine tout usage',
    '2 c. à thé de bicarbonate de soude',
    '1 tasse de beurre',
    '1 tasse de bière noire',
    '1 tasse de cacao',
    '1 tasse de cassonade',
    '2 œufs',
    '3/4 tasse de yogourt',
    '1 tasse de chocolat noir haché',
    '1/4 tasse de bière noire',
    '1/4 tasse de crème 35 %',
    '2 c. à soupe de beurre froid coupé en dés',
    '2 c. à soupe de miel'
  ],
  instructions: [
    'Placer la grille au centre du four. Préchauffer le four à 350 °F. Beurrer les parois et tapisser le fond d’un moule à charnière de 23 cm (9 po) de diamètre de papier parchemin.',
    'Dans un bol, mélanger la farine et le bicarbonate de soude. Réserver.',
    'Dans une casserole, chauffer le beurre, la bière, le cacao et la cassonade en mélangeant avec un fouet. Laisser tiédir et incorporer les œufs.',
    'À l’aide d’un fouet, incorporer les ingrédients secs en alternant avec le yogourt.',
    'Répartir la pâte dans le moule.',
    'Cuire au four 50 minutes ou jusqu’à ce qu’un cure-dents inséré au centre du gâteau en ressorte propre.',
    'Laisser tiédir. Démouler et laisser refroidir sur une grille.',
    'Glaçage: Placer le chocolat dans un bol. Réserver.',
    'Dans une casserole, porter à ébullition la bière, la crème et le miel. Retirer du feu et verser sur le chocolat. Laisser reposer 1 minute.',
    'À l’aide d’un fouet, mélanger jusqu’à ce que le chocolat soit fondu. Ajouter le beurre et bien mélanger.',
    'Faire couler sur le gâteau.'
  ],
  tags: ['chocolat', 'bière', 'glaçage'],
  slug: 'gateau-au-chocolat-et-a-la-biere'
};
