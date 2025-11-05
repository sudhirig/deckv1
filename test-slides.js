#!/usr/bin/env node

/**
 * COMPREHENSIVE SLIDE TESTING SUITE
 *
 * This suite performs deep analysis of slides.md to identify:
 * 1. HTML parsing issues (raw HTML that should be components)
 * 2. Viewport overflow issues (content exceeding max-height)
 * 3. Malformed markdown structures
 * 4. Inconsistent styling patterns
 * 5. Missing component usage where appropriate
 */

const fs = require('fs');
const path = require('path');

// ANSI color codes for output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m'
};

class SlideValidator {
  constructor(filePath) {
    this.filePath = filePath;
    this.content = fs.readFileSync(filePath, 'utf-8');
    this.lines = this.content.split('\n');
    this.issues = [];
    this.stats = {
      totalSlides: 0,
      rawHTMLGrids: 0,
      overflowRisks: 0,
      componentUsage: 0,
      warnings: 0,
      errors: 0,
      critical: 0
    };
  }

  // Test 1: Identify raw HTML grid layouts that should be components
  testRawHTMLGrids() {
    console.log(`\n${colors.cyan}${colors.bold}TEST 1: Scanning for Raw HTML Grids${colors.reset}`);

    const gridPattern = /<div class="grid grid-cols-[23]/;
    const componentPattern = /<(TwoColumnLayout|ThreeColumnLayout)/;

    this.lines.forEach((line, index) => {
      if (gridPattern.test(line)) {
        this.stats.rawHTMLGrids++;

        // Extract the grid configuration
        const gridMatch = line.match(/grid-cols-(\d)/);
        const cols = gridMatch ? gridMatch[1] : 'unknown';

        // Check if max-height is specified
        const hasMaxHeight = /max-h-\[/.test(line);
        const maxHeight = line.match(/max-h-\[(\d+)vh\]/);

        // Look ahead to see how complex the content is
        const nextLines = this.lines.slice(index + 1, index + 50).join('\n');
        const divCount = (nextLines.match(/<div/g) || []).length;
        const contentLength = nextLines.substring(0, 500).length;

        const severity = divCount > 10 || contentLength > 400 ? 'CRITICAL' : 'ERROR';

        this.issues.push({
          type: 'RAW_HTML_GRID',
          severity,
          line: index + 1,
          message: `Raw HTML grid-cols-${cols} detected`,
          details: {
            hasMaxHeight,
            maxHeightValue: maxHeight ? maxHeight[1] : null,
            estimatedComplexity: divCount,
            contentLength
          },
          fix: cols === '2' ? 'Replace with <TwoColumnLayout>' : 'Replace with <ThreeColumnLayout>',
          snippet: line.trim()
        });

        if (severity === 'CRITICAL') this.stats.critical++;
        else this.stats.errors++;
      } else if (componentPattern.test(line)) {
        this.stats.componentUsage++;
      }
    });

    console.log(`  ${colors.red}Found ${this.stats.rawHTMLGrids} raw HTML grids${colors.reset}`);
    console.log(`  ${colors.green}Found ${this.stats.componentUsage} component usages${colors.reset}`);
  }

  // Test 2: Check for viewport overflow risks
  testViewportOverflow() {
    console.log(`\n${colors.cyan}${colors.bold}TEST 2: Analyzing Viewport Overflow Risks${colors.reset}`);

    let currentSlide = 0;
    let slideContent = [];
    let slideStartLine = 0;

    this.lines.forEach((line, index) => {
      if (line.trim() === '---') {
        if (slideContent.length > 0) {
          this.analyzeSlideOverflow(currentSlide, slideStartLine, slideContent);
        }
        currentSlide++;
        slideContent = [];
        slideStartLine = index + 1;
      } else {
        slideContent.push(line);
      }
    });

    // Analyze last slide
    if (slideContent.length > 0) {
      this.analyzeSlideOverflow(currentSlide, slideStartLine, slideContent);
    }

    this.stats.totalSlides = currentSlide;
    console.log(`  Analyzed ${this.stats.totalSlides} slides`);
    console.log(`  ${colors.yellow}Found ${this.stats.overflowRisks} potential overflow issues${colors.reset}`);
  }

  analyzeSlideOverflow(slideNum, startLine, content) {
    const contentStr = content.join('\n');

    // Risk factors
    const risks = [];
    let riskScore = 0;

    // 1. Check for max-height values > 70vh
    const maxHeightMatches = contentStr.match(/max-h-\[(\d+)vh\]/g);
    if (maxHeightMatches) {
      maxHeightMatches.forEach(match => {
        const vh = parseInt(match.match(/\d+/)[0]);
        if (vh > 70) {
          risks.push(`max-height ${vh}vh exceeds safe limit (70vh)`);
          riskScore += 2;
        }
      });
    }

    // 2. Count nested divs (complexity indicator)
    const divCount = (contentStr.match(/<div/g) || []).length;
    if (divCount > 15) {
      risks.push(`High div count (${divCount}), indicates complex layout`);
      riskScore += 2;
    }

    // 3. Check for large text blocks
    const textBlocks = contentStr.match(/<div class="[^"]*">([^<]{100,})<\/div>/g);
    if (textBlocks && textBlocks.length > 3) {
      risks.push(`${textBlocks.length} large text blocks detected`);
      riskScore += 1;
    }

    // 4. Check for font sizes that are too large
    const largeFonts = contentStr.match(/text-(4xl|5xl|6xl|7xl)/g);
    if (largeFonts && largeFonts.length > 2) {
      risks.push(`Multiple large font sizes (${largeFonts.length})`);
      riskScore += 1;
    }

    // 5. Check for excessive spacing
    const largeSpacing = contentStr.match(/(space-y-[6789]|gap-[6789]|p-[6789]|mb-[6789])/g);
    if (largeSpacing && largeSpacing.length > 3) {
      risks.push(`Excessive spacing utilities (${largeSpacing.length})`);
      riskScore += 1;
    }

    // 6. Check for images without height constraints
    const images = contentStr.match(/<img[^>]+>/g);
    if (images) {
      images.forEach(img => {
        if (!img.includes('max-h-') && !img.includes('h-')) {
          risks.push('Image without height constraint');
          riskScore += 1;
        }
      });
    }

    // 7. Check for overflow-y-auto without max-height
    if (contentStr.includes('overflow-y-auto') && !contentStr.includes('max-h-')) {
      risks.push('overflow-y-auto without max-height constraint');
      riskScore += 2;
    }

    if (riskScore > 0) {
      this.stats.overflowRisks++;

      const severity = riskScore >= 4 ? 'CRITICAL' : riskScore >= 2 ? 'ERROR' : 'WARNING';

      // Extract slide title
      const titleMatch = contentStr.match(/^#\s+(.+)/m);
      const title = titleMatch ? titleMatch[1] : `Slide ${slideNum}`;

      this.issues.push({
        type: 'OVERFLOW_RISK',
        severity,
        line: startLine,
        slide: slideNum,
        title,
        message: `Potential viewport overflow (risk score: ${riskScore})`,
        details: {
          riskScore,
          risks,
          divCount,
          contentLength: contentStr.length
        },
        fix: this.generateOverflowFix(risks)
      });

      if (severity === 'CRITICAL') this.stats.critical++;
      else if (severity === 'ERROR') this.stats.errors++;
      else this.stats.warnings++;
    }
  }

  generateOverflowFix(risks) {
    const fixes = [];

    risks.forEach(risk => {
      if (risk.includes('max-height')) {
        fixes.push('Reduce max-height to 68vh or less');
      }
      if (risk.includes('div count')) {
        fixes.push('Simplify layout or extract to component');
      }
      if (risk.includes('text blocks')) {
        fixes.push('Reduce text size or use text-xs/text-sm');
      }
      if (risk.includes('font sizes')) {
        fixes.push('Reduce font sizes by one step');
      }
      if (risk.includes('spacing')) {
        fixes.push('Reduce spacing utilities (e.g., space-y-6 → space-y-3)');
      }
      if (risk.includes('Image without height')) {
        fixes.push('Add max-h-[Xvh] to all images');
      }
      if (risk.includes('overflow-y-auto')) {
        fixes.push('Add max-h-[68vh] to scrollable containers');
      }
    });

    return fixes.length > 0 ? fixes.join('; ') : 'Review and simplify content';
  }

  // Test 3: Check for text-[Xpx] custom sizes that might not work
  testCustomTextSizes() {
    console.log(`\n${colors.cyan}${colors.bold}TEST 3: Checking Custom Text Sizes${colors.reset}`);

    let customSizeCount = 0;
    const customSizePattern = /text-\[(\d+)px\]/g;

    this.lines.forEach((line, index) => {
      let match;
      while ((match = customSizePattern.exec(line)) !== null) {
        customSizeCount++;
        this.issues.push({
          type: 'CUSTOM_TEXT_SIZE',
          severity: 'WARNING',
          line: index + 1,
          message: `Custom text size text-[${match[1]}px] may not render correctly`,
          fix: `Replace with standard Tailwind size (text-xs, text-sm, text-base)`,
          snippet: line.trim()
        });
        this.stats.warnings++;
      }
    });

    console.log(`  ${colors.yellow}Found ${customSizeCount} custom text sizes${colors.reset}`);
  }

  // Test 4: Check for components that need gap props
  testComponentProps() {
    console.log(`\n${colors.cyan}${colors.bold}TEST 4: Validating Component Props${colors.reset}`);

    let missingProps = 0;

    this.lines.forEach((line, index) => {
      // TwoColumnLayout without :gap when using gap-X in old code
      if (line.includes('<TwoColumnLayout>')) {
        const nextLines = this.lines.slice(index - 5, index).join('\n');
        if (/gap-[3456789]/.test(nextLines)) {
          missingProps++;
          this.issues.push({
            type: 'MISSING_COMPONENT_PROP',
            severity: 'WARNING',
            line: index + 1,
            message: 'TwoColumnLayout might need :gap prop for custom spacing',
            fix: 'Add :gap="X" if custom spacing is needed',
            snippet: line.trim()
          });
          this.stats.warnings++;
        }
      }
    });

    console.log(`  ${colors.yellow}Found ${missingProps} components with potential missing props${colors.reset}`);
  }

  // Test 5: Check for nested grids that will definitely break
  testNestedGrids() {
    console.log(`\n${colors.cyan}${colors.bold}TEST 5: Detecting Nested Grid Issues${colors.reset}`);

    let nestedGrids = 0;
    let gridDepth = 0;
    let gridStack = [];

    this.lines.forEach((line, index) => {
      if (/class="[^"]*grid/.test(line)) {
        gridStack.push(index + 1);
        gridDepth++;

        if (gridDepth > 1) {
          nestedGrids++;
          this.issues.push({
            type: 'NESTED_GRID',
            severity: 'ERROR',
            line: index + 1,
            message: `Nested grid detected (depth: ${gridDepth})`,
            details: {
              parentGridLine: gridStack[gridStack.length - 2]
            },
            fix: 'Flatten grid structure or use flexbox for inner layout',
            snippet: line.trim()
          });
          this.stats.errors++;
        }
      }

      if (line.includes('</div>') && gridStack.length > 0) {
        gridStack.pop();
        gridDepth = Math.max(0, gridDepth - 1);
      }
    });

    console.log(`  ${colors.red}Found ${nestedGrids} nested grid issues${colors.reset}`);
  }

  // Generate comprehensive report
  generateReport() {
    console.log(`\n${colors.bold}${'='.repeat(80)}${colors.reset}`);
    console.log(`${colors.bold}${colors.cyan}COMPREHENSIVE SLIDE VALIDATION REPORT${colors.reset}`);
    console.log(`${colors.bold}${'='.repeat(80)}${colors.reset}\n`);

    console.log(`${colors.bold}Summary:${colors.reset}`);
    console.log(`  Total Slides: ${this.stats.totalSlides}`);
    console.log(`  ${colors.red}Critical Issues: ${this.stats.critical}${colors.reset}`);
    console.log(`  ${colors.red}Errors: ${this.stats.errors}${colors.reset}`);
    console.log(`  ${colors.yellow}Warnings: ${this.stats.warnings}${colors.reset}`);
    console.log(`  ${colors.green}Component Usage: ${this.stats.componentUsage}${colors.reset}`);
    console.log(`  ${colors.red}Raw HTML Grids: ${this.stats.rawHTMLGrids}${colors.reset}`);

    // Sort issues by severity
    const sortOrder = { CRITICAL: 0, ERROR: 1, WARNING: 2 };
    this.issues.sort((a, b) => sortOrder[a.severity] - sortOrder[b.severity]);

    // Group by severity
    const critical = this.issues.filter(i => i.severity === 'CRITICAL');
    const errors = this.issues.filter(i => i.severity === 'ERROR');
    const warnings = this.issues.filter(i => i.severity === 'WARNING');

    if (critical.length > 0) {
      console.log(`\n${colors.red}${colors.bold}CRITICAL ISSUES (${critical.length}):${colors.reset}`);
      critical.forEach((issue, i) => {
        this.printIssue(issue, i + 1);
      });
    }

    if (errors.length > 0) {
      console.log(`\n${colors.red}${colors.bold}ERRORS (${errors.length}):${colors.reset}`);
      errors.forEach((issue, i) => {
        this.printIssue(issue, i + 1);
      });
    }

    if (warnings.length > 0) {
      console.log(`\n${colors.yellow}${colors.bold}WARNINGS (${warnings.length}):${colors.reset}`);
      warnings.slice(0, 10).forEach((issue, i) => {
        this.printIssue(issue, i + 1);
      });
      if (warnings.length > 10) {
        console.log(`  ... and ${warnings.length - 10} more warnings`);
      }
    }

    // Generate JSON report
    const report = {
      timestamp: new Date().toISOString(),
      stats: this.stats,
      issues: this.issues
    };

    fs.writeFileSync(
      path.join(__dirname, 'slide-validation-report.json'),
      JSON.stringify(report, null, 2)
    );

    console.log(`\n${colors.green}Detailed JSON report saved to: slide-validation-report.json${colors.reset}`);

    return this.stats.critical + this.stats.errors;
  }

  printIssue(issue, num) {
    const color = issue.severity === 'CRITICAL' ? colors.red :
                  issue.severity === 'ERROR' ? colors.red : colors.yellow;

    console.log(`\n  ${color}${num}. [${issue.severity}] ${issue.type}${colors.reset}`);
    console.log(`     Line ${issue.line}: ${issue.message}`);
    if (issue.title) console.log(`     Slide: "${issue.title}"`);
    if (issue.fix) console.log(`     ${colors.green}Fix: ${issue.fix}${colors.reset}`);
    if (issue.snippet && issue.snippet.length < 100) {
      console.log(`     Snippet: ${issue.snippet}`);
    }
    if (issue.details) {
      if (issue.details.risks) {
        console.log(`     Risks: ${issue.details.risks.slice(0, 3).join(', ')}`);
      }
      if (issue.details.estimatedComplexity !== undefined) {
        console.log(`     Complexity: ${issue.details.estimatedComplexity} nested divs`);
      }
    }
  }

  // Run all tests
  runAllTests() {
    console.log(`${colors.bold}${colors.blue}Starting Comprehensive Slide Validation...${colors.reset}`);
    console.log(`File: ${this.filePath}\n`);

    this.testRawHTMLGrids();
    this.testViewportOverflow();
    this.testCustomTextSizes();
    this.testComponentProps();
    this.testNestedGrids();

    const errorCount = this.generateReport();

    console.log(`\n${colors.bold}${'='.repeat(80)}${colors.reset}\n`);

    if (errorCount > 0) {
      console.log(`${colors.red}${colors.bold}VALIDATION FAILED: ${errorCount} critical/error issues found${colors.reset}\n`);
      process.exit(1);
    } else if (this.stats.warnings > 0) {
      console.log(`${colors.yellow}${colors.bold}VALIDATION PASSED WITH WARNINGS: ${this.stats.warnings} warnings${colors.reset}\n`);
      process.exit(0);
    } else {
      console.log(`${colors.green}${colors.bold}✓ VALIDATION PASSED: All tests successful!${colors.reset}\n`);
      process.exit(0);
    }
  }
}

// Run the validator
const slidesPath = path.join(__dirname, 'slides.md');
const validator = new SlideValidator(slidesPath);
validator.runAllTests();
