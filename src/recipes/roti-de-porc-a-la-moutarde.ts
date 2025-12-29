import { Recipe } from '@/types/recipe';

export const rotiDePorcALaMoutarde: Recipe = {
  id: 'roti-de-porc-a-la-moutarde',
  title: 'Rôti de porc à la moutarde',
  description: 'Un rôti de porc tendre cuit lentement avec de la moutarde, des échalotes, et une sauce crémeuse.',
  categories: ['Plats principaux', 'Porc'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 480, max: 480 },
  servings: 6,
  difficulty: 'Facile',
  ingredients: [
    '1 rôti de porc de 1 kg environ',
    '8 échalotes',
    '5 cuillères à soupe de moutarde de Dijon',
    'Du beurre',
    '1 gros pot de crème fraîche',
    '1 gousse d\'ail',
    'Sel et poivre'
  ],
  instructions: [
    'Piquer le rôti avec les gousses d\'ail.',
    'Éplucher les échalotes.',
    'Faire fondre une bonne quantité de beurre dans une cocotte.',
    'À feu moyen, faire dorer le rôti sur chaque face.',
    'Retirer le rôti du feu.',
    'L\'enduire sur toutes les faces de moutarde.',
    'Remettre dans la cocotte avec les échalotes autour.',
    'Saler et poivrer.',
    'Laisser cuire en retournant régulièrement à feu doux (200 ºF) pendant 7H30.',
    'Retirer le rôti et les échalotes de la cocotte.',
    'Mettre une bonne moitié du pot de crème fraîche dans la cocotte à feu doux/moyen.',
    'Remuer constamment jusqu\'à ce que la texture soit onctueuse.',
    'Rectifier l\'assaisonnement.',
    'Servir le rôti coupé avec les échalotes et la sauce.'
  ],
  tags: ['long cuisson', 'tendre', 'crémeux'],
  wine: 'finca antigua (grenache)',
  source: 'David Cloutier',
  notes: 'J\'ai décidé de faire cuire à basse température pendant longtemps le rôti pour qu\'il soit plus tendre que la version originale.',
  slug: 'roti-de-porc-a-la-moutarde'
};
