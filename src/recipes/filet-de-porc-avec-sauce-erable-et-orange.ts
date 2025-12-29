import { Recipe } from '@/types/recipe'

export const filetDePorcAvecSauceErableEtOrange: Recipe = {
  id: 'filet-de-porc-avec-sauce-erable-et-orange',
  title: 'Filet de porc avec sauce érable et orange',
  description:
    "Un délicieux filet de porc mariné dans une sauce à l'érable et à l'orange, puis cuit au four et servi avec la sauce.",
  categories: ['Vollaille'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 40, max: 40 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 filets de porc',
    "½ tasse de sirop d'érable",
    '2 c. à thé de sauce soya',
    '2 c. à thé de ketchup',
    '1 c. à thé de moutarde de dijon',
    "2 c. à thé de zeste d'orange",
    '1 ½ c. à thé de poudre de cari',
    '1 ½ c. à thé de coriandre',
    '1 c. à thé de sauce Worcestershire',
    "2 gousses d'ail émincées",
  ],
  instructions: [
    'Enlever le gras du porc.',
    'Placer les filets dans un grand sac Ziploc.',
    'Mélanger ensemble les ingrédients de la sauce et verser par dessus le porc dans le sac.',
    "Fermer et laisser mariner dans le réfrigérateur pendant 1 heure ou plus (moi j'ai mariné pendant 8h).",
    'Transférer les filets et la marinade dans une rôtissoire.',
    'Faire cuire au four à découvert à 350°F, environ 40 minutes.',
    "Laisser ensuite reposer couvert avec un papier d'aluminium pendant environ 10 minutes avant de trancher.",
    'Déposer la sauce sur les tranches.',
  ],
  tags: ['marinade', 'four', 'érable'],
  slug: 'filet-de-porc-avec-sauce-erable-et-orange',
}
