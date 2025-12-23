import { Recipe } from '@/types/recipe';

export const roastBeefMoutardesEtVinRouge: Recipe = {
  id: 'roast-beef-moutardes-et-vin-rouge',
  title: 'Roast beef moutardes et vin rouge',
  description: 'Un délicieux roast beef cuit au four avec une sauce à base de moutarde, vin rouge, champignons et oignons perlés, reposant avant de trancher pour une texture parfaite.',
  categories: ['Plats principaux'],
  prepTime: 15,
  cookTime: 40,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '15 ml d’huile d’olive',
    '1 pièce de roast beef',
    '30 ml de moutarde de Dijon',
    '30 ml de moutarde à l’ancienne',
    '15 ml de poudre d’ail',
    '15 ml de poudre d’oignons',
    '15 ml d’assaisonnements italiens',
    'sel et poivre au goût',
    '250 ml de vin rouge',
    '125 ml de bouillon de boeuf',
    '1 sachet de sauce demi-glace',
    '227 g de champignons, coupés en deux',
    '12 oignons perlés épluchés'
  ],
  instructions: [
    'Préchauffer le four à 400 °F.',
    'Dans une poêle, chauffer l’huile à feu moyen. Saisir le rôti jusqu’à ce que chacune de ses faces soit dorée.',
    'Dans un bol, mélanger les moutardes avec la poudre d’ail, la poudre d’oignons et les assaisonnements italiens. Saler et poivrer.',
    'Badigeonner le rôti avec cette préparation.',
    'Déposer le rôti dans une cocotte ou dans une rôtissoire.',
    'Dans un bol, mélanger le vin rouge avec le bouillon et le contenu du sachet de sauce demi-glace.',
    'Verser dans la cocotte.',
    'Ajouter les champignons et les oignons perlés.',
    'Cuire au four de 35 à 45 minutes, jusqu’à ce qu’un thermomètre à cuisson inséré au centre du rôti indique 118 °F.',
    'Retirer le rôti de la cocotte et le déposer sur une planche à découper.',
    'Couvrir d’une feuille de papier d’aluminium, sans serrer.',
    'Laisser reposer 15 minutes avant de trancher.',
    'Si le jus de cuisson est trop liquide, le transférer dans une casserole et laisser mijoter à feu moyen jusqu’à ce qu’il ait réduit de moitié.',
    'Trancher le rôti et servir avec la sauce.'
  ],
  tags: ['vin rouge', 'sauce demi-glace', 'rôti'],
  notes: 'La cuisson doit atteindre 118 °F pour une cuisson saignante. Laisser reposer 15 minutes avant de trancher pour une meilleure texture.',
  slug: 'roast-beef-moutardes-et-vin-rouge'
};
