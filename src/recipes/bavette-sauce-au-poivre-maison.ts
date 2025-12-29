import { Recipe } from '@/types/recipe'

export const bavetteSauceAuPoivreMaison: Recipe = {
  id: 'bavette-sauce-au-poivre-maison',
  title: 'Bavette sauce au poivre maison',
  description:
    "Une recette de bavette de boeuf accompagnée d'une sauce au poivre maison riche et crémeuse, parfaite pour un plat savoureux.",
  categories: ['Vollaille'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 15, max: 15 },
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    'Une bonne pièce de bavette de boeuf',
    '2 cuillères à soupe de poivre noir grossièrement moulu',
    '2 cuillères à café de sel casher',
    "1 cuillère à soupe d'huile végétale",
    '2 cuillères à soupe de beurre, divisé',
    '1 tasse de crème 35%',
    '⅓ tasse de brandy ou Cognac',
    '1 cuillère à soupe de moutarde de Dijon',
  ],
  instructions: [
    'Préparer le four ou le BBQ à 350°C.',
    "Assaisonnez généreusement le bifteck avec le sel et le poivre noir grossièrement moulu, en veillant à enrober abondamment la surface entière de la viande. En utilisant vos mains, appuyez sur l'assaisonnement pour que le tout colle de façon uniforme.",
    "Chauffer l'huile végétale et 1 cuillère à soupe de beurre dans une grande poêle à feu moyen-vif jusqu'à ce que tout soit bien chaud.",
    "Ajouter le bifteck à la poêle et le saisir d'un côté pendant 4 minutes. Tourner et saisir l'autre côté pendant 4 minutes.",
    'Déposer dans un plat de pirex et enfourner de 10-15 minutes pour terminer la cuisson.',
    "Réduisez la chaleur à moyen de la poêle qui a servi à saisir votre viande et ajoutez le brandy ou cognac. Laissez l'alcool cuire pendant environ 1 minute tout en brassant avec un fouet pour gratter tous les morceaux dorés restant dans le fond de la casserole.",
    "Une fois que l'alcool a réduit de moitié, ajouter la crème et continuer à fouetter jusqu'à ce que combiné.",
    "Ajouter la moutarde de Dijon et le beurre et continuer à cuire jusqu'à ce que le mélange commence à diminuer et à épaissir, environ 5-7 minutes.",
    "La sauce devrait avoir une consistance riche et enrober le dos d'une cuillère.",
    'Une fois la viande reposée, tranchez le bifteck en morceaux de ½ pouce. Verser la sauce à la crème sur le dessus et servir.',
  ],
  tags: ['sauce crémeuse', 'poivre', 'bœuf'],
  images: [
    {
      small:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/bavette-sauce-au-poivre-maison',
      medium:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/bavette-sauce-au-poivre-maison',
      large:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/bavette-sauce-au-poivre-maison',
    },
  ],
  wine: 'Ventisquero Pinot Noir Grey Single Block',
  source: 'David Cloutier',
  slug: 'bavette-sauce-au-poivre-maison',
}
