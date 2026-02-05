import { Recipe } from '@/types/recipe';

export const tarteAuBeurreDarachideEtAuChocolat: Recipe = {
  id: 'tarte-au-beurre-d-arachide-et-au-chocolat',
  title: 'Tarte au beurre d\'arachide et au chocolat',
  description: 'Une tarte gourmande au beurre d\'arachide et au chocolat, avec une croûte croustillante et une garniture crémeuse et chocolatée.',
  categories: ['Pâtisseries et desserts'],
  prepTime: { min: 25, max: 25 },
  cookTime: { min: 0, max: 0 },
  marinatingTime: { min: 240, max: 240 },
  servings: 9,
  difficulty: 'Facile',
  ingredients: [
    '1-1/4 tasses de chapelure de biscuits Oreo',
    '1/4 tasse de beurre, fondu',
    '1 paquet de fromage à la crème Philadelphia en brique, ramolli',
    '1/2 tasse plus 1 c. à soupe de beurre d’arachide crémeux Kraft',
    '1 paquet (format de 4 portions) de pouding instantané JELL-O au chocolat',
    '1 tasse de lait froid',
    '2 tasses de garniture fouettée COOL WHIP décongelée',
    '6 oz de chocolat mi-sucré'
  ],
  instructions: [
    'Mélanger la chapelure et le beurre, presser le mélange au fond et sur la paroi d’un moule à tarte de 9 po. Mélanger la chapelure et le beurre, presser le mélange au fond et sur la paroi d’un moule à tarte de 9 po.',
    'Battre au fouet le fromage à la crème et 1/2 tasse de beurre d’arachide dans un bol moyen jusqu\'à homogénéité.',
    'Ajouter la préparation pour pouding sèche et le lait, battre 2 min.',
    'Incorporer 1 tasse de garniture Cool Whip et verser la préparation dans la croûte.',
    'Réfrigérer jusqu\'à l\'utilisation.',
    'Chauffer le reste de la garniture Cool Whip et le chocolat au micro-ondes, dans un bol conçu pour cet usage 1 minute 30 secondes à 2 minutes ou jusqu’à ce que le chocolat ait complètement fondu et que le mélange soit homogène, en remuant après chaque minute.',
    'Bien braser et laisser refroidir.',
    'Étaler le mélange au chocolat sur la garniture de la croûte.',
    'Chauffer le reste du beurre d’arachide au micro-ondes 30 secondes, dans un bol conçu pour cet usage.',
    'Remuer, puis en arroser la tarte.',
    'Réfrigérer 4 heures ou jusqu\'à ce que la garniture soit ferme.'
  ],
  tags: ['chocolat', 'arachide', 'gourmandise'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/tarte_beurre_arachide_chocolat',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/tarte_beurre_arachide_chocolat',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/tarte_beurre_arachide_chocolat'
    }
  ],
  source: 'David Cloutier',
  slug: 'tarte-au-beurre-darachide-et-au-chocolat'
};
