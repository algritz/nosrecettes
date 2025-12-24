import { Recipe } from '@/types/recipe';

export const saumonAuBeurreCajun: Recipe = {
  id: 'saumon-au-beurre-cajun',
  title: 'Saumon au beurre cajun',
  description: 'Une recette de saumon cuit au four avec une marinade au beurre cajun, servi avec des rondelles de citron et décoré d\'oignons verts.',
  categories: ['Poisson', 'Plats principaux'],
  prepTime: 15,
  cookTime: 25,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 citrons coupés en rondelles',
    '1 gros filet de saumon (environ 3 lb)',
    'Sel casher',
    'Poivre noir fraichement moulu',
    '4 cuillères à soupe beurre fondu',
    '3 gousses d\'ail émincées',
    '2 cuillères à soupe moutarde l\'ancienne',
    '2 c. à thé d\'épice cajun',
    '1 c. à thé de thym frais',
    'Une pincée de flocons de piment rouge',
    'Oignons verts émincés pour servir'
  ],
  instructions: [
    'Préchauffer le four à 350 °F et tapisser une grande plaque à pâtisserie de papier d\'aluminium.',
    'Disposer les rondelles de citron en une couche uniforme au centre du moule.',
    'Placer le saumon dessus et assaisonner avec du sel et du poivre.',
    'Dans un petit bol, mélanger le beurre fondu, l\'ail, la moutarde, les épices cajun, le thym et les flocons de piment rouge.',
    'Badigeonner le saumon avec ce mélange.',
    'Cuire au four jusqu\'à ce que le saumon soit bien cuit, environ 25 minutes.',
    'Mettre le four en mode grill et faire griller pendant 2 minutes ou jusqu\'à ce que le mélange de beurre ait épaissi.',
    'Décorer d\'oignons verts avant de servir.'
  ],
  tags: ['cajun', 'saumon', 'grill'],
  slug: 'saumon-au-beurre-cajun'
};
