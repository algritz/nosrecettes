import { Recipe } from '@/types/recipe'

export const grillCheeseBaconEtJalapeno: Recipe = {
  id: 'grill-cheese-bacon-et-jalapeno',
  title: 'Grill cheese bacon et Jalapeño',
  description:
    'Un sandwich grillé chaud et fondant avec fromage à la crème, jalapeño, cheddar et bacon, idéal pour un déjeuner ou un snack épicé.',
  categories: ['Sandwichs'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 10, max: 10 },
  servings: 3,
  difficulty: 'Facile',
  ingredients: [
    '1 paquet de fromage à la crème, ramolli',
    '1 jalapeño, haché finement (épépiné si désiré)',
    "1 c. poudre d'ail",
    'sel casher',
    'poivre noir finement moulu',
    '6 tranches de pain français',
    '2 tasses de cheddar râpé',
    '6 tranches de bacon cuit',
  ],
  instructions: [
    "Dans un grand bol, mélanger le fromage à la crème, le piment jalapeño et la poudre d'ail et assaisonner de sel et de poivre.",
    'Beurrer un côté de chaque tranche de pain français.',
    "De l'autre côté de chaque tranche, étaler une couche du mélange de fromage à la crème.",
    'Dans une grande poêle à feu moyen, ajouter le pain avec le mélange de fromage à la crème, côté beurré vers le bas.',
    "Garnir de 1/3 tasse de cheddar et 2 tranches de bacon, puis garnir d'une autre 1/3 tasse de cheddar.",
    'Garnir de la tranche de pain restante, côté beurré vers le haut.',
    "Cuire jusqu'à ce qu'il soit fondu et doré, 4 à 5 minutes, puis retourner et faire cuire 4 minutes de plus.",
    'Répétez avec les deux autres sandwichs.',
  ],
  tags: ['fromage à la crème', 'jalapeño', 'sandwich'],
  images: [
    {
      small:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/grill-cheese-bacon-et-jalapeno',
      medium:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/grill-cheese-bacon-et-jalapeno',
      large:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/grill-cheese-bacon-et-jalapeno',
    },
  ],
  source: 'David Cloutier',
  slug: 'grill-cheese-bacon-et-jalapeno',
}
