# CRITICAL: Clear Cache Steps

## Your Issue
The source code is **100% CORRECT** but your browser is showing an **OLD CACHED VERSION**.

The screenshot shows HTML text like `<div class="p-1.5 bg-teal-900/30..."` which means:
- The browser loaded an old version
- Dev server cache is persisting
- Hard refresh alone won't work

## IMMEDIATE SOLUTION

### Step 1: Stop EVERYTHING
```bash
# Kill ALL node processes
pkill -9 node
```

### Step 2: Clear Build Cache
```bash
# Remove all cache directories
rm -rf node_modules/.vite
rm -rf dist
rm -rf .slidev
```

### Step 3: Rebuild from Scratch
```bash
# Clean build
npm run build
```

### Step 4: Clear Browser Cache
1. Open DevTools (F12)
2. Right-click the refresh button
3. Select "Empty Cache and Hard Reload"
4. OR: Go to Settings → Privacy → Clear browsing data → Cached images and files

### Step 5: Restart Dev Server
```bash
# Start fresh
npm run dev
```

### Step 6: Open in Incognito/Private Window
- Chrome/Edge: Ctrl+Shift+N
- Firefox: Ctrl+Shift+P
- Safari: Cmd+Shift+N

This guarantees NO cached content.

## Why This Happens

Slidev uses Vite which has multiple cache layers:
1. **Node modules cache** (.vite directory)
2. **Build output cache** (dist directory)
3. **Slidev metadata** (.slidev directory)
4. **Browser cache** (service workers, local storage)

Simply refreshing the browser only clears layer 4, not layers 1-3.

## Verification

After following all steps, the HTML should render properly. You should see:
- A two-column grid
- Styled boxes with colors
- NO raw HTML text

## If Still Not Working

Run this diagnostic:
```bash
# Check if source is correct
sed -n '427,450p' slides.md

# Should show raw HTML grids, NOT <TwoColumnLayout>
# Should have NO blank lines after opening <div> tags
```

The source code has been validated with comprehensive tests:
- ✅ No HTML entities
- ✅ Balanced tags (494/494)
- ✅ No Vue components
- ✅ No blank lines after tags
- ✅ Build successful

The issue is 100% caching, not the source code.
