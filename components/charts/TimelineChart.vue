<script setup lang="ts">
interface Props {
  title?: string
}

defineProps<Props>()
</script>

<template>
  <div class="w-full p-4 bg-gray-900/30 rounded-lg border border-gray-700">
    <svg class="w-full h-64" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="demandGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#22c55e;stop-opacity:0.8" />
          <stop offset="100%" style="stop-color:#22c55e;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="supplyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#ef4444;stop-opacity:0.8" />
          <stop offset="100%" style="stop-color:#ef4444;stop-opacity:1" />
        </linearGradient>
      </defs>

      <line x1="50" y1="150" x2="350" y2="150" stroke="#4b5563" stroke-width="2" />
      <line x1="50" y1="150" x2="50" y2="30" stroke="#4b5563" stroke-width="2" />

      <text x="100" y="170" font-size="14" fill="#9ca3af" text-anchor="middle">2024</text>
      <text x="200" y="170" font-size="14" fill="#9ca3af" text-anchor="middle">2029</text>
      <text x="300" y="170" font-size="14" fill="#9ca3af" text-anchor="middle">2034</text>

      <path
        d="M 100 120 Q 150 90 200 70 T 300 40"
        stroke="url(#demandGradient)"
        stroke-width="3"
        fill="none"
        class="animate-draw"
      />

      <circle cx="100" cy="120" r="5" fill="#22c55e">
        <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="70" r="5" fill="#22c55e">
        <animate attributeName="r" values="5;7;5" dur="2s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="300" cy="40" r="5" fill="#22c55e">
        <animate attributeName="r" values="5;7;5" dur="2s" begin="1s" repeatCount="indefinite" />
      </circle>

      <text x="320" y="45" font-size="12" fill="#22c55e" font-weight="bold">↗️ +45%</text>
      <text x="320" y="60" font-size="10" fill="#22c55e">HNW Demand</text>

      <path
        d="M 100 80 Q 150 100 200 110 T 300 130"
        stroke="url(#supplyGradient)"
        stroke-width="3"
        fill="none"
        class="animate-draw"
        style="animation-delay: 0.5s"
      />

      <circle cx="100" cy="80" r="5" fill="#ef4444">
        <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="110" r="5" fill="#ef4444">
        <animate attributeName="r" values="5;7;5" dur="2s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="300" cy="130" r="5" fill="#ef4444">
        <animate attributeName="r" values="5;7;5" dur="2s" begin="1s" repeatCount="indefinite" />
      </circle>

      <text x="320" y="135" font-size="12" fill="#ef4444" font-weight="bold">↘️ -15%</text>
      <text x="320" y="150" font-size="10" fill="#ef4444">Advisor Supply</text>
    </svg>

    <div class="mt-4 text-center p-3 bg-orange-900/30 rounded-lg border border-orange-500/30">
      <div class="text-sm font-bold text-orange-300">Gap is Guaranteed</div>
      <div class="text-xs opacity-80 mt-1">
        Industry can't hire its way out
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes draw {
  from {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
  }
  to {
    stroke-dasharray: 1000;
    stroke-dashoffset: 0;
  }
}

.animate-draw {
  animation: draw 2s ease-in-out forwards;
}
</style>
