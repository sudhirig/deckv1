# CAPITAL GLOBAL Brand Colors Reference

## 🎨 Color Palette

### Primary Brand Colors

```css
/* Dark Green Backgrounds */
--brand-dark-green: #0a3324      /* Deep dark green - primary background */
--brand-dark-green-2: #0d3d2a    /* Slightly lighter variant */
--brand-dark-green-3: #0f4a35    /* Medium dark green */

/* Bright Green Accents */
--brand-green-accent: #00d9a5    /* Primary accent - bright light green/teal */
--brand-green-accent-dark: #00b88a  /* Darker accent */
--brand-green-accent-light: #33ffc4 /* Lightest accent */
```

### Text Colors

```css
--brand-text-white: #ffffff      /* White text on dark backgrounds */
--brand-text-black: #1a1a1a      /* Black text (where specified) */
--brand-text-gray: #a3a3a3       /* Secondary gray text */
--brand-text-dark-gray: #4a4a4a  /* Dark gray text */
```

## 🎯 Usage in Tailwind/UnoCSS

### Background Colors
```html
<div class="bg-brand-dark-green">Dark green background</div>
<div class="bg-brand-green">Green accent background</div>
```

### Text Colors
```html
<div class="text-brand-green">Green text</div>
<div class="text-white">White text on dark</div>
```

### Brand Classes
```html
<div class="text-gradient-brand">Brand gradient text</div>
<div class="glow-brand">Brand glow effect</div>
<div class="bg-gradient-brand">Brand gradient background</div>
```

## 📝 Typography

### Fonts
- **Primary**: Montserrat (GT Ultra Median alternative)
- **Secondary**: Poppins
- **Monospace**: JetBrains Mono

### Brand Text Classes
```html
<div class="capital-global-text">CAPITAL GLOBAL</div>
<div class="capital-global-text-black">CAPITAL GLOBAL (black)</div>
```

## 🎨 Component Colors

### Cards
- Background: `rgba(0, 217, 165, 0.05)`
- Border: `rgba(0, 217, 165, 0.2)`
- Hover: `rgba(0, 217, 165, 0.1)`

### Glows
- Standard: `rgba(0, 217, 165, 0.5)`
- Strong: `rgba(0, 217, 165, 0.7)`

### Shadows
- Standard: `rgba(0, 217, 165, 0.1)`
- Strong: `rgba(0, 217, 165, 0.15)`

## 🔄 Legacy Color Mapping

All old color classes still work, but now map to brand colors:
- `teal-*` → Maps to brand green
- `green-*` → Maps to brand green
- `blue-*` → Maps to brand green accent
- `purple-*` → Maps to brand green variant

---

**Quick Reference**: Use `#00d9a5` for green accents, `#0a3324` for dark backgrounds!
