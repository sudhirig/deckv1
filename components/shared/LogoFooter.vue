<template>
  <div class="logo-footer">
    <div class="flex items-center gap-4">
      <div class="capital-global-text text-xs font-bold tracking-wider opacity-90 hover:opacity-100 transition-opacity">
        CAPITAL GLOBAL
      </div>
      <div class="text-xs text-gray-500">|</div>
      <div class="text-xs text-gray-400">
        Page <span class="font-semibold text-white">{{ currentPage }}</span> of {{ totalPages }}
      </div>
      <div class="text-xs text-gray-500">|</div>
      <div class="text-xs text-gray-400">
        info@capital-global.com
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $slidev } = useSlideContext()

const currentPage = computed(() => {
  try {
    return $slidev?.nav?.currentPageNo ?? 1
  } catch {
    return 1
  }
})

const totalPages = computed(() => {
  try {
    return $slidev?.nav?.total ?? 30
  } catch {
    return 30
  }
})
</script>

<style scoped>
.logo-footer {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
