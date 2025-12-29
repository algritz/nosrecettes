import { Recipe } from '@/types/recipe'

export const sauceBarbecuePommeEtJackAuMiel: Recipe = {
  id: 'sauce-barbecue-pomme-et-jack-au-miel',
  title: 'Sauce barbecue pomme et Jack au miel',
  description:
    'Une sauce barbecue sucrée-salée à base de pommes, Jack au miel et épices, mijotée pour obtenir une saveur riche et équilibrée.',
  categories: ['Sauces'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 30, max: 30 },
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    '1 tasse de pomme granny Smith',
    '3/4 de tasse de Ketchup',
    '2 onces de Jack au miel',
    '2 c. à soupe de moutarde au Jack',
    '2 c. à thé de miel',
    '2 c. à thé de paprika',
    "1 c. à thé de poudre d'ail",
    '2 c. à soupe de cassonade',
    "Jus d'une demi lime",
    'Quelques goûtes de Texas Pete ou Tabasco',
    '1 c. à thé de sauce piquante des Caraïbes',
    'Sel et poivre au goût',
  ],
  instructions: [
    'Faire revenir les pommes avec le Jack dans une poêle et faire flamber.',
    "Ajouter du miel et laisser mijoter jusqu'à ce que les pommes soient cuites.",
    'Passer les pommes au blender et verser le mélange dans un chaudron.',
    'Ajouter tous les autres ingrédients et laisser mijoter 20-25 minutes.',
    "Ajouter une ou deux c. à soupe d'eau au besoin pour éclaircir.",
  ],
  tags: ['barbecue', 'miel', 'épicé'],
  slug: 'sauce-barbecue-pomme-et-jack-au-miel',
}
