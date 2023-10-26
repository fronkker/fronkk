<template>
  <div id="fk-input">
    <span v-if="!!iconName && leftIcon"
          class="material-icons left"
          :class="`${iconClickable && 'clickable'}`"
          @click="onClickIcon"
    >
    {{ iconName }}
  </span>

    <input :value="modelValue"
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
  </div>
</template>
<script>
export default {
  props: {
    modelValue: [String, Number],
    type: String,

    /* Icon */
    iconName: [String, null],
    leftIcon: Boolean,
    iconClickable: Boolean
  },
  setup(props) {
    const onClickIcon = () => {
      console.log('icon Click !!!')
    }

    return {
      onClickIcon
    }
  }
}

// 1. validation
// 2. prefix
// 3. suffix
// 4. format

</script>
