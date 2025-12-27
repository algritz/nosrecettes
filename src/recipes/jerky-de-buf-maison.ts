import { Recipe } from '@/types/recipe';

export const jerkyDeBufMaison: Recipe = {
  id: 'jerky-de-b-uf-maison',
  title: 'Jerky de bœuf maison',
  description: 'Bien meilleur que ceux vendu au dépanneur Jerky de bœuf maison',
  categories: ['Végétarien'],
  prepTime: 20,
  cookTime: 240,
  marinatingTime: 720,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    'Rôti de boeuf de 2 à 3 lb, tranché contre le grain',
    '2 tasses de coke',
    '1 cuillère à soupe de sauce Worcestershire',
    '2 cuillères à soupe de gros sel',
    '2 cuillères à café de poivre noir',
    '1 cuillère à café d\'ail en poudre',
    '1 cuillère à café de poudre d\'oignon',
    '1 cuillère à café de Sambal Oelek'
  ],
  instructions: [
    'Mélanger tous les ingrédients sauf le rôti dans un sac refermable et bien mélanger.',
    'Ajouter le bœuf dans la marinade et réfrigérez au moins 12 heures ou toute la nuit.',
    'Préchauffez votre fumoir ou four à 160°F.',
    'Retirez la viande de la marinade et éponger soigneusement chaque lanière de bœuf avec un essuie-tout. La fumée ne peut pas pénétrer dans les zones humides.',
    'Placer les lanières de viande sur les grills du fumoir et fumer pendant 3 à 4 heures (pour des tranches de ¼ de pouce d\'épaisseur). Vérifiez souvent la viande séchée après la première heure pour vous assurer qu\'elle sèche uniformément.',
    'Placez le jerky fini dans un sac à fermeture ziploc pendant qu\'il est encore chaud. Ne scellez pas complètement. Le jerky va légèrement cuire à la vapeur dans le sac, et cette étape gardera le jerky légèrement humide.'
  ],
  tags: ['fumoir', 'séchage', 'bœuf'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/jerky-de-b-uf-maison',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/jerky-de-b-uf-maison',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/jerky-de-b-uf-maison'
    }
  ],
  source: 'David Cloutier',
  slug: 'jerky-de-buf-maison'
};
