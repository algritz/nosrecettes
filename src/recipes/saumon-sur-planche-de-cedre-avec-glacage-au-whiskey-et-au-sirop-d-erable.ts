import { Recipe } from '@/types/recipe';

export const saumonSurPlancheDeCedreAvecGlacageAuWhiskeyEtAuSiropDErable: Recipe = {
  id: 'saumon-sur-planche-de-cedre-avec-glacage-au-whiskey-et-au-sirop-d-erable',
  title: 'Saumon sur planche de cèdre avec glaçage au whiskey et au sirop d\'érable',
  description: 'Saumon cuit sur planche de cèdre avec un glaçage au whiskey et sirop d\'érable, servi avec citron et persil.',
  categories: ['Vollaille'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 20, max: 20 },
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    '1 planche de cèdre trempée toute la nuit, ou au moins une heure',
    '1 gros filet de saumon avec la peau',
    '1/2 tasse de Jack Daniel\'s',
    '1 tasse de sirop d\'érable',
    '1 c à thé de flocons de piment fort',
    '1 c. à soupe de beurre',
    'sel et poivre du moulin',
    '1 c. à table de flocons d\'oignon déshydratés',
    '1 citron coupé en deux',
    'persil plat pour décorer'
  ],
  instructions: [
    {
      title: 'Glaçage',
      steps: [
      'Combiner le sirop d\'érable et le Whiskey dans une casserole, porter à douce ébullition jusqu\'à obtention d\'un sirop épais qui nappe le dos d\'une cuillère.',
      'Ajouter les piments et le beurre, mélanger et réserver au chaud.'
      ]
    },
    {
      title: 'Saumon',
      steps: [
      'Assaisonner de sel, de poivre et de flocons d\'oignon le côté sans peau du saumon.',
      'Laisser reposer 15 minutes à température ambiante.',
      'Chauffer le grill à 500°F et placer la planche de cèdre sur chaleur indirecte (pour empêcher de brûler votre planche).',
      'Laisser la planche chauffer jusqu\'à ce que vous aperceviez de la fumée et entendez craquer la planche.',
      'Quand votre planche est prête, déposez le saumon dessus et arroser de glaçage.',
      'Cuire 20 minutes (plus ou moins selon la grosseur de votre filet).',
      'Arroser souvent avec le glaçage.',
      'Ne pas retourner le saumon.',
      'Au moment de retirer du grill, arroser d\'un demi citron pressé et garnir de morceaux de persil plat grossièrement haché.'
      ]
    }
  ],
  tags: ['fumoir', 'glaçage au whiskey', 'planche de cèdre'],
  wine: 'Wente Vineyard, chardonnay',
  marinatingTime: { min: 180, max: 180 },
  notes: 'Vous pouvez enlever la peau avant de faire cuire le saumon, ce n\'est pas si grave. Percez des trous dans la planche avec une perceuse pour une meilleure cuisson. S\'il reste du glaçage, n\'hésitez pas à le servir sur une boule de crème glacée à la vanille. Pour la cuisson au fumoir, viser 3 heures en pallier de 160-170-180°F.',
  slug: 'saumon-sur-planche-de-cedre-avec-glacage-au-whiskey-et-au-sirop-d-erable'
};
