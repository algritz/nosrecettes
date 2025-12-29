import { Recipe } from '@/types/recipe'

export const marinadePourPorcALAsiatique: Recipe = {
  id: 'marinade-pour-porc-a-l-asiatique',
  title: "Marinade pour porc à l'asiatique",
  description: "Marinade pour porc à l'asiatique",
  categories: ['Marinade'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 0, max: 0 },
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    'Un gros filet de porc (environ 600g) ou 3-4 côtelettes de porc',
    '3 c. à soupe de sauce soya ou tamari',
    "2 c. à soupe d'huile d'arachide",
    '2 c. à soupe de jus de limette',
    '2 c. à soupe de miel',
    "1 gousse d'ail émincée",
    '1/4 c. à thé de piment de Cayenne moulu ou en flocons ou de Sambal oelek',
    '2 oignons verts, hachés',
    'Poivre',
    "Une pincée d'épices à steak",
    'gingembre râpé',
  ],
  instructions: [
    'Bien mélanger et faire mariner minimum 4h avant',
    'Faire cuire sur le grill',
  ],
  tags: ['asiatique', 'marinade sèche', 'grill'],
  marinatingTime: { min: 240, max: 240 },
  notes: 'Bon avec du poulet ou du Tofu',
  slug: 'marinade-pour-porc-a-l-asiatique',
}
