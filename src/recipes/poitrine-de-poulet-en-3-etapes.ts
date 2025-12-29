import { Recipe } from '@/types/recipe';

export const poitrineDePouletEn3Etapes: Recipe = {
  id: 'poitrine-de-poulet-en-3-etapes',
  title: 'Poitrine de poulet en 3 étapes',
  description: 'Une recette de poulet mariné en trois étapes, avec une marinade sèche, une marinade liquide, et une sauce BBQ pour une cuisson au grill.',
  categories: ['Vollaille'],
  prepTime: { min: 60, max: 60 },
  cookTime: { min: 30, max: 30 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Marinade liquide',
      items: [
      '4 poitrines de poulet désossées sans peau',
      '1 bouteille de bière',
      '1/4 tasse de sauce soya',
      '1/4 tasse d\'huile de canola',
      '2 c. à soupe de cassonade',
      '1 c. à soupe de persil séché',
      '2 gousses d\'ail hachées',
      '2 c. à soupe de marinade sec',
      'la moitié de la sauce BBQ'
      ]
    },
    {
      title: 'Marinade sèche',
      items: [
      '1 c. à soupe de sel',
      '1 c. à soupe de poudre d\'ail',
      '1 c. à soupe de poudre d\'oignon',
      '1 c. à thé de sauge',
      '1 c. à thé de feuilles de thym',
      '1 c. à thé de poudre de chili',
      '1 c. à thé de paprika',
      '1 c. à thé de poivre noir',
      '1/2 c. à thé de poivre de Cayenne'
      ]
    },
    {
      title: 'Sauce BBQ',
      items: [
      '1/3 tasse de ketchup',
      '1/4 tasse de beurre',
      '1/4 tasse de vinaigre de cidre',
      '1/4 tasse de jus de citron',
      '2 c. à soupe de Worcestershire sauce',
      '2 c. à soupe de sauce soya',
      '2 c. à soupe de moutarde de dijon',
      '1/4 c. à thé de Sambal Oelek'
      ]
    }
  ],
  instructions: [
    'Faire la marinade sèche dans un plat hermétique.',
    'Mélanger les ingrédients de la sauce BBQ et faire mijoter 30 à 35 minutes ou jusqu\'à ce qu\'elle ait épaissi. (se garde au réfrigérateur 48h)',
    'Faire la marinade liquide et y faire mariner le poulet 3 à 24h.',
    'Vider la marinade liquide et bien éponger le poulet.',
    'Bien enrober les poitrines de poulet avec la marinade sèche et laisser mariner 3 à 24h.',
    'Faire cuire sur le grill en badigeonnant avec la sauce BBQ.'
  ],
  tags: ['barbecue', 'marinade sèche', 'grill'],
  marinatingTime: { min: 1440, max: 1440 },
  notes: 'Pour que ce soit moins salé, mettre de la sauce soya et du beurre non-salé.',
  slug: 'poitrine-de-poulet-en-3-etapes'
};
