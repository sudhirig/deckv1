<template>
  <div class="relative w-full h-full p-4">
    <div class="text-center mb-4">
      <div class="text-sm text-gray-400">Conservative projections based on Wealthfront/Betterment trajectories</div>
    </div>

    <svg viewBox="0 0 800 400" class="w-full">
      <!-- Grid lines -->
      <line
        v-for="i in 5"
        :key="`grid-${i}`"
        :y1="80 * i"
        :y2="80 * i"
        x1="60"
        x2="740"
        stroke="#374151"
        stroke-width="1"
        stroke-dasharray="4 4"
      />

      <!-- Y-axis labels -->
      <text
        v-for="(label, i) in yAxisLabels"
        :key="`y-label-${i}`"
        x="50"
        :y="400 - (i * 80)"
        text-anchor="end"
        class="text-xs fill-gray-400"
      >
        {{ label }}
      </text>

      <!-- X-axis labels -->
      <text
        v-for="(year, i) in years"
        :key="`x-label-${i}`"
        :x="100 + (i * 200)"
        y="390"
        text-anchor="middle"
        class="text-sm fill-gray-300 font-semibold"
      >
        {{ year }}
      </text>

      <!-- Growth curve -->
      <path
        :d="growthPath"
        fill="none"
        :stroke="animated ? 'url(#lineGradient)' : 'transparent'"
        stroke-width="4"
        stroke-linecap="round"
        :stroke-dasharray="animated ? '' : pathLength"
        :stroke-dashoffset="animated ? '0' : pathLength"
        class="transition-all duration-2000"
      />

      <!-- Area under curve -->
      <path
        :d="areaPath"
        :fill="animated ? 'url(#areaGradient)' : 'transparent'"
        :opacity="animated ? '0.3' : '0'"
        class="transition-all duration-2000"
      />

      <!-- Data points -->
      <g v-for="(point, i) in dataPoints" :key="`point-${i}`">
        <circle
          :cx="point.x"
          :cy="point.y"
          r="8"
          :fill="animated ? point.color : 'transparent'"
          :opacity="animated ? '1' : '0'"
          class="transition-all duration-500"
          :style="{ transitionDelay: `${i * 300}ms` }"
        />
        <circle
          v-if="animated"
          :cx="point.x"
          :cy="point.y"
          r="8"
          :fill="point.color"
          opacity="0.5"
          class="animate-ping"
          :style="{ animationDelay: `${i * 300}ms` }"
        />

        <!-- Value labels -->
        <text
          :x="point.x"
          :y="point.y - 20"
          text-anchor="middle"
          :class="animated ? 'opacity-100' : 'opacity-0'"
          class="text-sm font-bold transition-opacity duration-500"
          :style="{ transitionDelay: `${i * 300}ms`, fill: point.color }"
        >
          {{ point.label }}
        </text>
      </g>

      <!-- Milestone markers -->
      <g v-if="animated" class="animate-fade-in">
        <!-- Break-even -->
        <line
          x1="500"
          y1="50"
          x2="500"
          y2="350"
          stroke="#f59e0b"
          stroke-width="2"
          stroke-dasharray="8 4"
          opacity="0.5"
        />
        <text x="505" y="40" class="text-xs fill-amber-400 font-semibold">
          Break-even (M28)
        </text>

        <!-- Cash-flow positive -->
        <line
          x1="580"
          y1="50"
          x2="580"
          y2="350"
          stroke="#10b981"
          stroke-width="2"
          stroke-dasharray="8 4"
          opacity="0.5"
        />
        <text x="585" y="40" class="text-xs fill-green-400 font-semibold">
          Cash+ (M30)
        </text>
      </g>

      <!-- Gradients -->
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#14b8a6" />
          <stop offset="50%" stop-color="#3b82f6" />
          <stop offset="100%" stop-color="#10b981" />
        </linearGradient>
        <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#14b8a6" stop-opacity="0.5" />
          <stop offset="100%" stop-color="#14b8a6" stop-opacity="0.05" />
        </linearGradient>
      </defs>
    </svg>

    <!-- Legend -->
    <div class="mt-6 flex justify-center gap-8 text-xs">
      <div class="flex items-center gap-2">
        <div class="w-3 h-3 rounded-full bg-teal-500"></div>
        <span class="text-gray-400">Year 1: $200M AUM, $1M Revenue</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-3 h-3 rounded-full bg-blue-500"></div>
        <span class="text-gray-400">Year 2: $960M AUM, $4.8M Revenue</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-3 h-3 rounded-full bg-green-500"></div>
        <span class="text-gray-400">Year 3: $2.5B AUM, $12.5M Revenue</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const animated = ref(false)
const pathLength = '2000'

const years = ['Year 0', 'Year 1', 'Year 2', 'Year 3']
const yAxisLabels = ['$0', '$625M', '$1.25B', '$1.875B', '$2.5B']

const dataPoints = [
  { x: 100, y: 360, value: 0, label: '$0', color: '#6b7280' },
  { x: 300, y: 320, value: 200, label: '$200M', color: '#14b8a6' },
  { x: 500, y: 200, value: 960, label: '$960M', color: '#3b82f6' },
  { x: 700, y: 40, value: 2500, label: '$2.5B', color: '#10b981' }
]

const growthPath = computed(() => {
  return `M 100,360 Q 200,340 300,320 Q 400,240 500,200 Q 600,100 700,40`
})

const areaPath = computed(() => {
  return `M 100,360 Q 200,340 300,320 Q 400,240 500,200 Q 600,100 700,40 L 700,360 L 100,360 Z`
})

onMounted(() => {
  setTimeout(() => {
    animated.value = true
  }, 300)
})
</script>
