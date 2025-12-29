import { Recipe } from '@/types/recipe';

export const filetDePorcSauceDijonnaiseDeSemaine: Recipe = {
  id: 'filet-de-porc-sauce-dijonnaise-de-semaine',
  title: 'Filet de porc sauce dijonnaise de semaine',
  description: 'Un délicieux filet de porc accompagné d\'une sauce dijonnaise crémeuse, parfait pour une semaine gourmande.',
  categories: ['Vollaille'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 30, max: 30 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 1/2 cuillère à soupe de grain de poivre noir moulu grossièrement',
    '1 1/2 cuillère à soupe de graines de cumin moulues grossièrement',
    '1 cuillère à soupe de cassonade tassée',
    '1/2 cuillère à thé de sel',
    '2 filets de porc',
    '1 cuillère à soupe d\'huile d\'olive',
    '1 oignon vert haché finement',
    '2 cuillères à soupe de sirop d\'érable',
    '1 tasse de crème à cuisson à 35 %',
    '3/4 de tasse de bouillon de canard (ou de poulet si non disponible)',
    '2 cuillères à thé de moutarde de Dijon',
    '2 cuillères à thé de moutarde de Dijon à l\'ancienne'
  ],
  instructions: [
    'Moudre le poivre et le cumin. Ajouter la cassonade et le sel et mélanger.',
    'Frotter les filets de porc avec le mélange d\'épices en pressant pour bien faire adhérer.',
    'Cuisson au four : Dans un poêlon allant au four, chauffer l\'huile à feu moyen-vif. Ajouter les filets de porc et les faire dorer de tous les côtés pendant 5 minutes. Poursuivre la cuisson au four préchauffé à 400°F (200°C) pendant environ 25 minutes ou jusqu\'à ce que le porc soit encore légèrement rosé à l\'intérieur. Mettre les filets de porc sur une planche à découper, les couvrir de papier d\'aluminium sans serrer, et laisser reposer pendant 5 minutes.',
    'Cuisson au BBQ : Saisir à feu vif de tous les côtés. Puis faire cuire en cuisson indirecte 20-25 minutes ou jusqu\'à ce que le porc soit encore légèrement rosé à l\'intérieur. Mettre les filets de porc sur une planche à découper, les couvrir de papier d\'aluminium sans serrer, et laisser reposer pendant 5 minutes.',
    'Préparer la sauce : Dans une casserole, faire revenir l\'oignon vert dans l\'huile 3-4 minutes. Ajouter le sirop d\'érable et laisser réduire. Ajouter les deux sortes de moutarde et brasser. Verser la crème et le bouillon de canard. Porter à ébullition, réduire le feu et laisser mijoter pendant 20 minutes ou jusqu\'à ce que la sauce ait réduit de moitié.',
    'Couper les filets de porc en tranches et les napper de la sauce.'
  ],
  tags: ['sauce dijonnaise', 'porc', 'réduction'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/filet-de-porc-sauce-dijonnaise-de-semaine',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/filet-de-porc-sauce-dijonnaise-de-semaine',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/filet-de-porc-sauce-dijonnaise-de-semaine'
    }
  ],
  wine: 'teal lake (shiraz australien)',
  source: 'David Cloutier',
  notes: 'Sortir le filet du four ou BBQ à 135°F (interne) et le couvrir de papier d\'aluminium pendant 5 à 10 minutes avant de couper.',
  slug: 'filet-de-porc-sauce-dijonnaise-de-semaine'
};
