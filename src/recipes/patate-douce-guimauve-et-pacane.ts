import { Recipe } from '@/types/recipe';

export const patateDouceGuimauveEtPacane: Recipe = {
  id: 'patate-douce-guimauve-et-pacane',
  title: 'Patate douce guimauve et pacane',
  description: 'Étonnamment bon !!!',
  categories: ['Accompagnements', 'Légumes'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 20, max: 20 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '3 à 4 patates douces moyennes, pelées et coupées en rondelles de 1/4 po d\'épaisseur',
    '2 cuillères à soupe de beurre fondu',
    '1 c. À thé sirop d\'érable',
    'Sel casher',
    '1 sac de guimauve',
    '1/2 sac de noix de pécan'
  ],
  instructions: [
    'Préchauffer le four à 400°F.',
    'Sur une grande plaque à pâtisserie, mélanger les patates douces avec le beurre et le sirop d\'érable fondus et les disposer en couche uniforme.',
    'Assaisonner avec du sel.',
    'Cuire au four jusqu\'à tendreté, en retournant à mi-cuisson, environ 20 minutes.',
    'Retirer la plaque à pâtisserie du four et mettre le four à broil.',
    'Garnir chaque patate douce avec une guimauve et faire griller au four jusqu\'à ce qu\'elle soit gonflée et dorée.',
    'Garnir immédiatement chaque guimauve avec une moitié de noix de pécan et servir.'
  ],
  tags: ['grill', 'sucré', 'noix'],
  source: 'David Cloutier',
  slug: 'patate-douce-guimauve-et-pacane'
};
