import { Recipe } from '@/types/recipe';

export const shotgunShellsAuFumoir: Recipe = {
  id: 'shotgun-shells-au-fumoir',
  title: 'Shotgun Shells au fumoir',
  description: 'Excellent et différent',
  categories: ['Viande', 'Fumoir', 'Barbecue'],
  prepTime: { min: 30, max: 60 },
  cookTime: { min: 120, max: 180 },
  marinatingTime: { min: 480, max: 720 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '450 g de bœuf haché',
    '250 g de fromage Monterrey Jack râpé ou tout autre fromage de votre choix',
    '2 cuillères à soupe d\'épices barbecue',
    '1 jalapenos',
    'Environ 10 coquilles de manicotti crues',
    '20 tranches de bacon',
    'Une bouteille de sauce barbecue de votre choix'
  ],
  instructions: [
    'Dans un saladier moyen, mélangez le bœuf haché, le fromage, les épices barbecue et le jalapenos.',
    'Mélangez avec les mains jusqu\'à ce que le tout soit bien incorporé.',
    'Disposez vos coquilles de manicotti crues et farcissez-les chacune avec le mélange de bœuf haché.',
    'Une fois farcies, enveloppez chaque coquille de manicotti dans 2 tranches de bacon.',
    'Conservez au réfrigérateur pendant 6 heures ou une nuit.',
    'Préchauffez votre fumoir à 275°F.',
    'Placez les manicotti dans le fumoir.',
    'Laissez-les fumer pendant 2 à 3h en badigeonnant de sauce BBQ toutes les 30 minutes.',
    'Servez immédiatement et dégustez !'
  ],
  tags: ['fumoir', 'barbecue', 'bacon'],
  source: 'David Cloutier',
  slug: 'shotgun-shells-au-fumoir'
};
