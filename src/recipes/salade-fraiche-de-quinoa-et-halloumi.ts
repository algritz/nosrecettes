import { Recipe } from '@/types/recipe'

export const saladeFraicheDeQuinoaEtHalloumi: Recipe = {
  id: 'salade-fraiche-de-quinoa-et-halloumi',
  title: 'Salade fraîche de quinoa et Halloumi',
  description:
    'Une salade rafraîchissante à base de quinoa, légumes frais, haricots blancs et fromage Halloumi grillé.',
  categories: ['Salades'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 20, max: 20 },
  servings: 6,
  difficulty: 'Facile',
  ingredients: [
    '¾ tasse de quinoa',
    "1 tasse d'eau",
    '5 radis',
    '2 concombres libanais',
    '2 tasses de tomates cerises',
    '1 tasse de menthe fraîche',
    '1 conserve de 540 ml de haricots blancs',
    "2 c. à soupe d'huile d’olive",
    '2 citrons',
    'Sel et poivre au goût',
    '1 bloc de fromage Halloumi',
  ],
  instructions: [
    "Faire cuire le quinoa tel qu'indiqué sur l'emballage.",
    'Pendant ce temps, tranchez finement les radis et les concombres.',
    'Coupez les tomates cerises en deux et hachez la menthe.',
    'Rincez et égouttez les haricots.',
    'Dans un grand bol à salade, mélangez les légumes, la menthe, les haricots et le quinoa.',
    'Ajoutez l’huile et presser les citrons directement au-dessus du bol.',
    'Poivrez généreusement et ajoutez une pincée de sel.',
    'Coupez le halloumi en tranches de 1 cm d’épaisseur.',
    'Dans un poêlon préchauffé à feu moyen-vif, faites cuire les tranches de halloumi 2 ou 3 minutes de chaque côté.',
    'Coupez le fromage en dés et incorporez à la salade.',
  ],
  tags: ['quinoa', 'fromage grillé', 'salade'],
  images: [
    {
      small:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/salade-fraiche-de-quinoa-et-halloumi',
      medium:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/salade-fraiche-de-quinoa-et-halloumi',
      large:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/salade-fraiche-de-quinoa-et-halloumi',
    },
  ],
  source: 'David Cloutier',
  slug: 'salade-fraiche-de-quinoa-et-halloumi',
}
