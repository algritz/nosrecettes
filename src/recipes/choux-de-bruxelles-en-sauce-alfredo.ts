import { Recipe } from '@/types/recipe';

export const chouxDeBruxellesEnSauceAlfredo: Recipe = {
  id: 'choux-de-bruxelles-en-sauce-alfredo',
  title: 'choux de bruxelles en sauce Alfredo',
  description: 'Recette de choux de Bruxelles en sauce Alfredo avec bacon, crème, citron et parmesan.',
  categories: ['Légumes', 'Sauces'],
  prepTime: 10,
  cookTime: 15,
  servings: 8,
  difficulty: 'Facile',
  ingredients: [
    '6 oz de bacon haché',
    '2 lb de choux de Bruxelles parés et coupés en deux',
    '1 gousse d\'ail émincée',
    '1 1/2 tasse de crème 35%',
    '1 cuillère à soupe de jus de citron fraîchement pressé',
    '1/3 tasse de parmesan râpé',
    '3/4 cuillère à café de sel ou au goût',
    '1/4 c. à thé de poivre noir'
  ],
  instructions: [
    'Dans une grande poêle profonde, à feu moyen, faire cuire le bacon haché jusqu\'à ce qu\'il soit doré.',
    'Retirer le bacon dans une assiette, en gardant 3 cuillères à soupe de gras de bacon dans la poêle.',
    'Ajouter les choux de Bruxelles parés et coupés en deux et assaisonner avec 1/2 c. à thé de sel et 1/4 c. à thé de poivre noir.',
    'Couvrir et remuer de temps en temps 8-9 min ou jusqu\'à ce qu\'il soit tendre et légèrement doré.',
    'Ajouter l\'ail haché et remuer 1 minute jusqu\'à ce qu\'il soit parfumé.',
    'Ajouter 1 1/2 tasse de crème épaisse et porter à ébullition.',
    'Incorporer 1 cuillère à soupe de jus de citron, puis saupoudrer le dessus avec 1/3 tasse de parmesan et remuer pour combiner et assaisonner au goût.',
    'Porter à ébullition puis retirer du feu et servir garni du bacon réservé.'
  ],
  tags: ['crème', 'bacon', 'légumes'],
  slug: 'choux-de-bruxelles-en-sauce-alfredo'
};
