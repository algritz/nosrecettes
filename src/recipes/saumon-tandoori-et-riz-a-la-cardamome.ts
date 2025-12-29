import { Recipe } from '@/types/recipe';

export const saumonTandooriEtRizALaCardamome: Recipe = {
  id: 'saumon-tandoori-et-riz-a-la-cardamome',
  title: 'Saumon tandoori et riz à la cardamome',
  description: 'Un plat parfumé de saumon tandoori servi avec un riz à la cardamome, idéal pour un repas savoureux et épicé.',
  categories: ['Vollaille', 'Plats principaux'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 20, max: 20 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 c. à tab (15 ml) de pâte tandoori (de type Patak\'s)',
    '1 t (250 ml) de yogourt nature',
    '4 pavés de saumon sans la peau (environ 1 1/2 lb/750 g en tout)',
    '2 c. à tab (30 ml) d\'huile d\'olive',
    '4 oignons verts hachés',
    '4 gousses de cardamome broyées',
    '1 1/2 t (375 ml) de riz basmati rincé et égoutté',
    '2 1/4 t (560 ml) d\'eau',
    'tranches de citron (facultatif)',
    'sel et poivre du moulin'
  ],
  instructions: [
    'Dans un petit bol, mélanger la pâte tandoori et 1/2 t (125 ml) du yogourt. Badigeonner les pavés de saumon de la préparation au tandoori et les déposer sur une plaque de cuisson tapissée de papier d\'aluminium. Réserver.',
    'Dans une casserole, chauffer l\'huile d\'olive à feu moyen. Ajouter les oignons verts et les gousses de cardamome et cuire, en brassant, pendant 3 minutes.',
    'Ajouter le riz et cuire pendant 1 minute.',
    'Ajouter l\'eau et porter à ébullition. Saler et poivrer.',
    'Réduire à feu doux, couvrir et cuire pendant environ 12 minutes ou jusqu\'à ce que le riz soit tendre et que tout le liquide soit absorbé.',
    'Retirer la casserole du feu et laisser reposer pendant 5 minutes.',
    'Défaire les grains de riz à l\'aide d\'une fourchette.',
    'Entre-temps, cuire les pavés de saumon réservés sous le gril préchauffé du four (à environ 15 cm de la source de chaleur) de 8 à 10 minutes ou jusqu\'à ce que la chair du saumon soit opaque à l\'intérieur, mais encore moelleuse (retourner les pavés à la mi-cuisson).',
    'Au moment de servir, répartir le riz dans les assiettes et napper les pavés de saumon du reste du yogourt. Garnir de tranches de citron, si désiré.'
  ],
  tags: ['épicé', 'tandoori', 'riz parfumé'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/saumon-tandoori-et-riz-a-la-cardamome',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/saumon-tandoori-et-riz-a-la-cardamome',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/saumon-tandoori-et-riz-a-la-cardamome'
    }
  ],
  source: 'David Cloutier',
  slug: 'saumon-tandoori-et-riz-a-la-cardamome'
};
