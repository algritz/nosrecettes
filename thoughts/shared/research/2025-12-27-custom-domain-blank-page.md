---
date: 2025-12-28T02:03:30+0000
researcher: Claude Code
git_commit: 2c86b46d64a93615ab4859caf335d24d86291062
branch: main
repository: nosrecettes
topic: 'Custom Domain Blank Page Issue - Asset Path Misconfiguration'
tags: [research, codebase, vite, github-pages, deployment, custom-domain, seo]
status: complete
last_updated: 2025-12-27
last_updated_by: Claude Code
last_updated_note: 'Added follow-up research for SEO script path generation'
---

# Research: Custom Domain Blank Page Issue - Asset Path Misconfiguration

**Date**: 2025-12-28T02:03:30+0000
**Researcher**: Claude Code
**Git Commit**: 2c86b46d64a93615ab4859caf335d24d86291062
**Branch**: main
**Repository**: nosrecettes

## Research Question

Why does the live site hosted on GitHub Pages load a blank page after adding a custom DNS, with console error: `GET https://nosrecettes.ca/nosrecettes/assets/index-7wTelDV_.js NS_ERROR_CORRUPTED_CONTENT` (404 Not Found)?

## Summary

The blank page is caused by a base path misconfiguration in the Vite build setup. The application is configured to use `/nosrecettes/` as the base path in production mode, which was correct for the original GitHub Pages URL (`username.github.io/nosrecettes/`) but is incorrect for the custom domain (`nosrecettes.ca`). Custom domains on GitHub Pages serve content from the root path, not from a repository subdirectory.

## Detailed Findings

### Vite Configuration - Base Path

The issue originates in [vite.config.ts:7](https://github.com/algritz/nosrecettes/blob/2c86b46d64a93615ab4859caf335d24d86291062/vite.config.ts#L7):

```typescript
base: mode === 'production' ? "/nosrecettes/" : "/",
```

This configuration sets the base path to `/nosrecettes/` when building in production mode. This causes all asset references in the built HTML to include this path prefix.

**Current behavior:**

- Assets are referenced as: `https://nosrecettes.ca/nosrecettes/assets/index-7wTelDV_.js`
- This results in 404 errors because the path doesn't exist at the custom domain

**Expected behavior for custom domain:**

- Assets should be referenced as: `https://nosrecettes.ca/assets/index-7wTelDV_.js`

### Build Process

The build process is configured in [package.json:9](https://github.com/algritz/nosrecettes/blob/2c86b46d64a93615ab4859caf335d24d86291062/package.json#L9):

```json
"build": "npm run build:seo && vite build"
```

The build runs in production mode by default, triggering the `/nosrecettes/` base path.

### GitHub Pages Deployment

The deployment workflow is defined in [.github/workflows/deploy.yml](https://github.com/algritz/nosrecettes/blob/2c86b46d64a93615ab4859caf335d24d86291062/.github/workflows/deploy.yml):

- Line 36-37: Runs `npm run build` which uses production mode
- Line 44-45: Uploads the `./dist` directory as the Pages artifact
- Line 55-57: Deploys to GitHub Pages

### Custom Domain Configuration

The custom domain is configured in [CNAME](https://github.com/algritz/nosrecettes/blob/2c86b46d64a93615ab4859caf335d24d86291062/CNAME#L1):

```
nosrecettes.ca
```

## Code References

- [vite.config.ts:7](https://github.com/algritz/nosrecettes/blob/2c86b46d64a93615ab4859caf335d24d86291062/vite.config.ts#L7) - Base path configuration causing the issue
- [package.json:9](https://github.com/algritz/nosrecettes/blob/2c86b46d64a93615ab4859caf335d24d86291062/package.json#L9) - Build script
- [.github/workflows/deploy.yml:36-37](https://github.com/algritz/nosrecettes/blob/2c86b46d64a93615ab4859caf335d24d86291062/.github/workflows/deploy.yml#L36-L37) - Build step in deployment
- [CNAME:1](https://github.com/algritz/nosrecettes/blob/2c86b46d64a93615ab4859caf335d24d86291062/CNAME#L1) - Custom domain configuration

## Architecture Documentation

The site uses Vite as the build tool with the following deployment architecture:

1. **Local Development**: Runs with base path `/` on port 8080
2. **Production Build**: Vite builds with base path `/nosrecettes/` (the root cause)
3. **GitHub Actions**: Builds the site on push to main and uploads to GitHub Pages
4. **GitHub Pages**: Serves the built site from the root of the custom domain

The mismatch occurs because:

- GitHub Pages repository sites (e.g., `username.github.io/repo-name/`) require a base path matching the repository name
- Custom domains on GitHub Pages (e.g., `customdomain.com`) serve from the root without any base path

## Solution Path

To fix this issue, the Vite base path configuration needs to be changed from `/nosrecettes/` to `/` for production builds when using a custom domain. The base path should only include the repository name when deploying to the default GitHub Pages URL.

## Related Research

No previous research documents found for this issue.

## Open Questions

- Is there a requirement to maintain support for both the default GitHub Pages URL and the custom domain simultaneously?
- Should the build process detect the deployment target and adjust the base path accordingly?

## Follow-up Research 2025-12-28T02:15:00+0000

### Vite Config Fixed - Additional SEO Script Issue Found

After fixing the Vite config base path to `/`, the user reported the page still loads blank with new console errors showing CORS issues and integrity mismatches.

### SEO Build Script Path Hardcoding

Investigation revealed that [scripts/generate-index-html.js](https://github.com/algritz/nosrecettes/blob/2c86b46d64a93615ab4859caf335d24d86291062/scripts/generate-index-html.js) contains hardcoded paths and URLs that still reference the old GitHub Pages structure:

**Hardcoded URLs (lines 55, 58, 67, 70, 82, 115, 123, 130, 133, 152, 165):**

```javascript
"url": "https://algritz.github.io/nosrecettes/"
```

**Hardcoded icon paths (lines 85-94):**

```javascript
<link rel="icon" type="image/x-icon" href="/nosrecettes/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/nosrecettes/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/nosrecettes/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/nosrecettes/favicon-16x16.png" />
<link rel="mask-icon" href="/nosrecettes/safari-pinned-tab.svg" color="#0f172a" />
<link rel="manifest" href="/nosrecettes/manifest.json" />
```

### Build Process Sequence

From [package.json:9](https://github.com/algritz/nosrecettes/blob/2c86b46d64a93615ab4859caf335d24d86291062/package.json#L9):

```json
"build": "npm run build:seo && vite build"
```

The build process:

1. First runs `npm run build:seo` which calls [scripts/build-seo.js](https://github.com/algritz/nosrecettes/blob/2c86b46d64a93615ab4859caf335d24d86291062/scripts/build-seo.js)
2. This generates [index.html](https://github.com/algritz/nosrecettes/blob/2c86b46d64a93615ab4859caf335d24d86291062/index.html) with hardcoded `/nosrecettes/` paths
3. Then Vite builds the assets with the correct `/` base path
4. Results in a mismatch where index.html references paths that don't match the Vite build output

### Console Errors Observed

From the user's screenshot, the errors include:

- CORS policy errors from Cloudflare Insights beacon
- Integrity mismatch errors for various assets
- 404 errors for assets still using `/nosrecettes/` paths from the generated index.html

### Additional Files to Check

Other SEO-related scripts that may also contain hardcoded paths:

- [scripts/generate-sitemap.js](scripts/generate-sitemap.js) - May contain URL hardcoding
- [scripts/generate-manifest.js](scripts/generate-manifest.js) - May contain path hardcoding
- [scripts/generate-browserconfig.js](scripts/generate-browserconfig.js) - May contain path hardcoding
- [scripts/generate-robots.js](scripts/generate-robots.js) - May contain URL hardcoding

### Root Cause Summary

Two separate issues exist:

1. **Vite base path** (FIXED by user) - Changed from `/nosrecettes/` to `/` in vite.config.ts
2. **SEO script path generation** (STILL BROKEN) - The generate-index-html.js and potentially other SEO scripts hardcode the old paths, generating an index.html that references non-existent `/nosrecettes/` paths

Both need to be updated to use the custom domain URL (`https://nosrecettes.ca`) and root paths (`/`) instead of the old GitHub Pages structure.
