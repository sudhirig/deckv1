<script setup lang="ts">
interface Props {
  name: string
  role: string
  experience?: string
  background?: string
  color?: 'teal' | 'blue' | 'purple' | 'green'
}

const props = withDefaults(defineProps<Props>(), {
  color: 'teal',
})

const colorClasses = {
  teal: 'border-teal-500 bg-teal-900/20',
  blue: 'border-blue-500 bg-blue-900/20',
  purple: 'border-purple-500 bg-purple-900/20',
  green: 'border-green-500 bg-green-900/20',
}
</script>

<template>
  <div
    class="p-3 border-2 rounded-lg transition-all duration-300 hover:scale-[1.02]"
    :class="colorClasses[color]"
  >
    <div class="text-sm font-bold mb-1">{{ name }}</div>
    <div class="text-xs mb-2">{{ role }}</div>

    <div v-if="experience" class="text-xs mt-2">{{ experience }}</div>

    <div v-if="background" class="text-xs mt-1 opacity-80">{{ background }}</div>

    <slot></slot>
  </div>
</template>
