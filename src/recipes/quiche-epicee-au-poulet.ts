import { Recipe } from '@/types/recipe';

export const quicheEpiceeAuPoulet: Recipe = {
  id: 'quiche-epicee-au-poulet',
  title: 'Quiche épicée au poulet',
  description: 'Parfait pour un bon diner',
  categories: ['Plats principaux', 'Vollaille'],
  prepTime: { min: 25, max: 25 },
  cookTime: { min: 50, max: 50 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    'Pommes de terre',
    'Sel et poivre au goût',
    'Fromage mozzarella rappé',
    'Un oignon haché finement',
    'Une poitrine de poulet coupée en petits dés',
    'Un demi poivron vert coupé en petits dés',
    'Un demi poivron jaune coupé en petits dés',
    '1/4 c. à thé de sel',
    '1/2 c. à thé de poivre',
    '1 c. à thé de paprika',
    '1 c. à thé de curcuma',
    '1 c. à thé de persil',
    '2 c. à soupe de pâte de tomate',
    '3 œufs',
    '1/2 tasse de crème 35%',
    '1 c. à thé de thym',
    '1 c. à thé de coriandre'
  ],
  instructions: [
    'Faire bouillir les pommes de terre sans la pelure et étendre sur un moule à charnière tapissé de papier parchemin afin d\'en faire une croûte comme une tarte. Saler et poivrer les pommes de terre qui forment la croûte.',
    'Préchauffer le four à 350°F.',
    'Dans un poêlon, faire dorer l\'oignon 2-3 minutes.',
    'Ajouter le poulet et bien faire dorer.',
    'Ajouter les deux piments et continuer la cuisson.',
    'Une fois les légumes et le poulet bien saisis, ajouter le sel, le poivre, le paprika, le curcuma et le persil, puis bien brasser.',
    'Ajouter la pâte de tomate, bien brasser, et verser sur la croûte de pommes de terre.',
    'Dans un bol, mélanger les œufs, la crème, le thym et la coriandre, puis battre jusqu\'à homogénéité.',
    'Verser le mélange d\'œufs sur le poulet.',
    'Garnir de mozzarella rappée et cuire au four 35 minutes.'
  ],
  tags: ['épicé', 'poulet', 'tarte'],
  source: 'David Cloutier',
  slug: 'quiche-epicee-au-poulet'
};
