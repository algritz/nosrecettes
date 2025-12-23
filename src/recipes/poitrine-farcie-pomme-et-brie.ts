import { Recipe } from '@/types/recipe';

export const poitrineFarciePommeEtBrie: Recipe = {
  id: 'poitrine-farcie-pomme-et-brie',
  title: 'Poitrine farcie pomme et brie',
  description: 'Une recette de poitrines de poulet farcies aux pommes et brie, nappées d\'une sauce miel citronnée, cuites au four.',
  categories: ['Vollaille', 'Plats principaux'],
  prepTime: 20,
  cookTime: 40,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 c. à table beurre 30 ml',
    '1 c. à thé 5 ml',
    '2 c. à thé huile d’olive 10 ml',
    'sel, poivre',
    '4 poitrines de poulet sans peau d’environ 5 oz (140 g) chacune',
    '2 pomme pelée et râpée',
    '2 oignon vert émincé',
    '8 tranches de brie (enlever la croûte)',
    'le jus de 2 citron',
    '6 c. à table miel 90 ml'
  ],
  instructions: [
    'Dans un poêlon, chauffer 2 c. à table (30 ml) de beurre et l’huile à feu moyen jusqu’à l’obtention d’une couleur noisette.',
    'Saler et poivrer les poitrines de poulet, les colorer des deux côtés (3 à 4 minutes en tout), les retirer du poêlon et laisser refroidir.',
    'Dans le même poêlon, ajouter 1 c. à thé (5 ml) de beurre, faire revenir à feu doux la pomme et l’oignon vert.',
    'À l’aide d’un couteau bien tranchant, ouvrir les poitrines en portefeuille, mais sans les diviser.',
    'Répartir la préparation dans les poitrines, ajouter le brie, refermer.',
    'Ajouter dans le poêlon le jus de citron et le miel, porter à ébullition, déposer les poitrines de poulet, les napper de miel et mettre au four préchauffé à 350°F (180°C) de 12 à 15 min.',
    'Arroser à quelques reprises en cours de cuisson.',
    'Trancher les poitrines en biais, les déposer dans les assiettes et napper de miel citronné.'
  ],
  tags: ['poulet farci', 'miel', 'citron'],
  slug: 'poitrine-farcie-pomme-et-brie'
};
