import { Recipe } from '@/types/recipe';

export const supremesDeCanardBarbecueSauceAuxFraises: Recipe = {
  id: 'supremes-de-canard-barbecue-sauce-aux-fraises',
  title: 'Suprêmes de canard barbecue, sauce aux fraises',
  description: 'Suprêmes de canard désossés, assaisonnés et grillés, servis avec une sauce aux fraises parfumée, pour une saveur estivale et raffinée.',
  categories: ['Vollaille', 'Plats principaux', 'Barbecue'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 10, max: 10 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    'Sel épicé 30 ml (2 c. à soupe)',
    'Sucre 5 ml (1 c. à thé)',
    'Sel et poivre 2 ml (1/2 c. à thé)',
    'Cannelle, coriandre et gingembre moulus 10 ml (2 c. à thé)',
    'Poudre d\'oignon 4 ml (1 c. à thé)',
    'Suprêmes de canard désossés (poitrines de canard désossées sans la peau) d\'environ 225 g (1/2 lb) chacun',
    'Sachet de sauce demi-glace du commerce',
    '250 ml (1 tasse) d\'eau',
    '15 ml (1 c. à soupe) de vinaigre de vin rouge',
    '80 ml (1/3 tasse) de jus de fruits rouges, au choix',
    '250 ml (1 tasse) de fraises tranchées',
    'Sel et Poivre noir concassé, au goût'
  ],
  instructions: [
    'Dans un bol, mélanger le sucre, le sel, le poivre, la cannelle, la coriandre, le gingembre et la poudre d\'oignon.',
    'Saupoudrer sur les suprêmes de canard et frotter toute la surface de la viande pour bien faire pénétrer le mélange d\'épices.',
    'Laisser reposer au réfrigérateur pendant 2 heures.',
    'Préchauffer le barbecue à feu moyen-élevé.',
    'Déposer les poitrines de canard sur la grille du barbecue et cuire de 8 à 10 minutes ou jusqu\'à ce que la viande soit cuite, mais encore rosée. Retourner une fois à mi-cuisson.',
    'Retirer du feu, recouvrir d\'une feuille de papier d\'aluminium et laisser reposer pendant 10 minutes. (Le canard se sert préférablement rosé à l\'intérieur. Prolonger un peu le temps de cuisson pour une cuisson à point.)',
    'Dans une petite casserole, réhydrater la sauce demi-glace avec l\'eau et porter à ébullition. Réserver 80 ml (1/3 tasse) de la préparation et conserver le reste pour une autre utilisation.',
    'Dans la même casserole, mélanger la sauce demi-glace réservée, le sucre, le vinaigre de vin et le jus de fruits. Laisser mijoter à découvert pendant 5 minutes.',
    'Ajouter les fraises et laisser mijoter 2 minutes supplémentaires.',
    'Servir les suprêmes de canard tranchés sur un lit de jeunes verdures craquantes. Napper de sauce aux fraises, saler et garnir de poivre noir concassé.'
  ],
  tags: ['barbecue', 'sauce aux fraises', 'volaille'],
  marinatingTime: { min: 120, max: 120 },
  slug: 'supremes-de-canard-barbecue-sauce-aux-fraises'
};
