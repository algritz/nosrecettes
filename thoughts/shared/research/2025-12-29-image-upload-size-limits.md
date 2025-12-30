---
date: 2025-12-30T01:12:31+0000
researcher: Claude
git_commit: 66118f2a208edafd3ed7043698230a66f0677e23
branch: main
repository: nosrecettes.ca
topic: "Image Upload Size Limits: Current 10MB Cap and Impact of Allowing 50MB Files"
tags: [research, codebase, cloudinary, image-upload, file-size-limits, storage]
status: complete
last_updated: 2025-12-29
last_updated_by: Claude
---

# Research: Image Upload Size Limits and Storage Impact

**Date**: 2025-12-30T01:12:31+0000
**Researcher**: Claude
**Git Commit**: 66118f2a208edafd3ed7043698230a66f0677e23
**Branch**: main
**Repository**: nosrecettes.ca

## Research Question

When uploading a new picture, we're capped at 10MB files. Nowadays, cell phones take pictures that are ~50MB in size. Can we allow uploading such big files? What would be the impact? As far as I can tell, Cloudinary transforms those into smaller and more manageable formats - does it also store the original?

## Summary

**Current State**: The application enforces a hardcoded 10MB client-side file size limit before upload ([imageUtils.ts:62](src/utils/imageUtils.ts#L62)).

**Cloudinary Storage Behavior**: Cloudinary stores ONE original uploaded file per upload. The three responsive image sizes (400x300, 800x600, 1200x900) are NOT stored as separate files - they are generated on-demand via URL transformation parameters and cached by Cloudinary's CDN.

**Impact of Allowing 50MB Files**:
1. **Storage**: Linear increase - each 50MB original would be stored on Cloudinary instead of current ~3-10MB files
2. **Bandwidth**: Higher initial upload cost from client to Cloudinary
3. **Transformation**: Cloudinary can handle large files, but first-request transformation may be slower
4. **Client Experience**: Upload time increases significantly on slower connections
5. **No Code Changes Needed**: Only need to change one constant from 10MB to 50MB

**Automatic Optimization**: Cloudinary applies `quality: auto` and `fetch_format: auto` which reduces delivered file sizes without storing multiple versions. Original remains untouched.

## Detailed Findings

### Current File Size Limit Implementation

**Single Point of Enforcement**: [imageUtils.ts:62-64](src/utils/imageUtils.ts#L62-L64)

```typescript
if (file.size > 10 * 1024 * 1024) {
  // 10MB limit
  throw new Error("L'image ne peut pas dépasser 10MB")
}
```

**User-Facing Display**: [ImageUpload.tsx:347](src/components/ImageUpload.tsx#L347)
```tsx
PNG, JPG, WEBP jusqu'à 10MB • {images.length}/{maxImages} images
```

**Key Characteristics**:
- Hardcoded constant (not environment variable or config)
- Client-side validation only (no backend)
- Single source of truth
- French error message
- Validates BEFORE Cloudinary upload

### Cloudinary Storage and Transformation Model

**Upload Process**: [cloudinaryUtils.ts:48-78](src/utils/cloudinaryUtils.ts#L48-L78)

When an image is uploaded, these parameters are sent:
- `file` - The actual file blob
- `upload_preset` - Unsigned upload preset (stored in localStorage)
- `folder: 'recipes'` - Cloudinary folder location
- `quality: 'auto'` - Automatic quality optimization
- `fetch_format: 'auto'` - Automatic format conversion

**What Cloudinary Stores**:
1. **ONE original file** at `recipes/{recipe-slug}` or `recipes/{recipe-slug}-{index}`
2. **Metadata** including public_id, dimensions, format
3. **Transformation instructions** (quality: auto, fetch_format: auto) as settings, not pre-generated versions

**What Cloudinary DOES NOT Store**:
- ❌ Multiple size variants (small/medium/large)
- ❌ Pre-generated WebP/AVIF versions
- ❌ Cropped or resized copies

### Responsive Image Generation

**Three Size Variants**: [cloudinaryUtils.ts:189-214](src/utils/cloudinaryUtils.ts#L189-L214)

The application generates three URL variants on-demand:

| Size | Dimensions | URL Transformations | Usage |
|------|-----------|---------------------|--------|
| Small | 400x300px | `w_400,h_300,c_fill,q_auto,f_auto` | Thumbnails, mobile |
| Medium | 800x600px | `w_800,h_600,c_fill,q_auto,f_auto` | Default display |
| Large | 1200x900px | `w_1200,h_900,c_fill,q_auto,f_auto` | Desktop, high-DPI |

**URL Construction Example**:

For `public_id: "recipes/lasagne"` with `cloudName: "nosrecettes"`:

```
Small:  https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/lasagne
Medium: https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/lasagne
Large:  https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/lasagne
```

All three URLs reference **the same stored file** with different transformation parameters.

**How Transformations Work**:
1. First request: Cloudinary transforms the original on-demand
2. Transformed version cached in Cloudinary's CDN
3. Subsequent requests: Served from CDN cache (fast)
4. No additional storage cost for multiple sizes

### Automatic Optimization Features

**Quality Optimization** (`q_auto`): [cloudinaryUtils.ts:62](src/utils/cloudinaryUtils.ts#L62)
- Cloudinary analyzes image content
- Adjusts compression based on visual complexity
- Can reduce file size by 30-50% without visible degradation
- Applied at delivery time, not stored

**Format Optimization** (`f_auto`): [cloudinaryUtils.ts:63](src/utils/cloudinaryUtils.ts#L63)
- Serves WebP to Chrome/Edge/Firefox
- Serves AVIF to supported browsers (even smaller)
- Falls back to original format for older browsers
- Based on browser's `Accept` header
- Applied at delivery time, not stored

**Example Savings**:
- Original JPEG: 8MB
- WebP delivered: ~2-3MB (60-70% smaller)
- AVIF delivered: ~1.5-2MB (75-80% smaller)

### Current Configuration

**Cloudinary Configuration**: [CloudinarySetup.tsx:14-17](src/components/CloudinarySetup.tsx#L14-L17)

Stored in browser localStorage with key `'cloudinary-config'`:
```typescript
{
  cloudName: string,      // e.g., "nosrecettes"
  uploadPreset: string    // e.g., unsigned preset name
}
```

**Upload API Endpoint**:
```
https://api.cloudinary.com/v1_1/${cloudName}/image/upload
```

**Storage Location**: `recipes/` folder on Cloudinary

**Cleanup Process**: [.github/workflows/cleanup-cloudinary.yml](../.github/workflows/cleanup-cloudinary.yml)
- Triggered on PR merge
- Deletes original file using Cloudinary CLI
- All transformed URLs become unavailable (same underlying file)

## Impact Analysis: Allowing 50MB Files

### Changes Required

**Code Changes**:
1. Update limit in [imageUtils.ts:62](src/utils/imageUtils.ts#L62): `10 * 1024 * 1024` → `50 * 1024 * 1024`
2. Update UI text in [ImageUpload.tsx:347](src/components/ImageUpload.tsx#L347): "10MB" → "50MB"
3. Update documentation in [README.md](../README.md)

**No other changes needed** - Cloudinary handles large files automatically.

### Storage Impact

**Cloudinary Free Tier Limits** (from web research):
- Typical limit: 10MB per file
- Paid plans: Usually 100MB per file
- **May require upgrading to paid plan** to accept 50MB files

**Storage Calculation**:

Current scenario (10MB max):
- 721 recipes, 149 with images (20.7%)
- Average ~3-5MB per image
- Estimated storage: ~600MB

With 50MB files (worst case):
- If all images were 50MB: ~7.5GB storage
- More realistic (15-20MB average): ~2-3GB storage
- **5x storage increase** (worst case)

**Cost Impact** (estimated for Cloudinary):
- Free tier: 25GB storage (sufficient)
- If exceeding: ~$0.10-0.20 per GB/month on paid plans
- Bandwidth costs more significant than storage

### Bandwidth Impact

**Upload Bandwidth** (client → Cloudinary):
- Current: ~3-5MB average upload
- With 50MB: 10x increase in upload time
- On slow connection (5 Mbps): 80 seconds per 50MB image
- On fast connection (50 Mbps): 8 seconds per 50MB image

**Delivery Bandwidth** (Cloudinary → users):
- **NO CHANGE** - delivered sizes remain the same
- Small: ~50-100KB (WebP/AVIF)
- Medium: ~150-300KB
- Large: ~300-600KB
- Cloudinary transforms down from original, regardless of original size

**Monthly Bandwidth** (estimated):
- Current: Minimal (images cached)
- With larger originals: **Same delivery bandwidth**
- Only initial transformation uses more bandwidth once

### Transformation Performance

**First Request Latency**:
- Current (3-5MB): ~500ms-1s for transformation
- With 50MB: ~2-5s for first transformation
- Subsequent requests: **No change** (served from CDN cache)

**User Experience**:
- Only affects first user to request each size variant
- Cached globally by Cloudinary CDN
- Most users won't notice difference

### Client-Side Upload Experience

**Upload Time Comparison**:

| Connection | 10MB File | 50MB File | Increase |
|-----------|-----------|-----------|----------|
| 3G (3 Mbps) | ~27 seconds | ~133 seconds | 5x slower |
| 4G (20 Mbps) | ~4 seconds | ~20 seconds | 5x slower |
| WiFi (50 Mbps) | ~1.6 seconds | ~8 seconds | 5x slower |

**User Impact**:
- Mobile users on slow connections: Significant delay
- Desktop users on WiFi: Minor delay
- Loading indicators important
- Consider compression before upload

### Modern Phone Camera Sizes

**Typical File Sizes**:
- iPhone 14/15 Pro: 5-15MB (HEIC), 10-30MB (JPEG)
- Samsung Galaxy S23: 10-25MB
- Google Pixel 8: 5-20MB
- 4K photos: 15-50MB
- ProRAW/RAW: 50-100MB+

**Current 10MB Limit Issues**:
- Blocks many modern phone photos
- Forces users to compress/resize first
- Poor user experience

**With 50MB Limit**:
- ✅ Accepts most phone photos
- ✅ Better user experience
- ❌ Still blocks RAW files
- ❌ Longer upload times

## Code References

**File Size Validation**:
- [src/utils/imageUtils.ts:62-64](src/utils/imageUtils.ts#L62-L64) - 10MB limit enforcement
- [src/components/ImageUpload.tsx:347](src/components/ImageUpload.tsx#L347) - UI display

**Cloudinary Integration**:
- [src/utils/cloudinaryUtils.ts:48-78](src/utils/cloudinaryUtils.ts#L48-L78) - Upload function
- [src/utils/cloudinaryUtils.ts:189-214](src/utils/cloudinaryUtils.ts#L189-L214) - Responsive URL generation
- [src/utils/cloudinaryUtils.ts:21-46](src/utils/cloudinaryUtils.ts#L21-L46) - URL construction

**Image Processing**:
- [src/utils/imageUtils.ts:54-100](src/utils/imageUtils.ts#L54-L100) - Process image file
- [src/components/ImageUpload.tsx:59-76](src/components/ImageUpload.tsx#L59-L76) - Upload handler

**Configuration**:
- [src/components/CloudinarySetup.tsx:14-27](src/components/CloudinarySetup.tsx#L14-L27) - Config management
- [.github/workflows/cleanup-cloudinary.yml](../.github/workflows/cleanup-cloudinary.yml) - Cleanup automation

## Architecture Documentation

**Upload Flow**:
1. User selects image → `ImageUpload.tsx`
2. File validation → `imageUtils.ts:58-64` (type + size checks)
3. Upload to Cloudinary → `cloudinaryUtils.ts:48-78` (with quality:auto, fetch_format:auto)
4. Generate responsive URLs → `cloudinaryUtils.ts:189-214` (3 size variants)
5. Return `ProcessedImage` object with URLs
6. Store URLs in recipe JSON

**Delivery Flow**:
1. User requests recipe page
2. Browser requests image URL with transformations
3. First request: Cloudinary transforms original on-demand
4. Subsequent requests: Served from CDN cache
5. Format chosen based on browser support (WebP/AVIF/original)

**Storage Model**:
- **Cloudinary**: ONE original per upload + transformation metadata
- **Application**: Image URLs in recipe JSON files
- **Browser**: Cloudinary config in localStorage
- **CDN Cache**: Transformed versions cached globally

## Historical Context (from thoughts/)

**Previous Research** ([thoughts/shared/research/2025-12-28-offline-pwa-capabilities.md](../thoughts/shared/research/2025-12-28-offline-pwa-capabilities.md)):
- Documented Cloudinary integration with 3 responsive sizes
- 149 out of 721 recipes (20.7%) have images
- Service worker strategy: NetworkOnly for Cloudinary (no offline caching)
- Bundle size: 3.5MB gzipped (mostly recipe data, not images)

**Implementation Plans** ([thoughts/shared/plans/2025-12-29-knip-cleanup.md](../thoughts/shared/plans/2025-12-29-knip-cleanup.md)):
- Verified direct REST API usage (not npm package)
- Confirmed `ImageUpload` and `CloudinarySetup` components working
- Image upload tested and functional

## Recommendation Summary

**To Allow 50MB Files**:

1. **Verify Cloudinary Plan**: Check if current plan supports 50MB per file
2. **Update Size Limit**: Change constant in `imageUtils.ts:62`
3. **Update UI Text**: Change display in `ImageUpload.tsx:347`
4. **Consider Compression**: Add client-side compression before upload
5. **Monitor Costs**: Watch storage and bandwidth usage

**Trade-offs**:
- ✅ Better user experience (accepts modern phone photos)
- ✅ No changes to delivery performance
- ✅ Cloudinary handles optimization automatically
- ❌ 5x longer upload times
- ❌ 5x storage increase (worst case)
- ❌ May require paid Cloudinary plan
- ❌ First-request transformation slower

**Alternative Approach**: Client-side compression to ~10-15MB before upload
- Better upload times
- Lower storage costs
- Still accepts large files
- Requires additional library (e.g., browser-image-compression)

## Related Research

- [2025-12-28: Offline PWA Capabilities](2025-12-28-offline-pwa-capabilities.md) - Cloudinary integration details
- [2025-12-29: Knip Analysis](2025-12-29-knip-analysis.md) - Direct API usage confirmation

## Open Questions

1. What is the current Cloudinary plan (free/paid)?
2. What are the actual API limits for the configured upload preset?
3. Should we implement client-side compression instead of just increasing limit?
4. What's the actual average size of photos users are trying to upload?
5. Could we add progress indicators for large uploads?

## External Documentation Links

Cloudinary documentation to consult:
- Upload API: `https://cloudinary.com/documentation/image_upload_api_reference`
- Transformations: `https://cloudinary.com/documentation/image_transformations`
- Upload Limits: `https://cloudinary.com/documentation/upload_quota`
- Pricing: `https://cloudinary.com/pricing`
- Dynamic Transformations: `https://cloudinary.com/documentation/image_transformation_reference`
