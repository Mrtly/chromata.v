<template>
  <div class="w-36">
    <div 
      :style="`background-color: ${colorRgb}`" 
      :class="`w-20 h-20 border shadow`"/>
    <div class="font-medium">{{ colorName }}</div>
    <div class="font-thin text-gray-500">{{ colorRgb }}</div>
  </div>
</template>

<script setup>
defineProps({
  colorName: { type: String, required: true },
  colorRgb: { type: String, required: true }
})
</script>
