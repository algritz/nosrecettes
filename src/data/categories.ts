// Default recipe categories
export const recipeCategories = [
  'Accompagnements',
  'Agneau',
  'Amuse-geules',
  'Barbecue',
  'Boeuf',
  'Condiments',
  'Cuisson sous-vide',
  'Desserts',
  'Déjeuners',
  'Entrées',
  'Fruits',
  'Fruits de mer',
  'Fumoir',
  'Gibier à plumes',
  'Gibier à poils',
  'Légumes',
  'Marinade',
  'Mijoteuse',
  'Pain',
  'Patates',
  'Plats principaux',
  'Poisson',
  'Porc',
  'Pâtes',
  'Pâtisseries et desserts',
  'Pâtés',
  'Salades',
  'Sandwichs',
  'Sauces',
  'Soupes',
  'Tartares',
  'Trempettes',
  'Veau',
  'Vollaille',
  'Végétarien'
];

// Helper function to get all categories (from recipes + defaults)
export const getAllCategories = (): string[] => {
  return recipeCategories;
};