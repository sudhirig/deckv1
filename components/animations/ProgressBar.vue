<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Props {
  percentage: number
  color?: 'teal' | 'blue' | 'green' | 'orange' | 'purple'
  height?: number
  showLabel?: boolean
  animate?: boolean
  delay?: number
}

const props = withDefaults(defineProps<Props>(), {
  color: 'teal',
  height: 8,
  showLabel: true,
  animate: true,
  delay: 0,
})

const currentPercentage = ref(0)

const colorClasses = {
  teal: 'bg-gradient-to-r from-teal-600 to-teal-400',
  blue: 'bg-gradient-to-r from-blue-600 to-blue-400',
  green: 'bg-gradient-to-r from-green-600 to-green-400',
  orange: 'bg-gradient-to-r from-orange-600 to-orange-400',
  purple: 'bg-gradient-to-r from-purple-600 to-purple-400',
}

onMounted(() => {
  if (props.animate) {
    setTimeout(() => {
      currentPercentage.value = props.percentage
    }, props.delay)
  } else {
    currentPercentage.value = props.percentage
  }
})
</script>

<template>
  <div class="w-full">
    <div
      class="w-full bg-gray-800 rounded-full overflow-hidden"
      :style="{ height: height + 'px' }"
    >
      <div
        class="h-full transition-all duration-1000 ease-out"
        :class="colorClasses[color]"
        :style="{ width: currentPercentage + '%' }"
      >
        <div class="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
      </div>
    </div>
    <div v-if="showLabel" class="text-xs mt-1 text-gray-400">
      {{ percentage }}%
    </div>
  </div>
</template>

<style scoped>
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}
</style>
