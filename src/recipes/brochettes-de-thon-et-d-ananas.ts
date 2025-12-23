import { Recipe } from '@/types/recipe';

export const brochettesDeThonEtDAnanas: Recipe = {
  id: 'brochettes-de-thon-et-d-ananas',
  title: 'Brochettes de thon et d’ananas',
  description: 'Brochettes de thon et d’ananas',
  categories: ['Végétarien'],
  prepTime: 25,
  cookTime: 7,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '16 à 20 gros cubes de thon frais',
    '12 gros cubes d’ananas frais',
    '8 tronçons d’oignons verts',
    '5 ml (1 c. à thé) de graines de carvi écrasées',
    'Jus de 1 lime fraîche',
    '30 ml (2 c. à soupe) d’huile végétale',
    'Poivre noir moulu, au goût',
    '30 ml (2 c. à soupe) de coriandre fraîche hachée'
  ],
  instructions: [
    'Former les brochettes avec le thon, les ananas et les oignons.',
    'Déposer dans un grand plat.',
    'Ajouter les graines de carvi, le jus de lime et l’huile.',
    'Poivrer et mélanger pour bien enduire les brochettes des liquides.',
    'Réfrigérer 1 heure.',
    'Préchauffer le barbecue à intensité maximale.',
    'Égoutter les brochettes et les déposer sur la grille bien chaude du barbecue et réduire la chaleur à moyenne.',
    'Cuire de 6 à 7 minutes en tournant régulièrement.',
    'Servir avec des légumes de saison.'
  ],
  tags: ['barbecue', 'marinade sèche', 'grill'],
  slug: 'brochettes-de-thon-et-d-ananas'
};
