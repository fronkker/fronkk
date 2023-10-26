<template>
  <div id="fk-input-container">
    <div class="fk-input-label">{{ label }}</div>

    <label for="fk-input-container"
           @focusin="onFocus"
           @focusout.prevent="onBlur"
    >
      <span v-if="!!iconName && leftIcon"
            class="material-icons left"
            :class="`${iconClickable && 'clickable'}`"
            @click="onClickIcon"
      >
    {{ iconName }}
  </span>

      <input :value="modelValue"
             :placeholder="placeholder"
             class="fk-input"
             :style="!!iconName && (leftIcon ? 'padding-left: 45px' : 'padding-right: 45px')"
             type="type"
      >


      <span v-if="clearable && focused"
            class="material-icons right clear-icon clickable"
            :style="!!iconName && !leftIcon && 'padding-right: 30px; margin-bottom: 2px;' "
            @click="onClear"
      >
        close
      </span>
      <span v-if="!!iconName && !leftIcon"
            class="material-icons right"
            :class="`${iconClickable && 'clickable'}`"
            @click="onClickIcon"
      >
    {{ iconName }}
    </span>
    </label>
    <div class="fk-input-hint-msg">{{ hintMessage }}</div>
  </div>
</template>
<script setup>
import {ref} from "vue";

const props = defineProps({
  modelValue: [String, Number],
  type: String,

  label: String,
  placeholder: String,
  hintMessage: String,

  clearable: Boolean,

  /* Icon */
  iconName: [String, null],
  leftIcon: Boolean,
  iconClickable: Boolean
})

const emit = defineEmits(['click', 'update:modelValue'])

const focused = ref()
let stop = false
const onFocus = () => {
  console.log('onFocus')
  focused.value = true
}

// TODO on Blur랑 on Clear를 구분해야돼`~~`... clear 해야하는데 자꾸 blur 함 ㅠ
const onBlur = ({target}) => {
  if (props.clearable && stop) return
  console.log('onBlur')

  emit('update:modelValue', target.value)
  focused.value = false
}

const onClear = () => {
  stop = true
  console.log('onClear')

  focused.value = false
  emit('update:modelValue', null)

  stop = false
}
const onClickIcon = () => {
  console.log('!!!')
  emit('click')
}

// 1. validation
// 2. prefix
// 3. suffix
// 4. format

</script>
