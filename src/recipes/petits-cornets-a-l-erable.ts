import { Recipe } from '@/types/recipe'

export const petitsCornetsALErable: Recipe = {
  id: 'petits-cornets-a-l-erable',
  title: "Petits cornets à l'érable",
  description: "Petits cornets à l'érable",
  categories: ['Végétarien'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 10, max: 10 },
  servings: 60,
  difficulty: 'Facile',
  ingredients: [
    '1/2 lb beurre',
    '1 1/2 tasse cassonade',
    "1/2 tasse sirop d'érable",
    '1 boîte lait Eagle Brand condensé sucré',
    '1 1/2 tasse guimauves miniatures',
    '60 cornets miniatures',
  ],
  instructions: [
    'Dans une casserole faire fondre le beurre à feu doux.',
    "Ajouter la cassonade, le sirop d'érable et le lait condensé sucré.",
    'Bien mélanger et cuire à feu moyen-vif 5 minutes en remuant constamment.',
    'Retirer du feu.',
    'Ajouter les guimauves miniatures et bien mélanger pour les faire fondre.',
    'Remplir les mini cornets à la cuillère, vous pouvez utiliser un petit entonoir.',
    'Laisser reposer au réfrigérateur.',
  ],
  tags: ['érable', 'caramel', 'gourmandise'],
  slug: 'petits-cornets-a-l-erable',
}
