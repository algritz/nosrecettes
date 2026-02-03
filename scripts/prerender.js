#!/usr/bin/env node

import puppeteer from 'puppeteer'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { preview } from 'vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const DIST_DIR = path.join(__dirname, '..', 'dist')
const ROUTES_FILE = path.join(__dirname, '..', 'snap-routes.json')

async function prerender() {
  console.log('🎬 Starting pre-rendering...\n')

  // Read routes from snap-routes.json
  let routes = []
  try {
    const routesContent = fs.readFileSync(ROUTES_FILE, 'utf-8')
    routes = JSON.parse(routesContent)
    console.log(`📋 Found ${routes.length} routes to pre-render`)
  } catch (error) {
    console.error('❌ Error reading snap-routes.json:', error.message)
    process.exit(1)
  }

  // Start Vite preview server
  console.log('\n🚀 Starting preview server...')
  const server = await preview({
    preview: {
      port: 3001
    }
  })

  const baseUrl = `http://localhost:3001`
  console.log(`✅ Server running at ${baseUrl}`)

  // Launch Puppeteer
  console.log('\n🎭 Launching browser...')
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })

  let successCount = 0
  let errorCount = 0

  try {
    // Pre-render routes in parallel batches
    const CONCURRENCY = parseInt(process.env.PRERENDER_CONCURRENCY || '10', 10)
    const batches = []

    for (let i = 0; i < routes.length; i += CONCURRENCY) {
      batches.push(routes.slice(i, i + CONCURRENCY))
    }

    console.log(`\n🚀 Processing ${routes.length} routes in ${batches.length} batches (${CONCURRENCY} concurrent)...\n`)

    for (let batchIndex = 0; batchIndex < batches.length; batchIndex++) {
      const batch = batches[batchIndex]

      console.log(`\n📦 Batch ${batchIndex + 1}/${batches.length} (${batch.length} routes)`)

      const batchPromises = batch.map(async (route, index) => {
        const routeNumber = batchIndex * CONCURRENCY + index + 1

        try {
          const page = await browser.newPage()

          // Set viewport
          await page.setViewport({ width: 1280, height: 720 })

          // Navigate to the page
          await page.goto(`${baseUrl}${route}`, {
            waitUntil: 'networkidle0',
            timeout: 30000
          })

          // Get the rendered HTML (no need to wait for selector, networkidle0 is enough)
          const html = await page.content()

          // Determine output file path
          let outputPath
          if (route === '/') {
            outputPath = path.join(DIST_DIR, 'index.html')
          } else if (route.endsWith('/')) {
            outputPath = path.join(DIST_DIR, route.slice(1), 'index.html')
          } else {
            outputPath = path.join(DIST_DIR, `${route.slice(1)}.html`)
          }

          // Create directories if needed
          const outputDir = path.dirname(outputPath)
          if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true })
          }

          // Write the HTML file
          fs.writeFileSync(outputPath, html, 'utf-8')

          console.log(`  ✅ [${routeNumber}/${routes.length}] ${route}`)
          await page.close()
          return { success: true, route }
        } catch (error) {
          console.error(`  ❌ [${routeNumber}/${routes.length}] ${route}: ${error.message}`)
          return { success: false, route, error: error.message }
        }
      })

      const results = await Promise.all(batchPromises)
      successCount += results.filter(r => r.success).length
      errorCount += results.filter(r => !r.success).length
    }
  } finally {
    await browser.close()
    server.httpServer.close()
  }

  console.log(`\n\n📊 Pre-rendering complete!`)
  console.log(`✅ Success: ${successCount}`)
  console.log(`❌ Errors: ${errorCount}`)

  if (errorCount > 0) {
    process.exit(1)
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  prerender().catch((error) => {
    console.error('\n❌ Fatal error:', error)
    process.exit(1)
  })
}

export { prerender }
