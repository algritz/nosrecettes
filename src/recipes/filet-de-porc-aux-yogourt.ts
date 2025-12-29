import { Recipe } from '@/types/recipe';

export const filetDePorcAuxYogourt: Recipe = {
  id: 'filet-de-porc-aux-yogourt',
  title: 'Filet de porc aux yogourt',
  description: '',
  categories: ['Vollaille'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 20, max: 20 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 filet de porc',
    '1 tasse de yogourt nature',
    '1 c. à soupe de gingembre, râpé',
    '2 gousses d\'ail, hachées',
    '1 c. à soupe de poudre de cari',
    '2 c. à soupe de tiges de coriandre, hachées',
    '1 c. à soupe de paprika',
    '2 c. à thé de jus de citron',
    '1 poignée de feuilles de coriandre'
  ],
  instructions: [
    'Mélanger tous les ingrédients, sauf le porc et les feuilles de coriandre',
    'Diviser ce mélange en deux',
    'Faire mariner le porc dans une moitié du mélange (de 4 heures minimum)',
    'Ajouter les feuilles de coriandre dans l\'autre moitié, ce mélange servira de sauce froide',
    'Faire cuire au BBQ 15-20 minutes, selon la taille du filet, en tournant à mi-cuisson'
  ],
  tags: ['marinade sèche', 'barbecue'],
  slug: 'filet-de-porc-aux-yogourt'
};
