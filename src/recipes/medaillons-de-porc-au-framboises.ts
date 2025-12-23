import { Recipe } from '@/types/recipe';

export const medaillonsDePorcAuFramboises: Recipe = {
  id: 'medaillons-de-porc-au-framboises',
  title: 'Médaillons de porc au framboises',
  description: 'Une recette savoureuse de médaillons de porc accompagnés d\'une sauce aux framboises et au vinaigre, cuits au four et à la poêle.',
  categories: ['Vollaille', 'Plats principaux'],
  prepTime: 15,
  cookTime: 20,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 filets de porc',
    'Farine',
    '15 ml (1 c. à soupe) d’huile d’olive',
    '30 ml (2 c. à soupe) de beurre',
    '1 oignon, haché finement',
    '1 gousse d’ail, hachée finement',
    '5 ml (1 c. à thé) de miel',
    '5 ml (1 c. à thé) de vinaigre de framboise',
    '125 ml (1/2 tasse) de bouillon de poulet',
    '250 ml (1 tasse) de framboises fraîches',
    'Sel et poivre'
  ],
  instructions: [
    'Placer la grille au centre du four. Préchauffer le four à 180 °C (350 °F).',
    'Trancher chaque filet en 6 médaillons. Aplatir légèrement et fariner chaque médaillon.',
    'Dans une poêle allant au four, chauffer l’huile et le beurre. Ajouter les médaillons et dorer pendant environ 1 minute de chaque côté. Saler et poivrer. Réserver.',
    'Dans la même poêle, attendrir l’oignon et l’ail. Ajouter le miel et cuire pendant 1 minute.',
    'Déglacer avec le vinaigre. Ajouter le bouillon et 125 ml (1/2 tasse) de framboises. Cuire de 1 à 2 minutes.',
    'Remettre les médaillons dans la poêle. Cuire au four pendant environ 10 minutes.',
    'Ajouter le reste des framboises. Rectifier l’assaisonnement.',
    'Au service, napper les médaillons de sauce.'
  ],
  tags: ['framboises', 'sauce', 'cuisson au four'],
  slug: 'medaillons-de-porc-au-framboises'
};
