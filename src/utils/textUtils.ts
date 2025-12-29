/**
 * Normalize text for accent-insensitive search comparison.
 * Removes diacritics (accents) and normalizes ligatures.
 *
 * Examples:
 * - "Pâté" → "pate"
 * - "Bœuf" → "boeuf"
 * - "Entrées" → "entrees"
 *
 * @param text - Text to normalize
 * @returns Normalized text in lowercase without accents
 */
export function normalizeForSearch(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD') // Unicode Normalization Form: Canonical Decomposition
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritical marks (accents)
    .replace(/œ/g, 'oe') // Normalize ligatures
    .replace(/æ/g, 'ae')
}
