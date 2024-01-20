<template>
  <div class="flex min-w-36 flex-col gap-1">
    <div
      :style="`background-color: ${colorRgb}`"
      :class="`border-md h-16 w-16 rounded-md shadow`"
    />
    <div class="font-medium tracking-wide">
      {{ colorName }}
    </div>
    <div class="font-thin text-gray-500">
      {{ colorRgb }}
    </div>
    <div class="font-thin text-gray-500">
      {{ colorHex }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  colorName: { type: String, required: true },
  colorRgb: { type: String, required: true },
  colorHex: { type: String },
});

export type ColorSquarieType = {
  name: string;
  hex: string;
  rgb: string;
};
</script>
