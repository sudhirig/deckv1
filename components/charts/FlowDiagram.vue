<script setup lang="ts">
interface Props {
  type: 'old' | 'new'
}

const props = defineProps<Props>()
</script>

<template>
  <div class="w-full p-3 rounded-lg" :class="type === 'old' ? 'bg-red-900/20 border-2 border-red-500/30' : 'bg-green-900/20 border-2 border-green-500/30'">
    <div v-if="type === 'old'" class="space-y-3">
      <div class="flex flex-col items-center gap-2">
        <div class="w-28 h-16 bg-blue-600/30 border-2 border-blue-500 rounded-lg flex items-center justify-center text-sm font-semibold transition-all duration-300 hover:scale-105">
          Investor
        </div>

        <svg width="30" height="25" class="animate-pulse">
          <line x1="15" y1="0" x2="15" y2="25" stroke="#ef4444" stroke-width="2" />
          <polygon points="15,25 10,18 20,18" fill="#ef4444" />
        </svg>

        <div class="w-36 h-18 bg-red-600/40 border-2 border-red-500 rounded-lg flex items-center justify-center text-sm font-semibold">
          Single Advisor
        </div>

        <div class="grid grid-cols-3 gap-2 mt-2">
          <div class="text-center">
            <div class="w-20 h-12 bg-red-900/40 border border-red-600 rounded flex items-center justify-center text-xs">
              Limited Analysis
            </div>
          </div>
          <div class="text-center">
            <div class="w-20 h-12 bg-red-900/40 border border-red-600 rounded flex items-center justify-center text-xs">
              Slow Response
            </div>
          </div>
          <div class="text-center">
            <div class="w-20 h-12 bg-red-900/40 border border-red-600 rounded flex items-center justify-center text-xs">
              Conflicts
            </div>
          </div>
        </div>
      </div>

      <div class="text-xs text-left mt-2 p-2 bg-red-900/20 rounded">
        <strong>Bottleneck:</strong> One person, business hours, commission-driven
      </div>
    </div>

    <div v-else class="space-y-3">
      <div class="flex flex-col items-center gap-2">
        <div class="w-28 h-16 bg-blue-600/30 border-2 border-blue-500 rounded-lg flex items-center justify-center text-sm font-semibold transition-all duration-300 hover:scale-105">
          Investor
        </div>

        <svg width="30" height="25" class="animate-pulse">
          <line x1="15" y1="0" x2="15" y2="25" stroke="#22c55e" stroke-width="2" />
          <polygon points="15,25 10,18 20,18" fill="#22c55e" />
        </svg>

        <div class="w-36 h-18 bg-purple-600/40 border-2 border-purple-500 rounded-lg flex items-center justify-center text-sm font-semibold">
          Orchestrator
        </div>

        <div class="flex gap-2 items-center justify-center">
          <svg width="180" height="30">
            <line x1="90" y1="0" x2="18" y2="30" stroke="#22c55e" stroke-width="1.5" />
            <line x1="90" y1="0" x2="54" y2="30" stroke="#22c55e" stroke-width="1.5" />
            <line x1="90" y1="0" x2="90" y2="30" stroke="#22c55e" stroke-width="1.5" />
            <line x1="90" y1="0" x2="126" y2="30" stroke="#22c55e" stroke-width="1.5" />
            <line x1="90" y1="0" x2="162" y2="30" stroke="#22c55e" stroke-width="1.5" />
          </svg>
        </div>

        <div class="grid grid-cols-5 gap-1 mt-1">
          <div class="w-16 h-11 bg-blue-900/40 border border-blue-500 rounded flex items-center justify-center text-xs">Risk</div>
          <div class="w-16 h-11 bg-orange-900/40 border border-orange-500 rounded flex items-center justify-center text-xs">Tax</div>
          <div class="w-16 h-11 bg-green-900/40 border border-green-500 rounded flex items-center justify-center text-xs">Portfolio</div>
          <div class="w-16 h-11 bg-purple-900/40 border border-purple-500 rounded flex items-center justify-center text-xs">Alts</div>
          <div class="w-16 h-11 bg-teal-900/40 border border-teal-500 rounded flex items-center justify-center text-xs">Research</div>
        </div>

        <svg width="180" height="30" class="mt-1">
          <line x1="18" y1="0" x2="90" y2="30" stroke="#22c55e" stroke-width="1.5" />
          <line x1="54" y1="0" x2="90" y2="30" stroke="#22c55e" stroke-width="1.5" />
          <line x1="90" y1="0" x2="90" y2="30" stroke="#22c55e" stroke-width="1.5" />
          <line x1="126" y1="0" x2="90" y2="30" stroke="#22c55e" stroke-width="1.5" />
          <line x1="162" y1="0" x2="90" y2="30" stroke="#22c55e" stroke-width="1.5" />
        </svg>

        <div class="w-36 h-16 bg-green-600/40 border-2 border-green-500 rounded-lg flex items-center justify-center text-sm font-semibold mt-1">
          Consensus
        </div>
      </div>

      <div class="text-xs text-left mt-2 p-2 bg-green-900/20 rounded">
        <strong>The Swarm:</strong> Collective intelligence, 24/7, infinitely scalable
      </div>
    </div>
  </div>
</template>
