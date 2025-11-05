<template>
  <div class="relative w-full h-full flex items-center justify-center pt-4">
    <div class="w-full max-w-4xl px-8">
      <!-- Title -->
      <div class="text-center mb-12">
        <div class="text-3xl font-bold mb-3">
          AI Beats 93% of Human Fund Managers by <span class="text-green-400">600%</span>
        </div>
        <div class="flex items-center justify-center gap-3 text-sm text-gray-400">
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span class="font-semibold">Stanford University Study, 2024</span>
          </div>
        </div>
      </div>

      <!-- Chart -->
      <div class="grid grid-cols-2 gap-12 mb-8">
        <!-- Human Performance -->
        <div class="text-center">
          <div class="text-base font-semibold mb-6 text-red-300">Traditional Fund Managers</div>
          <div class="relative h-80 flex items-end justify-center pt-16">
            <div
              class="w-40 bg-gradient-to-t from-red-600 to-red-400 rounded-t-lg relative transform transition-all duration-1000"
              :style="{ height: animated ? '25%' : '0%' }"
            >
              <div class="absolute -top-16 left-0 right-0 text-center">
                <div class="text-4xl font-bold text-red-400 mb-1">100%</div>
                <div class="text-sm text-gray-400">Baseline</div>
              </div>
            </div>
          </div>
          <div class="mt-6 text-base text-gray-400">
            93% Underperform
          </div>
        </div>

        <!-- AI Performance -->
        <div class="text-center">
          <div class="text-base font-semibold mb-6 text-green-300">AI Portfolio Optimization</div>
          <div class="relative h-80 flex items-end justify-center pt-16">
            <div
              class="w-40 bg-gradient-to-t from-green-600 to-green-400 rounded-t-lg relative transform transition-all duration-1000 delay-300"
              :style="{ height: animated ? '100%' : '0%' }"
            >
              <div class="absolute -top-16 left-0 right-0 text-center">
                <div class="text-4xl font-bold text-green-400 mb-1">600%</div>
                <div class="text-sm text-gray-400">Outperformance</div>
              </div>
              <div class="absolute inset-0 bg-green-400/20 rounded-t-lg animate-pulse"></div>
            </div>
          </div>
          <div class="mt-6 text-base text-gray-400">
            Top 7% Performance
          </div>
        </div>
      </div>

      <!-- Key Insight -->
      <div class="mt-10 p-4 bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-lg border border-blue-500/30">
        <div class="text-center text-base">
          <span class="text-blue-300 font-semibold">The race is on to deploy this power.</span>
          <span class="text-white ml-2">We are winning.</span>
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
  }, 300)
})
</script>
