import { Recipe } from '@/types/recipe';

export const volailleAuPortoEtAuxFramboises: Recipe = {
  id: '1766769975605',
  title: 'Volaille au porto et aux framboises',
  description: '',
  categories: ['Vollaille', 'Sauces'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 0, max: 0 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Protéines',
      items: [
        '4 tournedos de volaille (dinde, poulet ou pintade)',
        'Huile'
      ]
    },
    {
      title: 'Marinade',
      items: [
        '125 ml (½ tasse) jus de framboise',
        '125 ml (½ tasse) porto ou vin rouge',
        'Sel et poivre'
      ]
    },
    {
      title: 'Sauce aux framboises',
      items: [
        '125 ml (½ tasse) porto ou vin rouge',
        '75 ml (1/3 tasse) cassonade',
        '7 ml (1 ½ c. thé) moutarde de Dijon',
        '250 ml (1 tasse) framboises fraîches ou congelées'
      ]
    }
  ],
  instructions: [
    'Marinade: Mélanger tous les ingrédients.',
    'Sauce aux framboises: Dans une casserole, mélanger le porto, la cassonade, la moutarde et les framboises. Faire cuire 10 min. à feu moyen. Passer au mélangeur et réserver la sauce aux framboises.',
    'Volailles: Verser la marinade sur les tournedos et faire mariner de 4 à 6 h.',
    'Faire cuire les tournedos sur le barbecue ou griller dans un poêlon.'
  ],
  tags: ['barbecue', 'marinade sèche', 'framboise'],
  source: 'David Cloutier',
  slug: 'volaille-au-porto-et-aux-framboises'
};
