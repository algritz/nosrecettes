import { Recipe } from '@/types/recipe'

export const saladeAuCanardEtFruits: Recipe = {
  id: 'salade-au-canard-et-fruits',
  title: 'Salade au canard et fruits',
  description:
    "Une salade fraîche et élégante avec du canard mariné et des fruits, accompagnée d'une vinaigrette balsamique aux framboises.",
  categories: ['Salades'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 20, max: 20 },
  marinatingTime: { min: 120, max: 120 },
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    '2 Poitrine de canard',
    "2 c. à soupe d'huile de canola",
    "2 c. à soupe de jus d'orange (ou de clémentine)",
    '1/2 c. à thé de cinq-épices chinoises',
    "2 gousses d'ail, hachées",
    "1 c. à soupe de zeste d'orange finement râpé",
    '2 c. à soupe de sauce tamari',
    "1 c. à thé de miel liquide ou de sirop d'érable",
    'Sel et poivre au goût',
    'Mélange de salade',
    'Quartiers de clémentine',
    'Framboises',
    'Ciboulette',
    'Amandes tranchées',
    'Vinaigre balsamique de framboise',
    "Huile d'olive",
  ],
  instructions: [
    'Quadriller la partie grasse des poitrines avec un couteau et faire mariner 2-3 heures maximum.',
    "Dans une poêle, chauffer l'huile et saisir les poitrines à feu vif de chaque côté.",
    'Retirer et disposer le canard dans un plat allant au four.',
    "Déglacer avec la marinade la poêle et verser sur les poitrines avant de mettre au four à 350°F environ 20 minutes ou jusqu'à ce que le canard soit bien rosé.",
    'Pendant ce temps, mélanger la salade, les quartiers de clémentines, les framboises et la ciboulette dans deux assiettes.',
    "Faire la vinaigrette: mélanger le vinaigre balsamique de framboise et l'huile d'olive au goût.",
    "Une fois le canard cuit, mettre les poitrines sur une planche à découper et les enrober dans du papier d'aluminium 5 minutes.",
    'Couper en tranches fines les poitrines et les remettre dans la sauce de cuisson (marinade chauffée au four) afin de bien enrober chaque tranche de canard.',
    'Servir les tranches sur les 2 assiettes de salade déjà montées.',
    "Parsemer d'amandes tranchées.",
    "Verser la vinaigrette de vinaigre balsamique aux framboises et huile d'olive.",
  ],
  tags: ['fruits', 'marinade', 'grill'],
  images: [
    {
      small:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/salade-au-canard-et-fruits',
      medium:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/salade-au-canard-et-fruits',
      large:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/salade-au-canard-et-fruits',
    },
  ],
  source: 'David Cloutier',
  slug: 'salade-au-canard-et-fruits',
}
