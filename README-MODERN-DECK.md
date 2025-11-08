# Ultra-Modern Slidev Deck - Setup & Usage Guide

## 🚀 Quick Start

This deck is configured with **world-class visuals**, **modern design**, and **seamless PDF export**.

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:3030` with hot-reload.

### Export to PDF

```bash
# High-quality PDF export
npm run export:pdf

# Or use the generic export
npm run export
```

The PDF will be generated as `slides.pdf` with:
- ✅ High resolution (2x scale)
- ✅ Dark theme preserved
- ✅ All animations rendered
- ✅ Modern graphics and gradients
- ✅ Professional quality

## 🎨 Modern Features

### Design System

- **Glassmorphism**: Modern frosted glass effects
- **Gradient Text**: Beautiful gradient text effects
- **Glow Effects**: Subtle neon glows for emphasis
- **Smooth Animations**: Modern cubic-bezier transitions
- **Modern Typography**: Inter font family

### Visual Enhancements

- **Chart.js**: Professional charts and graphs
- **Anime.js**: Smooth animations
- **Iconify**: 1000+ modern icons
- **UnoCSS**: Utility-first styling
- **Custom Components**: Reusable Vue components

### Color Palette

- **Primary**: Teal/Cyan (#14b8a6)
- **Secondary**: Blue (#3b82f6)
- **Accent**: Purple (#a855f7)
- **Gradients**: Modern multi-color gradients

## 📁 Project Structure

```
deckv1/
├── slides.md              # Main slide content (edit this!)
├── slidev.config.ts       # Slidev configuration
├── uno.config.ts          # UnoCSS configuration
├── styles.css             # Global modern styles
├── components/            # Vue components
│   ├── business/         # Business-specific components
│   ├── charts/           # Chart components
│   └── animations/       # Animation components
└── package.json          # Dependencies
```

## ✏️ Editing Your Deck

### Edit Content

Simply edit `slides.md` - it's markdown with Vue component support!

```markdown
# Your Slide Title

<YourComponent />
```

### Use Modern Styling

Apply modern classes directly:

```markdown
<div class="card-modern glass glow-teal">
  Modern card with glass effect
</div>

<h1 class="gradient-text-teal">
  Beautiful gradient title
</h1>
```

### Add Components

Your existing components in `components/` work automatically:
- `<StatCard />`
- `<AgentCard />`
- `<StanfordChart />`
- `<ROICalculator />`
- And more...

## 🎯 Key Improvements

1. **Ultra-Modern Design**: Glassmorphism, gradients, glows
2. **Professional Charts**: Chart.js integration
3. **Smooth Animations**: Anime.js for fluid motion
4. **PDF Export**: High-quality, print-ready PDFs
5. **Easy Editing**: Markdown-based, hot-reload
6. **Component Library**: Reusable Vue components
7. **Modern Typography**: Inter font family
8. **Responsive**: Works on all screen sizes

## 📦 Dependencies

- **@slidev/cli**: Core Slidev framework
- **@slidev/theme-seriph**: Modern theme
- **chart.js**: Professional charts
- **animejs**: Smooth animations
- **@vueuse/core**: Vue utilities
- **unocss**: Utility-first CSS
- **@iconify-json**: Icon libraries

## 🚀 Production Export

For presentations:

```bash
# PDF export (recommended)
npm run export:pdf

# PNG export (for images)
npm run export:png
```

## 💡 Tips

1. **Use glassmorphism**: Add `glass-card` class for modern cards
2. **Gradient text**: Use `gradient-text-teal` or similar classes
3. **Glow effects**: Add `glow-teal`, `glow-purple` for emphasis
4. **Animations**: Components auto-animate on mount
5. **PDF quality**: Export uses 2x scale for crisp rendering

## 🎨 Customization

### Colors

Edit `styles.css` or `uno.config.ts` to change color scheme.

### Fonts

Edit `slidev.config.ts` fonts section.

### Theme

The deck uses the `seriph` theme with custom overrides. Edit `slidev.config.ts` to change.

## 📝 Notes

- All components are Vue 3 Composition API
- Markdown supports Vue components natively
- Hot-reload works for both `.md` and `.vue` files
- PDF export preserves all styling and animations

---

**Built with ❤️ for world-class presentations**
