import { Recipe } from '@/types/recipe'

export const pilonsDePouletsPiquantsALerableSurLeBbq: Recipe = {
  id: '1766691434613',
  title: 'Pilons de poulets piquants à l’érable sur le BBQ',
  description:
    'Un délicieux plat de pilons de poulet épicés à l’érable, grillés à la perfection avec une sauce piquante et sucrée.',
  categories: ['Vollaille', 'Barbecue'],
  prepTime: { min: 25, max: 25 },
  cookTime: { min: 50, max: 50 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Protéines',
      items: ['12 pilons de poulet'],
    },
    {
      title: 'Marinade sèche',
      items: [
        '10 ml de sel de cacher',
        '5 ml de sel d’ail',
        '15 ml de poivre fraîchement moulu',
        '10 ml de paprika',
        '5 ml de piment de cayenne',
        "30 ml d'huile d'olive extra-vierge",
      ],
    },
    {
      title: 'Glaçage',
      items: [
        '45 ml de beurre non salé',
        "60 ml de sirop d'érable",
        '15 ml de Sriracha',
        '15 ml de Sambal Oelek',
        '15 ml de sauce piquante Firebarns original ou chipotlé',
        '30 ml de whisky',
        '30 ml de ciboulette hachée finement',
      ],
    },
  ],
  instructions: [
    "Dans un bol, mélanger les épices de la marinade sèche. Incorporer l'huile d'olive et bien brasser.",
    "Enrober les pilons de poulet d'épices.",
    "Faire fondre le beurre dans une petite casserole sur un feu moyen. Incorporer le sirop d'érable, les sauces piquantes, la ciboulette et le whisky, puis cuire jusqu'à ce que la mixture produise des bulles, environ 10 minutes. Réserver et garder chaud.",
    'Préparer le grill pour une cuisson indirecte et le préchauffer à feu moyen-vif (400°F).',
    "Disposer les pilons de poulet au centre de la grille sans qu'ils se superposent.",
    'Pendant la cuisson, badigeonner les pilons avec la sauce plusieurs fois de tous les côtés.',
    "Faire griller jusqu'à ce que la peau soit croustillante et dorée, et que le poulet soit complètement cuit, soit 45 à 60 minutes.",
    "Vérifier la cuisson en entaillant la partie la plus épaisse du pilon : la chair ne doit plus être rosée près de l'os.",
  ],
  tags: ['grill', 'épicé', 'érable'],
  source: 'David Cloutier',
  notes: 'Excellent aussi avec des hauts de cuisse.',
  slug: 'pilons-de-poulets-piquants-a-lerable-sur-le-bbq',
}
