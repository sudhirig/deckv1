#!/usr/bin/env node
/**
 * Comprehensive Slide Validator - Correct Logic
 * Tests for actual markdown parsing issues, not style preferences
 */

const fs = require('fs');

const content = fs.readFileSync('slides.md', 'utf8');
const tests = { passed: 0, failed: 0, warnings: 0 };
const issues = [];

console.log('\n🧪 COMPREHENSIVE SLIDE VALIDATION\n' + '='.repeat(60) + '\n');

// TEST 1: No HTML entity encodings (means HTML rendered as text)
console.log('TEST 1: HTML Entity Encoding...');
const entities = content.match(/&lt;div|&gt;|&quot;class=/g);
if (entities) {
  tests.failed++;
  issues.push({
    severity: 'CRITICAL',
    test: 'HTML Entities',
    message: `Found ${entities.length} HTML entities - HTML is being rendered as TEXT!`,
    fix: 'This means Slidev is not parsing the HTML correctly'
  });
  console.log(`   ❌ FAILED: Found ${entities.length} HTML entities`);
} else {
  tests.passed++;
  console.log(`   ✅ PASSED: No HTML entities`);
}

// TEST 2: HTML tag balance
console.log('TEST 2: HTML Tag Balance...');
const openDivs = (content.match(/<div[^>]*>/g) || []).length;
const closeDivs = (content.match(/<\/div>/g) || []).length;
if (openDivs === closeDivs) {
  tests.passed++;
  console.log(`   ✅ PASSED: ${openDivs} divs balanced`);
} else {
  tests.failed++;
  issues.push({
    severity: 'CRITICAL',
    test: 'Tag Balance',
    message: `Unbalanced: ${openDivs} open, ${closeDivs} close (${openDivs - closeDivs} difference)`,
    fix: 'Find and close all unclosed div tags'
  });
  console.log(`   ❌ FAILED: ${openDivs - closeDivs} unbalanced divs`);
}

// TEST 3: No Vue components with complex HTML (causes parsing issues)
console.log('TEST 3: Vue Component Usage...');
const vueComps = content.match(/<(TwoColumnLayout|ThreeColumnLayout)/g);
if (vueComps) {
  tests.warnings++;
  issues.push({
    severity: 'WARNING',
    test: 'Vue Components',
    message: `Found ${vueComps.length} Vue components - may cause parsing issues with nested HTML`,
    fix: 'Consider using raw HTML grids if content is complex'
  });
  console.log(`   ⚠️  WARNING: ${vueComps.length} Vue components found`);
} else {
  tests.passed++;
  console.log(`   ✅ PASSED: Using raw HTML grids`);
}

// TEST 4: Blank lines after opening tags (can trigger paragraph mode)
console.log('TEST 4: Blank Lines After Tags...');
const blankLines = content.match(/<div[^>]*>\n\n/g);
if (blankLines) {
  tests.failed++;
  issues.push({
    severity: 'CRITICAL',
    test: 'Blank Lines',
    message: `Found ${blankLines.length} blank lines after opening div tags`,
    fix: 'Remove all blank lines immediately after opening tags'
  });
  console.log(`   ❌ FAILED: ${blankLines.length} blank lines found`);
} else {
  tests.passed++;
  console.log(`   ✅ PASSED: No blank lines after tags`);
}

// TEST 5: Proper slide structure
console.log('TEST 5: Slide Structure...');
const slides = content.split(/\n---\n/);
const slidesWithHeadings = slides.filter(s => /^#\s+/.test(s.trim())).length;
if (slidesWithHeadings >= slides.length - 2) {
  tests.passed++;
  console.log(`   ✅ PASSED: ${slidesWithHeadings}/${slides.length} slides have headings`);
} else {
  tests.warnings++;
  console.log(`   ⚠️  WARNING: Only ${slidesWithHeadings}/${slides.length} slides have headings`);
}

// TEST 6: Specific problematic slide check
console.log('TEST 6: "AI Agent Makes It Simple" Slide...');
const agentSlide = content.match(/# Our AI Agent Makes It Simple\n\n<div class="grid[^>]*>([\s\S]{1,1500})<\/div>\n\n<!--/);
if (agentSlide) {
  const hasBlankLine = agentSlide[0].includes('>\n\n<div');
  if (hasBlankLine) {
    tests.failed++;
    issues.push({
      severity: 'CRITICAL',
      test: 'AI Agent Slide',
      message: 'Slide has blank lines inside grid structure',
      fix: 'Remove all blank lines within the grid div'
    });
    console.log(`   ❌ FAILED: Has blank lines`);
  } else {
    tests.passed++;
    console.log(`   ✅ PASSED: Properly formatted`);
  }
} else {
  tests.warnings++;
  console.log(`   ⚠️  WARNING: Slide format unexpected`);
}

// TEST 7: Build validation
console.log('TEST 7: Build Validation...');
const { execSync } = require('child_process');
try {
  execSync('npm run build 2>&1', { encoding: 'utf8', stdio: 'pipe' });
  tests.passed++;
  console.log(`   ✅ PASSED: Build successful`);
} catch (e) {
  tests.failed++;
  issues.push({
    severity: 'CRITICAL',
    test: 'Build',
    message: 'Build failed',
    fix: 'Check build errors and fix syntax issues'
  });
  console.log(`   ❌ FAILED: Build error`);
}

// RESULTS
console.log('\n' + '='.repeat(60));
console.log('\n📊 TEST RESULTS\n');
console.log(`   ✅ Passed:   ${tests.passed}`);
console.log(`   ⚠️  Warnings: ${tests.warnings}`);
console.log(`   ❌ Failed:   ${tests.failed}`);
console.log('\n' + '='.repeat(60));

if (issues.length > 0) {
  console.log('\n🔍 ISSUES FOUND:\n');
  issues.forEach((issue, i) => {
    console.log(`${i + 1}. [${issue.severity}] ${issue.test}`);
    console.log(`   Problem: ${issue.message}`);
    console.log(`   Fix: ${issue.fix}\n`);
  });
}

// FINAL VERDICT
console.log('='.repeat(60) + '\n');
if (tests.failed === 0) {
  console.log('🎉 ALL CRITICAL TESTS PASSED!\n');
  console.log('Slides are properly formatted and ready to present.\n');
  process.exit(0);
} else {
  console.log('❌ CRITICAL FAILURES DETECTED!\n');
  console.log(`Fix ${tests.failed} critical issue(s) before presenting.\n`);
  process.exit(1);
}
