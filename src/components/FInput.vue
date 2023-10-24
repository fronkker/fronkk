<template>
  <div class="f-input-field">
    <div v-text="label"
         class="f-label"
    />
    <input :placeholder="placeholder"
           :value="inputValue"
           :type="type"
           class="f-input"
           :class="{
              'invalid': !valid || !!invalid
           }"
           @input="onUpdateValue"
    >
    <div v-if="!valid || !!invalid"
         v-text="hint"
         class="f-hint"
    />
  </div>
</template>

<script setup>
import {ref} from "vue";

const props = defineProps({
  modelValue: [String, Object],
  placeholder: String,
  label: String,
  hint: String,
  rules: Object,
  type: String,
  invalid: Boolean
})

const inputValue = ref(props.modelValue)

const valid = ref(true)
const proxyRules = ref(props.rules.map(r => new RegExp(r)))

const onUpdateValue = (e) => {
  inputValue.value = e.target.value

  if (!inputValue.value) {
    return valid.value = true
  }

  if (proxyRules.value.length > 0) {
    proxyRules.value.forEach(rule => valid.value = rule.test(inputValue.value))
  }
}
</script>
