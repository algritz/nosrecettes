import { Recipe } from '@/types/recipe';

export const tartareDeMagretsDeCanardAuPoivreDeSichuan: Recipe = {
  id: 'tartare-de-magrets-de-canard-au-poivre-de-sichuan',
  title: 'Tartare de magrets de canard au poivre de Sichuan',
  description: 'Un tartare de magret de canard relevé au poivre de Sichuan, servi avec une garniture de luzerne et assaisonné d\'huile d\'olive et de vinaigre balsamique.',
  categories: ['Entrées'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 0, max: 0 },
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    '1 magret de canard',
    '1 échalote',
    '2 cuillères à soupe d\'huile d\'olive extra vierge',
    '1 cuillère à soupe de vinaigre balsamique',
    '10 brins de ciboulette',
    '2 cornichons',
    '5 baies de poivre de Sichuan',
    '40 g de jets de luzerne ou cresson',
    'Sel fin et fleur de sel'
  ],
  instructions: [
    'Concasser les baies de poivre de Sichuan au mortier.',
    'Éplucher et hacher finement les échalotes.',
    'Hacher finement les cornichons et la ciboulette.',
    'Retirer la peau de vos magrets de canard ainsi que la couche de graisse pour ne conserver que la viande.',
    'Hacher au couteau la chair de magrets de canard.',
    'Mélanger dans un saladier les morceaux de chair de magret de canard avec la ciboulette, les échalotes, le poivre de Sichuan, les morceaux de cornichons, le vinaigre balsamique et l’huile d’olive.',
    'Bien mélanger le tout et saler à votre convenance.',
    'Placer au réfrigérateur avant de servir.',
    'Dressage de l’assiette : mouler une cercle de tartare au centre de l’assiette avec un cercle métallique.',
    'Éparpiller un peu de gros sel dessus et disposer quelques jets de luzerne.',
    'Faire le tour de l’assiette avec un trait d’huile d’olive et un trait de vinaigre balsamique.'
  ],
  tags: ['tartare', 'sichuan', 'canard'],
  notes: 'Si vous n’avez pas de poivre de Sichuan, vous pouvez employer un poivre noir classique. N’hésitez pas à essayer différentes sortes de poivre : mignonnette, poivre long, etc..',
  slug: 'tartare-de-magrets-de-canard-au-poivre-de-sichuan'
};
