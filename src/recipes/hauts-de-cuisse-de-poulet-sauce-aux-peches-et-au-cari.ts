import { Recipe } from '@/types/recipe'

export const hautsDeCuisseDePouletSauceAuxPechesEtAuCari: Recipe = {
  id: 'hauts-de-cuisse-de-poulet-sauce-aux-peches-et-au-cari',
  title: 'Hauts de cuisse de poulet, sauce aux pêches et au cari',
  description:
    "Recette de hauts de cuisse de poulet accompagnés d'une sauce aux pêches parfumée au cari, servie avec du riz blanc.",
  categories: ['Vollaille', 'Plats principaux'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 20, max: 20 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '45 ml (3 c. à soupe) d’huile de canola',
    '3/4 tasse d’oignon émincé',
    '60 ml (4 c. à soupe) de gingembre frais pelé et râpé',
    '15 ml (1 c. à soupe) de poudre de cari',
    '6 pêches mûres, pelées, dénoyautées et coupées en dés (ou en canne si hors saison)',
    '30 ml (2 c. à soupe) de sucre',
    '5 ml (1 c. à thé) de sel',
    '1/2 tasse de yogourt grec nature sans gras',
    '45 ml (3 c. à soupe) de jus de lime frais',
    '60 ml (4 c. à soupe) d’eau (facultatif)',
    '16 hauts de cuisse de poulet, désossés',
  ],
  instructions: [
    "Dans une poêle, chauffer 15 ml (1 c. à soupe) d'huile à feu moyen. Y faire sauter l'oignon, le gingembre et le cari, jusqu'à ce que l'oignon soit tendre, environ 5 minutes.",
    "Ajouter les pêches, le sucre et le sel. Cuire jusqu'à ce que les pêches se défassent, environ 5 minutes.",
    'Retirer du feu et laisser refroidir.',
    "À l’aide d’un mélangeur à main électrique, réduire le mélange de pêches en purée, y ajouter le yogourt et le jus de lime, bien brasser et ajouter de l'eau (si désiré) pour obtenir une texture plus liquide.",
    "Chauffer le reste de l'huile dans une poêle à feu moyen-vif. Réserver 125 ml (1/2 tasse) de la sauce aux pêches et badigeonner le reste sur les hauts de cuisse de poulet.",
    "Cuire le poulet jusqu'à ce qu'il soit bien cuit, environ 20 minutes en le tournant à mi-cuisson. Le badigeonner au moins une fois avec la sauce réservée.",
    'Servir le poulet avec le reste de la sauce et accompagner de riz blanc.',
  ],
  tags: ['cari', 'sauce aux pêches', 'volaille'],
  slug: 'hauts-de-cuisse-de-poulet-sauce-aux-peches-et-au-cari',
}
