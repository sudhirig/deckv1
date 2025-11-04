<template>
  <div class="relative w-full h-full flex items-center justify-center p-8">
    <svg viewBox="0 0 600 600" class="w-full max-w-2xl">
      <!-- TAM Circle -->
      <circle
        cx="300"
        cy="300"
        r="250"
        :fill="animated ? 'url(#tamGradient)' : 'transparent'"
        :opacity="animated ? '0.3' : '0'"
        class="transition-all duration-1000"
      />
      <text
        x="300"
        y="100"
        text-anchor="middle"
        class="text-2xl font-bold fill-teal-400"
      >
        TAM: $112T
      </text>
      <text
        x="300"
        y="130"
        text-anchor="middle"
        class="text-sm fill-gray-400"
      >
        US HNW ($107T) + India Access ($5T)
      </text>

      <!-- SAM Circle -->
      <circle
        cx="300"
        cy="300"
        r="170"
        :fill="animated ? 'url(#samGradient)' : 'transparent'"
        :opacity="animated ? '0.5' : '0'"
        class="transition-all duration-1000 delay-300"
      />
      <text
        x="300"
        y="200"
        text-anchor="middle"
        class="text-xl font-bold fill-blue-400"
      >
        SAM: $10-30B/yr
      </text>
      <text
        x="300"
        y="225"
        text-anchor="middle"
        class="text-xs fill-gray-400"
      >
        Tech-savvy 2M HNWIs
      </text>

      <!-- SOM Circle -->
      <circle
        cx="300"
        cy="300"
        r="90"
        :fill="animated ? 'url(#somGradient)' : 'transparent'"
        :opacity="animated ? '0.8' : '0'"
        class="transition-all duration-1000 delay-600"
      />
      <g :opacity="animated ? '1' : '0'" class="transition-opacity duration-1000 delay-900">
        <text
          x="300"
          y="290"
          text-anchor="middle"
          class="text-lg font-bold fill-green-400"
        >
          SOM (Year 3)
        </text>
        <text
          x="300"
          y="315"
          text-anchor="middle"
          class="text-2xl font-bold fill-green-300"
        >
          $2.5B AUM
        </text>
        <text
          x="300"
          y="340"
          text-anchor="middle"
          class="text-sm fill-gray-300"
        >
          2,000 clients
        </text>
        <text
          x="300"
          y="360"
          text-anchor="middle"
          class="text-lg font-bold fill-green-400"
        >
          $12.5M Revenue
        </text>
      </g>

      <!-- Pulsing center dot -->
      <circle
        cx="300"
        cy="300"
        r="5"
        fill="#10b981"
        :opacity="animated ? '1' : '0'"
        class="animate-pulse"
      />

      <!-- Gradients -->
      <defs>
        <radialGradient id="tamGradient">
          <stop offset="0%" stop-color="#14b8a6" />
          <stop offset="100%" stop-color="#0891b2" />
        </radialGradient>
        <radialGradient id="samGradient">
          <stop offset="0%" stop-color="#3b82f6" />
          <stop offset="100%" stop-color="#2563eb" />
        </radialGradient>
        <radialGradient id="somGradient">
          <stop offset="0%" stop-color="#10b981" />
          <stop offset="100%" stop-color="#059669" />
        </radialGradient>
      </defs>
    </svg>

    <!-- Legend -->
    <div class="absolute bottom-4 left-0 right-0 flex justify-center gap-6 text-xs">
      <div class="flex items-center gap-2">
        <div class="w-4 h-4 rounded-full bg-teal-500/30 border border-teal-500"></div>
        <span class="text-gray-400">Total Addressable Market</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-4 h-4 rounded-full bg-blue-500/30 border border-blue-500"></div>
        <span class="text-gray-400">Serviceable Available Market</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-4 h-4 rounded-full bg-green-500/30 border border-green-500"></div>
        <span class="text-gray-400">Serviceable Obtainable Market</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const animated = ref(false)

onMounted(() => {
  setTimeout(() => {
    animated.value = true
  }, 300)
})
</script>
