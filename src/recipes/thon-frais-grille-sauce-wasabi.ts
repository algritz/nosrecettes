import { Recipe } from '@/types/recipe';

export const thonFraisGrilleSauceWasabi: Recipe = {
  id: 'thon-frais-grille-sauce-wasabi',
  title: 'Thon frais grillé, sauce wasabi',
  description: 'Une recette de thon frais grillé accompagné d\'une sauce relevée au wasabi, parfait pour une cuisson rapide et savoureuse.',
  categories: ['Vollaille'],
  prepTime: 15,
  cookTime: 5,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '4 steaks de thon, pas trop épais',
    '3 cuillères à soupe de sauce soja',
    '1 cuillère à soupe de poivre noir concassé',
    '100 g de yaourt nature',
    '6 cuillères à soupe de mayonnaise',
    '1 cuillère à soupe de wasabi',
    '2 cuillères à soupe d\'aneth ciselée finement',
    '2 cuillères à soupe de jus de citron',
    'huile d\'olive'
  ],
  instructions: [
    'Versez la sauce soja dans une grande assiette et ajoutez le poivre. Déposez-y les steaks de thon, et retournez-les pour bien imprégner la marinade; laissez en attente.',
    'Dans un grand bol, versez le yaourt, la mayonnaise, le wasabi, l\'aneth et le jus de citron. Mélangez jusqu\'à l\'obtention d\'une sauce bien lisse. Rectifiez l\'assaisonnement et ajoutez encore du wasabi, si vous aimez les sauces très relevées !',
    'Egouttez les steaks de thon, badigeonnez-les d\'huile d\'olive et faites les saisir rapidement sur les 2 faces dans une grande poêle anti-adhésive préalablement chauffée sur feu vif.',
    'Servez aussitôt, avec la sauce et des légumes sautés.'
  ],
  tags: ['wasabi', 'marinade sèche', 'grill'],
  marinatingTime: 10,
  notes: 'Ce fait très bien sur le BBQ',
  slug: 'thon-frais-grille-sauce-wasabi'
};
