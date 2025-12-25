import { Recipe } from '@/types/recipe';

export const poitrineDePouletMangueEtHabanero: Recipe = {
  id: 'poitrine-de-poulet-mangue-et-habanero',
  title: 'Poitrine de poulet mangue et habanero',
  description: 'Une recette de poulet grillé avec un glaçage au miel et habanero, accompagné d\'une salsa à la pêche et à la mangue, offrant un équilibre de saveurs sucrées, épicées et acidulées.',
  categories: ['Vollaille', 'Plats principaux'],
  prepTime: 30,
  cookTime: 45,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Glaçage au miel et habanero',
      items: [
      '2 c. à soupe d’ananas en très petits morceaux',
      '1 petite gousse d\'ail émincé finement',
      'Soupçon de poudre de gingembre',
      'Jus de ¼ de citron',
      '1 c. à soupe de miel',
      '½ piment habanero, haché',
      '1 c. à thé de vinaigre de cidre'
      ]
    },
    {
      title: 'Poitrine de poulet',
      items: [
      '4 poitrine de poulet',
      '1 c. à soupe de poudre de chili',
      '1 c. à soupe de cassonade',
      '1 c. à thé de sel',
      '½ c. à thé de poivre'
      ]
    },
    {
      title: 'Salsa à la pêche et à la mangue',
      items: [
      '½ mangue, pelée et coupée en dés',
      '¼ de poivron rouge, haché',
      '2 c. à soupe d’oignon rouge, coupé en dés',
      '½ jalapeño, épépiné et coupé en dés',
      '¼ de piment habanero, épépiné et coupé en dés',
      '2 c. à soupe de coriandre, hachée',
      'Jus de ¼ de lime'
      ]
    }
  ],
  instructions: [
    'Préparer le glaçage au miel et habanero : dans une poêle à feu doux, faire chauffer l’ananas, l’ail, la poudre de gingembre et le jus de citron, en remuant fréquemment de 1 à 2 minutes (ou jusqu’à ce que l’ananas ait ramolli).',
    'Ajouter le miel, le piment habanero et le vinaigre, puis poursuivre la cuisson de 2 à 3 minutes.',
    'Retirer du feu et verser dans un mélangeur. Mélanger à l’aide de pulsions jusqu’à la consistance désirée.',
    'Pour un maximum de saveur, laisser la sauce reposer pendant au moins 30 minutes.',
    'Faire chauffer un côté du gril à feu moyen.',
    'Frotter les poitrines de poulet avec la poudre de chili, la cassonade, le sel et le poivre.',
    'Déposer les poitrines de poulet assaisonnées sur le gril, à et faire griller.',
    'Pendant la cuisson du poulet, badigeonner de glaçage au miel et au habanero sur les poitrines. Badigeonner à toutes les 10 minutes jusqu’à ce que la poitrine soient cuites.',
    'Pendant que le poulet cuit, préparer la salsa : mélanger la mangue, le poivron rouge, l’oignon rouge, le piment jalapeno, le piment habanero et la coriandre dans un bol moyen.',
    'Arroser du jus de lime.',
    'Dès que les poitrines sont cuites et que sa température interne a atteint 165 degrés F, retirer du gril.',
    'Garnir de salsa à la pêche et à la mangue et déguster.'
  ],
  tags: ['grill', 'épicé', 'fruit'],
  slug: 'poitrine-de-poulet-mangue-et-habanero'
};
