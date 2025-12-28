/**
 * Site configuration - Single source of truth for URLs and paths
 *
 * IMPORTANT: Keep this file in sync with scripts/site.config.js
 * Any changes here should be reflected in the build scripts config.
 */

interface SiteConfig {
  domain: string;
  protocol: 'http' | 'https';
  basePath: string;
  baseUrl: string;
  isDevelopment: boolean;
}

/**
 * Get site configuration based on environment
 */
function getSiteConfig(): SiteConfig {
  const isDevelopment = import.meta.env.DEV;

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

export const siteConfig = getSiteConfig();

/**
 * Get full URL for a given path
 * @param path - Relative path (e.g., '/recipe/chocolate-cake')
 * @returns Full URL (e.g., 'https://nosrecettes.ca/recipe/chocolate-cake')
 */
export function getFullUrl(path: string): string {
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
 * @param path - Asset path (e.g., '/images/logo.png')
 * @returns Full asset URL with base path
 */
export function getAssetUrl(path: string): string {
  // Normalize path to start with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  // Return path with basePath if configured
  return siteConfig.basePath
    ? `/${siteConfig.basePath}${normalizedPath}`
    : normalizedPath;
}
