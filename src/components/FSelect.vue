<template>

  <div class="f-select-container">
    <select :value="selected" class="f-select" @change="onChange">
      <option class="f-option"
              v-for="option of options"
              :value="option[optionValue]">
        {{ option[optionLabel] }}
      </option>
    </select>

    <div class="icon-container">

    </div>
  </div>

</template>

<script setup>
import {ref, watch} from 'vue'

const props = defineProps({
  label: String,
  placeholder: String,

  modelValue: [String, Number, Object],

  emitValue: {type: Boolean, default: false},

  options: Array,
  optionValue: {type: String, default: 'id'},
  optionLabel: {type: String, default: 'name'}
})
const emit = defineEmits(['update:modelValue'])

const selected = ref()

watch(() => props.modelValue, value => {
  if (props.emitValue) {
    selected.value = value[props.optionValue]
  } else {
    selected.value = value
  }
}, {
  immediate: true
})
const onChange = ({target}) => {
  if (props.emitValue) {
    emit('update:modelValue', props.options.find(option =>
        String(option[props.optionValue]) === target.value
    ))
  } else {
    emit('update:modelValue', target.value)
  }
}

</script>

<style scoped lang="scss">
@import "src/assets/css/_color.scss";

select {
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
}

select:focus {
  outline: none;
}

.f-select-container {
  width: 288px;
  height: 48px;

  display: flex;
  flex-direction: row;
  align-items: center;

  border: 1px solid #{$coolGray20};
  border-radius: 4px;
}
.icon-container {
  width: 12px;
  height: 7px;

  margin-right: 20px;

  background: url('../assets/img/arrow_down.png') no-repeat center / contain;
}

.f-select {
  margin-left: 20px;

  width: 100%;
  height: 100%;

  border: 0;

  font-size: 16px;
}

.f-option {
  height: 30px;
  background: pink;
  cursor: pointer;
}
</style>
