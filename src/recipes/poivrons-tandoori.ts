import { Recipe } from '@/types/recipe';

export const poivronsTandoori: Recipe = {
  id: '1766769787490',
  title: 'Poivrons tandoori',
  description: 'Poivrons farcis épicés et grillés, marinés dans une sauce citronnée, servis chauds ou tièdes.',
  categories: ['Végétarien', 'Plats principaux', 'Barbecue'],
  prepTime: 60,
  cookTime: 40,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Poivrons',
      items: [
        '4 gros poivrons jaunes, rouges ou verts'
      ]
    },
    {
      title: 'Farce',
      items: [
        '30 ml d\'huile végétale',
        '3 ml de graines de cumin',
        '3 ml de curcuma moulu',
        '3 ml de poivre de Cayenne',
        '1 oignon moyen haché finement',
        '1 gousse d\'ail émincée',
        '1 pomme de terre pelée et coupée en dés',
        '1/3 de chou vert coupé en fines tranches',
        '1 grosse tomate mûre hachée finement',
        '30 ml de noix de cajou hachées grossièrement',
        '65 ml de coriandre fraîche hachée grossièrement',
        '125 ml de gouda ou cheddar doux râpé',
        '30 ml de raisins secs dorés',
        'Sel'
      ]
    },
    {
      title: 'Marinade',
      items: [
        '30 ml de jus de citron fraîchement pressé',
        '15 ml d\'huile végétale',
        '1 gousse d\'ail hachée grossièrement',
        '10 ml de gingembre frais pelé',
        'Sel, au goût'
      ]
    }
  ],
  instructions: [
    'Préparation de la farce : Dans une grande poêle, chauffer l\'huile à feu moyen. Ajouter les graines de cumin, le curcuma, le poivre de Cayenne, les oignons et l\'ail émincé. Cuire jusqu\'à ce que les oignons commencent à dorer. Ajouter les autres ingrédients et cuire 2 min de plus. Réduire à feu doux, couvrir et cuire de 10 à 15 min, en remuant de temps en temps, jusqu\'à ce que les légumes soient tendres.',
    'Préparation de la marinade : Combiner le jus de citron, l\'huile, l\'ail, le gingembre et le sel. Mélanger jusqu\'à ce que la texture soit lisse.',
    'À l\'aide d\'un pinceau, badigeonner l\'intérieur des poivrons avec la marinade et laisser mariner 30 min.',
    'Couper le dessus des poivrons, les évider et épépiner à l\'aide d\'une cuillère parisienne.',
    'Badigeonner l\'intérieur des poivrons farcis avec la marinade, les farcir généreusement.',
    'Poser les poivrons sur un anneau de papier d\'aluminium chiffonné et replacer les capuchons.',
    'Réfrigérer jusqu\'à 6 heures si nécessaire, recouverts de film plastique.',
    'Préparer le gril pour cuisson indirecte, placer une lèchefrite au centre sous la grille.',
    'Cuire les poivrons farcis à 180°C (350°F) pendant environ 40 minutes, en les plaçant au-dessus de la lèchefrite, loin de la chaleur vive.',
    'En fin de cuisson, glisser les poivrons au-dessus de la flamme pour que la peau noircisse légèrement avant de servir.'
  ],
  tags: ['grill', 'épices', 'farcis'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/poivrons-tandoori',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/poivrons-tandoori',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/poivrons-tandoori'
    }
  ],
  source: 'David Cloutier',
  slug: 'poivrons-tandoori'
};
