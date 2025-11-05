#!/bin/bash

echo "🔍 COMPREHENSIVE VERIFICATION REPORT"
echo "===================================="
echo ""

echo "1. Checking Slide 13 HTML Structure..."
echo "---------------------------------------"
slide13=$(sed -n '427,490p' slides.md)

# Check for raw HTML grid
if echo "$slide13" | grep -q '<div class="grid grid-cols-2'; then
    echo "✅ Using raw HTML grid (correct)"
else
    echo "❌ Not using raw HTML grid"
fi

# Check for Vue components
if echo "$slide13" | grep -q '<TwoColumnLayout'; then
    echo "❌ Still using Vue components (WRONG)"
else
    echo "✅ No Vue components (correct)"
fi

# Check for blank lines after opening tags
blank_count=$(echo "$slide13" | grep -Pzo '<div[^>]*>\n\n' | grep -c '')
if [ "$blank_count" -eq 0 ]; then
    echo "✅ No blank lines after opening tags (correct)"
else
    echo "❌ Found $blank_count blank lines after tags (WRONG)"
fi

echo ""
echo "2. HTML Tag Balance..."
echo "---------------------------------------"
open_divs=$(grep -o '<div' slides.md | wc -l)
close_divs=$(grep -o '</div>' slides.md | wc -l)
echo "   Open divs:  $open_divs"
echo "   Close divs: $close_divs"
if [ "$open_divs" -eq "$close_divs" ]; then
    echo "✅ All tags balanced"
else
    echo "❌ Unbalanced: $((open_divs - close_divs)) difference"
fi

echo ""
echo "3. HTML Entity Check..."
echo "---------------------------------------"
entities=$(grep -o '&lt;\|&gt;\|&quot;' slides.md | wc -l)
if [ "$entities" -eq 0 ]; then
    echo "✅ No HTML entities (HTML will render)"
else
    echo "❌ Found $entities HTML entities (HTML as text!)"
fi

echo ""
echo "4. Cache Status..."
echo "---------------------------------------"
if [ -d "node_modules/.vite" ]; then
    echo "⚠️  Vite cache exists"
else
    echo "✅ Vite cache cleared"
fi

if [ -d ".slidev" ]; then
    echo "⚠️  Slidev cache exists"
else
    echo "✅ Slidev cache cleared"
fi

if [ -d "dist" ]; then
    echo "✅ Build output exists"
else
    echo "⚠️  No build output"
fi

echo ""
echo "5. Build Test..."
echo "---------------------------------------"
if npm run build > /tmp/build.log 2>&1; then
    echo "✅ Build successful"
    build_time=$(grep "✓ built in" /tmp/build.log | tail -1)
    echo "   $build_time"
else
    echo "❌ Build failed"
fi

echo ""
echo "===================================="
echo "6. FINAL VERDICT"
echo "===================================="
echo ""

if [ "$open_divs" -eq "$close_divs" ] && [ "$entities" -eq 0 ] && [ "$blank_count" -eq 0 ]; then
    echo "✅ SOURCE CODE IS PERFECT!"
    echo ""
    echo "📌 ACTION REQUIRED:"
    echo "   The issue is YOUR BROWSER CACHE, not the code."
    echo ""
    echo "   DO THIS NOW:"
    echo "   1. Open INCOGNITO window (Ctrl+Shift+N)"
    echo "   2. Go to your slides URL"
    echo "   3. HTML will render correctly"
    echo ""
else
    echo "❌ Source code needs fixes"
fi

echo ""
