import { Recipe } from '@/types/recipe';

export const salsaMaison: Recipe = {
  id: 'salsa-maison',
  title: 'Salsa maison',
  description: 'Celle de l\'épicerie ne sera plus jamais aussi bonne',
  categories: ['Condiments'],
  prepTime: { min: 30, max: 30 },
  cookTime: { min: 90, max: 90 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '8 tasses de tomates coupées en dés',
    '4 tasses de piments verts coupés en dés',
    '2 tasses d’oignons coupés en dés',
    '½ tasse de vinaigre blanc',
    '¼ de tasse de vinaigre balsamique',
    '½ jalapeños coupé finement',
    '4 gousses d’ail',
    '1 boîte de pâte de tomates de 10 onces',
    '2 c. à soupe de sucre',
    '1 c. à soupe de sel',
    '2 c. à thé de paprika',
    '1 c. à thé d’origan',
    '1 c. à thé de persil'
  ],
  instructions: [
    'Préparer tous les légumes et déposer dans une grande marmite.',
    'Ajouter les vinaigres, l’ail, le sucre, le sel, le paprika, l’origan et le persil.',
    'Porter à ébullition pendant 5 minutes.',
    'Baisser le feu, laisser mijoter 1h30.',
    'Ajouter la pâte de tomates.',
    'Canner'
  ],
  tags: ['condiments', 'épicé', 'sauce'],
  notes: 'Source: Janie Cloutier',
  slug: 'salsa-maison'
};
