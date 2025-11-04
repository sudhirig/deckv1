<script setup lang="ts">
interface Row {
  metric: string
  y1: string | number
  y2: string | number
  y3: string | number
}

interface Props {
  rows: Row[]
  highlightRow?: number
}

const props = defineProps<Props>()
</script>

<template>
  <div class="overflow-x-auto">
    <table class="w-full text-xs border-collapse">
      <thead>
        <tr class="border-b border-gray-700">
          <th class="text-left p-2 font-semibold">Metric</th>
          <th class="text-right p-2 font-semibold">Y1</th>
          <th class="text-right p-2 font-semibold">Y2</th>
          <th class="text-right p-2 font-semibold">Y3</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, index) in rows"
          :key="index"
          class="border-b border-gray-800 transition-colors duration-200 hover:bg-gray-800/50"
          :class="{ 'bg-teal-900/20': highlightRow === index }"
        >
          <td class="p-2 font-medium">{{ row.metric }}</td>
          <td class="text-right p-2">{{ row.y1 }}</td>
          <td class="text-right p-2">{{ row.y2 }}</td>
          <td class="text-right p-2">{{ row.y3 }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
