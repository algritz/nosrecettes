import { Recipe } from '@/types/recipe';

export const ailesDePoulet: Recipe = {
  id: 'ailes-de-poulet',
  title: 'Ailes de poulet',
  description: 'Recette de ailes de poulet marinées, cuites au four et nappées d\'une sauce onctueuse à base de marinade réduite et de beurre.',
  categories: ['Vollaille'],
  prepTime: 15,
  cookTime: 60,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1.3 kg d\'ailes de poulet',
    '15 ml de beurre',
    '90 ml de sauce soya',
    '5 ml de sauce Worcestershire',
    '65 ml de miel',
    '15 ml de xéres',
    '15 ml de moutarde de Dijon',
    '5 ml de moutarde sèche',
    '15 ml de romarin, haché',
    '3 gousses d\'ail, pressées',
    '1 piment chili, tranché finement',
    '5 ml de poivre noir',
    '3 ml de sel'
  ],
  instructions: [
    'Mélanger et fouetter tous les ingrédients de la marinade.',
    'Mettre les ailes de poulet dans un sac étanche, ajouter la marinade et le fermer.',
    'Remuer le sac pour bien enrober les ailes de poulet.',
    'Laisser mariner au réfrigérateur toute la nuit (ou plus, jusqu’à deux jours).',
    'Préchauffer le four à 375 °F (190 °C).',
    'Couvrir une plaque de cuisson de papier sulfurisé et le vaporiser ou le badigeonner d’huile d’olive.',
    'Retirer les ailes de poulet de la marinade.',
    'Verser la marinade dans une petite casserole.',
    'Placer les ailes de poulet sur la plaque de cuisson et faire cuire 30 min au four.',
    'Badigeonner les ailes de marinade et les retourner.',
    'Badigeonner l’autre côté et continuer la cuisson 30 min de plus, jusqu’à ce que les ailes soient bien dorées.',
    'Quand les ailes sont presque cuites, porter la marinade à ébullition, puis réduire la température de cuisson et laisser réduire jusqu’à ce qu’elle ait une consistance onctueuse (et non sirupeuse, car elle serait trop amère).',
    'Retirer du feu et incorporer le beurre.',
    'Transférer les ailes dans un grand bol et les napper de la sauce.',
    'Remuer pour enrober entièrement.',
    'Répartir les ailes dans des assiettes et servir.'
  ],
  tags: ['marinade', 'four', 'sauce'],
  slug: 'ailes-de-poulet'
};
