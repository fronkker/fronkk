<template>
  <button :type="type"
          class="fk-button fk-py-sm fk-px-md"
          :class="{'dense': dense, 'outlined': outlined}"
          :style="{'backgroundColor': bgColor, 'color': txtColor, 'border-color': borderColor}"
  >
    <i v-if="icon" :class="icon"/>
    {{label}}
    <i v-if="rightIcon" :class="rightIcon"/>
  </button>
</template>
<script setup>
import {ref, watch} from "vue";

const props = defineProps({
  type: {type: String, default: 'button'},
  label: String,
  icon: [String, null],
  rightIcon: [String, null],
  color: {type: String, default: '#3f48cc'},
  textColor: {type: String},

  dense: {type: Boolean, default: false},
  outlined: {type: Boolean, default:false},
})

const bgColor = ref()
const borderColor = ref()
const txtColor = ref('#fff')

watch(() => props.outlined, value => {
  if (value) {
    borderColor.value = props.color
    bgColor.value = '#fff'
    txtColor.value = props.color
  }
}, {immediate: true})
</script>
<style scoped lang="scss">
@import "../assets/css/button";
</style>
