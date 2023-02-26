<template>
  <div class="inline-block">
    <label 
      :for="props.name" 
      :class="['mr-2 block font-medium',
        props.disabled ? 'text-slate-400' : 'text-slate-700']"> 
      {{ props.label }}
    </label>
    <input 
      :type="props.type" 
      :id="props.id" 
      :name="props.name"
      :value="modelValue"
      :disabled="disabled"
      :min="props.type === 'number' ? props.min :null"
      :max="props.type === 'number' ? props.max :null"
      @input="onInput"
      class="block border border-burnt w-32 px-2 rounded h-10 mr-5 disabled:border-slate-400 disabled:text-slate-400" 
    >
  </div>
</template>

<script setup>

const props = defineProps({
  modelValue: { type: [String, Number], default: null },
  type: { type: String, default: 'text' },
  id: { type: String, required: true },
  label: { type: String, required: true },
  name: { type: String, required: true },
  disabled: { type: Boolean, default: false },
  min: { type: Number, default: null },
  max: { type: Number, default: null }
})

const emit = defineEmits(['update:modelValue', 'input'])

const onInput = ($event) => {
  emit('update:modelValue', $event.target.value);
  emit('input', $event.target.value);
}

</script>
