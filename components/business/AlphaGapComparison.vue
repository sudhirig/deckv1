<template>
  <div class="grid grid-cols-3 gap-4">
    <!-- Digital Gap -->
    <div
      class="relative p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl"
      :class="animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      style="transition-delay: 0ms"
    >
      <div class="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-blue-800/20 rounded-xl"></div>
      <div class="relative z-10">
        <!-- Icon -->
        <div class="text-4xl mb-2 text-center">
          <svg class="w-12 h-12 mx-auto text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>

        <!-- Title -->
        <div class="text-lg font-bold text-center mb-3 text-blue-300">Digital Experience</div>

        <!-- Want -->
        <div class="mb-3 p-2 bg-white/10 rounded-lg border-l-4 border-white/50">
          <div class="text-xs font-semibold text-white mb-1">✓ WANT</div>
          <div class="text-sm font-medium">24/7 Real-time Dashboards</div>
          <div class="text-xs text-gray-400 mt-1">Live portfolio tracking, instant insights</div>
        </div>

        <!-- Get -->
        <div class="p-2 bg-red-900/30 rounded-lg border-l-4 border-red-500">
          <div class="text-xs font-semibold text-red-400 mb-1">✗ GET</div>
          <div class="text-sm font-medium">Quarterly PDFs</div>
          <div class="text-xs text-gray-400 mt-1">Static reports, outdated data</div>
        </div>
      </div>
    </div>

    <!-- Product Access Gap -->
    <div
      class="relative p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl"
      :class="animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      style="transition-delay: 150ms"
    >
      <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-xl"></div>
      <div class="relative z-10">
        <!-- Icon -->
        <div class="text-4xl mb-2 text-center">
          <svg class="w-12 h-12 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>

        <!-- Title -->
        <div class="text-lg font-bold text-center mb-3 text-white">Product Access</div>

        <!-- Want -->
        <div class="mb-3 p-2 bg-white/10 rounded-lg border-l-4 border-white/50">
          <div class="text-xs font-semibold text-white mb-1">✓ WANT</div>
          <div class="text-sm font-medium">Access to PE, Credit, RE</div>
          <div class="text-xs text-gray-400 mt-1">+300-500bps potential alpha</div>
        </div>

        <!-- Get -->
        <div class="p-2 bg-red-900/30 rounded-lg border-l-4 border-red-500">
          <div class="text-xs font-semibold text-red-400 mb-1">✗ GET</div>
          <div class="text-sm font-medium">Stocks & Bonds Only</div>
          <div class="text-xs text-gray-400 mt-1">Limited to public markets</div>
        </div>
      </div>
    </div>

    <!-- Optimization Gap -->
    <div
      class="relative p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl"
      :class="animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      style="transition-delay: 300ms"
    >
      <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-xl"></div>
      <div class="relative z-10">
        <!-- Icon -->
        <div class="text-4xl mb-2 text-center">
          <svg class="w-12 h-12 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>

        <!-- Title -->
        <div class="text-lg font-bold text-center mb-3 text-white">Tax & Optimization</div>

        <!-- Want -->
        <div class="mb-3 p-2 bg-white/10 rounded-lg border-l-4 border-white/50">
          <div class="text-xs font-semibold text-white mb-1">✓ WANT</div>
          <div class="text-sm font-medium">Proactive Tax Alpha</div>
          <div class="text-xs text-gray-400 mt-1">Daily TLH, +1.8% annual alpha</div>
        </div>

        <!-- Get -->
        <div class="p-2 bg-red-900/30 rounded-lg border-l-4 border-red-500">
          <div class="text-xs font-semibold text-red-400 mb-1">✗ GET</div>
          <div class="text-sm font-medium">Basic Asset Allocation</div>
          <div class="text-xs text-gray-400 mt-1">Yearly TLH, missed opportunities</div>
        </div>
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
  }, 200)
})
</script>
