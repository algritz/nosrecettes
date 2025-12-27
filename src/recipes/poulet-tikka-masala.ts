import { Recipe } from '@/types/recipe';

export const pouletTikkaMasala: Recipe = {
  id: 'poulet-tikka-masala',
  title: 'Poulet tikka masala',
  description: 'Un classique indien de poulet mariné et épicé, cuit au four ou au barbecue, puis mijoté dans une sauce crémeuse aux épices et tomates.',
  categories: ['Plats principaux', 'Vollaille'],
  prepTime: 25,
  cookTime: 20,
  marinatingTime: 60,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '4 poitrines de poulet désossées et sans peau',
    '1 citron',
    '125 grammes de yogourt',
    '6 clous de girofle à l\'ail haché',
    '1 cuillère à soupe de gingembre, hachée',
    '2 cuillères à café de sel',
    '2 cuillères à café de cumin',
    '2 cuillères à café de garam masala',
    '2 cuillères à café de paprika',
    '3 cuillères à soupe d\'huile',
    '1 gros oignon haché finement',
    '2 cuillères à soupe de gingembre, hachées',
    '8 clous de girofle à l\'ail haché',
    '2 cuillères à café de cumin',
    '2 cuillères à café de curcuma',
    '2 cuillères à café de coriandre moulu',
    '2 cuillères à café de paprika',
    '2 cuillères à café de chili poudre',
    '2 cuillères à café de garam masala',
    '1 cuillère à soupe de pâte de tomates',
    '800 grammes de sauce tomate ou tomates écrasées',
    '300 ml d\'eau',
    '250 ml de crème',
    'Coriandre hachée, à décorer'
  ],
  instructions: [
    'Découper le poulet en gros cubes.',
    'Déposer le poulet dans un sac ziploc avec le reste des ingrédients de la marinade. Mélanger puis réfrigérer pendant au moins 1 à 24 heures.',
    'Préchauffer le four ou le BBQ à 500°C / 260°C.',
    'Enfiler les morceaux de poulet mariné sur des brochettes.',
    'Cuire pendant environ 15 minutes jusqu\'à ce qu\'ils soient légèrement brun foncé sur les bords.',
    'Dans un wok, faire chauffer l\'huile, puis faire sauter les oignons, le gingembre et l\'ail jusqu\'à ce qu\'ils soient tendres, mais pas dorés.',
    'Cuire les épices pendant environ 30 secondes en remuant constamment, puis ajouter la pâte de tomates.',
    'Ajouter la sauce tomate et l\'eau, puis faire bouillir et cuire pendant environ 5 minutes.',
    'Verser la crème et mélanger.',
    'Ajouter le poulet dans la sauce et cuire encore 1-2 minutes.'
  ],
  tags: ['épicé', 'curry', 'barbecue'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/poulet-tikka-masala',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/poulet-tikka-masala',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/poulet-tikka-masala'
    }
  ],
  accompaniment: 'Servez avec du riz et du pain naan',
  source: 'David Cloutier',
  slug: 'poulet-tikka-masala'
};
