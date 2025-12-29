import { Recipe } from '@/types/recipe';

export const sauceAuxAbricotsEtAuxPrunes: Recipe = {
  id: 'sauce-aux-abricots-et-aux-prunes',
  title: 'Sauce aux abricots et aux prunes',
  description: '',
  categories: ['Sauces'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 20, max: 20 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '100 ml d\'eau',
    '2 prunes, en quartiers et sans noyaux',
    '1 abricot, haché',
    '30 ml de sucre',
    '30 ml de miel liquide',
    '1 bâton de cannelle',
    '1 anis étoilé',
    'Le jus d\'une demi-lime'
  ],
  instructions: [
    'Mettre l’eau dans une petite casserole et porter à ébullition.',
    'Ajouter les prunes, l’abricot, le sucre, le miel, la cannelle et l’anis étoilé, et cuire jusqu’à ce que le mélange ait réduit en une sauce collante.',
    'Enlever du feu et mélanger en ajoutant le jus de lime.'
  ],
  tags: ['sauce', 'fruits', 'réduction'],
  slug: 'sauce-aux-abricots-et-aux-prunes'
};
