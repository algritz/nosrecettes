import { Recipe } from '@/types/recipe';

export const saladeGrecque: Recipe = {
  id: 'salade-grecque',
  title: 'Salade grecque',
  description: 'Une salade fraîche et savoureuse avec une vinaigrette à l\'huile d\'olive, citron, olives et feta, accompagnée de légumes croquants.',
  categories: ['Salades'],
  prepTime: 30,
  cookTime: 0,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Vinaigrette',
      items: [
      '25 ml (1 1/2 c. à soupe) d’huile d’olive',
      '15 ml (1 c. à soupe) de jus de citron',
      '15 ml (1 c. à soupe) de vinaigre de vin rouge',
      '15 ml (1 c. à soupe) d’olives noires dénoyautées dans l’huile, égouttées et hachées finement',
      '15 ml (1 c. à soupe) de persil plat ciselé',
      '2.5 ml (1/2 c. à thé) de sucre',
      '2.5 ml (1/2 c. à thé) de moutarde de Dijon',
      '1 ml (1/4 c. à thé) d’origan séché',
      'Quelques feuilles de basilic fraîche haché'
      ]
    },
    {
      title: 'Salade',
      items: [
      '2 tomates, coupées en cubes',
      '1/2 concombre anglais, coupé en cubes',
      '1/2 poivron jaune, épépiné et coupé en cubes',
      '180 ml (¾ tasse) de fromage feta coupé en dés',
      '65 ml (1/2 tasse) d’oignon rouge, émincé finement'
      ]
    }
  ],
  instructions: [
    'Dans un saladier ou un grand bol, mélange tous les ingrédients de la vinaigrette à l’aide d’un fouet.',
    'Ajoute les ingrédients de la salade et mélange bien.',
    'Sale et poivre.',
    'Mets la salade au réfrigérateur jusqu’au moment de servir.'
  ],
  tags: ['feta', 'olives', 'salade'],
  slug: 'salade-grecque'
};
