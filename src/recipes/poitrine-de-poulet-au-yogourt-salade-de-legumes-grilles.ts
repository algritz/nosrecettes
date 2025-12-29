import { Recipe } from '@/types/recipe';

export const poitrineDePouletAuYogourtSaladeDeLegumesGrilles: Recipe = {
  id: 'poitrine-de-poulet-au-yogourt-salade-de-legumes-grilles',
  title: 'Poitrine de poulet au yogourt, salade de légumes grillés',
  description: 'Poitrine de poulet au yogourt accompagnée d\'une salade de légumes grillés, servie avec une vinaigrette aromatique.',
  categories: ['Plats principaux', 'Végétarien'],
  prepTime: { min: 25, max: 25 },
  cookTime: { min: 45, max: 45 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Poulet et marinade',
      items: [
      '4 poitrines de poulet désossées',
      '250 ml de yogourt nature',
      '2 gousses d’ail hachées',
      '2 citron (jus et zeste)',
      '15 ml de moutarde de Dijon',
      '15 ml de gingembre frais haché',
      '15 ml de basilic séché ou frais',
      '15 ml d\'origan séché ou frais',
      '5 ml de paprika moulu'
      ]
    },
    {
      title: 'Légumes',
      items: [
      '2 poivrons rouges coupés en quartiers (épépinés)',
      '2 poivrons jaunes coupés en quartiers (épépinés)',
      '500 ml de courgettes vertes coupées en tronçons (1 pouce)',
      '1 gros oignon coupé en tranches (1 pouce)'
      ]
    },
    {
      title: 'Vinaigrette',
      items: [
      '65 ml d’huile d’olive',
      '30 ml de vinaigre balsamique',
      '15 ml d\'ail haché',
      '15 ml d\'origan frais haché',
      '1 petit citron (jus et zeste)'
      ]
    }
  ],
  instructions: [
    'Dans un bol, mélanger tous les ingrédients de la marinade et y faire mariner le poulet pendant 2 à 12 heures.',
    'Préchauffer le four ou le BBQ à 400°F (200°C).',
    'Y faire cuire le poulet 25 à 35 minutes ou jusqu’à ce que les poitrines soient cuites.',
    'Pour les légumes, préchauffer le gril à feu moyen-élevé et bien griller de chaque côté.',
    'Pour la vinaigrette, mélanger tous les ingrédients dans un bol et verser sur les légumes grillés.',
    'Mélanger et assaisonner.',
    'Servir le poulet sur un lit de légumes tièdes grillés.'
  ],
  tags: ['grill', 'marinade sèche', 'citron'],
  slug: 'poitrine-de-poulet-au-yogourt-salade-de-legumes-grilles'
};
