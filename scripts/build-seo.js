#!/usr/bin/env node

import { generateSitemap } from './generate-sitemap.js'
import { generateRobots } from './generate-robots.js'
import { generateManifest } from './generate-manifest.js'
import { generateIndexHTML } from './generate-index-html.js'
import { generateBrowserConfig } from './generate-browserconfig.js'
import { generateSecurityTxt } from './generate-security.js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function buildSEO() {
  console.log('🔍 Building all SEO and PWA files...\n')

  try {
    // Generate sitemap
    console.log('1. Generating sitemap.xml...')
    const sitemapContent = generateSitemap()
    const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml')
    fs.writeFileSync(sitemapPath, sitemapContent, 'utf-8')
    console.log(`✅ Sitemap generated successfully`)

    // Generate robots.txt
    console.log('\n2. Generating robots.txt...')
    const robotsContent = generateRobots()
    const robotsPath = path.join(__dirname, '..', 'public', 'robots.txt')
    fs.writeFileSync(robotsPath, robotsContent, 'utf-8')
    console.log(`✅ Robots.txt generated successfully`)

    // Generate manifest.json
    console.log('\n3. Generating manifest.json...')
    const manifestContent = generateManifest()
    const manifestPath = path.join(__dirname, '..', 'public', 'manifest.json')
    fs.writeFileSync(manifestPath, manifestContent, 'utf-8')
    console.log(`✅ Manifest generated successfully`)

    // Generate index.html
    console.log('\n4. Generating index.html...')
    const indexContent = generateIndexHTML()
    const indexPath = path.join(__dirname, '..', 'index.html')
    fs.writeFileSync(indexPath, indexContent, 'utf-8')
    console.log(`✅ Index.html generated successfully`)

    // Generate browserconfig.xml
    console.log('\n5. Generating browserconfig.xml...')
    const browserConfigContent = generateBrowserConfig()
    const browserConfigPath = path.join(
      __dirname,
      '..',
      'public',
      'browserconfig.xml',
    )
    fs.writeFileSync(browserConfigPath, browserConfigContent, 'utf-8')
    console.log(`✅ Browserconfig.xml generated successfully`)

    // Generate security.txt
    console.log('\n6. Generating security.txt...')
    const securityContent = generateSecurityTxt()
    const wellKnownDir = path.join(__dirname, '..', 'public', '.well-known')
    if (!fs.existsSync(wellKnownDir)) {
      fs.mkdirSync(wellKnownDir, { recursive: true })
    }
    const securityPath = path.join(wellKnownDir, 'security.txt')
    fs.writeFileSync(securityPath, securityContent, 'utf-8')
    console.log(`✅ Security.txt generated successfully`)

    console.log('\n✅ All SEO and PWA files generated successfully!')
    console.log('📁 Files created:')
    console.log('   - public/sitemap.xml (dynamic recipe sitemap)')
    console.log('   - public/robots.txt (crawling instructions)')
    console.log('   - public/manifest.json (PWA manifest with recipe count)')
    console.log('   - index.html (dynamic meta tags and structured data)')
    console.log('   - public/browserconfig.xml (Windows tile configuration)')
    console.log('   - public/.well-known/security.txt (security policy)')
  } catch (error) {
    console.error('\n❌ Error building SEO files:', error)
    process.exit(1)
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  buildSEO()
}

export { buildSEO }
