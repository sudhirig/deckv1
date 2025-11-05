#!/usr/bin/env python3
"""
Revert all Vue layout components back to raw HTML grids
This is necessary because Slidev's markdown parser doesn't handle
complex nested HTML inside Vue components correctly
"""

import re

with open('slides.md', 'r') as f:
    content = f.read()

# Replace TwoColumnLayout with raw HTML grid
content = re.sub(
    r'<TwoColumnLayout(?:\s+:gap="(\d+)")?>\n',
    lambda m: f'<div class="grid grid-cols-2 gap-{m.group(1) or "4"} max-h-[68vh] overflow-hidden">\n',
    content
)

# Replace ThreeColumnLayout with raw HTML grid
content = re.sub(
    r'<ThreeColumnLayout(?:\s+:gap="(\d+)")?>\n',
    lambda m: f'<div class="grid grid-cols-3 gap-{m.group(1) or "4"} max-h-[68vh] overflow-hidden">\n',
    content
)

# Replace closing tags
content = content.replace('</TwoColumnLayout>', '</div>')
content = content.replace('</ThreeColumnLayout>', '</div>')

with open('slides.md', 'w') as f:
    f.write(content)

print("✓ Reverted all Vue components to raw HTML grids")
print("✓ This ensures Slidev's markdown parser handles them correctly")
