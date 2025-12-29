---
date: 2025-12-29T00:00:00-05:00
author: David Cloutier
git_commit: fccfd743833d51cd426a537553c96b89b2c2dd50
branch: main
repository: nosrecettes.ca
topic: 'Fix GitHub Pages Deploy Workflow - Queue Instead of Cancel'
tags: [plan, github-actions, deployment, concurrency]
status: pending
last_updated: 2025-12-29
last_updated_by: David Cloutier
---

# Fix GitHub Pages Deploy Workflow - Queue Instead of Cancel

**Date**: 2025-12-29
**Author**: David Cloutier
**Git Commit**: fccfd743833d51cd426a537553c96b89b2c2dd50
**Branch**: main
**Repository**: nosrecettes.ca

## Overview

Fix the GitHub Pages deployment workflow to queue deployments instead of cancelling previous runs. Currently, PR deployments and main branch deployments share the same concurrency group, causing them to cancel each other.

## Problem Statement

From the workflow run history, we observe:

- PR branch deployments (`update-recipe/petits-pain...`) are cancelling main branch deployments
- Main branch deployments are cancelling PR deployments
- Both types of workflows compete in the same `concurrency: group: "pages"` group

**Root Cause**: All workflow runs (both PR and main) use the same concurrency group name `"pages"`, so GitHub Actions treats them as competing for the same deployment slot. When a new workflow starts, it cancels or queues against all other workflows in that group, regardless of branch.

## Current State Analysis

**File**: [.github/workflows/deploy.yml](/.github/workflows/deploy.yml)

**Current Concurrency Configuration** ([deploy.yml:14-16](/.github/workflows/deploy.yml#L14-L16)):

```yaml
concurrency:
  group: 'pages'
  cancel-in-progress: false
```

**Workflow Triggers** ([deploy.yml:3-7](/.github/workflows/deploy.yml#L3-L7)):

```yaml
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
```

**Deploy Job Condition** ([deploy.yml:53](/.github/workflows/deploy.yml#L53)):

```yaml
if: github.ref == 'refs/heads/main'
```

### Key Findings:

- The `cancel-in-progress: false` setting is correct for queueing
- The concurrency group is too broad - it includes all branches
- PR builds run but don't deploy (due to the `if` condition on deploy job)
- Main branch deployments should queue independently from PR builds

## Desired End State

After this plan is complete:

1. **Main branch deployments queue independently**: Multiple pushes to main will queue up and deploy sequentially without cancellation
2. **PR builds don't interfere with main deployments**: PR builds can run concurrently with main deployments
3. **PR builds queue within their own branch**: Multiple pushes to the same PR branch queue up and don't cancel each other
4. **Different PR branches can run concurrently**: PRs from different branches can build simultaneously

**Verification**:

- Push multiple commits to main rapidly → all deployments complete sequentially
- Push to a PR while main is deploying → PR build runs without cancelling main deployment
- Push multiple commits to same PR → builds queue within that PR branch
- Multiple PRs can build at the same time

## What We're NOT Doing

- Not changing the build or deployment process itself
- Not modifying permissions or environment settings
- Not adding branch protection rules
- Not changing the actual deployment targets or artifacts
- Not adding conditional logic for different branches beyond concurrency grouping

## Implementation Approach

Use dynamic concurrency groups that separate:

1. Main branch deployments into their own group
2. PR builds into branch-specific groups

This follows GitHub's recommended pattern for branch-specific concurrency while maintaining the queueing behavior with `cancel-in-progress: false`.

## Phase 1: Update Concurrency Configuration

### Overview

Modify the concurrency group to use dynamic expressions that create separate groups for main deployments vs PR builds.

### Changes Required:

#### 1. Update Workflow Concurrency Group

**File**: `.github/workflows/deploy.yml`
**Lines**: 14-16
**Changes**: Replace static concurrency group with dynamic group based on workflow context

**Current**:

```yaml
concurrency:
  group: 'pages'
  cancel-in-progress: false
```

**New**:

```yaml
concurrency:
  group: pages-${{ github.workflow }}-${{ github.event_name == 'push' && github.ref || github.head_ref }}
  cancel-in-progress: false
```

**Explanation**:

- `pages-${{ github.workflow }}` - Namespace with workflow name
- `${{ github.event_name == 'push' && github.ref || github.head_ref }}` - Dynamic group:
  - For push to main: Uses `github.ref` (e.g., `refs/heads/main`)
  - For pull requests: Uses `github.head_ref` (e.g., `update-recipe/petits-pain`)

**Result**:

- Main deployments: `pages-Deploy to GitHub Pages-refs/heads/main`
- PR branch builds: `pages-Deploy to GitHub Pages-update-recipe/petits-pain`

This ensures main deployments queue independently from PR builds, and each PR branch has its own queue.

### Alternative (Simpler) Approach:

If you prefer a simpler expression:

```yaml
concurrency:
  group: pages-${{ github.ref }}
  cancel-in-progress: false
```

This creates:

- Main: `pages-refs/heads/main`
- PR: `pages-refs/pull/1487/merge` (unique per PR)

Both approaches achieve the goal, but the first is more explicit about branch names in PR contexts.

### Success Criteria:

#### Automated Verification:

- [x] Workflow file passes YAML syntax validation
- [ ] No GitHub Actions workflow errors when pushed
- [ ] Workflow runs appear in Actions tab

#### Manual Verification:

- [ ] Push two commits to main rapidly → both deployments complete (one runs, one queues, no cancellation)
- [ ] Push to a PR while main is deploying → PR build runs without cancelling main
- [ ] Push multiple commits to the same PR branch → builds queue within that PR (no cancellation)
- [ ] Two different PR branches pushed simultaneously → both build concurrently
- [ ] Check workflow run history shows proper queueing behavior instead of cancellation icons

**Implementation Note**: After making this change and verifying automated checks pass, test the manual verification scenarios by actually pushing commits to main and PRs. Confirm in the Actions tab that the queueing behavior matches expectations before considering this complete.

---

## Testing Strategy

### Manual Testing Steps:

1. **Test Main Branch Queueing**:
   - Make two quick commits to main (e.g., update two different recipes)
   - Observe in GitHub Actions that second run queues behind first
   - Verify both runs complete successfully without cancellation

2. **Test PR Independent Building**:
   - Open a PR with changes
   - While PR build is running, push to main
   - Verify main deployment doesn't cancel PR build
   - Verify PR build doesn't cancel main deployment

3. **Test PR Branch Queueing**:
   - Push commit to PR branch
   - Immediately push another commit to same PR branch
   - Verify second build queues behind first (doesn't cancel)

4. **Test Multi-PR Concurrency**:
   - Have two PRs open from different branches
   - Push to both PRs
   - Verify both can build simultaneously

### Expected Behavior:

**Before Fix**:

- Workflows show cancellation icons (❌) when competing runs start
- Runs get terminated mid-execution
- Only the most recent run completes

**After Fix**:

- Workflows show queue indicators (🟡) when waiting
- All runs complete successfully (✅)
- Runs execute sequentially within their concurrency group
- Different groups (main vs PRs) don't block each other

## Performance Considerations

- PR builds take ~1-2 minutes (based on workflow history)
- Main deployments take ~1-2 minutes
- Queueing adds wait time but ensures all deployments complete
- Multiple rapid commits to main will queue up (max 1 running + 1 pending per GitHub Actions limit)
- If more than 2 commits happen rapidly, the middle pending run gets replaced by the newest

## Migration Notes

No migration needed - this is a configuration-only change. Existing deployments will continue to work. The change takes effect immediately on the next workflow run after the workflow file is updated.

## Rollback Plan

If issues occur, simply revert the concurrency group back to:

```yaml
concurrency:
  group: 'pages'
  cancel-in-progress: false
```

This returns to the current behavior where all runs share one queue.

## References

- Current workflow: [.github/workflows/deploy.yml](/.github/workflows/deploy.yml)
- GitHub Actions Concurrency Documentation: https://docs.github.com/en/actions/using-jobs/using-concurrency
- GitHub Pages Deployment Best Practices: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- Official Starter Workflows: https://github.com/actions/starter-workflows/tree/main/pages

## Implementation Timeline

This is a single-phase change that can be implemented immediately:

1. Update the workflow file (1 minute)
2. Commit and push to main (1 minute)
3. Test the behavior with real commits (10-15 minutes)

Total time: ~15-20 minutes including testing
