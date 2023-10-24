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

</script>
