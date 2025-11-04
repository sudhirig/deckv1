<script setup lang="ts">
interface Props {
  title?: string
  color?: 'teal' | 'blue' | 'green' | 'orange' | 'purple' | 'red' | 'yellow'
  variant?: 'solid' | 'gradient' | 'border'
  icon?: string
}

const props = withDefaults(defineProps<Props>(), {
  color: 'teal',
  variant: 'border',
})

const colorClasses = {
  teal: {
    solid: 'bg-teal-900/40 border-teal-500/50',
    gradient: 'bg-gradient-to-r from-teal-900/40 to-blue-900/40 border-teal-500/30',
    border: 'border-l-4 border-teal-500 bg-teal-900/20',
  },
  blue: {
    solid: 'bg-blue-900/40 border-blue-500/50',
    gradient: 'bg-gradient-to-r from-blue-900/40 to-purple-900/40 border-blue-500/30',
    border: 'border-l-4 border-blue-500 bg-blue-900/20',
  },
  green: {
    solid: 'bg-green-900/40 border-green-500/50',
    gradient: 'bg-gradient-to-r from-green-900/40 to-emerald-900/40 border-green-500/30',
    border: 'border-l-4 border-green-500 bg-green-900/20',
  },
  orange: {
    solid: 'bg-orange-900/40 border-orange-500/50',
    gradient: 'bg-gradient-to-r from-orange-900/40 to-yellow-900/40 border-orange-500/30',
    border: 'border-l-4 border-orange-500 bg-orange-900/20',
  },
  purple: {
    solid: 'bg-purple-900/40 border-purple-500/50',
    gradient: 'bg-gradient-to-r from-purple-900/40 to-pink-900/40 border-purple-500/30',
    border: 'border-l-4 border-purple-500 bg-purple-900/20',
  },
  red: {
    solid: 'bg-red-900/40 border-red-500/50',
    gradient: 'bg-gradient-to-r from-red-900/40 to-orange-900/40 border-red-500/30',
    border: 'border-l-4 border-red-500 bg-red-900/20',
  },
  yellow: {
    solid: 'bg-yellow-900/40 border-yellow-500/50',
    gradient: 'bg-gradient-to-r from-yellow-900/40 to-amber-900/40 border-yellow-500/30',
    border: 'border-l-4 border-yellow-500 bg-yellow-900/20',
  },
}
</script>

<template>
  <div
    class="p-3 rounded-lg text-sm transition-all duration-300 hover:scale-[1.01]"
    :class="variant === 'border' ? colorClasses[color].border : (variant === 'gradient' ? `${colorClasses[color].gradient} border-2` : `${colorClasses[color].solid} border-2`)"
  >
    <div v-if="title || icon" class="font-bold mb-2 flex items-center gap-2">
      <span v-if="icon" class="text-xl">{{ icon }}</span>
      <span v-if="title">{{ title }}</span>
    </div>
    <slot></slot>
  </div>
</template>
