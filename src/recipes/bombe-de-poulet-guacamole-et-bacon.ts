import { Recipe } from '@/types/recipe';

export const bombeDePouletGuacamoleEtBacon: Recipe = {
  id: '1764531922385',
  title: 'Bombe de poulet guacamole et bacon',
  description: 'Poitrines de poulet farcies de guacamole, enveloppées de bacon, saisies puis finies au four.',
  categories: ['Vollaille', 'Plats principaux'],
  prepTime: 15,
  cookTime: 15,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Guacamole',
      items: [
        '2 avocats mûrs',
        '1/2 oignon blanc, haché finement',
        '1/2 tomate, hachée',
        '2 c. à soupe de coriandre, hachée',
        '1/2 c. à soupe de sel kasher',
        '2 c. à soupe de jus de lime fraîchement pressé'
      ]
    },
    {
      title: 'Poulet',
      items: [
        '4 poitrines de poulet désossées, sans peau',
        'Sel kasher et poivre noir fraîchement moulu',
        '8 tranches de bacon',
        '1 c. à soupe d\'huile'
      ]
    }
  ],
  instructions: [
    'Préchauffer le four à 400°F.',
    'Dans un grand bol, mélanger la chair d’avocat, l’oignon, la tomate, la coriandre, le sel et le jus de lime; écraser à la fourchette jusqu’à texture lisse sans gros morceaux.',
    'Assaisonner les poitrines de poulet de sel et de poivre sur tous les côtés. Les trancher en deux, puis couper une fente au centre de chaque moitié pour former une poche.',
    'Garnir chaque poche d’une cuillère bien remplie de guacamole et pincer les bords pour fermer.',
    'Envelopper chaque morceau de poulet d’une tranche de bacon.',
    'Chauffer l’huile dans une poêle sur feu vif. Saisir les morceaux 3 à 4 minutes de chaque côté.',
    'Transférer au four et cuire 10 minutes, ou jusqu’à ce que le poulet soit bien cuit. Servir.'
  ],
  tags: ['guacamole', 'bacon', 'farci'],
  source: 'David Cloutier',
  slug: 'bombe-de-poulet-guacamole-et-bacon'
};
