import { Recipe } from '@/types/recipe';

export const crevettesIndiennesAuCurcuma: Recipe = {
  id: 'crevettes-indiennes-au-curcuma',
  title: 'Crevettes Indiennes au Curcuma',
  description: 'Une recette de crevettes épicées à la saveur de curcuma, servies avec du riz basmati. Facile à préparer avec des épices indiennes et une sauce crémeuse.',
  categories: ['Végétarien'],
  prepTime: 25,
  cookTime: 25,
  servings: 3,
  difficulty: 'Facile',
  ingredients: [
    '454 g crevettes, cuites, décortiquées, sans queues, décongelées',
    '15 ml huile d\'olive',
    '15 ml beurre',
    '2 gousses ail, écrasées',
    '5 échalotes, hachées',
    '2 piments forts, hachés',
    '1 c. à thé de paprika',
    '1 c. à soupe de curcuma en racine rapée ou de curcuma en poudre',
    '½ c. à thé de carry',
    '125 ml crème 35%',
    '125 ml de lait de coco',
    '1 c. à soupe cassonade',
    'Sel, au goût',
    'Poivre, au goût'
  ],
  instructions: [
    'Faire revenir dans l\'huile et le beurre l\'ail, les échalotes, le piment, le paprika, le curcuma et le carry.',
    'Faire sauter dans ce mélange les crevettes pendant une dizaine de minutes, jusqu\'à ce que l\'eau en soit évaporée.',
    'Ajouter la crème, le lait de coco, la cassonade, le sel et le poivre.',
    'Faire mijoter le tout à découvert jusqu\'à ce que la sauce ait réduit de moitié environ.',
    'Servir avec un riz basmati.'
  ],
  tags: ['épices indiennes', 'sauce crémeuse', 'piment'],
  wine: 'Oyster Bay (chardonnay)',
  accompaniment: 'riz basmati',
  notes: 'Pour un kick intéressant, remplacer le jalapeños par 3 petits piments Thai, non épépinés.',
  slug: 'crevettes-indiennes-au-curcuma'
};
