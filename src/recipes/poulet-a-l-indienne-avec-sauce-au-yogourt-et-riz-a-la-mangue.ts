import { Recipe } from '@/types/recipe';

export const pouletALIndienneAvecSauceAuYogourtEtRizALaMangue: Recipe = {
  id: 'poulet-a-l-indienne-avec-sauce-au-yogourt-et-riz-a-la-mangue',
  title: 'Poulet à l\'indienne avec sauce au yogourt et riz à la mangue',
  description: 'Un plat indien savoureux avec poulet mariné, sauce au yogourt à la mangue, servi avec du riz jasmin parfumé.',
  categories: ['Plats principaux', 'Végétarien'],
  prepTime: 30,
  cookTime: 10,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    'Poitrine de poulet coupée en lanière',
    '2 c à soupe d\'huile de canola',
    '1 à soupe ou plus de poudre de cari',
    'Sel et poivre au goût',
    '2 tasse de yogourt nature 10%',
    '1 1/2 c à thé de curcuma',
    '2 c à soupe de coriandre fraîche hachée',
    'Riz au jasmin cuit pour 4',
    '1 mangue (pour la purée)'
  ],
  instructions: [
    {
      title: 'Sauce',
      steps: [
      'Mélanger le yogourt, le curcuma, la poudre de cari et la coriandre fraîche.',
      'Hacher la mangue finement, pratiquement en purée.',
      'Diviser la purée de mangue en 2. Réserver une moitié au réfrigérateur et mélanger l\'autre moitié au yogourt.',
      'Saler et poivrer, réfrigérer jusqu\'au service.',
      'Faire la sauce la veille, c\'est meilleur quand la sauce marine 12h et +.'
      ]
    },
    {
      title: 'Poulet',
      steps: [
      'Enduire le poulet d\'huile et le rouler dans un mélange de sel, poivre et cari.',
      'Faire cuire au BBQ ou dans une poêle.'
      ]
    },
    {
      title: 'Riz',
      steps: [
      'Faire cuire le riz au jasmin tel qu\'indiqué sur la boîte.',
      'Lorsque le riz est prêt, ajouter l\'autre moitié de mangue et mélanger bien le tout.'
      ]
    },
    {
      title: 'Service',
      steps: [
      'Servir le poulet avec le riz et la sauce et parsemer de coriandre fraîche.'
      ]
    }
  ],
  tags: ['cari', 'mangue', 'grill'],
  marinatingTime: 720,
  slug: 'poulet-a-l-indienne-avec-sauce-au-yogourt-et-riz-a-la-mangue'
};
