#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { getRecipeFiles, getRecipeData } from './generate-sitemap.js'
import { siteConfig, getFullUrl, getAssetUrl } from './site.config.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export function generateIndexHTML() {
  const recipeFiles = getRecipeFiles()
  const recipeCount = recipeFiles.length
  const currentDate = new Date().toISOString()

  // Get some sample recipes for keywords
  const sampleRecipes = recipeFiles
    .slice(0, 5)
    .map((filename) => getRecipeData(filename))
  const sampleTitles = sampleRecipes.map((recipe) => recipe.title).join(', ')

  // Generate dynamic keywords based on actual recipes
  const baseKeywords = [
    'recettes québécoises',
    'cuisine québécoise',
    'recettes canadiennes',
    'recettes traditionnelles',
    'cuisine du Québec',
    'recettes faciles',
    'recettes familiales',
    'recettes avec photos',
    'instructions détaillées',
  ]

  const dynamicKeywords = [
    ...baseKeywords,
    ...sampleTitles.toLowerCase().split(', '),
  ]

  const htmlContent = `<!doctype html>
<html lang="fr-CA">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Primary Meta Tags -->
    <title>Nos Recettes - Collection de ${recipeCount} recettes québécoises authentiques</title>
    <meta name="title" content="Nos Recettes - Collection de ${recipeCount} recettes québécoises authentiques" />
    <meta name="description" content="Découvrez notre collection de ${recipeCount} recettes québécoises traditionnelles et modernes. Instructions détaillées, temps de préparation, et images pour chaque recette. ${sampleTitles.substring(0, 100)}..." />
    <meta name="keywords" content="${dynamicKeywords.join(', ')}" />
    <meta name="author" content="Nos Recettes" />
    <meta name="language" content="French" />
    <meta name="robots" content="index, follow" />
    <meta name="revisit-after" content="7 days" />
    <meta name="generator" content="Nos Recettes Recipe Manager" />
    <meta name="last-modified" content="${currentDate}" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${siteConfig.baseUrl}/" />
    <meta property="og:title" content="Nos Recettes - ${recipeCount} Recettes Québécoises Authentiques" />
    <meta property="og:description" content="Découvrez notre collection de ${recipeCount} recettes québécoises traditionnelles et modernes. Instructions détaillées, temps de préparation, et images pour chaque recette." />
    <meta property="og:image" content="${getFullUrl('/images/og-default.jpg')}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:site_name" content="Nos Recettes" />
    <meta property="og:locale" content="fr_CA" />
    <meta property="og:updated_time" content="${currentDate}" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${siteConfig.baseUrl}/" />
    <meta name="twitter:title" content="Nos Recettes - ${recipeCount} Recettes Québécoises" />
    <meta name="twitter:description" content="Collection de ${recipeCount} recettes québécoises avec instructions détaillées et images." />
    <meta name="twitter:image" content="${getFullUrl('/images/og-default.jpg')}" />
    <meta name="twitter:image:alt" content="Nos Recettes - Collection de recettes québécoises" />
    
    <!-- Additional SEO Meta Tags -->
    <meta name="geo.region" content="CA-QC" />
    <meta name="geo.placename" content="Québec, Canada" />
    <meta name="content-language" content="fr-CA" />
    <meta name="distribution" content="global" />
    <meta name="rating" content="general" />
    <meta name="referrer" content="origin-when-cross-origin" />
    
    <!-- Canonical URL -->
    <link rel="canonical" href="${siteConfig.baseUrl}/" />

    <!-- Favicon and Icons -->
    <link rel="icon" type="image/x-icon" href="${getAssetUrl('favicon.ico')}" />
    <link rel="apple-touch-icon" sizes="180x180" href="${getAssetUrl('apple-touch-icon.png')}" />
    <link rel="icon" type="image/png" sizes="32x32" href="${getAssetUrl('favicon-32x32.png')}" />
    <link rel="icon" type="image/png" sizes="16x16" href="${getAssetUrl('favicon-16x16.png')}" />
    <link rel="mask-icon" href="${getAssetUrl('safari-pinned-tab.svg')}" color="#0f172a" />
    <meta name="msapplication-TileColor" content="#0f172a" />
    <meta name="msapplication-config" content="${getAssetUrl('browserconfig.xml')}" />

    <!-- Web App Manifest -->
    <link rel="manifest" href="${getAssetUrl('manifest.json')}" />
    <meta name="theme-color" content="#0f172a" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta name="apple-mobile-web-app-title" content="Nos Recettes" />
    <meta name="mobile-web-app-capable" content="yes" />
    
    <!-- Preconnect to external domains for performance -->
    <link rel="preconnect" href="https://res.cloudinary.com" />
    <link rel="dns-prefetch" href="https://res.cloudinary.com" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Nos Recettes",
      "alternateName": "Collection de Recettes Québécoises",
      "description": "Collection de ${recipeCount} recettes québécoises traditionnelles et modernes. Découvrez des plats authentiques avec des instructions détaillées et des images appétissantes.",
      "url": "${siteConfig.baseUrl}/",
      "dateModified": "${currentDate}",
      "inLanguage": "fr-CA",
      "isAccessibleForFree": true,
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "${siteConfig.baseUrl}/?search={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Nos Recettes",
        "url": "${siteConfig.baseUrl}/",
        "logo": {
          "@type": "ImageObject",
          "url": "${getFullUrl('/icon-512.png')}"
        }
      },
      "mainEntity": {
        "@type": "ItemList",
        "name": "Recettes Québécoises",
        "description": "Collection de recettes traditionnelles du Québec",
        "numberOfItems": ${recipeCount}
      }
    }
    </script>

    <!-- Additional Structured Data for Recipe Collection -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Collection de Recettes Québécoises",
      "description": "Découvrez ${recipeCount} recettes authentiques du Québec avec instructions détaillées",
      "url": "${siteConfig.baseUrl}/",
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": ${recipeCount},
        "itemListElement": "Recipe"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Accueil",
            "item": "${siteConfig.baseUrl}/"
          }
        ]
      }
    }
    </script>
    
    <script type="text/javascript">
      // Single Page Apps for GitHub Pages
      // MIT License
      // https://github.com/rafgraph/spa-github-pages
      // This script checks to see if a redirect is present in the query string,
      // converts it back into the correct url and adds it to the
      // browser's history using window.history.replaceState(...),
      // which won't cause the browser to attempt to load the new url.
      // When the single page app is loaded further down in this file,
      // the correct url will be waiting in the browser's history for
      // the single page app to route accordingly.
      (function(l) {
        if (l.search[1] === '/' ) {
          var decoded = l.search.slice(1).split('&').map(function(s) { 
            return s.replace(/~and~/g, '&')
          }).join('?');
          window.history.replaceState(null, null,
              l.pathname.slice(0, -1) + decoded + l.hash
          );
        }
      }(window.location))
    </script>
  </head>

  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`

  return htmlContent
}

function main() {
  try {
    console.log('Generating index.html...')

    const htmlContent = generateIndexHTML()
    const outputPath = path.join(__dirname, '..', 'index.html')

    fs.writeFileSync(outputPath, htmlContent, 'utf-8')

    const recipeCount = getRecipeFiles().length
    console.log(
      `✅ Index.html generated successfully with ${recipeCount} recipes`,
    )
  } catch (error) {
    console.error('❌ Error generating index.html:', error)
    process.exit(1)
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}
