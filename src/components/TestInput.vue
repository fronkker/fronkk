<template>
  <div class="f-input-field">
    <div v-text="label" class="f-label"/>
    <input placeholder="ajd" :value="inputValue" class="f-input"
           :type="type"
           @input="onUpdateValue"
           :class="{
              'invalid': !valid || !!invalid
           }"
    >
    <div v-if="!valid || !!invalid" v-text="hint" class="f-hint"/>
  </div>
</template>

<script setup>
import {ref} from "vue";

const props = defineProps({
  modelValue: [String, Object, null],
  label: [String, null],
  hint: [String, null],
  rules: [Object, null],
  type: [String, null],
  invalid: [Boolean, null]
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

<style scoped lang="scss">
@import "../assets/css/_color";

.f-input-field {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.f-label {
  color: #{$gray500};
  font-size: 15px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.5px;
  text-align: left;
}

.f-input {
  border: 1px solid #{$gray200};
  padding: 14px 13px 14px 13px;
  width: 200px;
  height: 10px;
  border-radius: 4px;
}

.f-input:focus {
  &.invalid {
    outline: 1px solid #{$error};
  }
}

.invalid {
  border: 1px solid #{$error};
}

.f-hint {
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.5px;
  text-align: left;
  color: #{$error};
}
</style>