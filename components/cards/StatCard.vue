<script setup lang="ts">
import { useAnimatedCounter } from '../shared/composables'

interface Props {
  value: string | number
  label: string
  color?: 'teal' | 'blue' | 'green' | 'orange' | 'purple' | 'red'
  animate?: boolean
  suffix?: string
}

const props = withDefaults(defineProps<Props>(), {
  color: 'teal',
  animate: false,
  suffix: '',
})

const numericValue = typeof props.value === 'number' ? props.value : 0
const displayValue = props.animate && typeof props.value === 'number'
  ? useAnimatedCounter(numericValue, 2000, 100)
  : null

const colorClasses = {
  teal: 'border-teal-500 bg-teal-900/20 text-teal-400',
  blue: 'border-blue-500 bg-blue-900/20 text-blue-400',
  green: 'border-green-500 bg-green-900/20 text-green-400',
  orange: 'border-orange-500 bg-orange-900/20 text-orange-400',
  purple: 'border-purple-500 bg-purple-900/20 text-purple-400',
  red: 'border-red-500 bg-red-900/20 text-red-400',
}
</script>

<template>
  <div
    class="flex flex-col items-center justify-center p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl"
    :class="colorClasses[color]"
  >
    <div class="text-7xl font-bold mb-4 transition-all duration-500">
      <template v-if="displayValue !== null">
        {{ displayValue }}{{ suffix }}
      </template>
      <template v-else>
        {{ value }}{{ suffix }}
      </template>
    </div>
    <div class="text-lg font-medium text-center leading-relaxed" v-html="label"></div>
  </div>
</template>

<style scoped>
@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(20, 184, 166, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(20, 184, 166, 0.5);
  }
}

.hover\:scale-105:hover {
  animation: pulse-glow 2s ease-in-out infinite;
}
</style>
