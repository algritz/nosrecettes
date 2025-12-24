import { Recipe } from '@/types/recipe';

export const tartareDeSaumonAuxFraises: Recipe = {
  id: 'tartare-de-saumon-aux-fraises',
  title: 'Tartare de saumon aux fraises',
  description: 'Un tartare frais et coloré combinant saumon, fraises et saveurs asiatiques, parfait pour une entrée élégante.',
  categories: ['Entrées'],
  prepTime: 20,
  cookTime: 0,
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    '400 g de saumon très frais',
    '1 échalote verte, hachée',
    '1 c. à soupe de ciboulette, ciselée',
    '3 ou 4 grosses fraises, coupées en dés',
    '1 c. à soupe de mayonnaise japonaise',
    '1 c. à soupe de chapelure panko',
    '1 c. à thé de graines de sésame',
    '1/2 c. à thé de sauce sriracha',
    'Un filet de jus de citron',
    'Sel et poivre, au goût'
  ],
  instructions: [
    'Afin de s’assurer de garder le saumon très frais, sortir deux bols, un plus petit et un plus grand. Dans le plus grand, mettre quelques glaçons. Asseoir le plus petit bol sur les glaçons, de manière à ce qu’il reste bien froid. Cette étape permet de cuisiner le tartare sans se presser, en sachant qu’il restera très frais.',
    'À l’aide d’un couteau, couper des cubes de saumon et les déposer au fur et à mesure dans le petit bol froid.',
    'Ajouter le reste des ingrédients « pour le tartare », sans brasser.',
    'Une fois tous les ingrédients dans le bol, bien mélanger. Le fait de ne brasser qu’une seule fois minimise la manipulation et nous assure que les cubes de saumon ne perdront pas leur belle forme et leur texture.',
    'Rectifier l’assaisonnement.',
    'Servir.'
  ],
  tags: ['frais', 'saumon', 'asiatique'],
  slug: 'tartare-de-saumon-aux-fraises'
};
