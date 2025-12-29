import { Recipe } from '@/types/recipe';

export const brochettesDePouletTikka: Recipe = {
  id: 'brochettes-de-poulet-tikka',
  title: 'Brochettes de poulet tikka',
  description: 'Une recette de brochettes de poulet marinées aux épices tikka, parfaites pour le barbecue. Servir avec du pain Naan et une sauce au yogourt.',
  categories: ['Vollaille', 'Plats principaux'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 15, max: 15 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '4 poitrines de poulet coupé en gros cube',
    '2 gousses d\'ail hachées ou pressées',
    '30 ml de coriandre fraîche hachée',
    '15 ml de gingembre frais haché',
    '15 ml de garam masala',
    '10 ml de cari',
    '125 ml d\'huile végétale',
    '5 ml de sel fin',
    'Poivre moulu, au goût'
  ],
  instructions: [
    'Mélanger tous les ingrédients de la marinade ensemble et y faire mariner le poulet minimum 4 heures.',
    'Préchauffer le barbecue.',
    'Bien brosser et huiler la grille.',
    'Faire cuire les brochettes sur les quatre faces au-dessus d\'un feu moyen-vif.',
    'Les tourner à toutes les 3 ou 4 min pour une cuisson totale d\'environ 15 à 20 min.',
    'Couper un morceau et s\'assurer qu\'il n\'est pas rose au centre.'
  ],
  tags: ['barbecue', 'épices', 'marinade sèche'],
  accompaniment: 'Pain Naan et sauce au yogourt',
  marinatingTime: { min: 240, max: 240 },
  notes: 'Excellent avec des pommes de terre au curry',
  slug: 'brochettes-de-poulet-tikka'
};
