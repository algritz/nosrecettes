import { Recipe } from '@/types/recipe';

export const goulashAuBoeufEtSauceBarbecueALaMijoteuse: Recipe = {
  id: 'goulash-au-boeuf-et-sauce-barbecue-a-la-mijoteuse',
  title: 'Goulash au boeuf et sauce barbecue à la mijoteuse',
  description: '',
  categories: ['Plats principaux', 'Vollaille'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 600, max: 600 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 oignons coupés en tranches',
    '2 gousses d\'ail hachées finement',
    '2 lb cubes de boeuf à ragoût',
    '1 1/4 tasse eau',
    '1/2 tasse sauce chili',
    '2 cuillères à soupe cassonade tassée',
    '2 cuillères à soupe sauce Worcestershire',
    '1 cuillère à soupe paprika',
    '1 cuillère à thé marjolaine séchée',
    '1/2 cuillère à thé moutarde en poudre',
    '1/2 cuillère à thé sel',
    '1/4 cuillère à thé poivre noir du moulin',
    '3 cuillères à soupe farine',
    'Reste de l\'eau pour la farine'
  ],
  instructions: [
    'Mettre les oignons et l\'ail dans la mijoteuse et couvrir des cubes de boeuf.',
    'Dans un bol, mélanger 1 tasse d\'eau, la sauce chili, la cassonade, la sauce Worcestershire, le paprika, la marjolaine, la moutarde en poudre, le sel et le poivre, puis verser la préparation dans la mijoteuse.',
    'Couvrir et cuire à faible intensité de 8 à 10 heures.',
    'Dans un bol, mélanger la farine et le reste de l\'eau.',
    'Ajouter la préparation de farine dans la mijoteuse et mélanger.',
    'Couvrir et cuire à intensité élevée de 10 à 15 minutes ou jusqu\'à ce que la sauce ait épaissi.'
  ],
  tags: ['barbecue', 'mijoteuse', 'ragoût'],
  slug: 'goulash-au-boeuf-et-sauce-barbecue-a-la-mijoteuse'
};
