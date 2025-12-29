import { Recipe } from '@/types/recipe';

export const ramenAuBUfMongol: Recipe = {
  id: 'ramen-au-b-uf-mongol',
  title: 'Ramen au bœuf Mongol',
  description: 'Un ramen savoureux avec un bœuf mariné, une sauce soja sucrée et des légumes sautés, servi avec des nouilles ramen.',
  categories: ['Plats principaux'],
  prepTime: { min: 25, max: 25 },
  cookTime: { min: 30, max: 30 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    'bifteck de flanc de 1½ lb',
    '1/4 tasse fécule de maïs',
    '1/4 tasse d’huile végétale',
    '1 poivron vert, tranché en fines lanières',
    '8 oz de nouilles ramen sec',
    '3 oignons verts, hachés',
    'Graines de sésame au goût',
    '2 c. à soupe d’huile de sésame',
    '3/4 tasse de sauce de soja, faible en sodium',
    '⅔ tasse de cassonade',
    '1¼ tasse de bouillon de poulet',
    '4 gousses d’ail, hachées',
    '¼ c. à thé flocons de piments rouges'
  ],
  instructions: [
    'Trancher le bifteck de flanc en petits morceaux minces dans le sens inverse de la fibre.',
    'Dans un sac grand ziploc, ajouter la fécule de maïs et le bœuf. Fermer le sac et bien agiter jusqu\'à ce que chaque morceau soit recouvert de fécule de maïs.',
    'Dans une poêle anti-adhésive, faire chauffer l’huile végétale. Lorsque l’huile est chaude, ajouter le bœuf et cuire jusqu\'à ce qu\'il soit doré. Faire cuire quelques morceaux à la fois si vous ne voulez pas que les morceaux de bifteck se collent. Ajouter de l\'huile si nécessaire.',
    'Retirer le bœuf de la poêle et réserver dans une assiette. Vider l’huile de la poêle.',
    'Ajouter les poivrons dans la poêle et les faire sauter jusqu\'à ce qu\'ils deviennent mous. Retirer les poivrons et mettre de côté avec le bœuf.',
    'Dans la même poêle, ajouter les ingrédients de la sauce : huile de sésame, sauce soja, cassonade, ail, bouillon de poulet et flocons de piments rouges. Remuer et faire cuire à feu moyen jusqu\'à ce que la sauce épaississe et réduise d’environ un quart (environ 10 minutes). Ne pas trop réduire pour qu\'il reste de la sauce pour les nouilles.',
    'Pendant ce temps, faire cuire les nouilles ramen selon les instructions sur l’emballage.',
    'Remettre le bœuf et les poivrons dans la poêle et mélanger avec la sauce.',
    'Ajouter les nouilles ramen cuites dans la poêle et mélanger le tout.',
    'Garnir d’oignons verts et de graines de sésame si désiré, puis servir.'
  ],
  tags: ['sauté', 'sauce soja', 'nouilles ramen'],
  slug: 'ramen-au-b-uf-mongol'
};
