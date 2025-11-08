<template>
  <div class="p-1 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-white/20 max-h-full overflow-hidden flex flex-col">

    <!-- Portfolio Size Input -->
    <div class="mb-1">
      <label class="block text-[8px] font-semibold mb-0.5 text-gray-300">
        Portfolio Size: <span class="text-white">${{ portfolioSize.toFixed(1) }}M</span>
      </label>
      <input
        type="range"
        v-model.number="portfolioSize"
        min="1"
        max="50"
        step="0.5"
        class="w-full h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
      />
    </div>

    <!-- Value Created -->
    <div class="grid grid-cols-3 gap-1 mb-1">
      <div class="p-0.5 bg-white/10 rounded-lg border border-white/30">
        <div class="text-[7px] text-gray-400 mb-0.5">Tax Alpha (1.8%)</div>
        <div class="text-xs font-bold text-white">
          ${{ taxAlpha.toFixed(0) }}K
        </div>
      </div>
      <div class="p-0.5 bg-blue-900/30 rounded-lg border border-blue-500/30">
        <div class="text-[7px] text-gray-400 mb-0.5">Alt Access (1.5%)</div>
        <div class="text-xs font-bold text-blue-400">
          ${{ altAccess.toFixed(0) }}K
        </div>
      </div>
      <div class="p-0.5 bg-purple-900/30 rounded-lg border border-purple-500/30">
        <div class="text-[7px] text-gray-400 mb-0.5">India Gateway (2.7%)</div>
        <div class="text-xs font-bold text-purple-400">
          ${{ indiaGateway.toFixed(0) }}K
        </div>
      </div>
    </div>

    <!-- Total Value -->
    <div class="mb-1 p-1 bg-gradient-to-r from-white/10 to-white/20 rounded-lg border border-white/30">
      <div class="text-center">
        <div class="text-[8px] text-gray-400 mb-0.5">Total Annual Value Created</div>
        <div class="text-lg font-bold text-white mb-0.5">
          ${{ totalValue.toFixed(0) }}K
        </div>
        <div class="text-[7px] text-gray-300">= 6% Additional Annual Return</div>
      </div>
    </div>

    <!-- Our Fee -->
    <div class="mb-1 p-0.5 bg-gray-800/50 rounded-lg border border-gray-600">
      <div class="text-center">
        <div class="text-[8px] text-gray-400 mb-0.5">Our Annual Fee (0.75% AUM)</div>
        <div class="text-base font-bold text-gray-300">
          ${{ ourFee.toFixed(0) }}K
        </div>
      </div>
    </div>

    <!-- ROI -->
    <div class="mb-0.5 p-1 bg-gradient-to-r from-white/10 to-white/20 rounded-lg border border-white/30">
      <div class="text-center">
        <div class="text-[8px] text-gray-400 mb-0.5">Your Return on Investment</div>
        <div class="text-xl font-bold text-white">
          {{ roi }}x
        </div>
        <div class="text-[7px] text-gray-300 mt-0.5">Value vs Cost</div>
      </div>
    </div>

    <!-- Bottom Note -->
    <div class="mt-0 text-center text-[7px] text-gray-500 leading-tight">
      Traditional advisors: 1% fee, 0-1% alpha = 0-1x ROI
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const portfolioSize = ref(10)

const taxAlpha = computed(() => portfolioSize.value * 1000 * 0.018)
const altAccess = computed(() => portfolioSize.value * 1000 * 0.015)
const indiaGateway = computed(() => portfolioSize.value * 1000 * 0.027)
const totalValue = computed(() => taxAlpha.value + altAccess.value + indiaGateway.value)
const ourFee = computed(() => portfolioSize.value * 1000 * 0.0075)
const roi = computed(() => Math.round(totalValue.value / ourFee.value * 10) / 10)
</script>

<style scoped>
.slider::-webkit-slider-thumb {
  appearance: none;
  width: 20px;
  height: 20px;
  background: #ffffff;
  cursor: pointer;
  border-radius: 50%;
}

.slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background: #ffffff;
  cursor: pointer;
  border-radius: 50%;
  border: none;
}
</style>
