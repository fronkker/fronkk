<template>
  <button
    :type="type"
    class="fk-button fk-py-sm fk-px-md"
    :class="{ dense, outlined }"
    :style="{
      backgroundColor: bgColor,
      color: txtColor,
      'border-color': borderColor,
    }"
  >
    <i v-if="icon" :class="icon"/>
    {{ label }}

    <i v-if="rightIcon" :class="rightIcon"/>
  </button>
</template>
<script setup>
import {ref, watch} from "vue";

const props = defineProps({
  type: {type: String, default: "button"},
  label: String,
  icon: [String, null],
  rightIcon: [String, null],
  color: {type: String, default: "#3f48cc"},
  textColor: {type: String, default: "#fff"},

  dense: {type: Boolean, default: false},
  outlined: {type: Boolean, default: false},
});

const bgColor = ref();
const borderColor = ref();
const txtColor = ref("#fff");

watch(
  () => props,
  ({outlined, color, textColor}) => {
    if (outlined) {
      borderColor.value = color;
      bgColor.value = "#fff";
      txtColor.value = color;
    } else {
      bgColor.value = color
      txtColor.value = textColor
    }
  },
  {immediate: true, deep: true},
);
</script>
<style scoped lang="scss">
@import "../assets/css/button";
</style>
