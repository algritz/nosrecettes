import { Recipe } from '@/types/recipe';

export const filetDePorcALaMoutardeEtALAil: Recipe = {
  id: 'filet-de-porc-a-la-moutarde-et-a-l-ail',
  title: 'Filet de porc à la moutarde et à l\'ail',
  description: 'Une marinade savoureuse pour un filet de porc, à faire griller au barbecue après une marinade de plusieurs heures.',
  categories: ['Porc', 'Plats principaux'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 20, max: 20 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 filet de porc paré (environ 1 lb/500 g)',
    '3 c. à table (45 ml) moutarde à l\'ancienne',
    '1 c. à table (15 ml) huile végétale',
    '1 c. à table (15 ml) vinaigre de riz',
    '2 c. à thé (10 ml) cassonade tassée',
    '2 c. à thé (10 ml) huile de sésame',
    '1/4 c. à thé (1 ml) sel',
    '1/4 c. à thé (1 ml) poivre noir du moulin',
    '2 gousses d\'ail hachées finement'
  ],
  instructions: [
    'Mélanger tous les ingrédients de la marinade avec le filet de porc et faire mariner.',
    'Égoutter, faire cuire sur le BBQ.'
  ],
  tags: ['barbecue', 'marinade sèche', 'porc'],
  marinatingTime: { min: 240, max: 240 },
  slug: 'filet-de-porc-a-la-moutarde-et-a-l-ail'
};
