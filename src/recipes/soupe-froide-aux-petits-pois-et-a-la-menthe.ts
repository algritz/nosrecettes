import { Recipe } from '@/types/recipe'

export const soupeFroideAuxPetitsPoisEtALaMenthe: Recipe = {
  id: 'soupe-froide-aux-petits-pois-et-a-la-menthe',
  title: 'Soupe froide aux petits pois et à la menthe',
  description:
    "Une soupe rafraîchissante aux petits pois et à la menthe, idéale pour l'été, servie froide après refroidissement.",
  categories: ['Soupes'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 15, max: 15 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    "10 ml d'huile d'olive",
    '20 ml de beurre',
    '45 ml oignon moyen haché fin',
    '1/2 pomme de terre Yukon Gold coupée en dés',
    '165 ml de bouillon de poulet',
    '800 ml de petits pois congelés',
    '165 ml feuilles de menthe ciselées',
    'Jus de citron, au goût',
    'Parmesan râpé, au goût',
  ],
  instructions: [
    "Dans un chaudron, faire cuire l'oignon dans l'huile d'olive et le beurre environ 3 min, en les remuant constamment.",
    "Quand l'oignon est légèrement doré, ajouter les cubes de pomme de terre et continuer la cuisson 2 min.",
    'Ajouter le bouillon de poulet et porter à ébullition.',
    'Laisser ensuite mijoter 10 min.',
    'Ajouter les pois et la menthe.',
    'Laisser mijoter 4 min de plus.',
    'Quand les pois sont tendres, retirer le chaudron du feu.',
    'Mixer la soupe pour la rendre lisse et la passer au tamis.',
    'Réfrigérer au moins 4 h.',
    'Assaisonner, ajouter un peu de jus de citron et de parmesan et servir.',
  ],
  tags: ['soupe froide', 'menthe', 'été'],
  marinatingTime: { min: 240, max: 240 },
  slug: 'soupe-froide-aux-petits-pois-et-a-la-menthe',
}
