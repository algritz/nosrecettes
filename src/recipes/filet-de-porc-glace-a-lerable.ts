import { Recipe } from '@/types/recipe';

export const filetDePorcGlaceALerable: Recipe = {
  id: '1758833697416',
  title: 'Filet de porc glacé à l\'érable',
  description: 'Filet de porc mariné aux épices et glacé à l\'érable (four ou grill).',
  categories: ['Porc', 'Plats principaux'],
  prepTime: 15,
  cookTime: 20,
  marinatingTime: 480,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Porc',
      items: [
        '2 filets de porc'
      ]
    },
    {
      title: 'Marinade',
      items: [
        '30 ml de sucre d\'érable (ou cassonade)',
        '15 ml de moutarde sèche',
        '10 ml de gros sel',
        '5 ml de poivre noir fraîchement moulu',
        '10 ml de paprika',
        'Origan frais haché, au goût (le séché peut faire l\'affaire)'
      ]
    },
    {
      title: 'Glace',
      items: [
        '125 ml de sirop d\'érable',
        '25 ml de ketchup',
        '15 ml de sauce Worcestershire',
        '8 ml de moutarde de Dijon',
        '8 ml de vinaigre de cidre'
      ]
    }
  ],
  instructions: [
    'Mettre le sucre d\'érable, la moutarde sèche, le sel, le poivre, le paprika et l\'origan dans un petit bol; mélanger en défaisant les grumeaux.',
    'Déposer les filets de porc et la marinade sèche dans un sac ziploc; bien masser et laisser mariner 8 heures minimum.',
    'Verser le sirop d\'érable, le ketchup, la sauce Worcestershire, la moutarde et le vinaigre dans une casserole; à feu élevé, porter à ébullition en fouettant.',
    'Réduire à feu moyen et laisser la glace mijoter doucement 6 à 10 minutes, jusqu\'à consistance de sirop; fouetter au besoin. Réserver.',
    'Cuire au four à 350°F en badigeonnant aux 10 minutes avec la glace ou sur le grill en badigeonnant avec la glace à l\'érable aux 5 minutes.'
  ],
  tags: ['érable', 'marinade sèche', 'grill'],
  source: 'David Cloutier',
  slug: 'filet-de-porc-glace-a-lerable'
};
