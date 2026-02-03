/**
 * Test Data for Nos Recettes E2E Tests
 *
 * Minimal, reusable test data for creating/editing recipes
 */

export const sampleRecipeData = {
  title: 'Poulet Général Tao Test',
  description: 'Une délicieuse recette de poulet Général Tao pour les tests E2E',
  categories: ['Plats principaux', 'Vollaille'],
  prepTime: { min: 20, max: 25 },
  cookTime: { min: 15, max: 20 },
  servings: '4',
  difficulty: 'Moyen',
  ingredients: [
    '500g de poitrine de poulet, coupée en cubes',
    '2 tasses de sauce Général Tao',
    '1 oignon, haché',
    '2 gousses d\'ail, émincées',
    '1 cuillère à soupe d\'huile végétale',
  ],
  instructions: [
    'Couper le poulet en cubes uniformes',
    'Faire mariner pendant 30 minutes au réfrigérateur',
    'Chauffer l\'huile dans un wok à feu vif',
    'Cuire le poulet jusqu\'à ce qu\'il soit doré',
    'Ajouter la sauce et laisser mijoter 5 minutes',
    'Servir chaud avec du riz',
  ],
  tags: ['asiatique', 'rapide', 'famille', 'populaire'],
};

export const sampleRecipeDataSectioned = {
  title: 'Lasagne Test',
  description: 'Une lasagne classique pour tester les sections',
  categories: ['Plats principaux', 'Pâtes'],
  prepTime: { min: 30, max: 40 },
  cookTime: { min: 45, max: 60 },
  servings: '6-8',
  difficulty: 'Difficile',
  ingredientsSectioned: [
    {
      title: 'Sauce à la viande',
      items: [
        '500g de boeuf haché',
        '1 boîte de tomates en dés',
        '1 oignon, haché',
      ],
    },
    {
      title: 'Béchamel',
      items: ['3 tasses de lait', '4 c. à soupe de beurre', '4 c. à soupe de farine'],
    },
    {
      title: 'Montage',
      items: ['12 feuilles de lasagne', '2 tasses de fromage râpé'],
    },
  ],
  instructionsSectioned: [
    {
      title: 'Préparer la sauce',
      items: [
        'Faire revenir l\'oignon',
        'Ajouter le boeuf et cuire',
        'Ajouter les tomates',
      ],
    },
    {
      title: 'Préparer la béchamel',
      items: ['Faire fondre le beurre', 'Ajouter la farine', 'Incorporer le lait'],
    },
    {
      title: 'Assembler',
      items: [
        'Alterner sauce, pâtes, béchamel',
        'Terminer avec fromage',
        'Cuire 45 minutes à 375°F',
      ],
    },
  ],
  tags: ['italien', 'confort', 'famille'],
};

export const sampleRecipeUpdate = {
  title: 'Poulet Général Tao Test (Modifié)',
  description: 'Version améliorée de la recette test',
  servings: '6',
  difficulty: 'Facile',
};

/**
 * Mock image file for upload tests
 * Creates a small JPEG-like buffer
 */
export function createMockImageFile(filename = 'test-recipe.jpg'): File {
  // Create a small red square 10x10 JPEG
  const jpegHeader = new Uint8Array([
    0xff, 0xd8, 0xff, 0xe0, 0x00, 0x10, 0x4a, 0x46, 0x49, 0x46,
  ]);

  const blob = new Blob([jpegHeader], { type: 'image/jpeg' });
  return new File([blob], filename, { type: 'image/jpeg' });
}

/**
 * Sample categories for testing category management
 */
export const sampleCategories = [
  'Entrées',
  'Plats principaux',
  'Desserts',
  'Soupes',
  'Salades',
  'Accompagnements',
  'Boissons',
  'Pâtisseries',
];

/**
 * Sample search terms for testing search functionality
 */
export const sampleSearchTerms = {
  common: 'poulet',
  specific: 'général tao',
  ingredient: 'tomate',
  withAccents: 'épices',
  noResults: 'xyzabc123notfound',
};
