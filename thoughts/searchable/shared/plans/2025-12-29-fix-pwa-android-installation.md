# Fix PWA Installation on Android Implementation Plan

## Overview

Fix the Progressive Web App (PWA) installation prompt on Android devices by correcting icon file references in the manifest generator and ensuring all required assets are properly deployed. Currently, Android Chrome cannot prompt for installation because the manifest references icon files that return 404 errors.

## Current State Analysis

### What's Broken
- Manifest references `/icon-192.png` and `/icon-512.png` (return 404 on production)
- Actual files are named `icon-192x192.png` and `icon-512x512.png`
- Icon files are in project root, not in `public/` directory
- Vite build doesn't copy these files to `dist/`
- Screenshot files referenced in manifest don't exist anywhere

### What's Working
- ✅ HTTPS is properly configured
- ✅ Service worker (`sw.js`) is deployed and functional
- ✅ Manifest file (`manifest.json`) is deployed and valid JSON
- ✅ Manifest is correctly linked in HTML

### Key Discoveries
- Icon files exist at project root: `icon-192x192.png` (17KB), `icon-512x512.png` (149KB)
- Manifest generator: [scripts/generate-manifest.js:28-46](scripts/generate-manifest.js#L28-L46)
- Asset URL helper: [scripts/site.config.js:58-66](scripts/site.config.js#L58-L66)
- VitePWA config: [vite.config.ts:16-38](vite.config.ts#L16-L38)
- Build process: [.github/workflows/deploy.yml:33-37](.github/workflows/deploy.yml#L33-L37)

## Desired End State

After implementation:
- PWA installation prompt appears on Android Chrome when visiting nosrecettes.ca
- All icon files referenced in manifest are accessible (return 200 OK)
- Screenshot files exist and enhance the install experience
- Icons are automatically copied to `dist/` during build process

### Verification
Test on Android Chrome:
1. Visit https://nosrecettes.ca
2. Chrome shows "Install app" prompt or option in menu
3. All manifest icon URLs return 200 OK
4. Installation completes successfully and app launches

## What We're NOT Doing

- Not changing the VitePWA plugin configuration
- Not modifying the service worker implementation
- Not changing the manifest structure or other PWA settings
- Not adding new icon sizes beyond what's already referenced
- Not automating screenshot generation (manual process documented)

## Implementation Approach

Fix the issue in three phases:
1. **Fix Icon References** - Update manifest generator to use correct filenames and move files to `public/`
2. **Create Screenshots** - Generate and add the two required screenshot files
3. **Verify & Deploy** - Test locally, build, and verify on production

Each phase is independently testable and won't break existing functionality.

---

## Phase 1: Fix Icon File References

### Overview
Update the manifest generator to reference the correct icon filenames (`icon-192x192.png` and `icon-512x512.png`) and move icon files to the `public/` directory so Vite copies them to `dist/` during build.

### Changes Required

#### 1. Update Manifest Generator
**File**: `scripts/generate-manifest.js`
**Changes**: Update icon `src` paths to match actual filenames

**Current code (lines 34-45)**:
```javascript
{
  src: getAssetUrl('icon-192.png'),
  sizes: '192x192',
  type: 'image/png',
  purpose: 'any maskable',
},
{
  src: getAssetUrl('icon-512.png'),
  sizes: '512x512',
  type: 'image/png',
  purpose: 'any maskable',
},
```

**Updated code**:
```javascript
{
  src: getAssetUrl('icon-192x192.png'),
  sizes: '192x192',
  type: 'image/png',
  purpose: 'any maskable',
},
{
  src: getAssetUrl('icon-512x512.png'),
  sizes: '512x512',
  type: 'image/png',
  purpose: 'any maskable',
},
```

**Also update shortcut icon (line 70)**:
```javascript
{
  src: getAssetUrl('icon-192x192.png'),
  sizes: '192x192',
},
```

#### 2. Move Icon Files to Public Directory
**Action**: Move icon files from project root to `public/` directory

**Commands**:
```bash
mv icon-192x192.png public/
mv icon-512x512.png public/
```

**Result**: Vite will automatically copy these files to `dist/` during build

#### 3. Regenerate Manifest
**Action**: Run the build:seo script to regenerate `public/manifest.json` with correct paths

**Command**:
```bash
npm run build:seo
```

**Verify**: Check that `public/manifest.json` now contains the correct icon paths

### Success Criteria

#### Automated Verification
- [x] Build script runs without errors: `npm run build:seo`
- [x] Manifest file is regenerated: `public/manifest.json` exists
- [x] Icon files exist in public directory: `ls -la public/icon-*.png`
- [x] Build succeeds: `npm run build`
- [x] Icon files copied to dist: `ls -la dist/icon-*.png`

#### Manual Verification
- [x] Open `public/manifest.json` and verify icon paths are `icon-192x192.png` and `icon-512x192.png`
- [x] Check that both icon files are in `public/` directory
- [x] After build, verify icon files are in `dist/` directory

**Implementation Note**: After completing this phase and all automated verification passes, pause here for manual confirmation before proceeding to Phase 2.

---

## Phase 2: Create Screenshot Files

### Overview
Generate two screenshot images that showcase the app for the PWA installation dialog: one wide (desktop/tablet) and one narrow (mobile).

### Screenshot Specifications

#### Wide Screenshot (Desktop/Tablet)
**Filename**: `screenshot-wide.png`
**Dimensions**: 1280x720 pixels (16:9 aspect ratio)
**Content**: Homepage or recipe listing view on desktop
**Location**: Save to `public/screenshot-wide.png`
**Format**: PNG, optimized for web

**Capture Instructions**:
1. Open https://nosrecettes.ca in Chrome desktop browser
2. Set browser window to 1280x720 viewport (use DevTools Device Toolbar)
3. Navigate to the homepage with recipe grid visible
4. Take screenshot (Chrome DevTools → Capture screenshot)
5. Save as `screenshot-wide.png`
6. Optimize: `pngquant screenshot-wide.png --output public/screenshot-wide.png` (optional)

#### Narrow Screenshot (Mobile)
**Filename**: `screenshot-narrow.png`
**Dimensions**: 640x1136 pixels (iPhone aspect ratio)
**Content**: Homepage or recipe view on mobile
**Location**: Save to `public/screenshot-narrow.png`
**Format**: PNG, optimized for web

**Capture Instructions**:
1. Open https://nosrecettes.ca in Chrome DevTools mobile view
2. Set device to iPhone SE or custom 640x1136
3. Navigate to show recipe cards or single recipe
4. Take screenshot (Chrome DevTools → Capture screenshot)
5. Save as `screenshot-narrow.png`
6. Optimize: `pngquant screenshot-narrow.png --output public/screenshot-narrow.png` (optional)

### Changes Required

#### 1. Add Screenshot Files
**Action**: Create and add the two screenshot files to `public/` directory

**Files to create**:
- `public/screenshot-wide.png` (1280x720)
- `public/screenshot-narrow.png` (640x1136)

#### 2. Verify Manifest References
**File**: `public/manifest.json` (already generated in Phase 1)

**Check that it contains**:
```json
"screenshots": [
  {
    "src": "/screenshot-wide.png",
    "sizes": "1280x720",
    "type": "image/png",
    "form_factor": "wide",
    "label": "Accueil avec collection de recettes"
  },
  {
    "src": "/screenshot-narrow.png",
    "sizes": "640x1136",
    "type": "image/png",
    "form_factor": "narrow",
    "label": "Navigation mobile des recettes"
  }
]
```

**Note**: The manifest generator already includes these references ([scripts/generate-manifest.js:47-62](scripts/generate-manifest.js#L47-L62)), so no code changes needed.

### Success Criteria

#### Automated Verification
- [x] Screenshot files exist: `ls -la public/screenshot-*.png`
- [x] Files have correct dimensions: `file public/screenshot-wide.png` (should show 1280x720)
- [x] Files have correct dimensions: `file public/screenshot-narrow.png` (should show 640x1136)
- [x] Build succeeds: `npm run build`
- [x] Screenshots copied to dist: `ls -la dist/screenshot-*.png`

#### Manual Verification
- [x] Wide screenshot shows desktop homepage clearly at 1280x720
- [x] Narrow screenshot shows mobile view clearly at 640x1136
- [x] Both images are properly optimized (reasonable file sizes)
- [x] Screenshots look good and represent the app well

**Implementation Note**: After completing this phase and all automated verification passes, pause here for manual confirmation before proceeding to Phase 3.

---

## Phase 3: Verify and Deploy

### Overview
Test the complete fix locally, deploy to production via GitHub Actions, and verify PWA installation works on Android devices.

### Changes Required

#### 1. Local Testing
**Action**: Build locally and verify all assets are present

**Commands**:
```bash
# Clean previous build
rm -rf dist/

# Rebuild everything
npm run build

# Verify all files are in dist/
ls -la dist/icon-*.png dist/screenshot-*.png dist/manifest.json
```

**Manual checks**:
- Open `dist/manifest.json` and verify icon/screenshot paths
- Check that all referenced files exist in `dist/`
- Serve locally: `npx serve dist`
- Open http://localhost:3000 and check browser console for manifest errors

#### 2. Commit and Deploy
**Action**: Commit changes and push to trigger GitHub Actions deployment

**Files to commit**:
- `scripts/generate-manifest.js` (updated icon paths)
- `public/icon-192x192.png` (moved from root)
- `public/icon-512x512.png` (moved from root)
- `public/screenshot-wide.png` (new)
- `public/screenshot-narrow.png` (new)
- `public/manifest.json` (regenerated)

**Files to delete from root**:
- `icon-192x192.png` (moved to public/)
- `icon-512x512.png` (moved to public/)

**Commands**:
```bash
# Add files
git add scripts/generate-manifest.js
git add public/icon-192x192.png public/icon-512x512.png
git add public/screenshot-wide.png public/screenshot-narrow.png
git add public/manifest.json

# Remove old locations
git rm icon-192x192.png icon-512x512.png

# Commit
git commit -m "fix: correct PWA icon paths and add screenshots for Android installation

- Update manifest generator to reference icon-192x192.png and icon-512x512.png
- Move icon files to public/ directory for proper Vite copying
- Add screenshot-wide.png (1280x720) for desktop install preview
- Add screenshot-narrow.png (640x1136) for mobile install preview
- Fixes PWA installation prompt not appearing on Android Chrome

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"

# Push to trigger deployment
git push origin main
```

#### 3. Production Verification
**Action**: Wait for GitHub Actions to deploy, then test on production

**Wait for deployment**:
- Monitor: https://github.com/algritz/nosrecettes/actions
- Wait for "Deploy to GitHub Pages" workflow to complete

**Test production URLs**:
```bash
# All should return 200 OK
curl -I https://nosrecettes.ca/manifest.json
curl -I https://nosrecettes.ca/icon-192x192.png
curl -I https://nosrecettes.ca/icon-512x512.png
curl -I https://nosrecettes.ca/screenshot-wide.png
curl -I https://nosrecettes.ca/screenshot-narrow.png
```

#### 4. Test PWA Installation on Android
**Action**: Verify PWA install prompt appears on Android device

**Testing steps**:
1. Open Chrome on Android device
2. Navigate to https://nosrecettes.ca
3. Wait 30 seconds for engagement heuristics
4. Check for "Install app" banner or prompt
5. Open Chrome menu (⋮) → Look for "Install app" or "Add to Home screen"
6. Tap install and verify:
   - App icon appears on home screen
   - App opens in standalone mode (no browser UI)
   - App name is "Nos Recettes"
   - Screenshots appear in install dialog

### Success Criteria

#### Automated Verification
- [x] Local build completes: `npm run build`
- [x] All assets exist in dist: `ls -la dist/{icon,screenshot}-*.png`
- [x] GitHub Actions workflow succeeds
- [x] Production URLs return 200: All curl commands succeed

#### Manual Verification
- [x] PWA install prompt appears on Android Chrome after visiting site
- [x] Install dialog shows app screenshots (wide and narrow)
- [x] App installs successfully to home screen
- [x] Installed app launches in standalone mode
- [x] App icon displays correctly on home screen
- [x] No console errors related to manifest or icons

**Implementation Note**: This is the final phase. After all automated checks pass and manual verification confirms PWA installation works on Android, the implementation is complete.

---

## Testing Strategy

### Unit Tests
No unit tests required (configuration change only).

### Integration Tests
No automated integration tests needed. The PWA install criteria are validated by the browser.

### Manual Testing Steps

#### Local Testing
1. Run `npm run build:seo && npm run build`
2. Check `dist/manifest.json` contains correct paths
3. Verify all icon/screenshot files exist in `dist/`
4. Use Chrome DevTools → Application → Manifest to verify

#### Production Testing
1. Deploy to production via git push
2. Wait for GitHub Actions to complete
3. Test all asset URLs return 200
4. Open https://nosrecettes.ca in Chrome Android
5. Verify install prompt appears
6. Complete installation and test app

### Edge Cases to Test
- Clear Chrome data and revisit site (fresh install prompt)
- Test on different Android devices (various Chrome versions)
- Verify manifest validates using Chrome DevTools
- Check that existing installed apps (if any) still work

## Performance Considerations

- Icon files are already optimized (17KB and 149KB)
- Screenshot files should be under 500KB each for good UX
- Use `pngquant` or similar to optimize screenshots if needed
- Service worker will cache these assets after first load

## Migration Notes

### Breaking Changes
None. This fix only corrects existing broken references.

### Backwards Compatibility
- Users who previously couldn't install will now be able to
- Existing service worker will update automatically via `registerType: 'autoUpdate'`
- No cache clearing or manual steps required for users

### Rollback Plan
If issues arise:
1. Revert the commit
2. Push to main
3. GitHub Actions will redeploy previous version
4. PWA install will still be broken (same as before fix)

## References

- Original research: `thoughts/shared/research/2025-12-29-pwa-installation-android.md`
- Manifest generator: [scripts/generate-manifest.js](scripts/generate-manifest.js)
- VitePWA config: [vite.config.ts:16-38](vite.config.ts#L16-L38)
- GitHub workflow: [.github/workflows/deploy.yml](.github/workflows/deploy.yml)
- PWA install criteria: https://web.dev/install-criteria/
- Web App Manifest spec: https://www.w3.org/TR/appmanifest/
