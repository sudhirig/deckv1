<script setup lang="ts">
interface Props {
  type: 'old' | 'new'
}

const props = defineProps<Props>()
</script>

<template>
  <div class="w-full p-2 rounded-lg max-h-full overflow-hidden" :class="type === 'old' ? 'bg-red-900/20 border-2 border-red-500/30' : 'bg-white/10 border-2 border-white/30'">
    <div v-if="type === 'old'" class="space-y-1.5">
      <div class="flex flex-col items-center gap-1">
        <div class="w-24 h-12 bg-blue-600/30 border-2 border-blue-500 rounded-lg flex items-center justify-center text-xs font-semibold transition-all duration-300 hover:scale-105">
          Investor
        </div>

        <svg width="20" height="18" class="animate-pulse">
          <line x1="10" y1="0" x2="10" y2="18" stroke="#ef4444" stroke-width="2" />
          <polygon points="10,18 6,12 14,12" fill="#ef4444" />
        </svg>

        <div class="w-32 h-14 bg-red-600/40 border-2 border-red-500 rounded-lg flex items-center justify-center text-xs font-semibold">
          Single Advisor
        </div>

        <div class="grid grid-cols-3 gap-1.5 mt-1">
          <div class="text-center">
            <div class="w-16 h-10 bg-red-900/40 border border-red-600 rounded flex items-center justify-center text-[10px] leading-tight">
              Limited Analysis
            </div>
          </div>
          <div class="text-center">
            <div class="w-16 h-10 bg-red-900/40 border border-red-600 rounded flex items-center justify-center text-[10px] leading-tight">
              Slow Response
            </div>
          </div>
          <div class="text-center">
            <div class="w-16 h-10 bg-red-900/40 border border-red-600 rounded flex items-center justify-center text-[10px] leading-tight">
              Conflicts
            </div>
          </div>
        </div>
      </div>

      <div class="text-[10px] text-left mt-1 p-1.5 bg-red-900/20 rounded">
        <strong>Bottleneck:</strong> One person, business hours, commission-driven
      </div>
    </div>

    <div v-else class="space-y-1.5">
      <div class="flex flex-col items-center gap-1">
        <div class="w-24 h-12 bg-blue-600/30 border-2 border-blue-500 rounded-lg flex items-center justify-center text-xs font-semibold transition-all duration-300 hover:scale-105">
          Investor
        </div>

        <svg width="20" height="18" class="animate-pulse">
          <line x1="10" y1="0" x2="10" y2="18" stroke="#ffffff" stroke-width="2" />
          <polygon points="10,18 6,12 14,12" fill="#ffffff" />
        </svg>

        <div class="w-32 h-14 bg-purple-600/40 border-2 border-purple-500 rounded-lg flex items-center justify-center text-xs font-semibold">
          Orchestrator
        </div>

        <div class="flex gap-1 items-center justify-center">
          <svg width="140" height="22">
            <line x1="70" y1="0" x2="14" y2="22" stroke="#ffffff" stroke-width="1.2" />
            <line x1="70" y1="0" x2="42" y2="22" stroke="#ffffff" stroke-width="1.2" />
            <line x1="70" y1="0" x2="70" y2="22" stroke="#ffffff" stroke-width="1.2" />
            <line x1="70" y1="0" x2="98" y2="22" stroke="#ffffff" stroke-width="1.2" />
            <line x1="70" y1="0" x2="126" y2="22" stroke="#ffffff" stroke-width="1.2" />
          </svg>
        </div>

        <div class="grid grid-cols-5 gap-1 mt-0.5">
          <div class="w-12 h-8 bg-blue-900/40 border border-blue-500 rounded flex items-center justify-center text-[10px]">Risk</div>
          <div class="w-12 h-8 bg-orange-900/40 border border-orange-500 rounded flex items-center justify-center text-[10px]">Tax</div>
          <div class="w-12 h-8 bg-white/10 border border-white/30 rounded flex items-center justify-center text-[10px]">Portfolio</div>
          <div class="w-12 h-8 bg-purple-900/40 border border-purple-500 rounded flex items-center justify-center text-[10px]">Alts</div>
          <div class="w-12 h-8 bg-white/10 border border-white/30 rounded flex items-center justify-center text-[10px]">Research</div>
        </div>

        <svg width="140" height="22" class="mt-0.5">
          <line x1="14" y1="0" x2="70" y2="22" stroke="#ffffff" stroke-width="1.2" />
          <line x1="42" y1="0" x2="70" y2="22" stroke="#ffffff" stroke-width="1.2" />
          <line x1="70" y1="0" x2="70" y2="22" stroke="#ffffff" stroke-width="1.2" />
          <line x1="98" y1="0" x2="70" y2="22" stroke="#ffffff" stroke-width="1.2" />
          <line x1="126" y1="0" x2="70" y2="22" stroke="#ffffff" stroke-width="1.2" />
        </svg>

        <div class="w-32 h-12 bg-white/10 border-2 border-white/30 rounded-lg flex items-center justify-center text-xs font-semibold mt-0.5">
          Consensus
        </div>
      </div>

      <div class="text-[10px] text-left mt-1 p-1.5 bg-white/10 rounded">
        <strong>The Swarm:</strong> Collective intelligence, 24/7, infinitely scalable
      </div>
    </div>
  </div>
</template>
