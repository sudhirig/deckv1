<script setup lang="ts">
import { computed, watch, ref } from 'vue'

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

// Reactive value that updates when prop changes
const numericValue = computed(() => typeof props.value === 'number' ? props.value : 0)
const displayValue = ref<number | null>(null)
let animationFrameId: number | null = null

// Function to animate from current value to target
const animateToValue = (target: number) => {
  // Cancel any existing animation
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId)
  }
  
  const startValue = displayValue.value ?? 0
  const duration = 2000
  const delay = 100
  const startTime = Date.now()
  
  const animate = () => {
    const elapsed = Date.now() - startTime - delay
    if (elapsed < 0) {
      animationFrameId = requestAnimationFrame(animate)
      return
    }
    
    const progress = Math.min(elapsed / duration, 1)
    const easeOutQuart = 1 - Math.pow(1 - progress, 4)
    displayValue.value = Math.floor(startValue + (target - startValue) * easeOutQuart)
    
    if (progress < 1) {
      animationFrameId = requestAnimationFrame(animate)
    } else {
      displayValue.value = target
      animationFrameId = null
    }
  }
  
  setTimeout(() => {
    animationFrameId = requestAnimationFrame(animate)
  }, delay)
}

// Watch for prop changes and re-animate
watch([() => props.value, () => props.animate], ([newValue, newAnimate]) => {
  if (newAnimate && typeof newValue === 'number') {
    animateToValue(newValue)
  } else {
    // Cancel animation if disabled
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId)
      animationFrameId = null
    }
    displayValue.value = null
  }
}, { immediate: true })

const colorClasses = {
  teal: 'border-teal-500/50 bg-teal-900/20',
  blue: 'border-blue-500/50 bg-blue-900/20',
  green: 'border-green-500/50 bg-green-900/20',
  orange: 'border-orange-500/50 bg-orange-900/20',
  purple: 'border-purple-500/50 bg-purple-900/20',
  red: 'border-red-500/50 bg-red-900/20',
}

const gradientClasses = {
  teal: 'from-teal-400 to-cyan-400',
  blue: 'from-blue-400 to-cyan-400',
  green: 'from-green-400 to-emerald-400',
  orange: 'from-orange-400 to-amber-400',
  purple: 'from-purple-400 to-pink-400',
  red: 'from-red-400 to-orange-400',
}

const glowStyles = {
  teal: 'box-shadow: 0 0 30px rgba(20, 184, 166, 0.3);',
  blue: 'box-shadow: 0 0 30px rgba(59, 130, 246, 0.3);',
  green: 'box-shadow: 0 0 30px rgba(34, 197, 94, 0.3);',
  orange: 'box-shadow: 0 0 30px rgba(249, 115, 22, 0.3);',
  purple: 'box-shadow: 0 0 30px rgba(168, 85, 247, 0.3);',
  red: 'box-shadow: 0 0 30px rgba(239, 68, 68, 0.3);',
}

const gradientClass = computed(() => gradientClasses[props.color])
const glowStyle = computed(() => glowStyles[props.color])
</script>

<template>
  <div
    class="flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl card-modern glass-card"
    :class="colorClasses[color]"
    :style="glowStyle"
  >
    <div class="text-7xl font-bold mb-4 transition-all duration-500 bg-gradient-to-r bg-clip-text text-transparent"
         :class="gradientClass">
      <template v-if="displayValue !== null">
        {{ displayValue }}{{ suffix }}
      </template>
      <template v-else>
        {{ value }}{{ suffix }}
      </template>
    </div>
    <div class="text-lg font-medium text-center leading-relaxed text-gray-300" v-html="label"></div>
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
