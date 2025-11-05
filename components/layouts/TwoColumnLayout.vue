<script setup lang="ts">
interface Props {
  gap?: number
  splitRatio?: '1-1' | '1-2' | '2-1'
}

const props = withDefaults(defineProps<Props>(), {
  gap: 4,
  splitRatio: '1-1',
})

const gridClasses = {
  '1-1': 'grid-cols-2',
  '1-2': 'grid-cols-[1fr_2fr]',
  '2-1': 'grid-cols-[2fr_1fr]',
}
</script>

<template>
  <div class="grid max-h-[68vh] overflow-hidden" :class="[gridClasses[splitRatio], `gap-${gap}`]">
    <slot></slot>
  </div>
</template>
