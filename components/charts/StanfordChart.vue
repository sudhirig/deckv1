<template>
  <div class="w-full h-full flex flex-col items-center justify-center py-4 px-12">
    <!-- Subtitle -->
    <div class="text-center mb-6">
      <div class="text-2xl font-bold mb-2">
        AI Beats 93% of Human Fund Managers by <span class="text-green-400">600%</span>
      </div>
      <div class="flex items-center justify-center gap-2 text-xs text-gray-400">
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <span class="font-semibold">Stanford University Study, 2024</span>
      </div>
    </div>

    <!-- Chart Area -->
    <div class="w-full max-w-5xl">
      <div class="grid grid-cols-2 gap-16">

        <!-- Traditional Fund Managers (Left) -->
        <div class="flex flex-col items-center">
          <div class="text-base font-semibold mb-8 text-red-300">Traditional Fund Managers</div>

          <!-- Bar Chart Container -->
          <div class="relative w-full" style="height: 280px;">
            <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
              <!-- Label Above Bar -->
              <div class="mb-4 text-center">
                <div class="text-3xl font-bold text-red-400">100%</div>
                <div class="text-xs text-gray-500">Baseline</div>
              </div>

              <!-- Bar -->
              <div
                class="w-32 bg-gradient-to-t from-red-600 to-red-400 rounded-t-lg transition-all duration-1000"
                :style="{ height: animated ? '70px' : '0px' }"
              ></div>
            </div>
          </div>

          <div class="mt-4 text-sm text-gray-400">93% Underperform</div>
        </div>

        <!-- AI Portfolio Optimization (Right) -->
        <div class="flex flex-col items-center">
          <div class="text-base font-semibold mb-8 text-green-300">AI Portfolio Optimization</div>

          <!-- Bar Chart Container -->
          <div class="relative w-full" style="height: 280px;">
            <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
              <!-- Label Above Bar -->
              <div class="mb-4 text-center">
                <div class="text-3xl font-bold text-green-400">600%</div>
                <div class="text-xs text-gray-500">Outperformance</div>
              </div>

              <!-- Bar -->
              <div
                class="w-32 bg-gradient-to-t from-green-600 to-green-400 rounded-t-lg transition-all duration-1000 delay-300 relative"
                :style="{ height: animated ? '210px' : '0px' }"
              >
                <div class="absolute inset-0 bg-green-400/20 rounded-t-lg animate-pulse"></div>
              </div>
            </div>
          </div>

          <div class="mt-4 text-sm text-gray-400">Top 7% Performance</div>
        </div>

      </div>
    </div>

    <!-- Key Insight -->
    <div class="mt-8 w-full max-w-4xl">
      <div class="p-4 bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-lg border border-blue-500/30">
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
