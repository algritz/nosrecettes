import { Recipe } from '@/types/recipe';

export const sexyPoutine: Recipe = {
  id: 'sexy-poutine',
  title: 'Sexy poutine',
  description: 'Une recette de poutine raffinée avec pommes de terre croustillantes, confit de canard, et sauce onctueuse au vin blanc et crème.',
  categories: ['Plats principaux', 'Végétarien'],
  prepTime: 40,
  cookTime: 80,
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    'Pommes de terre 4 grosses pommes de terre Yukon Gold coupées en frites',
    '60 ml de gras de canard',
    'Sel et poivre fraîchement moulu',
    '2 branches de Romarin et ou de Thym frais',
    'Fromage 1 gros plat de bébé de bocconcini coupé en 8',
    '30 ml de gras de canard',
    '2 grosses échalotes françaises, hachées finement',
    '2 petites gousses d\'ail, hachées',
    '30 ml de moutarde de Dijon',
    '500 ml de vin blanc',
    '625 ml de crème 35%',
    '½ tasse de bouillon de canard'
  ],
  instructions: [
    'Préchauffer le four à 400 °F (200 °C).',
    'Déposer les pommes de terre sur une plaque à pâtisserie, ajouter le gras de canard et bien en enrober les bâtonnets.',
    'Saler et poivrer au goût.',
    'Ajouter le romarin et cuire au four de 45 à 60 minutes.',
    'Mettre le confit de canard au four en même temps que les patates et le sortir après 20 minutes, laisser refroidir et couper en petits cubes.',
    'Remettre les cubes au four vers la fin de la cuisson pour les laisser réchauffer.',
    'Faire suer l\'ail et l\'échalote dans le gras de canard.',
    'Verser le vin blanc et laisser réduire.',
    'Ajouter la moutarde de Dijon et le piment de Jamaïque broyé, bien remuer.',
    'Ajouter la crème, puis le concentré de canard, réduire encore un peu jusqu\'à obtenir une sauce onctueuse.',
    'Sortir les pommes de terre du four et éponger.',
    'Parsemer de perles de bocconcini et napper de sauce à poutine.'
  ],
  tags: ['poutine', 'confit de canard', 'vin blanc'],
  source: 'Antoine Sicotte',
  wine: 'Vin Blanc "Aromatique et rond"',
  notes: 'Cette recette est extrêmement riche. Même si les portions semblent petites, votre foie ne pourra pas en supporter plus.',
  slug: 'sexy-poutine'
};
