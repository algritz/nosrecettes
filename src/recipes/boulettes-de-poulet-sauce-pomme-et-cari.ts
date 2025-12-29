import { Recipe } from '@/types/recipe'

export const boulettesDePouletSaucePommeEtCari: Recipe = {
  id: 'boulettes-de-poulet-sauce-pomme-et-cari',
  title: 'Boulettes de poulet sauce pomme et cari',
  description: '',
  categories: ['Plats principaux'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 20, max: 20 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 lb de poulet haché cru',
    '1 petit piment fort épépiné et haché',
    '30 ml de feuilles de basilic thaï hachées',
    '10 ml de gingembre râpé',
    '5 ml de sel',
    '1 tasse de lait de coco',
    '15 ml de pâte de cari thaï',
    '2 pommes coupées en julienne',
  ],
  instructions: [
    'Mélanger tous les ingrédients des boulettes de poulet.',
    'Façonner en boulettes.',
    'Dans une casserole ou un wok, chauffer 30 ml du lait de coco.',
    'Ajouter la pâte de cari, chauffer un peu, puis ajouter les boulettes de poulet en remuant doucement pour les enrober.',
    'Ajouter les pommes et le reste du lait de coco.',
    'Porter à ébullition et laisser mijoter à couvert environ 10 minutes ou jusqu’à ce qu’un thermomètre inséré au centre des boulettes indique 80 °C (175 °F).',
    'Rectifier l’assaisonnement.',
    'Servir les boulettes garnies de feuilles de basilic thaï.',
  ],
  tags: ['cari', 'poulet', 'basilic'],
  slug: 'boulettes-de-poulet-sauce-pomme-et-cari',
}
