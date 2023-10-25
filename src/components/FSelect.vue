<template>
  <div class="entire-container" @focusout="onCloseOption">
    <button class="f-select-container" @click="onOpenOption">
      <div>{{ selected[optionValue] ? selected[optionLabel] : selected }}</div>

      <div class="icon-container"/>
    </button>

    <ul v-if="visibleOption"
        class="f-option-container"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
    >
      <li v-for="option of options"
          class="f-option"
          @click="onChange(option)">
        <div class="f-option-label">{{ option[optionLabel] }}</div>
      </li>
    </ul>
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
const visibleOption = ref(false)

let preventClose = false
const onOpenOption = () => {
  visibleOption.value = !visibleOption.value
}
const onMouseEnter = () => {
  preventClose = true
}
const onMouseLeave = () => {
  preventClose = false
}
const onCloseOption = () => {
  if (!preventClose) {
    visibleOption.value = false
  }
}

watch(() => props.modelValue, value => {
  if (props.emitValue) {
    selected.value = props.options.find(option =>
        option[props.optionValue] === value
    )
  } else {
    selected.value = value
  }
}, {
  immediate: true
})
const onChange = (changedValue) => {
  emit('update:modelValue', props.emitValue ? changedValue[props.optionValue] : changedValue)

  preventClose = false
  onCloseOption()
}


const setVisibleOption = (value) => {
  visibleOption.value = value
}

defineExpose({setVisibleOption})

</script>

<style scoped lang="scss">
select {
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
}

button {
  //border: none;
  //padding-left: 20px;
  //padding-right: 20px;
  //font-size: 16px;
}

select:focus {
  outline: none;
}

.entire-container {
  width: 288px;
  height: 48px;

  position: relative;
}

.f-select-container {
  width: inherit;
  height: inherit;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border: none;

  padding-left: 20px;
  padding-right: 20px;
  font-size: 16px;

  background: white;
  outline: 1px solid #DDE1E6;
  border-radius: 4px;
}

.icon-container {
  width: 12px;
  height: 7px;

  background: url('../assets/img/arrow_down.png') no-repeat center / contain;
}

.f-select {
  width: 100%;
  height: 100%;

  border: 0;

  font-size: 16px;
}

ul {
  margin-top: 5px;
}

.f-option-container {
  width: inherit;
  height: fit-content;

  position: absolute;
  z-index: 9999;

  background: white;
  outline: 1px solid #DDE1E6;
  border-radius: 4px;

  list-style: none;
  padding-left: 0px;
}

.f-option {
  height: 33px;

  display: flex;
  align-items: center;
  justify-content: left;

  cursor: pointer;
}

.f-option:hover {
  background: #f6f6f6;
}

.f-option-label {
  padding-left: 20px;
}
</style>
