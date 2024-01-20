<template>
  <div class="inline-block">
    <label
      :for="props.name"
      :class="[
        'mr-2 block font-medium',
        props.disabled ? 'text-zinc-400' : 'text-zinc-700',
      ]"
    >
      {{ props.label }}
    </label>
    <input
      :id="props.id"
      :type="props.type"
      :name="props.name"
      :value="modelValue"
      :disabled="disabled"
      :min="props.type === 'number' ? props.min : undefined"
      :max="props.type === 'number' ? props.max : undefined"
      class="border-lochmara mr-5 block h-10 w-32 rounded border-2 px-2 disabled:border-zinc-400 disabled:text-zinc-400"
      @input="onInput"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: { type: [String, Number], default: null },
  type: { type: String, default: "text" },
  id: { type: String, required: true },
  label: { type: String, required: true },
  name: { type: String, required: true },
  disabled: { type: Boolean, default: false },
  min: { type: Number, default: null },
  max: { type: Number, default: null },
});

const emit = defineEmits(["update:modelValue", "input"]);

const onInput = ($event: Event) => {
  emit("update:modelValue", ($event.target as HTMLInputElement).value);
  emit("input", ($event.target as HTMLInputElement).value);
};
</script>
