import { Recipe } from '@/types/recipe';

export const gravlaxDeSaumonAuTheFume: Recipe = {
  id: 'gravlax-de-saumon-au-the-fume',
  title: 'Gravlax de saumon au thé fumé',
  description: 'Ce gravlax goûte le saumon fumé.',
  categories: ['Entrées', 'Poisson'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 0, max: 0 },
  servings: 10,
  difficulty: 'Facile',
  ingredients: [
    '1/2 tasse de sucre',
    '1/3 tasse de gros sel',
    '3 c. à soupe de poivre blanc concassé',
    '1/4 tasse de feuilles de thé fumé (tel que le Lapsang Souchong)',
    'Filet de saumon frais avec la peau (que vous devez enlever avant de mettre dans la saumure)'
  ],
  instructions: [
    'Mélanger le sucre, le sel, le poivre et le thé.',
    'Utiliser 60 ml (1/4 tasse) par 500 g (1 lb) de saumon.',
    'Déposer le filet côté peau dans un grand plat, le saupoudrer côté chair avec la préparation au sel, couvrir et superposer d\'un autre plat dans lequel vous placerez un poids (boîte de conserve, gallon de vinaigre, etc.).',
    'Laisser mariner de 5 à 7 jours au réfrigérateur en retournant le saumon à tous les deux jours.',
    'Trancher finement le gravlax et servir accompagné d\'une salade de concombres et de la sauce moutarde et gingembre.',
    'Garnir de ciboulette fraîche.',
    'Trancher finement des concombres, saupoudrer légèrement de sel et de sucre.',
    'Ajouter un peu de vinaigre de riz et conserver au réfrigérateur.',
    'Servir avec la sauce moutarde et gingembre.'
  ],
  tags: ['fumé', 'thé', 'marinade'],
  source: 'David Cloutier',
  slug: 'gravlax-de-saumon-au-the-fume'
};
