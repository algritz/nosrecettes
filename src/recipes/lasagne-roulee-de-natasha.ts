import { Recipe } from '@/types/recipe';

export const lasagneRouleeDeNatasha: Recipe = {
  id: 'lasagne-roulee-de-natasha',
  title: 'Lasagne roulée de Natasha',
  description: '',
  categories: ['Plats principaux', 'Pâtes'],
  prepTime: { min: 30, max: 30 },
  cookTime: { min: 45, max: 45 },
  servings: 8,
  difficulty: 'Facile',
  ingredients: [
    '12 nouilles à lasagne cuites selon les instructions de l\'emballage',
    '1 lb de boeuf haché',
    '900 ml de sauce marinara',
    '1/2 tasse d\'oignon en dés',
    '3 gousses d\'ail émincées',
    '1 cuillère à café de sel de mer',
    'Sauce piquante au goût',
    '1/2 cuillère à café de poivre noir ou au goût',
    '1/2 cuillère à café d\'origan séché',
    '400g de ricotta',
    '1 gros œuf',
    '1/4 tasse de parmesan râpé',
    '3 tasses de fromage mozzarella râpé, divisé',
    '1/4 tasse de persil haché, et plus pour garnir'
  ],
  instructions: [
    'Préchauffer le four à 375˚F.',
    'Cuire les nouilles dans une grande casserole d\'eau salée selon les instructions sur l\'emballage, puis égoutter et remplir la casserole d\'eau froide pour arrêter le processus de cuisson et empêcher les nouilles de coller ensemble.',
    'Dans une casserole, à feu moyen-élevé, cuire le boeuf haché jusqu\'à ce qu\'il ne soit plus rose.',
    'Ajouter l\'oignon et cuire jusqu\'à ce qu\'il soit ramolli, environ 3 minutes.',
    'Ajouter l\'ail, 1 cuillère à café de sel, 1/2 cuillère à café de poivre et 1/2 cuillère à café d\'origan et faire sauter une autre minute.',
    'Ajouter la marinara, porter à ébullition et éteindre le feu.',
    'Étaler 1/2 tasse de sauce à la viande sur le fond d\'une cocotte.',
    'Dans un grand bol, mélanger la ricotta, l\'œuf, le parmesan, 1 1/2 tasse de mozzarella et le persil.',
    'Pour éviter les dégâts, déposer les nouilles sur une grande plaque à pâtisserie en une seule couche.',
    'Étaler 1/4 tasse du mélange de fromage sur le dessus de chaque nouille et étendre.',
    'Ajouter une grosse cuillère à soupe de sauce à la viande en bande au centre des nouilles et étendre.',
    'Rouler les nouilles et les disposer dans la cocotte préparée.',
    'Étaler le reste de la sauce à la viande sur le dessus des rouleaux et saupoudrer avec 1 1/2 tasse de mozzarella restante.',
    'Couvrir de papier d\'aluminium, en s\'assurant que le papier d\'aluminium ne touche pas le fromage.',
    'Cuire au four à 375˚F pendant 40 minutes.',
    'Retirer le papier d\'aluminium et faire griller encore 2-3 minutes ou jusqu\'à ce que le fromage soit légèrement doré.',
    'Garnir de persil pour servir.'
  ],
  tags: ['pâtes', 'fromage', 'bœuf'],
  slug: 'lasagne-roulee-de-natasha'
};
