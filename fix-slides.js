#!/usr/bin/env node

/**
 * AUTOMATED SLIDE FIXER
 *
 * This script automatically fixes all identified issues from the test suite
 */

const fs = require('fs');
const path = require('path');

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  bold: '\x1b[1m'
};

class SlideFixer {
  constructor(filePath) {
    this.filePath = filePath;
    this.content = fs.readFileSync(filePath, 'utf-8');
    this.originalContent = this.content;
    this.fixes = [];
  }

  // Fix 1: Convert raw HTML grids to components
  fixRawHTMLGrids() {
    console.log(`\n${colors.blue}${colors.bold}FIX 1: Converting Raw HTML Grids to Components${colors.reset}`);

    let fixCount = 0;

    // Fix grid-cols-2 with various patterns
    const twoColPatterns = [
      {
        // Pattern: <div class="grid grid-cols-2 gap-X max-h-[Xvh] overflow-hidden">
        regex: /<div class="grid grid-cols-2 gap-(\d+)(?:\s+max-h-\[\d+vh\])?(?:\s+overflow-hidden)?(?:\s+text-\w+)?(?:\s+mt-\d+)?">/g,
        replacement: (match, gap) => `<TwoColumnLayout :gap="${gap}">`,
        name: 'grid-cols-2 with gap'
      },
      {
        // Pattern: <div class="grid grid-cols-2 gap-X text-size mt-X">
        regex: /<div class="grid grid-cols-2 gap-(\d+)(?:\s+text-\w+)?(?:\s+mt-\d+)?(?:\s+text-\w+)?">/g,
        replacement: (match, gap) => `<TwoColumnLayout :gap="${gap}">`,
        name: 'grid-cols-2 with text size'
      }
    ];

    // Fix grid-cols-3
    const threeColPatterns = [
      {
        regex: /<div class="grid grid-cols-3 gap-(\d+)(?:\s+[^"]+)?">/g,
        replacement: (match, gap) => `<ThreeColumnLayout :gap="${gap}">`,
        name: 'grid-cols-3'
      }
    ];

    // Apply two-column fixes
    twoColPatterns.forEach(pattern => {
      const matches = this.content.match(pattern.regex);
      if (matches) {
        this.content = this.content.replace(pattern.regex, pattern.replacement);
        fixCount += matches.length;
        console.log(`  ${colors.green}✓ Fixed ${matches.length} instances of ${pattern.name}${colors.reset}`);
      }
    });

    // Apply three-column fixes
    threeColPatterns.forEach(pattern => {
      const matches = this.content.match(pattern.regex);
      if (matches) {
        this.content = this.content.replace(pattern.regex, pattern.replacement);
        fixCount += matches.length;
        console.log(`  ${colors.green}✓ Fixed ${matches.length} instances of ${pattern.name}${colors.reset}`);
      }
    });

    // Now find and fix closing tags
    // We need to be smart about this - only close grids that we converted
    this.fixClosingTags();

    this.fixes.push({
      type: 'RAW_HTML_GRIDS',
      count: fixCount,
      description: `Converted ${fixCount} raw HTML grids to layout components`
    });

    return fixCount;
  }

  fixClosingTags() {
    // This is tricky - we need to find grid opening/closing pairs and replace them
    // For now, we'll use a simpler approach: find patterns that are clearly grid wrappers

    const lines = this.content.split('\n');
    const newLines = [];
    let inConvertedGrid = false;
    let gridDepth = 0;
    let convertedGridDepth = -1;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Check if this is a converted grid
      if (/<(TwoColumnLayout|ThreeColumnLayout)/.test(line)) {
        inConvertedGrid = true;
        convertedGridDepth = gridDepth;
        newLines.push(line);
        gridDepth++;
        continue;
      }

      // Track depth
      const opens = (line.match(/<div/g) || []).length;
      const closes = (line.match(/<\/div>/g) || []).length;

      // If we're in a converted grid and we hit the closing depth
      if (inConvertedGrid && closes > 0) {
        let remainingCloses = closes;
        let newLine = line;

        // Check if this closes our converted grid
        if (gridDepth - closes <= convertedGridDepth) {
          // Replace one </div> with </TwoColumnLayout> or </ThreeColumnLayout>
          const prevLine = newLines[newLines.length - 1] || '';
          const componentMatch = this.content.substring(0, this.content.indexOf(line))
            .match(/<(TwoColumnLayout|ThreeColumnLayout)[^>]*>(?![\s\S]*<\1)/);

          if (componentMatch) {
            const componentName = componentMatch[1];
            newLine = newLine.replace('</div>', `</${componentName}>`);
            inConvertedGrid = false;
            convertedGridDepth = -1;
          }
        }

        newLines.push(newLine);
        gridDepth -= closes;
        gridDepth += opens;
        continue;
      }

      newLines.push(line);
      gridDepth += opens;
      gridDepth -= closes;
    }

    this.content = newLines.join('\n');
  }

  // Fix 2: Reduce excessive spacing
  fixExcessiveSpacing() {
    console.log(`\n${colors.blue}${colors.bold}FIX 2: Reducing Excessive Spacing${colors.reset}`);

    let fixCount = 0;

    const spacingFixes = [
      { from: /space-y-([6789])/g, to: (m, n) => `space-y-${Math.max(2, n - 3)}`, name: 'space-y' },
      { from: /gap-([789])/g, to: (m, n) => `gap-${n - 3}`, name: 'gap' },
      { from: /p-([6789])/g, to: (m, n) => `p-${Math.max(2, n - 2)}`, name: 'padding' },
      { from: /mb-([6789])/g, to: (m, n) => `mb-${Math.max(2, n - 3)}`, name: 'margin-bottom' },
      { from: /mt-([6789])/g, to: (m, n) => `mt-${Math.max(2, n - 3)}`, name: 'margin-top' }
    ];

    spacingFixes.forEach(fix => {
      const matches = this.content.match(fix.from);
      if (matches) {
        this.content = this.content.replace(fix.from, fix.to);
        fixCount += matches.length;
        console.log(`  ${colors.green}✓ Reduced ${matches.length} ${fix.name} instances${colors.reset}`);
      }
    });

    this.fixes.push({
      type: 'EXCESSIVE_SPACING',
      count: fixCount,
      description: `Reduced ${fixCount} excessive spacing utilities`
    });

    return fixCount;
  }

  // Fix 3: Reduce large font sizes
  fixLargeFonts() {
    console.log(`\n${colors.blue}${colors.bold}FIX 3: Reducing Large Font Sizes${colors.reset}`);

    let fixCount = 0;

    const fontFixes = [
      { from: /text-7xl/g, to: 'text-5xl' },
      { from: /text-6xl/g, to: 'text-4xl' },
      { from: /text-5xl/g, to: 'text-3xl' },
      { from: /text-4xl/g, to: 'text-2xl' },
      { from: /text-3xl/g, to: 'text-xl' },
      { from: /text-2xl/g, to: 'text-lg' }
    ];

    fontFixes.forEach(fix => {
      const matches = this.content.match(fix.from);
      if (matches) {
        this.content = this.content.replace(fix.from, fix.to);
        fixCount += matches.length;
        console.log(`  ${colors.green}✓ Reduced ${matches.length} ${fix.from.source} to ${fix.to}${colors.reset}`);
      }
    });

    this.fixes.push({
      type: 'LARGE_FONTS',
      count: fixCount,
      description: `Reduced ${fixCount} large font sizes`
    });

    return fixCount;
  }

  // Fix 4: Add max-height constraints to images
  fixImageConstraints() {
    console.log(`\n${colors.blue}${colors.bold}FIX 4: Adding Height Constraints to Images${colors.reset}`);

    let fixCount = 0;

    // Find images without max-h- or h- classes
    const imageRegex = /<img([^>]*?)(?<!max-h-|h-)class="([^"]*?)"([^>]*?)>/g;

    this.content = this.content.replace(imageRegex, (match, before, classes, after) => {
      // Skip if already has height constraint
      if (match.includes('max-h-') || match.includes('h-[')) {
        return match;
      }

      // Add max-h-[50vh] as default constraint
      const newClasses = classes + ' max-h-[50vh]';
      fixCount++;
      return `<img${before}class="${newClasses}"${after}>`;
    });

    console.log(`  ${colors.green}✓ Added height constraints to ${fixCount} images${colors.reset}`);

    this.fixes.push({
      type: 'IMAGE_CONSTRAINTS',
      count: fixCount,
      description: `Added height constraints to ${fixCount} images`
    });

    return fixCount;
  }

  // Fix 5: Reduce max-height values > 70vh
  fixMaxHeight() {
    console.log(`\n${colors.blue}${colors.bold}FIX 5: Reducing Excessive max-height Values${colors.reset}`);

    let fixCount = 0;

    // Find max-h-[Xvh] where X > 70
    const maxHeightRegex = /max-h-\[(\d+)vh\]/g;

    this.content = this.content.replace(maxHeightRegex, (match, vh) => {
      if (parseInt(vh) > 70) {
        fixCount++;
        return 'max-h-[68vh]';
      }
      return match;
    });

    console.log(`  ${colors.green}✓ Reduced ${fixCount} max-height values to 68vh${colors.reset}`);

    this.fixes.push({
      type: 'MAX_HEIGHT',
      count: fixCount,
      description: `Reduced ${fixCount} max-height values to safe limit`
    });

    return fixCount;
  }

  // Fix 6: Fix nested grids in images
  fixNestedImageGrids() {
    console.log(`\n${colors.blue}${colors.bold}FIX 6: Fixing Nested Grid Patterns${colors.reset}`);

    let fixCount = 0;

    // Find specific pattern: <div class="grid grid-cols-2 gap-2 text-xs"> inside other grids
    // This is from line 855 in the report
    const nestedGridPattern = /<div class="grid grid-cols-2 gap-2 text-xs">/g;

    this.content = this.content.replace(nestedGridPattern, (match) => {
      fixCount++;
      return '<div class="flex gap-2 text-xs">';
    });

    // Pattern from line 880
    const nestedGridPattern2 = /<div class="grid grid-cols-2 gap-2">/g;

    this.content = this.content.replace(nestedGridPattern2, (match) => {
      // Check if this is actually nested
      const beforeMatch = this.content.substring(0, this.content.indexOf(match));
      const lastGridOrComponent = Math.max(
        beforeMatch.lastIndexOf('<TwoColumnLayout'),
        beforeMatch.lastIndexOf('<ThreeColumnLayout'),
        beforeMatch.lastIndexOf('grid-cols')
      );
      const lastClosing = Math.max(
        beforeMatch.lastIndexOf('</TwoColumnLayout>'),
        beforeMatch.lastIndexOf('</ThreeColumnLayout>'),
        beforeMatch.lastIndexOf('</div>')
      );

      if (lastGridOrComponent > lastClosing) {
        fixCount++;
        return '<div class="flex gap-2">';
      }
      return match;
    });

    console.log(`  ${colors.green}✓ Fixed ${fixCount} nested grid patterns${colors.reset}`);

    this.fixes.push({
      type: 'NESTED_GRIDS',
      count: fixCount,
      description: `Fixed ${fixCount} nested grid patterns`
    });

    return fixCount;
  }

  // Apply all fixes
  applyAllFixes() {
    console.log(`${colors.bold}${colors.blue}Starting Automated Slide Fixes...${colors.reset}\n`);

    const totalBefore = this.content.length;

    this.fixMaxHeight();
    this.fixRawHTMLGrids();
    this.fixExcessiveSpacing();
    this.fixLargeFonts();
    this.fixImageConstraints();
    this.fixNestedImageGrids();

    const totalAfter = this.content.length;

    console.log(`\n${colors.bold}${'='.repeat(80)}${colors.reset}`);
    console.log(`${colors.bold}${colors.green}FIX SUMMARY${colors.reset}`);
    console.log(`${colors.bold}${'='.repeat(80)}${colors.reset}\n`);

    this.fixes.forEach(fix => {
      console.log(`  ${colors.green}✓${colors.reset} ${fix.description}`);
    });

    console.log(`\n  Content size: ${totalBefore} → ${totalAfter} chars`);
    console.log(`  Total fixes applied: ${this.fixes.reduce((sum, f) => sum + f.count, 0)}`);

    // Save the fixed content
    fs.writeFileSync(this.filePath, this.content);
    console.log(`\n${colors.green}${colors.bold}✓ Slides fixed and saved to: ${this.filePath}${colors.reset}\n`);

    // Save backup
    const backupPath = this.filePath + '.backup-before-auto-fix';
    fs.writeFileSync(backupPath, this.originalContent);
    console.log(`${colors.yellow}Backup saved to: ${backupPath}${colors.reset}\n`);
  }
}

// Run the fixer
const slidesPath = path.join(__dirname, 'slides.md');
const fixer = new SlideFixer(slidesPath);
fixer.applyAllFixes();
