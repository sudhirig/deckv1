<script setup lang="ts">
interface Props {
  title?: string
}

defineProps<Props>()
</script>

<template>
  <div class="w-full">
    <h3 v-if="title" class="text-lg font-semibold mb-4">{{ title }}</h3>

    <svg class="w-full h-80" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#a855f7;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#7c3aed;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="apiGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#14b8a6;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0d9488;stop-opacity:1" />
        </linearGradient>
      </defs>

      <rect x="150" y="20" width="100" height="40" rx="5" fill="url(#aiGradient)" class="animate-pulse-slow" />
      <text x="200" y="45" font-size="12" fill="white" text-anchor="middle" font-weight="bold">AI Platform</text>

      <rect x="150" y="100" width="100" height="40" rx="5" fill="url(#apiGradient)" />
      <text x="200" y="125" font-size="12" fill="white" text-anchor="middle" font-weight="bold">API Layer</text>

      <line x1="200" y1="60" x2="200" y2="100" stroke="#22c55e" stroke-width="2" />
      <polygon points="200,100 195,90 205,90" fill="#22c55e" />

      <g>
        <rect x="30" y="180" width="70" height="30" rx="3" fill="#3b82f6" opacity="0.8" />
        <text x="65" y="200" font-size="10" fill="white" text-anchor="middle">IB</text>

        <rect x="110" y="180" width="70" height="30" rx="3" fill="#3b82f6" opacity="0.8" />
        <text x="145" y="200" font-size="10" fill="white" text-anchor="middle">Alpaca</text>

        <rect x="190" y="180" width="70" height="30" rx="3" fill="#3b82f6" opacity="0.8" />
        <text x="225" y="200" font-size="10" fill="white" text-anchor="middle">TD</text>

        <rect x="270" y="180" width="70" height="30" rx="3" fill="#3b82f6" opacity="0.8" />
        <text x="305" y="200" font-size="10" fill="white" text-anchor="middle">Schwab</text>
      </g>

      <line x1="65" y1="140" x2="65" y2="180" stroke="#0d9488" stroke-width="1.5" opacity="0.6" />
      <line x1="145" y1="140" x2="145" y2="180" stroke="#0d9488" stroke-width="1.5" opacity="0.6" />
      <line x1="225" y1="140" x2="225" y2="180" stroke="#0d9488" stroke-width="1.5" opacity="0.6" />
      <line x1="305" y1="140" x2="305" y2="180" stroke="#0d9488" stroke-width="1.5" opacity="0.6" />

      <g>
        <rect x="30" y="240" width="100" height="25" rx="3" fill="#059669" opacity="0.7" />
        <text x="80" y="257" font-size="9" fill="white" text-anchor="middle">Market Data</text>

        <rect x="150" y="240" width="100" height="25" rx="3" fill="#059669" opacity="0.7" />
        <text x="200" y="257" font-size="9" fill="white" text-anchor="middle">Tax APIs</text>

        <rect x="270" y="240" width="100" height="25" rx="3" fill="#059669" opacity="0.7" />
        <text x="320" y="257" font-size="9" fill="white" text-anchor="middle">Alt Platforms</text>
      </g>

      <line x1="80" y1="140" x2="80" y2="240" stroke="#0d9488" stroke-width="1.5" opacity="0.6" />
      <line x1="200" y1="140" x2="200" y2="240" stroke="#0d9488" stroke-width="1.5" opacity="0.6" />
      <line x1="320" y1="140" x2="320" y2="240" stroke="#0d9488" stroke-width="1.5" opacity="0.6" />
    </svg>

    <div class="text-xs mt-4">
      <div class="font-semibold mb-2">Not a Brokerage</div>
      <div class="space-y-1">
        <div>• Pure AI intelligence</div>
        <div>• Broker-agnostic</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes pulse-slow {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}
</style>
