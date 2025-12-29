import { Recipe } from '@/types/recipe';

export const rotiDEpauleErableMoutardeEtBiere: Recipe = {
  id: 'roti-d-epaule-erable-moutarde-et-biere',
  title: 'Roti d\'épaule érable, moutarde et bière',
  description: '',
  categories: ['Vollaille'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 480, max: 480 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 roti d\'épaule de porc',
    '1 c. à soupe de moutarde',
    '2 c. à soupe de sirop d\'érable',
    '1 c. à soupe d\'huile d\'olive',
    '1 gousse d’ail haché',
    '1/2 bière Herbes de Provence',
    'Sel',
    'Poivre'
  ],
  instructions: [
    'Mélangez dans un récipient, moutarde, sirop d\'érable, ail, huile d\'olive, herbes de Provence, sel et poivre.',
    'Préchauffez le four à 175F.',
    'Badigeonnez l\'épaule de cette marinade.',
    'Mettez-la dans une cocotte et ajoutez la bière.',
    'Cuire environ 8h.',
    'Coupez le rôti, le mettre sur un plat ou sur une assiette, le nappez de sauce et servir.'
  ],
  tags: ['érable', 'marinade sèche', 'rôtisserie'],
  slug: 'roti-d-epaule-erable-moutarde-et-biere'
};
