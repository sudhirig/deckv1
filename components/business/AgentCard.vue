<script setup lang="ts">
interface Props {
  title: string
  icon: string
  color?: 'teal' | 'blue' | 'green' | 'orange' | 'purple'
  problem?: string
  solution?: string
}

const props = withDefaults(defineProps<Props>(), {
  color: 'teal',
})

const colorClasses = {
  teal: 'border-teal-500 bg-teal-900/20',
  blue: 'border-blue-500 bg-blue-900/20',
  green: 'border-green-500 bg-green-900/20',
  orange: 'border-orange-500 bg-orange-900/20',
  purple: 'border-purple-500 bg-purple-900/20',
}
</script>

<template>
  <div
    class="border-2 p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
    :class="colorClasses[color]"
  >
    <div class="text-xl font-semibold mb-4 flex items-center gap-2">
      <span class="text-2xl">{{ icon }}</span>
      <span>{{ title }}</span>
    </div>

    <div class="text-base space-y-4">
      <div v-if="problem">
        <span class="font-semibold">Problem:</span> {{ problem }}
      </div>

      <slot></slot>

      <div v-if="solution" class="mt-4 p-3 bg-green-900/30 rounded-lg border border-green-500/40">
        <strong>Solution:</strong> {{ solution }}
      </div>
    </div>
  </div>
</template>
