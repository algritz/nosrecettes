import { Recipe } from '@/types/recipe';

export const saladeDeSaumonBlt: Recipe = {
  id: 'salade-de-saumon-blt',
  title: 'Salade de saumon BLT',
  description: 'Une salade fraîche de saumon, bacon, légumes et vinaigrette crémeuse, parfaite pour un déjeuner léger ou un dîner estival.',
  categories: ['Salades'],
  prepTime: 10,
  cookTime: 20,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    'un filet pour 4 personne de saumon',
    '1/4 c.à thé sel casher',
    '1/4 c. à thé de poivre noir fraichement moulu',
    'Une laitue romaine hachée',
    '2 tasses tomates cerises, coupées en deux',
    '2 tasses croûtons',
    '1 avocat, coupé en deux, pelé et coupé en dés',
    '6 tranches de bacon cuit, haché',
    '1/3 tasse Mayonnaise',
    '1/2 tasse yogourt grec nature',
    'Jus de 1 citron',
    '2 gousses d\'ail émincées',
    '1 c. à thé vinaigre de vin blanc',
    '1 c. à thé de miel',
    'Poivre au goût'
  ],
  instructions: [
    'Préchauffer le four à 400 °F.',
    'Déposer le saumon sur une plaque à pâtisserie tapissée et saupoudrer uniformément de sel et de poivre.',
    'Cuire jusqu\'à ce qu\'ils soient dorés et croustillants sur les bords, de 18 à 20 minutes.',
    'Retirer du four et laisser refroidir.',
    'Mélanger la laitue, les tomates, les croûtons, l\'avocat et le bacon ensemble.',
    'Fouetter tous les ingrédients de la vinaigrette ensemble et assaisonner de sel et de poivre.',
    'Hacher le saumon et mélanger dans la salade avec la vinaigrette.',
    'Servir immédiatement.'
  ],
  tags: ['saumon', 'bacon', 'salade'],
  slug: 'salade-de-saumon-blt'
};
