import { Recipe } from '@/types/recipe';

export const saladeDePommesDeTerreGrillees: Recipe = {
  id: 'salade-de-pommes-de-terre-grillees',
  title: 'Salade de pommes de terre grillées',
  description: 'Une salade de patates grillées.',
  categories: ['Salades'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 20, max: 20 },
  servings: 6,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Vinaigrette',
      items: [
        '1 tasse de mayonnaise',
        '½ tasse de crème sure',
        '¼ tasse de moutarde à grains entiers',
        '2 cuillères à soupe de persil italien plat haché',
        '2 cuillères à soupe d\'aneth frais haché',
        '1 botte d\'oignons verts hachés',
        'le zeste et le jus de 1 citron',
        'Sel et poivre au goût'
      ]
    },
    {
      title: 'Salade',
      items: [
        '6 œufs à la coq hachés grossièrement',
        '2 livres de petites pommes de terre rouges',
        '1 livre de bacon cuit haché grossièrement',
        '1 cuillère à soupe de sel',
        '1 cuillère à soupe d\'huile d\'olive'
      ]
    }
  ],
  instructions: [
    'Porter une grande casserole d\'eau à ébullition. Ajouter 1 cuillère à soupe de sel et les petites pommes de terre rouges entières.',
    'Cuire pendant 5-7 minutes.',
    'Retirer les pommes de terre de l\'eau et les couper soigneusement en deux.',
    'Arroser d\'huile d\'olive et assaisonner des deux côtés avec du sel et du poivre.',
    'Préchauffez votre gril à 450 degrés F pour griller à chaleur directe.',
    'Placer les pommes de terre côté coupé vers le bas sur les grilles du gril et faire griller pendant 3 à 5 minutes.',
    'Retourner et griller pendant 3 à 5 minutes supplémentaires.',
    'Retirer les pommes de terre du gril et laisser refroidir.',
    'Transférez-les dans un grand bol et laissez-les refroidir complètement au réfrigérateur.',
    'Dans un bol moyen, combiner tous les ingrédients de la vinaigrette.',
    'Ajouter le bacon cuit et les œufs durs dans le grand bol avec les pommes de terre.',
    'Verser la vinaigrette sur les pommes de terre et remuer délicatement pour combiner.',
    'Servir frais.'
  ],
  tags: ['grill', 'pomme de terre', 'salade'],
  source: 'David Cloutier',
  slug: 'salade-de-pommes-de-terre-grillees'
};
