import { Recipe } from '@/types/recipe'

export const patatesVolcan: Recipe = {
  id: 'patates-volcan',
  title: 'Patates volcan',
  description: '',
  categories: ['Végétarien'],
  prepTime: { min: 25, max: 25 },
  cookTime: { min: 90, max: 90 },
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    '2 pommes de terre',
    'Fromage orange coupé en gros bâtonnets ou autre à votre goût',
    '6 tranches de bacon',
    'Sauce barbecue de votre choix',
    '250 ml crème sure',
    '25 ml de sauce sriracha',
    'Oignons vert coupés en dés',
  ],
  instructions: [
    'Enveloppez vos pommes de terre en papillote et faire cuire pendant 50 minutes à 430ºF.',
    'Laisser tiédir, déballer et couper le haut de la pomme de terre.',
    'Vider les pommes de terre en laissant un peu de chair de pommes de terre au fond.',
    'Insèrer un énorme bâtonnet de fromage, en veillant à ce que le bâton dépasse de 1 cm ou plus au-dessus du sommet de la patate.',
    "Envelopper 3 tranches de bacon de autour de chaque pomme de terre et faire tenir avec quelques cure-dents pour que le bacon tienne en place jusqu'à ce qu’il soit cuit.",
    'Faire cuire sur une plaque et cuire au four à 400ºF pendant 30 minutes.',
    'Sortir, enlever les cure-dents, napper avec la sauce bbq, puis remettre au four pendant encore 10 minutes.',
    "Mélanger la crème sure et la sauce piquante, verser sur la patate et oupoudrer d'oignon vert.",
  ],
  tags: ['bacon', 'fromage', 'barbecue'],
  slug: 'patates-volcan',
}
