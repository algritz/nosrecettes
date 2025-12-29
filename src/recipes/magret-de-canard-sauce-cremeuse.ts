import { Recipe } from '@/types/recipe'

export const magretDeCanardSauceCremeuse: Recipe = {
  id: 'magret-de-canard-sauce-cremeuse',
  title: 'Magret de canard sauce crémeuse',
  description: '',
  categories: ['Vollaille'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 20, max: 20 },
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    '2 magrets de canard',
    '4 c. à soupe de miel',
    '2 c. à soupe de crème fraiche épaisse',
    '1 c. à soupe de vinaigre balsamique',
  ],
  instructions: [
    "Préparez les magrets : retirez l'excès de gras sur les côtés mais laissez la graisse sur le dessus.",
    "À l'aide d'un couteau bien aiguisé, réalisez des entailles en forme de croisillons.",
    'Salez et poivrez.',
    'Déposez les magrets côté peau dans une grande poêle à revêtement anti adhésif.',
    'Laissez-les cuire 5 min.',
    "Videz l'excès de graisse et remettez les magrets dans la poêle, côté chair cette fois-ci, 3 min environ.",
    'Enfourner à 350F 10 à 15 minutes.',
    'Retirez les magrets et réservez-les au chaud.',
    'Dans une casserole faite fondre le miel y ajouter le vinaigre et la crème et laisse épaissir un peut.',
    'Découper le magret et déposer le dans une assiette avec un timbale de riz et napper de sauce.',
  ],
  tags: ['canard', 'sauce crémeuse', 'miel'],
  slug: 'magret-de-canard-sauce-cremeuse',
}
