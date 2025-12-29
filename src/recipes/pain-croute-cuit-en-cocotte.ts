import { Recipe } from '@/types/recipe';

export const painCrouteCuitEnCocotte: Recipe = {
  id: 'pain-croute-cuit-en-cocotte',
  title: 'Pain crouté cuit en cocotte',
  description: 'Un pain maison à croûte dure, comme à l\'épicerie.',
  categories: ['Pain'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 40, max: 40 },
  servings: 1,
  difficulty: 'Facile',
  ingredients: [
    '3 1/2 tasse de farine',
    '1 c. à thé levure à pain instantanée',
    '1 c. à thé sel',
    '1 c. à thé de sucre',
    '1 1/2 tasse eau tiède'
  ],
  instructions: [
    'Dans un grand bol, mélanger la farine, la levure, le sucre et le sel.',
    'Verser l’eau tiède et mélanger à l’aide d’une cuillère ou avec les mains jusqu’à ce que la pâte soit bien mélangée. Si la pâte semble trop liquide, vous pouvez ajouter une ou deux cuillères à soupe de farine de plus. Si elle semble un peu sèche, ajouter un peu d’eau.',
    'Couvrir le bol avec une pellicule plastique ou un linge humide et laisser reposer à température ambiante au moins 12h à 18h ou une nuit. La pâte est prête lorsque sa surface est recouverte de petites bulles.',
    'Saupoudrer une ou deux cuillères à soupe de farine sur votre surface de travail et y déposer délicatement la pâte sans la pétrir. L\'enrober d\'une fine couche de farine et former une boule avec vos mains.',
    'Déposer la pâte sur un papier parchemin et recouvrir d\'un linge humide environ 40 minutes.',
    'Préchauffer le four à 450 °F.',
    'Choisir un plat à bords hauts, style cocotte, ayant un diamètre d’environ 20 cm. Placer la cocotte avec son couvercle pendant 15 minutes au four pour la faire chauffer.',
    'Sortir le plat chaud du four et y déposer le pain avec le papier parchemin. Couvrir et cuire au four 30 minutes.',
    'Après 30 minutes de cuisson, enlever le couvercle et poursuivre la cuisson 10 minutes, ou jusqu’à ce que la croûte soit dorée.',
    'Laisser tiédir sur une grille.'
  ],
  tags: ['pain maison', 'cocotte', 'croûte dure'],
  source: 'David Cloutier',
  slug: 'pain-croute-cuit-en-cocotte'
};
