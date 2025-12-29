import { Recipe } from '@/types/recipe';

export const fondueParmesanMaison: Recipe = {
  id: 'fondue-parmesan-maison',
  title: 'Fondue parmesan maison',
  description: 'Je les adore surtout durant le temps des fêtes.',
  categories: ['Pâtisseries et desserts'],
  prepTime: { min: 30, max: 30 },
  cookTime: { min: 20, max: 20 },
  servings: 25,
  difficulty: 'Facile',
  ingredients: [
    '6 c. à soupe de beurre',
    '3/4 tasse de farine',
    '1 1/4 tasse de lait',
    '1 jaune d\'œuf',
    '1/2 tasse de mozzarella',
    '1/2 tasse de parmesan',
    'Sel, poivre et paprika au goût',
    '5 blanc d\'œuf',
    'Farine',
    'Chapelure',
    'Tempura',
    'Paprika',
    'Un peu de parmesan',
    'Huile'
  ],
  instructions: [
    'Mélanger les 6 premiers ingrédients.',
    'Assaisonner sel, poivre et paprika.',
    'Faire cuire à feu doux jusqu\'à ce que le fromage soit fondu et que la pâte soit épaisse (comme une boule qui ne colle pas au chaudron).',
    'Réfrigérer la pâte au moins 6 heures et couper ensuite en carrés.',
    'Mélanger la chapelure, le tempura, le paprika et le parmesan.',
    'Passer les carrés dans la farine, dans le blanc d\'œuf et dans le mélange de chapelure.',
    'Cuire dans la friteuse ou dans l\'huile.',
    'Note: On peut aussi faire cuire au four à 350 degrés pendant 20 min.'
  ],
  tags: ['fromage', 'friture', 'fête'],
  marinatingTime: { min: 360, max: 360 },
  notes: 'Source: Chantal Turcotte',
  slug: 'fondue-parmesan-maison'
};
