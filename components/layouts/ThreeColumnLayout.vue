<script setup lang="ts">
interface Props {
  gap?: number
}

const props = withDefaults(defineProps<Props>(), {
  gap: 6,
})
</script>

<template>
  <div class="grid grid-cols-3 max-h-[75vh] overflow-hidden" :class="`gap-${gap}`">
    <slot></slot>
  </div>
</template>
