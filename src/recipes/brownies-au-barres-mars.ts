import { Recipe } from '@/types/recipe';

export const browniesAuBarresMars: Recipe = {
  id: 'brownies-au-barres-mars',
  title: 'Brownies au barres Mars',
  description: 'Brownies au barres Mars',
  categories: ['Pâtisseries et desserts'],
  prepTime: 25,
  cookTime: 14,
  servings: 12,
  difficulty: 'Facile',
  ingredients: [
    '170 g (6 oz) de chocolat noir, haché grossièrement',
    '170 g (3/4 tasse) de beurre non salé',
    '240 g (1 tasse) de cassonade légèrement tassée',
    '2 oeufs',
    '1 c. à thé de vanille',
    '70 g (1/2 tasse) de farine tout usage non blanchie',
    '8 petites barres Mars de 13 g, chacune coupée en 3 tranches'
  ],
  instructions: [
    'Placer la grille au centre du four. Préchauffer le four à 180 °C (350 °F).',
    'Chemiser 12 moules à muffins de caissettes en papier ou en silicone.',
    'Dans un bol, au bain-marie ou au four à micro-ondes, fondre le chocolat avec le beurre.',
    'Ajouter la cassonade et mélanger au fouet 1 minute.',
    'Ajouter les oeufs et la vanille et fouetter à nouveau 1 minute.',
    'Ajouter la farine et mélanger 1 minute.',
    'Répartir la pâte dans les moules.',
    'Placer un morceau de barre Mars au centre de chaque brownie en l’enfonçant un peu dans la pâte et en déposer un autre sur le dessus.',
    'Cuire au four 15 minutes ou jusqu’à ce qu’un cure-dents inséré au centre du gâteau, en évitant la barre, en ressorte avec des grumeaux et pas complètement propre.',
    'Laisser tempérer les brownies environ 2 heures avant de les manger.'
  ],
  tags: ['chocolat', 'mars', 'gâteaux'],
  slug: 'brownies-au-barres-mars'
};
