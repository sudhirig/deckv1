# Logo Setup Instructions

## CAPITAL GLOBAL Logo Integration

The deck currently uses **text-based branding** ("CAPITAL GLOBAL" text) which works immediately. You can optionally add your logo image file.

### Current Implementation

- ✅ **Text-based logo**: "CAPITAL GLOBAL" appears on title slide (top-left)
- ✅ **No image required**: Works without any logo file
- ✅ **Brand colors**: Uses CAPITAL GLOBAL brand green

### Optional: Add Logo Image File

If you want to use your actual logo image instead of text:

#### Step 1: Add Logo File

1. Save your CAPITAL GLOBAL logo file to the `public/` folder
2. Name it: `capital-global-logo.png` (or `.svg` if you have SVG version)
3. Recommended formats:
   - **PNG** with transparent background (preferred)
   - **SVG** for best quality at any size
   - **JPG** if PNG/SVG not available

#### Step 2: Update to Use Logo Image

Once you add the logo file, update `slides.md` line 20:

**Replace this:**
```html
<div class="capital-global-text text-2xl font-bold tracking-wider">
  CAPITAL GLOBAL
</div>
```

**With this:**
```html
<img src="/capital-global-logo.png" alt="CAPITAL GLOBAL" class="h-14 opacity-95 hover:opacity-100 transition-opacity" />
```

#### Step 3: Adjust Logo Size (if needed)

If the logo needs size adjustment, edit `slides.md`:

**Title Slide Logo:**
```markdown
<img src="/capital-global-logo.png" alt="CAPITAL GLOBAL" class="h-12 opacity-90" />
```
- Change `h-12` to adjust height (h-8 = smaller, h-16 = larger)

**Footer Logo:**
The `LogoFooter.vue` component uses `h-8` by default.

### Step 4: Add Logo to More Slides (Optional)

To add logo footer to other slides, add this at the end of any slide:

```markdown
<LogoFooter />
```

Or use the image directly:
```markdown
<div class="absolute bottom-4 left-4">
  <img src="/capital-global-logo.png" alt="CAPITAL GLOBAL" class="h-8 opacity-70" />
</div>
```

### Current Logo Usage

- **Slide 1**: "CAPITAL GLOBAL" text in top-left corner (brand green color)
- **All other slides**: No logo (can be added if needed using `<LogoFooter />`)

### Text Logo Styling

The text logo uses:
- **Font**: Montserrat/Poppins (brand fonts)
- **Color**: Brand green gradient (#00d9a5)
- **Size**: 2xl (24px)
- **Style**: Bold, uppercase, letter-spaced

### Logo Specifications

Based on your logo description:
- **Text**: "CAPITAL GLOBAL" in dark gray serif font
- **Icon**: Light green/teal radiating sun/burst replacing "O" in GLOBAL
- **Style**: Modern, professional, clean design

### File Location

```
deckv1/
└── public/
    └── capital-global-logo.png  ← Place your logo here
```

### Testing

After adding the logo file:
1. Restart the dev server: `npm run dev`
2. Check Slide 1 to see the logo
3. Adjust size/position if needed

---

**Note**: The logo will automatically appear once you add the file to the `public/` folder with the name `capital-global-logo.png`.
