import { Recipe } from '@/types/recipe'

/**
 * Structure of /recipes.json
 */
export interface RecipesJsonData {
  version: string
  timestamp: number
  count: number
  recipes: Recipe[]
}

/**
 * Options for fetching recipes
 */
export interface FetchRecipesOptions {
  /**
   * Force fresh fetch, bypassing cache
   * Use for update checks that need latest server data
   */
  bustCache?: boolean

  /**
   * Optional callback for download progress
   * @param loaded - Bytes downloaded so far
   * @param total - Total bytes (may be 0 if Content-Length not available)
   */
  onProgress?: (loaded: number, total: number) => void

  /**
   * Reason for fetch (for logging/debugging)
   */
  reason?: 'network-fallback' | 'initial-load' | 'update-check'
}

// Module-level state
let pendingFetch: Promise<RecipesJsonData> | null = null
let cachedData: { data: RecipesJsonData; timestamp: number } | null = null

const CACHE_DURATION_MS = 5000 // 5 seconds

/**
 * Fetch recipes.json with deduplication and caching
 *
 * Multiple concurrent calls will share the same network request.
 * Data is cached for 5 seconds to handle rapid sequential calls.
 *
 * @throws {Error} On network failure, HTTP error, or JSON parse error
 */
export async function fetchRecipes(
  options: FetchRecipesOptions = {},
): Promise<RecipesJsonData> {
  const { bustCache = false, onProgress, reason = 'unknown' } = options

  // If there's already a pending fetch, return it (deduplication)
  if (pendingFetch) {
    console.log(`[recipeCoordinator] Deduplicating fetch request (reason: ${reason})`)
    return pendingFetch
  }

  // Check cached data (unless cache busting)
  if (!bustCache && cachedData) {
    const age = Date.now() - cachedData.timestamp
    if (age < CACHE_DURATION_MS) {
      console.log(
        `[recipeCoordinator] Returning cached data (age: ${age}ms, reason: ${reason})`,
      )
      return cachedData.data
    }
  }

  // Start new fetch
  console.log(`[recipeCoordinator] Starting new fetch (reason: ${reason})`)

  pendingFetch = performFetch(onProgress, reason)

  try {
    const data = await pendingFetch

    // Cache the result
    cachedData = {
      data,
      timestamp: Date.now(),
    }

    console.log(
      `[recipeCoordinator] Fetch completed (version: ${data.version}, count: ${data.count})`,
    )

    return data
  } finally {
    // Clear pending fetch regardless of success/failure
    pendingFetch = null
  }
}

/**
 * Perform the actual fetch with progress tracking
 */
async function performFetch(
  onProgress?: (loaded: number, total: number) => void,
  reason?: string,
): Promise<RecipesJsonData> {
  // Check online status
  if (!navigator.onLine) {
    throw new Error('OFFLINE')
  }

  // Determine cache policy
  const cachePolicy = reason === 'update-check' ? 'no-store' : 'default'

  const response = await fetch('/recipes.json', {
    cache: cachePolicy,
  })

  if (!response.ok) {
    throw new Error(`HTTP_ERROR_${response.status}`)
  }

  // Handle progress tracking if callback provided
  if (onProgress && response.body) {
    const contentLength = response.headers.get('Content-Length')
    const total = contentLength ? parseInt(contentLength, 10) : 0

    const reader = response.body.getReader()
    const chunks: Uint8Array[] = []
    let loaded = 0

    while (true) {
      const { done, value } = await reader.read()

      if (done) break

      chunks.push(value)
      loaded += value.length

      onProgress(loaded, total)
    }

    // Reconstruct response from chunks
    const allChunks = new Uint8Array(loaded)
    let position = 0
    for (const chunk of chunks) {
      allChunks.set(chunk, position)
      position += chunk.length
    }

    const text = new TextDecoder().decode(allChunks)
    return JSON.parse(text) as RecipesJsonData
  }

  // No progress tracking - standard JSON parse
  return (await response.json()) as RecipesJsonData
}

/**
 * Clear cached data (useful for testing)
 */
export function clearCache(): void {
  console.log('[recipeCoordinator] Cache cleared')
  cachedData = null
  pendingFetch = null
}

/**
 * Get cache status (useful for debugging)
 */
export function getCacheStatus(): {
  hasPendingFetch: boolean
  hasCachedData: boolean
  cacheAge: number | null
} {
  return {
    hasPendingFetch: pendingFetch !== null,
    hasCachedData: cachedData !== null,
    cacheAge: cachedData ? Date.now() - cachedData.timestamp : null,
  }
}
