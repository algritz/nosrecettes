import { Recipe } from '@/types/recipe'

export const gravlaxDeSaumonALErable: Recipe = {
  id: 'gravlax-de-saumon-a-l-erable',
  title: "Gravlax de saumon à l'érable",
  description:
    "Une recette de gravlax de saumon aromatisé à l'érable, servi en fines tranches avec des croûtons de bagels et du fromage à la crème.",
  categories: ['Végétarien'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 0, max: 0 },
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    "30 ml de sirop d'érable",
    '65 ml de sucre',
    '65 ml de gros sel',
    '570 g de saumon, avec la peau',
    "1/2 bouquet d'aneth, les feuilles et les queues grossièrement hachées",
    '15 ml de poivres mélangés',
  ],
  instructions: [
    'Dans un petit bol, bien mélanger le sucre, le sirop d’érable, le sel et le poivre.',
    'Frotter le saumon avec la moitié de cette marinade.',
    'Placer le saumon dans un bol profond, la peau vers le bas, puis ajouter l’aneth sur le dessus.',
    'Verser le reste de la marinade sur le saumon.',
    'Déposer une pellicule de plastique directement sur le saumon et placer un poids sur la pellicule afin que la chair soit compressée.',
    'Réfrigérer 6 h ou toute une nuit.',
    'Avant de servir, retirer l’aneth et le mélange de sel et de sucre.',
    'Couper le saumon en tranches très minces.',
    'Accompagner de croûtons de bagels et d’un peu de fromage à la crème.',
  ],
  tags: ['érable', 'marinade sèche', 'froid'],
  marinatingTime: { min: 1440, max: 1440 },
  slug: 'gravlax-de-saumon-a-l-erable',
}
