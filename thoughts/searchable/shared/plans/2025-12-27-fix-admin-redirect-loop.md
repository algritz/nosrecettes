# Fix Admin Page Redirect Loop - Implementation Plan

**Date**: 2025-12-27 21:41:46 -0500
**Author**: Claude Code
**Git Commit**: ffe3a786f7a313fbad3f605eb0be32e508d5a54a
**Branch**: main
**Repository**: nosrecettes.ca

## Overview

Fix the redirect loop that prevents access to `/admin` page after migrating the site from `/nosrecettes/` subdirectory to root `/` path. The issue was introduced when the site configuration was centralized but the 404.html redirect logic wasn't updated to reflect the new root-level deployment.

## Current State Analysis

### Problem Description

After fixing the blank page issue by migrating from `/nosrecettes/` to `/` (commit ffe3a78), the `/admin` route now enters an infinite redirect loop. Users cannot access the admin dashboard.

### Root Cause

The [public/404.html:85](public/404.html#L85) file contains a `pathSegmentsToKeep` variable set to `1`, which was correct for the `/nosrecettes/` subdirectory deployment but is incorrect for root `/` deployment.

**Broken redirect logic:**
```javascript
var pathSegmentsToKeep = 1;  // This was correct for /nosrecettes/ base, wrong for / base
var l = window.location;

l.replace(
  l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
  l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
  l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
  (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
  l.hash
);
```

### How the Loop Occurs

1. User visits `https://nosrecettes.ca/admin`
2. Static host returns 404.html (since `/admin` file doesn't exist)
3. 404.html runs redirect logic with `pathSegmentsToKeep = 1`
4. For path `/admin`:
   - Split: `['', 'admin']`
   - Keep segments 0 to 2: `['', 'admin']`
   - Result: `/admin/?/` or `/admin/?/admin` (malformed)
5. This malformed URL doesn't exist, triggers 404.html again
6. **INFINITE LOOP**

### Why `pathSegmentsToKeep = 1` Was Used

- In the old `/nosrecettes/` deployment, URLs were like `https://algritz.github.io/nosrecettes/admin`
- The redirect needed to preserve the `/nosrecettes` base segment
- `pathSegmentsToKeep = 1` meant "keep the first segment after root"
- This allowed proper SPA routing within the subdirectory

### Why It Breaks at Root

- In the new `/` deployment, URLs are like `https://nosrecettes.ca/admin`
- There is no base segment to preserve
- `pathSegmentsToKeep = 1` incorrectly tries to keep `/admin` as the base
- This causes the redirect to construct invalid URLs

### Redirect Behavior Comparison

**With `pathSegmentsToKeep = 1` (BROKEN):**
- `/admin` → `/admin/?/` (causes loop)
- `/recipe/test` → `/recipe/?/test` (might work but incorrect)
- `/` → `//?/` (broken)

**With `pathSegmentsToKeep = 0` (CORRECT):**
- `/admin` → `/?/admin` (works - SPA handles routing)
- `/recipe/test` → `/?/recipe/test` (works)
- `/` → `/?/` (works)

### Key Discoveries

- **404.html redirect mechanism**: Uses query parameter encoding (`/?/path`) to pass routes to the SPA
- **index.html decoder**: Decodes the `/?/` format back to `/path` using [index.html:138-159](index.html#L138-L159)
- **No other affected files**: The index.html redirect decoder doesn't need changes
- **Protected routes work**: The protected routes logic (`/new-recipe`, `/edit-recipe`, `/manage-categories`) still functions correctly because they check authentication before redirecting

## Desired End State

### Success Metrics

After implementation:
- `/admin` page is accessible without redirect loop
- All other routes continue to work correctly
- 404 page displays for truly non-existent routes
- SPA routing functions properly for all protected and unprotected routes

### How to Verify

1. **Admin page access**:
   - Navigate to `https://nosrecettes.ca/admin`
   - Admin page loads successfully
   - No infinite redirect loop in Network tab

2. **Other routes still work**:
   - Homepage loads at `https://nosrecettes.ca/`
   - Recipe pages load at `https://nosrecettes.ca/recipe/[slug]`
   - Protected routes (`/new-recipe`, `/edit-recipe/:slug`, `/manage-categories`) work correctly

3. **404 for invalid routes**:
   - Navigate to non-existent URL like `/this-does-not-exist`
   - Shows proper 404 error page
   - "Return to home" button works

## What We're NOT Doing

- **Not** changing the SPA redirect mechanism architecture
- **Not** modifying index.html redirect decoder logic
- **Not** updating the authentication check logic in 404.html
- **Not** changing protected routes behavior
- **Not** adding new error handling or monitoring
- **Not** modifying the SPA routing structure in App.tsx

## Implementation Approach

This is a **single-line fix** that updates the `pathSegmentsToKeep` constant from `1` to `0` to reflect the root-level deployment structure. The change is surgical and low-risk.

**Why this is safe:**
- Only affects 404.html redirect logic
- Doesn't modify authentication checks
- Aligns with the existing root-level configuration in [src/config/site.config.ts](src/config/site.config.ts)
- Follows the same pattern established in commit ffe3a78 (remove `/nosrecettes/` base path)

## Phase 1: Fix 404.html Redirect Logic

### Overview

Update the `pathSegmentsToKeep` variable in 404.html to reflect root-level deployment. This single change fixes the infinite redirect loop by ensuring the 404 handler constructs valid SPA redirect URLs.

### Changes Required

#### 1. Update pathSegmentsToKeep Variable

**File**: [public/404.html:85](public/404.html#L85)

**Current code:**
```javascript
var pathSegmentsToKeep = 1;
```

**Updated code:**
```javascript
var pathSegmentsToKeep = 0;
```

**Rationale**:
- With root deployment, there is no base path segment to preserve
- `0` tells the redirect logic to keep only the root segment (`/`)
- All route segments after root should be encoded in the query parameter

**Line to modify**: Line 85 only

**No other changes needed**: The rest of the 404.html logic remains unchanged because:
- Authentication checks are independent of path segments
- Protected routes array doesn't need updates
- SPA redirect URL construction algorithm is correct
- Error page HTML display is unaffected

### Success Criteria

#### Automated Verification

- [x] Verify the change was made: `grep -n "pathSegmentsToKeep = 0" public/404.html` ✅ Line 85 confirmed
- [x] Verify old value is gone: `grep -n "pathSegmentsToKeep = 1" public/404.html` ✅ No matches
- [x] Build the site: `npm run build` ✅ Build succeeded without errors
- [x] Verify change in dist: `grep "pathSegmentsToKeep = 0" dist/404.html` ✅ Confirmed

#### Manual Verification

1. **Start local development server**:
   ```bash
   npm run dev
   ```

2. **Test admin route access**:
   - Open browser to `http://localhost:8080/admin`
   - Admin page should load without redirect loop
   - Check browser Network tab - should see single request, not infinite requests

3. **Test other routes**:
   - Navigate to `/` - homepage loads
   - Navigate to `/recipe/ailes-de-poulet` - recipe page loads
   - Navigate to `/new-recipe` - shows 404 if not authenticated, or loads if authenticated
   - Navigate to `/invalid-route-test` - shows 404 error page

4. **Verify SPA routing**:
   - From homepage, click on a recipe link - should route properly
   - Use browser back button - should work
   - Directly access a recipe URL - should load correctly

5. **Test 404 page functionality**:
   - Navigate to `/this-route-does-not-exist`
   - Should see 404 error page (not a redirect loop)
   - Click "Retour à l'accueil" button - should go to homepage

**Implementation Note**: This is the only phase required. After verification, the fix is complete and ready for deployment.

## Testing Strategy

### Local Testing

#### Development Server Tests

```bash
npm run dev
```

**Verification checklist:**
- [ ] `/admin` loads without redirect loop
- [ ] Homepage loads at root `/`
- [ ] Recipe pages load correctly
- [ ] Protected routes show 404 when not authenticated
- [ ] Invalid routes show 404 page
- [ ] Browser back/forward works
- [ ] No console errors

#### Build and Preview Tests

```bash
npm run build
npm run preview
```

**Verification checklist:**
- [ ] Build completes successfully
- [ ] Preview server runs without errors
- [ ] All routes work the same as in development
- [ ] 404 page displays correctly for invalid routes
- [ ] No infinite redirect loops anywhere

### Pre-Deployment Checklist

**Code Review:**
- [ ] Only `pathSegmentsToKeep` value changed (line 85)
- [ ] No other modifications to 404.html
- [ ] Change from `1` to `0` is correct

**Final Testing:**
```bash
# Clean build
rm -rf dist node_modules/.vite
npm run build

# Verify 404.html change is in dist
grep "pathSegmentsToKeep = 0" public/404.html
grep "pathSegmentsToKeep = 0" dist/404.html

# Preview one last time
npm run preview
# Manual test all routes again
```

### Post-Deployment Verification

**Immediate Checks (on https://nosrecettes.ca):**
- [ ] Navigate to `/admin` - loads successfully
- [ ] No redirect loop in Network tab
- [ ] Homepage works
- [ ] Recipe pages work
- [ ] Protected routes show correct behavior (404 or load based on auth)
- [ ] Invalid routes show 404 page
- [ ] No console errors

**Browser Testing:**

Test on Chrome, Firefox, Safari:
- [ ] `/admin` loads on all browsers
- [ ] No infinite redirects
- [ ] SPA routing works
- [ ] Back button works
- [ ] Direct URL access works

### Rollback Plan

If issues are found post-deployment:

**Quick Rollback:**
```bash
git revert HEAD --no-edit
git push origin main
```

**Monitor:**
- GitHub Actions workflow completes
- Site loads after rollback
- `/admin` behavior (will have redirect loop again, but site is stable)

**Alternative Fix:**

If `pathSegmentsToKeep = 0` causes unexpected issues with other routes:
1. Investigate which routes break
2. Consider conditional logic:
   ```javascript
   var pathSegmentsToKeep = currentPath === '/admin' ? 0 : 1;
   ```
3. Test thoroughly before redeploying

## Performance Considerations

- **No performance impact**: Single constant value change
- **Build time**: Unchanged
- **Bundle size**: Zero change
- **Runtime overhead**: Zero change (same logic, different constant)
- **User experience**: Significantly improved (admin page now accessible)

## Migration Notes

### Breaking Changes

None. This fix restores functionality that was broken in the previous migration.

### Related Changes

This fix completes the migration started in commit ffe3a78:
- Vite base path: Changed from `/nosrecettes/` to `/` ✅
- Site config: Centralized with empty basePath ✅
- Build scripts: Updated to use root paths ✅
- Runtime code: Updated to use root paths ✅
- Static files: Updated to remove `/nosrecettes/` ✅
- **404.html redirect logic: Updated to use root-level segments** ← This fix

## References

- Previous migration plan: [thoughts/shared/plans/2025-12-27-custom-domain-url-fix.md](thoughts/shared/plans/2025-12-27-custom-domain-url-fix.md)
- Site configuration: [src/config/site.config.ts](src/config/site.config.ts)
- React Router config: [src/App.tsx:18](src/App.tsx#L18)
- SPA redirect decoder: [index.html:138-159](index.html#L138-L159)
- 404 redirect logic: [public/404.html:60-96](public/404.html#L60-L96)
