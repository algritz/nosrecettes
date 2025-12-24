import { Recipe } from '@/types/recipe';

export const saladeDeRizALaMediteraneenne: Recipe = {
  id: 'salade-de-riz-a-la-mediteraneenne',
  title: 'Salade de riz à la méditéranéenne',
  description: 'Une salade de riz méditerranéenne fraîche et savoureuse, parfaite pour un déjeuner léger ou un accompagnement.',
  categories: ['Salades'],
  prepTime: 20,
  cookTime: 20,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '3/4 tasse riz basmati',
    '1/2 concombre pelé et coupé en cube',
    '14 tomates-cerise coupées en deux',
    '1 petite échalotte française, hachée finement',
    '1 1/3 tasse haricots rouges (en conserve) égouttés et rincés',
    '1/2 piment rouge coupé en dés',
    '130 g fromage féta léger, coupé en petits dés',
    '10 olives noires, dénoyautées, rincées et tranchées',
    '3 1/2 c. à soupe de persil italien frais, haché finement',
    '3 c. à soupe huile de canola',
    '3/4 c. à thé origan séché',
    '2 c. à soupe vinaigre de vin',
    'le jus de 1/2 citron'
  ],
  instructions: [
    'Cuire le riz. Laisser reposer au moins 1 heure au réfrigérateur (on peut faire cette étape à l\'avance).',
    'Entre-temps, couper les légumes, couper le fromage féta et les olives. Hacher le persil. Rincer et égoutter les légumineuses.',
    'Ajouter ces ingrédients au riz refroidi dans un saladier.',
    'Dans un petit bol, bien mélanger l\'huile, le vinaigre, le jus de citron et l\'origan.',
    'Verser cette vinaigrette dans le saladier et touiller délicatement.',
    'Poivrer au goût.',
    'Laisser reposer au réfrigérateur au moins 1 h avant de servir.'
  ],
  tags: ['méditerranéen', 'salade', 'frais'],
  marinatingTime: 60,
  slug: 'salade-de-riz-a-la-mediteraneenne'
};
