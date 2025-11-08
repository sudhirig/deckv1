<script setup lang="ts">
import { ref, computed } from 'vue'

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

// Computed property to ensure reactive access to quadrantLabels
const effectiveQuadrantLabels = computed(() => props.quadrantLabels || [
  'AI-Powered HNW (Our Space)',
  'Legacy HNW Platforms',
  'Robo-Advisors (Commoditized)',
  'Future Potential'
])

const companies: Company[] = [
  { name: 'Wealthfront', x: 22, y: 22, color: '#ef4444' },
  { name: 'Betterment', x: 28, y: 14, color: '#ef4444' },
  { name: 'Addepar', x: 40, y: 72, color: '#f97316' },
  { name: 'Black Diamond', x: 35, y: 77, color: '#f97316' },
  { name: 'Arta Finance', x: 72, y: 87, color: '#3b82f6' },
  { name: 'Our Platform', x: 77, y: 92, color: '#ffffff', highlight: true },
]

const hoveredCompany = ref<string | null>(null)
</script>

<template>
  <div class="w-full h-full max-h-[29vh] relative bg-gray-900/20 rounded-lg p-1 border border-gray-700/50 overflow-hidden flex flex-col">
    <svg class="w-full h-full flex-1" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" style="min-height: 0; overflow: visible;">
      <defs>
        <linearGradient id="quadrantGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.1" />
          <stop offset="100%" style="stop-color:#ffffff;stop-opacity:0.2" />
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

      <text x="75" y="13" font-size="1.0" fill="#ffffff" opacity="0.7" font-weight="600" text-anchor="middle">{{ effectiveQuadrantLabels[0] }}</text>
      <text x="75" y="92" font-size="1.0" fill="#f97316" opacity="0.7" font-weight="600" text-anchor="middle">{{ effectiveQuadrantLabels[1] }}</text>
      <text x="25" y="92" font-size="1.0" fill="#ef4444" opacity="0.7" font-weight="600" text-anchor="middle">{{ effectiveQuadrantLabels[2] }}</text>
      <text x="25" y="13" font-size="1.0" fill="#3b82f6" opacity="0.7" font-weight="600" text-anchor="middle">{{ effectiveQuadrantLabels[3] }}</text>

      <!-- Animated connector lines from competitors to Our Platform -->
      <g v-if="companies.find(c => c.highlight)">
        <defs>
          <filter id="motionBlur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1"/>
          </filter>
          <linearGradient id="connectorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.3" />
            <stop offset="50%" style="stop-color:#ffffff;stop-opacity:0.5" />
            <stop offset="100%" style="stop-color:#ffffff;stop-opacity:0.7" />
          </linearGradient>
        </defs>
        <g v-for="company in companies.filter(c => !c.highlight)" :key="`connector-${company.name}`">
          <line
            :x1="company.x"
            :y1="100 - company.y"
            :x2="77"
            :y2="8"
            stroke="url(#connectorGradient)"
            stroke-width="0.3"
            opacity="0.3"
            filter="url(#motionBlur)"
          >
            <animate
              attributeName="opacity"
              values="0.2;0.5;0.2"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-width"
              values="0.2;0.4;0.2"
              dur="3s"
              repeatCount="indefinite"
            />
          </line>
        </g>
      </g>

      <g v-for="company in companies" :key="company.name">
        <circle
          :cx="company.x"
          :cy="100 - company.y"
          :r="company.highlight ? 1.8 : 1.2"
          :fill="company.color"
          :opacity="hoveredCompany === company.name ? 1 : 0.8"
          :stroke="company.highlight ? '#ffffff' : 'none'"
          :stroke-width="company.highlight ? 0.25 : 0"
          class="transition-all duration-300 cursor-pointer"
          @mouseenter="hoveredCompany = company.name"
          @mouseleave="hoveredCompany = null"
        >
          <animate
            v-if="company.highlight"
            attributeName="r"
            values="1.8;2.2;1.8"
            dur="2s"
            repeatCount="indefinite"
          />
          <!-- Motion blur effect for highlighted company -->
          <animate
            v-if="company.highlight"
            attributeName="opacity"
            values="0.8;1;0.8"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
        <text
          :x="company.x"
          :y="100 - company.y - (company.name === 'Betterment' ? 11 : 8)"
          :font-size="company.name === 'Betterment' ? '0.8' : '0.85'"
          :fill="company.color"
          :font-weight="company.highlight ? 'bold' : '500'"
          text-anchor="middle"
          :opacity="hoveredCompany === company.name ? 1 : 0.85"
          class="transition-all duration-300"
        >
          {{ company.name }}
        </text>
      </g>
    </svg>

    <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-[7px] text-gray-400 leading-tight whitespace-nowrap">
      {{ xLabel }}
    </div>
    <div class="absolute left-0 top-1/2 transform -translate-y-1/2 -rotate-90 text-[7px] text-gray-400 leading-tight whitespace-nowrap" style="transform-origin: center;">
      {{ yLabel }}
    </div>
  </div>
</template>
