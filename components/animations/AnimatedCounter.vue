<script setup lang="ts">
import { useAnimatedCounter } from '../shared/composables'

interface Props {
  target: number
  duration?: number
  delay?: number
  suffix?: string
  prefix?: string
  decimals?: number
}

const props = withDefaults(defineProps<Props>(), {
  duration: 2000,
  delay: 0,
  suffix: '',
  prefix: '',
  decimals: 0,
})

const count = useAnimatedCounter(props.target, props.duration, props.delay)
</script>

<template>
  <span class="font-bold tabular-nums">
    {{ prefix }}{{ count.toFixed(decimals) }}{{ suffix }}
  </span>
</template>
</invoke>