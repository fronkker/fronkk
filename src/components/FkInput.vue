<template>
  <input :value="modelValue" />
</template>
<script setup>
const props = defineProps({
  modelValue: [String, Number]
})
</script>

