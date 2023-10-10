<template>
  <div class="entire-container">
    <button class="f-select-container" @click="onClickSelect">
        <div>{{ selected }}</div>

        <div class="icon-container"/>
    </button>

    <ul v-if="visibleOption" class="f-option-container">
      <li v-for="option of options" class="f-option">
        <div class="f-option-label">{{option[optionValue]}}</div>
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

const visibleOption = ref(true) //FIXME
// const visibleOption = ref(false)
const onClickSelect = () => {
  visibleOption.value = !visibleOption.value
}

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

  background: white;
  outline: 1px solid #{$coolGray20};
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

  background: white;
  outline: 1px solid #{$coolGray20};
  border-radius: 4px;

  list-style:none;
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
  background: #{$surfaceGray};
}
.f-option-label {
  padding-left: 20px;
}
</style>
