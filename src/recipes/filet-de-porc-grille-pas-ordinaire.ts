import { Recipe } from '@/types/recipe';

export const filetDePorcGrillePasOrdinaire: Recipe = {
  id: 'filet-de-porc-grille-pas-ordinaire',
  title: 'Filet de porc grillé, pas ordinaire',
  description: 'Une recette de filet de porc mariné et grillé, relevée avec un mélange de piments habaneros, gingembre, et épices, pour une saveur intense et épicée.',
  categories: ['Végétarien'],
  prepTime: 25,
  cookTime: 25,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 piments habaneros, épépinés',
    '1 petit oignon haché',
    '2 bottes d\'oignons verts, hachés',
    '1 morceau (1 po) de racine de gingembre frais, tranchée finement',
    '3 gousses d\'ail pelées',
    '1/4 tasse de cidre de pomme',
    '1/4 tasse de vinaigre',
    '3 c. à soupe de sauce soya',
    '2 c. à soupe d\'huile d\'olive',
    '1 1/2 c. à soupe de cassonade',
    '3/4 c. à thé de graines de moutarde',
    '1 c. à soupe de sel',
    '1 c. à thé de poivre',
    '1 c. à soupe de thym séché',
    '1 c. à soupe de tout-épices',
    '1 c. à thé de muscade',
    '1/2 c. à thé de cannelle',
    '2 1/2 lb de filets de porc coupés en papillon et aplatis à 3/4 po d\'épaisseur'
  ],
  instructions: [
    'Mélanger les piments habaneros, l\'oignon, les oignons verts, le gingembre et l\'ail dans un blender ou un robot culinaire. Mixer jusqu\'à obtention d\'un mélange plutôt fin.',
    'Ajouter le cidre, le vinaigre, la sauce soya, l\'huile d\'olive et le sucre. Assaisonner de graines de moutarde, de sel, de poivre, de thym, de tout-épices, de muscade et de cannelle. Mixer jusqu\'à onctuosité.',
    'Mettre le porc dans un plat creux allant au four. Verser la marinade par-dessus et masser la viande pour qu\'elle en soit bien enrobée. Couvrir et réfrigérer pendant 8 heures.',
    'Préchauffer le barbecue à feu moyen-vif. Huiler légèrement la grille.',
    'Faire griller la viande en la retournant pour éviter qu\'elle ne brûle, mais en la laissant assez longtemps pour que les marques de la grille s\'impriment dessus, environ de 6 à 7 minutes de chaque côté, ou jusqu\'à ce que la température interne du porc atteigne 160°F (70°C).',
    'Retirer la viande du feu, trancher finement et servir.'
  ],
  tags: ['marinade sèche', 'grill', 'épicé'],
  marinatingTime: 480,
  slug: 'filet-de-porc-grille-pas-ordinaire'
};
