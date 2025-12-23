import { Recipe } from '@/types/recipe';

export const pouletAuFourEntier: Recipe = {
  id: 'poulet-au-four-entier',
  title: 'Poulet au four entier',
  description: 'Poulet entier cuit au four avec sauce au jus de cuisson, servi avec une sauce épaissie.',
  categories: ['Vollaille'],
  prepTime: 5,
  cookTime: 90,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 poulet entier biologique de 4-5 livres',
    '2 cuillères à soupe d\'huile végétale',
    '2 cuillères à soupe de thym séché',
    '1 oignon moyen',
    'Sel de mer au goût',
    '1 tasse d\'eau'
  ],
  instructions: [
    'Rincer le poulet à l\'eau froide.',
    'Badigeonner entièrement la peau du poulet d\'huile végétale.',
    'Saupoudrer le thym et le sel de mer sur le poulet, sur tous les côtés.',
    'Insérer l\'oignon entier dans le centre du poulet.',
    'Déposer dans une rôtissoire ou casserole allant au four, sans couvrir.',
    'Ajouter l\'eau au fond de la rôtissoire (ceci vise à ce que le four reste humide pendant la cuisson et que le poulet demeure tendre et juteux).',
    'Enfourner à 350°F (180°C) pour environ 1h30, ou jusqu\'à ce que le centre du poulet atteigne 185°F.',
    'Lorsque cuit, sortir le poulet de la rôtissoire, couvrir et laisser reposer 5 à 10 minutes.',
    'Pendant ce temps, faire la sauce avec le jus de poulet et le gras au fond de la casserole: mettre la rôtissoire sur le rond de poêle, amener à ébullition le liquide en y ajoutant un épaississant (ex: Bisto ou fécule de maïs, etc.) dilué dans un peu de froid ou de vin blanc, avant de mélanger au jus de poulet.',
    'Faire bouillir jusqu\'à la consistance désirée. Ajouter sel et poivre au besoin.',
    'Découper le poulet et verser la sauce.'
  ],
  tags: ['rôtissage', 'sauce', 'poulet'],
  slug: 'poulet-au-four-entier'
};
