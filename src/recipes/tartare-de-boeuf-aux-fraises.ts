import { Recipe } from '@/types/recipe';

export const tartareDeBoeufAuxFraises: Recipe = {
  id: 'tartare-de-boeuf-aux-fraises',
  title: 'Tartare de boeuf aux fraises',
  description: 'Une recette fraîche et savoureuse de tartare de boeuf agrémenté de fraises, fromage de chèvre et micro-pousses.',
  categories: ['Entrées'],
  prepTime: 20,
  cookTime: 0,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '30 ml d’huile d’olive',
    '15 ml de vinaigre balsamique',
    '15 ml de moutarde de Dijon',
    '60 ml d\'échalotes françaises hachées',
    '45 ml de persil haché',
    '15 ml de marjolaine hachée',
    '15 ml de sauce Worcestershire',
    'sel et poivre au goût',
    '30 ml de noix de macadamia hachées',
    '600 g de filet de bœuf très frais coupé en petits dés',
    '2/3 de tasse de fraises coupées en dés',
    '100 g (3 1/2 oz) de fromage de chèvre crémeux émietté',
    '1 boîte de micro-pousses de 30 g'
  ],
  instructions: [
    'Dans un bol, mélanger l’huile avec le vinaigre balsamique, la moutarde de Dijon, les échalotes, les fines herbes et la sauce Worcestershire.',
    'Saler et poivrer.',
    'Ajouter les noix de macadamia, les dés de boeuf et les fraises.',
    'Remuer délicatement.',
    'Répartir le tartare dans des verrines ou déposer un emporte-pièce dans une assiette.',
    'Remplir de tartare et presser avec le dos d’une cuillère pour égaliser la surface.',
    'Démouler délicatement.',
    'Garnir chaque portion de fromage de chèvre et de micro-pousses.'
  ],
  tags: ['fraîcheur', 'bœuf cru', 'micro-pousses'],
  slug: 'tartare-de-boeuf-aux-fraises'
};
