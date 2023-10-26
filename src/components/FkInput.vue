<template>
  <label id="fk-input">
    <span v-if="!!iconName && leftIcon"
          class="material-icons left"
          :class="`${iconClickable && 'clickable'}`"
          @click="onClickIcon"
    >
    {{ iconName }}
  </span>

    <input :value="modelValue"
           class="fk-input"
           :style="!!iconName && (leftIcon ? 'padding-left: 45px' : 'padding-right: 45px')"
           type="type"
    >

    <span v-if="!!iconName && !leftIcon"
          class="material-icons right"
          :class="`${iconClickable && 'clickable'}`"
          @click="onClickIcon"
    >
    {{ iconName }}
  </span>
  </label>
</template>
<script>
export default {
  props: {
    modelValue: [String, Number],
    type: String,
    label: String,
    placeholder: String,
    hintMessage: String,

    /* Icon */
    iconName: [String, null],
    leftIcon: Boolean,
    iconClickable: Boolean
  }
)

const emit = defineEmits(['click'])
const onClickIcon = () => {
  emit('click')
}

// 1. validation
// 2. prefix
// 3. suffix
// 4. format

</script>
