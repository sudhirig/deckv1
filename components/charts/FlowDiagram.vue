<script setup lang="ts">
interface Props {
  type: 'old' | 'new'
}

const props = defineProps<Props>()
</script>

<template>
  <div class="w-full p-4 rounded-lg" :class="type === 'old' ? 'bg-red-900/20 border-2 border-red-500/30' : 'bg-green-900/20 border-2 border-green-500/30'">
    <div v-if="type === 'old'" class="space-y-6">
      <div class="flex flex-col items-center gap-4">
        <div class="w-32 h-20 bg-blue-600/30 border-2 border-blue-500 rounded-lg flex items-center justify-center text-sm font-semibold transition-all duration-300 hover:scale-105">
          Investor
        </div>

        <svg width="40" height="40" class="animate-pulse">
          <line x1="20" y1="0" x2="20" y2="40" stroke="#ef4444" stroke-width="2" />
          <polygon points="20,40 15,30 25,30" fill="#ef4444" />
        </svg>

        <div class="w-40 h-24 bg-red-600/40 border-2 border-red-500 rounded-lg flex items-center justify-center text-sm font-semibold">
          Single Advisor
        </div>

        <div class="grid grid-cols-3 gap-2 mt-4">
          <div class="text-center">
            <div class="w-24 h-16 bg-red-900/40 border border-red-600 rounded flex items-center justify-center text-xs">
              Limited Analysis
            </div>
          </div>
          <div class="text-center">
            <div class="w-24 h-16 bg-red-900/40 border border-red-600 rounded flex items-center justify-center text-xs">
              Slow Response
            </div>
          </div>
          <div class="text-center">
            <div class="w-24 h-16 bg-red-900/40 border border-red-600 rounded flex items-center justify-center text-xs">
              Conflicts
            </div>
          </div>
        </div>
      </div>

      <div class="text-xs text-left mt-4 p-2 bg-red-900/20 rounded">
        <strong>Bottleneck:</strong> One person, business hours, commission-driven
      </div>
    </div>

    <div v-else class="space-y-6">
      <div class="flex flex-col items-center gap-4">
        <div class="w-32 h-20 bg-blue-600/30 border-2 border-blue-500 rounded-lg flex items-center justify-center text-sm font-semibold transition-all duration-300 hover:scale-105">
          Investor
        </div>

        <svg width="40" height="40" class="animate-pulse">
          <line x1="20" y1="0" x2="20" y2="40" stroke="#22c55e" stroke-width="2" />
          <polygon points="20,40 15,30 25,30" fill="#22c55e" />
        </svg>

        <div class="w-40 h-24 bg-purple-600/40 border-2 border-purple-500 rounded-lg flex items-center justify-center text-sm font-semibold">
          Orchestrator
        </div>

        <div class="flex gap-2 items-center justify-center">
          <svg width="200" height="40">
            <line x1="100" y1="0" x2="20" y2="40" stroke="#22c55e" stroke-width="1.5" />
            <line x1="100" y1="0" x2="60" y2="40" stroke="#22c55e" stroke-width="1.5" />
            <line x1="100" y1="0" x2="100" y2="40" stroke="#22c55e" stroke-width="1.5" />
            <line x1="100" y1="0" x2="140" y2="40" stroke="#22c55e" stroke-width="1.5" />
            <line x1="100" y1="0" x2="180" y2="40" stroke="#22c55e" stroke-width="1.5" />
          </svg>
        </div>

        <div class="grid grid-cols-5 gap-1 mt-4">
          <div class="w-20 h-14 bg-blue-900/40 border border-blue-500 rounded flex items-center justify-center text-xs">Risk</div>
          <div class="w-20 h-14 bg-orange-900/40 border border-orange-500 rounded flex items-center justify-center text-xs">Tax</div>
          <div class="w-20 h-14 bg-green-900/40 border border-green-500 rounded flex items-center justify-center text-xs">Portfolio</div>
          <div class="w-20 h-14 bg-purple-900/40 border border-purple-500 rounded flex items-center justify-center text-xs">Alts</div>
          <div class="w-20 h-14 bg-teal-900/40 border border-teal-500 rounded flex items-center justify-center text-xs">Research</div>
        </div>

        <svg width="200" height="40" class="mt-2">
          <line x1="20" y1="0" x2="100" y2="40" stroke="#22c55e" stroke-width="1.5" />
          <line x1="60" y1="0" x2="100" y2="40" stroke="#22c55e" stroke-width="1.5" />
          <line x1="100" y1="0" x2="100" y2="40" stroke="#22c55e" stroke-width="1.5" />
          <line x1="140" y1="0" x2="100" y2="40" stroke="#22c55e" stroke-width="1.5" />
          <line x1="180" y1="0" x2="100" y2="40" stroke="#22c55e" stroke-width="1.5" />
        </svg>

        <div class="w-40 h-20 bg-green-600/40 border-2 border-green-500 rounded-lg flex items-center justify-center text-sm font-semibold mt-2">
          Consensus
        </div>
      </div>

      <div class="text-xs text-left mt-4 p-2 bg-green-900/20 rounded">
        <strong>The Swarm:</strong> Collective intelligence, 24/7, infinitely scalable
      </div>
    </div>
  </div>
</template>
