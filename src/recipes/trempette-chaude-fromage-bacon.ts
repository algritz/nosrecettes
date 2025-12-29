import { Recipe } from '@/types/recipe';

export const trempetteChaudeFromageBacon: Recipe = {
  id: 'trempette-chaude-fromage-bacon',
  title: 'Trempette chaude fromage bacon',
  description: 'Une trempette chaude et fromagée avec bacon, parfaite pour accompagner des tostitos ou autres snacks.',
  categories: ['Entrées'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 35, max: 35 },
  servings: 1,
  difficulty: 'Facile',
  ingredients: [
    '1 boîte de fromage à la crème à température ambiante (8 oz)',
    '2 tasses de crème sure (16 oz)',
    '1 1/2 tasse de fromage râpé cheddar plus 2 c. à soupe pour saupoudrer sur le dessus',
    '1 tasse de bacon cuit émietté (6-8 tranches)',
    '1/3 tasse d\'oignons verts hachés et un peu plus pour la décoration'
  ],
  instructions: [
    'Préchauffer le four à 375 F.',
    'Dans un bol de taille moyenne, mélanger tous les ingrédients jusqu\'à consistance homogène.',
    'Verser dans un moule à tarte de 9 pouces ou un plat de cuisson, puis saupoudrer les 2 c. à soupe de cheddar supplémentaire sur le dessus.',
    'Cuire au four pendant 30-35 minutes ou jusqu\'à ce que le fromage soit fondu et doré sur le dessus.',
    'Décorer de quelques oignons verts et servir avec des tostitos ou autres.'
  ],
  tags: ['fromage', 'bacon', 'four'],
  slug: 'trempette-chaude-fromage-bacon'
};
