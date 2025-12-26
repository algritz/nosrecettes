import { Recipe } from '@/types/recipe';

export const gateauDansUneTasseDeMesEnfants: Recipe = {
  id: 'gateau-dans-une-tasse-de-mes-enfants',
  title: 'Gâteau dans une tasse de mes enfants',
  description: 'Un gâteau au chocolat rapide et facile à préparer dans une tasse, parfait pour une personne.',
  categories: ['Déjeuners'],
  prepTime: 5,
  cookTime: 1,
  servings: 1,
  difficulty: 'Facile',
  ingredients: [
    '3 c. à soupe de farine tout usage non blanchie',
    '2 c. à soupe de cassonade',
    '2 c. à thé de cacao',
    '¼ c. à thé de poudre à pâte',
    '3 c. à soupe de lait',
    '1 c. à soupe d’huile de canola',
    '1 goutte d’extrait de vanille',
    'Quelques pépites de chocolat'
  ],
  instructions: [
    'Dans une tasse à café, mélange la farine, la cassonade, le cacao et la poudre à pâte.',
    'Ajoute le lait, l’huile et la vanille. Avec une fourchette, brasse délicatement jusqu’à ce que la pâte n’ait plus de grumeaux.',
    'Dépose les pépites de chocolat sur le dessus et brasse un peu.',
    'Cuis le gâteau au micro-ondes 1 minute à 1 minute 40 secondes.',
    'Laisse tiédir 5 minutes et déguster.'
  ],
  tags: ['micro-ondes', 'chocolat', 'rapide'],
  slug: 'gateau-dans-une-tasse-de-mes-enfants'
};
