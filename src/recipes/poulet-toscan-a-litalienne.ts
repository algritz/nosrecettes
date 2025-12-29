import { Recipe } from '@/types/recipe'

export const pouletToscanALitalienne: Recipe = {
  id: 'poulet-toscan-a-l-italienne',
  title: "Poulet toscan à l'italienne",
  description:
    'Un plat savoureux de poulet à la sauce tomate, champignons, chorizo, olives et herbes aromatiques, mijoté avec du vin rouge et du bouillon de légumes.',
  categories: ['Plats principaux'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 45, max: 45 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '4 poitrine de poulet',
    '400 g de champignons de Paris',
    '200 g de tomates cerises',
    '100 g de chorizo',
    '100 g d’olives noires',
    '1 boîte de tomates en dés (480 g)',
    '200 ml de bouillon de légumes',
    '100 ml de vin rouge',
    '2 c. à soupe de mascarpone',
    '2 c. à soupe de pâte de tomate',
    '2 c. à soupe de farine',
    '1 1/2 c. à soupe de paprika',
    '5 brins de thym',
    '3 brins de romarin',
    'huile d’olive',
    'sel et poivre',
  ],
  instructions: [
    'Retirez la peau du chorizo et coupez-le en rondelles.',
    'Coupez le bout des champignons. Nettoyez-les et émincez-les.',
    'Lavez les tomates cerises.',
    'Coupez les poitrine de poulet en 2. Saupoudrez-les de paprika, puis de farine.',
    'Faites-les dorer 5 minutes dans un poêlon avec 2 c. à soupe d’huile d’olive.',
    'Retirez-les et faites par la suite sauter les champignons et le chorizo.',
    'Laissez cuire 5 minutes.',
    'Ajoutez les tomates cerises, faites-les revenir quelques minutes.',
    'Versez le bouillon et le vin rouge. Portez à ébullition.',
    'Ajoutez les tomates en dés, les olives et la pâte de tomates.',
    'Remettez les morceaux de poulet.',
    'Salez et poivrez.',
    'Hachez le thym et le romarin. Mélangez les herbes avec le mascarpone.',
    'Incorporez cette préparation dans la sauce tomate.',
    'Laissez cuire encore 30 minutes.',
  ],
  tags: ['tomate', 'vin rouge', 'herbes aromatiques'],
  images: [
    {
      small:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/poulet-toscan-a-l-italienne',
      medium:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/poulet-toscan-a-l-italienne',
      large:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/poulet-toscan-a-l-italienne',
    },
  ],
  source: 'David Cloutier',
  slug: 'poulet-toscan-a-litalienne',
}
