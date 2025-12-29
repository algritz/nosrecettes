#!/usr/bin/env tsx
import * as ts from 'typescript'
import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

// ESM compatibility
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

interface MigrationOptions {
  dryRun: boolean
  backupDir: string
  recipesDir: string
}

interface MigrationResult {
  processed: number
  skipped: number
  errors: string[]
}

/**
 * Create a backup of the recipes directory
 */
async function createBackup(
  recipesDir: string,
  backupDir: string,
): Promise<void> {
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true })
  }

  console.log(`Creating backup at ${backupDir}...`)

  // Copy entire recipes directory
  await copyDirectory(recipesDir, path.join(backupDir, 'recipes'))

  console.log(`Backup created successfully`)
}

/**
 * Recursively copy directory
 */
async function copyDirectory(src: string, dest: string): Promise<void> {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true })
  }

  const entries = fs.readdirSync(src, { withFileTypes: true })

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)

    if (entry.isDirectory()) {
      await copyDirectory(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

/**
 * Check if file is already migrated by looking for TimeRange format
 */
function isAlreadyMigrated(content: string): boolean {
  // Look for pattern like "prepTime: { min:" or "cookTime: { min:"
  const timeRangePattern = /(prepTime|cookTime|marinatingTime):\s*{\s*min:/
  return timeRangePattern.test(content)
}

/**
 * Transform a recipe file from single numeric values to TimeRange objects
 */
async function migrateRecipeFile(
  filePath: string,
  options: MigrationOptions,
): Promise<boolean> {
  try {
    // Read file content
    const content = fs.readFileSync(filePath, 'utf-8')

    // Skip if already migrated
    if (isAlreadyMigrated(content)) {
      console.log(`⏭️  Skipped (already migrated): ${path.basename(filePath)}`)
      return false
    }

    // Transform time fields using regex (simpler and more reliable than AST for this case)
    let transformedContent = content

    // Transform prepTime: number → prepTime: { min: number, max: number }
    transformedContent = transformedContent.replace(
      /(\s+prepTime:\s*)(\d+)(,?)/g,
      (match, prefix, value, comma) =>
        `${prefix}{ min: ${value}, max: ${value} }${comma}`,
    )

    // Transform cookTime: number → cookTime: { min: number, max: number }
    transformedContent = transformedContent.replace(
      /(\s+cookTime:\s*)(\d+)(,?)/g,
      (match, prefix, value, comma) =>
        `${prefix}{ min: ${value}, max: ${value} }${comma}`,
    )

    // Transform marinatingTime: number → marinatingTime: { min: number, max: number }
    transformedContent = transformedContent.replace(
      /(\s+marinatingTime:\s*)(\d+)(,?)/g,
      (match, prefix, value, comma) =>
        `${prefix}{ min: ${value}, max: ${value} }${comma}`,
    )

    // Verify TypeScript syntax is still valid
    const sourceFile = ts.createSourceFile(
      filePath,
      transformedContent,
      ts.ScriptTarget.Latest,
      true,
    )

    // Check for parsing errors
    if (sourceFile.parseDiagnostics && sourceFile.parseDiagnostics.length > 0) {
      throw new Error(`TypeScript parsing errors after transformation`)
    }

    // Write back if not dry-run
    if (!options.dryRun) {
      fs.writeFileSync(filePath, transformedContent, 'utf-8')
    }

    console.log(`✅ Migrated: ${path.basename(filePath)}`)
    return true
  } catch (error) {
    const errorMsg = `Error migrating ${filePath}: ${error instanceof Error ? error.message : String(error)}`
    console.error(`❌ ${errorMsg}`)
    throw new Error(errorMsg)
  }
}

/**
 * Discover all recipe files recursively
 */
function discoverRecipeFiles(dir: string): string[] {
  const files: string[] = []

  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      files.push(...discoverRecipeFiles(fullPath))
    } else if (
      entry.isFile() &&
      entry.name.endsWith('.ts') &&
      entry.name !== 'index.ts'
    ) {
      files.push(fullPath)
    }
  }

  return files
}

/**
 * Migrate all recipe files
 */
async function migrateAllRecipes(
  options: MigrationOptions,
): Promise<MigrationResult> {
  const result: MigrationResult = {
    processed: 0,
    skipped: 0,
    errors: [],
  }

  console.log(`\n${'='.repeat(60)}`)
  console.log(`🚀 Starting Recipe Time Range Migration`)
  console.log(`${'='.repeat(60)}`)
  console.log(
    `Mode: ${options.dryRun ? 'DRY RUN (no files will be modified)' : 'LIVE'}`,
  )
  console.log(`Recipes directory: ${options.recipesDir}`)
  console.log(`Backup directory: ${options.backupDir}`)
  console.log()

  // Create backup (even for dry-run, for safety)
  if (!options.dryRun) {
    await createBackup(options.recipesDir, options.backupDir)
  } else {
    console.log(`⚠️  Skipping backup (dry-run mode)`)
  }

  console.log()

  // Discover all recipe files
  console.log(`📁 Discovering recipe files...`)
  const files = discoverRecipeFiles(options.recipesDir)
  console.log(`Found ${files.length} recipe files\n`)

  // Process each file
  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    const progress = `[${i + 1}/${files.length}]`

    process.stdout.write(`${progress} `)

    try {
      const migrated = await migrateRecipeFile(file, options)

      if (migrated) {
        result.processed++
      } else {
        result.skipped++
      }
    } catch (error) {
      result.errors.push(error instanceof Error ? error.message : String(error))
    }

    // Progress indicator every 10%
    if ((i + 1) % Math.ceil(files.length / 10) === 0) {
      const percent = Math.round(((i + 1) / files.length) * 100)
      console.log(`\n📊 Progress: ${percent}% complete\n`)
    }
  }

  console.log()
  console.log(`${'='.repeat(60)}`)
  console.log(`✨ Migration Complete`)
  console.log(`${'='.repeat(60)}`)
  console.log(`Files processed: ${result.processed}`)
  console.log(`Files skipped: ${result.skipped}`)
  console.log(`Errors: ${result.errors.length}`)

  if (result.errors.length > 0) {
    console.log(`\n❌ Errors encountered:`)
    result.errors.forEach((error, i) => {
      console.log(`  ${i + 1}. ${error}`)
    })
  }

  if (options.dryRun) {
    console.log(`\n⚠️  DRY RUN - No files were actually modified`)
    console.log(`Run without --dry-run to apply changes`)
  } else {
    console.log(`\n✅ Backup created at: ${options.backupDir}`)
  }

  console.log()

  return result
}

// Parse command-line arguments
const args = process.argv.slice(2)
const isDryRun = args.includes('--dry-run')

// Set up paths
const projectRoot = path.join(__dirname, '..')
const recipesDir = path.join(projectRoot, 'src', 'recipes')
const timestamp =
  new Date().toISOString().replace(/[:.]/g, '-').split('T')[0] +
  '-' +
  new Date().toTimeString().split(' ')[0].replace(/:/g, '-')
const backupDir = path.join(
  projectRoot,
  'scripts',
  'backups',
  `migration-${timestamp}`,
)

const options: MigrationOptions = {
  dryRun: isDryRun,
  backupDir,
  recipesDir,
}

// Run migration
migrateAllRecipes(options)
  .then((result) => {
    if (result.errors.length > 0) {
      process.exit(1)
    }
    process.exit(0)
  })
  .catch((error) => {
    console.error(`\n💥 Fatal error: ${error.message}`)
    process.exit(1)
  })
