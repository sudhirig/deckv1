<script setup lang="ts">
import { ref } from 'vue'

interface Company {
  name: string
  x: number
  y: number
  color: string
  highlight?: boolean
}

interface Props {
  xLabel?: string
  yLabel?: string
  quadrantLabels?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  xLabel: 'Low Tech → High Tech',
  yLabel: 'Mass Market → HNW/Family Office',
  quadrantLabels: () => [
    'AI-Powered HNW (Our Space)',
    'Legacy HNW Platforms',
    'Robo-Advisors (Commoditized)',
    'Future Potential'
  ],
})

const companies: Company[] = [
  { name: 'Wealthfront', x: 25, y: 20, color: '#ef4444' },
  { name: 'Betterment', x: 30, y: 15, color: '#ef4444' },
  { name: 'Addepar', x: 40, y: 70, color: '#f97316' },
  { name: 'Black Diamond', x: 35, y: 75, color: '#f97316' },
  { name: 'Arta Finance', x: 80, y: 85, color: '#3b82f6' },
  { name: 'Our Platform', x: 85, y: 90, color: '#22c55e', highlight: true },
]

const hoveredCompany = ref<string | null>(null)
</script>

<template>
  <div class="w-full h-[500px] relative bg-gray-900/30 rounded-lg p-8 border border-gray-700">
    <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="quadrantGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#22c55e;stop-opacity:0.1" />
          <stop offset="100%" style="stop-color:#22c55e;stop-opacity:0.3" />
        </linearGradient>
        <linearGradient id="quadrantGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#f97316;stop-opacity:0.1" />
          <stop offset="100%" style="stop-color:#f97316;stop-opacity:0.2" />
        </linearGradient>
        <linearGradient id="quadrantGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#ef4444;stop-opacity:0.1" />
          <stop offset="100%" style="stop-color:#ef4444;stop-opacity:0.2" />
        </linearGradient>
        <linearGradient id="quadrantGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:0.1" />
          <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:0.2" />
        </linearGradient>
      </defs>

      <rect x="50" y="0" width="50" height="50" fill="url(#quadrantGradient1)" />
      <rect x="50" y="50" width="50" height="50" fill="url(#quadrantGradient2)" />
      <rect x="0" y="50" width="50" height="50" fill="url(#quadrantGradient3)" />
      <rect x="0" y="0" width="50" height="50" fill="url(#quadrantGradient4)" />

      <line x1="50" y1="0" x2="50" y2="100" stroke="#4b5563" stroke-width="0.3" />
      <line x1="0" y1="50" x2="100" y2="50" stroke="#4b5563" stroke-width="0.3" />

      <text x="52" y="25" font-size="3" fill="#22c55e" opacity="0.6">{{ quadrantLabels[0] }}</text>
      <text x="52" y="75" font-size="3" fill="#f97316" opacity="0.6">{{ quadrantLabels[1] }}</text>
      <text x="2" y="75" font-size="3" fill="#ef4444" opacity="0.6">{{ quadrantLabels[2] }}</text>
      <text x="2" y="25" font-size="3" fill="#3b82f6" opacity="0.6">{{ quadrantLabels[3] }}</text>

      <g v-for="company in companies" :key="company.name">
        <circle
          :cx="company.x"
          :cy="100 - company.y"
          :r="company.highlight ? 2.5 : 1.8"
          :fill="company.color"
          :opacity="hoveredCompany === company.name ? 1 : 0.8"
          :stroke="company.highlight ? '#22c55e' : 'none'"
          :stroke-width="company.highlight ? 0.5 : 0"
          class="transition-all duration-300 cursor-pointer"
          @mouseenter="hoveredCompany = company.name"
          @mouseleave="hoveredCompany = null"
        >
          <animate
            v-if="company.highlight"
            attributeName="r"
            values="2.5;3;2.5"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
        <text
          :x="company.x"
          :y="100 - company.y - 3"
          font-size="2.5"
          :fill="company.color"
          :font-weight="company.highlight ? 'bold' : 'normal'"
          text-anchor="middle"
          :opacity="hoveredCompany === company.name ? 1 : 0.9"
          class="transition-all duration-300"
        >
          {{ company.name }}
        </text>
      </g>
    </svg>

    <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-400">
      {{ xLabel }}
    </div>
    <div class="absolute left-2 top-1/2 transform -translate-y-1/2 -rotate-90 text-xs text-gray-400">
      {{ yLabel }}
    </div>
  </div>
</template>
