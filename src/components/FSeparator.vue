<template>
  <div :class="vertical ? 'vertical' : 'horizontal'"  />
</template>

<script setup>
const props = defineProps({
  vertical: {type: Boolean}
})
</script>

<style >
</style>
