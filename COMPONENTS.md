# Custom Component Library

A modern, interactive component library for Slidev presentations built with Vue 3, TypeScript, and Tailwind CSS.

## 📁 Directory Structure

```
components/
├── animations/       # Animation components
├── business/        # Business-specific components
├── cards/          # Card-style components
├── charts/         # Chart and visualization components
├── layouts/        # Layout helper components
└── shared/         # Shared utilities and constants
```

## 🎨 Design System

### Colors
All components use a consistent color palette defined in `components/shared/constants.ts`:
- `teal` - Primary brand color
- `blue` - Secondary accent
- `green` - Success states
- `orange` - Warnings
- `purple` - Highlights
- `red` - Errors

### Animations
Standard animation timing and easing functions for consistency across all components.

## 📦 Component Reference

### Cards

#### StatCard
Display large metrics with optional animation and hover effects.

```vue
<StatCard
  :value="39.7"
  suffix="%"
  label="of world's millionaires<br/>are in the US"
  color="blue"
  :animate="true"
/>
```

**Props:**
- `value` (string | number) - The metric value
- `label` (string) - Description text (supports HTML)
- `color` (string) - Color theme: teal, blue, green, orange, purple, red
- `animate` (boolean) - Enable counter animation
- `suffix` (string) - Text after the value

#### ComparisonCard
Side-by-side "Want vs Get" comparisons.

```vue
<ComparisonCard
  icon="💻"
  title="Digital"
  color="blue"
  want-text="24/7 Real-time Dashboards"
  get-text="Quarterly PDFs"
/>
```

**Props:**
- `icon` (string) - Emoji or icon
- `title` (string) - Card title
- `color` (string) - Color theme
- `wantLabel` (string) - Label for want section (default: "✓ Want")
- `wantText` (string) - Want description
- `getLabel` (string) - Label for get section (default: "✗ Get")
- `getText` (string) - Get description

#### HighlightBox
Flexible callout boxes with multiple styling variants.

```vue
<HighlightBox
  title="Important Note"
  icon="⚠️"
  color="orange"
  variant="border"
>
  Your content here
</HighlightBox>
```

**Props:**
- `title` (string) - Optional title
- `color` (string) - Color theme
- `variant` (string) - Style variant: solid, gradient, border
- `icon` (string) - Optional emoji/icon

### Charts

#### CompetitiveQuadrant
Interactive positioning map with animated dots.

```vue
<CompetitiveQuadrant
  x-label="Low Tech → High Tech"
  y-label="Mass Market → HNW/Family Office"
/>
```

**Props:**
- `xLabel` (string) - X-axis label
- `yLabel` (string) - Y-axis label
- `quadrantLabels` (string[]) - Labels for each quadrant

#### FlowDiagram
Workflow visualization comparing old vs new models.

```vue
<FlowDiagram type="old" />
<FlowDiagram type="new" />
```

**Props:**
- `type` (string) - "old" or "new"

#### PieChart
Animated pie chart with interactive legend.

```vue
<PieChart
  title="Use of Funds"
  :size="350"
  :data="[
    { label: 'Product', value: 40, color: '#3b82f6' },
    { label: 'API', value: 30, color: '#14b8a6' }
  ]"
/>
```

**Props:**
- `data` (Segment[]) - Array of segments with label, value, and color
- `title` (string) - Optional chart title
- `size` (number) - Chart diameter in pixels

#### TimelineChart
Animated line graph showing trends over time.

```vue
<TimelineChart title="Advisor Shortage Projection" />
```

**Props:**
- `title` (string) - Optional chart title

#### WorkflowSteps
Six-step workflow visualization with connecting elements.

```vue
<WorkflowSteps />
```

Can accept custom `steps` prop with emoji, title, description, and color for each step.

#### ArchitectureDiagram
System architecture with connection flows.

```vue
<ArchitectureDiagram title="API-First Design" />
```

**Props:**
- `title` (string) - Optional diagram title

### Business Components

#### PersonaJourneyCard
Three-stage user journey visualization (Pain → Solution → Outcome).

```vue
<PersonaJourneyCard
  emoji="😟"
  title="Pain"
  color="red"
  name="Jed, 42, Tech Executive"
  metric="$5M"
  metric-label="in company stock"
  description="Need help executing properly"
  quote="Stuck with generic advice"
/>
```

**Props:**
- `emoji` (string) - Display emoji
- `title` (string) - Card title
- `color` (string) - red, blue, or green
- `name` (string) - Optional persona name
- `metric` (string) - Optional large metric
- `metricLabel` (string) - Metric description
- `description` (string) - Optional description
- `quote` (string) - Optional quote

#### AgentCard
Problem-solution format for AI agent descriptions.

```vue
<AgentCard
  icon="💰"
  title="Tax Alpha Agent"
  color="orange"
  problem="HNWIs lose millions to inefficient tax mgmt"
  solution="Daily tax-loss harvesting"
/>
```

**Props:**
- `title` (string) - Agent name
- `icon` (string) - Agent icon/emoji
- `color` (string) - Color theme
- `problem` (string) - Problem statement
- `solution` (string) - Solution description

#### TeamMemberCard
Team member profile cards.

```vue
<TeamMemberCard
  name="John Doe"
  role="CEO & Co-Founder"
  experience="10+ yrs wealth mgmt"
  background="Ex-RIA, fintech exit"
  color="teal"
/>
```

**Props:**
- `name` (string) - Team member name
- `role` (string) - Job title
- `experience` (string) - Years of experience
- `background` (string) - Professional background
- `color` (string) - Color theme

#### MetricsTable
Financial projections table with hover effects.

```vue
<MetricsTable
  :rows="[
    { metric: 'Users', y1: 200, y2: 800, y3: 2000 },
    { metric: 'Revenue', y1: '$1M', y2: '$4.8M', y3: '$12.5M' }
  ]"
  :highlight-row="1"
/>
```

**Props:**
- `rows` (Row[]) - Array of metric rows
- `highlightRow` (number) - Row index to highlight

### Animations

#### AnimatedCounter
Smoothly animates numbers from 0 to target value.

```vue
<AnimatedCounter
  :target="107"
  suffix="T"
  prefix="$"
  :duration="2000"
  :delay="0"
/>
```

**Props:**
- `target` (number) - Target number
- `duration` (number) - Animation duration in ms
- `delay` (number) - Delay before starting
- `suffix` (string) - Text after number
- `prefix` (string) - Text before number
- `decimals` (number) - Decimal places

#### ProgressBar
Animated progress bar with gradient fill.

```vue
<ProgressBar
  :percentage="75"
  color="teal"
  :height="8"
  :show-label="true"
  :animate="true"
/>
```

**Props:**
- `percentage` (number) - Fill percentage (0-100)
- `color` (string) - Color theme
- `height` (number) - Bar height in pixels
- `showLabel` (boolean) - Show percentage label
- `animate` (boolean) - Enable animation
- `delay` (number) - Animation delay

#### FadeInGrid
Grid layout with staggered fade-in animation.

```vue
<FadeInGrid :cols="3" :gap="6">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</FadeInGrid>
```

**Props:**
- `cols` (number) - Number of columns
- `gap` (number) - Gap size (Tailwind scale)
- `staggerDelay` (number) - Delay between items in ms

### Layouts

#### ThreeColumnLayout
Responsive three-column grid layout.

```vue
<ThreeColumnLayout :gap="6">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</ThreeColumnLayout>
```

**Props:**
- `gap` (number) - Gap size (Tailwind scale)

#### TwoColumnLayout
Responsive two-column layout with ratio options.

```vue
<TwoColumnLayout :gap="4" split-ratio="1-2">
  <div>Left</div>
  <div>Right (wider)</div>
</TwoColumnLayout>
```

**Props:**
- `gap` (number) - Gap size (Tailwind scale)
- `splitRatio` (string) - Column ratio: "1-1", "1-2", or "2-1"

## 🛠️ Utilities

### Composables (`components/shared/composables.ts`)

- `useAnimatedCounter(target, duration, delay)` - Animated number counter
- `useIntersectionObserver(callback, options)` - Visibility detection
- `formatNumber(value, decimals)` - Format with K/M/B/T suffixes
- `formatCurrency(value, compact)` - Currency formatting
- `formatPercentage(value, decimals)` - Percentage formatting

### Constants (`components/shared/constants.ts`)

- `colors` - Complete color palette
- `animations` - Timing and easing functions
- `typography` - Font sizes and weights
- `spacing` - Spacing scale
- `gradients` - Predefined gradients

## 🚀 Usage Example

Create a slide in your `slides.md`:

```md
---
# Your Slide Title

<ThreeColumnLayout>

<StatCard
  :value="46"
  suffix="%"
  label="Planning to Switch Advisors"
  color="orange"
  :animate="true"
/>

<ComparisonCard
  icon="💻"
  title="Digital"
  color="blue"
  want-text="24/7 Real-time Dashboards"
  get-text="Quarterly PDFs"
/>

<AgentCard
  icon="💰"
  title="Tax Alpha"
  color="teal"
  problem="Manual tax harvesting"
  solution="Daily automated TLH"
/>

</ThreeColumnLayout>
```

## 🎯 Best Practices

1. **Consistency**: Use the same color for related concepts across slides
2. **Animation**: Enable animations for key metrics, but don't overuse
3. **Spacing**: Use layout components for consistent spacing
4. **Responsive**: All components are responsive and work on different screen sizes
5. **Accessibility**: Components include proper aria labels and semantic HTML

## 📝 Demo

See `slides-demo-components.md` for a comprehensive demonstration of all components.

## 🔧 Customization

All components accept `class` prop for additional Tailwind classes:

```vue
<StatCard
  value="$107T"
  label="Total Wealth"
  class="hover:shadow-2xl"
/>
```

## 🤝 Contributing

When adding new components:
1. Place in appropriate directory
2. Follow TypeScript interface patterns
3. Use shared constants for colors/animations
4. Add to this documentation
5. Include usage example in demo slides
