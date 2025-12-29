import { Recipe } from '@/types/recipe'

export const tartePommeDeTerreEtSaumon: Recipe = {
  id: 'tarte-pomme-de-terre-et-saumon',
  title: 'Tarte pomme de terre et saumon',
  description:
    "Tarte ou Pizza, je vous laisse décider. Une tarte à base de pommes de terre, saumon fumé, et garnie d'une sauce au yogourt, servie avec roquette.",
  categories: ['Entrées'],
  prepTime: { min: 25, max: 25 },
  cookTime: { min: 40, max: 40 },
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    '10 grosses pommes de terre grelot cuite dans l’eau bouillante avec la pelure et refroidit',
    'Parmesan en quantité suffisante',
    'Thym frais',
    '4-5 cuillères à soupe de yogourt grec nature',
    'Une gousse d’ail hachée finement',
    'Le jus d’un demi-citron',
    'Saumon fumé à froid',
    'Roquette',
    'Huile d’olive',
    'Zeste de citron',
    'Poivre',
  ],
  instructions: [
    'Placer les pommes de terre sur un papier parchemin pour qu’elles forment un rond.',
    'Les écraser avec un verre pour leur donner la forme d’un disque.',
    'Étendre du parmesan sur les pommes de terre et saupoudrer de thym frais.',
    'Mettre au four à 425°F durant 20-25 minutes ou jusqu’à ce que le fromage forme une belle croûte dorée.',
    'Pendant ce temps, mélanger dans un bol le yogourt, le jus du demi-citron et l’ail haché finement.',
    'Une fois la croûte de pommes de terre cuite, étendre le mélange au yogourt dessus.',
    'Sur le mélange au yogourt, étendre le saumon fumé.',
    'Parsemer de roquette.',
    'Arroser d’un filet d’huile d’olive, de zeste de citron et de poivre.',
    'Couper en pointes de tarte et servir.',
  ],
  tags: ['pomme de terre', 'saumon fumé', 'tarte'],
  images: [
    {
      small:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/tarte-pomme-de-terre-et-saumon',
      medium:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/tarte-pomme-de-terre-et-saumon',
      large:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/tarte-pomme-de-terre-et-saumon',
    },
  ],
  source: 'David Cloutier',
  slug: 'tarte-pomme-de-terre-et-saumon',
}
