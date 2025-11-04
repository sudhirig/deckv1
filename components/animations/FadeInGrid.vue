<script setup lang="ts">
interface Props {
  cols?: number
  gap?: number
  staggerDelay?: number
}

const props = withDefaults(defineProps<Props>(), {
  cols: 3,
  gap: 6,
  staggerDelay: 100,
})
</script>

<template>
  <div
    class="grid"
    :class="`grid-cols-${cols} gap-${gap}`"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

:slotted(*) {
  animation: fadeInScale 0.5s ease-out forwards;
  opacity: 0;
}

:slotted(*:nth-child(1)) { animation-delay: 0ms; }
:slotted(*:nth-child(2)) { animation-delay: 100ms; }
:slotted(*:nth-child(3)) { animation-delay: 200ms; }
:slotted(*:nth-child(4)) { animation-delay: 300ms; }
:slotted(*:nth-child(5)) { animation-delay: 400ms; }
:slotted(*:nth-child(6)) { animation-delay: 500ms; }
</style>
