import { Recipe } from '@/types/recipe';

export const rizAuChorizoEtALaTomate: Recipe = {
  id: 'riz-au-chorizo-et-a-la-tomate',
  title: 'Riz au chorizo et à la tomate',
  description: 'Ce fait aussi en rizotto, voir dans les notes plus bas.',
  categories: ['Plats principaux'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 45, max: 45 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '200 g de riz basmati',
    '150 g de chorizo, coupé en rondelles',
    '400 g de tomates en dés en boîte (une petite boîte)',
    '1 oignon, émincé',
    '2 gousses d’ail, hachées',
    '1 cuillère à soupe de paprika',
    '1 cuillère à café de sel',
    '1/2 cuillère à café de poivre noir',
    '1 cuillère à soupe d’huile d’olive',
    'Quelques feuilles de basilic frais',
    '50 g de fromage râpé'
  ],
  instructions: [
    'Dans une grande casserole, fais chauffer l’huile d’olive à feu moyen.',
    'Ajoute l’oignon et faire revenir jusqu’à ce qu’il devienne translucide.',
    'Ajoute le chorizo en rondelles et faire cuire jusqu’à ce qu’il soit bien doré.',
    'Ajoute l’ail haché et faire revenir pendant 1 minute jusqu’à ce qu’il dégage son parfum.',
    'Verse les tomates en dés dans la casserole, puis ajoute le paprika, le sel et le poivre.',
    'Mélange bien et laisse mijoter pendant environ 10 minutes.',
    'Ajoute le riz à la préparation et mélange pour bien l’enrober de sauce.',
    'Verse 400 ml d’eau dans la casserole, porte à ébullition, puis réduis le feu et couvre.',
    'Laisse cuire à feu doux pendant 15 à 20 minutes, ou jusqu’à ce que le riz soit tendre et que le liquide soit absorbé.',
    'Ajoute quelques feuilles de basilic frais pour une touche de fraîcheur.',
    'Saupoudre de fromage râpé avant de servir.'
  ],
  tags: ['tomate', 'chorizo', 'riz'],
  slug: 'riz-au-chorizo-et-a-la-tomate'
};
