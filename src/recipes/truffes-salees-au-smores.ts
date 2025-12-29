import { Recipe } from '@/types/recipe'

export const truffesSaleesAuSmores: Recipe = {
  id: '1764533393616',
  title: "Truffes salées au s'mores",
  description:
    "Boules façon s'mores (graham, guimauve) enrobées de chocolat noir et finies au gros sel.",
  categories: ['Pâtisseries et desserts', 'Desserts'],
  prepTime: { min: 30, max: 30 },
  cookTime: { min: 5, max: 5 },
  servings: 24,
  difficulty: 'Facile',
  ingredients: [
    '1 paquet de biscuits graham (ou 1 1/2 tasse de miettes de biscuits graham)',
    '1 tasse de pépites de chocolat mini',
    '1/4 c. à thé de sel',
    '1 1/2 tasse de marshmallow fluff (guimauve en pot)',
    '2 grandes tablettes de chocolat (idéalement chocolat noir), pour faire fondre',
    'Gros sel, pour garnir',
  ],
  instructions: [
    'Écraser finement les biscuits graham directement dans l’emballage, puis verser dans un bol et défaire les gros morceaux au besoin.',
    'Ajouter les mini pépites de chocolat, le sel et la guimauve; bien mélanger.',
    'Réfrigérer 10 minutes.',
    'Rouler en boules d’environ 1 po et déposer sur une plaque recouverte de papier ciré. Congeler 15 minutes.',
    'Casser les tablettes de chocolat dans un bol allant au micro-ondes. Faire fondre 75 secondes en s’arrêtant toutes les 30 secondes pour vérifier et remuer.',
    'Tremper chaque boule dans le chocolat fondu, déposer sur papier ciré et saupoudrer de gros sel.',
    'Réfrigérer jusqu’au service.',
  ],
  tags: ["s'mores", 'guimauve', 'graham'],
  source: 'David Cloutier',
  slug: 'truffes-salees-au-smores',
}
