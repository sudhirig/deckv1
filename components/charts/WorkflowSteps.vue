<script setup lang="ts">
interface Step {
  emoji: string
  title: string
  description: string
  color: string
}

interface Props {
  steps?: Step[]
}

const props = defineProps<Props>()

const displaySteps = props.steps || [
  {
    emoji: '1️⃣',
    title: 'User Input',
    description: '"$10M event. Invest for growth, minimize taxes, get private credit"',
    color: 'blue',
  },
  {
    emoji: '2️⃣',
    title: 'Orchestration',
    description: 'Activates: Tax, Alts, Portfolio',
    color: 'purple',
  },
  {
    emoji: '3️⃣',
    title: 'Analysis',
    description: 'Tax: TLH\nAlts: 3 PC funds\nPortfolio: Core',
    color: 'green',
  },
  {
    emoji: '4️⃣',
    title: 'Consensus',
    description: 'Debate & validate\nSynthesize plan',
    color: 'teal',
  },
  {
    emoji: '5️⃣',
    title: 'Presentation',
    description: '"60% public, 20% PC, 20% munis, harvest $50K"',
    color: 'orange',
  },
  {
    emoji: '6️⃣',
    title: 'Execution',
    description: 'Approve → Execute → Monitor',
    color: 'pink',
  },
]

const colorClasses: Record<string, string> = {
  blue: 'border-blue-500 bg-blue-900/20',
  purple: 'border-purple-500 bg-purple-900/20',
  green: 'border-green-500 bg-green-900/20',
  teal: 'border-teal-500 bg-teal-900/20',
  orange: 'border-orange-500 bg-orange-900/20',
  pink: 'border-pink-500 bg-pink-900/20',
}
</script>

<template>
  <div class="grid grid-cols-3 gap-3 max-h-[75vh] overflow-hidden">
    <div
      v-for="(step, index) in displaySteps"
      :key="index"
      class="p-3 border-2 rounded-lg transition-all duration-500 hover:scale-105"
      :class="colorClasses[step.color]"
      :style="{ animationDelay: `${index * 0.1}s` }"
    >
      <div class="text-base mb-2 text-center animate-bounce" :style="{ animationDelay: `${index * 0.2}s` }">
        {{ step.emoji }}
      </div>
      <strong class="text-xs block mb-2">{{ step.title }}</strong>
      <div class="text-xs mt-1 whitespace-pre-line">
        {{ step.description }}
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

div[class*="border-2"] {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}
</style>
