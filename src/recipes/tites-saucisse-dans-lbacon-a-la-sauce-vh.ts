import { Recipe } from '@/types/recipe'

export const titesSaucisseDansLbaconALaSauceVh: Recipe = {
  id: 'tites-saucisse-dans-l-bacon-a-la-sauce-vh',
  title: "Tites saucisse dans l'bacon à la sauce VH",
  description:
    "Un classique de famille Tites saucisse dans l'bacon à la sauce VH",
  categories: ['Végétarien'],
  prepTime: { min: 25, max: 25 },
  cookTime: { min: 60, max: 60 },
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    'Un paquet de saucisse à hot dog',
    'Un paquet de bacon canadien',
    "Un pot de sauce pour cuisson à l'ail forte pour côtes levées VH",
  ],
  instructions: [
    'Couper chaque saucisse en 4.',
    'Couper chaque tranche de bacon en 3.',
    'Rouler une petite tranche de bacon autour de chaque morceau de saucisse et faire tenir avec un cure-dents.',
    'Mettre le tout dans un plat de pyrex.',
    'Verser le pot de sauce VH dessus et enfourner 1h à 1h30.',
  ],
  tags: ['bacon', 'saucisse', 'sauce VH'],
  images: [
    {
      small:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/tites-saucisse-dans-l-bacon-a-la-sauce-vh',
      medium:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/tites-saucisse-dans-l-bacon-a-la-sauce-vh',
      large:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/tites-saucisse-dans-l-bacon-a-la-sauce-vh',
    },
  ],
  source: 'David Cloutier',
  slug: 'tites-saucisse-dans-lbacon-a-la-sauce-vh',
}
