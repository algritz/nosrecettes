import { Recipe } from '@/types/recipe';

export const tartareDeSaumonPommeConcombreEtGingembre: Recipe = {
  id: 'tartare-de-saumon-pomme-concombre-et-gingembre',
  title: 'Tartare de saumon, pomme, concombre et gingembre',
  description: 'Un tartare frais et épicé combinant saumon, pomme, concombre et gingembre, accompagné d\'une mayonnaise épicée maison.',
  categories: ['Entrées'],
  prepTime: 20,
  cookTime: 0,
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    '300g de saumon frais sans peau et le gras retiré',
    '1/2 tasse de concombre pelé et épépiné, en petits dés',
    '1/4 tasse de pomme verte pelée, épépinée et coupée en petits dés',
    '3 c. à soupe d\'oignons verts hachés finement',
    '2 c. à soupe de gingembre frais pelé, en brunoise',
    '2 c. à soupe d\'huile d\'olive',
    '1 c. à soupe de jus de lime',
    'Sel et poivre du moulin',
    '1/4 tasse de mayonnaise du commerce ou maison',
    '1 c. à soupe de jus de lime ou de vinaigre de riz',
    '1 c. à soupe de sauce soya',
    '1/2 c. à thé de sauce sriracha ou wasabi',
    '1 c. à soupe de graines de sésame rôties'
  ],
  instructions: [
    'Mélanger tous les ingrédients de la mayonnaise épicée. Réserver.',
    'Mélanger tous les ingrédients du tartare à l\'exception du saumon. Assaisonner et réfrigérer.',
    'Mettre quelques glaçons dans un bol et déposer un bol plus petit par-dessus.',
    'Couper le saumon en dés de 1 cm (3/8 po) ou plus petits au goût et déposer dans le bol refroidi.',
    'Ajouter les ingrédients du tartare réservés.',
    'Mélanger délicatement, goûter et rectifier l\'assaisonnement au besoin.',
    'Ajouter un peu de mayonnaise au goût et mélanger.',
    'Servir le reste de la mayonnaise à part.'
  ],
  tags: ['frais', 'épicé', 'saumon'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/tartare-de-saumon-pomme-concombre-et-gingembre',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/tartare-de-saumon-pomme-concombre-et-gingembre',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/tartare-de-saumon-pomme-concombre-et-gingembre'
    }
  ],
  source: 'David Cloutier',
  slug: 'tartare-de-saumon-pomme-concombre-et-gingembre'
};
