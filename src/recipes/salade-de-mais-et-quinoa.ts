import { Recipe } from '@/types/recipe';

export const saladeDeMaisEtQuinoa: Recipe = {
  id: 'salade-de-mais-et-quinoa',
  title: 'Salade de maïs et quinoa',
  description: 'Une salade fraîche et savoureuse combinant quinoa, maïs, légumes et épices, idéale pour un repas léger ou un accompagnement.',
  categories: ['Salades'],
  prepTime: 20,
  cookTime: 20,
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    '1 tasse de quinoa blanc ou rouge',
    '2 c. à soupe d\'huile d\'olive ou de beurre',
    '1 2/3 tasse de bouillon de volaille ou de légumes',
    '1 feuille de laurier',
    '1 à 2 anis étoilé',
    '4 c. à soupe d\'huile d\'olive ou canola',
    '2 tasses de grains de maïs cuits ou dégelés et bien égouttés',
    '1/2 tasse d\'oignons verts tranchés finement (environ 4 oignons)',
    '1 poivron rouge pelé, épépiné et coupé en dés, ou non pelé et cuit dans un peu d\'huile',
    '1/2 c. à thé de cumin moulu',
    '1/4 c. à thé de piments broyés (ou au goût)',
    '1 c. à soupe de zeste de citron ou de lime',
    '2 à 3 c. à soupe de jus de lime ou de citron',
    'Sel'
  ],
  instructions: [
    'Quinoa\nBien rincer le quinoa sous l’eau froide jusqu’à ce qu’il soit clair. Dans une casserole, chauffer l’huile d’olive à feu moyen, puis y enrober le quinoa. Ajouter l’eau et le sel ou le bouillon. Porter à ébullition. Baisser le feu et faire mijoter à couvert environ 15 à 20 minutes pour le quinoa blanc et environ 20 à 25 minutes pour le rouge. Laisser reposer à couvert 10 minutes. À l’aide d’une fourchette, détacher les grains. Laisser refroidir.',
    'Salade\nDans une poêle antiadhésive, faire chauffer l’huile. À feu élevé, faire revenir les grains de maïs jusqu’à ce qu’ils soient légèrement dorés. Attention, ça saute! On peut recouvrir d’une passoire pendant la cuisson. Baisser le feu, ajouter les oignons verts, le poivron, le cumin et le piment. Saler. Faire revenir environ 5 min. Verser dans un bol. Ajouter le quinoa, le zeste et le jus de lime ou de citron, puis bien mélanger. Rectifier l’assaisonnement si nécessaire.'
  ],
  tags: ['quinoa', 'maïs', 'salade'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/salade-de-mais-et-quinoa',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/salade-de-mais-et-quinoa',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/salade-de-mais-et-quinoa'
    }
  ],
  source: 'David Cloutier',
  slug: 'salade-de-mais-et-quinoa'
};
