#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { getRecipeFiles } from './generate-sitemap.js'
import { getFullUrl, getAssetUrl } from './site.config.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export function generateManifest() {
  const recipeCount = getRecipeFiles().length
  const currentYear = new Date().getFullYear()

  const manifest = {
    name: `Nos Recettes - ${recipeCount} Recettes Québécoises`,
    short_name: 'Nos Recettes',
    description: `Collection de ${recipeCount} recettes québécoises traditionnelles et modernes avec instructions détaillées et images appétissantes.`,
    start_url: getFullUrl('/'),
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0f172a',
    orientation: 'portrait-primary',
    categories: ['food', 'lifestyle', 'cooking', 'recipes'],
    lang: 'fr-CA',
    scope: getFullUrl('/'),
    icons: [
      {
        src: getAssetUrl('favicon.ico'),
        sizes: '16x16 32x32',
        type: 'image/x-icon',
      },
      {
        src: getAssetUrl('icon-192x192.png'),
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: getAssetUrl('icon-512x512.png'),
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
    screenshots: [
      {
        src: getAssetUrl('screenshot-wide.png'),
        sizes: '1280x720',
        type: 'image/png',
        form_factor: 'wide',
        label: 'Accueil avec collection de recettes',
      },
      {
        src: getAssetUrl('screenshot-narrow.png'),
        sizes: '640x1136',
        type: 'image/png',
        form_factor: 'narrow',
        label: 'Navigation mobile des recettes',
      },
    ],
    shortcuts: [
      {
        name: 'Rechercher des recettes',
        short_name: 'Recherche',
        description: 'Rechercher dans la collection de recettes',
        url: getFullUrl('/?search='),
        icons: [
          {
            src: getAssetUrl('icon-192x192.png'),
            sizes: '192x192',
          },
        ],
      },
    ],
    related_applications: [],
    prefer_related_applications: false,
  }

  return JSON.stringify(manifest, null, 2)
}

function main() {
  try {
    console.log('Generating manifest.json...')

    const manifestContent = generateManifest()
    const outputPath = path.join(__dirname, '..', 'public', 'manifest.json')

    fs.writeFileSync(outputPath, manifestContent, 'utf-8')

    const recipeCount = getRecipeFiles().length
    console.log(
      `✅ Manifest generated successfully with ${recipeCount} recipes`,
    )
  } catch (error) {
    console.error('❌ Error generating manifest:', error)
    process.exit(1)
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}
