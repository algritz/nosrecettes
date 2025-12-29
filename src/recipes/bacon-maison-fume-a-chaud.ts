import { Recipe } from '@/types/recipe';

export const baconMaisonFumeAChaud: Recipe = {
  id: 'bacon-maison-fume-a-chaud',
  title: 'Bacon maison fumé à chaud',
  description: 'Le bacon d\'épicerie peut aller se ré-habiller! Bacon maison fumé à chaud',
  categories: ['Végétarien'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 210, max: 210 },
  marinatingTime: { min: 2880, max: 2880 },
  servings: 3,
  difficulty: 'Facile',
  ingredients: [
    '1.5 kg de flanc de porc',
    '1/3 de tasse de gros sel casher',
    '1/3 de tasse de cassonade',
    '2 c. à soupe de sucre d\'érable',
    '1 c. à soupe de paprika',
    '1 c. à soupe de poivre noir fraichement moulu'
  ],
  instructions: [
    'Dans un bol, mélanger tous les ingrédients de la salaison et frotter le flanc de porc avec.',
    'Mettre le flanc dans un sac sous vide et laisser reposer 48h au réfrigérateur en le retournant après 24h.',
    'Après les 48h de repos, rincer la pièce de viande à l\'eau et éponger avec un essuie-tout.',
    'Laissez sécher le flanc au réfrigérateur 6-7h sur une grille pour que l\'air passe en dessous.',
    'Préchauffer votre fumoir avec l\'essence de bois de votre choix. Il doit être entre 160 F et 175 F.',
    'Déposer la pièce de viande dans le fumoir et insérer un thermomètre dans la partie charnue de la viande.',
    'Faire fumer jusqu\'à ce que la température de la viande atteigne 160 F, soit 3h 30 à 4h.',
    'Retirer du fumoir, laisser tièdir et emballer dans du papier de boucher et laisser reposer 8 heures ou toute la nuit.',
    'Trancher et emballer sous vide en paquet de 8 à 10 tranches. Congeler immédiatement.',
    'Au moment de déguster, faire cuire les tranches dans une poêle pour les rendre croustillantes et servir.'
  ],
  tags: ['fumé', 'bacon', 'fumer'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/bacon-maison-fume-a-chaud',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/bacon-maison-fume-a-chaud',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/bacon-maison-fume-a-chaud'
    }
  ],
  source: 'David Cloutier',
  notes: 'Temps de marinade de 48 heures, cuisson entre 3h30 et 4h, repos de 8 heures ou toute la nuit.',
  slug: 'bacon-maison-fume-a-chaud'
};
