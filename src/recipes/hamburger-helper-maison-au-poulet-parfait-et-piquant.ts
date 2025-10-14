import { Recipe } from '@/types/recipe';

export const hamburgerHelperMaisonAuPouletParfaitEtPiquant: Recipe = {
  id: '1760470764599',
  title: 'Hamburger helper maison au poulet parfait et piquant',
  description: 'One‑pot de pâtes au poulet style buffalo, crémeux et gratiné au cheddar.',
  categories: ['Pâtes', 'Plats principaux', 'Vollaille'],
  prepTime: 15,
  cookTime: 25,
  servings: 6,
  difficulty: 'Facile',
  ingredients: [
    '2 cuillères à soupe d\'huile d\'olive extra vierge',
    '2-3 poitrines ou cuisses de poulet, coupées en cubes',
    '1 oignon jaune moyen, haché',
    'Sel casher et poivre noir',
    '1 cuillère à café de poudre de chili',
    '1 cuillère à café de paprika',
    '1 cuillère à café de poudre d\'ail',
    '1 boîte de pâtes fusilli (ou autre pâte courte de votre choix)',
    '2 tasses de fleurons de brocoli hachés',
    '1 1/2 tasse de lait',
    '1 cuillère à soupe de ketchup',
    '1/4 tasse de jalapeños marinés',
    '1/2 tasse de sauce piquante',
    '1/3 tasse de salsa verde',
    '2 tasses de fromage cheddar râpé',
    '6 cuillères à soupe de beurre salé',
    'Oignons verts et coriandre, pour servir'
  ],
  instructions: [
    'Préchauffer le four à 425°.',
    'Dans une grande casserole à feu moyen-vif, ajouter l\'huile d\'olive, l\'oignon et le poulet. Assaisonner de sel et de poivre et cuire jusqu\'à légère coloration, environ 10 minutes.',
    'Incorporer la poudre de chili, le paprika et la poudre d\'ail; cuire 1 minute.',
    'Ajouter les pâtes et le brocoli, mélanger délicatement, puis verser 1/2 tasse d\'eau et le lait. Ajouter le ketchup, saler et porter à légère ébullition.',
    'Laisser mijoter 5 minutes en remuant souvent, jusqu\'à ce que les pâtes soient al dente.',
    'Incorporer les jalapeños, la salsa verde, la sauce piquante et le beurre, puis 1 1/2 tasse de cheddar. Cuire encore quelques minutes jusqu\'à texture très crémeuse.',
    'Retirer du feu, garnir avec le 1/2 tasse de cheddar restante.',
    'Cuire au four à 425° pendant 5 à 10 minutes, jusqu\'à ce que le fromage soit fondu.',
    'Répartir les pâtes dans des bols et garnir d\'oignons verts et de coriandre.'
  ],
  tags: ['buffalo', 'one-pot', 'gratin'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/chiken_helper',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/chiken_helper',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/chiken_helper'
    }
  ],
  source: 'David Cloutier',
  notes: 'La prochaine fois, remplacer le brocoli par du chou-fleur.',
  slug: 'hamburger-helper-maison-au-poulet-parfait-et-piquant'
};
