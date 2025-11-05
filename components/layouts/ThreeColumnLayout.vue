<script setup lang="ts">
interface Props {
  gap?: number
}

const props = withDefaults(defineProps<Props>(), {
  gap: 4,
})
</script>

<template>
  <div class="grid grid-cols-3 max-h-[68vh] overflow-hidden" :class="`gap-${gap}`">
    <slot></slot>
  </div>
</template>
