#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { siteConfig } from './site.config.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Helper function to get all recipe files
export function getRecipeFiles() {
  const recipesDir = path.join(__dirname, '..', 'src', 'recipes')
  const files = fs.readdirSync(recipesDir)

  return files
    .filter((file) => file.endsWith('.ts') && file !== 'index.ts')
    .map((file) => file.replace('.ts', ''))
}

// Helper function to extract recipe data from file
export function getRecipeData(filename) {
  try {
    const filePath = path.join(
      __dirname,
      '..',
      'src',
      'recipes',
      `${filename}.ts`,
    )
    const content = fs.readFileSync(filePath, 'utf-8')

    // Extract basic recipe info using regex
    const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/)
    const slugMatch = content.match(/slug:\s*['"`]([^'"`]+)['"`]/)

    // Extract image info - check for both new format (images array) and old format (image field)
    const imagesMatch = content.match(/images:\s*\[([\s\S]*?)\]/)
    const imageMatch = content.match(/image:\s*['"`]([^'"`]+)['"`]/)

    let imageUrl = null
    let imageTitle = null

    if (imagesMatch) {
      // New format - extract first image URL from the images array
      const imagesContent = imagesMatch[1]
      const largeImageMatch = imagesContent.match(
        /large:\s*['"`]([^'"`]+)['"`]/,
      )
      if (largeImageMatch) {
        imageUrl = largeImageMatch[1]
      }
    } else if (imageMatch) {
      // Old format - single image field
      imageUrl = imageMatch[1]
    }

    return {
      title: titleMatch ? titleMatch[1] : filename.replace(/-/g, ' '),
      slug: slugMatch ? slugMatch[1] : filename,
      imageUrl: imageUrl,
      imageTitle: titleMatch ? titleMatch[1] : filename.replace(/-/g, ' '),
    }
  } catch (error) {
    console.warn(
      `Warning: Could not parse recipe file ${filename}.ts:`,
      error.message,
    )
    return {
      title: filename.replace(/-/g, ' '),
      slug: filename,
      imageUrl: null,
      imageTitle: filename.replace(/-/g, ' '),
    }
  }
}

// Generate sitemap XML
export function generateSitemap() {
  const baseUrl = siteConfig.baseUrl
  const currentDate = new Date().toISOString().split('T')[0]

  const recipeFiles = getRecipeFiles()
  console.log(`Found ${recipeFiles.length} recipe files`)

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  
  <!-- Homepage -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Recipe Pages -->`

  // Add each recipe
  recipeFiles.forEach((filename) => {
    const recipe = getRecipeData(filename)

    sitemap += `
  <url>
    <loc>${baseUrl}/recipe/${recipe.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>`

    // Add image information if available
    if (recipe.imageUrl) {
      sitemap += `
    <image:image>
      <image:loc>${recipe.imageUrl}</image:loc>
      <image:title>${recipe.imageTitle}</image:title>
      <image:caption>${recipe.title} - Recette québécoise avec instructions détaillées</image:caption>
    </image:image>`
    }

    sitemap += `
  </url>`
  })

  sitemap += `

</urlset>`

  return sitemap
}

// Main execution
function main() {
  try {
    console.log('Generating sitemap.xml...')

    const sitemapContent = generateSitemap()
    const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml')

    fs.writeFileSync(outputPath, sitemapContent, 'utf-8')

    console.log(`✅ Sitemap generated successfully at ${outputPath}`)
    console.log(
      `📄 Sitemap contains ${(sitemapContent.match(/<url>/g) || []).length} URLs`,
    )
  } catch (error) {
    console.error('❌ Error generating sitemap:', error)
    process.exit(1)
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}
