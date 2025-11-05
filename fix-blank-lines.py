#!/usr/bin/env python3
"""
Fix blank lines after layout components that cause markdown parsing issues
"""

import re

with open('slides.md', 'r') as f:
    content = f.read()

# Replace pattern: <TwoColumnLayout...>\n\n with <TwoColumnLayout...>\n
content = re.sub(r'(<TwoColumnLayout[^>]*>)\n\n', r'\1\n', content)
content = re.sub(r'(<ThreeColumnLayout[^>]*>)\n\n', r'\1\n', content)

# Also remove blank lines before closing tags if they exist
content = re.sub(r'\n\n(</TwoColumnLayout>)', r'\n\1', content)
content = re.sub(r'\n\n(</ThreeColumnLayout>)', r'\n\1', content)

with open('slides.md', 'w') as f:
    f.write(content)

print("✓ Fixed all blank lines after layout components")
