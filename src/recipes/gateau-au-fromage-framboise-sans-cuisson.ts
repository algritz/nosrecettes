import { Recipe } from '@/types/recipe'

export const gateauAuFromageFramboiseSansCuisson: Recipe = {
  id: 'gateau-au-fromage-framboise-sans-cuisson',
  title: 'Gâteau au fromage framboise sans cuisson',
  description:
    'Un dessert frais et léger combinant fromage à la crème, framboises et biscuits Graham, sans cuisson.',
  categories: ['Pâtisseries et desserts'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 5, max: 5 },
  servings: 10,
  difficulty: 'Facile',
  ingredients: [
    '1 ½ paquet de framboises fraîches (½ paquet pour garnir)',
    '½ cuillère à soupe de sucre',
    '½ cuillère à soupe de jus de citron frais',
    '2 (8 onces) boîtes de fromage à la crème',
    '1 canne (300 ml) de lait condensé sucré Eagle Brand',
    '2 cuillères à café de jus de citron frais',
    '6 biscuits Graham',
    '2 cuillères à soupe de beurre fondu',
    "1 cuillère à soupe de sirop d'érable",
  ],
  instructions: [
    "Combinez 1 paquet de framboises, le sucre et de jus de citron dans une petite casserole à feu doux. Cuire jusqu'à ce que les fruits se défassent, environ 3 à 5 minutes. Retirer de la chaleur et laisser refroidir.",
    "Combinez le fromage à la crème, le lait Eagle Brand et le jus de citron avec un mélangeur à main jusqu'à consistance onctueuse et crémeuse.",
    "Écraser les biscuits Graham jusqu'à ce qu'ils forment une miette fine. Mélanger avec le beurre fondu et le sirop d'érable.",
    'Dans de petites verrines, ajoutez quelques cuillères à café du mélange de biscuits Graham et appuyez légèrement.',
    'Verser le mélange de fromage à la crème dans un sac ziploc. Coupez un petit morceau du coin pour créer un sac de pâtisserie.',
    'Presser quelques cuillères à soupe du mélange au fromage à la crème sur le mélange de biscuits Graham.',
    'Ajouter quelques cuillères à café de mélange de framboise sur le dessus du fromage à la crème.',
    'Ajouter une autre couche du mélange au fromage à la crème.',
    'Garnir avec des framboises fraîches.',
  ],
  tags: ['fraise', 'sans cuisson', 'garniture'],
  slug: 'gateau-au-fromage-framboise-sans-cuisson',
}
