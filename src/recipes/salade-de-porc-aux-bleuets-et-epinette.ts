import { Recipe } from '@/types/recipe';

export const saladeDePorcAuxBleuetsEtEpinette: Recipe = {
  id: 'salade-de-porc-aux-bleuets-et-epinette',
  title: 'Salade de porc aux bleuets et épinette',
  description: 'Une salade rafraîchissante avec porc mariné dans une vinaigrette aux bleuets et épinette, accompagnée de fruits frais et de salade.',
  categories: ['Salades'],
  prepTime: { min: 25, max: 25 },
  cookTime: { min: 20, max: 20 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    'Vinaigrette bleuets & épinette noire de marque épicéa',
    '1 filet de porc',
    '2 pêches',
    '16 à 20 fraises',
    '12 tomates cerises',
    'Petite botte de ciboulette fraîche',
    'Mélange de salade à votre goût'
  ],
  instructions: [
    'Faire mariner le porc dans la vinaigrette bleuets & épinette noire au minimum 6h.',
    'Faire cuire le porc sur le grill 15 à 20 minutes selon vos goûts.',
    'Une fois cuit, le laisser reposer 5 minutes couvert d\'un papier d\'aluminium.',
    'Mettre le mélange de salade dans quatre plats.',
    'Couper la pêche en gros dés, les fraises en deux et les tomates en quatre et en verser dans les quatre plats.',
    'Trancher le porc et le mettre sur les salades.',
    'Arroser le tout avec la vinaigrette bleuets & épinette noire.'
  ],
  tags: ['marinade sèche', 'grill', 'frais'],
  marinatingTime: { min: 360, max: 360 },
  notes: 'La vinaigrette bleuets & épinette noire n\'est pas disponible à l\'épicerie. Disponible au marché du Vieux-port de Québec au comptoir de Épicéa.',
  slug: 'salade-de-porc-aux-bleuets-et-epinette'
};
