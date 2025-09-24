// Default recipe categories
export const recipeCategories = [
  'Plats principaux',
  'Desserts',
  'Entrées',
  'Accompagnements',
  'Soupes',
  'Salades',
  'Boissons',
  'Collations'
];

// Helper function to get all categories (from recipes + defaults)
export const getAllCategories = (): string[] => {
  return recipeCategories;
};