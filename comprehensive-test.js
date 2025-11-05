#!/usr/bin/env node

const fs = require('fs');

console.log('🔍 COMPREHENSIVE SLIDE DEBUGGING TEST\n');
console.log('='.repeat(60));

const content = fs.readFileSync('slides.md', 'utf-8');
const lines = content.split('\n');

// Test 1: Find HTML blocks with blank lines
console.log('\n1. HTML BLOCKS WITH BLANK LINES');
console.log('-'.repeat(60));
let inHtmlBlock = false;
let blockStart = 0;
let issues = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  if (line.match(/^<div/)) {
    inHtmlBlock = true;
    blockStart = i + 1;
  }
  
  if (inHtmlBlock && line.trim() === '' && i < lines.length - 1) {
    const nextLine = lines[i + 1];
    if (nextLine.match(/^\s*</) || nextLine.match(/^\s+</)) {
      issues.push({
        line: i + 1,
        context: `Line ${i + 1}: Blank line inside HTML block (started at ${blockStart})`
      });
    }
  }
  
  if (inHtmlBlock && line.match(/^<\/div>$/) && !lines[i + 1]?.match(/^\s*</)) {
    inHtmlBlock = false;
  }
}

if (issues.length > 0) {
  console.log(`❌ Found ${issues.length} blank lines inside HTML blocks:`);
  issues.slice(0, 10).forEach(issue => console.log(`   ${issue.context}`));
  if (issues.length > 10) {
    console.log(`   ... and ${issues.length - 10} more`);
  }
} else {
  console.log('✅ No problematic blank lines found');
}

// Test 2: Check for mixed markdown and HTML
console.log('\n2. MIXED MARKDOWN/HTML DETECTION');
console.log('-'.repeat(60));
let mixedIssues = [];
inHtmlBlock = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  if (line.match(/^<div/)) inHtmlBlock = true;
  if (line.match(/^<\/div>$/) && !lines[i + 1]?.match(/^\s*</)) inHtmlBlock = false;
  
  // Check for markdown list items inside HTML blocks
  if (inHtmlBlock && line.match(/^\s+-\s+[^<]/)) {
    mixedIssues.push({
      line: i + 1,
      text: line.trim().substring(0, 60)
    });
  }
}

if (mixedIssues.length > 0) {
  console.log(`❌ Found ${mixedIssues.length} markdown items inside HTML:`);
  mixedIssues.forEach(issue => {
    console.log(`   Line ${issue.line}: ${issue.text}`);
  });
} else {
  console.log('✅ No mixed markdown/HTML');
}

// Test 3: Check Slide 14 specifically
console.log('\n3. SLIDE 14 (TAX ALPHA) ANALYSIS');
console.log('-'.repeat(60));
const slide14Start = lines.findIndex(l => l.includes('Our "Tax Alpha" Agent'));
const slide14Content = lines.slice(slide14Start, slide14Start + 80).join('\n');

const slide14Issues = [];
if (slide14Content.match(/<div[^>]*>\n\n/)) {
  slide14Issues.push('Blank line after opening div');
}
if (slide14Content.match(/^\s+-\s+[^<]/m)) {
  slide14Issues.push('Plain text list items (not wrapped in div)');
}

if (slide14Issues.length > 0) {
  console.log('❌ Slide 14 issues:');
  slide14Issues.forEach(issue => console.log(`   - ${issue}`));
} else {
  console.log('✅ Slide 14 structure looks correct');
}

// Test 4: Tag balance check
console.log('\n4. HTML TAG BALANCE');
console.log('-'.repeat(60));
const openDivs = (content.match(/<div/g) || []).length;
const closeDivs = (content.match(/<\/div>/g) || []).length;
console.log(`   Open <div> tags:  ${openDivs}`);
console.log(`   Close </div> tags: ${closeDivs}`);
if (openDivs === closeDivs) {
  console.log('✅ All tags balanced');
} else {
  console.log(`❌ Unbalanced: ${openDivs - closeDivs} difference`);
}

// Test 5: Check for HTML entities
console.log('\n5. HTML ENTITY ENCODING CHECK');
console.log('-'.repeat(60));
const entities = content.match(/&lt;|&gt;|&quot;/g);
if (entities) {
  console.log(`❌ Found ${entities.length} HTML entities (will render as text)`);
} else {
  console.log('✅ No HTML entity encoding');
}

console.log('\n' + '='.repeat(60));
console.log('SUMMARY');
console.log('='.repeat(60));

const totalIssues = issues.length + mixedIssues.length + slide14Issues.length;
if (totalIssues === 0 && openDivs === closeDivs && !entities) {
  console.log('✅ ALL TESTS PASSED - Structure is correct!');
  console.log('\n🔍 If HTML still shows as text, the issue is:');
  console.log('   1. Browser cache (open incognito window)');
  console.log('   2. Dev server cache (restart server)');
  console.log('   3. Vite cache (rm -rf node_modules/.vite .slidev dist)');
} else {
  console.log(`❌ Found ${totalIssues} structural issues that need fixing`);
}

console.log('');
