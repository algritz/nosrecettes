import { Recipe } from '@/types/recipe';

export const poutineSadoMaso: Recipe = {
  id: 'poutine-sado-maso',
  title: 'Poutine Sado-Maso',
  description: 'Une version riche et savoureuse de la poutine avec du canard confit et une sauce onctueuse parfumée aux épices jamaïcaines.',
  categories: ['Plats principaux'],
  prepTime: { min: 40, max: 40 },
  cookTime: { min: 80, max: 80 },
  servings: 3,
  difficulty: 'Facile',
  ingredients: [
    'Pommes de terre 4 grosses pommes de terre Yukon Gold coupées en frites',
    '60 ml de gras de canard',
    'Sel et poivre fraîchement moulu',
    '2 branches de Romarin frais',
    '2 branches de Thym frais',
    'Fromage 500 ml de perles de bocconcini',
    '30 ml de gras de canard',
    '2 grosses échalotes françaises, hachées finement',
    '2 petites gousses d\'ail, hachées',
    '30 ml de moutarde de Dijon',
    '500 ml de vin blanc',
    '625 ml de crème 35%',
    '120 ml de concentré de canard',
    '6 graines de piment de la Jamaïque broyées',
    '1 cuisse de canard confit'
  ],
  instructions: [
    'Préchauffer le four à 400 °F (200 °C).',
    'Déposer les pommes de terre sur une plaque à pâtisserie, ajouter le gras de canard et bien en enrober les bâtonnets.',
    'Saler et poivrer au goût.',
    'Ajouter le romarin et cuire au four de 45 à 60 minutes.',
    'Mettre le confit de canard au four en même temps que les patates et le sortir après 20 minutes, laisser refroidir et couper en petits cubes.',
    'Remettre les cubes au four vers la fin de la cuisson pour les réchauffer.',
    'Faire suer l\'ail et l\'échalote dans le gras de canard.',
    'Verser le vin blanc et laisser réduire.',
    'Ajouter la moutarde de Dijon et le piment, bien remuer.',
    'Ajouter la crème, puis le concentré de canard.',
    'Réduire encore un peu jusqu\'à obtenir une sauce onctueuse, assez épaisse pour coller au dos d\'une cuillère.',
    'Sortir les pommes de terre du four et éponger.',
    'Parsemer de perles de bocconcini, de morceaux de canard confit et napper de sauce à poutine.'
  ],
  tags: ['canard confit', 'sauce onctueuse', 'épices jamaïcaines'],
  notes: 'Lorsque la sauce commence à vouloir se séparer lorsqu\'elle mijote, c\'est qu\'elle est prête : servir immédiatement. Bien éponger les frites avant de les mettre dans les bols.',
  slug: 'poutine-sado-maso'
};
