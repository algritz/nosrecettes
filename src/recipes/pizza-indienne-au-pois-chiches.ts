import { Recipe } from '@/types/recipe';

export const pizzaIndienneAuPoisChiches: Recipe = {
  id: 'pizza-indienne-au-pois-chiches',
  title: 'Pizza indienne au pois chiches',
  description: 'Une pizza aux saveurs indiennes avec pois chiches, légumes et épices, garnie de mozzarella et accompagnée d\'une sauce raita à la lime.',
  categories: ['Plats principaux'],
  prepTime: 20,
  cookTime: 20,
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    '1 c. à soupe d’huile de canola',
    '1 oignon, haché finement',
    '1 c. à soupe de gingembre frais, haché finement',
    '1 poivron rouge, coupé en dés',
    '1 courgette, coupée en dés',
    '1 gousse d\'ail haché finement',
    '1 c. à soupe de pâte de cari de bonne qualité',
    '1 c. à thé de tandoori masala',
    '250 ml (1 tasse) de pois chiches, rincés et égouttés',
    '1/4 de tasse d\'eau',
    '2 c. à soupe de crème 35%',
    '1/4 c. à thé de sel',
    '3-4 pains naan',
    '125 ml (1/2 tasse) de mozzarella, râpée',
    '60 ml (1/4 tasse) de coriandre fraîche, hachée',
    '80 ml (1/3 tasse) de yogourt 2 %',
    '1 c. à soupe de jus de lime',
    '1 c. à soupe d\'eau'
  ],
  instructions: [
    'Placer une grille au centre du four et le préchauffer à 200 °C (400 °F).',
    'Dans une grande poêle, sur feu moyen, chauffer l’huile. Y faire revenir l’oignon, le gingembre, le poivron, l\'ail et la courgette jusqu’à ce qu’ils soient tendres, environ 5 minutes.',
    'Ajouter la pâte de cari, le tandoori masala, l’eau, les pois chiches, la crème et le sel. Cuire 2 minutes.',
    'Écraser délicatement les pois chiches dans la poêle.',
    'Déposer les pains naan sur une plaque à cuisson.',
    'Étendre sur les pains le mélange aux pois chiches, puis y parsemer la mozzarella.',
    'Cuire les pains au four jusqu’à ce que le fromage soit fondu, environ 10 minutes.',
    'Dans un petit bol, mélanger le yogourt, le jus de lime et 1 c. à soupe d’eau.',
    'Arroser les pizzas de cette sauce et parsemer de coriandre.'
  ],
  tags: ['épices', 'cari', 'grill'],
  notes: 'Temps total de préparation : 40 minutes. Vin conseillé : Barefoot Pinot Grigio.',
  slug: 'pizza-indienne-au-pois-chiches'
};
