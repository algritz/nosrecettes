import { Recipe } from '@/types/recipe';

export const ragoutDeLapin: Recipe = {
  id: 'ragout-de-lapin',
  title: 'Ragoût de lapin',
  description: '',
  categories: ['Plats principaux'],
  prepTime: 60,
  cookTime: 180,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    'Lapin en morceaux',
    'Beurre',
    'Carottes en bâtonnets',
    'Patates grelots',
    'Oignons hachés grossièrement',
    '3/4 de tasse de miel',
    '4 c. à soupe de moutarde de dijon',
    '2 fonds de gibier',
    'Eau au besoin',
    'Crème 35 %',
    'Fécule de maïs délayée dans du lait au besoin'
  ],
  instructions: [
    'Mettre les carottes et les patates au fond d\'une grosse cocotte.',
    'Faire sauter les morceaux de lapin dans du beurre et mettre sur les carottes et patates.',
    'Faire sauter les oignons dans le restant de beurre et ajouter sur le lapin.',
    'Déglacer avec le fond de gibier.',
    'Ajouter la moutarde et le miel afin d\'obtenir un mélange homogène, puis verser sur le lapin et les légumes.',
    'S\'il manque de liquide, vous pouvez ajouter de l\'eau au besoin.',
    'Cuire 3 heures à 275 F.',
    'Une fois que le tout est cuit, verser le bouillon du ragoût dans une casserole et faire épaissir 20 minutes avec de la crème 35%. Ajouter de la fécule de maïs au besoin.',
    'Une fois épaissi, remettre la sauce avec les légumes dans la cocotte.',
    'Retirer le lapin, désosser, et remettre le lapin désossé dans la cocotte avec les légumes cuits.',
    'Servir chaud.'
  ],
  tags: ['ragoût', 'lapin', 'miel'],
  notes: 'Vous pouvez remplacer le miel par du sirop d\'érable.',
  slug: 'ragout-de-lapin'
};
