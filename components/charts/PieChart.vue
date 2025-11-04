<script setup lang="ts">
import { computed } from 'vue'

interface Segment {
  label: string
  value: number
  color: string
}

interface Props {
  data: Segment[]
  title?: string
  size?: number
}

const props = withDefaults(defineProps<Props>(), {
  size: 300,
})

const total = computed(() => props.data.reduce((sum, seg) => sum + seg.value, 0))

const segments = computed(() => {
  let currentAngle = -90
  return props.data.map((segment) => {
    const percentage = (segment.value / total.value) * 100
    const angle = (segment.value / total.value) * 360
    const startAngle = currentAngle
    const endAngle = currentAngle + angle

    const startRad = (startAngle * Math.PI) / 180
    const endRad = (endAngle * Math.PI) / 180

    const x1 = 50 + 45 * Math.cos(startRad)
    const y1 = 50 + 45 * Math.sin(startRad)
    const x2 = 50 + 45 * Math.cos(endRad)
    const y2 = 50 + 45 * Math.sin(endRad)

    const largeArcFlag = angle > 180 ? 1 : 0

    const path = `M 50 50 L ${x1} ${y1} A 45 45 0 ${largeArcFlag} 1 ${x2} ${y2} Z`

    currentAngle = endAngle

    return {
      ...segment,
      path,
      percentage: percentage.toFixed(0),
      startAngle,
      endAngle,
    }
  })
})
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    <h3 v-if="title" class="text-lg font-semibold">{{ title }}</h3>

    <div class="relative" :style="{ width: size + 'px', height: size + 'px' }">
      <svg :width="size" :height="size" viewBox="0 0 100 100" class="transform rotate-0">
        <g v-for="(segment, index) in segments" :key="index">
          <path
            :d="segment.path"
            :fill="segment.color"
            :opacity="0.8"
            class="transition-all duration-300 hover:opacity-100 cursor-pointer"
            :style="{ transformOrigin: '50% 50%' }"
          >
            <animate
              attributeName="opacity"
              :values="`0;${0.8};${0.8}`"
              :dur="`${0.5 + index * 0.1}s`"
              fill="freeze"
            />
          </path>
        </g>

        <circle cx="50" cy="50" r="20" fill="#0a0a0a" />
      </svg>
    </div>

    <div class="grid grid-cols-2 gap-2 text-sm">
      <div
        v-for="(segment, index) in segments"
        :key="index"
        class="flex items-center gap-2 p-2 rounded hover:bg-gray-800/50 transition-all duration-200"
      >
        <div
          class="w-4 h-4 rounded"
          :style="{ backgroundColor: segment.color }"
        ></div>
        <div class="flex-1">
          <div class="font-medium">{{ segment.label }}</div>
          <div class="text-xs opacity-70">{{ segment.percentage }}%</div>
        </div>
      </div>
    </div>
  </div>
</template>
