import { Recipe } from '@/types/recipe';

export const saladeAuxPommesEtAuxNoix: Recipe = {
  id: 'salade-aux-pommes-et-aux-noix',
  title: 'Salade aux pommes et aux noix',
  description: 'Une salade fraîche combinant pommes, noix, céleri et guimauves, assaisonnée de mayonnaise et décorée de quartiers de pommes.',
  categories: ['Salades'],
  prepTime: 15,
  cookTime: 0,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 grosses pommes non pelées en quartiers',
    '1 c. à table de jus de citron ou plus au besoin',
    '1 tasse de guimauves miniatures',
    '1 tasse de céleri haché',
    '¼ de tasse noix de Grenoble hachées ou de pacanes',
    '3 c. à table de mayonnaise',
    'Laitue',
    'Sel et poivre au goût'
  ],
  instructions: [
    'Couper les pommes en dés et arroser de jus de citron pour qu\'elles gardent leur couleur.',
    'Déchiqueter la laitue et ajouter les noix hachées, le céleri haché et la mayonnaise pour mouiller.',
    'Assaisonner de sel et de poivre.',
    'Décorer de quartiers de pommes non pelées.',
    'Mettre les guimauves à la dernière minute et servir.'
  ],
  tags: ['salade', 'fruit', 'noix'],
  slug: 'salade-aux-pommes-et-aux-noix'
};
