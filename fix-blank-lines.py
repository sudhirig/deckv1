#!/usr/bin/env python3

import re

with open('slides.md', 'r') as f:
    content = f.read()

lines = content.split('\n')
result = []
in_html_block = False
html_depth = 0

for i, line in enumerate(lines):
    # Track HTML block depth
    if line.strip().startswith('<div'):
        html_depth += line.count('<div')
        in_html_block = html_depth > 0
        result.append(line)
        continue
    
    if '</div>' in line:
        html_depth -= line.count('</div>')
        in_html_block = html_depth > 0
        result.append(line)
        continue
    
    # Skip blank lines inside HTML blocks
    if in_html_block and line.strip() == '':
        # Check if next line is also HTML
        if i + 1 < len(lines) and (lines[i + 1].strip().startswith('<') or lines[i + 1].strip() == ''):
            continue  # Skip this blank line
    
    result.append(line)

# Write the fixed content
with open('slides.md', 'w') as f:
    f.write('\n'.join(result))

print('✅ Removed blank lines from HTML blocks')
print(f'   Original lines: {len(lines)}')
print(f'   Fixed lines: {len(result)}')
print(f'   Removed: {len(lines) - len(result)} blank lines')
