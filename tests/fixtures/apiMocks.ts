import type { Page } from '@playwright/test'

/**
 * API Mock Helpers for Nos Recettes E2E Tests
 *
 * Provides functions to intercept and mock external API calls:
 * - GitHub API (PR creation, repo operations)
 * - Cloudinary API (image uploads)
 * - Recipe data endpoint (recipes.json)
 */

/**
 * Mock GitHub API responses
 * Intercepts PR creation and returns fake successful response
 */
export async function mockGitHubAPI(page: Page): Promise<void> {
  await page.route('https://api.github.com/**', async (route) => {
    const url = route.request().url()
    const method = route.request().method()

    // Mock get main branch ref
    if (url.includes('/git/ref/heads/main') && method === 'GET') {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          ref: 'refs/heads/main',
          node_id: 'REF_test',
          url: 'https://api.github.com/repos/test-owner/test-repo/git/refs/heads/main',
          object: {
            sha: 'abc123def456',
            type: 'commit',
            url: 'https://api.github.com/repos/test-owner/test-repo/git/commits/abc123def456',
          },
        }),
      })
      return
    }

    // Mock create branch (refs)
    if (url.includes('/git/refs') && method === 'POST') {
      await route.fulfill({
        status: 201,
        contentType: 'application/json',
        body: JSON.stringify({
          ref: 'refs/heads/test-branch',
          node_id: 'REF_test_branch',
          url: 'https://api.github.com/repos/test-owner/test-repo/git/refs/heads/test-branch',
          object: {
            sha: 'abc123def456',
            type: 'commit',
            url: 'https://api.github.com/repos/test-owner/test-repo/git/commits/abc123def456',
          },
        }),
      })
      return
    }

    // Mock file operations (get/create/update/delete)
    if (url.includes('/contents/') && (method === 'GET' || method === 'PUT' || method === 'DELETE')) {
      if (method === 'GET') {
        // Check if querying for existing file (has ref=main param) or new file
        if (url.includes('ref=main')) {
          // Return file content for existing recipes (for edit/delete operations)
          await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({
              name: 'test-recipe.ts',
              path: 'src/recipes/test-recipe.ts',
              sha: 'existingfile456',
              size: 2345,
              url: 'https://api.github.com/repos/test-owner/test-repo/contents/src/recipes/test-recipe.ts',
              html_url: 'https://github.com/test-owner/test-repo/blob/main/src/recipes/test-recipe.ts',
              git_url: 'https://api.github.com/repos/test-owner/test-repo/git/blobs/existingfile456',
              download_url: 'https://raw.githubusercontent.com/test-owner/test-repo/main/src/recipes/test-recipe.ts',
              type: 'file',
              content: 'ZXhwb3J0IGNvbnN0IHJlY2lwZSA9IHt9Ow==', // base64 encoded: export const recipe = {};
              encoding: 'base64',
            }),
          })
        } else {
          // Return 404 for new files
          await route.fulfill({
            status: 404,
            contentType: 'application/json',
            body: JSON.stringify({
              message: 'Not Found',
              documentation_url: 'https://docs.github.com/rest/repos/contents#get-repository-content',
            }),
          })
        }
      } else if (method === 'PUT') {
        // Mock successful file creation/update
        await route.fulfill({
          status: 201,
          contentType: 'application/json',
          body: JSON.stringify({
            content: {
              name: 'test-file.ts',
              path: 'src/recipes/test-file.ts',
              sha: 'newfile123',
              size: 1234,
              url: 'https://api.github.com/repos/test-owner/test-repo/contents/src/recipes/test-file.ts',
              html_url: 'https://github.com/test-owner/test-repo/blob/main/src/recipes/test-file.ts',
              git_url: 'https://api.github.com/repos/test-owner/test-repo/git/blobs/newfile123',
              download_url: 'https://raw.githubusercontent.com/test-owner/test-repo/main/src/recipes/test-file.ts',
              type: 'file',
            },
            commit: {
              sha: 'commit123',
              message: 'Add recipe via E2E test',
            },
          }),
        })
      } else if (method === 'DELETE') {
        // Mock successful file deletion
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({
            commit: {
              sha: 'delete123',
              message: 'Delete recipe via E2E test',
            },
          }),
        })
      }
      return
    }

    // Mock PR creation
    if (url.includes('/pulls') && method === 'POST') {
      await route.fulfill({
        status: 201,
        contentType: 'application/json',
        body: JSON.stringify({
          html_url: 'https://github.com/test-owner/test-repo/pull/123',
          number: 123,
          id: 12345,
          state: 'open',
          title: 'New recipe via E2E test',
          user: {
            login: 'test-user',
          },
        }),
      })
      return
    }

    // Mock repository info
    if (url.includes('/repos/') && method === 'GET' && !url.includes('/contents/')) {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          id: 1,
          name: 'test-repo',
          full_name: 'test-owner/test-repo',
          private: false,
          default_branch: 'main',
        }),
      })
      return
    }

    // Mock branch list
    if (url.includes('/branches') && method === 'GET') {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify([
          {
            name: 'main',
            commit: { sha: 'abc123' },
          },
        ]),
      })
      return
    }

    // Fallback: allow other requests
    await route.continue()
  })
}

/**
 * Mock Cloudinary API responses
 * Intercepts image uploads and returns fake successful response
 */
export async function mockCloudinaryAPI(page: Page): Promise<void> {
  await page.route('https://api.cloudinary.com/**', async (route) => {
    const timestamp = Date.now()
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        public_id: `recipes/test-image-${timestamp}`,
        version: timestamp,
        signature: 'fake-signature',
        width: 1200,
        height: 900,
        format: 'jpg',
        resource_type: 'image',
        created_at: new Date().toISOString(),
        bytes: 245789,
        type: 'upload',
        url: `http://res.cloudinary.com/test-cloud/image/upload/v${timestamp}/recipes/test-image-${timestamp}.jpg`,
        secure_url: `https://res.cloudinary.com/test-cloud/image/upload/v${timestamp}/recipes/test-image-${timestamp}.jpg`,
        // Mock responsive sizes
        eager: [
          {
            transformation: 'c_fill,g_auto,h_200,w_300',
            width: 300,
            height: 200,
            url: `https://res.cloudinary.com/test-cloud/image/upload/c_fill,g_auto,h_200,w_300/v${timestamp}/recipes/test-image-${timestamp}.jpg`,
          },
          {
            transformation: 'c_fill,g_auto,h_400,w_600',
            width: 600,
            height: 400,
            url: `https://res.cloudinary.com/test-cloud/image/upload/c_fill,g_auto,h_400,w_600/v${timestamp}/recipes/test-image-${timestamp}.jpg`,
          },
          {
            transformation: 'c_fill,g_auto,h_800,w_1200',
            width: 1200,
            height: 800,
            url: `https://res.cloudinary.com/test-cloud/image/upload/c_fill,g_auto,h_800,w_1200/v${timestamp}/recipes/test-image-${timestamp}.jpg`,
          },
        ],
      }),
    })
  })
}

/**
 * Mock recipes.json endpoint
 * Useful for testing update scenarios or providing minimal recipe data
 */
export async function mockRecipeDataEndpoint(
  page: Page,
  options?: {
    version?: string
    recipeCount?: number
    recipes?: unknown[]
  },
): Promise<void> {
  const { version = 'v1.0.0-test', recipeCount = 3, recipes } = options || {}

  await page.route('**/recipes.json', async (route) => {
    const mockRecipes =
      recipes ||
      Array.from({ length: recipeCount }, (_, i) => ({
        slug: `test-recipe-${i + 1}`,
        title: `Test Recipe ${i + 1}`,
        description: `A test recipe for E2E testing`,
        categories: ['Test'],
        prepTime: { min: 10, max: 15 },
        cookTime: { min: 20, max: 25 },
        servings: '4',
        difficulty: 'Facile',
        ingredients: [`Ingredient ${i + 1}`, 'Another ingredient'],
        instructions: [`Step ${i + 1}`, 'Final step'],
        tags: ['test', 'e2e'],
        images: [],
      }))

    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        version,
        count: mockRecipes.length,
        recipes: mockRecipes,
      }),
    })
  })
}

/**
 * Mock Cloudinary image resources (for display)
 * Intercepts image loading and returns fake image data
 */
export async function mockCloudinaryImages(page: Page): Promise<void> {
  await page.route('https://res.cloudinary.com/**', async (route) => {
    // Return a 1x1 transparent PNG
    const transparentPNG = Buffer.from(
      'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==',
      'base64',
    )

    await route.fulfill({
      status: 200,
      contentType: 'image/png',
      body: transparentPNG,
    })
  })
}
