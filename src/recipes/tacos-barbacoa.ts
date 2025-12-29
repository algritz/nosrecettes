import { Recipe } from '@/types/recipe';

export const tacosBarbacoa: Recipe = {
  id: 'tacos-barbacoa',
  title: 'Tacos barbacoa',
  description: 'Un délicieux tacos à la viande de bœuf effilochée mijotée avec des épices, servi avec une salade de chou fraîche et croquante.',
  categories: ['Plats principaux', 'Tacos'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 540, max: 540 },
  servings: 8,
  difficulty: 'Facile',
  ingredients: [
    '2 lb de rôti de bœuf désossé, paré de gras et coupé en 4 morceaux',
    '1 paquet de mélange d\'assaisonnement pour barbacoa au bœuf Old El Paso',
    '1 tasse d\'oignons hachés',
    '2 gousses d\'ail, hachées finement',
    '1 piment jalapeño moyen, épépiné et haché finement',
    '3/4 tasse de sauce barbecue de votre choix (1/2 + 1/4)',
    '1/4 tasse d\'eau',
    '2 c. à soupe de vinaigre de cidre',
    '3 c. à soupe de mayonnaise',
    '1 c. à soupe de jus de citron vert frais',
    '1 1/2 c. à café de miel',
    '1/4 c. à café de sel',
    '3 tasses de chou vert râpé',
    '1/4 tasse de coriandre fraîche hachée',
    '1 paquet de bols à tortilla tendre Old El Paso'
  ],
  instructions: [
    'Badigeonner une mijoteuse d’huile à cuisson.',
    'Dans la mijoteuse, mélanger le bœuf, l\'assaisonnement, les oignons, l\'ail, le piment jalapeño, 1/2 tasse de sauce barbecue, l\'eau et le vinaigre.',
    'Couvrir; cuire à feu élevé de 4 à 5 heures ou à feu doux de 8 à 9 heures ou jusqu\'à tendreté.',
    'Transférer le bœuf sur une planche à découper; déchiqueter avec deux fourchettes.',
    'Remettre la viande dans la mijoteuse avec 1/4 tasse de sauce barbecue restante.',
    'Remuer pour combiner.',
    'Dans un bol moyen, battre la mayonnaise, le jus de lime, le miel et le sel au fouet.',
    'Ajouter le chou et la coriandre. Mélanger pour enrober.',
    'Faire chauffer les bols de tortilla comme indiqué sur l\'emballage.',
    'À l\'aide d\'une cuillère, retirer le bœuf du liquide de cuisson et répartir dans des bols de tortilla.',
    'Garnir de salade de chou.'
  ],
  tags: ['mijoteuse', 'barbecue', 'tacos'],
  slug: 'tacos-barbacoa'
};
