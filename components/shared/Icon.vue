<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  name: string
  size?: number | string
  color?: string
  class?: string
  variant?: 'default' | 'minimal' | 'glass'
}

const props = withDefaults(defineProps<Props>(), {
  size: 24,
  color: 'currentColor',
  variant: 'glass',
})

// Map emoji/names to Lucide icon names
const iconMap: Record<string, string> = {
  'lock': 'lock',
  'shield': 'shield',
  'scale': 'scale',
  'check': 'check',
  'checkmark': 'check',
  'arrow-right': 'arrow-right',
  'security': 'lock',
  'protection': 'shield',
  'balance': 'scale',
}

// Get icon name from map or use directly
const iconName = computed(() => iconMap[props.name.toLowerCase()] || props.name)

const sizeStyle = computed(() => {
  if (typeof props.size === 'number') {
    return {
      width: `${props.size}px`,
      height: `${props.size}px`,
      fontSize: `${props.size}px`,
    }
  }
  return {
    fontSize: props.size,
  }
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'minimal':
      return ''
    case 'glass':
      return 'bg-white/5 backdrop-blur-sm border border-white/10 p-2 rounded-lg'
    default:
      return 'bg-white/5 backdrop-blur-sm border border-white/10 p-2 rounded-lg'
  }
})
</script>

<template>
  <div 
    v-if="variant === 'glass'"
    class="inline-flex items-center justify-center transition-all duration-300 hover:bg-white/10 hover:border-white/20"
    :class="[variantClasses, props.class]"
  >
    <i 
      :class="`i-lucide:${iconName}`"
      :style="{ color: color, fontSize: typeof size === 'number' ? `${size}px` : size }"
      class="flex-shrink-0"
    />
  </div>
  <i 
    v-else
    :class="`i-lucide:${iconName}`"
    :style="{ color: color, ...sizeStyle }"
    class="inline-block flex-shrink-0"
  />
</template>

