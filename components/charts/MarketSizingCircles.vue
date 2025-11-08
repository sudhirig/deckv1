<template>
  <div class="relative w-full h-full flex flex-col items-center justify-center p-1 max-h-full overflow-hidden">
    <svg viewBox="0 0 600 560" class="w-full max-w-2xl flex-1 min-h-0" style="max-height: 85%;">
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
        y="95"
        text-anchor="middle"
        class="text-lg font-bold fill-white"
      >
        TAM: $112T
      </text>
      <text
        x="300"
        y="115"
        text-anchor="middle"
        class="text-[10px] fill-gray-400"
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
        y="195"
        text-anchor="middle"
        class="text-base font-bold fill-blue-400"
      >
        SAM: $10-30B/yr
      </text>
      <text
        x="300"
        y="212"
        text-anchor="middle"
        class="text-[9px] fill-gray-400"
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
          y="275"
          text-anchor="middle"
          class="text-xs font-bold fill-white"
        >
          SOM (Year 3)
        </text>
        <text
          x="300"
          y="295"
          text-anchor="middle"
          class="text-lg font-bold fill-white"
        >
          $2.5B AUM
        </text>
        <text
          x="300"
          y="315"
          text-anchor="middle"
          class="text-[9px] fill-gray-300"
        >
          2,000 clients
        </text>
        <text
          x="300"
          y="335"
          text-anchor="middle"
          class="text-xs font-bold fill-white"
        >
          $12.5M Revenue
        </text>
      </g>

      <!-- Pulsing center dot -->
      <circle
        cx="300"
        cy="300"
        r="5"
        fill="#ffffff"
        :opacity="animated ? '1' : '0'"
        class="animate-pulse"
      />

      <!-- Gradients -->
      <defs>
        <radialGradient id="tamGradient">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.3" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0.1" />
        </radialGradient>
        <radialGradient id="samGradient">
          <stop offset="0%" stop-color="#3b82f6" />
          <stop offset="100%" stop-color="#2563eb" />
        </radialGradient>
        <radialGradient id="somGradient">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.4" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0.2" />
        </radialGradient>
      </defs>
    </svg>

    <!-- Legend -->
    <div class="flex justify-center gap-1.5 text-[7px] leading-tight mt-1 flex-shrink-0 px-1 pb-0.5">
      <div class="flex items-center gap-0.5">
        <div class="w-1.5 h-1.5 rounded-full bg-white/30 border border-white/50"></div>
        <span class="text-gray-400 whitespace-nowrap">TAM</span>
      </div>
      <div class="flex items-center gap-0.5">
        <div class="w-1.5 h-1.5 rounded-full bg-blue-500/30 border border-blue-500"></div>
        <span class="text-gray-400 whitespace-nowrap">SAM</span>
      </div>
      <div class="flex items-center gap-0.5">
        <div class="w-1.5 h-1.5 rounded-full bg-white/30 border border-white/50"></div>
        <span class="text-gray-400 whitespace-nowrap">SOM</span>
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
