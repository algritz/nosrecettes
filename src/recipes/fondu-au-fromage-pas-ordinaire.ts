import { Recipe } from '@/types/recipe';

export const fonduAuFromagePasOrdinaire: Recipe = {
  id: 'fondu-au-fromage-pas-ordinaire',
  title: 'Fondu au fromage pas ordinaire',
  description: 'Fondu au fromage pas ordinaire',
  categories: ['Plats principaux', 'Légumes'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 20, max: 20 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 piment vert en petits dés',
    '3 tasses de poireaux tranchés finement',
    '1 gousse d’ail',
    '250 ml de bière blonde au choix',
    '45 ml de beurre',
    '1 tomate épépinée et coupée en dés',
    '15 ml d’épices italiennes',
    '15 ml de fécule de maïs',
    '350 g de fromage emmental râpé',
    '350 g de fromage gruyère râpé'
  ],
  instructions: [
    'Faire revenir, dans votre poêlon à fondue, le beurre avec le piment, les poireaux et l’ail jusqu’à tendreté.',
    'Ajouter ensuite la bière et la tomate. Laisser mijoter 2-3 minutes.',
    'Incorporer avec une cuillère en bois le fromage, en petites quantités à la fois, ainsi que les épices italiennes.',
    'Quand le fromage est bien fondu, laisser mijoter à feu doux quelques minutes.',
    'Diluer ensuite la fécule de maïs dans un peu d’eau et verser la préparation, en petites quantités à la fois, jusqu’à l’obtention d’une belle texture qui collera bien sur le pain.',
    'Déguster avec du pain frais.'
  ],
  tags: ['fromage', 'fondue', 'italien'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/fondu-au-fromage-pas-ordinaire',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/fondu-au-fromage-pas-ordinaire',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/fondu-au-fromage-pas-ordinaire'
    }
  ],
  source: 'David Cloutier',
  slug: 'fondu-au-fromage-pas-ordinaire'
};
