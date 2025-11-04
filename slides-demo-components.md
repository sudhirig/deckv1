---
theme: seriph
background: https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1920&q=80
class: 'text-center'
highlighter: shiki
lineNumbers: false
info: |
  ## Component Demo
  Showcasing Modern Custom Vue Components
drawings:
  persist: false
css: unocss
wakeLock: "build"
colorSchema: 'dark'
transition: slide-left
---

# Component Library Demo

<div class="text-2xl font-light mb-6">
Modern Custom Vue Components for Slidev
</div>

<div class="text-lg opacity-80">
Replacing Mermaid with Beautiful, Interactive Visualizations
</div>

---

# StatCard Components

<div class="text-base mb-6 opacity-80">
Animated metric displays with hover effects
</div>

<div class="grid grid-cols-3 gap-6">

<StatCard
  :value="39.7"
  suffix="%"
  label="of world's millionaires<br/>are in the US"
  color="blue"
  :animate="true"
/>

<StatCard
  value="7.9M"
  label="Everyday Millionaires<br/>($1-5M liquid)"
  color="teal"
/>

<StatCard
  value="$107T"
  label="Total Wealth in this<br/>underserved segment"
  color="green"
/>

</div>

---

# ComparisonCard Components

<div class="text-base mb-4 opacity-80">
Side-by-side Want vs Get comparisons
</div>

<div class="grid grid-cols-3 gap-4">

<ComparisonCard
  icon="💻"
  title="Digital"
  color="blue"
  want-text="24/7 Real-time Dashboards"
  get-text="Quarterly PDFs"
/>

<ComparisonCard
  icon="🏛️"
  title="Products"
  color="green"
  want-text="Access to PE, Credit, RE"
  get-text="Stocks & Bonds Only"
/>

<ComparisonCard
  icon="⚖️"
  title="Needs"
  color="teal"
  want-text="Proactive Tax & Legacy Planning"
  get-text="Basic Asset Allocation"
/>

</div>

---

# Flow Diagrams

<div class="text-base mb-4 opacity-80">
Custom SVG-based workflow visualizations
</div>

<TwoColumnLayout :gap="4">

<div>
  <div class="text-lg font-semibold mb-3">❌ The Old Model</div>
  <FlowDiagram type="old" />
</div>

<div>
  <div class="text-lg font-semibold mb-3">✅ Our Model</div>
  <FlowDiagram type="new" />
</div>

</TwoColumnLayout>

---

# Competitive Quadrant

<div class="text-base mb-4 opacity-80">
Interactive positioning map with animated dots
</div>

<CompetitiveQuadrant
  x-label="Low Tech → High Tech"
  y-label="Mass Market → HNW/Family Office"
/>

---

# Workflow Steps

<div class="text-base mb-4 opacity-80">
Agentic workflow with animated step cards
</div>

<WorkflowSteps />

---

# Timeline Chart

<div class="text-base mb-4 opacity-80">
Animated line graph with SVG paths
</div>

<TimelineChart title="Advisor Shortage Projection" />

---

# Pie Chart

<div class="text-base mb-4 opacity-80">
Animated segments with interactive legend
</div>

<div class="flex justify-center">
  <PieChart
    title="Use of Funds"
    :size="350"
    :data="[
      { label: 'Product & Engineering', value: 40, color: '#3b82f6' },
      { label: 'API & Integration', value: 30, color: '#14b8a6' },
      { label: 'HNW Acquisition', value: 20, color: '#a855f7' },
      { label: 'Operations', value: 10, color: '#f59e0b' }
    ]"
  />
</div>

---

# Architecture Diagram

<div class="text-base mb-4 opacity-80">
System architecture with connection flows
</div>

<ArchitectureDiagram title="API-First Design" />

---

# AgentCard Components

<div class="text-base mb-4 opacity-80">
Problem-solution format for AI agents
</div>

<ThreeColumnLayout :gap="6">

<AgentCard
  icon="💰"
  title="Tax Alpha Agent"
  color="orange"
  problem="HNWIs lose millions to inefficient tax mgmt. Advisors harvest quarterly at best."
  solution="Daily tax-loss harvesting"
/>

<AgentCard
  icon="📄"
  title="Alt Assets Agent"
  color="orange"
  problem="HNWIs demand private markets (15%), but 80% of data trapped in 100-pg docs."
  solution="AI generates 1-pg memos"
/>

<AgentCard
  icon="🌏"
  title="India Gateway Agent"
  color="yellow"
  problem="Accessing India = nightmare of FPI regs, tax, currency risk."
  solution="GIFT City eliminates tax/currency risk"
/>

</ThreeColumnLayout>

---

# PersonaJourneyCard Components

<div class="text-base mb-4 opacity-80">
Three-stage user journey visualization
</div>

<ThreeColumnLayout :gap="4">

<PersonaJourneyCard
  emoji="😟"
  title="Pain"
  color="red"
  name="Jed, 42, Tech Executive"
  metric="$5M"
  metric-label="in company stock"
  description="Need help executing properly — stuck with generic advice"
/>

<PersonaJourneyCard
  emoji="🤖"
  title="AI Solution"
  color="blue"
>
  <div class="p-2 bg-blue-900/30 rounded text-xs mb-2">
    <strong>Equity Agent:</strong> Analyzes stock, recommends covered call strategy
  </div>
  <div class="p-2 bg-blue-900/30 rounded text-xs mb-2">
    <strong>Alt Agent:</strong> Scans 200+ PE funds, surfaces top 3
  </div>
  <div class="p-2 bg-blue-900/30 rounded text-xs">
    <strong>Execution:</strong> One-click approval via IBKR
  </div>
</PersonaJourneyCard>

<PersonaJourneyCard
  emoji="✅"
  title="Outcome"
  color="green"
>
  <div class="space-y-2 text-sm">
    <div class="font-semibold mb-2">After 12 Months:</div>
    <div class="text-2xl font-bold text-green-400">$142K</div>
    <div class="text-xs">Income from covered calls</div>
    <div class="text-2xl font-bold text-teal-400 mt-3">$85K</div>
    <div class="text-xs">Tax savings via TLH</div>
  </div>
</PersonaJourneyCard>

</ThreeColumnLayout>

---

# HighlightBox Components

<div class="text-base mb-4 opacity-80">
Flexible callout boxes with multiple variants
</div>

<div class="grid grid-cols-2 gap-4">

<HighlightBox
  title="Important Note"
  icon="⚠️"
  color="orange"
  variant="border"
>
  This is a border variant with left accent line
</HighlightBox>

<HighlightBox
  title="Key Feature"
  icon="✨"
  color="teal"
  variant="solid"
>
  This is a solid variant with background fill
</HighlightBox>

<HighlightBox
  title="Major Achievement"
  icon="🎯"
  color="green"
  variant="gradient"
>
  This is a gradient variant with stunning colors
</HighlightBox>

<HighlightBox
  title="Critical Alert"
  icon="🚨"
  color="red"
  variant="gradient"
>
  This is a red gradient for urgent information
</HighlightBox>

</div>

---

# Metrics Table

<div class="text-base mb-4 opacity-80">
Financial projections with hover effects
</div>

<div class="max-w-3xl mx-auto">
  <MetricsTable
    :rows="[
      { metric: 'Users', y1: 200, y2: 800, y3: 2000 },
      { metric: 'Avg Portfolio', y1: '$1.0M', y2: '$1.2M', y3: '$1.25M' },
      { metric: 'AUM', y1: '$200M', y2: '$960M', y3: '$2.5B' },
      { metric: 'Revenue', y1: '$1.0M', y2: '$4.8M', y3: '$12.5M' },
      { metric: 'EBITDA', y1: '-$1.2M', y2: '+$0.8M', y3: '+$4.5M' }
    ]"
    :highlight-row="4"
  />
</div>

---

# Animation Components

<div class="text-base mb-4 opacity-80">
Smooth transitions and counters
</div>

<div class="space-y-8">

<div class="text-center">
  <div class="text-6xl font-bold text-teal-400">
    <AnimatedCounter :target="107" suffix="T" prefix="$" />
  </div>
  <div class="text-lg mt-2 opacity-80">Animated Counter</div>
</div>

<div class="space-y-4 max-w-2xl mx-auto">
  <div>
    <div class="text-sm mb-2">Product & Engineering (40%)</div>
    <ProgressBar :percentage="40" color="blue" />
  </div>

  <div>
    <div class="text-sm mb-2">API & Integration (30%)</div>
    <ProgressBar :percentage="30" color="teal" :delay="200" />
  </div>

  <div>
    <div class="text-sm mb-2">HNW Acquisition (20%)</div>
    <ProgressBar :percentage="20" color="purple" :delay="400" />
  </div>

  <div>
    <div class="text-sm mb-2">Operations (10%)</div>
    <ProgressBar :percentage="10" color="orange" :delay="600" />
  </div>
</div>

</div>

---
layout: center
class: text-center
---

# That's All!

<div class="text-2xl opacity-80 mt-4">
Modern, Interactive, Beautiful Components
</div>

<div class="text-base opacity-60 mt-8">
All built with Vue 3, TypeScript, and Tailwind CSS
</div>
