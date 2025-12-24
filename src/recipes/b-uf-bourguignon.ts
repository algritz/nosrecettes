import { Recipe } from '@/types/recipe';

export const bUfBourguignon: Recipe = {
  id: 'b-uf-bourguignon',
  title: 'Bœuf bourguignon',
  description: 'Un classique ragoût de bœuf mijoté avec légumes et épices, servi chaud.',
  categories: ['Plats principaux'],
  prepTime: 25,
  cookTime: 180,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 tasse de bouillon (consommé)',
    '2 c. à table de pâte de tomate',
    '1 lb de bœuf maigre (cube)',
    'huile d\'olive',
    '½ bière',
    '4 carottes',
    '1 oignon moyen haché',
    '2 branches de céleri haché',
    '1 feuille de laurier',
    '¼ de c. à thé de thym',
    '1 c. à thé de persil',
    '1 c. à table de fécule de maïs',
    '2 c. à table d\'eau'
  ],
  instructions: [
    'Faire revenir le bœuf dans le beurre et ajouter l\'oignon et le céleri hachés.',
    'Ajouter le bouillon, les légumes et les épices.',
    'Cuire à 325 F à 350 F entre 2 et 3 heures.',
    'Une fois cuit, ajouter 1 c. à table de fécule de maïs dissoute dans 2 c. à table d\'eau pour épaissir.'
  ],
  tags: ['ragoût', 'mijoté', 'bœuf'],
  slug: 'b-uf-bourguignon'
};
