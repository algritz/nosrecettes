import { Recipe } from '@/types/recipe'

export const filetDePorcFacileEnSauceSucree: Recipe = {
  id: 'filet-de-porc-facile-en-sauce-sucree',
  title: 'Filet de porc facile en sauce sucrée',
  description: '',
  categories: ['Porc', 'Plats principaux'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 45, max: 45 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 filets de porc',
    '3/4 tasse de sauce chili',
    "3/4 tasse de sirop d'érable",
  ],
  instructions: [
    'Tout mélanger et mariner 8 à 12 heures minimum',
    'Faire cuire au four à 350 F environ 35-45 minutes',
  ],
  tags: ['sauce sucrée', 'marinade', 'four'],
  marinatingTime: { min: 480, max: 480 },
  notes: 'Excellent dépanneur la semaine',
  slug: 'filet-de-porc-facile-en-sauce-sucree',
}
