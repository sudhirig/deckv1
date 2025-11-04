<template>
  <div class="p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border-2 border-teal-500/30">
    <div class="text-2xl font-bold mb-6 text-center">
      We Create <span class="text-green-400">10x More Value</span> Than We Charge
    </div>

    <!-- Portfolio Size Input -->
    <div class="mb-6">
      <label class="block text-sm font-semibold mb-2 text-gray-300">
        Portfolio Size: <span class="text-teal-400">${{ portfolioSize.toFixed(1) }}M</span>
      </label>
      <input
        type="range"
        v-model.number="portfolioSize"
        min="1"
        max="50"
        step="0.5"
        class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
      />
    </div>

    <!-- Value Created -->
    <div class="grid grid-cols-3 gap-4 mb-6">
      <div class="p-4 bg-green-900/30 rounded-lg border border-green-500/30">
        <div class="text-xs text-gray-400 mb-1">Tax Alpha (1.8%)</div>
        <div class="text-2xl font-bold text-green-400">
          ${{ taxAlpha.toFixed(0) }}K
        </div>
      </div>
      <div class="p-4 bg-blue-900/30 rounded-lg border border-blue-500/30">
        <div class="text-xs text-gray-400 mb-1">Alt Access (1.5%)</div>
        <div class="text-2xl font-bold text-blue-400">
          ${{ altAccess.toFixed(0) }}K
        </div>
      </div>
      <div class="p-4 bg-purple-900/30 rounded-lg border border-purple-500/30">
        <div class="text-xs text-gray-400 mb-1">India Gateway (2.7%)</div>
        <div class="text-2xl font-bold text-purple-400">
          ${{ indiaGateway.toFixed(0) }}K
        </div>
      </div>
    </div>

    <!-- Total Value -->
    <div class="mb-6 p-6 bg-gradient-to-r from-green-900/40 to-emerald-900/40 rounded-lg border-2 border-green-500/50">
      <div class="text-center">
        <div class="text-sm text-gray-400 mb-2">Total Annual Value Created</div>
        <div class="text-5xl font-bold text-green-400 mb-2">
          ${{ totalValue.toFixed(0) }}K
        </div>
        <div class="text-xs text-green-300">= 6% Additional Annual Return</div>
      </div>
    </div>

    <!-- Our Fee -->
    <div class="mb-6 p-4 bg-gray-800/50 rounded-lg border border-gray-600">
      <div class="text-center">
        <div class="text-sm text-gray-400 mb-2">Our Annual Fee (0.75% AUM)</div>
        <div class="text-3xl font-bold text-gray-300">
          ${{ ourFee.toFixed(0) }}K
        </div>
      </div>
    </div>

    <!-- ROI -->
    <div class="p-6 bg-gradient-to-r from-teal-900/40 to-blue-900/40 rounded-lg border-2 border-teal-500/50">
      <div class="text-center">
        <div class="text-sm text-gray-400 mb-2">Your Return on Investment</div>
        <div class="text-6xl font-bold bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
          {{ roi }}x
        </div>
        <div class="text-sm text-teal-300 mt-2">Value vs Cost</div>
      </div>
    </div>

    <!-- Bottom Note -->
    <div class="mt-4 text-center text-xs text-gray-500">
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
  background: #14b8a6;
  cursor: pointer;
  border-radius: 50%;
}

.slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background: #14b8a6;
  cursor: pointer;
  border-radius: 50%;
  border: none;
}
</style>
