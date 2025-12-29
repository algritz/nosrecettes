import { Recipe } from '@/types/recipe'

export const saladeDePatateStyleKansasCity: Recipe = {
  id: 'salade-de-patate-style-kansas-city',
  title: 'Salade de patate style Kansas City',
  description:
    'Une salade de pommes de terre savoureuse à la Kansas City, parfumée avec un rub épicé et une sauce barbecue, parfaite pour accompagner des côtes levées.',
  categories: ['Salades'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 20, max: 20 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    "3 livres de patates rouges, coupées en morceaux d'un demi-pouce",
    '3 cuillères à soupe de rub style Kansas City',
    '1 1/2 cuillère à thé de sel (sera divisé plus tard)',
    '1/4 tasse sauce barbecue style Kansas City',
    "3 cuillères à soupe d'huile de canola",
    '2 cuillères à soupe vinaigre de cidre',
    '2 cuillères à thé de moutarde jaune',
    '1 tasse de céleri coupé finement',
    "1/2 tasse d'oignon coupé finement",
    '1/4 tasse de persil frais haché finement',
    '1/2 cuillère à thé de poivre noir fraîchement moulu',
  ],
  instructions: [
    "Faire bouillir les patates, couvrir d'eau et ajouter le rub Kansas City, ainsi qu'une cuillère à thé de sel. Laisser mijoter jusqu'à ce que les patates soient bien cuites.",
    'Égoutter.',
    "Combiner la sauce BBQ Kansas City, l'huile, le vinaigre et la moutarde dans un grand bol, puis mélanger.",
    'Ajouter les patates chaudes, mélanger pour couvrir les patates de la sauce.',
    'Ajouter le reste de sel, le céleri, les oignons, le persil et le poivre. Mélanger et laisser reposer 20 minutes avant de mettre au frigo.',
  ],
  tags: ['barbecue', 'salade', 'épicé'],
  accompaniment: 'Idéal avec les côtes levées Kansas City',
  marinatingTime: { min: 180, max: 180 },
  slug: 'salade-de-patate-style-kansas-city',
}
