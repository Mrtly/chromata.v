<template>
  <div class="w-36">
    <div 
      :style="`background-color: ${props.colorRgb}`" 
      :class="`w-20 h-20 border shadow`"/>
    <div class="font-medium">{{ props.colorName }}</div>
    <div class="font-thin text-gray-500">{{ props.colorRgb }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  colorName: { type: String, required: true },
  colorRgb: { type: String, required: true }
})
</script>
