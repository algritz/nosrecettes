/**
 * Site configuration for build scripts
 *
 * IMPORTANT: Keep this file in sync with src/config/site.config.ts
 * Any changes here should be reflected in the runtime config.
 */

/**
 * Get site configuration based on NODE_ENV
 * @returns {Object} Site configuration
 */
function getSiteConfig() {
  const isDevelopment = process.env.NODE_ENV !== 'production';

  if (isDevelopment) {
    return {
      domain: 'localhost:8080',
      protocol: 'http',
      basePath: '',
      baseUrl: 'http://localhost:8080',
      isDevelopment: true,
    };
  }

  return {
    domain: 'nosrecettes.ca',
    protocol: 'https',
    basePath: '',
    baseUrl: 'https://nosrecettes.ca',
    isDevelopment: false,
  };
}

const siteConfig = getSiteConfig();

/**
 * Get full URL for a given path
 * @param {string} path - Relative path (e.g., '/recipe/chocolate-cake')
 * @returns {string} Full URL (e.g., 'https://nosrecettes.ca/recipe/chocolate-cake')
 */
function getFullUrl(path) {
  // Normalize path to start with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  // Combine basePath (if any) with the path
  const fullPath = siteConfig.basePath
    ? `/${siteConfig.basePath}${normalizedPath}`
    : normalizedPath;

  return `${siteConfig.protocol}://${siteConfig.domain}${fullPath}`;
}

/**
 * Get asset URL for a given path
 * @param {string} path - Asset path (e.g., '/images/logo.png')
 * @returns {string} Full asset URL with base path
 */
function getAssetUrl(path) {
  // Normalize path to start with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  // Return path with basePath if configured
  return siteConfig.basePath
    ? `/${siteConfig.basePath}${normalizedPath}`
    : normalizedPath;
}

export {
  siteConfig,
  getFullUrl,
  getAssetUrl,
};
