<script setup lang="ts">
interface Props {
  emoji: string
  title: string
  color: 'red' | 'blue' | 'green'
  name?: string
  metric?: string
  metricLabel?: string
  description?: string
  quote?: string
}

const props = defineProps<Props>()

const colorClasses = {
  red: 'border-red-500 bg-red-900/20 text-red-400',
  blue: 'border-blue-500 bg-blue-900/20 text-blue-400',
  green: 'border-green-500 bg-green-900/20 text-green-400',
}

const bgColorClasses = {
  red: 'bg-red-900/40',
  blue: 'bg-blue-900/30',
  green: 'bg-green-900/40',
}
</script>

<template>
  <div
    class="p-3 border-2 rounded-xl flex flex-col transition-all duration-300 hover:scale-[1.02]"
    :class="colorClasses[color]"
  >
    <div class="text-center mb-3">
      <div class="text-3xl mb-1">{{ emoji }}</div>
      <div class="text-lg font-bold" :class="`text-${color}-400`">{{ title }}</div>
    </div>

    <div class="text-sm space-y-2 flex-1">
      <div v-if="name" class="font-semibold">{{ name }}</div>

      <div v-if="metric" class="text-2xl font-bold my-2" :class="`text-${color}-400`">
        {{ metric }}
      </div>

      <div v-if="metricLabel">{{ metricLabel }}</div>

      <div v-if="description" class="mt-2 p-2 rounded" :class="bgColorClasses[color]">
        {{ description }}
      </div>

      <slot></slot>

      <div v-if="quote" class="mt-2 p-2 rounded italic text-xs" :class="bgColorClasses[color]">
        {{ quote }}
      </div>
    </div>
  </div>
</template>
