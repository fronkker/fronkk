<template>
  <div :class="vertical ? 'vertical' : 'horizontal'" />
</template>

<script setup>
const props = defineProps({
  vertical: {type: Boolean}
})
</script>

<style scoped>
.horizontal {
  width: 100%;
  height: 1px;
  background: #eeeeee;
}

.vertical {
  height: 100%;
  width: 1px;
  background: #eeeeee;
}
</style>
