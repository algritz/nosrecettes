// Default recipe categories
export const recipeCategories = [
  'Accompagnements',
  'Collations',
  'Desserts',
  'Entrées',
  'Plats principaux',
  'Salades',
  'Soupes'
];

// Helper function to get all categories (from recipes + defaults)
export const getAllCategories = (): string[] => {
  return recipeCategories;
};