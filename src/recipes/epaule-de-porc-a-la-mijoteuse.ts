import { Recipe } from '@/types/recipe';

export const epauleDePorcALaMijoteuse: Recipe = {
  id: 'epaule-de-porc-a-la-mijoteuse',
  title: 'Épaule de porc à la mijoteuse',
  description: 'Une épaule de porc mijotée avec une marinade de moutarde et d\'épices, cuite lentement pour une tendreté optimale.',
  categories: ['Vollaille', 'Plats principaux'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 360, max: 360 },
  servings: 6,
  difficulty: 'Facile',
  ingredients: [
    '1 épaule de porc de 3-4 livres',
    '1 ½ c. à thé de moutarde de Dijon',
    '¾ c. à thé de moutarde en poudre',
    '1 ½ c. à thé de moutarde jaune',
    '1/8 tasse de cassonade bien tassée',
    '1 c. à soupe d\'épice à marinade',
    '175 ml de bouillon de poulet',
    '1 oignon en quartiers (j\'ai mis un oignon rouge)'
  ],
  instructions: [
    'Mélanger ensemble les moutardes, la cassonade, le bouillon de poulet et les épice à marinade.',
    'Mettre l\'épaule de porc dans la mijoteuse avec les quartiers d’oignon.',
    'Versez le mélange des moutardes sur le porc.',
    'Cuire 6 heures à high.'
  ],
  tags: ['mijoteuse', 'marinade', 'porc'],
  slug: 'epaule-de-porc-a-la-mijoteuse'
};
