<template>
  <div class="relative w-full h-full p-0.5 max-h-full overflow-hidden flex flex-col">
    <div class="text-center mb-0.5">
      <div class="text-[9px] text-gray-400 leading-tight">Conservative projections based on Wealthfront/Betterment trajectories</div>
    </div>

    <svg viewBox="0 0 800 280" class="w-full h-auto flex-shrink" style="max-height: 85%;">
      <!-- Grid lines -->
      <line
        v-for="i in 5"
        :key="`grid-${i}`"
        :y1="60 + (i * 55)"
        :y2="60 + (i * 55)"
        x1="50"
        x2="750"
        stroke="#374151"
        stroke-width="0.5"
        stroke-dasharray="3 3"
      />

      <!-- Y-axis labels -->
      <text
        v-for="(label, i) in yAxisLabels"
        :key="`y-label-${i}`"
        x="45"
        :y="280 - (i * 55) + 5"
        text-anchor="end"
        class="text-[9px] fill-gray-400"
      >
        {{ label }}
      </text>

      <!-- X-axis labels -->
      <text
        v-for="(year, i) in years"
        :key="`x-label-${i}`"
        :x="100 + (i * 200)"
        y="275"
        text-anchor="middle"
        class="text-[10px] fill-gray-300 font-semibold"
      >
        {{ year }}
      </text>

      <!-- Growth curve -->
      <path
        :d="growthPath"
        fill="none"
        :stroke="animated ? 'url(#lineGradient)' : 'transparent'"
        stroke-width="3"
        stroke-linecap="round"
        :stroke-dasharray="animated ? '' : pathLength"
        :stroke-dashoffset="animated ? '0' : pathLength"
        class="transition-all duration-2000"
      />

      <!-- Area under curve -->
      <path
        :d="areaPath"
        :fill="animated ? 'url(#areaGradient)' : 'transparent'"
        :opacity="animated ? '0.25' : '0'"
        class="transition-all duration-2000"
      />

      <!-- Data points -->
      <g v-for="(point, i) in dataPoints" :key="`point-${i}`">
        <circle
          :cx="point.x"
          :cy="point.y"
          r="5"
          :fill="animated ? point.color : 'transparent'"
          :opacity="animated ? '1' : '0'"
          class="transition-all duration-500"
          :style="{ transitionDelay: `${i * 300}ms` }"
        />
        <circle
          v-if="animated"
          :cx="point.x"
          :cy="point.y"
          r="5"
          :fill="point.color"
          opacity="0.5"
          class="animate-ping"
          :style="{ animationDelay: `${i * 300}ms` }"
        />

        <!-- Value labels -->
        <text
          :x="point.x"
          :y="point.y - 15"
          text-anchor="middle"
          :class="animated ? 'opacity-100' : 'opacity-0'"
          class="text-[10px] font-bold transition-opacity duration-500"
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
          y1="25"
          x2="500"
          y2="280"
          stroke="#f59e0b"
          stroke-width="1.5"
          stroke-dasharray="6 3"
          opacity="0.5"
        />
        <text x="505" y="20" class="text-[9px] fill-amber-400 font-semibold">
          Break-even (M28)
        </text>

        <!-- Cash-flow positive -->
        <line
          x1="580"
          y1="25"
          x2="580"
          y2="280"
          stroke="#ffffff"
          stroke-width="1.5"
          stroke-dasharray="6 3"
          opacity="0.5"
        />
        <text x="585" y="20" class="text-[9px] fill-white font-semibold">
          Cash+ (M30)
        </text>
      </g>

      <!-- Gradients -->
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.8" />
          <stop offset="50%" stop-color="#3b82f6" stop-opacity="0.8" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0.8" />
        </linearGradient>
        <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.3" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0.05" />
        </linearGradient>
      </defs>
    </svg>

    <!-- Legend -->
    <div class="mt-0.5 flex justify-center gap-1 text-[7px] leading-tight">
      <div class="flex items-center gap-0.5">
        <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
        <span class="text-gray-400 whitespace-nowrap">Y1: $200M</span>
      </div>
      <div class="flex items-center gap-0.5">
        <div class="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
        <span class="text-gray-400 whitespace-nowrap">Y2: $960M</span>
      </div>
      <div class="flex items-center gap-0.5">
        <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
        <span class="text-gray-400 whitespace-nowrap">Y3: $2.5B</span>
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
  { x: 100, y: 280, value: 0, label: '$0', color: '#6b7280' },
  { x: 300, y: 250, value: 200, label: '$200M', color: '#ffffff' },
  { x: 500, y: 160, value: 960, label: '$960M', color: '#3b82f6' },
  { x: 700, y: 30, value: 2500, label: '$2.5B', color: '#ffffff' }
]

const growthPath = computed(() => {
  return `M 100,280 Q 200,265 300,250 Q 400,190 500,160 Q 600,80 700,30`
})

const areaPath = computed(() => {
  return `M 100,280 Q 200,265 300,250 Q 400,190 500,160 Q 600,80 700,30 L 700,280 L 100,280 Z`
})

onMounted(() => {
  setTimeout(() => {
    animated.value = true
  }, 300)
})
</script>
