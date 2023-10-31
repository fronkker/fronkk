<template>
  <div id="fk-input-container">
    <div class="fk-input-label">{{ label }}</div>

    <label for="fk-input-container"
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

             @change="onUpdateModelValue"
      >

      <span v-if="clearable && !!modelValue"
            class="material-icons right clear-icon clickable"
            :style="!!iconName && !leftIcon && 'margin-right: 30px; margin-bottom: 2px;' "
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

const onClear = () => {
  emit('update:modelValue', null)
}

const onUpdateModelValue = ({target}) => {
  emit('update:modelValue', target.value)
}
const onClickIcon = () => {
  emit('click')
}

// 1. validation
// 2. prefix
// 3. suffix
// 4. format

</script>
