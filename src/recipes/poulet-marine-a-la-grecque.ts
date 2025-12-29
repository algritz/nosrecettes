import { Recipe } from '@/types/recipe';

export const pouletMarineALaGrecque: Recipe = {
  id: '1764521491911',
  title: 'Poulet mariné à la grecque',
  description: 'Poulet mariné au yogourt grec, citron, ail et origan, cuit au BBQ.',
  categories: ['Vollaille', 'Marinade', 'Barbecue'],
  prepTime: { min: 5, max: 5 },
  cookTime: { min: 0, max: 0 },
  marinatingTime: { min: 180, max: 180 },
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    'Morceaux de poulet de votre choix',
    '6 gousses d\'ail émincées (~ 2 c. à soupe)',
    '2 c. à soupe de vinaigre de vin blanc (ou de vinaigre de vin rouge ou de cidre)',
    '1/2 tasse (125 ml) de jus de citron',
    '2 c. à soupe d\'huile d\'olive extra vierge',
    '3/4 tasse de yogourt à la grecque',
    '1 1/2 c. à soupe d\'origan séché',
    '1 c. à thé de sel',
    '1/2 c. à thé de poivre noir'
  ],
  instructions: [
    'Dans un grand bol, mélanger tous les ingrédients de la marinade.',
    'Ajouter le poulet et bien enrober; mariner de 3 à 24 heures au réfrigérateur.',
    'Préchauffer le BBQ à 350°F.',
    'Déposer le poulet sur la grille; réserver la marinade.',
    'À mi-cuisson, badigeonner avec la marinade sur le dessus seulement.',
    'Terminer la cuisson et servir avec sauce tzatziki et salade grecque.'
  ],
  tags: ['yogourt grec', 'origan', 'grill'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/poulet_marine_a_la_grec',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/poulet_marine_a_la_grec',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/poulet_marine_a_la_grec'
    }
  ],
  accompaniment: 'Sauce Tzatziki et salade grecque',
  source: 'David Cloutier',
  notes: 'Formaté à partir du contenu fourni; temps et portions variables conservés. [1]',
  slug: 'poulet-marine-a-la-grecque'
};
