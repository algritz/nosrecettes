import { Recipe } from '@/types/recipe'

export const sauceAuPoivres: Recipe = {
  id: 'sauce-au-poivres',
  title: 'Sauce au poivres',
  description:
    "Sauce au poivre que nous avons extrait d'une autre recette, car elle mérite d'être sa propre recette.",
  categories: ['Sauces'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 20, max: 20 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 c. à soupe de grains de poivre',
    '2 c. à soupe de beurre',
    '1 échalotte française finement hachée',
    '100 ml de cognac ou brandy',
    '250 ml de crème fraiche épaisse',
    '1 c. à soupe de moutarde de Dijon',
    'Sel au goût',
  ],
  instructions: [
    'Écrasez légèrement les grains de poivre noir avec un mortier et un pilon ou le dos d’une cuillère pour les concasser. Cela permet de libérer leurs arômes tout en conservant une texture intéressante.',
    'Dans une casserole, faites fondre les deux cuillères à soupe de beurre à feu moyen. Veillez à ne pas le brûler, il doit juste fondre et devenir mousseux.',
    'Ajoutez l’échalote finement hachée dans la casserole et faites-la revenir jusqu’à ce qu’elle devienne translucide. Cela prendra environ 3 à 5 minutes.',
    'Incorporez les grains de poivre concassés et faites cuire pendant 1 à 2 minutes supplémentaires pour libérer leurs arômes dans le beurre et l’échalote.',
    'Versez les 100 ml de cognac ou de brandy dans la casserole. Laissez mijoter pendant quelques minutes jusqu’à ce que le liquide ait réduit de moitié. Cela intensifie les saveurs et évapore l’alcool.',
    'Ajoutez les 250 ml de crème fraîche épaisse et la cuillère à soupe de moutarde de Dijon. Mélangez bien pour obtenir une consistance homogène.',
    'Laissez la sauce mijoter à feu doux pendant environ 5 à 10 minutes, jusqu’à ce qu’elle épaississe légèrement. Remuez de temps en temps pour éviter qu’elle ne colle au fond de la casserole.',
    'Goûtez la sauce et ajoutez du sel selon votre goût. Mélangez bien.',
    'Servez la sauce au poivre chaude, idéale pour accompagner une viande grillée ou un steak.',
  ],
  tags: ['poivre', 'sauce', 'cognac'],
  slug: 'sauce-au-poivres',
}
