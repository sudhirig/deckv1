<script setup lang="ts">
interface Props {
  icon: string
  title: string
  wantLabel?: string
  wantText: string
  getLabel?: string
  getText: string
  color?: 'blue' | 'green' | 'teal' | 'purple' | 'orange'
}

const props = withDefaults(defineProps<Props>(), {
  wantLabel: '✓ Want',
  getLabel: '✗ Get',
  color: 'blue',
})

const colorClasses = {
  blue: 'border-blue-500 bg-blue-900/20',
  green: 'border-green-500 bg-green-900/20',
  teal: 'border-teal-500 bg-teal-900/20',
  purple: 'border-purple-500 bg-purple-900/20',
  orange: 'border-orange-500 bg-orange-900/20',
}

const titleColor = {
  blue: 'text-blue-400',
  green: 'text-green-400',
  teal: 'text-teal-400',
  purple: 'text-purple-400',
  orange: 'text-orange-400',
}
</script>

<template>
  <div
    class="border-2 p-4 rounded-xl flex flex-col transition-all duration-300 hover:scale-[1.02]"
    :class="colorClasses[color]"
  >
    <div class="text-center mb-4">
      <div class="text-5xl mb-3">{{ icon }}</div>
      <div class="text-2xl font-bold" :class="titleColor[color]">{{ title }}</div>
    </div>

    <div class="space-y-4 text-base flex-1">
      <div class="bg-green-900/30 p-4 rounded-lg transition-all duration-300 hover:bg-green-900/40">
        <div class="font-bold text-green-400 mb-2">{{ wantLabel }}</div>
        <div>{{ wantText }}</div>
      </div>

      <div class="bg-red-900/30 p-4 rounded-lg transition-all duration-300 hover:bg-red-900/40">
        <div class="font-bold text-red-400 mb-2">{{ getLabel }}</div>
        <div>{{ getText }}</div>
      </div>
    </div>
  </div>
</template>
